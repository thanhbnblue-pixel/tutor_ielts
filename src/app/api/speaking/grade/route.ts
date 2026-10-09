import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI, Type } from '@google/genai';
import { globalAiRateLimiter, getClientIp } from '@/lib/rate-limit';

const speakingResponseSchema = {
  type: Type.OBJECT,
  properties: {
    overall_band: { type: Type.NUMBER, description: 'Overall IELTS Speaking Band score (0.0 to 9.0 in increments of 0.5)' },
    sub_scores: {
      type: Type.OBJECT,
      properties: {
        fc: { type: Type.NUMBER, description: 'Fluency and Coherence score (0.0 - 9.0)' },
        pr: { type: Type.NUMBER, description: 'Pronunciation score (0.0 - 9.0)' },
        lr: { type: Type.NUMBER, description: 'Lexical Resource score (0.0 - 9.0)' },
        gra: { type: Type.NUMBER, description: 'Grammatical Range and Accuracy score (0.0 - 9.0)' },
      },
      required: ['fc', 'pr', 'lr', 'gra'],
    },
    feedback: {
      type: Type.OBJECT,
      properties: {
        fc: { type: Type.STRING, description: 'Feedback on Fluency & Coherence in Vietnamese' },
        pr: { type: Type.STRING, description: 'Feedback on Pronunciation & Intonation in Vietnamese' },
        lr: { type: Type.STRING, description: 'Feedback on Lexical Resource in Vietnamese' },
        gra: { type: Type.STRING, description: 'Feedback on Grammar Range & Accuracy in Vietnamese' },
      },
      required: ['fc', 'pr', 'lr', 'gra'],
    },
    hesitations: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: 'List of detected filler words (e.g. um, ah, like) or unnatural pauses',
    },
    area_upgrade: {
      type: Type.OBJECT,
      properties: {
        answer: { type: Type.STRING, description: 'Direct answer sentence upgraded to Band 6.5+' },
        reason: { type: Type.STRING, description: 'Logical reason with academic cohesion' },
        example: { type: Type.STRING, description: 'Concrete real-life example' },
        alternative: { type: Type.STRING, description: 'Alternative or extended perspective' },
      },
      required: ['answer', 'reason', 'example', 'alternative'],
    },
  },
  required: ['overall_band', 'sub_scores', 'feedback', 'hesitations', 'area_upgrade'],
};

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  if (globalAiRateLimiter.isRateLimited(ip)) {
    return NextResponse.json({ error: 'Quá nhiều yêu cầu. Vui lòng thử lại sau 1 phút.' }, { status: 429 });
  }

  try {
    const body = await req.json();
    const { topic, question, duration_seconds, audio_base64, mime_type, direct_transcript } = body;

    // Giới hạn kích thước file âm thanh (Base64) khoảng 10MB (thêm padding)
    if (audio_base64 && audio_base64.length > 15 * 1024 * 1024) {
      return NextResponse.json({ error: 'File ghi âm quá lớn (vượt giới hạn 10MB).' }, { status: 413 });
    }

    let transcript = direct_transcript || '';

    // Step 1: STT via Groq Whisper if audio is provided
    const groqKey = process.env.GROQ_API_KEY;
    if (audio_base64 && groqKey && !transcript) {
      try {
        const audioBuffer = Buffer.from(audio_base64, 'base64');
        const formData = new FormData();
        const extension = mime_type && mime_type.includes('mp4') ? 'mp4' : 'webm';
        const audioBlob = new Blob([audioBuffer], { type: mime_type || 'audio/webm' });
        formData.append('file', audioBlob, `recording.${extension}`);
        formData.append('model', 'whisper-large-v3');
        formData.append('temperature', '0.0');
        formData.append('language', 'en');

        const groqRes = await fetch('https://api.groq.com/openai/v1/audio/transcriptions', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${groqKey}`,
          },
          body: formData,
        });

        if (groqRes.ok) {
          const groqData = await groqRes.json();
          transcript = groqData.text || '';
        } else {
          console.warn('Groq STT failed, status:', groqRes.status);
        }
      } catch (sttErr) {
        console.error('Groq STT processing error:', sttErr);
      }
    }

    // Step 2: Graceful degradation if no API keys are configured (AGENT_WISDOM.md Rule 7)
    const geminiKey = process.env.GEMINI_API_KEY;
    if (!transcript && !geminiKey) {
      transcript = "Well, honestly speaking, I really love my hometown because it has a lot of friendly people and good food. However, sometimes the traffic is very crowded, so it takes me a long time to travel around.";
    }

    if (!transcript || transcript.trim().length < 5) {
      return NextResponse.json(
        { error: 'Không nhận diện được giọng nói hoặc âm thanh quá ngắn. Vui lòng nói to và rõ hơn vào micro.' },
        { status: 400 }
      );
    }

    // Calculate Words Per Minute (WPM)
    const words = transcript.trim().split(/\s+/).length;
    const durationMin = Math.max(duration_seconds || 15, 5) / 60;
    const wpm = Math.round(words / durationMin);

    // If Gemini key is not configured, return educational mock evaluation
    if (!geminiKey) {
      return NextResponse.json({
        is_mock: true,
        transcript,
        words_per_minute: wpm,
        overall_band: 5.5,
        sub_scores: { fc: 5.5, pr: 5.0, lr: 5.5, gra: 5.5 },
        feedback: {
          fc: `Tốc độ nói đạt ${wpm} WPM (Mức tiêu chuẩn IELTS là 110-140 WPM). Bạn có phản xạ trả lời nhanh nhưng cần hạn chế các khoảng ngắt quãng.`,
          pr: 'Phát âm tương đối rõ ràng. Cần chú ý phát âm chuẩn các âm đuôi /s/, /t/ và ngữ điệu lên xuống tự nhiên khi kết thúc ý.',
          lr: 'Vốn từ vựng giao tiếp tự nhiên. Để đạt 6.5, hãy thay các từ đơn giản như "good food" thành "culinary specialties", "friendly people" thành "welcoming community".',
          gra: 'Cấu trúc câu đa dạng, đã biết sử dụng liên từ "however", "because". Cần phát triển thêm cấu trúc đảo ngữ hoặc mệnh đề phân từ.',
        },
        hesitations: ['um', 'well honestly', 'so'],
        area_upgrade: {
          answer: 'Without a doubt, my hometown holds a special place in my heart, primarily due to its close-knit community.',
          reason: 'What makes it particularly appealing is the vibrant culinary culture and the warmth of the local residents.',
          example: 'For instance, street vendors always greet regular customers with genuine hospitality, creating an atmosphere that is rarely found in bustling metropolises.',
          alternative: 'That being said, traffic congestion during peak hours remains a minor drawback that local authorities need to address.',
        },
        note: 'Đang ở chế độ chấm mẫu (Chưa cấu hình GEMINI_API_KEY / GROQ_API_KEY). Thêm keys vào .env.local để chuyển sang AI thật.',
      });
    }

    // Step 3: Evaluate with Gemini 2.5 Flash
    const ai = new GoogleGenAI({ apiKey: geminiKey });

    const systemPrompt = `You are a certified Cambridge IELTS Speaking Examiner and an expert English Pronunciation Coach.
Evaluate the following IELTS Speaking answer with extreme accuracy based on official IELTS Speaking Band Descriptors.

Topic: "${topic || 'General Topic'}"
Question: "${question || 'IELTS Speaking Question'}"
Student Spoken Transcript:
"""
${transcript}
"""
Speech Duration: ${duration_seconds} seconds.
Estimated Speech Rate: ${wpm} Words Per Minute (Standard is 110-140 WPM).

STRICT GUIDELINES:
1. FC (Fluency and Coherence): Grade based on speech rate, hesitation, and repetition. If WPM is low or hesitation markers are frequent, penalize accordingly.
2. PR (Pronunciation): Focus on clarity. Identify exact mispronounced words if possible.
3. LR (Lexical Resource): Look for idiomatic language, academic vocabulary, and paraphrase ability.
4. GRA (Grammatical Range and Accuracy): Grade accuracy of tenses and complex structures.

CORRECTIONS (CRITICAL):
- Point out specific unnatural phrasing, grammar mistakes, or hesitation markers found in the transcript.
- Provide the corrected version.
- Explain the grammar or vocabulary rule in Vietnamese.

UPGRADED RESPONSE (A.R.E.A Framework):
- In 'area_upgrade', provide a cohesive Band 7.5+ model response based on the student's exact ideas.
- Must use A.R.E.A: Answer (Direct), Reason (Why), Example (Vivid illustration), Alternative (Counter perspective).
- DO NOT invent new arguments. Elevate the student's existing points.
- Output MUST conform strictly to the JSON schema. Feedback explanations must be in clear Vietnamese.`;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: systemPrompt,
        config: {
          temperature: 0.1,
          responseMimeType: 'application/json',
          responseSchema: speakingResponseSchema,
        },
      });

      const text = response.text;
      if (!text) throw new Error('Gemini returned empty response');
      const parsed = JSON.parse(text);

      return NextResponse.json({
        ...parsed,
        transcript,
        words_per_minute: wpm,
      });
    } catch (genError: unknown) {
      console.error('Gemini 3.8 Flash error, trying flash-lite:', genError);

      const fallback = await ai.models.generateContent({
        model: 'gemini-flash-lite-latest',
        contents: systemPrompt,
        config: {
          temperature: 0.1,
          responseMimeType: 'application/json',
          responseSchema: speakingResponseSchema,
        },
      });

      const fallbackText = fallback.text;
      if (!fallbackText) throw new Error('Fallback returned empty response');
      const parsedFallback = JSON.parse(fallbackText);

      return NextResponse.json({
        ...parsedFallback,
        transcript,
        words_per_minute: wpm,
      });
    }
  } catch (err: unknown) {
    console.error('Speaking assessment API error:', err);
    const msg = err instanceof Error ? err.message : 'Lỗi hệ thống';
    return NextResponse.json(
      { error: 'Không thể chấm điểm phần nói lúc này: ' + msg },
      { status: 500 }
    );
  }
}


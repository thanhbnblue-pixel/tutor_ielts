import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI, Type } from '@google/genai';
import { supabase } from '@/lib/supabase';

export const maxDuration = 60; // Prevent Vercel function timeout

const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
const groqKey = process.env.GROQ_API_KEY;
const geminiKey = process.env.GEMINI_API_KEY;

const speakingResponseSchema = {
  type: Type.OBJECT,
  properties: {
    overall_band: { type: Type.NUMBER },
    sub_scores: {
      type: Type.OBJECT,
      properties: {
        fc: { type: Type.NUMBER },
        pr: { type: Type.NUMBER },
        lr: { type: Type.NUMBER },
        gra: { type: Type.NUMBER },
      },
      required: ['fc', 'pr', 'lr', 'gra'],
    },
    feedback: {
      type: Type.OBJECT,
      properties: {
        fc: { type: Type.STRING },
        pr: { type: Type.STRING },
        lr: { type: Type.STRING },
        gra: { type: Type.STRING },
      },
      required: ['fc', 'pr', 'lr', 'gra'],
    },
    hesitations: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
    },
    area_upgrade: {
      type: Type.OBJECT,
      properties: {
        answer: { type: Type.STRING },
        reason: { type: Type.STRING },
        example: { type: Type.STRING },
        alternative: { type: Type.STRING },
      },
      required: ['answer', 'reason', 'example', 'alternative'],
    },
  },
  required: ['overall_band', 'sub_scores', 'feedback', 'hesitations', 'area_upgrade'],
};

async function sendMessage(chatId: number, text: string) {
  if (!telegramToken) return;
  await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'Markdown' }),
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body.message) return NextResponse.json({ ok: true });

    const chatId = body.message.chat.id;
    let transcript = '';
    let durationSeconds = 15;

    // Send processing message
    await sendMessage(chatId, '⏳ Bắt đầu phân tích bài nói của bạn...');

    // Handle Text message
    if (body.message.text) {
      if (body.message.text === '/start') {
        await sendMessage(chatId, 'Chào bạn! Hãy gửi một đoạn tin nhắn thoại (voice message) hoặc văn bản tiếng Anh để tôi chấm điểm IELTS Speaking nhé!');
        return NextResponse.json({ ok: true });
      }
      transcript = body.message.text;
    }
    // Handle Voice message
    else if (body.message.voice && telegramToken && groqKey) {
      const voice = body.message.voice;
      durationSeconds = voice.duration || 15;
      
      const getFileRes = await fetch(`https://api.telegram.org/bot${telegramToken}/getFile?file_id=${voice.file_id}`);
      const fileData = await getFileRes.json();
      
      if (fileData.ok) {
        const filePath = fileData.result.file_path;
        const fileUrl = `https://api.telegram.org/file/bot${telegramToken}/${filePath}`;
        
        const audioRes = await fetch(fileUrl);
        const audioBlob = await audioRes.blob();
        
        const formData = new FormData();
        // Groq explicitly supports .ogg
        formData.append('file', audioBlob, 'voice.ogg');
        formData.append('model', 'whisper-large-v3');
        formData.append('temperature', '0.0');
        formData.append('language', 'en');

        const groqRes = await fetch('https://api.groq.com/openai/v1/audio/transcriptions', {
          method: 'POST',
          headers: { Authorization: `Bearer ${groqKey}` },
          body: formData,
        });

        if (groqRes.ok) {
          const groqData = await groqRes.json();
          transcript = groqData.text || '';
        } else {
          console.error('Groq STT error', await groqRes.text());
        }
      }
    }

    if (!transcript || transcript.trim().length < 5) {
      await sendMessage(chatId, '❌ Lỗi: Không nghe rõ nội dung hoặc câu trả lời quá ngắn. Bạn thử lại nhé!');
      return NextResponse.json({ ok: true });
    }

    if (!geminiKey) {
      await sendMessage(chatId, '⚠️ Lỗi cấu hình: GEMINI_API_KEY bị thiếu trên server.');
      return NextResponse.json({ ok: true });
    }

    // Evaluate with Gemini
    const ai = new GoogleGenAI({ apiKey: geminiKey });
    const durationMin = Math.max(durationSeconds, 5) / 60;
    const wpm = Math.round(transcript.trim().split(/\s+/).length / durationMin);
    
    const systemPrompt = `You are a certified Cambridge IELTS Speaking Examiner and an expert English Pronunciation Coach.
Evaluate the following IELTS Speaking answer with extreme accuracy based on official IELTS Speaking Band Descriptors.

Student Spoken Transcript:
"""
${transcript}
"""
Speech Duration: ${durationSeconds} seconds.
Estimated Speech Rate: ${wpm} Words Per Minute.

STRICT GUIDELINES:
1. FC (Fluency and Coherence): Grade based on speech rate, hesitation, and repetition.
2. PR (Pronunciation): Focus on clarity. Identify exact mispronounced words if possible.
3. LR (Lexical Resource): Look for idiomatic language, academic vocabulary, and paraphrase ability.
4. GRA (Grammatical Range and Accuracy): Grade accuracy of tenses and complex structures.

UPGRADED RESPONSE (A.R.E.A Framework):
- In 'area_upgrade', provide a cohesive Band 7.5+ model response based on the student's exact ideas.
- Must use A.R.E.A: Answer (Direct), Reason (Why), Example (Vivid illustration), Alternative (Counter perspective).
- DO NOT invent new arguments. Elevate the student's existing points.
- Output MUST conform strictly to the JSON schema. Feedback explanations must be in clear Vietnamese.`;

    let parsed;
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
      if (!text) throw new Error('Empty Gemini response');
      parsed = JSON.parse(text);
    } catch (error) {
      console.error('Gemini primary model failed, falling back to lite', error);
      const fallbackResponse = await ai.models.generateContent({
        model: 'gemini-flash-lite-latest',
        contents: systemPrompt,
        config: {
          temperature: 0.1,
          responseMimeType: 'application/json',
          responseSchema: speakingResponseSchema,
        },
      });
      const text = fallbackResponse.text;
      if (!text) throw new Error('Empty Gemini fallback response');
      parsed = JSON.parse(text);
    }

    // Prepare response message
    const replyText = `🎯 *IELTS Speaking Result*
    
*Band Score:* ${parsed.overall_band}
- Trôi chảy (FC): ${parsed.sub_scores.fc}
- Phát âm (PR): ${parsed.sub_scores.pr}
- Từ vựng (LR): ${parsed.sub_scores.lr}
- Ngữ pháp (GRA): ${parsed.sub_scores.gra}

📝 *Transcript nhận diện:*
_${transcript}_

🗣️ *Góp ý (Feedback):*
- *FC:* ${parsed.feedback.fc}
- *PR:* ${parsed.feedback.pr}
- *LR:* ${parsed.feedback.lr}
- *GRA:* ${parsed.feedback.gra}

✨ *Mẫu câu Band 7.5+ (A.R.E.A):*
*Answer:* ${parsed.area_upgrade.answer}
*Reason:* ${parsed.area_upgrade.reason}
*Example:* ${parsed.area_upgrade.example}
*Alternative:* ${parsed.area_upgrade.alternative}`;

    await sendMessage(chatId, replyText);

    // Save to Supabase DB (using a default slot 1 or based on Telegram ID linking logic)
    const submission = {
      id: crypto.randomUUID(), // Explicitly provide an ID
      slot_id: 1, // Default mapping
      part: 1,
      topic: 'Telegram Practice',
      question: 'On-the-go practice',
      transcript,
      duration_seconds: durationSeconds,
      words_per_minute: wpm,
      overall_band_raw: parsed.overall_band * 10,
      sub_scores_raw: {
        fc: parsed.sub_scores.fc * 10,
        pr: parsed.sub_scores.pr * 10,
        lr: parsed.sub_scores.lr * 10,
        gra: parsed.sub_scores.gra * 10,
      },
      feedback: parsed.feedback,
      hesitations: parsed.hesitations,
      area_upgrade: parsed.area_upgrade,
    };
    
    const { error: dbError } = await supabase.from('submissions_speaking').insert([submission]);
    if (dbError) {
      console.error('Failed to sync Telegram speaking log to Supabase:', dbError);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Telegram Webhook Error:', error);
    // Notify user of catastrophic failure
    try {
      const body = await req.json().catch(() => null);
      if (body?.message?.chat?.id) {
        await sendMessage(body.message.chat.id, '❌ Đã xảy ra lỗi hệ thống, vui lòng thử lại sau.');
      }
    } catch(e) {}
    return NextResponse.json({ ok: true }); // Always return 200 OK so Telegram doesn't retry infinitely
  }
}


import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI, Type } from '@google/genai';
import { globalAiRateLimiter, getClientIp } from '@/lib/rate-limit';

// Rubric schema for structured output
const writingResponseSchema = {
  type: Type.OBJECT,
  properties: {
    overall_band: { type: Type.NUMBER, description: 'Overall IELTS Band score between 0.0 and 9.0 in increments of 0.5' },
    sub_scores: {
      type: Type.OBJECT,
      properties: {
        tr: { type: Type.NUMBER, description: 'Task Response or Task Achievement score (0.0 - 9.0)' },
        cc: { type: Type.NUMBER, description: 'Coherence and Cohesion score (0.0 - 9.0)' },
        lr: { type: Type.NUMBER, description: 'Lexical Resource score (0.0 - 9.0)' },
        gra: { type: Type.NUMBER, description: 'Grammatical Range and Accuracy score (0.0 - 9.0)' },
      },
      required: ['tr', 'cc', 'lr', 'gra'],
    },
    detailed_feedback: {
      type: Type.OBJECT,
      properties: {
        tr: { type: Type.STRING, description: 'Detailed feedback on Task Response in Vietnamese' },
        cc: { type: Type.STRING, description: 'Detailed feedback on Coherence & Cohesion in Vietnamese' },
        lr: { type: Type.STRING, description: 'Detailed feedback on Lexical Resource in Vietnamese' },
        gra: { type: Type.STRING, description: 'Detailed feedback on Grammatical Range & Accuracy in Vietnamese' },
      },
      required: ['tr', 'cc', 'lr', 'gra'],
    },
    corrections: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          original: { type: Type.STRING, description: 'The exact original erroneous word or short phrase from the essay' },
          corrected: { type: Type.STRING, description: 'The corrected native academic English replacement' },
          type: { type: Type.STRING, description: 'Error type: grammar, vocab, spelling, or cohesion' },
          explanation: { type: Type.STRING, description: 'Concise explanation in Vietnamese of why this is an error and the grammar rule' },
        },
        required: ['original', 'corrected', 'type', 'explanation'],
      },
    },
    upgraded_essay: {
      type: Type.STRING,
      description: 'The student essay rewritten to Band 6.5 - 7.0 standard, keeping their exact same ideas and arguments but upgrading discourse markers, academic collocations, and grammatical range.',
    },
  },
  required: ['overall_band', 'sub_scores', 'detailed_feedback', 'corrections', 'upgraded_essay'],
};

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  if (globalAiRateLimiter.isRateLimited(ip)) {
    return NextResponse.json({ error: 'Quá nhiều yêu cầu. Vui lòng thử lại sau 1 phút.' }, { status: 429 });
  }

  try {
    const body = await req.json();
    const { task_type, prompt_title, essay_text, word_count, exam_track = 'ielts' } = body;

    // Sanitize essay to prevent prompt injection
    const sanitized_essay = typeof essay_text === 'string' 
      ? essay_text.replace(/```/g, '').replace(/"""/g, '').slice(0, 4000)
      : '';

    if (!sanitized_essay || sanitized_essay.trim().length < 20) {
      return NextResponse.json(
        { error: 'Bài viết quá ngắn để có thể chấm điểm (tối thiểu 20 từ).' },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // Graceful degradation per AGENT_WISDOM.md Rule 7: If API key is not configured, return educational mock evaluation
    if (!apiKey) {
      return NextResponse.json({
        is_mock: true,
        overall_band: 5.5,
        sub_scores: { tr: 5.5, cc: 5.5, lr: 5.5, gra: 5.0 },
        detailed_feedback: {
          tr: 'Bài viết đã trả lời được các yêu cầu cơ bản của đề bài, tuy nhiên các luận điểm giải thích cần phát triển sâu hơn.',
          cc: 'Có sử dụng các từ nối cơ bản (firstly, secondly, however) nhưng liên kết giữa các câu còn mang tính máy móc.',
          lr: 'Vốn từ vựng ở mức độ giao tiếp cơ bản (B1), cần bổ sung thêm các collocations học thuật để đạt mốc 6.5.',
          gra: 'Sử dụng chủ yếu câu đơn và câu ghép cơ bản. Cần bổ sung các cấu trúc câu phức (mệnh đề quan hệ, câu điều kiện, bị động).',
        },
        corrections: [
          {
            original: 'people think that',
            corrected: 'it is widely believed that',
            type: 'vocab',
            explanation: 'Dùng cấu trúc bị động khách quan để tăng tính học thuật thay cho chủ ngữ people.',
          },
          {
            original: 'have a good effect to',
            corrected: 'have a beneficial impact on',
            type: 'vocab',
            explanation: 'Collocation chuẩn học thuật là have an impact ON thay vì effect TO.',
          },
        ],
        upgraded_essay: `It is widely believed that education plays a pivotal role in personal development. While some argue that academic success relies on individual effort, others contend that modern facilities contribute significantly. In my view, both factors are inextricably linked, and a balanced approach is necessary to ensure optimal outcomes.`,
        note: 'Đang ở chế độ chấm điểm mẫu (Chưa cấu hình GEMINI_API_KEY). Thêm GEMINI_API_KEY vào .env.local để chấm bằng Gemini 2.5 Flash thật.',
      });
    }

    const ai = new GoogleGenAI({ apiKey });

    let systemPrompt = `You are an expert ${exam_track.toUpperCase()} Examiner and a highly effective English Tutor.
Evaluate the following ${exam_track.toUpperCase()} Writing task essay with extreme accuracy.

PROMPT: "${prompt_title || 'Writing Prompt'}"
STUDENT ESSAY:
"""
${sanitized_essay}
"""
Word Count: ${word_count} words.

STRICT GUIDELINES (Based on official IELTS Writing Band Descriptors 2023):
1. TR (Task Response): Did the student fully answer the prompt? Are their arguments clear, well-supported, and directly relevant? Penalize generic, rote-memorized arguments.
2. CC (Coherence & Cohesion): Are ideas logically organized into paragraphs? Is there a clear progression? Penalize forced or overly mechanical cohesive devices (e.g., using "Admittedly," "By and large," inappropriately).
3. LR (Lexical Resource): Do they use academic vocabulary naturally? Penalize students heavily if they use "big words" incorrectly or out of context. Reward precise collocations.
4. GRA (Grammatical Range and Accuracy): Is the grammar accurate? Do they use complex structures? Identify the specific grammar rules violated in the corrections.

ANTI-TEMPLATE PENALTY:
- If the essay appears to heavily rely on memorized templates (e.g., "This essay will discuss both views and give a conclusion", "Since the dawn of time"), reduce TR and CC scores by 1.0 band and point it out in the detailed feedback.

CORRECTIONS (CRITICAL FOR LEARNING):
- Extract EXACT erroneous words/phrases from the text.
- Provide natural, academic native-speaker alternatives.
- Explain WHY it was wrong in Vietnamese, referencing specific grammar or vocabulary rules.

UPGRADED ESSAY:
- Rewrite the essay to a Band 7.5+ standard.
- MUST keep the student's original core ideas. Do not change their argument. 
- Upgrade the discourse markers, fix the grammar, and elevate the vocabulary (collocations, precise adjectives).
- In 'upgraded_essay', rewrite the student's essay to a solid/advanced standard, maintaining their original line of reasoning.
- Output MUST strictly conform to the provided JSON schema. Feedback explanations must be in clear Vietnamese.`;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: systemPrompt,
        config: {
          temperature: 0.1, // Keep deterministic to avoid score drift
          responseMimeType: 'application/json',
          responseSchema: writingResponseSchema,
        },
      });

      const text = response.text;
      if (!text) {
        throw new Error('Gemini did not return text response');
      }

      const parsed = JSON.parse(text);
      return NextResponse.json(parsed);
    } catch (genError: unknown) {
      console.error('Gemini 3.8 Flash error, attempting fallback to flash-lite:', genError);
      
      // Fallback to gemini-3.8-flash-lite on quota or latency issues (LESSONS_LEARNED.md)
      const fallbackResponse = await ai.models.generateContent({
        model: 'gemini-flash-lite-latest',
        contents: systemPrompt,
        config: {
          temperature: 0.1,
          responseMimeType: 'application/json',
          responseSchema: writingResponseSchema,
        },
      });

      const fallbackText = fallbackResponse.text;
      if (!fallbackText) throw new Error('Fallback model returned empty response');
      const parsedFallback = JSON.parse(fallbackText);
      return NextResponse.json(parsedFallback);
    }
  } catch (error: unknown) {
    console.error('Writing evaluation API failure:', error);
    const errorMessage = error instanceof Error ? error.message : 'Lỗi hệ thống khi chấm bài.';
    return NextResponse.json(
      { error: 'Không thể chấm điểm bài viết lúc này: ' + errorMessage },
      { status: 500 }
    );
  }
}


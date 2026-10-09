import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import { globalAiRateLimiter, getClientIp } from '@/lib/rate-limit';

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  if (globalAiRateLimiter.isRateLimited(ip)) {
    return NextResponse.json({ error: 'Quá nhiều yêu cầu. Vui lòng thử lại sau 1 phút.' }, { status: 429 });
  }

  try {
    const { question, context } = await req.json();

    if (!question) {
      return NextResponse.json({ error: 'Question is required' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    
    // Graceful degradation per AGENT_WISDOM.md
    if (!apiKey) {
      return NextResponse.json({ 
        text: 'Chức năng AI Tutor hiện đang ở chế độ offline mô phỏng (Chưa cấu hình GEMINI_API_KEY). Để tôi giải thích giả định: Trong tiếng Anh, cấu trúc này thường mang nghĩa nhấn mạnh. Hãy thêm API Key để trò chuyện trực tiếp với AI nhé!' 
      });
    }

    const ai = new GoogleGenAI({ apiKey });

    const systemPrompt = `You are an expert IELTS English Tutor. 
Your student is asking a question while studying the following lesson context:
"""
${context}
"""

Guidelines:
1. Answer the student's question directly, clearly, and concisely in Vietnamese.
2. Focus on grammar, vocabulary, or IELTS strategies relevant to their question.
3. Be encouraging and use simple formatting (bolding, bullet points) if needed.
4. Keep the explanation under 150 words to avoid overwhelming the student.`;

    const responseStream = await ai.models.generateContentStream({
      model: 'gemini-3.8-flash',
      contents: [
        { role: 'user', parts: [{ text: systemPrompt }] },
        { role: 'user', parts: [{ text: `Câu hỏi của học viên: "${question}"` }] }
      ]
    });

    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of responseStream) {
            if (chunk.text) {
              controller.enqueue(new TextEncoder().encode(chunk.text));
            }
          }
        } catch (error) {
          console.error('Stream error:', error);
          controller.enqueue(new TextEncoder().encode('\n[Lỗi kết nối AI]'));
        } finally {
          controller.close();
        }
      }
    });

    return new Response(stream, { 
      headers: { 
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked'
      } 
    });

  } catch (error: unknown) {
    console.error('QA API Error:', error);
    return NextResponse.json(
      { error: 'Lỗi hệ thống khi gọi AI.' },
      { status: 500 }
    );
  }
}

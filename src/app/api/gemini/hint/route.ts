import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { apiKey, problem } = body;

    const geminiKey = apiKey?.trim() || process.env.GEMINI_API_KEY;

    if (!geminiKey) {
      return NextResponse.json(
        {
          error: 'Chưa có Gemini API Key. Vui lòng nhập API Key của bạn vào ô cài đặt hoặc cấu hình biến môi trường GEMINI_API_KEY.',
        },
        { status: 400 }
      );
    }

    if (!problem || !problem.name) {
      return NextResponse.json(
        { error: 'Thiếu thông tin bài tập cần nhận gợi ý.' },
        { status: 400 }
      );
    }

    const prompt = `Bạn là Huấn luyện viên Competitive Programming (CP Coach) cấp Olympic. Hãy đưa ra định hướng tư duy sư phạm cho bài toán Codeforces sau:

THÔNG TIN BÀI TOÁN:
- Tên bài: ${problem.contestId}${problem.index} - ${problem.name}
- Mức độ (Rating): ${problem.rating}
- Các thẻ thuật toán (Tags): ${problem.tags.join(', ')}
- Link bài: ${problem.url}

QUY TẮC SƯ PHẠM:
1. TUYỆT ĐỐI KHÔNG cung cấp code giải hoàn chỉnh (C++/Python/Java) để người học tự lập trình.
2. Trình bày theo 4 phần mạch lạc bằng Markdown:
   ### 💡 1. Quan sát then chốt (Key Observation)
   Chỉ ra tính chất toán học, tính đơn điệu, bất biến hoặc góc nhìn đơn giản hóa đề bài.
   
   ### 🧭 2. Hướng tiếp cận từng bước (Step-by-step Strategy)
   Gợi ý phương pháp (DP trạng thái thế nào, cấu trúc dữ liệu nào phù hợp, thuật toán tham lam vì sao đúng).
   
   ### ⚠️ 3. Bẫy thường gặp & Trường hợp biên (Edge Cases)
   Các test đặc biệt dễ bị Wrong Answer hoặc Time Limit (ví dụ: N=1, tràn số 64-bit int, đồ thị không liên thông, v.v.).
   
   ### ⚡ 4. Độ phức tạp mục tiêu (Target Complexity)
   Thời gian O(...) và bộ nhớ O(...) cần đạt để vượt qua giới hạn thời gian.

Hãy viết bằng Tiếng Việt súc tích, truyền cảm hứng và giúp người luyện tập tự "Aha!" nhận ra hướng làm.`;

    // Gọi Gemini API - Thử gemini-3.6-flash trước
    const modelsToTry = [
      'gemini-3.6-flash',
      'gemini-3.8-flash',
      'gemini-flash-latest',
      'gemini-3.5-flash-lite',
      'gemini-2.5-flash',
    ];
    let lastError: any = null;
    let hintText = '';

    for (const model of modelsToTry) {
      try {
        const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(geminiKey)}`;
        const res = await fetch(geminiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: prompt }],
              },
            ],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 1200,
            },
          }),
        });

        const data = await res.json();
        if (res.ok && data.candidates?.[0]?.content?.parts?.[0]?.text) {
          hintText = data.candidates[0].content.parts[0].text;
          break;
        } else {
          lastError = data.error?.message || `Mã lỗi ${res.status}`;
        }
      } catch (err: any) {
        lastError = err.message;
      }
    }

    if (!hintText) {
      return NextResponse.json(
        {
          error: `Không thể kết nối tới Gemini API. Lỗi từ Google: ${lastError || 'Unknown error'}. Vui lòng kiểm tra lại API Key.`,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      hint: hintText,
      problem,
    });
  } catch (err: any) {
    console.error('Gemini Hint API Error:', err);
    return NextResponse.json(
      { error: err.message || 'Lỗi xử lý yêu cầu Gemini AI.' },
      { status: 500 }
    );
  }
}

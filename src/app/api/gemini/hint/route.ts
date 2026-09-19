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

    const prompt = `Bạn là Huấn luyện viên trưởng Olympic Tin học (IOI Coach) và Chuyên gia Competitive Programming (Grandmaster Codeforces).
Nhiệm vụ của bạn là phân tích sâu, giải chi tiết bài toán Codeforces sau và phân chia lời giải thành các bậc thang gợi ý sư phạm:

THÔNG TIN BÀI TOÁN CODEFORCES:
- Mã bài: ${problem.contestId}${problem.index}
- Tên bài: ${problem.name}
- Mức độ (Rating): ${problem.rating}
- Tags: ${problem.tags.join(', ')}
- Link bài: ${problem.url}

QUY TẮC SƯ PHẠM VÀ YÊU CẦU ĐẦU RA:
1. Hãy giải bài toán "${problem.contestId}${problem.index} - ${problem.name}" theo solution/editorial tối ưu chuẩn xác từ Codeforces.
2. Trả về đúng MỘT đối tượng JSON (với định dạng JSON hợp lệ, các dấu ngoặc kép bên trong chuỗi phải được escape \\", ký tự xuống dòng dùng \\n):
{
  "briefSummary": "Tóm tắt ngắn gọn đề bài trong 2-3 câu bằng tiếng Việt: Bài toán cho gì, yêu cầu tìm gì, mục tiêu cốt lõi.",
  "hint1_basic": "Gợi ý 1 (Cơ bản): Các quan sát đầu tiên khi đọc đề, phân tích các test ví dụ hoặc nhận xét với N nhỏ mà chưa làm lộ thuật toán tối ưu.",
  "hint2_reduction": "Gợi ý 2 (Quy đổi mô hình): Cách đơn giản hóa hoặc đưa bài toán về dạng quen thuộc (toán học, đồ thị, quy hoạch động...).",
  "hint3_key": "Gợi ý 3 (THEN CHỐT - Aha Moment): Điểm mấu chốt quan trọng nhất để phá vỡ bài toán! Tính chất bất biến, tính chất đơn điệu, tham lam tối ưu hoặc cấu trúc dữ liệu chìa khóa.",
  "hint4_algorithm": "Gợi ý 4 (Các bước thuật toán): Trình bày các bước thực hiện chi tiết: tiền xử lý, cấu trúc dữ liệu, công thức truy hồi, cách tính toán ra kết quả.",
  "edgeCases": "Bẫy test và trường hợp biên (Corner Cases): N=1, tràn số 64-bit int (cần dùng long long trong C++), số âm, số 0, đồ thị rời rạc...",
  "solutionCode": "Lời giải hoàn chỉnh và Code C++: Phân tích đầy đủ logic giải tối ưu kèm theo toàn bộ mã nguồn C++ hoàn chỉnh (chuẩn C++17/20, Fast I/O, có chú thích tiếng Việt cho các đoạn code then chốt).",
  "complexity": "Độ phức tạp thời gian O(...) và bộ nhớ O(...), kèm giải thích tại sao vượt qua được giới hạn thời gian (Time Limit)."
}
3. CỰC KỲ CHI TIẾT VÀ CHÍNH XÁC: Viết thật chi tiết, có tâm, tránh nói chung chung hay qua loa. Người học cần nắm vững cả tư duy lẫn cách cài đặt bài toán này!`;

    // Gọi Gemini API - Thử các model mới nhất
    const modelsToTry = [
      'gemini-2.5-flash',
      'gemini-2.0-flash',
      'gemini-1.5-flash',
      'gemini-2.5-pro',
    ];
    let lastError: any = null;
    let hintObj: any = null;

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
              temperature: 0.3,
              maxOutputTokens: 5000,
              responseMimeType: 'application/json',
            },
          }),
        });

        const data = await res.json();
        if (res.ok && data.candidates?.[0]?.content?.parts?.[0]?.text) {
          let text = data.candidates[0].content.parts[0].text.trim();
          let clean = text;
          const jsonMatch = clean.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
          if (jsonMatch) {
            clean = jsonMatch[1].trim();
          }

          try {
            hintObj = JSON.parse(clean);
            break;
          } catch {
            const start = clean.indexOf('{');
            const end = clean.lastIndexOf('}');
            if (start !== -1 && end !== -1 && end > start) {
              try {
                hintObj = JSON.parse(clean.slice(start, end + 1));
                break;
              } catch {}
            }
            hintObj = {
              briefSummary: 'Bài toán ' + problem.name,
              hint1_basic: clean,
              hint3_key: 'Quan sát các dữ kiện then chốt của bài toán.',
              hint4_algorithm: 'Xây dựng thuật toán theo quan sát.',
              edgeCases: 'Lưu ý các trường hợp N nhỏ và tràn số 64-bit.',
              solutionCode: '// Chi tiết lời giải trên Codeforces: ' + problem.url,
              complexity: 'O(N) hoặc O(N log N)',
            };
            break;
          }
        } else {
          lastError = data.error?.message || `Mã lỗi ${res.status}`;
        }
      } catch (err: any) {
        lastError = err.message;
      }
    }

    if (!hintObj) {
      return NextResponse.json(
        {
          error: `Không thể kết nối tới Gemini API. Lỗi từ Google: ${lastError || 'Unknown error'}. Vui lòng kiểm tra lại API Key.`,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      hint: hintObj,
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

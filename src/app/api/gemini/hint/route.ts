import { NextRequest, NextResponse } from 'next/server';
import { parseGeminiHintJson } from '@/lib/codeforcesClient';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { apiKey, problem, lang = 'vi' } = body;

    const geminiKey = apiKey?.trim() || process.env.GEMINI_API_KEY;

    if (!geminiKey) {
      return NextResponse.json(
        {
          error: lang === 'en' 
            ? 'Gemini API Key missing. Please provide your API Key or set GEMINI_API_KEY.'
            : 'Chưa có Gemini API Key. Vui lòng nhập API Key của bạn vào ô cài đặt hoặc cấu hình biến môi trường GEMINI_API_KEY.',
        },
        { status: 400 }
      );
    }

    if (!problem || !problem.name) {
      return NextResponse.json(
        { error: lang === 'en' ? 'Missing problem data.' : 'Thiếu thông tin bài tập cần nhận gợi ý.' },
        { status: 400 }
      );
    }

    const promptVi = `Bạn là Huấn luyện viên trưởng Olympic Tin học (IOI Coach) và Chuyên gia Competitive Programming (Grandmaster Codeforces).
Nhiệm vụ của bạn là phân tích sâu, giải chi tiết bài toán Codeforces sau và phân chia lời giải thành các bậc thang gợi ý sư phạm:

THÔNG TIN BÀI TOÁN CODEFORCES:
- Mã bài: ${problem.contestId}${problem.index}
- Tên bài: ${problem.name}
- Mức độ (Rating): ${problem.rating}
- Tags: ${problem.tags?.join(', ') || ''}
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
3. CỰC KỲ CHI TIẾT VÀ CHÍNH XÁC: Viết hoàn toàn bằng tiếng Việt, chi tiết, có tâm, tránh nói chung chung hay qua loa.`;

    const promptEn = `You are an elite International Olympiad in Informatics (IOI) Coach and Codeforces Legendary Grandmaster.
Your task is to analyze deeply, solve accurately, and structure the pedagogical hints and complete editorial for the following Codeforces problem:

CODEFORCES PROBLEM DETAILS:
- Problem ID: ${problem.contestId}${problem.index}
- Title: ${problem.name}
- Difficulty Rating: ${problem.rating}
- Tags: ${problem.tags?.join(', ') || ''}
- URL: ${problem.url}

PEDAGOGICAL RULES & OUTPUT FORMAT:
1. Provide the optimal, accepted solution and editorial for "${problem.contestId}${problem.index} - ${problem.name}".
2. All explanations and commentary must be written 100% in English.
3. Return ONLY a single valid JSON object (escape inner quotes with \\", newlines with \\n):
{
  "briefSummary": "Brief summary of the problem statement in 2-3 concise sentences: What is given, what to find, and the underlying mathematical/algorithmic model.",
  "hint1_basic": "Hint 1 (Basic): Initial observations upon reading the problem, analysis of small N or sample tests without spoiling the full solution.",
  "hint2_reduction": "Hint 2 (Model Reduction): How to reframe or simplify the problem into a standard algorithmic form (graph, DP, greedy, math).",
  "hint3_key": "Hint 3 (KEY OBSERVATION / Aha! Moment): The pivotal insight needed to crack the problem! Monotonicity, invariant, greedy choice, or key data structure.",
  "hint4_algorithm": "Hint 4 (Step-by-Step Algorithm): Detailed algorithmic procedure: precomputation, transitions, data structures, state definitions, and result extraction.",
  "edgeCases": "Corner cases & Pitfalls: N=1, 64-bit integer overflow (long long in C++), empty sets, disconnected components, boundary values.",
  "solutionCode": "Complete Solution & C++ Code: In-depth solution breakdown followed by full, clean, working C++ code (C++17/20, Fast I/O, clean English comments).",
  "complexity": "Time complexity O(...) and Space complexity O(...), with proof of why it easily passes within the time limit."
}
4. THOROUGH AND PRECISE: Write high-quality, comprehensive guidance. Do not use placeholders or generic advice.`;

    const prompt = lang === 'en' ? promptEn : promptVi;

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

          hintObj = parseGeminiHintJson(clean, problem, lang);
          break;
        } else {
          lastError = data.error?.message || `Status ${res.status}`;
        }
      } catch (err: any) {
        lastError = err.message;
      }
    }

    if (!hintObj) {
      return NextResponse.json(
        {
          error: `Google Gemini API Error: ${lastError || 'Unknown error'}.`,
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
      { error: err.message || 'Error processing Gemini AI request.' },
      { status: 500 }
    );
  }
}

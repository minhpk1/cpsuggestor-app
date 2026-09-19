export interface CFTagStat {
  tag: string;
  count: number;
  percentage: number;
  status: 'STRONG' | 'BALANCED' | 'WEAK';
}

export interface CFRatingBucket {
  rating: number;
  count: number;
  isRecommended?: boolean;
}

export interface CFProfileResponse {
  handle: string;
  rank: string;
  rating: number;
  maxRank: string;
  maxRating: number;
  avatar: string;
  totalSubmissions: number;
  totalSolved: number;
  solvedProblemIds: string[];
  tagStats: CFTagStat[];
  ratingDistribution: CFRatingBucket[];
  recommendedRating: number;
  recommendedRatingReason: string;
}

export interface CFRandomProblemItem {
  contestId: number;
  index: string;
  name: string;
  rating: number;
  tags: string[];
  url: string;
  solvedCount?: number;
}

export interface CFGeminiHint {
  briefSummary: string;
  hint1_basic: string;
  hint2_reduction?: string;
  hint3_key: string;
  hint4_algorithm: string;
  edgeCases: string;
  solutionCode: string;
  complexity: string;
  // Backward compatibility
  keyObservation?: string;
  stepByStepHint?: string;
  targetComplexity?: string;
}

/**
 * Lấy toàn bộ thông tin Codeforces trực tiếp từ trình duyệt (Client-side 100% không cần backend)
 */
export async function fetchCFProfileClientSide(handle: string): Promise<CFProfileResponse> {
  const cleanHandle = handle.trim();
  if (!cleanHandle) {
    throw new Error('Vui lòng nhập tên tài khoản Codeforces.');
  }

  // 1. Fetch user info
  const userRes = await fetch(`https://codeforces.com/api/user.info?handles=${encodeURIComponent(cleanHandle)}`);
  const userData = await userRes.json();
  if (userData.status !== 'OK' || !userData.result?.[0]) {
    throw new Error(`Không tìm thấy tài khoản "${cleanHandle}" trên Codeforces.`);
  }
  const user = userData.result[0];

  // 2. Fetch submissions
  const statusRes = await fetch(`https://codeforces.com/api/user.status?handle=${encodeURIComponent(cleanHandle)}&from=1&count=5000`);
  const statusData = await statusRes.json();
  const submissions = statusData.status === 'OK' && Array.isArray(statusData.result) ? statusData.result : [];

  // 3. Unique Solved problems
  const solvedMap = new Map<string, { rating?: number; tags: string[]; name: string }>();
  for (const sub of submissions) {
    if (sub.verdict === 'OK' && sub.problem) {
      const p = sub.problem;
      const key = `${p.contestId || 'C'}${p.index || ''}`;
      if (!solvedMap.has(key)) {
        solvedMap.set(key, {
          rating: p.rating,
          tags: Array.isArray(p.tags) ? p.tags : [],
          name: p.name || key,
        });
      }
    }
  }

  const totalSolved = solvedMap.size;
  const solvedProblemIds = Array.from(solvedMap.keys());

  // 4. Tags Breakdown
  const tagCountMap = new Map<string, number>();
  for (const item of Array.from(solvedMap.values())) {
    for (const tag of item.tags) {
      tagCountMap.set(tag, (tagCountMap.get(tag) || 0) + 1);
    }
  }

  const sortedTags = Array.from(tagCountMap.entries()).sort((a, b) => b[1] - a[1]);
  const tagStats: CFTagStat[] = sortedTags.map(([tag, count]) => {
    const percentage = totalSolved > 0 ? Math.round((count / totalSolved) * 100) : 0;
    let status: 'STRONG' | 'BALANCED' | 'WEAK' = 'BALANCED';
    if (percentage >= 20 || count >= 50) {
      status = 'STRONG';
    } else if (percentage <= 5 && count < 15) {
      status = 'WEAK';
    }
    return { tag, count, percentage, status };
  });

  // 5. Rating Distribution (800 to 3500)
  const ratingBuckets: Record<number, number> = {};
  const step = 100;
  for (let r = 800; r <= 3500; r += step) {
    ratingBuckets[r] = 0;
  }

  const solvedRatings: number[] = [];
  for (const item of Array.from(solvedMap.values())) {
    if (typeof item.rating === 'number' && item.rating >= 800 && item.rating <= 3500) {
      const rounded = Math.floor(item.rating / step) * step;
      if (rounded >= 800 && rounded <= 3500) {
        ratingBuckets[rounded] = (ratingBuckets[rounded] || 0) + 1;
        solvedRatings.push(item.rating);
      }
    }
  }

  // 6. Recommended Rating
  solvedRatings.sort((a, b) => a - b);
  let recommendedRating = 1200;
  let recommendedReason = '';

  const currentRating = user.rating || 0;
  if (currentRating > 0) {
    recommendedRating = Math.min(3500, Math.max(800, Math.round((currentRating + 150) / 100) * 100));
    recommendedReason = `Dựa trên rating thi đấu hiện tại (${currentRating}), luyện các bài ${recommendedRating} sẽ giúp bạn mở rộng tư duy giải thuật mà không bị quá ngợp.`;
  } else if (solvedRatings.length > 0) {
    const p75Index = Math.floor(solvedRatings.length * 0.75);
    const base = solvedRatings[p75Index] || 1200;
    recommendedRating = Math.min(3500, Math.max(800, Math.round((base + 100) / 100) * 100));
    recommendedReason = `Dựa trên phân bố ${totalSolved} bài bạn đã giải (75% nằm dưới ${base}), mức ${recommendedRating} là thử thách lý tưởng tiếp theo.`;
  } else {
    recommendedRating = 1000;
    recommendedReason = 'Khởi đầu với các bài rating 1000 để làm quen với phong cách bài tập Codeforces.';
  }

  const ratingDistribution: CFRatingBucket[] = Object.keys(ratingBuckets)
    .map(Number)
    .sort((a, b) => a - b)
    .map(r => ({
      rating: r,
      count: ratingBuckets[r],
      isRecommended: r === recommendedRating,
    }));

  return {
    handle: user.handle,
    rank: user.rank || 'unranked',
    rating: user.rating || 0,
    maxRank: user.maxRank || 'unranked',
    maxRating: user.maxRating || 0,
    avatar: user.avatar || user.titlePhoto || '',
    totalSubmissions: submissions.length,
    totalSolved,
    solvedProblemIds,
    tagStats,
    ratingDistribution,
    recommendedRating,
    recommendedRatingReason: recommendedReason,
  };
}

/**
 * Random một bài tập Codeforces thực tế cực nhanh (dưới 300ms) từ Codeforces Problemset API,
 * loại trừ 100% các bài user đã giải (AC).
 */
export async function getRandomCFProblem(
  tags: string[] | string,
  rating: number,
  solvedProblemIds: string[] = [],
  matchMode: 'AND' | 'OR' = 'AND',
  lang: 'vi' | 'en' = 'vi'
): Promise<CFRandomProblemItem> {
  const solvedSet = new Set(solvedProblemIds);
  const tagList = Array.isArray(tags) ? tags : [tags];
  const activeTags = tagList
    .map(t => t.trim())
    .filter(t => t && t !== 'Tất cả' && t.toLowerCase() !== 'all');

  // 1. Thử gọi trực tiếp Codeforces API từ client (CORS *)
  let problems: any[] = [];
  try {
    if (activeTags.length === 0) {
      const res = await fetch(`https://codeforces.com/api/problemset.problems`);
      const data = await res.json();
      if (data.status === 'OK' && Array.isArray(data.result?.problems)) {
        problems = data.result.problems;
      }
    } else if (matchMode === 'AND' || activeTags.length === 1) {
      const queryStr = `?tags=${activeTags.map(t => encodeURIComponent(t.toLowerCase())).join(';')}`;
      const res = await fetch(`https://codeforces.com/api/problemset.problems${queryStr}`);
      const data = await res.json();
      if (data.status === 'OK' && Array.isArray(data.result?.problems)) {
        problems = data.result.problems;
      }
    } else {
      // matchMode === 'OR' với nhiều tags
      const responses = await Promise.all(
        activeTags.map(t =>
          fetch(`https://codeforces.com/api/problemset.problems?tags=${encodeURIComponent(t.toLowerCase())}`)
            .then(r => r.json())
            .catch(() => null)
        )
      );
      const seenMap = new Map<string, any>();
      for (const resp of responses) {
        if (resp?.status === 'OK' && Array.isArray(resp.result?.problems)) {
          for (const prob of resp.result.problems) {
            const key = `${prob.contestId}${prob.index}`;
            if (!seenMap.has(key)) {
              seenMap.set(key, prob);
            }
          }
        }
      }
      problems = Array.from(seenMap.values());
    }
  } catch (e) {
    console.warn('Client-side CF fetch failed, falling back to local API route:', e);
  }

  // 2. Nếu client fetch bị chặn mạng, fallback sang local API route
  if (problems.length === 0) {
    const tagsParam = encodeURIComponent(activeTags.join(';'));
    const res = await fetch(`/api/codeforces/random?tags=${tagsParam}&rating=${rating}&matchMode=${matchMode}`);
    const json = await res.json();
    if (json.success && json.problem) {
      return json.problem;
    }
    throw new Error(json.error || (lang === 'en' ? 'No matching problem found.' : 'Không tìm thấy bài tập phù hợp.'));
  }

  // 3. Lọc bài chưa AC và đúng mốc rating, khớp tag chuẩn xác
  const checkTagMatch = (probTags: string[]) => {
    if (activeTags.length === 0) return true;
    const lower = (probTags || []).map(t => t.toLowerCase());
    if (matchMode === 'AND') {
      return activeTags.every(t => lower.includes(t.toLowerCase()));
    } else {
      return activeTags.some(t => lower.includes(t.toLowerCase()));
    }
  };

  let candidates: CFRandomProblemItem[] = [];
  for (const p of problems) {
    if (!p.contestId || !p.index || typeof p.rating !== 'number') continue;
    if (p.rating < 800 || p.rating > 3500) continue;
    const key = `${p.contestId}${p.index}`;
    if (solvedSet.has(key)) continue;
    if (!checkTagMatch(p.tags)) continue;

    if (p.rating === rating) {
      candidates.push({
        contestId: p.contestId,
        index: p.index,
        name: p.name,
        rating: p.rating,
        tags: Array.isArray(p.tags) ? p.tags : [],
        url: `https://codeforces.com/contest/${p.contestId}/problem/${p.index}`,
      });
    }
  }

  // Nếu không có bài đúng tuyệt đối rating, cho phép khoảng +- 100 (vẫn trong khoảng 800-3500)
  if (candidates.length === 0) {
    for (const p of problems) {
      if (!p.contestId || !p.index || typeof p.rating !== 'number') continue;
      if (p.rating < 800 || p.rating > 3500) continue;
      const key = `${p.contestId}${p.index}`;
      if (solvedSet.has(key)) continue;
      if (!checkTagMatch(p.tags)) continue;

      if (Math.abs(p.rating - rating) <= 100) {
        candidates.push({
          contestId: p.contestId,
          index: p.index,
          name: p.name,
          rating: p.rating,
          tags: Array.isArray(p.tags) ? p.tags : [],
          url: `https://codeforces.com/contest/${p.contestId}/problem/${p.index}`,
        });
      }
    }
  }

  if (candidates.length === 0) {
    const tagDisplay = activeTags.length > 0 ? ` [${activeTags.join(matchMode === 'AND' ? ' + ' : ' / ')}]` : '';
    throw new Error(
      lang === 'en'
        ? `No un-AC problems found with tags${tagDisplay} and rating ${rating}.`
        : `Không tìm thấy bài tập nào chưa AC với tag${tagDisplay} và rating ${rating}.`
    );
  }

  const randomIdx = Math.floor(Math.random() * candidates.length);
  return candidates[randomIdx];
}

/**
 * Trích xuất an toàn một trường JSON chuỗi kể cả khi JSON bị cắt ngắn hoặc có ký tự escape lỗi
 */
function extractCleanJsonField(text: string, key: string): string {
  const regex = new RegExp(`"${key}"\\s*:\\s*"((?:[^"\\\\]|\\\\.)*)"`, 's');
  const match = text.match(regex);
  if (match && match[1]) {
    return match[1]
      .replace(/\\n/g, '\n')
      .replace(/\\"/g, '"')
      .replace(/\\\\/g, '\\')
      .replace(/\\t/g, '\t')
      .trim();
  }
  const openRegex = new RegExp(`"${key}"\\s*:\\s*"([\\s\\S]*?)(?=(?:"\\s*,\\s*"[a-zA-Z0-9_]+"\\s*:|"$|(?:"\\s*\\})))`, 's');
  const openMatch = text.match(openRegex);
  if (openMatch && openMatch[1]) {
    return openMatch[1]
      .replace(/\\n/g, '\n')
      .replace(/\\"/g, '"')
      .replace(/\\\\/g, '\\')
      .replace(/\\t/g, '\t')
      .trim();
  }
  return '';
}

/**
 * Phân tích đối tượng gợi ý từ kết quả Gemini một cách an toàn tuyệt đối
 * Không bao giờ làm lộ cấu trúc JSON thô ra ngoài giao diện người dùng
 */
export function parseGeminiHintJson(
  clean: string,
  problem: CFRandomProblemItem,
  lang: 'vi' | 'en' = 'vi'
): CFGeminiHint {
  const isEn = lang === 'en';
  const defaultSummary = isEn ? `Problem ${problem.name}` : `Bài toán ${problem.name}`;
  const defaultHint1 = isEn 
    ? 'Analyze sample test cases and observe patterns for small constraints.' 
    : 'Phân tích các test ví dụ và quan sát quy luật cho các trường hợp nhỏ.';
  const defaultHint3 = isEn
    ? 'Focus on invariants, greedy properties, or key data structures.'
    : 'Tập trung vào tính chất bất biến, tham lam tối ưu hoặc cấu trúc dữ liệu chìa khóa.';
  const defaultHint4 = isEn
    ? 'Construct the step-by-step algorithm and transitions.'
    : 'Xây dựng thuật toán từng bước và các công thức chuyển trạng thái.';
  const defaultEdge = isEn
    ? 'Watch out for corner cases with small N and 64-bit integer overflow.'
    : 'Lưu ý các trường hợp biên N nhỏ và tràn số 64-bit (long long trong C++).';
  const defaultCode = isEn
    ? `// Complete editorial and solutions available at: ${problem.url}`
    : `// Chi tiết lời giải và thảo luận trên Codeforces: ${problem.url}`;
  const defaultComplexity = 'O(N) / O(N log N)';

  // 1. Thử JSON.parse chuẩn xác
  try {
    const parsed = JSON.parse(clean);
    return {
      briefSummary: parsed.briefSummary || defaultSummary,
      hint1_basic: parsed.hint1_basic || parsed.keyObservation || defaultHint1,
      hint2_reduction: parsed.hint2_reduction || '',
      hint3_key: parsed.hint3_key || parsed.keyObservation || defaultHint3,
      hint4_algorithm: parsed.hint4_algorithm || parsed.stepByStepHint || defaultHint4,
      edgeCases: parsed.edgeCases || defaultEdge,
      solutionCode: parsed.solutionCode || defaultCode,
      complexity: parsed.complexity || parsed.targetComplexity || defaultComplexity,
      keyObservation: parsed.hint3_key || parsed.keyObservation || defaultHint3,
      stepByStepHint: parsed.hint4_algorithm || parsed.stepByStepHint || defaultHint4,
      targetComplexity: parsed.complexity || parsed.targetComplexity || defaultComplexity,
    };
  } catch {}

  // 2. Thử substring từ '{' tới '}'
  const start = clean.indexOf('{');
  const end = clean.lastIndexOf('}');
  if (start !== -1 && end !== -1 && end > start) {
    try {
      const subParsed = JSON.parse(clean.slice(start, end + 1));
      return {
        briefSummary: subParsed.briefSummary || defaultSummary,
        hint1_basic: subParsed.hint1_basic || subParsed.keyObservation || defaultHint1,
        hint2_reduction: subParsed.hint2_reduction || '',
        hint3_key: subParsed.hint3_key || subParsed.keyObservation || defaultHint3,
        hint4_algorithm: subParsed.hint4_algorithm || subParsed.stepByStepHint || defaultHint4,
        edgeCases: subParsed.edgeCases || defaultEdge,
        solutionCode: subParsed.solutionCode || defaultCode,
        complexity: subParsed.complexity || subParsed.targetComplexity || defaultComplexity,
        keyObservation: subParsed.hint3_key || subParsed.keyObservation || defaultHint3,
        stepByStepHint: subParsed.hint4_algorithm || subParsed.stepByStepHint || defaultHint4,
        targetComplexity: subParsed.complexity || subParsed.targetComplexity || defaultComplexity,
      };
    } catch {}
  }

  // 3. Trích xuất từng trường độc lập bằng Regex
  const briefSummary = extractCleanJsonField(clean, 'briefSummary');
  const hint1 = extractCleanJsonField(clean, 'hint1_basic');
  const hint2 = extractCleanJsonField(clean, 'hint2_reduction');
  const hint3 = extractCleanJsonField(clean, 'hint3_key');
  const hint4 = extractCleanJsonField(clean, 'hint4_algorithm');
  const edgeCases = extractCleanJsonField(clean, 'edgeCases');
  const solutionCode = extractCleanJsonField(clean, 'solutionCode');
  const complexity = extractCleanJsonField(clean, 'complexity');

  if (hint1 || hint3 || hint4 || briefSummary) {
    return {
      briefSummary: briefSummary || defaultSummary,
      hint1_basic: hint1 || defaultHint1,
      hint2_reduction: hint2 || '',
      hint3_key: hint3 || defaultHint3,
      hint4_algorithm: hint4 || defaultHint4,
      edgeCases: edgeCases || defaultEdge,
      solutionCode: solutionCode || defaultCode,
      complexity: complexity || defaultComplexity,
      keyObservation: hint3 || defaultHint3,
      stepByStepHint: hint4 || defaultHint4,
      targetComplexity: complexity || defaultComplexity,
    };
  }

  // 4. Fallback an toàn: Không bao giờ gán chuỗi JSON thô vào hint1_basic!
  const looksLikeJson = clean.trim().startsWith('{') || clean.includes('"briefSummary"') || clean.includes('"hint');
  const safeHint1 = looksLikeJson ? defaultHint1 : clean;

  return {
    briefSummary: defaultSummary,
    hint1_basic: safeHint1,
    hint2_reduction: '',
    hint3_key: defaultHint3,
    hint4_algorithm: defaultHint4,
    edgeCases: defaultEdge,
    solutionCode: defaultCode,
    complexity: defaultComplexity,
    keyObservation: defaultHint3,
    stepByStepHint: defaultHint4,
    targetComplexity: defaultComplexity,
  };
}

/**
 * Gọi Gemini API với bậc thang gợi ý sư phạm và lời giải chi tiết
 * Hỗ trợ song ngữ (Tiếng Việt và Tiếng Anh)
 */
export async function getGeminiHintWithTimeout(
  apiKey: string,
  problem: CFRandomProblemItem,
  lang: 'vi' | 'en' = 'vi'
): Promise<CFGeminiHint> {
  const cleanKey = apiKey.trim();
  if (!cleanKey) {
    throw new Error(lang === 'en' ? 'Gemini API Key is missing.' : 'Chưa nhập Gemini API Key.');
  }

  const promptVi = `Bạn là Huấn luyện viên trưởng Olympic Tin học (IOI Coach) và Chuyên gia Competitive Programming (Grandmaster Codeforces).
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
3. CỰC KỲ CHI TIẾT VÀ CHÍNH XÁC: Viết hoàn toàn bằng tiếng Việt, chi tiết, có tâm, tránh nói chung chung hay qua loa.`;

  const promptEn = `You are an elite International Olympiad in Informatics (IOI) Coach and Codeforces Legendary Grandmaster.
Your task is to analyze deeply, solve accurately, and structure the pedagogical hints and complete editorial for the following Codeforces problem:

CODEFORCES PROBLEM DETAILS:
- Problem ID: ${problem.contestId}${problem.index}
- Title: ${problem.name}
- Difficulty Rating: ${problem.rating}
- Tags: ${problem.tags.join(', ')}
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

  // Thử các mô hình Gemini phổ biến
  const models = [
    'gemini-2.5-flash',
    'gemini-2.0-flash',
    'gemini-1.5-flash',
    'gemini-2.5-pro',
  ];

  for (const model of models) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 25000); // 25s timeout

      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(cleanKey)}`;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 5000,
            responseMimeType: 'application/json',
          },
        }),
      });

      clearTimeout(timer);

      const data = await res.json();
      if (res.ok && data.candidates?.[0]?.content?.parts?.[0]?.text) {
        let text = data.candidates[0].content.parts[0].text.trim();
        let clean = text;
        const jsonMatch = clean.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
        if (jsonMatch) {
          clean = jsonMatch[1].trim();
        }

        return parseGeminiHintJson(clean, problem, lang);
      }
    } catch (err: any) {
      // Thử model tiếp theo
    }
  }

  // Fallback sang API route cục bộ
  try {
    const res = await fetch('/api/gemini/hint', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ apiKey: cleanKey, problem, lang }),
    });
    const data = await res.json();
    if (data.success && data.hint) {
      return parseGeminiHintJson(
        typeof data.hint === 'string' ? data.hint : JSON.stringify(data.hint),
        problem,
        lang
      );
    }
  } catch {}

  throw new Error(
    lang === 'en'
      ? 'Could not connect to Gemini AI (request timed out or invalid API Key). You can still solve the problem using the link above!'
      : 'Không thể kết nối tới Gemini AI (quá thời gian chờ hoặc API Key không hợp lệ). Bạn vẫn có thể làm bài theo link trên!'
  );
}

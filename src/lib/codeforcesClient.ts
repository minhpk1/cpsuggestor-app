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
  keyObservation: string;
  stepByStepHint: string;
  edgeCases: string;
  targetComplexity: string;
  briefSummary?: string;
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
  tag: string,
  rating: number,
  solvedProblemIds: string[] = []
): Promise<CFRandomProblemItem> {
  const solvedSet = new Set(solvedProblemIds);
  const tagParam = tag && tag !== 'Tất cả' ? `?tags=${encodeURIComponent(tag.trim().toLowerCase())}` : '';
  
  // 1. Thử gọi trực tiếp Codeforces API từ client (CORS *)
  let problems: any[] = [];
  try {
    const res = await fetch(`https://codeforces.com/api/problemset.problems${tagParam}`);
    const data = await res.json();
    if (data.status === 'OK' && Array.isArray(data.result?.problems)) {
      problems = data.result.problems;
    }
  } catch (e) {
    console.warn('Client-side CF fetch failed, falling back to local API route:', e);
  }

  // 2. Nếu client fetch bị chặn mạng, fallback sang local API route
  if (problems.length === 0) {
    const res = await fetch(`/api/codeforces/random?tag=${encodeURIComponent(tag === 'Tất cả' ? '' : tag)}&rating=${rating}`);
    const json = await res.json();
    if (json.success && json.problem) {
      return json.problem;
    }
    throw new Error(json.error || 'Không tìm thấy bài tập phù hợp.');
  }

  // 3. Lọc bài chưa AC và đúng mốc rating (chỉ tính bài có rating chính thức từ 800 đến 3500)
  let candidates: CFRandomProblemItem[] = [];
  for (const p of problems) {
    if (!p.contestId || !p.index || typeof p.rating !== 'number') continue;
    if (p.rating < 800 || p.rating > 3500) continue;
    const key = `${p.contestId}${p.index}`;
    if (solvedSet.has(key)) continue;

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
    throw new Error(`Không tìm thấy bài tập nào chưa AC với tag "${tag}" và rating ${rating}.`);
  }

  const randomIdx = Math.floor(Math.random() * candidates.length);
  return candidates[randomIdx];
}

/**
 * Gọi Gemini API với Timeout an toàn (tối đa 8s, không bao giờ bị treo)
 * Sử dụng Gemini 3.6 / 2.5 / 2.0 / 1.5 Flash
 */
export async function getGeminiHintWithTimeout(
  apiKey: string,
  problem: CFRandomProblemItem
): Promise<CFGeminiHint> {
  const cleanKey = apiKey.trim();
  if (!cleanKey) {
    throw new Error('Chưa nhập Gemini API Key.');
  }

  const prompt = `Bạn là Huấn luyện viên Competitive Programming (CP Coach). Hãy đưa ra định hướng tư duy sư phạm cho bài toán Codeforces sau:

THÔNG TIN BÀI TOÁN:
- Tên bài: ${problem.contestId}${problem.index} - ${problem.name}
- Mức độ (Rating): ${problem.rating}
- Tags: ${problem.tags.join(', ')}
- Link bài: ${problem.url}

QUY TẮC:
1. TUYỆT ĐỐI KHÔNG đưa code giải hoàn chỉnh (C++/Python).
2. Hãy trả về ĐÚNG MỘT đối tượng JSON (có thể bao bằng \`\`\`json ... \`\`\`) với các trường:
{
  "briefSummary": "Tóm tắt đề bài trong 2 câu bằng tiếng Việt",
  "keyObservation": "Nhận xét quan trọng / tính chất toán học / tính bất biến để giải bài",
  "stepByStepHint": "Gợi ý các bước suy nghĩ và hướng tiếp cận từng bước",
  "edgeCases": "Bẫy test và trường hợp biên (N=1, tràn số, biên rỗng...)",
  "targetComplexity": "Thời gian O(...) và bộ nhớ O(...) mục tiêu"
}`;

  // Thử các mô hình Gemini phổ biến, ưu tiên phản hồi nhanh
  const models = [
    'gemini-2.5-flash',
    'gemini-2.0-flash',
    'gemini-1.5-flash',
    'gemini-3.6-flash',
  ];

  for (const model of models) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 8000); // 8 giây timeout

      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(cleanKey)}`;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1000,
          },
        }),
      });

      clearTimeout(timer);

      const data = await res.json();
      if (res.ok && data.candidates?.[0]?.content?.parts?.[0]?.text) {
        let text = data.candidates[0].content.parts[0].text.trim();
        const jsonMatch = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
        if (jsonMatch) {
          text = jsonMatch[1];
        }

        try {
          const parsed = JSON.parse(text) as CFGeminiHint;
          if (parsed.keyObservation || parsed.stepByStepHint) {
            return parsed;
          }
        } catch {
          // Nếu JSON parse không được, trả về dạng text thô
          return {
            briefSummary: 'Bài toán ' + problem.name,
            keyObservation: text,
            stepByStepHint: 'Xem chi tiết trong phần nhận xét.',
            edgeCases: 'Lưu ý các trường hợp biên N nhỏ và tràn số.',
            targetComplexity: 'O(N) hoặc O(N log N)',
          };
        }
      }
    } catch (err: any) {
      // Bỏ qua lỗi và thử model tiếp theo
    }
  }

  // Fallback sang API route cục bộ
  try {
    const res = await fetch('/api/gemini/hint', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ apiKey: cleanKey, problem }),
    });
    const data = await res.json();
    if (data.success && data.hint) {
      return {
        briefSummary: 'Bài toán ' + problem.name,
        keyObservation: data.hint,
        stepByStepHint: 'Xem phần nhận định chi tiết.',
        edgeCases: 'Cẩn thận tràn số 64-bit int và biên N=1.',
        targetComplexity: 'O(N) hoặc O(N log N)',
      };
    }
  } catch {}

  throw new Error('Không thể kết nối tới Gemini AI (quá thời gian chờ hoặc API Key không hợp lệ). Bạn vẫn có thể làm bài theo link trên!');
}

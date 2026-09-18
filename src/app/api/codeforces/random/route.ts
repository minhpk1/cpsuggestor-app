import { NextRequest, NextResponse } from 'next/server';

export interface CFRandomProblem {
  contestId: number;
  index: string;
  name: string;
  rating: number;
  tags: string[];
  solvedCount?: number;
  url: string;
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const handle = searchParams.get('handle') || '';
  const tag = searchParams.get('tag') || '';
  const ratingStr = searchParams.get('rating');
  const targetRating = ratingStr ? parseInt(ratingStr, 10) : undefined;

  try {
    // 1. Lấy danh sách các bài user đã giải nếu có handle
    const solvedSet = new Set<string>();
    if (handle.trim()) {
      try {
        const statusRes = await fetch(
          `https://codeforces.com/api/user.status?handle=${encodeURIComponent(handle.trim())}&from=1&count=5000`,
          { next: { revalidate: 120 } }
        );
        const statusData = await statusRes.json();
        if (statusData.status === 'OK' && Array.isArray(statusData.result)) {
          for (const sub of statusData.result) {
            if (sub.verdict === 'OK' && sub.problem) {
              solvedSet.add(`${sub.problem.contestId}${sub.problem.index}`);
            }
          }
        }
      } catch (e) {
        console.warn('Could not fetch user status for solved filter:', e);
      }
    }

    // 2. Lấy kho bài từ Codeforces API theo tag (nếu có)
    const tagQuery = tag && tag.toLowerCase() !== 'all' && tag !== 'Tất cả'
      ? `?tags=${encodeURIComponent(tag.trim().toLowerCase())}`
      : '';
    const probRes = await fetch(`https://codeforces.com/api/problemset.problems${tagQuery}`, {
      next: { revalidate: 300 }, // Cache 5 phút
    });
    const probData = await probRes.json();

    if (probData.status !== 'OK' || !Array.isArray(probData.result?.problems)) {
      return NextResponse.json(
        { error: 'Không thể tải danh sách bài tập từ Codeforces API.' },
        { status: 502 }
      );
    }

    const problems = probData.result.problems;
    const statistics = Array.isArray(probData.result.problemStatistics)
      ? probData.result.problemStatistics
      : [];

    const statsMap = new Map<string, number>();
    for (const stat of statistics) {
      statsMap.set(`${stat.contestId}${stat.index}`, stat.solvedCount);
    }

    // 3. Lọc bài chưa AC và phù hợp Rating
    const eligibleProblems: CFRandomProblem[] = [];

    for (const p of problems) {
      if (!p.contestId || !p.index || typeof p.rating !== 'number') continue;
      if (p.rating < 800 || p.rating > 3500) continue;
      
      const probKey = `${p.contestId}${p.index}`;
      
      // Bỏ qua nếu đã AC
      if (solvedSet.has(probKey)) continue;

      // Lọc theo rating
      if (targetRating) {
        // Cho phép dung sai +- 100 nếu không có bài đúng tuyệt đối, nhưng ưu tiên đúng rating
        if (p.rating !== targetRating) continue;
      }

      eligibleProblems.push({
        contestId: p.contestId,
        index: p.index,
        name: p.name,
        rating: p.rating,
        tags: Array.isArray(p.tags) ? p.tags : [],
        solvedCount: statsMap.get(probKey) || 0,
        url: `https://codeforces.com/contest/${p.contestId}/problem/${p.index}`,
      });
    }

    // Nếu lọc chính xác rating không có (rất hiếm), mở rộng khoảng +- 100
    if (eligibleProblems.length === 0 && targetRating) {
      for (const p of problems) {
        if (!p.contestId || !p.index || typeof p.rating !== 'number') continue;
        if (p.rating < 800 || p.rating > 3500) continue;
        const probKey = `${p.contestId}${p.index}`;
        if (solvedSet.has(probKey)) continue;

        if (Math.abs(p.rating - targetRating) <= 100) {
          eligibleProblems.push({
            contestId: p.contestId,
            index: p.index,
            name: p.name,
            rating: p.rating,
            tags: Array.isArray(p.tags) ? p.tags : [],
            solvedCount: statsMap.get(probKey) || 0,
            url: `https://codeforces.com/contest/${p.contestId}/problem/${p.index}`,
          });
        }
      }
    }

    if (eligibleProblems.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: `Không tìm thấy bài tập nào chưa AC với tag "${tag || 'Tất cả'}" và rating ${targetRating || 'bất kỳ'}.`,
        },
        { status: 404 }
      );
    }

    // 4. Chọn ngẫu nhiên 1 bài
    const randomIndex = Math.floor(Math.random() * eligibleProblems.length);
    const selectedProblem = eligibleProblems[randomIndex];

    return NextResponse.json({
      success: true,
      problem: selectedProblem,
      poolSize: eligibleProblems.length,
      excludedSolvedCount: solvedSet.size,
    });
  } catch (err: any) {
    console.error('Random CF Problem API Error:', err);
    return NextResponse.json(
      { success: false, error: err.message || 'Lỗi xử lý random bài tập.' },
      { status: 500 }
    );
  }
}

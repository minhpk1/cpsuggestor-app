import { NextRequest, NextResponse } from 'next/server';
import { getContestYear, isContestInYearRange } from '@/data/cfContestYears';

export interface CFRandomProblem {
  contestId: number;
  index: string;
  name: string;
  rating: number;
  tags: string[];
  solvedCount?: number;
  url: string;
  year?: number;
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const handle = searchParams.get('handle') || '';
  const tagsParam = searchParams.get('tags') || searchParams.get('tag') || '';
  const matchMode = ((searchParams.get('matchMode') || 'AND').toUpperCase() === 'OR' ? 'OR' : 'AND') as 'AND' | 'OR';
  const ratingStr = searchParams.get('rating');
  const targetRating = ratingStr ? parseInt(ratingStr, 10) : undefined;
  const fromYearStr = searchParams.get('fromYear') || searchParams.get('from');
  const toYearStr = searchParams.get('toYear') || searchParams.get('to');
  const fromYear = fromYearStr ? parseInt(fromYearStr, 10) : undefined;
  const toYear = toYearStr ? parseInt(toYearStr, 10) : undefined;

  const rawTags = tagsParam
    .split(/[;,]/)
    .map(t => t.trim().toLowerCase())
    .filter(t => t && t !== 'tất cả' && t !== 'all');

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

    // 2. Lấy kho bài từ Codeforces API theo các tag
    let problems: any[] = [];
    let statistics: any[] = [];

    if (rawTags.length === 0) {
      const probRes = await fetch(`https://codeforces.com/api/problemset.problems`, {
        next: { revalidate: 300 },
      });
      const probData = await probRes.json();
      if (probData.status === 'OK' && Array.isArray(probData.result?.problems)) {
        problems = probData.result.problems;
        statistics = Array.isArray(probData.result.problemStatistics) ? probData.result.problemStatistics : [];
      }
    } else if (matchMode === 'AND' || rawTags.length === 1) {
      const tagQuery = `?tags=${rawTags.map(encodeURIComponent).join(';')}`;
      const probRes = await fetch(`https://codeforces.com/api/problemset.problems${tagQuery}`, {
        next: { revalidate: 300 },
      });
      const probData = await probRes.json();
      if (probData.status === 'OK' && Array.isArray(probData.result?.problems)) {
        problems = probData.result.problems;
        statistics = Array.isArray(probData.result.problemStatistics) ? probData.result.problemStatistics : [];
      }
    } else {
      // matchMode === 'OR' với nhiều tags
      const responses = await Promise.all(
        rawTags.map(t =>
          fetch(`https://codeforces.com/api/problemset.problems?tags=${encodeURIComponent(t)}`, {
            next: { revalidate: 300 },
          })
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
          if (Array.isArray(resp.result?.problemStatistics)) {
            for (const stat of resp.result.problemStatistics) {
              statistics.push(stat);
            }
          }
        }
      }
      problems = Array.from(seenMap.values());
    }

    if (problems.length === 0) {
      return NextResponse.json(
        { error: 'Không thể tải danh sách bài tập từ Codeforces API.' },
        { status: 502 }
      );
    }

    const statsMap = new Map<string, number>();
    for (const stat of statistics) {
      statsMap.set(`${stat.contestId}${stat.index}`, stat.solvedCount);
    }

    // 3. Lọc bài chưa AC và phù hợp Rating + Tag
    const checkTagMatch = (probTags: string[]) => {
      if (rawTags.length === 0) return true;
      const lower = (probTags || []).map(t => t.toLowerCase());
      if (matchMode === 'AND') {
        return rawTags.every(rt => lower.includes(rt));
      } else {
        return rawTags.some(rt => lower.includes(rt));
      }
    };

    const eligibleProblems: CFRandomProblem[] = [];

    for (const p of problems) {
      if (!p.contestId || !p.index || typeof p.rating !== 'number') continue;
      if (p.rating < 800 || p.rating > 3500) continue;
      
      const probKey = `${p.contestId}${p.index}`;
      if (solvedSet.has(probKey)) continue;
      if (!checkTagMatch(p.tags)) continue;
      if (!isContestInYearRange(p.contestId, fromYear, toYear)) continue;

      if (targetRating) {
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
        year: getContestYear(p.contestId),
      });
    }

    // Nếu lọc chính xác rating không có, mở rộng +- 100
    if (eligibleProblems.length === 0 && targetRating) {
      for (const p of problems) {
        if (!p.contestId || !p.index || typeof p.rating !== 'number') continue;
        if (p.rating < 800 || p.rating > 3500) continue;
        const probKey = `${p.contestId}${p.index}`;
        if (solvedSet.has(probKey)) continue;
        if (!checkTagMatch(p.tags)) continue;
        if (!isContestInYearRange(p.contestId, fromYear, toYear)) continue;

        if (Math.abs(p.rating - targetRating) <= 100) {
          eligibleProblems.push({
            contestId: p.contestId,
            index: p.index,
            name: p.name,
            rating: p.rating,
            tags: Array.isArray(p.tags) ? p.tags : [],
            solvedCount: statsMap.get(probKey) || 0,
            url: `https://codeforces.com/contest/${p.contestId}/problem/${p.index}`,
            year: getContestYear(p.contestId),
          });
        }
      }
    }

    if (eligibleProblems.length === 0) {
      const tagDisplay = rawTags.length > 0 ? ` [${rawTags.join(matchMode === 'AND' ? ' + ' : ' / ')}]` : ' Tất cả';
      const yearDisplay = (fromYear || toYear)
        ? ` trong giai đoạn ${fromYear || 2010} - ${toYear || 2026}`
        : '';
      return NextResponse.json(
        {
          success: false,
          error: `Không tìm thấy bài tập nào chưa AC với tag${tagDisplay}, rating ${targetRating || 'bất kỳ'}${yearDisplay}.`,
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

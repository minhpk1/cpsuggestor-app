import { NextRequest, NextResponse } from 'next/server';

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

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const handle = searchParams.get('handle');

  if (!handle || !handle.trim()) {
    return NextResponse.json(
      { error: 'Thiếu tham số handle Codeforces.' },
      { status: 400 }
    );
  }

  const cleanHandle = handle.trim();

  try {
    // 1. Fetch user info
    const userInfoRes = await fetch(
      `https://codeforces.com/api/user.info?handles=${encodeURIComponent(cleanHandle)}`,
      { next: { revalidate: 120 } }
    );
    const userInfoData = await userInfoRes.json();

    if (userInfoData.status !== 'OK' || !userInfoData.result?.[0]) {
      return NextResponse.json(
        { error: `Không tìm thấy tài khoản Codeforces "${cleanHandle}".` },
        { status: 404 }
      );
    }

    const user = userInfoData.result[0];

    // 2. Fetch user submissions (up to 5000 recent submissions)
    const statusRes = await fetch(
      `https://codeforces.com/api/user.status?handle=${encodeURIComponent(cleanHandle)}&from=1&count=5000`,
      { next: { revalidate: 120 } }
    );
    const statusData = await statusRes.json();

    const submissions = statusData.status === 'OK' && Array.isArray(statusData.result)
      ? statusData.result
      : [];

    // 3. Process Solved Problems (Unique ACs)
    const solvedMap = new Map<string, { rating?: number; tags: string[]; name: string }>();

    for (const sub of submissions) {
      if (sub.verdict === 'OK' && sub.problem) {
        const p = sub.problem;
        const problemKey = `${p.contestId || 'C'}${p.index || ''}`;
        if (!solvedMap.has(problemKey)) {
          solvedMap.set(problemKey, {
            rating: p.rating,
            tags: Array.isArray(p.tags) ? p.tags : [],
            name: p.name || problemKey,
          });
        }
      }
    }

    const totalSolved = solvedMap.size;
    const solvedProblemIds = Array.from(solvedMap.keys());

    // 4. Calculate Tag Breakdown
    const tagCountMap = new Map<string, number>();
    for (const item of Array.from(solvedMap.values())) {
      for (const tag of item.tags) {
        tagCountMap.set(tag, (tagCountMap.get(tag) || 0) + 1);
      }
    }

    const sortedTags = Array.from(tagCountMap.entries())
      .sort((a, b) => b[1] - a[1]);

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

    // 5. Calculate Rating Distribution (from 800 to 2600 in steps of 100)
    const ratingBuckets: Record<number, number> = {};
    const step = 100;
    for (let r = 800; r <= 2600; r += step) {
      ratingBuckets[r] = 0;
    }

    let solvedWithRatingCount = 0;
    const solvedRatings: number[] = [];

    for (const item of Array.from(solvedMap.values())) {
      if (typeof item.rating === 'number' && item.rating >= 800) {
        const rounded = Math.floor(item.rating / step) * step;
        const bucket = Math.min(2600, Math.max(800, rounded));
        ratingBuckets[bucket] = (ratingBuckets[bucket] || 0) + 1;
        solvedRatings.push(item.rating);
        solvedWithRatingCount++;
      }
    }

    // 6. Calculate Recommended Training Rating
    // Dựa trên rating hiện tại và phân bố bài giải được
    solvedRatings.sort((a, b) => a - b);
    let recommendedRating = 1200;
    let recommendedReason = '';

    const currentRating = user.rating || 0;

    if (currentRating > 0) {
      // Nếu user có rating thi đấu, vùng luyện tập tốt nhất thường là Rating + 100 đến Rating + 200
      recommendedRating = Math.min(3000, Math.round((currentRating + 150) / 100) * 100);
      recommendedReason = `Dựa trên rating thi đấu hiện tại (${currentRating}), luyện các bài ${recommendedRating} sẽ giúp bạn mở rộng tư duy giải thuật mà không quá ngợp.`;
    } else if (solvedRatings.length > 0) {
      // Dựa vào phân vị 75% của các bài đã giải
      const p75Index = Math.floor(solvedRatings.length * 0.75);
      const base = solvedRatings[p75Index] || 1200;
      recommendedRating = Math.min(3000, Math.round((base + 100) / 100) * 100);
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

    const responseData: CFProfileResponse = {
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

    return NextResponse.json({
      success: true,
      profile: responseData,
    });
  } catch (err: any) {
    console.error('Codeforces Profile API Error:', err);
    return NextResponse.json(
      {
        success: false,
        error: err.message || 'Không thể lấy dữ liệu tài khoản Codeforces.',
      },
      { status: 500 }
    );
  }
}

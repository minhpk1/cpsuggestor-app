import { NextRequest, NextResponse } from 'next/server';
import { fetchOjuzProfile } from '@/lib/ojuzCrawler';
import { generateRecommendations } from '@/lib/analysisEngine';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const handle = searchParams.get('handle');

  if (!handle || !handle.trim()) {
    return NextResponse.json(
      { error: 'Thiếu tham số handle. Vui lòng cung cấp username oj.uz' },
      { status: 400 }
    );
  }

  try {
    const profileData = await fetchOjuzProfile(handle.trim());
    const recommendations = generateRecommendations(
      profileData.solvedProblemIds,
      profileData.unsolvedProblemIds,
      profileData.strengths,
      profileData.weaknesses
    );

    return NextResponse.json({
      success: true,
      profile: profileData,
      recommendations,
    });
  } catch (err: any) {
    console.error('API Error in /api/ojuz/profile:', err);
    return NextResponse.json(
      {
        success: false,
        error: err.message || 'Không thể lấy thông tin tài khoản oj.uz. Vui lòng kiểm tra lại username.',
      },
      { status: 500 }
    );
  }
}

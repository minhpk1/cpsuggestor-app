'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { OjuzChecklist } from '@/components/OjuzChecklist';
import { SubmissionHeatmap } from '@/components/SubmissionHeatmap';
import { SidebarWidgets } from '@/components/SidebarWidgets';
import { CodeforcesView } from '@/components/CodeforcesView';
import { RoadmapView } from '@/components/RoadmapView';
import { Footer } from '@/components/Footer';
import { UserProfileData, UserSubmission } from '@/types';
import { Loader2, AlertCircle, Sparkles, BookOpen, Layers } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();
  const [platform, setPlatform] = useState<'ojuz' | 'codeforces' | 'roadmap'>('ojuz');
  const [handle, setHandle] = useState<string>('Benq');
  const [profile, setProfile] = useState<UserProfileData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedContestFilter, setSelectedContestFilter] = useState<string>('Tất cả');

  // Fetch dữ liệu từ API route oj.uz
  const fetchProfileData = async (userHandle: string) => {
    if (!userHandle.trim()) return;
    setLoading(true);
    setError(null);

    try {
      const url = `/api/ojuz/profile?handle=${encodeURIComponent(userHandle.trim())}`;
      const res = await fetch(url);
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Lỗi khi tải dữ liệu từ oj.uz');
      }

      setProfile(data.profile);
      setHandle(userHandle.trim());
      localStorage.setItem('ojuz_saved_handle', userHandle.trim());
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Không thể lấy dữ liệu tài khoản');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem('ojuz_saved_handle') || 'Benq';
    setHandle(saved);
    fetchProfileData(saved);
  }, []);

  // Xử lý nạp submissions thật do người dùng dán vào
  const handleImportSubmissions = (newSubs: UserSubmission[]) => {
    if (!profile) return;
    const daily: Record<string, number> = {};
    newSubs.forEach(s => {
      daily[s.date] = (daily[s.date] || 0) + 1;
    });

    setProfile({
      ...profile,
      submissions: newSubs,
      dailyHeatmap: daily,
      isRealSubmissionHistory: true,
      submissionSourceInfo: `Đã nạp thành công ${newSubs.length} lần nộp bài thật từ oj.uz!`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f5f7] text-[#333333]">
      
      {/* Header phong cách LibreOJ với Platform Switcher */}
      <Navbar
        currentHandle={handle}
        activePlatform={platform}
        setActivePlatform={setPlatform}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-[1240px] w-full mx-auto px-4 py-5">

        {/* Thanh chọn Nền tảng (OJ.uz vs Codeforces) */}
        <div className="mb-5 flex items-center justify-between border-b border-[#e8e8e8] pb-3 flex-wrap gap-2">
          <div className="flex items-center space-x-2 flex-wrap gap-y-2">
            <button
              onClick={() => setPlatform('ojuz')}
              className={`px-4 py-1.5 text-xs font-medium rounded transition-all flex items-center space-x-2 ${
                platform === 'ojuz'
                  ? 'bg-white text-gray-900 border border-gray-300 shadow-sm'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-blue-600" />
              <span>{t('platform_switch_oj')}</span>
            </button>

            <button
              onClick={() => setPlatform('codeforces')}
              className={`px-4 py-1.5 text-xs font-medium rounded transition-all flex items-center space-x-2 ${
                platform === 'codeforces'
                  ? 'bg-white text-blue-600 border border-blue-300 shadow-sm'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span>{t('platform_switch_cf')}</span>
            </button>

            <button
              onClick={() => setPlatform('roadmap')}
              className={`px-4 py-1.5 text-xs font-medium rounded transition-all flex items-center space-x-2 ${
                platform === 'roadmap'
                  ? 'bg-white text-emerald-700 border border-emerald-300 shadow-sm'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t('platform_switch_roadmap')}</span>
            </button>
          </div>

          <span className="text-[11px] text-gray-500 hidden xl:inline">
            {platform === 'ojuz'
              ? t('platform_switch_oj_sub')
              : platform === 'codeforces'
              ? t('platform_switch_cf_sub')
              : t('platform_switch_roadmap_sub')}
          </span>
        </div>
        
        {/* ============================================================== */}
        {/* PHÂN HỆ 1: OJ.UZ (OI CHECKLIST & RANDOM BÀI THEO KỲ THI)       */}
        {/* ============================================================== */}
        {platform === 'ojuz' && (
          <>
            {/* Báo lỗi nếu có */}
            {error && (
              <div className="mb-4 p-3 rounded bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                <span>{error}</span>
              </div>
            )}

            {/* Loading Indicator */}
            {loading && (
              <div className="mb-4 p-2 bg-blue-50 border border-blue-200 rounded text-xs text-blue-700 flex items-center space-x-2">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-blue-600" />
                <span>{t('loading_oj_data')} "{handle}"...</span>
              </div>
            )}

            {/* Layout 2 cột LibreOJ */}
            <div className="grid grid-cols-12 gap-5">
              
              {/* Cột trái (Main Content - 8 cols) */}
              <div className="col-span-12 lg:col-span-8 space-y-4">
                
                {/* 1. Lịch nộp bài & Tần suất hoạt động 52 tuần */}
                {profile && (
                  <SubmissionHeatmap
                    dailyHeatmap={profile.dailyHeatmap}
                    submissions={profile.submissions}
                    currentStreak={profile.currentStreak}
                    longestStreak={profile.longestStreak}
                    isRealSubmissionHistory={profile.isRealSubmissionHistory}
                    submissionSourceInfo={profile.submissionSourceInfo}
                    onImportSubmissions={handleImportSubmissions}
                  />
                )}

                {/* 2. OJ.uz OI Checklist & Random bài chưa AC theo kỳ thi (Không tag, không độ khó) */}
                {profile && (
                  <OjuzChecklist
                    solvedIds={profile.solvedProblemIds}
                    unsolvedIds={profile.unsolvedProblemIds}
                    initialContest={selectedContestFilter}
                  />
                )}

              </div>

              {/* Cột phải (Sidebar Widgets - 4 cols) */}
              <div className="col-span-12 lg:col-span-4">
                <SidebarWidgets
                  profile={profile}
                  onSearchProblem={() => {}}
                  onSelectContest={(c) => setSelectedContestFilter(c)}
                  onChangeUser={(u) => fetchProfileData(u)}
                />
              </div>

            </div>
          </>
        )}

        {/* ============================================================== */}
        {/* PHÂN HỆ 2: CODEFORCES & GEMINI AI                              */}
        {/* ============================================================== */}
        {platform === 'codeforces' && (
          <CodeforcesView />
        )}

        {/* ============================================================== */}
        {/* PHÂN HỆ 3: LỘ TRÌNH THUẬT TOÁN CP (28 CHỦ ĐỀ & 280 BÀI TẬP)   */}
        {/* ============================================================== */}
        {platform === 'roadmap' && (
          <RoadmapView initialHandle={handle} />
        )}

      </main>

      <Footer />
    </div>
  );
}

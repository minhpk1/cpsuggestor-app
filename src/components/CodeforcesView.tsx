'use client';

import React, { useState, useEffect } from 'react';
import { CFProfileResponse, fetchCFProfileClientSide } from '@/lib/codeforcesClient';
import { CodeforcesRatingChart } from './CodeforcesRatingChart';
import { CodeforcesTagStats } from './CodeforcesTagStats';
import { CodeforcesRandomTrainer } from './CodeforcesRandomTrainer';
import { useLanguage } from '@/context/LanguageContext';
import { Search, ExternalLink, Loader2, AlertCircle, Sparkles, RefreshCw } from 'lucide-react';

export const CodeforcesView: React.FC = () => {
  const { t } = useLanguage();
  const [handle, setHandle] = useState<string>('tourist');
  const [inputHandle, setInputHandle] = useState<string>('tourist');
  const [profile, setProfile] = useState<CFProfileResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [avatarError, setAvatarError] = useState<boolean>(false);

  const fetchProfile = async (targetHandle: string) => {
    if (!targetHandle.trim()) return;
    setLoading(true);
    setError(null);
    setAvatarError(false);

    try {
      // 1. Thử gọi trực tiếp Client-Side từ trình duyệt (Không cần backend)
      let data: CFProfileResponse | null = null;
      try {
        data = await fetchCFProfileClientSide(targetHandle.trim());
      } catch (clientErr: any) {
        // 2. Fallback sang Next.js API route nếu client gặp hạn chế mạng
        const res = await fetch(`/api/codeforces/profile?handle=${encodeURIComponent(targetHandle.trim())}`);
        const json = await res.json();
        if (json.success && json.profile) {
          data = json.profile;
        } else {
          throw new Error(json.error || clientErr.message);
        }
      }

      if (data) {
        setProfile(data);
        setHandle(targetHandle.trim());
        localStorage.setItem('cf_saved_handle', targetHandle.trim());
      }
    } catch (err: any) {
      setError(err.message || 'Lỗi khi tải thông tin Codeforces.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem('cf_saved_handle') || 'tourist';
    setHandle(saved);
    setInputHandle(saved);
    fetchProfile(saved);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputHandle.trim()) {
      fetchProfile(inputHandle.trim());
    }
  };

  const getRankColor = (rank: string) => {
    const r = rank.toLowerCase();
    if (r.includes('legendary') || r.includes('grandmaster')) return '#ff0000';
    if (r.includes('master')) return '#ff8c00';
    if (r.includes('candidate')) return '#aa00aa';
    if (r.includes('expert')) return '#0000ff';
    if (r.includes('specialist')) return '#03a89e';
    if (r.includes('pupil')) return '#008000';
    return '#808080';
  };

  return (
    <div className="space-y-5">
      
      {/* Search Bar Codeforces */}
      <div className="bg-white border border-[#e8e8e8] rounded p-4 shadow-sm">
        <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={inputHandle}
              onChange={(e) => setInputHandle(e.target.value)}
              placeholder={t('cf_input_placeholder')}
              className="w-full text-xs font-mono bg-[#fafbfc] border border-gray-300 rounded pl-9 pr-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-medium transition-colors flex items-center justify-center space-x-1.5 disabled:opacity-50 shrink-0"
          >
            {loading ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>{t('btn_loading_profile')}</span>
              </>
            ) : (
              <span>{t('btn_view_profile')}</span>
            )}
          </button>
        </form>
      </div>

      {/* Thông báo lỗi */}
      {error && (
        <div className="p-3.5 bg-rose-50 border border-rose-200 rounded text-xs text-rose-800 flex items-center space-x-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
          <span>{error}</span>
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="p-4 bg-blue-50/70 border border-blue-200 rounded text-xs text-blue-700 flex items-center justify-center space-x-2">
          <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
          <span>{t('btn_loading_profile')} "{inputHandle}"...</span>
        </div>
      )}

      {profile && (
        <>
          {/* Card thông tin người dùng Codeforces */}
          <div className="bg-white border border-[#e8e8e8] rounded p-4 shadow-sm">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-3.5">
                {profile.avatar && !avatarError && !profile.avatar.includes('no-avatar.jpg') ? (
                  <img
                    src={profile.avatar.startsWith('//') ? `https:${profile.avatar}` : profile.avatar}
                    alt={profile.handle}
                    referrerPolicy="no-referrer"
                    onError={() => setAvatarError(true)}
                    className="w-14 h-14 rounded-full border-2 border-gray-200 object-cover shadow-sm bg-gray-50"
                  />
                ) : (
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center border-2 border-gray-200 shadow-sm text-white font-bold text-xl uppercase font-mono select-none"
                    style={{ backgroundColor: getRankColor(profile.rank) }}
                    title={profile.handle}
                  >
                    {profile.handle.slice(0, 1)}
                  </div>
                )}
                <div>
                  <div className="flex items-center space-x-2">
                    <h1
                      className="text-lg font-bold font-mono"
                      style={{ color: getRankColor(profile.rank) }}
                    >
                      {profile.handle}
                    </h1>
                    <a
                      href={`https://codeforces.com/profile/${profile.handle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600"
                      title="Codeforces profile"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <div className="flex items-center space-x-2 mt-0.5 text-xs text-gray-500 capitalize">
                    <span className="font-medium" style={{ color: getRankColor(profile.rank) }}>
                      {profile.rank}
                    </span>
                    <span>•</span>
                    <span>Rating: <strong className="font-mono text-gray-800">{profile.rating || 'Unrated'}</strong> (max: {profile.maxRating || 'N/A'})</span>
                  </div>
                </div>
              </div>

              {/* Các thẻ chỉ số nhanh */}
              <div className="flex items-center space-x-3 text-center flex-wrap gap-y-2">
                <div className="px-3 py-1.5 bg-[#fafbfc] border border-gray-200 rounded">
                  <span className="block text-[11px] text-gray-500">{t('cf_total_ac')}</span>
                  <span className="text-base font-bold font-mono text-emerald-600">
                    {profile.totalSolved}
                  </span>
                </div>
                <div className="px-3 py-1.5 bg-[#fafbfc] border border-gray-200 rounded">
                  <span className="block text-[11px] text-gray-500">{t('cf_total_submissions')}</span>
                  <span className="text-base font-bold font-mono text-gray-800">
                    {profile.totalSubmissions}
                  </span>
                </div>
                <div className="px-3 py-1.5 bg-blue-50 border border-blue-200 rounded">
                  <span className="block text-[11px] text-blue-600 font-medium">{t('cf_recommended_title')}</span>
                  <span className="text-base font-bold font-mono text-blue-700">
                    {profile.recommendedRating}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Biểu đồ cột phân bố Rating */}
          <CodeforcesRatingChart
            distribution={profile.ratingDistribution}
            recommendedRating={profile.recommendedRating}
            recommendedReason={profile.recommendedRatingReason}
            totalSolved={profile.totalSolved}
          />

          {/* Random bài tập chưa AC & Gợi ý Gemini AI (100% Client-side bằng API Key) */}
          <CodeforcesRandomTrainer
            handle={profile.handle}
            recommendedRating={profile.recommendedRating}
            solvedProblemIds={profile.solvedProblemIds}
          />

          {/* Thống kê Tags đã giải */}
          <CodeforcesTagStats
            tagStats={profile.tagStats}
            totalSolved={profile.totalSolved}
          />
        </>
      )}

    </div>
  );
};

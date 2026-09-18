'use client';

import React from 'react';
import { UserProfileData } from '../types';
import { Flame, Trophy, CheckCircle2, AlertCircle, RefreshCw, ExternalLink, Calendar, Code } from 'lucide-react';

interface ProfileHeaderProps {
  profile: UserProfileData;
  onRefresh: () => void;
  onSelectSampleUser: (handle: string) => void;
  loading: boolean;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  profile,
  onRefresh,
  onSelectSampleUser,
  loading,
}) => {
  const initials = profile.handle.substring(0, 2).toUpperCase();

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm transition-colors mb-6">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
        
        {/* User Info */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold shadow-md shadow-blue-500/20 ring-4 ring-blue-50 dark:ring-slate-800">
            {initials}
          </div>
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                {profile.handle}
              </h1>
              <a
                href={`https://oj.uz/profile/${profile.handle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded hover:underline"
              >
                oj.uz/{profile.handle}
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 font-medium">
                Active Member
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" />
              Đồng bộ lúc: {new Date(profile.fetchedAt).toLocaleTimeString('vi-VN')} {new Date(profile.fetchedAt).toLocaleDateString('vi-VN')}
            </p>
          </div>
        </div>

        {/* Stats Pills kiểu LibreOJ */}
        <div className="flex flex-wrap items-center gap-3">
          
          {/* Solved Card */}
          <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <div>
              <div className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">
                Đã giải quyết (AC)
              </div>
              <div className="text-lg font-bold text-emerald-800 dark:text-emerald-200 font-mono leading-none mt-0.5">
                {profile.totalSolved} <span className="text-xs font-normal">bài</span>
              </div>
            </div>
          </div>

          {/* Unsolved / Partial Card */}
          <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60">
            <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            <div>
              <div className="text-[11px] font-semibold text-amber-700 dark:text-amber-300 uppercase tracking-wider">
                Chưa hoàn thành
              </div>
              <div className="text-lg font-bold text-amber-800 dark:text-amber-200 font-mono leading-none mt-0.5">
                {profile.unsolvedProblemIds.length} <span className="text-xs font-normal">bài</span>
              </div>
            </div>
          </div>

          {/* Current Streak */}
          <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/60">
            <Flame className="w-5 h-5 text-rose-600 dark:text-rose-400 animate-pulse" />
            <div>
              <div className="text-[11px] font-semibold text-rose-700 dark:text-rose-300 uppercase tracking-wider">
                Streak hiện tại
              </div>
              <div className="text-lg font-bold text-rose-800 dark:text-rose-200 font-mono leading-none mt-0.5">
                {profile.currentStreak} <span className="text-xs font-normal">ngày</span>
              </div>
            </div>
          </div>

          {/* Longest Streak */}
          <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/60">
            <Trophy className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <div>
              <div className="text-[11px] font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-wider">
                Kỷ lục Streak
              </div>
              <div className="text-lg font-bold text-purple-800 dark:text-purple-200 font-mono leading-none mt-0.5">
                {profile.longestStreak} <span className="text-xs font-normal">ngày</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Action Bar & Quick Profiles */}
      <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
          <span>Xem tài khoản mẫu:</span>
          <button
            onClick={() => onSelectSampleUser('Benq')}
            className="font-mono text-blue-600 dark:text-blue-400 hover:underline px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded font-medium"
          >
            Benq (Legendary)
          </button>
          <button
            onClick={() => onSelectSampleUser('tourist')}
            className="font-mono text-blue-600 dark:text-blue-400 hover:underline px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded font-medium"
          >
            tourist
          </button>
        </div>

        <button
          onClick={onRefresh}
          disabled={loading}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          <span>{loading ? 'Đang cào dữ liệu...' : 'Làm mới từ oj.uz'}</span>
        </button>
      </div>
    </div>
  );
};

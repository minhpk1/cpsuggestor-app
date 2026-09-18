'use client';

import React, { useState } from 'react';
import { UserProfileData } from '../types';
import { MessageSquare, RefreshCw, Calendar, Search, User, ExternalLink, Award, Layers } from 'lucide-react';

interface SidebarWidgetsProps {
  profile: UserProfileData | null;
  onSearchProblem: (query: string) => void;
  onSelectContest: (contest: string) => void;
  onChangeUser: (handle: string) => void;
}

const HITOKOTO_QUOTES = [
  { text: "Luyện tập không làm cho bạn hoàn hảo, luyện tập tạo ra thói quen.", author: "Competitive Programmer" },
  { text: "Trong kỳ thi Olympic, một subtask 10 điểm cũng có thể tạo nên khoảng cách giữa huy chương vàng và bạc.", author: "IOI Coach" },
  { text: "Thất bại lớn nhất trong kỳ thi không phải là làm sai bài khó, mà là bỏ lỡ subtask bài dễ.", author: "CP Handbook" },
  { text: "Đừng chỉ đọc lời giải; hãy tự tay code lại và AC trên oj.uz.", author: "VNOI Community" },
];

export const SidebarWidgets: React.FC<SidebarWidgetsProps> = ({
  profile,
  onSearchProblem,
  onSelectContest,
  onChangeUser,
}) => {
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [handleInput, setHandleInput] = useState(profile?.handle || '');

  const nextQuote = () => {
    setQuoteIdx((quoteIdx + 1) % HITOKOTO_QUOTES.length);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchProblem(searchQuery.trim());
  };

  const handleUserSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (handleInput.trim()) {
      onChangeUser(handleInput.trim());
    }
  };

  const CONTEST_LIST = ['Tất cả', 'APIO', 'IZhO', 'CEOI', 'BOI', 'IOI', 'JOI', 'COCI'];

  return (
    <div className="space-y-4">
      
      {/* 1. Hitokoto Widget matching screenshot */}
      <div className="loj-card">
        <div className="loj-card-header">
          <div className="flex items-center space-x-2">
            <MessageSquare className="w-4 h-4 text-gray-500" />
            <span>Hitokoto (ヒトコト)</span>
          </div>
          <button onClick={nextQuote} className="text-gray-400 hover:text-gray-600">
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="loj-card-body text-xs text-gray-700">
          <p className="leading-relaxed italic">
            "{HITOKOTO_QUOTES[quoteIdx].text}"
          </p>
          <p className="text-right text-gray-400 mt-2 font-mono">
            —— {HITOKOTO_QUOTES[quoteIdx].author}
          </p>
        </div>
      </div>

      {/* 2. User Profile Box */}
      <div className="loj-card">
        <div className="loj-card-header">
          <div className="flex items-center space-x-2">
            <User className="w-4 h-4 text-gray-500" />
            <span>Tài khoản oj.uz</span>
          </div>
          {profile && (
            <a
              href={`https://oj.uz/profile/${profile.handle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs loj-link inline-flex items-center space-x-1"
            >
              <span>Profile</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
        <div className="loj-card-body text-xs">
          <form onSubmit={handleUserSubmit} className="mb-3">
            <div className="flex space-x-1.5">
              <input
                type="text"
                value={handleInput}
                onChange={(e) => setHandleInput(e.target.value)}
                placeholder="Nhập handle oj.uz..."
                className="flex-1 px-2.5 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:border-blue-500 font-mono"
              />
              <button
                type="submit"
                className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-medium transition-colors"
              >
                Đổi
              </button>
            </div>
          </form>

          {profile && (
            <div className="space-y-1.5 text-gray-600 border-t border-gray-100 pt-2 font-mono">
              <div className="flex justify-between">
                <span>Handle:</span>
                <strong className="text-gray-900">{profile.handle}</strong>
              </div>
              <div className="flex justify-between">
                <span>Đã giải (Solved):</span>
                <span className="text-emerald-600 font-bold">{profile.totalSolved} bài</span>
              </div>
              <div className="flex justify-between">
                <span>Chưa hoàn thành:</span>
                <span className="text-amber-600 font-bold">{profile.unsolvedProblemIds.length} bài</span>
              </div>
              <div className="flex justify-between">
                <span>Chuỗi Streak:</span>
                <span className="text-rose-600 font-bold">{profile.currentStreak} ngày</span>
              </div>
            </div>
          )}

          <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
            <span>Mẫu:</span>
            <div className="space-x-2">
              <button onClick={() => onChangeUser('Benq')} className="loj-link font-mono">Benq</button>
              <button onClick={() => onChangeUser('tourist')} className="loj-link font-mono">tourist</button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Search Problem matching screenshot */}
      <div className="loj-card">
        <div className="loj-card-header">
          <div className="flex items-center space-x-2">
            <Search className="w-4 h-4 text-gray-500" />
            <span>Search Problem</span>
          </div>
        </div>
        <div className="loj-card-body">
          <form onSubmit={handleSearchSubmit}>
            <div className="relative">
              <input
                type="text"
                placeholder="Title / ID ..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  onSearchProblem(e.target.value);
                }}
                className="w-full px-3 py-1.5 pl-8 text-xs border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            </div>
          </form>
        </div>
      </div>

      {/* 4. Countdown matching screenshot */}
      <div className="loj-card">
        <div className="loj-card-header">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span>Countdown</span>
          </div>
        </div>
        <div className="loj-card-body text-center py-4">
          <p className="font-semibold text-gray-800 text-sm">
            Mùa giải OI 2026 đang diễn ra
          </p>
          <p className="text-xs text-gray-500 mt-1">
            APIO • CEOI • IZhO • BOI • IOI
          </p>
        </div>
      </div>

      {/* 5. Phân loại Kỳ thi (Contests on oj.uz) */}
      <div className="loj-card">
        <div className="loj-card-header">
          <div className="flex items-center space-x-2">
            <Layers className="w-4 h-4 text-gray-500" />
            <span>Đề thi trên oj.uz ({CONTEST_LIST.length - 1} kỳ thi)</span>
          </div>
        </div>
        <div className="loj-card-body">
          <div className="flex flex-wrap gap-1.5">
            {CONTEST_LIST.map((c) => (
              <button
                key={c}
                onClick={() => onSelectContest(c)}
                className="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded border border-gray-200 transition-colors font-mono"
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

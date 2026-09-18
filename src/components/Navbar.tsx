'use client';

import React from 'react';
import { Home, BookOpen, Trophy, Hourglass, Users, Sparkles, ChevronDown } from 'lucide-react';

interface NavbarProps {
  currentHandle: string;
  activePlatform: 'ojuz' | 'codeforces';
  setActivePlatform: (platform: 'ojuz' | 'codeforces') => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentHandle,
  activePlatform,
  setActivePlatform,
  activeTab,
  setActiveTab,
}) => {
  return (
    <header className="bg-white border-b border-[#e8e8e8] sticky top-0 z-50">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          
          {/* Left: LibreOJ Logo & Navigation Items */}
          <div className="flex items-center space-x-1 sm:space-x-3">
            
            {/* LibreOJ Logo */}
            <div 
              onClick={() => { setActiveTab('home'); }} 
              className="flex items-center space-x-2 mr-2 sm:mr-4 cursor-pointer select-none"
            >
              <svg className="w-6 h-6 text-gray-800" viewBox="0 0 32 32" fill="currentColor">
                <path d="M11.5 6.5L4 16l7.5 9.5 2-1.6L7 16l6.5-7.9-2-1.6zm9 0l-2 1.6L25 16l-6.5 7.9 2 1.6L28 16l-7.5-9.5z"/>
              </svg>
              <span className="text-xl tracking-tight text-gray-800 font-normal hidden sm:inline">
                LibreOJ
              </span>
            </div>

            {/* Platform Selector Buttons (OJ.uz vs Codeforces) */}
            <div className="flex items-center bg-[#f0f2f5] p-1 rounded border border-gray-200 text-xs">
              <button
                onClick={() => setActivePlatform('ojuz')}
                className={`px-3 py-1 rounded transition-all flex items-center space-x-1.5 ${
                  activePlatform === 'ojuz'
                    ? 'bg-white text-gray-900 font-semibold shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span>OJ.uz</span>
                <span className="text-[10px] text-gray-400 font-normal hidden md:inline">(OI)</span>
              </button>

              <button
                onClick={() => setActivePlatform('codeforces')}
                className={`px-3 py-1 rounded transition-all flex items-center space-x-1.5 ${
                  activePlatform === 'codeforces'
                    ? 'bg-white text-blue-600 font-semibold shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Sparkles className="w-3 h-3 text-blue-500" />
                <span>Codeforces</span>
                <span className="text-[10px] text-blue-500 font-medium hidden md:inline">+ AI</span>
              </button>
            </div>

            {/* Nav items for current platform */}
            {activePlatform === 'ojuz' && (
              <nav className="hidden lg:flex items-center space-x-1 text-[13px] ml-2">
                <button
                  onClick={() => setActiveTab('home')}
                  className={`px-2.5 py-1.5 rounded transition-colors ${
                    activeTab === 'home'
                      ? 'text-gray-900 font-medium'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  Kho bài & Gợi ý
                </button>
                <button
                  onClick={() => setActiveTab('skills')}
                  className={`px-2.5 py-1.5 rounded transition-colors ${
                    activeTab === 'skills'
                      ? 'text-gray-900 font-medium'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  Đánh giá kỹ năng
                </button>
                <button
                  onClick={() => setActiveTab('heatmap')}
                  className={`px-2.5 py-1.5 rounded transition-colors ${
                    activeTab === 'heatmap'
                      ? 'text-gray-900 font-medium'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  Lịch sử nộp bài
                </button>
              </nav>
            )}

            {activePlatform === 'codeforces' && (
              <nav className="hidden lg:flex items-center space-x-1 text-[13px] ml-2">
                <span className="px-2 py-1 text-xs text-gray-500">
                  Phân tích Rating, Tags & Random bài luyện tập với Gemini AI
                </span>
              </nav>
            )}

          </div>

          {/* Right: Platform indicator & Username */}
          <div className="flex items-center space-x-3 text-xs">
            <div className="flex items-center space-x-1 text-gray-700 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded">
              <span className="text-gray-400 font-normal">
                {activePlatform === 'ojuz' ? 'oj.uz' : 'CF'}:
              </span>
              <span className="font-mono font-medium text-gray-800 truncate max-w-[120px]">
                {currentHandle}
              </span>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

'use client';

import React from 'react';
import { Sparkles, Globe, Layers } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface NavbarProps {
  currentHandle: string;
  activePlatform: 'ojuz' | 'codeforces' | 'roadmap';
  setActivePlatform: (platform: 'ojuz' | 'codeforces' | 'roadmap') => void;
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
  const { lang, toggleLang, t } = useLanguage();

  return (
    <header className="bg-white border-b border-[#e8e8e8] sticky top-0 z-50">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          
          {/* Left: CPSuggestor Logo & Platform Selector */}
          <div className="flex items-center space-x-1 sm:space-x-3">
            
            {/* Logo */}
            <div 
              onClick={() => { setActiveTab('home'); }} 
              className="flex items-center space-x-2 mr-2 sm:mr-4 cursor-pointer select-none"
            >
              <svg className="w-6 h-6 text-gray-800" viewBox="0 0 32 32" fill="currentColor">
                <path d="M11.5 6.5L4 16l7.5 9.5 2-1.6L7 16l6.5-7.9-2-1.6zm9 0l-2 1.6L25 16l-6.5 7.9 2 1.6L28 16l-7.5-9.5z"/>
              </svg>
              <span className="text-xl tracking-tight text-gray-800 font-semibold hidden sm:inline">
                {t('brand')}
              </span>
            </div>

            {/* Platform Selector Buttons (OJ.uz vs Codeforces vs Roadmap) */}
            <div className="flex items-center bg-[#f0f2f5] p-1 rounded border border-gray-200 text-xs">
              <button
                onClick={() => setActivePlatform('ojuz')}
                className={`px-3 py-1 rounded transition-all flex items-center space-x-1.5 ${
                  activePlatform === 'ojuz'
                    ? 'bg-white text-gray-900 font-semibold shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span>{t('platform_ojuz')}</span>
                <span className="text-[10px] text-gray-400 font-normal hidden md:inline">{t('platform_ojuz_sub')}</span>
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
                <span>{t('platform_cf')}</span>
                <span className="text-[10px] text-blue-500 font-medium hidden md:inline">{t('platform_cf_sub')}</span>
              </button>

              <button
                onClick={() => setActivePlatform('roadmap')}
                className={`px-3 py-1 rounded transition-all flex items-center space-x-1.5 ${
                  activePlatform === 'roadmap'
                    ? 'bg-white text-emerald-700 font-semibold shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Layers className="w-3 h-3 text-emerald-600" />
                <span>{t('platform_roadmap')}</span>
                <span className="text-[10px] text-emerald-600 font-medium hidden md:inline">{t('platform_roadmap_sub')}</span>
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
                  {t('nav_oj_problems')}
                </button>
                <button
                  onClick={() => setActiveTab('skills')}
                  className={`px-2.5 py-1.5 rounded transition-colors ${
                    activeTab === 'skills'
                      ? 'text-gray-900 font-medium'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {t('nav_oj_skills')}
                </button>
                <button
                  onClick={() => setActiveTab('heatmap')}
                  className={`px-2.5 py-1.5 rounded transition-colors ${
                    activeTab === 'heatmap'
                      ? 'text-gray-900 font-medium'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {t('nav_oj_heatmap')}
                </button>
              </nav>
            )}

            {activePlatform === 'codeforces' && (
              <nav className="hidden lg:flex items-center space-x-1 text-[13px] ml-2">
                <span className="px-2 py-1 text-xs text-gray-500">
                  {t('nav_cf_tagline')}
                </span>
              </nav>
            )}

            {activePlatform === 'roadmap' && (
              <nav className="hidden lg:flex items-center space-x-1 text-[13px] ml-2">
                <span className="px-2 py-1 text-xs text-emerald-700 font-medium">
                  {t('roadmap_nav_tagline')}
                </span>
              </nav>
            )}

          </div>

          {/* Right: Language toggle & Username */}
          <div className="flex items-center space-x-2 sm:space-x-3 text-xs">
            
            {/* Language Switcher Button */}
            <button
              onClick={toggleLang}
              className="flex items-center space-x-1.5 px-2.5 py-1 rounded bg-[#f8f9fa] hover:bg-[#eaecef] border border-gray-200 text-gray-700 transition-colors text-xs font-medium cursor-pointer"
              title={lang === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'}
            >
              <Globe className="w-3.5 h-3.5 text-blue-600" />
              <span>{lang === 'vi' ? '🇻🇳 Tiếng Việt' : '🇬🇧 English'}</span>
            </button>

            {/* Handle badge */}
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

'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="mt-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-8 text-xs text-slate-500 dark:text-slate-400 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
              CP
            </div>
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              {t('brand')}
            </span>
            <span>—</span>
            <span>{t('footer_desc')}</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://oj.uz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 inline-flex items-center gap-1 transition-colors"
            >
              <span>{t('footer_home_oj')}</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 inline-flex items-center gap-1 transition-colors"
            >
              <span>{t('footer_deploy_vercel')}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-400 dark:text-slate-500">
          <p>
            {t('footer_note')}
          </p>
          <p className="flex items-center gap-1">
            <span>{t('footer_ready')}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

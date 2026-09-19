'use client';

import React from 'react';
import { CFRatingBucket } from '@/app/api/codeforces/profile/route';
import { useLanguage } from '@/context/LanguageContext';
import { BarChart3, Sparkles } from 'lucide-react';

interface CodeforcesRatingChartProps {
  distribution: CFRatingBucket[];
  recommendedRating: number;
  recommendedReason: string;
  totalSolved: number;
  currentRating?: number;
}

export const CodeforcesRatingChart: React.FC<CodeforcesRatingChartProps> = ({
  distribution,
  recommendedRating,
  recommendedReason,
  totalSolved,
  currentRating = 0,
}) => {
  const { t, lang } = useLanguage();

  const displayReason = React.useMemo(() => {
    if (currentRating > 0) {
      return lang === 'en'
        ? `Based on your current contest rating (${currentRating}), training on rating ${recommendedRating} problems is your ideal sweet spot for algorithmic growth.`
        : `Dựa trên rating thi đấu hiện tại (${currentRating}), luyện các bài ${recommendedRating} sẽ giúp bạn mở rộng tư duy giải thuật mà không bị quá ngợp.`;
    }
    if (totalSolved > 0) {
      return lang === 'en'
        ? `Based on your distribution of ${totalSolved} solved problems, rating ${recommendedRating} is your next ideal challenge.`
        : `Dựa trên phân bố ${totalSolved} bài bạn đã giải, mức ${recommendedRating} là thử thách lý tưởng tiếp theo.`;
    }
    return lang === 'en'
      ? 'Start with rating 1000 problems to get accustomed to Codeforces problem styles.'
      : 'Khởi đầu với các bài rating 1000 để làm quen với phong cách bài tập Codeforces.';
  }, [currentRating, recommendedRating, totalSolved, lang]);

  // Tìm giá trị max để scale độ cao cột
  const maxCount = Math.max(...distribution.map(d => d.count), 1);

  // Helper hàm màu sắc theo rank Codeforces
  const getRatingColor = (rating: number) => {
    if (rating < 1200) return '#808080'; // Newbie (Gray)
    if (rating < 1400) return '#008000'; // Pupil (Green)
    if (rating < 1600) return '#03a89e'; // Specialist (Cyan)
    if (rating < 1900) return '#0000ff'; // Expert (Blue)
    if (rating < 2100) return '#aa00aa'; // Candidate Master (Purple)
    if (rating < 2400) return '#ff8c00'; // Master (Orange)
    if (rating < 3000) return '#ff0000'; // Grandmaster (Red)
    return '#a00000'; // Legendary Grandmaster (Dark Red)
  };

  return (
    <div className="bg-white border border-[#e8e8e8] rounded shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-[#fafafa] px-4 py-3 border-b border-[#e8e8e8] flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center space-x-2">
          <BarChart3 className="w-4 h-4 text-blue-600" />
          <h2 className="text-sm font-semibold text-gray-800 tracking-tight">
            {t('cf_chart_title')}
          </h2>
        </div>
        <span className="text-xs text-gray-500 font-mono">
          {t('cf_chart_total')} <strong className="text-gray-800">{totalSolved}</strong> {t('cf_chart_ac_unit')}
        </span>
      </div>

      <div className="p-4 sm:p-5">
        
        {/* Khung đề xuất Rating phù hợp */}
        <div className="mb-6 p-3.5 bg-blue-50/70 border border-blue-200/80 rounded-md flex items-start space-x-3">
          <div className="p-2 bg-blue-100 rounded text-blue-700 shrink-0 mt-0.5">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="flex-1 text-xs text-gray-700 leading-relaxed">
            <div className="flex items-center space-x-2 mb-1">
              <span className="font-semibold text-gray-900 text-sm">
                {t('cf_recommended_title')}
              </span>
              <span className="px-2 py-0.5 rounded font-mono font-bold text-white text-xs" style={{ backgroundColor: getRatingColor(recommendedRating) }}>
                {recommendedRating}
              </span>
            </div>
            <p className="text-gray-600">
              {displayReason}
            </p>
          </div>
        </div>

        {/* Biểu đồ cột rải từ 800 đến 3500 */}
        <div className="mt-4 overflow-x-auto">
          <div className="min-w-[760px]">
            <div className="h-48 sm:h-56 flex items-end gap-1 sm:gap-1.5 pt-6 pb-2 border-b border-gray-200">
              {distribution.map((bucket) => {
                const heightPercent = Math.max(4, Math.round((bucket.count / maxCount) * 100));
                const isRecommended = bucket.rating === recommendedRating;
                const color = getRatingColor(bucket.rating);

                return (
                  <div
                    key={bucket.rating}
                    className="flex-1 min-w-[20px] flex flex-col items-center group relative h-full justify-end"
                  >
                    {/* Tooltip khi hover */}
                    <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 bg-gray-900 text-white text-[11px] py-1 px-2 rounded shadow whitespace-nowrap">
                      Rating {bucket.rating}: {bucket.count} ({totalSolved > 0 ? Math.round((bucket.count / totalSolved) * 100) : 0}%)
                      {isRecommended && ` • ${t('cf_tooltip_recommended')}`}
                    </div>

                    {/* Nhãn số bài trên đầu cột (nếu có bài) */}
                    {bucket.count > 0 && (
                      <span className="text-[10px] text-gray-500 font-mono mb-1 scale-90 group-hover:font-bold group-hover:text-blue-600 transition-colors">
                        {bucket.count}
                      </span>
                    )}

                    {/* Cột biểu đồ */}
                    <div
                      style={{
                        height: `${heightPercent}%`,
                        backgroundColor: isRecommended ? '#2563eb' : color,
                        opacity: bucket.count === 0 ? 0.2 : (isRecommended ? 1 : 0.85),
                      }}
                      className={`w-full rounded-t transition-all group-hover:opacity-100 ${
                        isRecommended ? 'ring-2 ring-blue-500 ring-offset-1' : ''
                      }`}
                    />
                  </div>
                );
              })}
            </div>

            {/* Trục hoành (Rating Labels) */}
            <div className="flex gap-1 sm:gap-1.5 pt-2 text-[10px] text-gray-500 font-mono">
              {distribution.map((bucket) => (
                <div
                  key={bucket.rating}
                  className={`flex-1 min-w-[20px] text-center truncate ${
                    bucket.rating === recommendedRating ? 'font-bold text-blue-600' : ''
                  }`}
                  title={`Rating ${bucket.rating}`}
                >
                  {bucket.rating % 200 === 0 || bucket.rating === 3500 ? bucket.rating : ''}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chú giải màu sắc các rank Codeforces */}
        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-center flex-wrap gap-3 text-[11px] text-gray-600">
          <div className="flex items-center space-x-1">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#808080' }}></span>
            <span>{t('cf_legend_newbie')}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#008000' }}></span>
            <span>{t('cf_legend_pupil')}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#03a89e' }}></span>
            <span>{t('cf_legend_specialist')}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#0000ff' }}></span>
            <span>{t('cf_legend_expert')}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#aa00aa' }}></span>
            <span>{t('cf_legend_cm')}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#ff8c00' }}></span>
            <span>{t('cf_legend_master')}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#ff0000' }}></span>
            <span>{t('cf_legend_gm')}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#a00000' }}></span>
            <span>{t('cf_legend_legendary_gm')}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

'use client';

import React, { useState } from 'react';
import { CFTagStat } from '@/app/api/codeforces/profile/route';
import { Tag, ChevronDown, ChevronUp, CheckCircle, HelpCircle } from 'lucide-react';

interface CodeforcesTagStatsProps {
  tagStats: CFTagStat[];
  totalSolved: number;
}

export const CodeforcesTagStats: React.FC<CodeforcesTagStatsProps> = ({
  tagStats,
  totalSolved,
}) => {
  const [showAll, setShowAll] = useState(false);

  const displayedTags = showAll ? tagStats : tagStats.slice(0, 12);

  return (
    <div className="bg-white border border-[#e8e8e8] rounded shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-[#fafafa] px-4 py-3 border-b border-[#e8e8e8] flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Tag className="w-4 h-4 text-blue-600" />
          <h2 className="text-sm font-semibold text-gray-800 tracking-tight">
            Thống kê các dạng bài (Tags) đã giải trên Codeforces
          </h2>
        </div>
        <span className="text-xs text-gray-500 font-mono">
          {tagStats.length} chủ đề
        </span>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {displayedTags.map((stat) => {
            const isStrong = stat.status === 'STRONG';
            const isWeak = stat.status === 'WEAK';

            return (
              <div
                key={stat.tag}
                className="p-2.5 rounded border border-gray-100 bg-[#fafbfc] hover:border-blue-200 transition-colors"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-medium text-xs text-gray-800 truncate" title={stat.tag}>
                    {stat.tag}
                  </span>
                  <span className="text-[11px] font-mono font-semibold text-gray-600 ml-2">
                    {stat.count} <span className="text-gray-400 font-normal">({stat.percentage}%)</span>
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      isStrong
                        ? 'bg-emerald-500'
                        : isWeak
                        ? 'bg-amber-500'
                        : 'bg-blue-500'
                    }`}
                    style={{ width: `${Math.min(100, Math.max(5, stat.percentage * 2))}%` }}
                  />
                </div>

                <div className="mt-1 flex items-center justify-between text-[10px]">
                  <span className={isStrong ? 'text-emerald-700 font-medium' : isWeak ? 'text-amber-700' : 'text-gray-500'}>
                    {isStrong ? '🔥 Thế mạnh' : isWeak ? '⚠️ Cần luyện thêm' : 'Ổn định'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Nút xem thêm / thu gọn */}
        {tagStats.length > 12 && (
          <div className="mt-4 pt-3 border-t border-gray-100 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center space-x-1 text-xs text-blue-600 hover:text-blue-800 font-medium"
            >
              <span>{showAll ? 'Thu gọn bớt' : `Xem toàn bộ ${tagStats.length} tags`}</span>
              {showAll ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

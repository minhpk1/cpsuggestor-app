'use client';

import React, { useState, useMemo } from 'react';
import { UserSubmission } from '../types';
import { parsePastedOjuzSubmissions } from '@/lib/multiPlatformCrawler';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, UploadCloud, Info } from 'lucide-react';

interface SubmissionHeatmapProps {
  dailyHeatmap: Record<string, number>;
  submissions: UserSubmission[];
  currentStreak: number;
  longestStreak: number;
  isRealSubmissionHistory?: boolean;
  submissionSourceInfo?: string;
  onImportSubmissions: (subs: UserSubmission[]) => void;
}

export const SubmissionHeatmap: React.FC<SubmissionHeatmapProps> = ({
  dailyHeatmap,
  currentStreak,
  onImportSubmissions,
}) => {
  const { t } = useLanguage();
  const [hoveredDay, setHoveredDay] = useState<{ date: string; count: number } | null>(null);
  const [isImportOpen, setIsImportOpen] = useState<boolean>(false);
  const [pasteText, setPasteText] = useState<string>('');
  const [importStatus, setImportStatus] = useState<string | null>(null);

  // 52 tuần (364 ngày)
  const { weeks, monthLabels, totalSubmissions } = useMemo(() => {
    const today = new Date();
    const days: { date: string; count: number; dayOfWeek: number; month: number }[] = [];

    for (let i = 363; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      const count = dailyHeatmap[dateStr] || 0;
      days.push({
        date: dateStr,
        count,
        dayOfWeek: d.getDay(),
        month: d.getMonth(),
      });
    }

    const weeksArr: { date: string; count: number }[][] = [];
    let currentWeek: { date: string; count: number }[] = [];

    const firstDayOfWeek = days[0].dayOfWeek;
    for (let p = 0; p < firstDayOfWeek; p++) {
      currentWeek.push({ date: '', count: 0 });
    }

    days.forEach(day => {
      currentWeek.push({ date: day.date, count: day.count });
      if (currentWeek.length === 7) {
        weeksArr.push(currentWeek);
        currentWeek = [];
      }
    });

    if (currentWeek.length > 0) {
      weeksArr.push(currentWeek);
    }

    const monthKeys = [
      'month_1', 'month_2', 'month_3', 'month_4', 'month_5', 'month_6',
      'month_7', 'month_8', 'month_9', 'month_10', 'month_11', 'month_12'
    ] as const;
    const monthNames = monthKeys.map(k => t(k));
    const months: { name: string; weekIndex: number }[] = [];
    let lastMonth = -1;

    days.forEach((day, idx) => {
      if (day.month !== lastMonth && day.dayOfWeek === 1) {
        const weekIdx = Math.floor(idx / 7);
        months.push({ name: monthNames[day.month], weekIndex: weekIdx });
        lastMonth = day.month;
      }
    });

    let sum = 0;
    let active = 0;
    Object.values(dailyHeatmap).forEach(cnt => {
      sum += cnt;
      if (cnt > 0) active++;
    });

    return {
      weeks: weeksArr,
      monthLabels: months,
      totalSubmissions: sum,
      activeDays: active,
    };
  }, [dailyHeatmap, t]);

  const getColorClass = (count: number) => {
    if (count === 0) return 'bg-[#ebedf0] border-transparent';
    if (count <= 2) return 'bg-[#9be9a8] border-transparent';
    if (count <= 4) return 'bg-[#40c463] border-transparent';
    if (count <= 7) return 'bg-[#30a14e] border-transparent';
    return 'bg-[#216e39] border-transparent';
  };

  const handleImport = () => {
    if (!pasteText.trim()) return;
    const parsed = parsePastedOjuzSubmissions(pasteText);
    if (parsed.length > 0) {
      onImportSubmissions(parsed);
      setImportStatus(`${t('extract_success')} ${parsed.length} ${t('extract_success_suffix')}`);
      setTimeout(() => {
        setIsImportOpen(false);
        setPasteText('');
        setImportStatus(null);
      }, 1500);
    } else {
      setImportStatus(t('extract_failed'));
    }
  };

  return (
    <div className="loj-card">
      <div className="loj-card-header">
        <div className="flex items-center space-x-2">
          <Calendar className="w-4 h-4 text-gray-500" />
          <span>{t('heatmap_title')}</span>
        </div>

        <div className="flex items-center space-x-3 text-xs">
          <span className="text-gray-500">
            {t('total_submissions')} <strong className="text-gray-800 font-mono">{totalSubmissions}</strong>
          </span>
          <span className="text-gray-500">
            {t('streak_label')} <strong className="text-rose-600 font-mono">{currentStreak} {t('days_unit')}</strong>
          </span>
          <button
            onClick={() => setIsImportOpen(!isImportOpen)}
            className="text-blue-600 hover:text-blue-800 inline-flex items-center space-x-1"
          >
            <UploadCloud className="w-3.5 h-3.5" />
            <span>{isImportOpen ? t('btn_close_subs') : t('btn_paste_subs')}</span>
          </button>
        </div>
      </div>

      <div className="loj-card-body">
        
        {/* Hộp nhập/dán submissions nếu mở */}
        {isImportOpen && (
          <div className="mb-4 p-3 bg-gray-50 border border-gray-200 rounded text-xs">
            <div className="flex items-start space-x-2 text-gray-700 mb-2">
              <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <p>
                {t('paste_subs_info')}{' '}
                <a href="https://oj.uz/submissions" target="_blank" rel="noopener noreferrer" className="loj-link font-medium">
                  oj.uz/submissions
                </a>
              </p>
            </div>

            <textarea
              rows={3}
              value={pasteText}
              onChange={(e) => setPasteText(e.target.value)}
              placeholder={t('paste_subs_placeholder')}
              className="w-full p-2 border border-gray-300 rounded font-mono text-xs focus:outline-none focus:border-blue-500 bg-white"
            />

            <div className="mt-2 flex items-center justify-between">
              <button
                onClick={handleImport}
                className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-medium"
              >
                {t('btn_extract_subs')}
              </button>
              {importStatus && (
                <span className="text-emerald-700 font-medium">{importStatus}</span>
              )}
            </div>
          </div>
        )}

        {/* Heatmap Grid */}
        <div className="overflow-x-auto">
          <div className="min-w-[700px]">
            {/* Month Labels */}
            <div className="flex text-[11px] text-gray-400 mb-1 pl-6">
              {monthLabels.map((m, idx) => (
                <div
                  key={idx}
                  style={{ marginLeft: idx === 0 ? `${m.weekIndex * 13}px` : `${Math.max(4, (m.weekIndex - monthLabels[idx - 1].weekIndex - 1) * 13)}px` }}
                >
                  {m.name}
                </div>
              ))}
            </div>

            <div className="flex space-x-1">
              <div className="flex flex-col justify-between text-[10px] text-gray-400 pr-1 select-none">
                <span>{t('day_sun')}</span>
                <span>{t('day_mon')}</span>
                <span>{t('day_tue')}</span>
                <span>{t('day_wed')}</span>
                <span>{t('day_thu')}</span>
                <span>{t('day_fri')}</span>
                <span>{t('day_sat')}</span>
              </div>

              <div className="flex space-x-[2px]">
                {weeks.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col space-y-[2px]">
                    {week.map((day, dIdx) => {
                      if (!day.date) {
                        return <div key={dIdx} className="w-[11px] h-[11px] opacity-0" />;
                      }
                      return (
                        <div
                          key={dIdx}
                          onMouseEnter={() => setHoveredDay({ date: day.date, count: day.count })}
                          onMouseLeave={() => setHoveredDay(null)}
                          className={`w-[11px] h-[11px] rounded-[1px] cursor-pointer hover:ring-1 hover:ring-gray-400 ${getColorClass(
                            day.count
                          )}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* Legend & Tooltip */}
            <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <div className="h-4">
                {hoveredDay ? (
                  <span className="font-mono text-gray-800">
                    <strong>{hoveredDay.count}</strong> {t('tooltip_submissions')} {hoveredDay.date}
                  </span>
                ) : (
                  <span className="text-gray-400">{t('tooltip_hover_hint')}</span>
                )}
              </div>

              <div className="flex items-center space-x-1 text-[11px]">
                <span>{t('legend_less')}</span>
                <div className="w-[10px] h-[10px] rounded-[1px] bg-[#ebedf0]" />
                <div className="w-[10px] h-[10px] rounded-[1px] bg-[#9be9a8]" />
                <div className="w-[10px] h-[10px] rounded-[1px] bg-[#40c463]" />
                <div className="w-[10px] h-[10px] rounded-[1px] bg-[#30a14e]" />
                <div className="w-[10px] h-[10px] rounded-[1px] bg-[#216e39]" />
                <span>{t('legend_more')}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

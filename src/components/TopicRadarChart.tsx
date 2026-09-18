'use client';

import React from 'react';
import { TopicStat } from '../types';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { Sparkles, Trophy, AlertTriangle } from 'lucide-react';

interface TopicRadarChartProps {
  topicStats: TopicStat[];
  darkMode?: boolean;
}

export const TopicRadarChart: React.FC<TopicRadarChartProps> = ({ topicStats, darkMode }) => {
  const chartData = topicStats.map(stat => ({
    subject: stat.topic.replace('&', '+'),
    mastery: stat.masteryPercentage,
    solved: stat.solvedCount,
    total: stat.totalProblemsInDatabase,
    fullSubject: stat.topic,
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 text-xs">
          <p className="font-bold text-slate-900 dark:text-white mb-1">{data.fullSubject}</p>
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium">
            <span>Độ thành thạo:</span>
            <span className="font-mono text-sm font-bold">{data.mastery}%</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Đã giải: <span className="font-semibold text-emerald-600 dark:text-emerald-400">{data.solved}</span> bài
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm transition-colors">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            Biểu đồ Năng lực Thuật toán (Skill Radar)
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Độ thành thạo theo 7 nhóm chủ đề chính của kỳ thi Olympic Tin học
          </p>
        </div>
      </div>

      <div className="h-[320px] w-full mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="75%" data={chartData}>
            <PolarGrid stroke={darkMode ? '#334155' : '#e2e8f0'} />
            <PolarAngleAxis
              dataKey="subject"
              tick={{
                fill: darkMode ? '#94a3b8' : '#64748b',
                fontSize: 11,
                fontWeight: 500,
              }}
            />
            <PolarRadiusAxis
              angle={30}
              domain={[0, 100]}
              tick={{ fill: darkMode ? '#64748b' : '#94a3b8', fontSize: 10 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Radar
              name="Độ thành thạo (%)"
              dataKey="mastery"
              stroke="#2563eb"
              fill="#3b82f6"
              fillOpacity={darkMode ? 0.35 : 0.25}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend & Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 mt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
        {topicStats.slice(0, 4).map((t, idx) => (
          <div key={idx} className="flex flex-col bg-slate-50 dark:bg-slate-800/50 p-2 rounded-lg">
            <span className="text-[11px] text-slate-500 dark:text-slate-400 truncate">{t.topic}</span>
            <div className="flex items-center justify-between mt-1">
              <span className="font-mono font-bold text-slate-900 dark:text-slate-100">{t.masteryPercentage}%</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded font-medium ${
                t.status === 'STRENGTH' 
                  ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300' 
                  : t.status === 'WEAKNESS' 
                  ? 'bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300'
                  : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
              }`}>
                {t.status === 'STRENGTH' ? 'Mạnh' : t.status === 'WEAKNESS' ? 'Yếu' : 'Ổn'}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

'use client';

import React from 'react';
import { TopicStat } from '../types';
import { Award, AlertCircle, CheckCircle2 } from 'lucide-react';

interface StrengthsAndWeaknessesCardProps {
  strengths: TopicStat[];
  weaknesses: TopicStat[];
  topicStats: TopicStat[];
}

export const StrengthsAndWeaknessesCard: React.FC<StrengthsAndWeaknessesCardProps> = ({
  strengths,
  weaknesses,
  topicStats,
}) => {
  return (
    <div className="loj-card">
      <div className="loj-card-header">
        <div className="flex items-center space-x-2">
          <Award className="w-4 h-4 text-gray-500" />
          <span>Đánh giá Điểm mạnh & Điểm yếu theo Chủ đề (oj.uz)</span>
        </div>
      </div>

      <div className="loj-card-body">
        
        {/* Hai cột Điểm mạnh và Điểm yếu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Điểm mạnh */}
          <div className="border border-emerald-200 bg-emerald-50/40 rounded p-3">
            <h4 className="text-xs font-bold text-emerald-800 flex items-center space-x-1 mb-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Chủ đề Điểm mạnh ({strengths.length})</span>
            </h4>
            <div className="space-y-2 text-xs">
              {strengths.map((s, idx) => (
                <div key={idx} className="bg-white border border-emerald-100 p-2 rounded">
                  <div className="flex justify-between font-medium">
                    <span className="text-emerald-900">{s.topic}</span>
                    <span className="font-mono text-emerald-600 font-bold">{s.solvedCount} bài AC</span>
                  </div>
                  <p className="text-[11px] text-gray-600 mt-1 leading-normal">
                    {s.advice}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Điểm yếu */}
          <div className="border border-rose-200 bg-rose-50/40 rounded p-3">
            <h4 className="text-xs font-bold text-rose-800 flex items-center space-x-1 mb-2">
              <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
              <span>Lỗ hổng & Điểm yếu cần luyện thêm ({weaknesses.length})</span>
            </h4>
            <div className="space-y-2 text-xs">
              {weaknesses.map((w, idx) => (
                <div key={idx} className="bg-white border border-rose-100 p-2 rounded">
                  <div className="flex justify-between font-medium">
                    <span className="text-rose-900">{w.topic}</span>
                    <span className="font-mono text-rose-600 font-bold">{w.unsolvedAttemptedCount} bài dở dang</span>
                  </div>
                  <p className="text-[11px] text-gray-600 mt-1 leading-normal">
                    {w.advice}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bảng chi tiết toàn bộ các chủ đề */}
        <div className="mt-4 pt-3 border-t border-gray-200 overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-gray-200 text-gray-500 font-medium">
                <th className="py-1.5 px-2">Chủ đề thuật toán</th>
                <th className="py-1.5 px-2 text-center">Đã AC</th>
                <th className="py-1.5 px-2 text-center">Dở dang</th>
                <th className="py-1.5 px-2 w-36">Độ hoàn thành</th>
                <th className="py-1.5 px-2 text-center">Đánh giá</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {topicStats.map((t, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="py-2 px-2 font-medium text-gray-800">{t.topic}</td>
                  <td className="py-2 px-2 text-center font-mono font-bold text-emerald-600">{t.solvedCount}</td>
                  <td className="py-2 px-2 text-center font-mono text-amber-600">{t.unsolvedAttemptedCount}</td>
                  <td className="py-2 px-2">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 h-1.5 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${
                            t.status === 'STRENGTH' ? 'bg-emerald-500' : t.status === 'WEAKNESS' ? 'bg-rose-500' : 'bg-blue-500'
                          }`}
                          style={{ width: `${Math.min(100, Math.max(5, t.masteryPercentage))}%` }}
                        />
                      </div>
                      <span className="font-mono text-[11px] text-gray-500 w-8 text-right">{t.masteryPercentage}%</span>
                    </div>
                  </td>
                  <td className="py-2 px-2 text-center">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${
                      t.status === 'STRENGTH'
                        ? 'bg-emerald-100 text-emerald-800'
                        : t.status === 'WEAKNESS'
                        ? 'bg-rose-100 text-rose-800'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {t.status === 'STRENGTH' ? 'Mạnh' : t.status === 'WEAKNESS' ? 'Yếu' : 'Bình thường'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

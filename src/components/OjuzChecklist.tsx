'use client';

import React, { useState, useMemo } from 'react';
import { OJProblem } from '@/types';
import { OJUZ_PROBLEMS } from '@/data/problemset';
import { useLanguage } from '@/context/LanguageContext';
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  Dices, 
  ExternalLink, 
  Search, 
  Trophy, 
  ListChecks, 
} from 'lucide-react';

const CONTEST_LIST = [
  'Tất cả',
  'APIO',
  'IZhO',
  'CEOI',
  'BOI',
  'IOI',
  'JOI',
  'COCI',
  'BalkanOI',
  'Info1Cup',
  'LMIO',
  'NOI',
  'RMI',
];

interface OjuzChecklistProps {
  solvedIds: string[];
  unsolvedIds: string[];
  initialContest?: string;
}

export const OjuzChecklist: React.FC<OjuzChecklistProps> = ({
  solvedIds,
  unsolvedIds,
  initialContest = 'Tất cả',
}) => {
  const { t } = useLanguage();
  const [selectedContest, setSelectedContest] = useState<string>(initialContest);
  const [statusFilter, setStatusFilter] = useState<'all' | 'unsolved' | 'solved' | 'partial'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // State cho bài random
  const [randomContest, setRandomContest] = useState<string>('Tất cả');
  const [randomProblem, setRandomProblem] = useState<OJProblem | null>(null);
  const [randomMessage, setRandomMessage] = useState<string | null>(null);

  const solvedSet = useMemo(() => new Set(solvedIds), [solvedIds]);
  const unsolvedSet = useMemo(() => new Set(unsolvedIds), [unsolvedIds]);

  // Thống kê tiến độ theo từng kỳ thi
  const contestStats = useMemo(() => {
    const stats: Record<string, { total: number; solved: number }> = {};
    for (const c of CONTEST_LIST) {
      if (c === 'Tất cả') continue;
      stats[c] = { total: 0, solved: 0 };
    }

    for (const p of OJUZ_PROBLEMS) {
      for (const c of CONTEST_LIST) {
        if (c === 'Tất cả') continue;
        if (p.contest.toLowerCase().includes(c.toLowerCase()) || p.id.toLowerCase().startsWith(c.toLowerCase())) {
          stats[c].total++;
          if (solvedSet.has(p.id)) {
            stats[c].solved++;
          }
          break;
        }
      }
    }
    return stats;
  }, [solvedSet]);

  // Lọc danh sách bài cho Checklist
  const filteredProblems = useMemo(() => {
    return OJUZ_PROBLEMS.filter((p) => {
      // 1. Lọc theo kỳ thi
      if (selectedContest !== 'Tất cả') {
        const matchContest = p.contest.toLowerCase().includes(selectedContest.toLowerCase()) || 
                             p.id.toLowerCase().startsWith(selectedContest.toLowerCase());
        if (!matchContest) return false;
      }

      // 2. Lọc theo trạng thái AC/Chưa AC
      const isAC = solvedSet.has(p.id);
      const isPartial = unsolvedSet.has(p.id);

      if (statusFilter === 'solved' && !isAC) return false;
      if (statusFilter === 'unsolved' && isAC) return false;
      if (statusFilter === 'partial' && !isPartial) return false;

      // 3. Lọc theo từ khóa tìm kiếm
      if (searchQuery.trim()) {
        const q = searchQuery.trim().toLowerCase();
        const matchTitle = p.title.toLowerCase().includes(q);
        const matchId = p.id.toLowerCase().includes(q);
        const matchContest = p.contest.toLowerCase().includes(q);
        if (!matchTitle && !matchId && !matchContest) return false;
      }

      return true;
    });
  }, [selectedContest, statusFilter, searchQuery, solvedSet, unsolvedSet]);

  // Xử lý Random bài chưa AC theo tên kỳ thi
  const handleRandomProblem = () => {
    let pool = OJUZ_PROBLEMS.filter(p => !solvedSet.has(p.id));

    if (randomContest !== 'Tất cả') {
      pool = pool.filter(p => 
        p.contest.toLowerCase().includes(randomContest.toLowerCase()) ||
        p.id.toLowerCase().startsWith(randomContest.toLowerCase())
      );
    }

    if (pool.length === 0) {
      setRandomProblem(null);
      setRandomMessage(t('congrats_all_solved'));
      return;
    }

    const idx = Math.floor(Math.random() * pool.length);
    setRandomProblem(pool[idx]);
    setRandomMessage(null);
  };

  const totalProblems = OJUZ_PROBLEMS.length;
  const totalSolved = solvedIds.length;
  const totalPartial = unsolvedIds.length;

  return (
    <div className="space-y-4">

      {/* ======================================================= */}
      {/* 1. KHUNG RANDOM BÀI CHƯA AC THEO KỲ THI TRÊN OJ.UZ     */}
      {/* ======================================================= */}
      <div className="bg-white border border-[#e8e8e8] rounded shadow-sm overflow-hidden">
        <div className="bg-[#fafafa] px-4 py-3 border-b border-[#e8e8e8] flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center space-x-2">
            <Dices className="w-4 h-4 text-blue-600" />
            <h2 className="text-sm font-semibold text-gray-800 tracking-tight">
              {t('random_oj_title')}
            </h2>
          </div>
          <span className="text-xs text-gray-500 font-mono">
            {t('random_oj_remaining')} <strong className="text-blue-600">{Math.max(0, totalProblems - totalSolved)}</strong> {t('random_oj_unsolved_count')}
          </span>
        </div>

        <div className="p-4 sm:p-5 space-y-4">
          <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
            <div className="flex-1 min-w-[200px]">
              <label className="block text-[11px] font-medium text-gray-600 mb-1">
                {t('select_contest_label')}
              </label>
              <select
                value={randomContest}
                onChange={(e) => setRandomContest(e.target.value)}
                className="w-full text-xs bg-[#fafbfc] border border-gray-300 rounded px-2.5 py-2 focus:outline-none focus:border-blue-500 font-medium text-gray-800 font-mono"
              >
                {CONTEST_LIST.map((c) => (
                  <option key={c} value={c}>
                    {c === 'Tất cả' ? t('all_contests') : c} {c !== 'Tất cả' && contestStats[c] ? `(${contestStats[c].solved}/${contestStats[c].total} AC)` : ''}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={handleRandomProblem}
                className="w-full sm:w-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-medium transition-colors flex items-center justify-center space-x-1.5 shadow-sm"
              >
                <Dices className="w-3.5 h-3.5" />
                <span>{t('btn_random_oj')}</span>
              </button>
            </div>
          </div>

          {/* Thông báo nếu đã AC hết */}
          {randomMessage && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded text-xs text-emerald-800 flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{randomMessage}</span>
            </div>
          )}

          {/* Hiển thị bài random được */}
          {randomProblem && (
            <div className="p-4 bg-[#f8faff] border border-blue-200 rounded-md space-y-3">
              <div className="flex items-start justify-between flex-wrap gap-2">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-xs font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
                      {randomProblem.contest}
                    </span>
                    <span className="text-gray-300">·</span>
                    <h3 className="font-bold text-gray-900 text-sm">
                      {randomProblem.title}
                    </h3>
                    <span className="text-xs text-gray-500 font-mono">
                      ({randomProblem.id})
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 mt-2 text-xs">
                    {unsolvedSet.has(randomProblem.id) ? (
                      <span className="inline-flex items-center space-x-1 text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                        <Clock className="w-3 h-3" />
                        <span>{t('status_partial')}</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center space-x-1 text-gray-600 bg-gray-100 px-2 py-0.5 rounded">
                        <Circle className="w-3 h-3 text-gray-400" />
                        <span>{t('status_never_submitted')}</span>
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleRandomProblem}
                    className="px-3 py-1.5 bg-white hover:bg-gray-50 border border-gray-300 rounded text-xs text-gray-700 font-medium transition-colors flex items-center space-x-1"
                  >
                    <Dices className="w-3.5 h-3.5" />
                    <span>{t('btn_change_problem')}</span>
                  </button>

                  <a
                    href={randomProblem.ojuzUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-medium transition-colors shadow-sm"
                  >
                    <span>{t('btn_open_ojuz')}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ======================================================= */}
      {/* 2. TIẾN ĐỘ THEO KỲ THI (CONTEST COMPLETION OVERVIEW)    */}
      {/* ======================================================= */}
      <div className="bg-white border border-[#e8e8e8] rounded shadow-sm overflow-hidden">
        <div className="bg-[#fafafa] px-4 py-3 border-b border-[#e8e8e8] flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Trophy className="w-4 h-4 text-blue-600" />
            <h2 className="text-sm font-semibold text-gray-800 tracking-tight">
              {t('contest_progress_title')}
            </h2>
          </div>
          <span className="text-xs text-gray-500 font-mono">
            {totalSolved} / {totalProblems} {t('problems_unit')} AC ({totalProblems > 0 ? Math.round((totalSolved / totalProblems) * 100) : 0}%)
          </span>
        </div>

        <div className="p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {Object.entries(contestStats).map(([contest, stat]) => {
            const percent = stat.total > 0 ? Math.round((stat.solved / stat.total) * 100) : 0;
            const isSelected = selectedContest === contest;

            return (
              <div
                key={contest}
                onClick={() => setSelectedContest(isSelected ? 'Tất cả' : contest)}
                className={`p-2.5 rounded border cursor-pointer transition-all ${
                  isSelected
                    ? 'border-blue-500 bg-blue-50/50 shadow-sm'
                    : 'border-gray-200 bg-[#fafbfc] hover:border-gray-300'
                }`}
                title={t('filter_by_contest_hint')}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-xs text-gray-800 font-mono">
                    {contest}
                  </span>
                  <span className="text-[11px] font-mono text-gray-600">
                    {stat.solved}/{stat.total}
                  </span>
                </div>

                <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full transition-all"
                    style={{ width: `${percent}%` }}
                  />
                </div>

                <div className="mt-1 text-right text-[10px] text-gray-500 font-mono">
                  {percent}%
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ======================================================= */}
      {/* 3. BẢNG OI CHECKLIST (DANH SÁCH BÀI TẬP KHÔNG TAG/KHÔNG RATING) */}
      {/* ======================================================= */}
      <div className="bg-white border border-[#e8e8e8] rounded shadow-sm overflow-hidden">
        {/* Thanh tiêu đề và bộ lọc */}
        <div className="bg-[#fafafa] px-4 py-3 border-b border-[#e8e8e8] flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center space-x-2">
            <ListChecks className="w-4 h-4 text-blue-600" />
            <h2 className="text-sm font-semibold text-gray-800 tracking-tight">
              OI Checklist ({filteredProblems.length} {t('problems_unit')})
            </h2>
          </div>

          {/* Bộ lọc trạng thái */}
          <div className="flex items-center space-x-1 bg-white border border-gray-200 p-0.5 rounded text-xs">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-2.5 py-1 rounded transition-colors ${
                statusFilter === 'all' ? 'bg-[#f0f2f5] font-medium text-gray-900' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('all_filter')}
            </button>
            <button
              onClick={() => setStatusFilter('unsolved')}
              className={`px-2.5 py-1 rounded transition-colors ${
                statusFilter === 'unsolved' ? 'bg-[#f0f2f5] font-medium text-gray-900' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('unsolved_filter')}
            </button>
            <button
              onClick={() => setStatusFilter('solved')}
              className={`px-2.5 py-1 rounded transition-colors ${
                statusFilter === 'solved' ? 'bg-[#f0f2f5] font-medium text-gray-900' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('solved_filter')}
            </button>
            <button
              onClick={() => setStatusFilter('partial')}
              className={`px-2.5 py-1 rounded transition-colors ${
                statusFilter === 'partial' ? 'bg-[#f0f2f5] font-medium text-gray-900' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('partial_filter')}
            </button>
          </div>
        </div>

        {/* Thanh tìm kiếm & chọn kỳ thi */}
        <div className="p-3 border-b border-gray-100 bg-[#fafbfc] flex items-center gap-3 flex-wrap sm:flex-nowrap">
          <div className="relative flex-1 min-w-[180px]">
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('search_problem_placeholder')}
              className="w-full text-xs bg-white border border-gray-300 rounded pl-8 pr-3 py-1.5 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-500 whitespace-nowrap">{t('col_contest')}:</span>
            <select
              value={selectedContest}
              onChange={(e) => setSelectedContest(e.target.value)}
              className="text-xs bg-white border border-gray-300 rounded px-2.5 py-1.5 focus:outline-none focus:border-blue-500 font-mono"
            >
              {CONTEST_LIST.map((c) => (
                <option key={c} value={c}>
                  {c === 'Tất cả' ? t('all_contests') : c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Bảng danh sách bài tập */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#e8e8e8] bg-[#fafafa] text-gray-600 font-medium">
                <th className="py-2.5 px-3 w-12 text-center">{t('col_status')}</th>
                <th className="py-2.5 px-3 w-36">ID</th>
                <th className="py-2.5 px-3">{t('col_problem')}</th>
                <th className="py-2.5 px-3 w-32">{t('col_contest')}</th>
                <th className="py-2.5 px-3 w-20 text-center">Score</th>
                <th className="py-2.5 px-3 w-24 text-right">{t('col_action')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f0f0f0]">
              {filteredProblems.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-gray-400">
                    {t('no_problems_found')}
                  </td>
                </tr>
              ) : (
                filteredProblems.map((p) => {
                  const isAC = solvedSet.has(p.id);
                  const isPartial = unsolvedSet.has(p.id);

                  return (
                    <tr
                      key={p.id}
                      className={`hover:bg-[#f9fafb] transition-colors ${
                        isAC ? 'bg-emerald-50/20' : ''
                      }`}
                    >
                      {/* Trạng thái Checkbox */}
                      <td className="py-2 px-3 text-center">
                        {isAC ? (
                          <span title="100/100 AC">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 inline" />
                          </span>
                        ) : isPartial ? (
                          <span title="Partial score (<100)">
                            <Clock className="w-4 h-4 text-amber-500 inline" />
                          </span>
                        ) : (
                          <span title="Unsolved">
                            <Circle className="w-4 h-4 text-gray-300 inline" />
                          </span>
                        )}
                      </td>

                      {/* Mã bài */}
                      <td className="py-2 px-3 font-mono font-medium text-gray-800">
                        {p.id}
                      </td>

                      {/* Tên bài */}
                      <td className="py-2 px-3">
                        <a
                          href={p.ojuzUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-gray-900 hover:text-blue-600 transition-colors"
                        >
                          {p.title}
                        </a>
                      </td>

                      {/* Kỳ thi */}
                      <td className="py-2 px-3 text-gray-600 font-mono text-[11px]">
                        {p.contest}
                      </td>

                      {/* Điểm */}
                      <td className="py-2 px-3 text-center font-mono">
                        {isAC ? (
                          <span className="font-bold text-emerald-600">100</span>
                        ) : isPartial ? (
                          <span className="font-semibold text-amber-600">&gt;0</span>
                        ) : (
                          <span className="text-gray-400">0</span>
                        )}
                      </td>

                      {/* Thao tác */}
                      <td className="py-2 px-3 text-right">
                        <a
                          href={p.ojuzUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 text-xs text-blue-600 hover:text-blue-800 font-medium"
                        >
                          <span>oj.uz</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Footer phân trang / đếm số lượng */}
        <div className="p-3 bg-[#fafafa] border-t border-[#e8e8e8] flex items-center justify-between text-xs text-gray-500">
          <span>
            {t('showing_problems')} <strong>{filteredProblems.length}</strong> {t('problems_unit')}
          </span>
          <span>
            {totalSolved} AC · {totalPartial} Partial · {Math.max(0, totalProblems - totalSolved - totalPartial)} Unsolved
          </span>
        </div>
      </div>

    </div>
  );
};

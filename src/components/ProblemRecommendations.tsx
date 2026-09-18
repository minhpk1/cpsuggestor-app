'use client';

import React, { useState } from 'react';
import { OJProblem, RecommendationGroup } from '../types';
import { OJUZ_PROBLEMS } from '../data/problemset';
import { ExternalLink, Lightbulb, CheckCircle2, ChevronDown, ChevronUp, Layers, BookOpen } from 'lucide-react';

interface ProblemRecommendationsProps {
  recommendations: RecommendationGroup;
  solvedIds: string[];
  unsolvedIds: string[];
  searchFilter?: string;
  contestFilter?: string;
}

export const ProblemRecommendations: React.FC<ProblemRecommendationsProps> = ({
  recommendations,
  solvedIds,
  unsolvedIds,
  searchFilter = '',
  contestFilter = 'Tất cả',
}) => {
  const [activeTab, setActiveTab] = useState<'weakness' | 'limit' | 'unsolved' | 'all'>('weakness');
  const [selectedContest, setSelectedContest] = useState<string>(contestFilter || 'Tất cả');
  const [selectedTopic, setSelectedTopic] = useState<string>('Tất cả');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Đồng bộ prop contestFilter nếu có thay đổi từ sidebar
  React.useEffect(() => {
    if (contestFilter) {
      setSelectedContest(contestFilter);
    }
  }, [contestFilter]);

  const solvedSet = new Set(solvedIds);
  const unsolvedSet = new Set(unsolvedIds);

  let problems: (OJProblem & { userBestScore?: number })[] = [];
  if (activeTab === 'weakness') {
    problems = recommendations.fixWeaknesses;
  } else if (activeTab === 'limit') {
    problems = recommendations.pushLimits;
  } else if (activeTab === 'unsolved') {
    problems = recommendations.finishUnsolved;
  } else {
    problems = OJUZ_PROBLEMS;
  }

  // Lọc theo kỳ thi (APIO, IZhO, CEOI, BOI, IOI, JOI, COCI...)
  if (selectedContest !== 'Tất cả') {
    problems = problems.filter(p => p.contest.toLowerCase().includes(selectedContest.toLowerCase()) || p.id.toLowerCase().startsWith(selectedContest.toLowerCase()));
  }

  // Lọc theo Topic
  if (selectedTopic !== 'Tất cả') {
    problems = problems.filter(p => p.topic === selectedTopic);
  }

  // Lọc theo từ khóa tìm kiếm
  if (searchFilter.trim()) {
    const q = searchFilter.trim().toLowerCase();
    problems = problems.filter(p => p.id.toLowerCase().includes(q) || p.title.toLowerCase().includes(q) || p.contest.toLowerCase().includes(q));
  }

  return (
    <div className="loj-card">
      
      {/* Header matching LibreOJ Problem Set panel */}
      <div className="loj-card-header flex-wrap gap-2">
        <div className="flex items-center space-x-2">
          <BookOpen className="w-4 h-4 text-gray-500" />
          <span>Danh sách Bài tập oj.uz ({problems.length} bài)</span>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center space-x-1 text-xs">
          <button
            onClick={() => setActiveTab('weakness')}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeTab === 'weakness'
                ? 'bg-blue-600 text-white font-medium'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Bù điểm yếu ({recommendations.fixWeaknesses.length})
          </button>
          <button
            onClick={() => setActiveTab('limit')}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeTab === 'limit'
                ? 'bg-blue-600 text-white font-medium'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Thử thách đỉnh cao ({recommendations.pushLimits.length})
          </button>
          <button
            onClick={() => setActiveTab('unsolved')}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeTab === 'unsolved'
                ? 'bg-blue-600 text-white font-medium'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Bài dở dang ({recommendations.finishUnsolved.length})
          </button>
          <button
            onClick={() => setActiveTab('all')}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeTab === 'all'
                ? 'bg-blue-600 text-white font-medium'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Kho 357 bài oj.uz
          </button>
        </div>
      </div>

      {/* Filter Toolbar matching LibreOJ */}
      <div className="px-4 py-2 bg-gray-50 border-b border-gray-200 flex items-center justify-between text-xs flex-wrap gap-2">
        
        {/* Contest Pills */}
        <div className="flex items-center space-x-1 flex-wrap">
          <span className="text-gray-500 mr-1">Kỳ thi:</span>
          {['Tất cả', 'APIO', 'IZhO', 'CEOI', 'BOI', 'IOI', 'JOI', 'COCI'].map(c => (
            <button
              key={c}
              onClick={() => setSelectedContest(c)}
              className={`px-2 py-0.5 rounded font-mono ${
                selectedContest === c
                  ? 'bg-gray-800 text-white font-medium'
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Topic dropdown */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-500">Chủ đề:</span>
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="px-2 py-1 border border-gray-300 rounded bg-white text-gray-700 text-xs focus:outline-none"
          >
            <option value="Tất cả">Mọi chủ đề</option>
            <option value="Dynamic Programming">Dynamic Programming</option>
            <option value="Graph & Tree">Graph & Tree</option>
            <option value="Data Structures">Data Structures</option>
            <option value="Math & Combinatorics">Math & Combinatorics</option>
            <option value="Greedy & Two Pointers">Greedy & Two Pointers</option>
            <option value="Strings & Geometry">Strings & Geometry</option>
            <option value="Interactive & Constructive">Interactive & Constructive</option>
          </select>
        </div>

      </div>

      {/* Table matching LibreOJ exact table format */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-gray-200 text-gray-500 bg-white">
              <th className="py-2.5 px-4 w-12 text-center">Status</th>
              <th className="py-2.5 px-4">Title / ID</th>
              <th className="py-2.5 px-4 w-28">Contest</th>
              <th className="py-2.5 px-4">Chủ đề</th>
              <th className="py-2.5 px-4 w-24 text-center">Độ khó</th>
              <th className="py-2.5 px-4 w-20 text-center">Link</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 font-normal">
            {problems.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-8 text-center text-gray-400 italic">
                  Không có bài tập nào phù hợp với bộ lọc hiện tại.
                </td>
              </tr>
            ) : (
              problems.slice(0, 50).map((prob) => {
                const isAc = solvedSet.has(prob.id);
                const isUnsolved = unsolvedSet.has(prob.id);
                const isExpanded = expandedId === prob.id;

                return (
                  <React.Fragment key={prob.id}>
                    <tr className="hover:bg-gray-50 transition-colors">
                      {/* Status dot */}
                      <td className="py-2.5 px-4 text-center">
                        {isAc ? (
                          <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500" title="Accepted (100 pts)" />
                        ) : isUnsolved ? (
                          <span className="inline-block w-2.5 h-2.5 rounded-full bg-amber-500" title="Chưa full điểm" />
                        ) : (
                          <span className="inline-block w-2 h-2 rounded-full bg-gray-300" title="Chưa làm" />
                        )}
                      </td>

                      {/* Problem Title & ID */}
                      <td className="py-2.5 px-4">
                        <div className="flex items-center space-x-2">
                          <a
                            href={prob.ojuzUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="loj-link font-medium font-mono text-[13px]"
                          >
                            {prob.id}
                          </a>
                          {prob.hint && (
                            <button
                              onClick={() => setExpandedId(isExpanded ? null : prob.id)}
                              className="text-amber-500 hover:text-amber-600"
                              title="Xem gợi ý hướng giải"
                            >
                              <Lightbulb className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </td>

                      {/* Contest */}
                      <td className="py-2.5 px-4 text-gray-600 font-mono">
                        {prob.contest}
                      </td>

                      {/* Topic */}
                      <td className="py-2.5 px-4 text-gray-600">
                        <span>{prob.topic}</span>
                        <span className="text-gray-400 text-[11px] block">{prob.subtopic}</span>
                      </td>

                      {/* Difficulty */}
                      <td className="py-2.5 px-4 text-center">
                        <span className={`px-2 py-0.5 rounded text-[11px] ${
                          prob.difficulty === 'Platinum'
                            ? 'bg-red-50 text-red-700 font-semibold border border-red-200'
                            : prob.difficulty === 'Gold'
                            ? 'bg-amber-50 text-amber-700 font-medium border border-amber-200'
                            : prob.difficulty === 'Silver'
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : 'bg-gray-100 text-gray-700 border border-gray-200'
                        }`}>
                          {prob.difficulty}
                        </span>
                      </td>

                      {/* Action */}
                      <td className="py-2.5 px-4 text-center">
                        <a
                          href={prob.ojuzUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="loj-link inline-flex items-center space-x-1"
                          title="Làm bài trên oj.uz"
                        >
                          <span>oj.uz</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </td>
                    </tr>

                    {/* Hint Row */}
                    {isExpanded && prob.hint && (
                      <tr className="bg-amber-50/50">
                        <td colSpan={6} className="py-2.5 px-6 text-xs text-amber-900 border-l-2 border-amber-400">
                          <strong>Gợi ý:</strong> {prob.hint}
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {problems.length > 50 && (
        <div className="py-2 text-center bg-gray-50 border-t border-gray-200 text-xs text-gray-500">
          Hiển thị 50 / {problems.length} bài. Dùng bộ lọc hoặc ô tìm kiếm để thu hẹp kết quả.
        </div>
      )}

    </div>
  );
};

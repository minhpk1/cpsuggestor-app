'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  ROADMAP_PHASES,
  ROADMAP_TOPICS,
  RoadmapTopic,
  RoadmapProblem,
  RoadmapPhase,
} from '@/data/roadmapData';
import { CANONICAL_CODES } from '@/data/canonicalCodes';
import { useLanguage } from '@/context/LanguageContext';
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Check,
  RefreshCw,
  ChevronsLeft,
  ChevronsRight,
  MoreVertical,
  Copy,
  Code2,
} from 'lucide-react';

interface RoadmapViewProps {
  initialHandle?: string;
}

// Helper to remove any leftover LaTeX math syntax and convert to clean, readable Unicode
function cleanMath(text: string): string {
  if (!text) return '';
  return text
    .replace(/\\le/g, '≤')
    .replace(/\\ge/g, '≥')
    .replace(/\\ne/g, '≠')
    .replace(/\\approx/g, '≈')
    .replace(/\\times/g, '×')
    .replace(/\\dots/g, '...')
    .replace(/\\sum/g, '∑')
    .replace(/\\prod/g, '∏')
    .replace(/\\log/g, 'log')
    .replace(/\\gcd/g, 'gcd')
    .replace(/\\phi/g, 'φ')
    .replace(/\\pi/g, 'π')
    .replace(/\\oplus/g, 'XOR')
    .replace(/\\implies/g, '⇒')
    .replace(/\\iff/g, '⇔')
    .replace(/\\mathrel\{\+\}=/g, '+=')
    .replace(/\\mathrel\{-\}=/g, '-=')
    .replace(/\\sqrt\{([^}]+)\}/g, '√$1')
    .replace(/\\sqrt/g, '√')
    .replace(/\\binom\{([^}]+)\}\{([^}]+)\}/g, 'C($1, $2)')
    .replace(/\\lfloor\s*([^\\/]+?)\s*\\rfloor/g, '⌊$1⌋')
    .replace(/\\lfloor/g, '⌊')
    .replace(/\\rfloor/g, '⌋')
    .replace(/\\pmod\{([^}]+)\}/g, '(mod $1)')
    .replace(/\\pmod/g, 'mod')
    .replace(/\\sim/g, '~')
    .replace(/\\land/g, 'AND')
    .replace(/\\lor/g, 'OR')
    .replace(/\\neg/g, 'NOT')
    .replace(/\\mathbb\{Z\}_p/g, 'Z_p')
    .replace(/10\^5/g, '10⁵')
    .replace(/10\^6/g, '10⁶')
    .replace(/10\^7/g, '10⁷')
    .replace(/10\^9/g, '10⁹')
    .replace(/2\^N/g, '2ᴺ')
    .replace(/2\^k/g, '2ᵏ')
    .replace(/N\^2/g, 'N²')
    .replace(/N\^3/g, 'N³')
    .replace(/\$/g, '')
    .trim();
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({ initialHandle = 'Benq' }) => {
  const { lang } = useLanguage();
  const isEn = lang === 'en';

  // Active topic & Phase selection
  const [selectedTopicId, setSelectedTopicId] = useState<number>(1);
  const [selectedPhaseId, setSelectedPhaseId] = useState<number>(1);

  // Sidebar collapse state (like USACO Guide `<<` button)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);

  // Solved problems set (keys: `${contestId}_${index}`)
  const [solvedSet, setSolvedSet] = useState<Set<string>>(new Set());

  // Handle & Codeforces Sync State
  const [handle, setHandle] = useState<string>(initialHandle);
  const [syncing, setSyncing] = useState<boolean>(false);
  const [syncMessage, setSyncMessage] = useState<string | null>(null);

  // Canonical code viewer state
  const [codeLang, setCodeLang] = useState<'vi' | 'en'>(lang === 'en' ? 'en' : 'vi');
  const [codeCopied, setCodeCopied] = useState<boolean>(false);
  const [isCodeExpanded, setIsCodeExpanded] = useState<boolean>(true);

  // Sync codeLang with global language changes by default
  useEffect(() => {
    setCodeLang(lang === 'en' ? 'en' : 'vi');
  }, [lang]);

  const copyCode = (text: string) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2000);
  };

  // Dropdown states
  const [isPhaseDropdownOpen, setIsPhaseDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Load saved state from LocalStorage on mount
  useEffect(() => {
    try {
      const savedSolved = localStorage.getItem('roadmap_ac_problems');
      if (savedSolved) {
        const parsed = JSON.parse(savedSolved);
        if (Array.isArray(parsed)) {
          setSolvedSet(new Set(parsed));
        }
      }

      const savedTopic = localStorage.getItem('roadmap_active_topic');
      if (savedTopic) {
        const topicId = parseInt(savedTopic, 10);
        const found = ROADMAP_TOPICS.find((t) => t.id === topicId);
        if (found) {
          setSelectedTopicId(topicId);
          setSelectedPhaseId(found.phaseId);
        }
      }

      const savedHandle = localStorage.getItem('cf_saved_handle') || initialHandle;
      if (savedHandle) {
        setHandle(savedHandle);
      }
    } catch (e) {
      console.error('Failed to load state from localStorage', e);
    }
  }, [initialHandle]);

  // Close phase dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsPhaseDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Select a topic and update localStorage
  const selectTopic = (id: number) => {
    setSelectedTopicId(id);
    localStorage.setItem('roadmap_active_topic', id.toString());
    const found = ROADMAP_TOPICS.find((t) => t.id === id);
    if (found) {
      setSelectedPhaseId(found.phaseId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Switch Phase via USACO Guide dropdown
  const selectPhase = (phaseId: number) => {
    setSelectedPhaseId(phaseId);
    setIsPhaseDropdownOpen(false);
    const firstTopic = ROADMAP_TOPICS.find((t) => t.phaseId === phaseId);
    if (firstTopic) {
      selectTopic(firstTopic.id);
    }
  };

  // Next / Prev Topic navigation
  const goToPrevTopic = () => {
    if (selectedTopicId > 1) {
      selectTopic(selectedTopicId - 1);
    }
  };

  const goToNextTopic = () => {
    if (selectedTopicId < ROADMAP_TOPICS.length) {
      selectTopic(selectedTopicId + 1);
    }
  };

  // Toggle problem solved state
  const toggleProblemSolved = (contestId: number, index: string) => {
    const key = `${contestId}_${index}`;
    setSolvedSet((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      localStorage.setItem('roadmap_ac_problems', JSON.stringify(Array.from(next)));
      return next;
    });
  };

  // Sync with Codeforces API
  const syncWithCodeforces = async () => {
    if (!handle.trim()) return;
    setSyncing(true);
    setSyncMessage(null);

    try {
      localStorage.setItem('cf_saved_handle', handle.trim());
      const res = await fetch(
        `https://codeforces.com/api/user.status?handle=${encodeURIComponent(handle.trim())}&from=1&count=10000`
      );
      const data = await res.json();

      if (data.status !== 'OK') {
        throw new Error(data.comment || 'Không thể kết nối API Codeforces');
      }

      const cfSolved = new Set<string>();
      for (const sub of data.result) {
        if (sub.verdict === 'OK' && sub.problem?.contestId && sub.problem?.index) {
          cfSolved.add(`${sub.problem.contestId}_${sub.problem.index.toUpperCase()}`);
        }
      }

      setSolvedSet((prev) => {
        const merged = new Set(prev);
        cfSolved.forEach((key) => merged.add(key));

        let roadmapSolvedCount = 0;
        for (const topic of ROADMAP_TOPICS) {
          for (const prob of topic.problems) {
            if (merged.has(`${prob.contestId}_${prob.index}`)) {
              roadmapSolvedCount++;
            }
          }
        }

        localStorage.setItem('roadmap_ac_problems', JSON.stringify(Array.from(merged)));
        const totalProblemsCount = ROADMAP_TOPICS.reduce((acc, t) => acc + t.problems.length, 0);
        setSyncMessage(
          isEn
            ? `Synced! You have solved ${roadmapSolvedCount}/${totalProblemsCount} problems.`
            : `Đã đồng bộ! Bạn đã AC ${roadmapSolvedCount}/${totalProblemsCount} bài tập.`
        );
        return merged;
      });
    } catch (err: any) {
      console.error(err);
      setSyncMessage(
        isEn
          ? `Sync Error: ${err.message || 'Could not fetch data'}`
          : `Lỗi: ${err.message || 'Không thể lấy dữ liệu'}`
      );
    } finally {
      setSyncing(false);
    }
  };

  // Active topic & phase objects
  const currentTopic = useMemo(
    () => ROADMAP_TOPICS.find((t) => t.id === selectedTopicId) || ROADMAP_TOPICS[0],
    [selectedTopicId]
  );

  const currentPhase = useMemo(
    () => ROADMAP_PHASES.find((p) => p.id === currentTopic.phaseId) || ROADMAP_PHASES[0],
    [currentTopic]
  );

  // Solved count in current topic
  const currentTopicSolvedCount = useMemo(() => {
    return currentTopic.problems.filter((p) =>
      solvedSet.has(`${p.contestId}_${p.index}`)
    ).length;
  }, [currentTopic, solvedSet]);

  // Overall statistics
  const totalSolvedCount = useMemo(() => {
    let count = 0;
    for (const t of ROADMAP_TOPICS) {
      for (const p of t.problems) {
        if (solvedSet.has(`${p.contestId}_${p.index}`)) {
          count++;
        }
      }
    }
    return count;
  }, [solvedSet]);

  // Total problems across all topics
  const totalRoadmapProblems = useMemo(() => {
    return ROADMAP_TOPICS.reduce((acc, t) => acc + t.problems.length, 0);
  }, []);

  // Topics in current phase
  const phaseTopics = useMemo(
    () => ROADMAP_TOPICS.filter((t) => t.phaseId === selectedPhaseId),
    [selectedPhaseId]
  );

  // Status text for the topic dropdown button
  const topicStatusInfo = useMemo(() => {
    if (currentTopicSolvedCount === 0) {
      return {
        text: isEn ? 'Not Started' : 'Chưa bắt đầu',
        color: 'text-gray-600 border-gray-300 bg-white'
      };
    }
    if (currentTopicSolvedCount === 10) {
      return {
        text: isEn ? 'Complete' : 'Hoàn thành',
        color: 'text-emerald-700 border-emerald-300 bg-emerald-50'
      };
    }
    return {
      text: isEn ? 'In Progress' : 'Đang làm',
      color: 'text-blue-700 border-blue-300 bg-blue-50'
    };
  }, [currentTopicSolvedCount, isEn]);

  // Rating badge styling
  const getRatingBadge = (rating: number) => {
    if (rating < 1200) return 'text-gray-600 bg-gray-100 border-gray-200';
    if (rating < 1400) return 'text-emerald-700 bg-emerald-50 border-emerald-200';
    if (rating < 1600) return 'text-cyan-700 bg-cyan-50 border-cyan-200';
    if (rating < 1900) return 'text-blue-700 bg-blue-50 border-blue-200';
    if (rating < 2200) return 'text-violet-700 bg-violet-50 border-violet-200';
    if (rating < 2400) return 'text-amber-800 bg-amber-50 border-amber-200';
    return 'text-rose-700 bg-rose-50 border-rose-200';
  };

  // Localized texts
  const currentTopicName = isEn ? currentTopic.nameEn : currentTopic.nameVi;
  const currentPhaseTitle = isEn ? currentPhase.titleEn : currentPhase.titleVi;
  const currentTopicTier = isEn ? currentTopic.tierEn : currentTopic.tierVi;
  const currentComplexity = cleanMath(isEn ? currentTopic.complexityEn : currentTopic.complexityVi);
  const currentEssence = (isEn ? currentTopic.essenceEn : currentTopic.essenceVi).map(cleanMath);

  // Canonical C++ implementation data
  const canonicalData = CANONICAL_CODES[currentTopic.id];
  const activeCanonicalCode = canonicalData
    ? (codeLang === 'en' ? canonicalData.codeEn : canonicalData.codeVi)
    : '';

  return (
    <div className="bg-white min-h-[85vh] border border-[#e5e7eb] rounded-lg shadow-xs overflow-hidden flex flex-col font-sans text-[#1f2937]">
      
      {/* ========================================================================= */}
      {/* USACO GUIDE TOP UTILITY BAR (SYNC & TOTAL PROGRESS)                        */}
      {/* ========================================================================= */}
      <div className="bg-[#f9fafb] border-b border-[#e5e7eb] px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between text-xs text-gray-600 gap-2">
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-gray-900">
            {isEn ? 'CP Algorithm Roadmap' : 'Lộ trình Thuật toán CP'}
          </span>
          <span className="text-gray-300">•</span>
          <span className="font-mono text-gray-500">
            {ROADMAP_TOPICS.length} {isEn ? 'Topics' : 'Chủ đề'} / {totalRoadmapProblems} {isEn ? 'Problems' : 'Bài tập'}
          </span>
          <span className="text-gray-300">•</span>
          <span className="font-mono text-emerald-700 font-semibold">
            {isEn ? 'Solved:' : 'Đã AC:'} {totalSolvedCount} / {totalRoadmapProblems} ({totalRoadmapProblems > 0 ? Math.round((totalSolvedCount / totalRoadmapProblems) * 100) : 0}%)
          </span>
        </div>

        {/* Codeforces Sync Control */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-500 font-medium hidden sm:inline">CF Handle:</span>
          <input
            type="text"
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
            placeholder="Handle..."
            className="px-2.5 py-1 text-xs border border-gray-300 rounded font-mono w-32 sm:w-36 bg-white focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={syncWithCodeforces}
            disabled={syncing}
            className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-semibold flex items-center space-x-1 cursor-pointer transition-colors disabled:opacity-50"
            title={isEn ? 'Sync solved problems from Codeforces' : 'Đồng bộ bài đã giải từ Codeforces'}
          >
            <RefreshCw className={`w-3 h-3 ${syncing ? 'animate-spin' : ''}`} />
            <span>{syncing ? (isEn ? 'Syncing...' : 'Đang sync...') : (isEn ? 'Sync CF' : 'Đồng bộ CF')}</span>
          </button>
          {syncMessage && (
            <span className="text-[11px] text-emerald-600 font-medium truncate max-w-xs">
              {syncMessage}
            </span>
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MAIN CONTAINER: SIDEBAR + CONTENT CANVAS                                  */}
      {/* ========================================================================= */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* ======================================================================= */}
        {/* LEFT SIDEBAR: USACO GUIDE TIMELINE TREE & PHASE DROPDOWN                */}
        {/* ======================================================================= */}
        <aside
          className={`${
            isSidebarCollapsed ? 'w-0 hidden md:w-0 md:hidden' : 'w-72 lg:w-80'
          } shrink-0 bg-[#fafafa] border-r border-[#e5e7eb] flex flex-col transition-all duration-200 select-none`}
        >
          {/* Sidebar Header: Phase Selector Dropdown */}
          <div className="p-3.5 border-b border-[#e5e7eb] relative" ref={dropdownRef}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase">
                {isEn ? 'Division / Phase' : 'Giai đoạn / Phân hạng'}
              </span>
              <button
                onClick={() => setIsSidebarCollapsed(true)}
                className="text-gray-400 hover:text-gray-700 p-1 rounded hover:bg-gray-200 transition-colors"
                title={isEn ? 'Collapse Sidebar' : 'Thu gọn thanh bên'}
              >
                <ChevronsLeft className="w-4 h-4" />
              </button>
            </div>

            {/* Dropdown Button (like USACO Guide "Advanced v") */}
            <button
              onClick={() => setIsPhaseDropdownOpen(!isPhaseDropdownOpen)}
              className="w-full bg-white border border-[#d1d5db] hover:border-blue-500 rounded px-3 py-2 text-left text-sm font-bold text-gray-900 shadow-xs flex items-center justify-between transition-colors cursor-pointer"
            >
              <span className="truncate">
                P{currentPhase.id}: {currentPhaseTitle.split(':')[1]?.split('(')[0]?.trim() || currentPhaseTitle}
              </span>
              <ChevronDown className="w-4 h-4 text-gray-500 shrink-0 ml-1" />
            </button>

            {/* Dropdown Menu */}
            {isPhaseDropdownOpen && (
              <div className="absolute left-3 right-3 top-[76px] bg-white border border-gray-200 rounded-md shadow-lg z-50 py-1 divide-y divide-gray-100 text-xs">
                {ROADMAP_PHASES.map((phase) => {
                  const isPhaseActive = phase.id === selectedPhaseId;
                  const phaseTitle = isEn ? phase.titleEn : phase.titleVi;
                  return (
                    <button
                      key={phase.id}
                      onClick={() => selectPhase(phase.id)}
                      className={`w-full text-left px-3 py-2.5 transition-colors flex items-center justify-between ${
                        isPhaseActive
                          ? 'bg-blue-50 text-blue-700 font-bold'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div>
                        <div className="font-semibold text-gray-900">
                          {phaseTitle.split('(')[0]}
                        </div>
                        <div className="text-[11px] text-gray-500 font-mono">
                          Rating: {phase.ratingRange}
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-gray-400">
                        {phase.topicIds.length} topics
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Sidebar Topics List: USACO Guide Vertical Timeline Tree */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            
            <div>
              <div className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-3.5 flex items-center justify-between">
                <span>{isEn ? 'Modules & Topics' : 'Danh mục Chủ đề'}</span>
                <span className="text-[11px] font-mono text-gray-400 font-normal">
                  {phaseTopics.length} topics
                </span>
              </div>

              {/* Vertical Guide Line Tree */}
              <div className="relative pl-3 border-l-2 border-gray-200 space-y-3.5 ml-2">
                {phaseTopics.map((topic) => {
                  const isTopicActive = topic.id === selectedTopicId;
                  const solvedCount = topic.problems.filter((p) =>
                    solvedSet.has(`${p.contestId}_${p.index}`)
                  ).length;
                  const isCompleted = solvedCount === 10;
                  const topicName = isEn ? topic.nameEn : topic.nameVi;

                  return (
                    <div key={topic.id} className="relative flex items-start group">
                      
                      {/* Timeline Dot on the vertical line */}
                      <span
                        className={`absolute -left-[19px] top-1.5 w-2.5 h-2.5 rounded-full transition-all ${
                          isTopicActive
                            ? 'bg-blue-600 ring-4 ring-blue-100'
                            : isCompleted
                            ? 'bg-emerald-500 ring-2 ring-emerald-100'
                            : solvedCount > 0
                            ? 'bg-amber-500'
                            : 'bg-gray-300 group-hover:bg-gray-400'
                        }`}
                      />

                      {/* Topic Link Text */}
                      <button
                        onClick={() => selectTopic(topic.id)}
                        className={`text-left text-xs transition-colors block pl-2.5 cursor-pointer leading-snug w-full ${
                          isTopicActive
                            ? 'font-bold text-blue-600'
                            : 'text-gray-700 hover:text-blue-600'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1">
                          <span className="truncate">
                            {topicName.split('(')[0]}
                          </span>
                          <span
                            className={`font-mono text-[10px] tabular-nums shrink-0 ml-1 ${
                              isCompleted
                                ? 'text-emerald-600 font-semibold'
                                : solvedCount > 0
                                ? 'text-gray-600'
                                : 'text-gray-400'
                            }`}
                          >
                            {solvedCount}/10
                          </span>
                        </div>
                      </button>

                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Switch to Other Phases */}
            <div className="pt-4 border-t border-gray-200">
              <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider block mb-2">
                {isEn ? 'All Phases' : 'Tất cả 5 Giai đoạn'}
              </span>
              <div className="space-y-1">
                {ROADMAP_PHASES.map((p) => {
                  const pTitle = isEn ? p.titleEn : p.titleVi;
                  return (
                    <button
                      key={p.id}
                      onClick={() => selectPhase(p.id)}
                      className={`w-full text-left px-2.5 py-1.5 rounded text-xs transition-colors flex items-center justify-between ${
                        p.id === selectedPhaseId
                          ? 'bg-gray-200 font-bold text-gray-900'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <span className="truncate">
                        P{p.id}: {pTitle.split(':')[1]?.split('(')[0]?.trim()}
                      </span>
                      <span className="text-[10px] font-mono text-gray-400">
                        {p.ratingRange}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Sidebar Footer */}
          <div className="p-3 border-t border-[#e5e7eb] text-[11px] text-gray-500 flex items-center justify-between">
            <span>CPSuggestor</span>
            <span className="font-mono">USACO Guide Layout</span>
          </div>

        </aside>

        {/* ======================================================================= */}
        {/* MAIN READING CANVAS (SPACIOUS & EXPANDED FOR COMFORTABLE READING)       */}
        {/* ======================================================================= */}
        <main className="flex-1 overflow-y-auto px-5 sm:px-10 lg:px-14 py-7 w-full max-w-5xl lg:max-w-6xl mx-auto">
          
          {/* Expand sidebar button (when collapsed) */}
          {isSidebarCollapsed && (
            <button
              onClick={() => setIsSidebarCollapsed(false)}
              className="mb-4 inline-flex items-center space-x-1.5 text-xs text-blue-600 hover:text-blue-800 font-semibold cursor-pointer"
            >
              <ChevronsRight className="w-4 h-4" />
              <span>{isEn ? 'Show Sidebar' : 'Mở thanh bên'}</span>
            </button>
          )}

          {/* Top Breadcrumb Navigation Row (Prev | Breadcrumb | Next) */}
          <div className="flex items-center justify-between text-xs text-gray-500 pb-3 mb-6 border-b border-gray-200">
            {/* Prev button */}
            <button
              onClick={goToPrevTopic}
              disabled={selectedTopicId === 1}
              className="flex items-center space-x-1 font-semibold hover:text-blue-600 transition-colors disabled:opacity-30 disabled:hover:text-gray-500 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{isEn ? 'Prev' : 'Bài trước'}</span>
            </button>

            {/* Breadcrumb text */}
            <div className="flex items-center space-x-1.5 text-xs truncate max-w-xs sm:max-w-md">
              <span className="text-gray-400">{isEn ? 'Home' : 'Lộ trình CP'}</span>
              <span className="text-gray-300">/</span>
              <span className="text-gray-600 truncate">{currentPhaseTitle.split('(')[0]}</span>
              <span className="text-gray-300">/</span>
              <span className="text-gray-900 font-bold truncate">{currentTopicName.split('(')[0]}</span>
            </div>

            {/* Next button */}
            <button
              onClick={goToNextTopic}
              disabled={selectedTopicId === ROADMAP_TOPICS.length}
              className="flex items-center space-x-1 font-semibold hover:text-blue-600 transition-colors disabled:opacity-30 disabled:hover:text-gray-500 cursor-pointer"
            >
              <span>{isEn ? 'Next' : 'Bài sau'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* ===================================================================== */}
          {/* TOPIC HEADER (USACO GUIDE STYLE: CLEAN, SPACIOUS, STREAMLINED)        */}
          {/* ===================================================================== */}
          <div className="mb-8 space-y-3">
            
            {/* Top Meta Row: Frequency/Difficulty Dots on Left, Progress on Right */}
            <div className="flex items-center justify-between gap-2 flex-wrap">
              
              {/* Frequency / Level indicator (like USACO Guide "•••• Rare") */}
              <div className="flex items-center space-x-1.5 text-xs">
                <span className="text-orange-500 font-bold tracking-tight">● ● ● ●</span>
                <span className="font-bold text-orange-600 ml-1">
                  {currentTopicTier}
                </span>
              </div>

              {/* Right: Progress Track & Status Badge */}
              <div className="flex items-center space-x-3">
                {/* Rounded progress pill track (like USACO Guide "0/6") */}
                <div className="flex items-center space-x-2" title={`${currentTopicSolvedCount}/10 solved`}>
                  <div className="w-28 bg-gray-200 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-emerald-500 h-1.5 rounded-full transition-all duration-300"
                      style={{ width: `${(currentTopicSolvedCount / 10) * 100}%` }}
                    />
                  </div>
                  <span className="font-mono text-xs font-bold text-gray-700 tabular-nums">
                    {currentTopicSolvedCount}/10
                  </span>
                </div>

                {/* Status Dropdown / Badge (like USACO Guide "Not Started v") */}
                <div
                  className={`px-3 py-1 rounded border text-xs font-semibold shadow-2xs flex items-center space-x-1.5 select-none ${topicStatusInfo.color}`}
                >
                  <span>{topicStatusInfo.text}</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                </div>
              </div>

            </div>

            {/* Main H1 Title (Spacious & Crisp Typography) */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight">
              {currentTopicName}
            </h1>

            {/* Clean Subtitle & Reference Resources Row */}
            <div className="pt-2 pb-4 border-b border-gray-200 flex flex-wrap items-center justify-between text-sm text-gray-600 gap-3">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-500">{isEn ? 'Target Complexity:' : 'Độ phức tạp:'}</span>
                <span className="font-mono font-bold text-gray-800">{currentComplexity}</span>
              </div>

              {/* External Blog Links */}
              <div className="flex items-center space-x-3 text-xs">
                <span className="text-gray-400">{isEn ? 'Reference Blogs:' : 'Tài liệu chuẩn:'}</span>
                {currentTopic.blogs.map((b, idx) => (
                  <a
                    key={idx}
                    href={b.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline flex items-center space-x-1 font-medium"
                  >
                    <span>{b.title.split('(')[0]?.trim()}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* ===================================================================== */}
          {/* SECTION 1: ESSENCE & THEORY (LARGER, COMFORTABLE FONT SIZE: 15-16PX)  */}
          {/* ===================================================================== */}
          <section className="mb-10 space-y-3.5">
            <h2 className="text-xl font-bold text-gray-900 tracking-tight pb-1.5 border-b border-gray-200">
              {isEn ? 'Algorithm Essence & Methodology' : 'Bản chất thuật toán & Phương pháp tiếp cận'}
            </h2>

            <div className="bg-[#fcfcfd] border border-gray-200 rounded-lg p-5 text-[15px] sm:text-base leading-relaxed space-y-3 text-gray-800">
              <ul className="list-disc list-inside space-y-2 font-sans">
                {currentEssence.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ===================================================================== */}
          {/* SECTION 2: CANONICAL C++ IMPLEMENTATION (BILINGUAL & SELF-CONTAINED) */}
          {/* ===================================================================== */}
          {canonicalData && (
            <section className="mb-10 space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2 pb-1.5 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <Code2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <h2 className="text-xl font-bold text-gray-900 tracking-tight">
                    {isEn ? 'Canonical C++ Implementation' : 'Mã nguồn chuẩn C++'}
                  </h2>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 hidden sm:inline-block">
                    {isEn ? `Source: ${canonicalData.source}` : `Nguồn: ${canonicalData.source}`}
                  </span>
                </div>

                {/* Right controls: Language Toggle & Copy Button & Collapse/Expand */}
                <div className="flex items-center space-x-2">
                  {/* Language switch for comments */}
                  <div className="inline-flex rounded-md border border-gray-300 p-0.5 bg-gray-100 text-xs font-semibold">
                    <button
                      onClick={() => setCodeLang('vi')}
                      className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                        codeLang === 'vi'
                          ? 'bg-white text-gray-900 shadow-2xs font-bold'
                          : 'text-gray-500 hover:text-gray-800'
                      }`}
                    >
                      {isEn ? 'Vietnamese' : 'Tiếng Việt'}
                    </button>
                    <button
                      onClick={() => setCodeLang('en')}
                      className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                        codeLang === 'en'
                          ? 'bg-white text-gray-900 shadow-2xs font-bold'
                          : 'text-gray-500 hover:text-gray-800'
                      }`}
                    >
                      English
                    </button>
                  </div>

                  {/* Copy button */}
                  <button
                    onClick={() => copyCode(activeCanonicalCode)}
                    className="inline-flex items-center space-x-1.5 px-3 py-1 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
                    title={isEn ? 'Copy full C++ code' : 'Sao chép toàn bộ mã nguồn C++'}
                  >
                    {codeCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">{isEn ? 'Copied!' : 'Đã chép!'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-gray-500" />
                        <span>{isEn ? 'Copy' : 'Sao chép'}</span>
                      </>
                    )}
                  </button>

                  {/* Collapse/Expand button */}
                  <button
                    onClick={() => setIsCodeExpanded(!isCodeExpanded)}
                    className="p-1 text-gray-400 hover:text-gray-600 rounded hover:bg-gray-100 transition-colors cursor-pointer"
                    title={isCodeExpanded ? (isEn ? 'Collapse code' : 'Thu gọn') : (isEn ? 'Expand code' : 'Mở rộng')}
                  >
                    {isCodeExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Mobile source tag */}
              <div className="sm:hidden text-xs text-gray-500 italic">
                {isEn ? `Source: ${canonicalData.source}` : `Nguồn tham khảo: ${canonicalData.source}`}
              </div>

              {/* Code Container */}
              {isCodeExpanded && (
                <div className="rounded-lg overflow-hidden border border-[#2b2f3a] bg-[#1a1b26] shadow-sm transition-all">
                  {/* Top terminal-style bar */}
                  <div className="px-4 py-2 bg-[#16161e] border-b border-[#2b2f3a] flex items-center justify-between text-xs text-gray-400 font-mono">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#f7768e] opacity-80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#e0af68] opacity-80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#9ece6a] opacity-80" />
                      </div>
                      <span className="ml-2 text-gray-300 font-medium">template.cpp</span>
                    </div>
                    <div className="flex items-center space-x-3 text-[11px]">
                      <span className="text-gray-400">C++17/20</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-gray-400">0 Lambdas</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-emerald-400 font-semibold">Self-Contained</span>
                    </div>
                  </div>

                  {/* Code body */}
                  <pre className="p-4 sm:p-5 text-[#c0caf5] font-mono text-[13px] leading-relaxed overflow-x-auto max-h-[520px] overflow-y-auto selection:bg-[#364a82]">
                    <code>{activeCanonicalCode}</code>
                  </pre>

                  {/* Bottom info footer */}
                  <div className="px-4 py-2 bg-[#13141c] border-t border-[#24273a] text-[11px] text-gray-400 flex items-center justify-between">
                    <span>
                      {isEn
                        ? '100% Complete & Self-Contained. Zero external dependencies.'
                        : 'Cài đặt đầy đủ 100% các bước tiền xử lý, không phụ thuộc biến ngoài.'}
                    </span>
                    <span className="font-mono text-gray-500">
                      {codeLang === 'en'
                        ? (isEn ? 'English Comments' : 'Chú thích Tiếng Anh')
                        : (isEn ? 'Vietnamese Comments' : 'Chú thích Tiếng Việt')}
                    </span>
                  </div>
                </div>
              )}
            </section>
          )}

          {/* ===================================================================== */}
          {/* SECTION 3: FOCUS PROBLEM (USACO GUIDE SIGNATURE CARD)                  */}
          {/* ===================================================================== */}
          {currentTopic.problems[0] && (() => {
            const focusProb = currentTopic.problems[0];
            const isFocusSolved = solvedSet.has(`${focusProb.contestId}_${focusProb.index}`);
            const focusComment = cleanMath(isEn ? focusProb.commentEn : focusProb.commentVi);

            return (
              <section className="mb-10 space-y-2.5">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {isEn ? 'Focus Problem – Solve this problem before continuing' : 'Bài tập trọng tâm – Thử sức giải bài này trước'}
                </div>

                {/* The Signature USACO Guide Card */}
                <div className="border-t-[4px] border-blue-600 bg-white border-x border-b border-[#e5e7eb] rounded-b-lg shadow-xs p-5 sm:p-6 transition-all">
                  
                  <div className="flex items-start justify-between gap-4">
                    
                    {/* Left details */}
                    <div className="space-y-2 flex-1">
                      {/* Title with External Link */}
                      <a
                        href={focusProb.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg sm:text-xl font-bold text-gray-900 hover:text-blue-600 flex items-center space-x-2 group"
                      >
                        <span className="font-mono text-blue-600">{focusProb.code}</span>
                        <span>- {focusProb.name}</span>
                        <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
                      </a>

                      {/* Subtitle & Rating */}
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <span className={`px-2.5 py-0.5 rounded border font-mono text-xs font-bold ${getRatingBadge(focusProb.rating)}`}>
                          Rating {focusProb.rating}
                        </span>
                        <span>•</span>
                        <span className="font-semibold text-gray-600">Focus Problem</span>
                      </div>

                      {/* Key Pedagogical Insight in 14-15px font */}
                      <div className="pt-2 text-sm sm:text-[15px] leading-relaxed text-gray-800 bg-gray-50 border border-gray-200 rounded-md p-3.5 mt-2">
                        <strong className="text-gray-900 block mb-1">
                          {isEn ? 'Key Pedagogical Insight:' : 'Nhận xét then chốt:'}
                        </strong>
                        {focusComment}
                      </div>
                    </div>

                    {/* Right side: 3-dots menu & Circular Status Button */}
                    <div className="flex items-center space-x-2 shrink-0">
                      <button className="text-gray-400 hover:text-gray-600 p-1.5 rounded hover:bg-gray-100">
                        <MoreVertical className="w-4 h-4" />
                      </button>

                      {/* Circular AC button (like USACO Guide circle) */}
                      <button
                        onClick={() => toggleProblemSolved(focusProb.contestId, focusProb.index)}
                        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 flex items-center justify-center transition-all cursor-pointer ${
                          isFocusSolved
                            ? 'bg-emerald-500 border-emerald-500 text-white shadow-xs'
                            : 'border-gray-300 hover:border-blue-500 bg-gray-100 hover:bg-blue-50 text-transparent'
                        }`}
                        title={isFocusSolved ? (isEn ? 'Mark as unsolved' : 'Đánh dấu chưa giải') : (isEn ? 'Mark as solved' : 'Đánh dấu đã AC')}
                      >
                        <Check className={`w-4 h-4 stroke-[3] ${isFocusSolved ? 'block' : 'hidden'}`} />
                      </button>
                    </div>

                  </div>

                </div>
              </section>
            );
          })()}

          {/* ===================================================================== */}
          {/* SECTION 3: PRACTICE PROBLEMS SET (USACO GUIDE STYLE PROBLEM CARDS)    */}
          {/* ===================================================================== */}
          <section className="mb-12 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 tracking-tight">
                {isEn ? 'Practice Problems' : 'Bài tập rèn luyện'}
              </h2>
              <span className="text-xs font-mono text-gray-500">
                {currentTopic.problems.slice(1).length} problems
              </span>
            </div>

            {/* Problem Cards with larger text and clean spacing */}
            <div className="space-y-3">
              {currentTopic.problems.slice(1).map((prob, idx) => {
                const isProbSolved = solvedSet.has(`${prob.contestId}_${prob.index}`);
                const probComment = cleanMath(isEn ? prob.commentEn : prob.commentVi);

                return (
                  <div
                    key={idx}
                    className={`border border-[#e5e7eb] rounded-lg p-4 sm:p-4.5 bg-white hover:border-gray-300 transition-all ${
                      isProbSolved ? 'bg-emerald-50/15 border-emerald-300' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      
                      {/* Left: Code, Title, Rating, Comment */}
                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center space-x-2.5 flex-wrap gap-y-1">
                          <a
                            href={prob.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-base text-gray-900 hover:text-blue-600 flex items-center space-x-1.5 group"
                          >
                            <span className="font-mono text-blue-600">{prob.code}</span>
                            <span>- {prob.name}</span>
                            <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>

                          <span className={`px-2.5 py-0.5 rounded border font-mono text-xs font-bold ${getRatingBadge(prob.rating)}`}>
                            {prob.rating}
                          </span>
                        </div>

                        {/* Pedagogical comment in clean 14px font */}
                        <div className="text-sm text-gray-700 leading-relaxed font-sans">
                          {probComment}
                        </div>
                      </div>

                      {/* Right: Circular AC Toggle Button (like USACO Guide) */}
                      <button
                        onClick={() => toggleProblemSolved(prob.contestId, prob.index)}
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-all shrink-0 cursor-pointer ${
                          isProbSolved
                            ? 'bg-emerald-500 border-emerald-500 text-white'
                            : 'border-gray-300 hover:border-blue-500 bg-gray-100 hover:bg-blue-50 text-transparent'
                        }`}
                        title={isProbSolved ? (isEn ? 'Mark as unsolved' : 'Đánh dấu chưa giải') : (isEn ? 'Mark as solved' : 'Đánh dấu đã AC')}
                      >
                        <Check className={`w-4 h-4 stroke-[3] ${isProbSolved ? 'block' : 'hidden'}`} />
                      </button>

                    </div>
                  </div>
                );
              })}
            </div>

          </section>

          {/* ===================================================================== */}
          {/* BOTTOM PAGINATION (PREV TOPIC / NEXT TOPIC BUTTONS)                   */}
          {/* ===================================================================== */}
          <div className="pt-6 border-t border-gray-200 flex items-center justify-between text-xs sm:text-sm">
            {selectedTopicId > 1 ? (
              <button
                onClick={goToPrevTopic}
                className="px-4 py-2 border border-gray-300 hover:border-gray-400 rounded-md text-gray-700 font-semibold flex items-center space-x-1.5 cursor-pointer transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="truncate max-w-[200px] sm:max-w-xs">
                  {isEn ? 'Previous: ' : 'Trước: '}
                  {(isEn ? ROADMAP_TOPICS[selectedTopicId - 2]?.nameEn : ROADMAP_TOPICS[selectedTopicId - 2]?.nameVi)?.split('(')[0]}
                </span>
              </button>
            ) : <div />}

            {selectedTopicId < ROADMAP_TOPICS.length ? (
              <button
                onClick={goToNextTopic}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold flex items-center space-x-1.5 cursor-pointer transition-colors"
              >
                <span className="truncate max-w-[200px] sm:max-w-xs">
                  {isEn ? 'Next: ' : 'Tiếp: '}
                  {(isEn ? ROADMAP_TOPICS[selectedTopicId]?.nameEn : ROADMAP_TOPICS[selectedTopicId]?.nameVi)?.split('(')[0]}
                </span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : <div />}
          </div>

        </main>

      </div>

    </div>
  );
};

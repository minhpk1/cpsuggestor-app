'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  ROADMAP_PHASES,
  ROADMAP_TOPICS,
  RoadmapTopic,
  RoadmapProblem,
  RoadmapPhase,
} from '@/data/roadmapData';
import { useLanguage } from '@/context/LanguageContext';
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  Check,
  RefreshCw,
  ChevronsLeft,
  ChevronsRight,
  BookOpen,
  CheckCircle2,
  ListOrdered,
  Sparkles,
  Info,
  MoreVertical,
} from 'lucide-react';

interface RoadmapViewProps {
  initialHandle?: string;
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({ initialHandle = 'Benq' }) => {
  const { t, lang } = useLanguage();

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
        if (topicId >= 1 && topicId <= 28) {
          setSelectedTopicId(topicId);
          const found = ROADMAP_TOPICS.find((t) => t.id === topicId);
          if (found) {
            setSelectedPhaseId(found.phaseId);
          }
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
    // Scroll content container to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Switch Phase via USACO Guide dropdown
  const selectPhase = (phaseId: number) => {
    setSelectedPhaseId(phaseId);
    setIsPhaseDropdownOpen(false);
    // Find first topic in this phase
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
        setSyncMessage(
          lang === 'vi'
            ? `Đã đồng bộ! Bạn đã AC ${roadmapSolvedCount}/280 bài tập.`
            : `Sync complete! Solved ${roadmapSolvedCount}/280 problems.`
        );
        return merged;
      });
    } catch (err: any) {
      console.error(err);
      setSyncMessage(
        lang === 'vi'
          ? `Lỗi: ${err.message || 'Không thể lấy dữ liệu'}`
          : `Error: ${err.message || 'Could not fetch data'}`
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

  // Topics in current phase
  const phaseTopics = useMemo(
    () => ROADMAP_TOPICS.filter((t) => t.phaseId === selectedPhaseId),
    [selectedPhaseId]
  );

  // Status text for the topic dropdown button
  const topicStatusInfo = useMemo(() => {
    if (currentTopicSolvedCount === 0) {
      return { text: 'Not Started', color: 'text-gray-600 border-gray-300 bg-white' };
    }
    if (currentTopicSolvedCount === 10) {
      return { text: 'Complete', color: 'text-emerald-700 border-emerald-300 bg-emerald-50' };
    }
    return { text: 'In Progress', color: 'text-blue-700 border-blue-300 bg-blue-50' };
  }, [currentTopicSolvedCount]);

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

  return (
    <div className="bg-white min-h-screen border border-[#e5e7eb] rounded-lg shadow-xs overflow-hidden flex flex-col font-sans text-[#1f2937]">
      
      {/* ========================================================================= */}
      {/* USACO GUIDE TOP UTILITY BAR (SYNC & TOTAL PROGRESS)                        */}
      {/* ========================================================================= */}
      <div className="bg-[#f9fafb] border-b border-[#e5e7eb] px-4 sm:px-6 py-2 flex flex-wrap items-center justify-between text-xs text-gray-600 gap-2">
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-gray-800">CP Roadmap</span>
          <span className="text-gray-300">•</span>
          <span className="font-mono text-gray-500">28 Topics / 280 Problems</span>
          <span className="text-gray-300">•</span>
          <span className="font-mono text-emerald-700 font-medium">
            Total Solved: {totalSolvedCount} / 280 ({Math.round((totalSolvedCount / 280) * 100)}%)
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
            className="px-2 py-0.5 text-xs border border-gray-300 rounded font-mono w-28 sm:w-32 bg-white focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={syncWithCodeforces}
            disabled={syncing}
            className="px-2.5 py-0.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-medium flex items-center space-x-1 cursor-pointer transition-colors disabled:opacity-50"
            title="Đồng bộ các bài đã giải từ tài khoản Codeforces"
          >
            <RefreshCw className={`w-3 h-3 ${syncing ? 'animate-spin' : ''}`} />
            <span>{syncing ? 'Syncing...' : 'Sync CF'}</span>
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
          <div className="p-3 border-b border-[#e5e7eb] relative" ref={dropdownRef}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase">
                Division / Phase
              </span>
              <button
                onClick={() => setIsSidebarCollapsed(true)}
                className="text-gray-400 hover:text-gray-700 p-1 rounded hover:bg-gray-200 transition-colors"
                title="Collapse Sidebar"
              >
                <ChevronsLeft className="w-4 h-4" />
              </button>
            </div>

            {/* Dropdown Button (like USACO Guide "Advanced v") */}
            <button
              onClick={() => setIsPhaseDropdownOpen(!isPhaseDropdownOpen)}
              className="w-full bg-white border border-[#d1d5db] hover:border-blue-500 rounded px-3 py-2 text-left text-sm font-semibold text-gray-900 shadow-xs flex items-center justify-between transition-colors cursor-pointer"
            >
              <span className="truncate">
                P{currentPhase.id}: {currentPhase.title.split(':')[1]?.split('(')[0]?.trim() || currentPhase.title}
              </span>
              <ChevronDown className="w-4 h-4 text-gray-500 shrink-0 ml-1" />
            </button>

            {/* Dropdown Menu */}
            {isPhaseDropdownOpen && (
              <div className="absolute left-3 right-3 top-[72px] bg-white border border-gray-200 rounded-md shadow-lg z-50 py-1 divide-y divide-gray-100 text-xs">
                {ROADMAP_PHASES.map((phase) => {
                  const isPhaseActive = phase.id === selectedPhaseId;
                  return (
                    <button
                      key={phase.id}
                      onClick={() => selectPhase(phase.id)}
                      className={`w-full text-left px-3 py-2 transition-colors flex items-center justify-between ${
                        isPhaseActive
                          ? 'bg-blue-50 text-blue-700 font-semibold'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div>
                        <div className="font-medium text-gray-900">
                          {phase.title.split('(')[0]}
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
              <div className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-3 flex items-center justify-between">
                <span>Modules & Topics</span>
                <span className="text-[11px] font-mono text-gray-400 font-normal">
                  {phaseTopics.length} topics
                </span>
              </div>

              {/* Vertical Guide Line Tree */}
              <div className="relative pl-3 border-l-2 border-gray-200 space-y-3 ml-2">
                {phaseTopics.map((topic) => {
                  const isTopicActive = topic.id === selectedTopicId;
                  const solvedCount = topic.problems.filter((p) =>
                    solvedSet.has(`${p.contestId}_${p.index}`)
                  ).length;
                  const isCompleted = solvedCount === 10;

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
                        className={`text-left text-xs transition-colors block pl-2 cursor-pointer leading-snug w-full ${
                          isTopicActive
                            ? 'font-bold text-blue-600'
                            : 'text-gray-700 hover:text-blue-600'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1">
                          <span className="truncate">
                            {topic.name.split('(')[0]}
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
                Tất cả giai đoạn (All Phases)
              </span>
              <div className="space-y-1">
                {ROADMAP_PHASES.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => selectPhase(p.id)}
                    className={`w-full text-left px-2.5 py-1.5 rounded text-xs transition-colors flex items-center justify-between ${
                      p.id === selectedPhaseId
                        ? 'bg-gray-200 font-semibold text-gray-900'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <span className="truncate">
                      P{p.id}: {p.title.split(':')[1]?.split('(')[0]?.trim()}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400">
                      {p.ratingRange}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Footer */}
          <div className="p-3 border-t border-[#e5e7eb] text-[11px] text-gray-500 flex items-center justify-between">
            <span>CPSuggestor Roadmap</span>
            <span className="font-mono">USACO Guide Layout</span>
          </div>

        </aside>

        {/* ======================================================================= */}
        {/* MAIN READING CANVAS (EXACT USACO GUIDE LAYOUT)                          */}
        {/* ======================================================================= */}
        <main className="flex-1 overflow-y-auto px-4 sm:px-8 lg:px-12 py-6 max-w-4xl mx-auto w-full">
          
          {/* Expand sidebar button (when collapsed) */}
          {isSidebarCollapsed && (
            <button
              onClick={() => setIsSidebarCollapsed(false)}
              className="mb-4 inline-flex items-center space-x-1 text-xs text-blue-600 hover:text-blue-800 font-medium cursor-pointer"
            >
              <ChevronsRight className="w-4 h-4" />
              <span>Show Sidebar</span>
            </button>
          )}

          {/* Top Breadcrumb Navigation Row (Prev | Breadcrumb | Next) */}
          <div className="flex items-center justify-between text-xs text-gray-500 pb-3 mb-6 border-b border-gray-200">
            {/* Prev button */}
            <button
              onClick={goToPrevTopic}
              disabled={selectedTopicId === 1}
              className="flex items-center space-x-1 font-medium hover:text-blue-600 transition-colors disabled:opacity-30 disabled:hover:text-gray-500 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Prev</span>
            </button>

            {/* Breadcrumb text */}
            <div className="flex items-center space-x-1.5 text-xs truncate max-w-xs sm:max-w-md">
              <span className="text-gray-400">Lộ trình CP</span>
              <span className="text-gray-300">/</span>
              <span className="text-gray-600 truncate">{currentPhase.title.split('(')[0]}</span>
              <span className="text-gray-300">/</span>
              <span className="text-gray-900 font-semibold truncate">{currentTopic.name.split('(')[0]}</span>
            </div>

            {/* Next button */}
            <button
              onClick={goToNextTopic}
              disabled={selectedTopicId === ROADMAP_TOPICS.length}
              className="flex items-center space-x-1 font-medium hover:text-blue-600 transition-colors disabled:opacity-30 disabled:hover:text-gray-500 cursor-pointer"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* ===================================================================== */}
          {/* TOPIC HEADER (USACO GUIDE STYLE)                                      */}
          {/* ===================================================================== */}
          <div className="mb-6 space-y-3">
            
            {/* Top Meta Row: Frequency/Difficulty Dots on Left, Progress on Right */}
            <div className="flex items-center justify-between gap-2 flex-wrap">
              
              {/* Frequency / Level indicator (like USACO Guide "•••• Rare") */}
              <div className="flex items-center space-x-1.5 text-xs">
                <span className="text-orange-500 font-bold tracking-tight">● ● ● ●</span>
                <span className="font-semibold text-orange-600 ml-1">
                  {currentTopic.tier}
                </span>
              </div>

              {/* Right: Progress Track & Status Badge */}
              <div className="flex items-center space-x-3">
                {/* Rounded progress pill track (like USACO Guide "0/6") */}
                <div className="flex items-center space-x-2" title={`${currentTopicSolvedCount}/10 bài đã AC`}>
                  <div className="w-24 bg-gray-200 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-emerald-500 h-1.5 rounded-full transition-all duration-300"
                      style={{ width: `${(currentTopicSolvedCount / 10) * 100}%` }}
                    />
                  </div>
                  <span className="font-mono text-xs font-semibold text-gray-700 tabular-nums">
                    {currentTopicSolvedCount}/10
                  </span>
                </div>

                {/* Status Dropdown / Badge (like USACO Guide "Not Started v") */}
                <div
                  className={`px-2.5 py-1 rounded border text-xs font-semibold shadow-2xs flex items-center space-x-1 select-none ${topicStatusInfo.color}`}
                >
                  <span>{topicStatusInfo.text}</span>
                  <ChevronDown className="w-3 h-3 opacity-60" />
                </div>
              </div>

            </div>

            {/* Main H1 Title */}
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight leading-tight">
              {currentTopic.name}
            </h1>

            {/* Subtitle / Authorship info */}
            <div className="text-xs text-gray-500">
              <span>Độ phức tạp mục tiêu: </span>
              <span className="font-mono font-semibold text-gray-800">{currentTopic.complexity}</span>
            </div>

            {/* Language / Resources Row */}
            <div className="pt-2 pb-3 border-b border-gray-100 flex flex-wrap items-center justify-between text-xs text-gray-600 gap-2">
              <div className="flex items-center space-x-2">
                <span className="font-medium">Ngôn ngữ tham chiếu: C++</span>
                <span className="text-gray-300">•</span>
                <span>Phân hạng: <strong className="text-gray-900">{currentTopic.tier}</strong></span>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-gray-400">Tài liệu chuẩn:</span>
                {currentTopic.blogs.map((b, idx) => (
                  <a
                    key={idx}
                    href={b.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline flex items-center space-x-1"
                  >
                    <span>{b.title.split('(')[0]?.trim()}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* ===================================================================== */}
          {/* INLINE TABLE OF CONTENTS                                              */}
          {/* ===================================================================== */}
          <div className="mb-8">
            <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">
              TABLE OF CONTENTS
            </div>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>
                <a href="#essence-section" className="text-blue-600 hover:underline">
                  1. Bản chất thuật toán & Bất biến toán học
                </a>
              </li>
              <li>
                <a href="#focus-problem-section" className="text-blue-600 hover:underline">
                  2. Bài tập trọng tâm (Focus Problem: {currentTopic.problems[0]?.code})
                </a>
              </li>
              <li>
                <a href="#practice-problems-section" className="text-blue-600 hover:underline">
                  3. Danh sách 9 bài tập rèn luyện phân cấp (Practice Problems)
                </a>
              </li>
            </ul>
          </div>

          {/* ===================================================================== */}
          {/* SECTION 1: ESSENCE & THEORY (BẢN CHẤT CỐT LÕI)                        */}
          {/* ===================================================================== */}
          <section id="essence-section" className="mb-8 space-y-3">
            <h2 className="text-lg font-bold text-gray-900 tracking-tight pb-1 border-b border-gray-100">
              Bản chất thuật toán & Phương pháp tiếp cận
            </h2>

            <div className="bg-[#fcfcfd] border border-gray-200 rounded p-4 text-xs leading-relaxed space-y-2.5">
              <ul className="list-disc list-inside space-y-1.5 text-gray-800 font-sans">
                {currentTopic.essence.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-2 border-t border-gray-100 text-[11px] text-gray-600">
                <span className="font-semibold text-gray-700">Ghi chú độ phức tạp: </span>
                <span className="font-mono text-gray-800">{currentTopic.complexity}</span>
              </div>
            </div>
          </section>

          {/* ===================================================================== */}
          {/* SECTION 2: FOCUS PROBLEM (SIGNATURE USACO GUIDE BLUE TOP-BORDER CARD)  */}
          {/* ===================================================================== */}
          {currentTopic.problems[0] && (() => {
            const focusProb = currentTopic.problems[0];
            const isFocusSolved = solvedSet.has(`${focusProb.contestId}_${focusProb.index}`);

            return (
              <section id="focus-problem-section" className="mb-8 space-y-2">
                <div className="text-xs text-gray-500 italic">
                  Note: Hãy giải bài toán trọng tâm này trước khi tiếp tục các bài tập khác...
                </div>

                {/* The Signature USACO Guide Card */}
                <div className="border-t-[3px] border-blue-600 bg-white border-x border-b border-[#e5e7eb] rounded-b-md shadow-xs p-4 sm:p-5 transition-all">
                  
                  <div className="flex items-start justify-between gap-3">
                    
                    {/* Left details */}
                    <div className="space-y-1">
                      {/* Title with External Link */}
                      <a
                        href={focusProb.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base sm:text-lg font-bold text-gray-900 hover:text-blue-600 flex items-center space-x-1.5 group"
                      >
                        <span className="font-mono text-blue-600">{focusProb.code}</span>
                        <span>- {focusProb.name}</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
                      </a>

                      {/* Subtitle & Rating */}
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <span className={`px-2 py-0.2 rounded border font-mono text-[11px] font-semibold ${getRatingBadge(focusProb.rating)}`}>
                          Rating {focusProb.rating}
                        </span>
                        <span>•</span>
                        <span className="font-medium text-gray-600">Focus Problem</span>
                      </div>

                      {/* Focus problem note in italics (like USACO Guide) */}
                      <div className="text-xs text-gray-500 italic pt-1">
                        Focus Problem – Thử sức phân tích và nộp AC bài tập này trước khi tiếp tục!
                      </div>

                      {/* Key Observation */}
                      <div className="pt-2 text-xs leading-relaxed text-gray-700 bg-gray-50 border border-gray-100 rounded p-2.5 mt-2">
                        <strong className="text-gray-900 block mb-0.5">Nhận xét then chốt:</strong>
                        {focusProb.comment}
                      </div>
                    </div>

                    {/* Right side: 3-dots menu & Circular Status Button */}
                    <div className="flex items-center space-x-2 shrink-0">
                      <button className="text-gray-400 hover:text-gray-600 p-1 rounded hover:bg-gray-100">
                        <MoreVertical className="w-4 h-4" />
                      </button>

                      {/* Circular AC button (like USACO Guide circle) */}
                      <button
                        onClick={() => toggleProblemSolved(focusProb.contestId, focusProb.index)}
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-all cursor-pointer ${
                          isFocusSolved
                            ? 'bg-emerald-500 border-emerald-500 text-white shadow-xs'
                            : 'border-gray-300 hover:border-blue-500 bg-gray-100 hover:bg-blue-50 text-transparent'
                        }`}
                        title={isFocusSolved ? 'Đánh dấu chưa giải' : 'Đánh dấu đã AC bài này'}
                      >
                        <Check className={`w-4 h-4 stroke-[2.5] ${isFocusSolved ? 'block' : 'hidden'}`} />
                      </button>
                    </div>

                  </div>

                </div>
              </section>
            );
          })()}

          {/* ===================================================================== */}
          {/* SECTION 3: PRACTICE PROBLEMS SET (USACO GUIDE STYLE TABLE/CARDS)      */}
          {/* ===================================================================== */}
          <section id="practice-problems-section" className="mb-10 space-y-3">
            <div className="flex items-center justify-between pb-1 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 tracking-tight">
                Problems
              </h2>
              <span className="text-xs font-mono text-gray-500">
                {currentTopic.problems.slice(1).length} practice problems
              </span>
            </div>

            {/* Problem List Items (USACO Guide Style Problem Cards) */}
            <div className="space-y-2.5">
              {currentTopic.problems.slice(1).map((prob, idx) => {
                const isProbSolved = solvedSet.has(`${prob.contestId}_${prob.index}`);

                return (
                  <div
                    key={idx}
                    className={`border border-[#e5e7eb] rounded-md p-3 sm:p-3.5 bg-white hover:border-gray-300 transition-all ${
                      isProbSolved ? 'bg-emerald-50/15 border-emerald-200' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      
                      {/* Left: Code, Title, Rating, Comment */}
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                          <a
                            href={prob.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-sm text-gray-900 hover:text-blue-600 flex items-center space-x-1.5 group"
                          >
                            <span className="font-mono text-blue-600">{prob.code}</span>
                            <span>- {prob.name}</span>
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>

                          <span className={`px-2 py-0.2 rounded border font-mono text-[11px] font-semibold ${getRatingBadge(prob.rating)}`}>
                            {prob.rating}
                          </span>
                        </div>

                        {/* Pedagogical comment */}
                        <div className="text-xs text-gray-600 leading-relaxed pt-0.5">
                          {prob.comment}
                        </div>
                      </div>

                      {/* Right: Circular AC Toggle Button (like USACO Guide) */}
                      <button
                        onClick={() => toggleProblemSolved(prob.contestId, prob.index)}
                        className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center transition-all shrink-0 cursor-pointer ${
                          isProbSolved
                            ? 'bg-emerald-500 border-emerald-500 text-white'
                            : 'border-gray-300 hover:border-blue-500 bg-gray-100 hover:bg-blue-50 text-transparent'
                        }`}
                        title={isProbSolved ? 'Đánh dấu chưa giải' : 'Đánh dấu đã AC bài này'}
                      >
                        <Check className={`w-3.5 h-3.5 stroke-[2.5] ${isProbSolved ? 'block' : 'hidden'}`} />
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
          <div className="pt-6 border-t border-gray-200 flex items-center justify-between text-xs">
            {selectedTopicId > 1 ? (
              <button
                onClick={goToPrevTopic}
                className="px-3 py-1.5 border border-gray-300 hover:border-gray-400 rounded text-gray-700 font-medium flex items-center space-x-1 cursor-pointer transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous: {ROADMAP_TOPICS[selectedTopicId - 2]?.name.split('(')[0]}</span>
              </button>
            ) : <div />}

            {selectedTopicId < ROADMAP_TOPICS.length ? (
              <button
                onClick={goToNextTopic}
                className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium flex items-center space-x-1 cursor-pointer transition-colors"
              >
                <span>Next: {ROADMAP_TOPICS[selectedTopicId]?.name.split('(')[0]}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : <div />}
          </div>

        </main>

      </div>

    </div>
  );
};

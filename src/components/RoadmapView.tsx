'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  ROADMAP_PHASES,
  ROADMAP_TOPICS,
  RoadmapTopic,
  RoadmapProblem,
  RoadmapPhase
} from '@/data/roadmapData';
import { useLanguage } from '@/context/LanguageContext';
import {
  Search,
  Check,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  RefreshCw,
  SlidersHorizontal,
  Layers,
  BookOpen,
  Filter,
  CheckCircle2,
  ListFilter
} from 'lucide-react';

interface RoadmapViewProps {
  initialHandle?: string;
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({ initialHandle = 'Benq' }) => {
  const { t, lang } = useLanguage();

  // Handle & Sync State
  const [handle, setHandle] = useState<string>(initialHandle);
  const [syncing, setSyncing] = useState<boolean>(false);
  const [syncMessage, setSyncMessage] = useState<string | null>(null);

  // Solved problems set: stores keys formatted as `${contestId}_${index}`
  const [solvedSet, setSolvedSet] = useState<Set<string>>(new Set());

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'unsolved' | 'solved'>('all');
  const [selectedPhase, setSelectedPhase] = useState<number | 'all'>('all');

  // Expanded topics state: map topicId -> boolean
  const [expandedTopics, setExpandedTopics] = useState<Record<number, boolean>>({});

  // Active topic highlighted in sidebar
  const [activeTopicId, setActiveTopicId] = useState<number>(1);

  // Initialize from LocalStorage
  useEffect(() => {
    try {
      const savedSolved = localStorage.getItem('roadmap_ac_problems');
      if (savedSolved) {
        const parsed = JSON.parse(savedSolved);
        if (Array.isArray(parsed)) {
          setSolvedSet(new Set(parsed));
        }
      }

      const savedHandle = localStorage.getItem('cf_saved_handle') || initialHandle;
      if (savedHandle) {
        setHandle(savedHandle);
      }

      // Default expand the first 3 topics for clean initial view
      const initialExpanded: Record<number, boolean> = {};
      ROADMAP_TOPICS.slice(0, 3).forEach((topic) => {
        initialExpanded[topic.id] = true;
      });
      setExpandedTopics(initialExpanded);
    } catch (e) {
      console.error('Failed to load roadmap state from localStorage', e);
    }
  }, [initialHandle]);

  // Persist solvedSet changes
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

      // Collect all AC submissions
      const cfSolved = new Set<string>();
      for (const sub of data.result) {
        if (sub.verdict === 'OK' && sub.problem && sub.problem.contestId && sub.problem.index) {
          cfSolved.add(`${sub.problem.contestId}_${sub.problem.index.toUpperCase()}`);
        }
      }

      // Merge with existing solved problems
      setSolvedSet((prev) => {
        const merged = new Set(prev);
        let newlyAdded = 0;
        cfSolved.forEach((key) => {
          if (!merged.has(key)) {
            newlyAdded++;
          }
          merged.add(key);
        });

        // Count how many of the 280 roadmap problems are solved
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
            ? `Đã đồng bộ thành công! Bạn đã hoàn thành ${roadmapSolvedCount}/280 bài tập.`
            : `Sync complete! You have solved ${roadmapSolvedCount}/280 problems.`
        );
        return merged;
      });
    } catch (err: any) {
      console.error(err);
      setSyncMessage(
        lang === 'vi'
          ? `Lỗi đồng bộ: ${err.message || 'Không thể lấy dữ liệu từ Codeforces'}`
          : `Sync error: ${err.message || 'Could not fetch data from Codeforces'}`
      );
    } finally {
      setSyncing(false);
    }
  };

  // Toggle single topic expand/collapse
  const toggleTopic = (id: number) => {
    setExpandedTopics((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Expand / Collapse all
  const setAllExpanded = (expand: boolean) => {
    const next: Record<number, boolean> = {};
    ROADMAP_TOPICS.forEach((t) => {
      next[t.id] = expand;
    });
    setExpandedTopics(next);
  };

  // Smooth scroll to topic element
  const scrollToTopic = (id: number) => {
    setActiveTopicId(id);
    setExpandedTopics((prev) => ({ ...prev, [id]: true }));
    const el = document.getElementById(`topic-card-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Statistics
  const totalSolvedRoadmap = useMemo(() => {
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

  const totalProblemsCount = 280;
  const overallPercentage = Math.round((totalSolvedRoadmap / totalProblemsCount) * 100);

  // Filter logic
  const filteredTopics = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return ROADMAP_TOPICS.filter((topic) => {
      // Phase filter
      if (selectedPhase !== 'all' && topic.phaseId !== selectedPhase) {
        return false;
      }

      // Search matching topic name or essence
      const matchesTopic =
        topic.name.toLowerCase().includes(query) ||
        topic.tier.toLowerCase().includes(query) ||
        topic.complexity.toLowerCase().includes(query);

      // Search matching problems
      const matchingProblems = topic.problems.filter((p) => {
        const matchesQuery =
          !query ||
          p.code.toLowerCase().includes(query) ||
          p.name.toLowerCase().includes(query) ||
          p.rating.toString().includes(query) ||
          p.comment.toLowerCase().includes(query);

        const isSolved = solvedSet.has(`${p.contestId}_${p.index}`);
        const matchesStatus =
          statusFilter === 'all' ||
          (statusFilter === 'solved' && isSolved) ||
          (statusFilter === 'unsolved' && !isSolved);

        return matchesQuery && matchesStatus;
      });

      if (query || statusFilter !== 'all') {
        return matchingProblems.length > 0;
      }

      return matchesTopic;
    });
  }, [searchQuery, statusFilter, selectedPhase, solvedSet]);

  // Color helper for rating badges (muted technical tones)
  const getRatingBadgeClass = (rating: number) => {
    if (rating < 1200) {
      return 'bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700';
    }
    if (rating < 1400) {
      return 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800';
    }
    if (rating < 1600) {
      return 'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/40 dark:text-cyan-300 dark:border-cyan-800';
    }
    if (rating < 1900) {
      return 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800';
    }
    if (rating < 2200) {
      return 'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/40 dark:text-violet-300 dark:border-violet-800';
    }
    if (rating < 2400) {
      return 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800';
    }
    return 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800';
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner & Header Summary */}
      <div className="bg-white border border-[#e8e8e8] rounded p-4 sm:p-5 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-[11px] font-mono uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                CURRICULUM 28
              </span>
              <span className="text-xs text-gray-500">
                Newbie ➔ Grandmaster
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
              {t('platform_switch_roadmap')}
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-3xl leading-relaxed">
              {t('platform_switch_roadmap_sub')}
            </p>
          </div>

          {/* Global Progress Card */}
          <div className="bg-[#f8f9fa] border border-[#e8e8e8] rounded p-3 sm:p-4 min-w-[240px] shrink-0">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-gray-600 font-medium">
                {t('roadmap_total_solved')}
              </span>
              <span className="font-mono font-bold text-gray-900 tabular-nums">
                {totalSolvedRoadmap} / {totalProblemsCount} ({overallPercentage}%)
              </span>
            </div>
            {/* Subtle 4px progress track */}
            <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-emerald-500 h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${overallPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Sync with CF Handle Bar */}
        <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-2 flex-wrap gap-y-2">
            <span className="text-gray-600 font-medium">Codeforces Handle:</span>
            <div className="flex items-center space-x-1.5">
              <input
                type="text"
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
                placeholder="vd: tourist, Benq..."
                className="px-2.5 py-1 text-xs border border-gray-300 rounded font-mono focus:outline-none focus:border-blue-500 w-36 sm:w-44"
              />
              <button
                onClick={syncWithCodeforces}
                disabled={syncing}
                className="px-3 py-1 bg-slate-900 hover:bg-slate-800 text-white rounded font-medium flex items-center space-x-1.5 transition-colors disabled:opacity-50 cursor-pointer"
                title={t('roadmap_sync_tooltip')}
              >
                <RefreshCw className={`w-3.5 h-3.5 ${syncing ? 'animate-spin' : ''}`} />
                <span>{syncing ? t('roadmap_syncing') : t('roadmap_sync_cf')}</span>
              </button>
            </div>
          </div>

          {syncMessage && (
            <div className="text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded flex items-center space-x-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>{syncMessage}</span>
            </div>
          )}
        </div>
      </div>

      {/* Control Bar: Search & Status Filters */}
      <div className="bg-white border border-[#e8e8e8] rounded p-3 flex flex-wrap items-center justify-between gap-3 text-xs">
        
        {/* Left: Search Input */}
        <div className="relative flex-1 min-w-[220px] max-w-md">
          <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('roadmap_search_placeholder')}
            className="w-full pl-8 pr-3 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Middle: Status Filter Pills */}
        <div className="flex items-center space-x-1 bg-gray-100 p-0.5 rounded border border-gray-200">
          <button
            onClick={() => setStatusFilter('all')}
            className={`px-2.5 py-1 rounded transition-colors text-xs font-medium cursor-pointer ${
              statusFilter === 'all'
                ? 'bg-white text-gray-900 shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {t('roadmap_filter_all')}
          </button>
          <button
            onClick={() => setStatusFilter('unsolved')}
            className={`px-2.5 py-1 rounded transition-colors text-xs font-medium cursor-pointer ${
              statusFilter === 'unsolved'
                ? 'bg-white text-gray-900 shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {t('roadmap_filter_unsolved')}
          </button>
          <button
            onClick={() => setStatusFilter('solved')}
            className={`px-2.5 py-1 rounded transition-colors text-xs font-medium cursor-pointer ${
              statusFilter === 'solved'
                ? 'bg-white text-emerald-700 shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {t('roadmap_filter_solved')}
          </button>
        </div>

        {/* Right: Expand / Collapse Toggle */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setAllExpanded(true)}
            className="px-2 py-1 text-gray-600 hover:text-gray-900 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer text-xs"
          >
            {t('roadmap_expand_all')}
          </button>
          <button
            onClick={() => setAllExpanded(false)}
            className="px-2 py-1 text-gray-600 hover:text-gray-900 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer text-xs"
          >
            {t('roadmap_collapse_all')}
          </button>
        </div>

      </div>

      {/* Main 2-Column Content Layout: Left Sidebar (Sticky) + Right Canvas */}
      <div className="grid grid-cols-12 gap-5 items-start">
        
        {/* ========================================================================= */}
        {/* LEFT COLUMN: STICKY TOC NAVIGATION & PHASE FILTER (4 COLS)                */}
        {/* ========================================================================= */}
        <div className="col-span-12 lg:col-span-4 space-y-4">
          
          <div className="bg-white border border-[#e8e8e8] rounded p-4 sticky top-20 shadow-sm max-h-[calc(100vh-100px)] overflow-y-auto">
            
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-gray-100">
              <span className="text-xs font-semibold text-gray-800 flex items-center space-x-1.5">
                <ListFilter className="w-3.5 h-3.5 text-gray-500" />
                <span>Mục lục 28 Chủ đề</span>
              </span>
              <span className="font-mono text-[11px] text-gray-400">
                28 topics
              </span>
            </div>

            {/* Phase Selector Tabs */}
            <div className="mb-3">
              <button
                onClick={() => setSelectedPhase('all')}
                className={`w-full text-left px-2.5 py-1.5 rounded text-xs transition-colors flex items-center justify-between mb-1 ${
                  selectedPhase === 'all'
                    ? 'bg-slate-900 text-white font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span>{t('roadmap_filter_phase_all')}</span>
                <span className="font-mono text-[10px] opacity-80">
                  {totalSolvedRoadmap}/280
                </span>
              </button>

              {ROADMAP_PHASES.map((phase) => {
                // Calculate solved count in this phase
                const phaseTopics = ROADMAP_TOPICS.filter((t) => t.phaseId === phase.id);
                let phaseSolved = 0;
                let phaseTotal = phaseTopics.length * 10;
                for (const t of phaseTopics) {
                  for (const p of t.problems) {
                    if (solvedSet.has(`${p.contestId}_${p.index}`)) {
                      phaseSolved++;
                    }
                  }
                }

                const isPhaseSelected = selectedPhase === phase.id;

                return (
                  <button
                    key={phase.id}
                    onClick={() => setSelectedPhase(isPhaseSelected ? 'all' : phase.id)}
                    className={`w-full text-left px-2.5 py-1.5 rounded text-xs transition-colors flex items-center justify-between mb-0.5 ${
                      isPhaseSelected
                        ? 'bg-blue-50 text-blue-700 font-medium border border-blue-200'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className="truncate pr-2">
                      P{phase.id}: {phase.title.split('(')[0]}
                    </span>
                    <span className="font-mono text-[10px] text-gray-500 shrink-0">
                      {phaseSolved}/{phaseTotal}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="pt-2 border-t border-gray-100 space-y-0.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 block px-2 mb-1">
                Danh sách Chủ đề (Click để nhảy tới)
              </span>

              {ROADMAP_TOPICS.map((topic) => {
                // Calculate topic AC count
                const solvedCount = topic.problems.filter((p) =>
                  solvedSet.has(`${p.contestId}_${p.index}`)
                ).length;

                const isCompleted = solvedCount === 10;
                const isCurrentActive = activeTopicId === topic.id;

                return (
                  <button
                    key={topic.id}
                    onClick={() => scrollToTopic(topic.id)}
                    className={`w-full text-left px-2 py-1 rounded text-xs transition-all flex items-center justify-between group ${
                      isCurrentActive
                        ? 'bg-gray-100 text-gray-900 font-medium'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <span className="truncate pr-2 flex items-center space-x-1.5">
                      <span className="font-mono text-[10px] text-gray-400 w-4 inline-block">
                        {String(topic.id).padStart(2, '0')}.
                      </span>
                      <span className="truncate">{topic.name.split('(')[0]}</span>
                    </span>

                    {/* AC Badge */}
                    <span
                      className={`font-mono text-[10px] px-1.5 py-0.2 rounded shrink-0 tabular-nums ${
                        isCompleted
                          ? 'bg-emerald-100 text-emerald-800 font-semibold'
                          : solvedCount > 0
                          ? 'bg-slate-100 text-slate-700'
                          : 'text-gray-400'
                      }`}
                    >
                      {solvedCount}/10
                    </span>
                  </button>
                );
              })}
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN: DETAILED TOPIC CARDS & 10 PROBLEMS TABLE (8 COLS)          */}
        {/* ========================================================================= */}
        <div className="col-span-12 lg:col-span-8 space-y-5">
          
          {filteredTopics.length === 0 ? (
            <div className="bg-white border border-gray-200 rounded p-8 text-center text-gray-500 text-xs">
              {t('roadmap_no_match')}
            </div>
          ) : (
            filteredTopics.map((topic) => {
              const isExpanded = expandedTopics[topic.id] !== false; // Default true unless collapsed

              // Calculate topic progress
              const topicSolvedCount = topic.problems.filter((p) =>
                solvedSet.has(`${p.contestId}_${p.index}`)
              ).length;
              const isAllSolved = topicSolvedCount === 10;

              return (
                <div
                  key={topic.id}
                  id={`topic-card-${topic.id}`}
                  className="bg-white border border-[#e8e8e8] rounded shadow-xs overflow-hidden transition-all"
                >
                  
                  {/* Topic Header: Title, Tier, 10-Dash Matrix, Expand Chevron */}
                  <div
                    onClick={() => toggleTopic(topic.id)}
                    className="p-3 sm:p-4 bg-white hover:bg-gray-50/70 border-b border-gray-100 transition-colors cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-2.5"
                  >
                    
                    {/* Left: ID, Name, Tier Badge */}
                    <div className="flex items-start sm:items-center space-x-2.5">
                      <button className="text-gray-400 hover:text-gray-700 mt-0.5 sm:mt-0">
                        {isExpanded ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </button>

                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-mono text-xs font-semibold text-slate-500">
                            TOPIC {String(topic.id).padStart(2, '0')}
                          </span>
                          <span className="text-[11px] font-medium px-2 py-0.2 rounded bg-slate-100 text-slate-700 border border-slate-200">
                            {topic.tier}
                          </span>
                        </div>
                        <h2 className="text-sm sm:text-base font-bold text-gray-900 tracking-tight mt-0.5">
                          {topic.name}
                        </h2>
                      </div>
                    </div>

                    {/* Right: SEGMENTED 10-DASH MATRIX (The user's requested AC display) */}
                    <div className="flex items-center space-x-3 self-end sm:self-auto pl-6 sm:pl-0">
                      
                      {/* The 10-dash micro progress bar */}
                      <div
                        className="flex items-center space-x-1"
                        title={`${topicSolvedCount}/10 bài đã AC`}
                      >
                        {topic.problems.map((prob, pIdx) => {
                          const isProbSolved = solvedSet.has(`${prob.contestId}_${prob.index}`);
                          return (
                            <span
                              key={pIdx}
                              className={`w-1.5 sm:w-2 h-2 sm:h-2.5 rounded-[1px] transition-colors ${
                                isProbSolved
                                  ? 'bg-emerald-500'
                                  : 'bg-gray-200'
                              }`}
                            />
                          );
                        })}
                      </div>

                      {/* Fractional Monospace Badge */}
                      <span
                        className={`font-mono text-xs tabular-nums font-semibold px-2 py-0.5 rounded border ${
                          isAllSolved
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : topicSolvedCount > 0
                            ? 'bg-slate-50 text-slate-800 border-slate-200'
                            : 'bg-gray-50 text-gray-400 border-gray-200'
                        }`}
                      >
                        {String(topicSolvedCount).padStart(2, '0')} / 10
                      </span>

                    </div>

                  </div>

                  {/* Expanded Body: Essence, Complexity, Reference Blogs, Problem Table */}
                  {isExpanded && (
                    <div className="p-3 sm:p-4 space-y-4 text-xs">
                      
                      {/* Summary & Theory Metadata Block */}
                      <div className="bg-[#fcfcfd] border border-gray-100 rounded p-3 space-y-2.5">
                        
                        {/* Essence bullets */}
                        <div>
                          <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-gray-500 block mb-1">
                            {t('roadmap_essence_title')}
                          </span>
                          <ul className="space-y-1 text-gray-700 leading-relaxed list-disc list-inside">
                            {topic.essence.map((ess, essIdx) => (
                              <li key={essIdx} className="text-xs">
                                {ess}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Complexity & Blogs Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-gray-100 text-[11px]">
                          <div>
                            <span className="font-semibold text-gray-500 block">
                              {t('roadmap_complexity_title')}:
                            </span>
                            <span className="font-mono text-slate-800">
                              {topic.complexity}
                            </span>
                          </div>

                          <div>
                            <span className="font-semibold text-gray-500 block">
                              {t('roadmap_resources_title')}:
                            </span>
                            <div className="space-y-0.5 mt-0.5">
                              {topic.blogs.map((blog, bIdx) => (
                                <a
                                  key={bIdx}
                                  href={blog.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:text-blue-800 hover:underline flex items-center space-x-1 truncate"
                                >
                                  <ExternalLink className="w-3 h-3 shrink-0" />
                                  <span className="truncate">{blog.title}</span>
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>

                      </div>

                      {/* 10 Curated Problems Table */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-gray-600">
                            {t('roadmap_problems_title')}
                          </span>
                          <span className="text-[11px] text-gray-400 font-mono">
                            10 problems
                          </span>
                        </div>

                        {/* Flat Minimalist Table */}
                        <div className="border border-[#e8e8e8] rounded overflow-x-auto">
                          <table className="w-full text-left border-collapse text-xs">
                            <thead>
                              <tr className="bg-[#fafafa] border-b border-[#e8e8e8] text-gray-600 text-[11px]">
                                <th className="py-2 px-2.5 w-10 text-center">
                                  {t('roadmap_col_status')}
                                </th>
                                <th className="py-2 px-3 w-56 sm:w-64">
                                  {t('roadmap_col_problem')}
                                </th>
                                <th className="py-2 px-2.5 w-20 text-center">
                                  {t('roadmap_col_rating')}
                                </th>
                                <th className="py-2 px-3">
                                  {t('roadmap_col_insight')}
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                              {topic.problems.map((prob, pIdx) => {
                                const isSolved = solvedSet.has(
                                  `${prob.contestId}_${prob.index}`
                                );

                                return (
                                  <tr
                                    key={pIdx}
                                    className={`hover:bg-gray-50/80 transition-colors ${
                                      isSolved ? 'bg-emerald-50/20 text-gray-500' : 'text-gray-800'
                                    }`}
                                  >
                                    {/* Checkbox Status */}
                                    <td className="py-2.5 px-2.5 text-center">
                                      <button
                                        onClick={() =>
                                          toggleProblemSolved(prob.contestId, prob.index)
                                        }
                                        className={`w-4 h-4 rounded-[3px] border flex items-center justify-center transition-all cursor-pointer ${
                                          isSolved
                                            ? 'bg-emerald-500 border-emerald-500 text-white'
                                            : 'border-gray-300 hover:border-gray-400 bg-white'
                                        }`}
                                        title={isSolved ? 'Đánh dấu chưa làm' : 'Đánh dấu đã AC'}
                                      >
                                        {isSolved && <Check className="w-3 h-3 stroke-[3]" />}
                                      </button>
                                    </td>

                                    {/* Problem Code & Title */}
                                    <td className="py-2.5 px-3">
                                      <a
                                        href={prob.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`font-medium flex items-center space-x-1.5 hover:underline group ${
                                          isSolved
                                            ? 'text-gray-600'
                                            : 'text-blue-600 hover:text-blue-800'
                                        }`}
                                      >
                                        <span className="font-mono font-semibold shrink-0">
                                          {prob.code}
                                        </span>
                                        <span className="truncate">- {prob.name}</span>
                                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                                      </a>
                                    </td>

                                    {/* Rating Chip */}
                                    <td className="py-2.5 px-2.5 text-center">
                                      <span
                                        className={`font-mono text-[11px] font-medium px-2 py-0.5 rounded border tabular-nums inline-block ${getRatingBadgeClass(
                                          prob.rating
                                        )}`}
                                      >
                                        {prob.rating}
                                      </span>
                                    </td>

                                    {/* Pedagogical Insight */}
                                    <td className="py-2.5 px-3 text-xs leading-relaxed text-gray-600 font-sans">
                                      {prob.comment}
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>

                      </div>

                    </div>
                  )}

                </div>
              );
            })
          )}

        </div>

      </div>

    </div>
  );
};

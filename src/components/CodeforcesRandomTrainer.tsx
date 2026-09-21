'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  CFRandomProblemItem, 
  CFGeminiHint, 
  getRandomCFProblem, 
  getGeminiHintWithTimeout,
  formatHintDisplay,
  formatSolutionCodeDisplay,
} from '@/lib/codeforcesClient';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Dices, 
  Sparkles, 
  ExternalLink, 
  Key, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Tag,
  Check,
  X,
  ChevronDown,
  Search,
  Lock,
  Unlock,
  BookOpen,
  Lightbulb,
  Compass,
  AlertTriangle,
  Code2,
  Copy,
  Cpu,
  Calendar,
} from 'lucide-react';
import { 
  CF_MIN_YEAR, 
  CF_MAX_YEAR, 
  CF_AVAILABLE_YEARS, 
  CF_YEAR_PRESETS 
} from '@/data/cfContestYears';

export const ALL_CF_TAGS = [
  'Tất cả',
  'implementation',
  'math',
  'greedy',
  'dp',
  'data structures',
  'brute force',
  'constructive algorithms',
  'graphs',
  'sortings',
  'binary search',
  'dfs and similar',
  'trees',
  'strings',
  'number theory',
  'combinatorics',
  'two pointers',
  'bitmasks',
  'geometry',
  'dsu',
  'shortest paths',
  'probabilities',
  'divide and conquer',
  'hashing',
  'games',
  'flows',
  'interactive',
  'matrices',
  'string suffix structures',
  'fft',
  'graph matchings',
  'ternary search',
  'expression parsing',
  'meet-in-the-middle',
  '2-sat',
  'chinese remainder theorem',
  'schedules',
  'communication',
  '*special',
];

export const CF_TAG_LIST = ALL_CF_TAGS.filter(t => t !== 'Tất cả');

export const TAG_ALIASES: Record<string, string[]> = {
  'dp': ['dynamic programming', 'quy hoạch động', 'qhd'],
  'greedy': ['tham lam', 'exchange argument'],
  'math': ['toán', 'toán học', 'toan'],
  'data structures': ['cấu trúc dữ liệu', 'ctdl', 'ds'],
  'graphs': ['đồ thị', 'do thi', 'graph'],
  'trees': ['cây', 'cay', 'tree'],
  'binary search': ['tìm kiếm nhị phân', 'chặt nhị phân', 'bs'],
  'two pointers': ['hai con trỏ', '2 con trỏ', 'con trỏ', 'sliding window'],
  'bitmasks': ['mặt nạ bit', 'bitmask', 'bit'],
  'geometry': ['hình học', 'hinh hoc'],
  'dsu': ['disjoint set union', 'tập hợp rời rạc'],
  'shortest paths': ['đường đi ngắn nhất', 'dijkstra', '0-1 bfs'],
  'strings': ['chuỗi', 'xâu', 'string'],
  'number theory': ['số học', 'so hoc', 'prime', 'nguyên tố'],
  'combinatorics': ['tổ hợp', 'to hop', 'chỉnh hợp'],
  'divide and conquer': ['chia để trị', 'chia de tri', 'd&c'],
  'flows': ['luồng', 'luong', 'cực đại', 'dinic'],
  'sortings': ['sắp xếp', 'sap xep', 'sort'],
  'brute force': ['vét cạn', 'vet can'],
  'constructive algorithms': ['xây dựng', 'xay dung'],
  'dfs and similar': ['dfs', 'duyệt sâu', 'bfs'],
  'games': ['trò chơi', 'game', 'nim', 'game theory'],
  'probabilities': ['xác suất', 'xac suat', 'kỳ vọng'],
  'hashing': ['băm', 'hash', 'rolling hash'],
  'matrices': ['ma trận', 'ma tran', 'matrix'],
  'fft': ['fourier', 'ntt', 'đa thức', 'polynomial'],
  '2-sat': ['2sat', 'sat'],
  'ternary search': ['tam phân', 'ba phân'],
  'string suffix structures': ['hậu tố', 'suffix', 'sam', 'trie'],
  'graph matchings': ['ghép cặp', 'matching'],
  'meet-in-the-middle': ['gặp ở giữa', 'mitm'],
  'interactive': ['tương tác', 'tuong tac'],
  'implementation': ['cài đặt', 'triển khai', 'code'],
};

export const normalizeSearchText = (str: string): string => {
  return (str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'd')
    .trim();
};

export const POPULAR_COMBOS = [
  { name: 'DP + Bitmasks', tags: ['dp', 'bitmasks'] },
  { name: 'DP + Trees', tags: ['dp', 'trees'] },
  { name: 'Graphs + Shortest Paths', tags: ['graphs', 'shortest paths'] },
  { name: 'Math + Number Theory', tags: ['math', 'number theory'] },
  { name: 'Data Structures + DSU', tags: ['data structures', 'dsu'] },
  { name: 'Binary Search + Two Pointers', tags: ['binary search', 'two pointers'] },
];

const RATING_OPTIONS = [
  800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 
  1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400,
  2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3300, 3400, 3500
];

interface CodeforcesRandomTrainerProps {
  handle: string;
  recommendedRating: number;
  solvedProblemIds?: string[];
}

export const CodeforcesRandomTrainer: React.FC<CodeforcesRandomTrainerProps> = ({
  handle,
  recommendedRating,
  solvedProblemIds = [],
}) => {
  const { t, lang } = useLanguage();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [matchMode, setMatchMode] = useState<'AND' | 'OR'>('AND');
  const [selectedRating, setSelectedRating] = useState<number>(recommendedRating || 1200);
  const [fromYear, setFromYear] = useState<number>(CF_MIN_YEAR);
  const [toYear, setToYear] = useState<number>(CF_MAX_YEAR);
  const [isTagDropdownOpen, setIsTagDropdownOpen] = useState(false);
  const [tagSearchQuery, setTagSearchQuery] = useState('');
  const tagDropdownRef = useRef<HTMLDivElement>(null);
  
  // State bài tập và gợi ý
  const [randomProblem, setRandomProblem] = useState<CFRandomProblemItem | null>(null);
  const [geminiHint, setGeminiHint] = useState<CFGeminiHint | null>(null);
  
  const [loadingRandom, setLoadingRandom] = useState(false);
  const [loadingHint, setLoadingHint] = useState(false);
  
  const [randomError, setRandomError] = useState<string | null>(null);
  const [hintError, setHintError] = useState<string | null>(null);

  // Gemini API Key state
  const [geminiApiKey, setGeminiApiKey] = useState<string>('');
  const [showKey, setShowKey] = useState(false);
  const [keySaved, setKeySaved] = useState(false);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (tagDropdownRef.current && !tagDropdownRef.current.contains(event.target as Node)) {
        setIsTagDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Khởi tạo Gemini Key từ localStorage
  useEffect(() => {
    const savedKey = localStorage.getItem('gemini_api_key') || '';
    if (savedKey) {
      setGeminiApiKey(savedKey);
      setKeySaved(true);
    }
  }, []);

  // Cập nhật rating khi recommendedRating thay đổi
  useEffect(() => {
    if (recommendedRating) {
      setSelectedRating(recommendedRating);
    }
  }, [recommendedRating]);

  // Lưu API Key
  const handleSaveApiKey = (key: string) => {
    setGeminiApiKey(key);
    if (key.trim()) {
      localStorage.setItem('gemini_api_key', key.trim());
      setKeySaved(true);
    } else {
      localStorage.removeItem('gemini_api_key');
      setKeySaved(false);
    }
  };

  const handleToggleTag = (tag: string) => {
    setSelectedTags(prev => {
      if (prev.includes(tag)) {
        return prev.filter(t => t !== tag);
      } else {
        return [...prev, tag];
      }
    });
  };

  const handleRemoveTag = (tag: string) => {
    setSelectedTags(prev => prev.filter(t => t !== tag));
  };

  const handleClearTags = () => {
    setSelectedTags([]);
  };

  const handleSelectCombo = (tags: string[]) => {
    setSelectedTags(tags);
    setMatchMode('AND');
    setIsTagDropdownOpen(false);
  };

  const handleFromYearChange = (val: number) => {
    setFromYear(val);
    if (val > toYear) {
      setToYear(val);
    }
  };

  const handleToYearChange = (val: number) => {
    setToYear(val);
    if (val < fromYear) {
      setFromYear(val);
    }
  };

  const handleSelectYearPreset = (presetFrom: number, presetTo: number) => {
    setFromYear(presetFrom);
    setToYear(presetTo);
  };

  // Trạng thái mở từng bậc thang gợi ý
  const [revealedTiers, setRevealedTiers] = useState<{ [key: string]: boolean }>({
    hint1: false,
    hint2: false,
    hint3: false,
    hint4: false,
    edgeCases: false,
    solution: false,
  });

  const [copiedCode, setCopiedCode] = useState(false);

  const TIERS_ORDER = ['hint1', 'hint2', 'hint3', 'hint4', 'edgeCases', 'solution'];

  const toggleTier = (tierKey: string) => {
    setRevealedTiers(prev => ({
      ...prev,
      [tierKey]: !prev[tierKey],
    }));
  };

  const handleRevealNext = () => {
    for (const key of TIERS_ORDER) {
      if (!revealedTiers[key]) {
        setRevealedTiers(prev => ({ ...prev, [key]: true }));
        break;
      }
    }
  };

  const handleRevealAll = () => {
    setRevealedTiers({
      hint1: true,
      hint2: true,
      hint3: true,
      hint4: true,
      edgeCases: true,
      solution: true,
    });
  };

  const handleHideAll = () => {
    setRevealedTiers({
      hint1: false,
      hint2: false,
      hint3: false,
      hint4: false,
      edgeCases: false,
      solution: false,
    });
  };

  const unlockedCount = TIERS_ORDER.filter(key => revealedTiers[key]).length;

  const handleCopyCode = (code: string) => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // 1. Random bài tập Codeforces tức thì (dưới 300ms, không bao giờ bị treo!)
  const handleRandomize = async () => {
    setLoadingRandom(true);
    setRandomError(null);
    setGeminiHint(null);
    setHintError(null);

    try {
      const problem = await getRandomCFProblem(
        selectedTags,
        selectedRating,
        solvedProblemIds,
        matchMode,
        lang,
        fromYear,
        toYear
      );
      setRandomProblem(problem);

      // Nếu có API key, tự động yêu cầu gợi ý từ Gemini AI luôn
      if (geminiApiKey.trim()) {
        fetchHint(problem, geminiApiKey.trim(), lang);
      }
    } catch (err: any) {
      setRandomError(err.message || t('err_random_failed'));
    } finally {
      setLoadingRandom(false);
    }
  };

  // 2. Lấy gợi ý tư duy từ Gemini AI với hỗ trợ ngôn ngữ
  const fetchHint = async (prob: CFRandomProblemItem, key: string, language: 'vi' | 'en' = lang) => {
    setLoadingHint(true);
    setHintError(null);

    try {
      const hint = await getGeminiHintWithTimeout(key, prob, language);
      setGeminiHint(hint);
    } catch (err: any) {
      setHintError(err.message || t('err_hint_failed'));
    } finally {
      setLoadingHint(false);
    }
  };

  const getRatingBadgeClass = (r: number) => {
    if (r < 1200) return 'bg-gray-100 text-gray-700 border-gray-300';
    if (r < 1400) return 'bg-emerald-50 text-emerald-700 border-emerald-300';
    if (r < 1600) return 'bg-cyan-50 text-cyan-700 border-cyan-300';
    if (r < 1900) return 'bg-blue-50 text-blue-700 border-blue-300';
    if (r < 2100) return 'bg-purple-50 text-purple-700 border-purple-300';
    if (r < 2400) return 'bg-amber-50 text-amber-700 border-amber-300';
    if (r < 3000) return 'bg-rose-50 text-rose-700 border-rose-300';
    return 'bg-red-100 text-red-900 border-red-400 font-extrabold shadow-sm';
  };

  return (
    <div className="bg-white border border-[#e8e8e8] rounded shadow-sm relative">
      {/* Header */}
      <div className="bg-[#fafafa] rounded-t px-4 py-3 border-b border-[#e8e8e8] flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center space-x-2">
          <Dices className="w-4 h-4 text-blue-600" />
          <h2 className="text-sm font-semibold text-gray-800 tracking-tight flex items-center space-x-2">
            <span>{t('cf_trainer_title')}</span>
            <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded font-mono text-[10px] font-bold">
              {t('cf_trainer_ai_badge')}
            </span>
          </h2>
        </div>
        <span className="text-xs text-gray-500 font-mono">
          {t('cf_trainer_account')} <strong className="text-gray-800">{handle}</strong>
        </span>
      </div>

      <div className="p-4 sm:p-5 space-y-5">

        {/* Khung cấu hình Gemini API Key */}
        <div className="p-3 bg-[#fbfbfc] border border-gray-200 rounded text-xs space-y-2">
          <div className="flex items-center justify-between flex-wrap gap-1">
            <div className="flex items-center space-x-1.5 text-gray-800 font-medium">
              <Key className="w-3.5 h-3.5 text-blue-600" />
              <span>{t('gemini_key_title')}</span>
            </div>
            {keySaved ? (
              <span className="inline-flex items-center space-x-1 text-[11px] text-emerald-600 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{t('gemini_key_saved')}</span>
              </span>
            ) : (
              <span className="text-[11px] text-gray-500">
                {t('gemini_key_optional')}
              </span>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <input
                type={showKey ? 'text' : 'password'}
                value={geminiApiKey}
                onChange={(e) => handleSaveApiKey(e.target.value)}
                placeholder={t('gemini_key_placeholder')}
                className="w-full text-xs font-mono bg-white border border-gray-300 rounded px-2.5 py-2 pr-8 focus:outline-none focus:border-blue-500 shadow-inner"
              />
              <button
                type="button"
                onClick={() => setShowKey(!showKey)}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showKey ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              </button>
            </div>
            <a
              href="https://aistudio.google.com/app/apikey"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded text-xs font-medium whitespace-nowrap transition-colors"
            >
              {t('btn_get_key')}
            </a>
          </div>
        </div>
        
        {/* Hàng điều khiển Chọn & Gộp Tag, Rating và Nút Random */}
        <div className="p-3.5 bg-[#fafbfc] border border-gray-200 rounded space-y-3">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            
            {/* Chọn và gộp Tag */}
            <div className={`md:col-span-5 relative ${isTagDropdownOpen ? 'z-50' : 'z-10'}`} ref={tagDropdownRef}>
              <div className="flex items-center justify-between mb-1">
                <label className="text-[11px] font-medium text-gray-700 flex items-center space-x-1">
                  <Tag className="w-3 h-3 text-blue-600" />
                  <span>{t('step1_tag')}</span>
                </label>
                {selectedTags.length > 0 && (
                  <button
                    type="button"
                    onClick={handleClearTags}
                    className="text-[10px] text-rose-600 hover:underline font-medium"
                  >
                    {t('btn_clear_tags')} ({selectedTags.length})
                  </button>
                )}
              </div>

              {/* Tag Selector Trigger Button */}
              <button
                type="button"
                onClick={() => setIsTagDropdownOpen(!isTagDropdownOpen)}
                className="w-full text-left text-xs bg-white border border-gray-300 rounded px-2.5 py-2 flex items-center justify-between hover:border-blue-400 focus:outline-none focus:border-blue-500 transition-colors shadow-sm"
              >
                <div className="flex items-center space-x-1.5 truncate">
                  {selectedTags.length === 0 ? (
                    <span className="text-gray-500">{t('all_tags_label')} (38 tags)</span>
                  ) : (
                    <span className="font-medium text-blue-700">
                      {t('selected_tags_prefix')} {selectedTags.length} tag{selectedTags.length > 1 && lang === 'en' ? 's' : ''}: {selectedTags.join(', ')}
                    </span>
                  )}
                </div>
                <ChevronDown className={`w-3.5 h-3.5 text-gray-400 shrink-0 transition-transform ${isTagDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Popover */}
              {isTagDropdownOpen && (
                <div 
                  className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded-md shadow-xl z-50 p-2.5 space-y-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Search box */}
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      value={tagSearchQuery}
                      onChange={(e) => setTagSearchQuery(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          const normQuery = normalizeSearchText(tagSearchQuery);
                          const matched = CF_TAG_LIST.filter(tag => {
                            if (!normQuery) return true;
                            const normTag = normalizeSearchText(tag);
                            if (normTag.includes(normQuery)) return true;
                            const aliases = TAG_ALIASES[tag] || [];
                            return aliases.some(alias => normalizeSearchText(alias).includes(normQuery));
                          });
                          if (matched.length > 0) {
                            handleToggleTag(matched[0]);
                          }
                        }
                      }}
                      placeholder={t('select_tags_placeholder')}
                      className="w-full text-xs pl-8 pr-7 py-1.5 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
                      autoFocus
                    />
                    {tagSearchQuery && (
                      <button
                        type="button"
                        onClick={() => setTagSearchQuery('')}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-0.5"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    )}
                  </div>

                  {/* Actions in Dropdown */}
                  <div className="flex items-center justify-between text-[11px] px-1 text-gray-500 border-b border-gray-100 pb-1.5">
                    <span>
                      {t('selected_tags_prefix')}: <strong className="text-blue-600">{selectedTags.length}</strong> / {CF_TAG_LIST.length}
                    </span>
                    {selectedTags.length > 0 && (
                      <button
                        type="button"
                        onClick={handleClearTags}
                        className="text-rose-600 hover:underline font-medium"
                      >
                        {t('btn_clear_tags')}
                      </button>
                    )}
                  </div>

                  {/* Tag Checkbox List */}
                  <div className="max-h-60 min-h-[140px] overflow-y-auto space-y-0.5 pr-1 text-xs">
                    {(() => {
                      const normQuery = normalizeSearchText(tagSearchQuery);
                      const filteredTags = CF_TAG_LIST.filter(tag => {
                        if (!normQuery) return true;
                        const normTag = normalizeSearchText(tag);
                        if (normTag.includes(normQuery)) return true;
                        const aliases = TAG_ALIASES[tag] || [];
                        return aliases.some(alias => normalizeSearchText(alias).includes(normQuery));
                      });

                      if (filteredTags.length === 0) {
                        return (
                          <div className="py-8 text-center text-gray-400 text-xs italic">
                            {t('no_tags_match')}
                          </div>
                        );
                      }

                      return filteredTags.map(tag => {
                        const isChecked = selectedTags.includes(tag);
                        const aliases = TAG_ALIASES[tag] || [];
                        const matchedAlias = normQuery ? aliases.find(a => normalizeSearchText(a).includes(normQuery)) : null;

                        return (
                          <div
                            key={tag}
                            onClick={() => handleToggleTag(tag)}
                            className={`flex items-center justify-between px-2.5 py-1.5 rounded cursor-pointer transition-colors ${
                              isChecked
                                ? 'bg-blue-50 text-blue-800 font-medium'
                                : 'hover:bg-gray-50 text-gray-700'
                            }`}
                          >
                            <div className="flex items-center space-x-2">
                              <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${
                                isChecked ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-300 bg-white'
                              }`}>
                                {isChecked && <Check className="w-2.5 h-2.5" />}
                              </div>
                              <span className="capitalize">{tag}</span>
                              {matchedAlias && (
                                <span className="text-[10px] text-gray-400 font-normal italic">
                                  ({matchedAlias})
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      });
                    })()}
                  </div>
                </div>
              )}
            </div>

            {/* Chọn Rating */}
            <div className="md:col-span-2">
              <div className="flex items-center justify-between mb-1">
                <label className="text-[11px] font-medium text-gray-700 truncate">
                  {t('step2_rating')}
                </label>
                <button
                  type="button"
                  onClick={() => setSelectedRating(recommendedRating)}
                  className="text-[10px] text-blue-600 hover:underline font-medium shrink-0"
                  title={`${t('btn_use_recommended')} (${recommendedRating})`}
                >
                  ★ {recommendedRating}
                </button>
              </div>
              <select
                value={selectedRating}
                onChange={(e) => setSelectedRating(Number(e.target.value))}
                className="w-full text-xs bg-white border border-gray-300 rounded px-2 py-2 focus:outline-none focus:border-blue-500 font-mono shadow-sm"
              >
                {RATING_OPTIONS.map((r) => (
                  <option key={r} value={r}>
                    {r} {r === recommendedRating ? '★' : ''}
                  </option>
                ))}
              </select>
            </div>

            {/* Chọn khoảng Năm ra đề */}
            <div className="md:col-span-3">
              <div className="flex items-center justify-between mb-1">
                <label className="text-[11px] font-medium text-gray-700 flex items-center space-x-1 truncate">
                  <Calendar className="w-3 h-3 text-sky-600 shrink-0" />
                  <span className="truncate">{t('step3_year')}</span>
                </label>
                {(fromYear !== CF_MIN_YEAR || toYear !== CF_MAX_YEAR) && (
                  <button
                    type="button"
                    onClick={() => { setFromYear(CF_MIN_YEAR); setToYear(CF_MAX_YEAR); }}
                    className="text-[10px] text-sky-600 hover:underline font-medium shrink-0 ml-1"
                  >
                    {t('preset_all')}
                  </button>
                )}
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                <div className="relative">
                  <select
                    value={fromYear}
                    onChange={(e) => handleFromYearChange(Number(e.target.value))}
                    className="w-full text-xs bg-white border border-gray-300 rounded px-2 py-2 focus:outline-none focus:border-blue-500 font-mono shadow-sm"
                    title={t('filter_from_year')}
                  >
                    {CF_AVAILABLE_YEARS.map((y) => (
                      <option key={`from-${y}`} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="relative">
                  <select
                    value={toYear}
                    onChange={(e) => handleToYearChange(Number(e.target.value))}
                    className="w-full text-xs bg-white border border-gray-300 rounded px-2 py-2 focus:outline-none focus:border-blue-500 font-mono shadow-sm"
                    title={t('filter_to_year')}
                  >
                    {CF_AVAILABLE_YEARS.map((y) => (
                      <option key={`to-${y}`} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Nút bấm Random */}
            <div className="md:col-span-2 flex items-end">
              <button
                onClick={handleRandomize}
                disabled={loadingRandom}
                className="w-full py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-medium transition-colors flex items-center justify-center space-x-1.5 disabled:opacity-50 shadow-sm"
              >
                {loadingRandom ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>{t('btn_randoming_cf')}</span>
                  </>
                ) : (
                  <>
                    <Dices className="w-3.5 h-3.5" />
                    <span>{t('btn_random_cf')}</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Hàng hiển thị các Tag đã chọn + Chế độ gộp (AND / OR) */}
          {selectedTags.length > 0 && (
            <div className="pt-2 border-t border-gray-200 flex items-center justify-between flex-wrap gap-2 text-xs">
              
              {/* Selected Tag Badges */}
              <div className="flex items-center flex-wrap gap-1.5">
                <span className="text-[11px] text-gray-500 font-medium">
                  {t('selected_tags_prefix')}:
                </span>
                {selectedTags.map(tag => (
                  <span
                    key={tag}
                    className="inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[11px] font-mono bg-blue-100 text-blue-800 border border-blue-200"
                  >
                    <span>{tag}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="text-blue-600 hover:text-blue-900 focus:outline-none ml-0.5"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>

              {/* Chế độ gộp bài (AND / OR) khi chọn >= 2 tags */}
              {selectedTags.length >= 2 && (
                <div className="flex items-center space-x-1.5 bg-gray-100 p-0.5 rounded border border-gray-200">
                  <span className="text-[10px] text-gray-600 px-1 font-medium">
                    {t('match_mode_label')}
                  </span>
                  <button
                    type="button"
                    onClick={() => setMatchMode('AND')}
                    title={t('match_mode_and_tooltip')}
                    className={`px-2 py-0.5 rounded text-[10px] font-medium transition-colors ${
                      matchMode === 'AND'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {t('match_mode_and')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setMatchMode('OR')}
                    title={t('match_mode_or_tooltip')}
                    className={`px-2 py-0.5 rounded text-[10px] font-medium transition-colors ${
                      matchMode === 'OR'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {t('match_mode_or')}
                  </button>
                </div>
              )}

            </div>
          )}

          {/* Hàng gợi ý các cặp Tag kinh điển */}
          <div className="pt-1.5 flex items-center flex-wrap gap-1.5 text-[11px] text-gray-500">
            <span className="font-medium text-gray-600 flex items-center space-x-1">
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span>{t('popular_combos_label')}</span>
            </span>
            {POPULAR_COMBOS.map((combo) => {
              const isActive = combo.tags.length === selectedTags.length &&
                combo.tags.every(t => selectedTags.includes(t));
              return (
                <button
                  key={combo.name}
                  type="button"
                  onClick={() => handleSelectCombo(combo.tags)}
                  className={`px-2 py-0.5 rounded text-[10px] border transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600 font-medium'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-700'
                  }`}
                >
                  {combo.name}
                </button>
              );
            })}
          </div>

          {/* Hàng chọn nhanh khoảng năm (Quick Year Presets) */}
          <div className="pt-1.5 flex items-center flex-wrap gap-1.5 text-[11px] text-gray-500 border-t border-gray-100">
            <span className="font-medium text-gray-600 flex items-center space-x-1">
              <Calendar className="w-3 h-3 text-sky-600" />
              <span>{t('year_presets_label')}</span>
            </span>
            {CF_YEAR_PRESETS.map((preset) => {
              const isActive = fromYear === preset.fromYear && toYear === preset.toYear;
              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => handleSelectYearPreset(preset.fromYear, preset.toYear)}
                  title={lang === 'en' ? preset.descriptionEn : preset.descriptionVi}
                  className={`px-2 py-0.5 rounded text-[10px] border transition-colors ${
                    isActive
                      ? 'bg-sky-600 text-white border-sky-600 font-medium shadow-xs'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-sky-300 hover:text-sky-700'
                  }`}
                >
                  {lang === 'en' ? preset.labelEn : preset.labelVi}
                </button>
              );
            })}
            {(fromYear !== CF_MIN_YEAR || toYear !== CF_MAX_YEAR) && (
              <span className="text-[10px] text-sky-700 font-mono bg-sky-50 px-1.5 py-0.5 rounded border border-sky-200 font-medium">
                {fromYear} – {toYear}
              </span>
            )}
          </div>

        </div>

        {/* Lỗi nếu có */}
        {randomError && (
          <div className="p-3 bg-rose-50 border border-rose-200 rounded text-xs text-rose-800 flex items-start space-x-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-600 mt-0.5" />
            <span>{randomError}</span>
          </div>
        )}

        {/* Hiển thị bài tập đã random */}
        {randomProblem && (
          <div className="border border-blue-200 bg-white rounded-md p-4 sm:p-5 space-y-4 shadow-sm">
            
            {/* Header bài toán */}
            <div className="flex items-start justify-between flex-wrap gap-3 pb-3 border-b border-gray-100">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-base font-bold text-gray-900">
                    {randomProblem.contestId}{randomProblem.index}
                  </span>
                  <span className="text-gray-300">·</span>
                  <h3 className="font-bold text-gray-900 text-base">
                    {randomProblem.name}
                  </h3>
                </div>
                <div className="flex items-center space-x-2 mt-2 flex-wrap gap-1.5">
                  <span className={`px-2 py-0.5 rounded text-xs font-mono font-bold border ${getRatingBadgeClass(randomProblem.rating)}`}>
                    {t('rating_label')} {randomProblem.rating}
                  </span>
                  {randomProblem.year && (
                    <span className="px-2 py-0.5 rounded text-xs font-mono font-medium border bg-sky-50 text-sky-700 border-sky-200 flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-sky-600" />
                      <span>{t('problem_year_badge')} {randomProblem.year}</span>
                    </span>
                  )}
                  {randomProblem.tags.map((tTag) => (
                    <span
                      key={tTag}
                      className="px-2 py-0.5 bg-gray-50 border border-gray-200 rounded text-[11px] text-gray-600 font-mono"
                    >
                      {tTag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Nút thao tác */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleRandomize}
                  disabled={loadingRandom}
                  className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded text-xs text-gray-700 font-medium transition-colors flex items-center space-x-1"
                >
                  <Dices className="w-3.5 h-3.5" />
                  <span>{t('btn_change_problem')}</span>
                </button>

                <a
                  href={randomProblem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-medium transition-colors shadow-sm"
                >
                  <span>Codeforces</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Nút kích hoạt Gemini nếu chưa có gợi ý */}
            {!geminiHint && !loadingHint && (
              <div className="p-3 bg-indigo-50/60 border border-indigo-100 rounded flex items-center justify-between flex-wrap gap-2 text-xs">
                <span className="text-indigo-900">
                  {t('need_hint_question')}
                </span>
                <button
                  onClick={() => {
                    if (!geminiApiKey.trim()) {
                      setHintError(t('err_missing_gemini_key'));
                      return;
                    }
                    fetchHint(randomProblem, geminiApiKey.trim(), lang);
                  }}
                  className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-xs font-medium transition-colors flex items-center space-x-1 shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t('btn_get_ai_hint')}</span>
                </button>
              </div>
            )}

            {/* Trạng thái đang tải gợi ý */}
            {loadingHint && (
              <div className="p-3 bg-blue-50 border border-blue-200 rounded text-xs text-blue-700 flex items-center space-x-2">
                <Loader2 className="w-4 h-4 animate-spin text-blue-600 shrink-0" />
                <span>{t('ai_analyzing')}</span>
              </div>
            )}

            {/* Lỗi gợi ý nếu có */}
            {hintError && (
              <div className="p-3 bg-amber-50 border border-amber-200 rounded text-xs text-amber-800 flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span>{hintError}</span>
                  {!geminiApiKey && (
                    <span className="block mt-0.5 text-gray-600 font-normal">
                      {t('err_missing_gemini_key')}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Khung Bậc thang gợi ý tư duy & Lời giải từ Gemini AI */}
            {geminiHint && (
              <div className="border border-blue-200 bg-white rounded-md overflow-hidden shadow-sm space-y-0">
                
                {/* Header bậc thang gợi ý */}
                <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 px-4 py-3 border-b border-blue-200 flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 flex items-center space-x-2">
                        <span>{t('hints_ladder_title')}</span>
                        <span className="px-2 py-0.5 bg-blue-600 text-white rounded text-[10px] font-mono">
                          {unlockedCount}/6 {t('hints_unlocked')}
                        </span>
                      </h4>
                      <p className="text-[11px] text-gray-500">
                        {t('hints_ladder_subtitle')}
                      </p>
                    </div>
                  </div>

                  {/* Thanh nút điều khiển mở gợi ý */}
                  <div className="flex items-center space-x-1.5 flex-wrap">
                    {unlockedCount < 6 && (
                      <button
                        type="button"
                        onClick={handleRevealNext}
                        className="px-2.5 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-[11px] font-medium transition-colors flex items-center space-x-1 shadow-xs"
                      >
                        <Unlock className="w-3 h-3" />
                        <span>{t('btn_reveal_next')}</span>
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={handleRevealAll}
                      className="px-2 py-1 bg-white hover:bg-gray-100 border border-gray-200 text-gray-700 rounded text-[11px] font-medium transition-colors flex items-center space-x-1"
                    >
                      <Eye className="w-3 h-3" />
                      <span>{t('btn_reveal_all')}</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleHideAll}
                      className="px-2 py-1 bg-white hover:bg-gray-100 border border-gray-200 text-gray-700 rounded text-[11px] font-medium transition-colors flex items-center space-x-1"
                    >
                      <EyeOff className="w-3 h-3" />
                      <span>{t('btn_hide_all')}</span>
                    </button>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-gray-100 h-1">
                  <div 
                    className="bg-blue-600 h-1 transition-all duration-300"
                    style={{ width: `${(unlockedCount / 6) * 100}%` }}
                  />
                </div>

                <div className="p-4 space-y-3.5 bg-[#fafbfc]">

                  {/* Tóm tắt đề bài & Bản chất bài toán (Luôn mở) */}
                  {geminiHint.briefSummary && (
                    <div className="p-3 bg-white rounded border border-gray-200 shadow-2xs text-xs text-gray-700 leading-relaxed">
                      <span className="font-bold text-gray-900 flex items-center space-x-1.5 mb-1 text-[11px]">
                        <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                        <span>{t('hint_brief_summary')}</span>
                      </span>
                      <p className="text-gray-700 whitespace-pre-line">{formatHintDisplay(geminiHint.briefSummary)}</p>
                    </div>
                  )}

                  {/* 1. Gợi ý 1: Quan sát ban đầu */}
                  {(geminiHint.hint1_basic || geminiHint.keyObservation) && (
                    <div className={`rounded-md border transition-colors ${
                      revealedTiers.hint1 ? 'bg-white border-emerald-300 shadow-2xs' : 'bg-gray-50/70 border-gray-200'
                    }`}>
                      <div 
                        onClick={() => toggleTier('hint1')}
                        className="px-3.5 py-2.5 flex items-center justify-between cursor-pointer select-none"
                      >
                        <div className="flex items-center space-x-2">
                          {revealedTiers.hint1 ? (
                            <Unlock className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Lock className="w-3.5 h-3.5 text-gray-400" />
                          )}
                          <span className="text-xs font-bold text-gray-800">
                            {t('hint_tier_1_title')}
                          </span>
                        </div>
                        <span className="text-[11px] text-blue-600 hover:underline font-medium">
                          {revealedTiers.hint1 ? t('btn_collapse_hint') : t('btn_reveal_hint')}
                        </span>
                      </div>

                      {revealedTiers.hint1 && (
                        <div className="px-3.5 pb-3 pt-1 border-t border-emerald-100 text-xs text-gray-700 leading-relaxed whitespace-pre-line">
                          {formatHintDisplay(geminiHint.hint1_basic || geminiHint.keyObservation)}
                        </div>
                      )}
                    </div>
                  )}

                  {/* 2. Gợi ý 2: Quy đổi mô hình (nếu có) */}
                  {geminiHint.hint2_reduction && (
                    <div className={`rounded-md border transition-colors ${
                      revealedTiers.hint2 ? 'bg-white border-blue-300 shadow-2xs' : 'bg-gray-50/70 border-gray-200'
                    }`}>
                      <div 
                        onClick={() => toggleTier('hint2')}
                        className="px-3.5 py-2.5 flex items-center justify-between cursor-pointer select-none"
                      >
                        <div className="flex items-center space-x-2">
                          {revealedTiers.hint2 ? (
                            <Compass className="w-3.5 h-3.5 text-blue-600" />
                          ) : (
                            <Lock className="w-3.5 h-3.5 text-gray-400" />
                          )}
                          <span className="text-xs font-bold text-gray-800">
                            {t('hint_tier_2_title')}
                          </span>
                        </div>
                        <span className="text-[11px] text-blue-600 hover:underline font-medium">
                          {revealedTiers.hint2 ? t('btn_collapse_hint') : t('btn_reveal_hint')}
                        </span>
                      </div>

                      {revealedTiers.hint2 && (
                        <div className="px-3.5 pb-3 pt-1 border-t border-blue-100 text-xs text-gray-700 leading-relaxed whitespace-pre-line">
                          {formatHintDisplay(geminiHint.hint2_reduction)}
                        </div>
                      )}
                    </div>
                  )}

                  {/* 3. Gợi ý 3: QUAN SÁT THEN CHỐT (Aha Moment) */}
                  {(geminiHint.hint3_key || geminiHint.keyObservation) && (
                    <div className={`rounded-md border transition-colors ${
                      revealedTiers.hint3 ? 'bg-amber-50/30 border-amber-300 shadow-2xs' : 'bg-gray-50/70 border-gray-200'
                    }`}>
                      <div 
                        onClick={() => toggleTier('hint3')}
                        className="px-3.5 py-2.5 flex items-center justify-between cursor-pointer select-none"
                      >
                        <div className="flex items-center space-x-2">
                          {revealedTiers.hint3 ? (
                            <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                          ) : (
                            <Lock className="w-3.5 h-3.5 text-amber-500/80" />
                          )}
                          <div className="flex items-center space-x-1.5">
                            <span className="text-xs font-bold text-gray-900">
                              {t('hint_tier_3_title')}
                            </span>
                            <span className="px-1.5 py-0.2 bg-amber-100 text-amber-800 rounded font-semibold text-[9px]">
                              {t('badge_crucial')}
                            </span>
                          </div>
                        </div>
                        <span className="text-[11px] text-amber-700 hover:underline font-medium">
                          {revealedTiers.hint3 ? t('btn_collapse_hint') : t('btn_reveal_hint')}
                        </span>
                      </div>

                      {revealedTiers.hint3 && (
                        <div className="px-3.5 pb-3 pt-1 border-t border-amber-200/60 text-xs text-gray-800 leading-relaxed whitespace-pre-line pl-4 border-l-3 border-amber-400">
                          {formatHintDisplay(geminiHint.hint3_key || geminiHint.keyObservation)}
                        </div>
                      )}
                    </div>
                  )}

                  {/* 4. Gợi ý 4: Thuật toán & Các bước chi tiết */}
                  {(geminiHint.hint4_algorithm || geminiHint.stepByStepHint) && (
                    <div className={`rounded-md border transition-colors ${
                      revealedTiers.hint4 ? 'bg-white border-purple-300 shadow-2xs' : 'bg-gray-50/70 border-gray-200'
                    }`}>
                      <div 
                        onClick={() => toggleTier('hint4')}
                        className="px-3.5 py-2.5 flex items-center justify-between cursor-pointer select-none"
                      >
                        <div className="flex items-center space-x-2">
                          {revealedTiers.hint4 ? (
                            <Unlock className="w-3.5 h-3.5 text-purple-600" />
                          ) : (
                            <Lock className="w-3.5 h-3.5 text-gray-400" />
                          )}
                          <span className="text-xs font-bold text-gray-800">
                            {t('hint_tier_4_title')}
                          </span>
                        </div>
                        <span className="text-[11px] text-purple-600 hover:underline font-medium">
                          {revealedTiers.hint4 ? t('btn_collapse_hint') : t('btn_reveal_hint')}
                        </span>
                      </div>

                      {revealedTiers.hint4 && (
                        <div className="px-3.5 pb-3 pt-1 border-t border-purple-100 text-xs text-gray-700 leading-relaxed whitespace-pre-line pl-4 border-l-3 border-purple-400">
                          {formatHintDisplay(geminiHint.hint4_algorithm || geminiHint.stepByStepHint)}
                        </div>
                      )}
                    </div>
                  )}

                  {/* 5. Gợi ý 5: Bẫy test & Trường hợp biên */}
                  {geminiHint.edgeCases && (
                    <div className={`rounded-md border transition-colors ${
                      revealedTiers.edgeCases ? 'bg-white border-rose-300 shadow-2xs' : 'bg-gray-50/70 border-gray-200'
                    }`}>
                      <div 
                        onClick={() => toggleTier('edgeCases')}
                        className="px-3.5 py-2.5 flex items-center justify-between cursor-pointer select-none"
                      >
                        <div className="flex items-center space-x-2">
                          {revealedTiers.edgeCases ? (
                            <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
                          ) : (
                            <Lock className="w-3.5 h-3.5 text-gray-400" />
                          )}
                          <span className="text-xs font-bold text-gray-800">
                            {t('hint_tier_5_title')}
                          </span>
                        </div>
                        <span className="text-[11px] text-rose-600 hover:underline font-medium">
                          {revealedTiers.edgeCases ? t('btn_collapse_hint') : t('btn_reveal_hint')}
                        </span>
                      </div>

                      {revealedTiers.edgeCases && (
                        <div className="px-3.5 pb-3 pt-1 border-t border-rose-100 text-xs text-gray-700 leading-relaxed whitespace-pre-line pl-4 border-l-3 border-rose-400">
                          {formatHintDisplay(geminiHint.edgeCases)}
                        </div>
                      )}
                    </div>
                  )}

                  {/* 6. Lời giải hoàn chỉnh & Code mẫu (Full Solution Editorial) */}
                  {geminiHint.solutionCode && (
                    <div className={`rounded-md border transition-colors ${
                      revealedTiers.solution ? 'bg-white border-indigo-400 shadow-sm' : 'bg-gray-50/70 border-gray-200'
                    }`}>
                      <div 
                        onClick={() => toggleTier('solution')}
                        className="px-3.5 py-2.5 flex items-center justify-between cursor-pointer select-none"
                      >
                        <div className="flex items-center space-x-2">
                          {revealedTiers.solution ? (
                            <Code2 className="w-3.5 h-3.5 text-indigo-600" />
                          ) : (
                            <Lock className="w-3.5 h-3.5 text-indigo-500" />
                          )}
                          <div className="flex items-center space-x-1.5">
                            <span className="text-xs font-bold text-gray-900">
                              {t('hint_tier_6_title')}
                            </span>
                            <span className="px-1.5 py-0.2 bg-rose-100 text-rose-800 rounded font-semibold text-[9px]">
                              {t('badge_spoiler')}
                            </span>
                          </div>
                        </div>
                        <span className="text-[11px] text-indigo-600 hover:underline font-medium">
                          {revealedTiers.solution ? t('btn_collapse_hint') : t('btn_reveal_hint')}
                        </span>
                      </div>

                      {revealedTiers.solution && (
                        <div className="px-3.5 pb-4 pt-2 border-t border-indigo-100 space-y-3">
                          <div className="flex items-center justify-between text-[11px] text-gray-500">
                            <span className="text-amber-800 font-medium">
                              {t('warning_spoiler')}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleCopyCode(formatSolutionCodeDisplay(geminiHint.solutionCode))}
                              className="inline-flex items-center space-x-1 px-2.5 py-1 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded text-[11px] text-gray-700 transition-colors"
                            >
                              {copiedCode ? (
                                <>
                                  <Check className="w-3 h-3 text-emerald-600" />
                                  <span className="text-emerald-700 font-medium">{t('btn_copied')}</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3" />
                                  <span>{t('btn_copy_code')}</span>
                                </>
                              )}
                            </button>
                          </div>

                          <pre className="p-3 bg-[#1e1e2e] text-gray-100 rounded text-[11px] font-mono overflow-x-auto leading-relaxed whitespace-pre shadow-inner">
                            {formatSolutionCodeDisplay(geminiHint.solutionCode)}
                          </pre>
                        </div>
                      )}
                    </div>
                  )}

                  {/* 7. Đánh giá độ phức tạp mục tiêu */}
                  {(geminiHint.complexity || geminiHint.targetComplexity) && (
                    <div className="p-2.5 bg-white rounded border border-gray-200 flex items-center justify-between text-xs text-gray-600 shadow-2xs">
                      <span className="font-medium text-gray-700 flex items-center space-x-1.5">
                        <Cpu className="w-3.5 h-3.5 text-blue-600" />
                        <span>{t('hint_target_complexity')}</span>
                      </span>
                      <span className="font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                        {geminiHint.complexity || geminiHint.targetComplexity}
                      </span>
                    </div>
                  )}

                </div>

              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};

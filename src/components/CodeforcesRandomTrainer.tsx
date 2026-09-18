'use client';

import React, { useState, useEffect } from 'react';
import { 
  CFRandomProblemItem, 
  CFGeminiHint, 
  getRandomCFProblem, 
  getGeminiHintWithTimeout 
} from '@/lib/codeforcesClient';
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
  BookOpen, 
  HelpCircle 
} from 'lucide-react';

const COMMON_CF_TAGS = [
  'Tất cả',
  'dp',
  'greedy',
  'data structures',
  'math',
  'graphs',
  'constructive algorithms',
  'brute force',
  'strings',
  'number theory',
  'trees',
  'binary search',
  'combinatorics',
  'geometry',
  'two pointers',
  'dfs and similar',
  'bitmasks',
  'shortest paths',
  'games',
  'matrices',
  'hashing',
  'interactive',
  'flows',
  'divide and conquer',
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
  const [selectedTag, setSelectedTag] = useState<string>('Tất cả');
  const [selectedRating, setSelectedRating] = useState<number>(recommendedRating || 1200);
  
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

  // 1. Random bài tập Codeforces tức thì (dưới 300ms, không bao giờ bị treo!)
  const handleRandomize = async () => {
    setLoadingRandom(true);
    setRandomError(null);
    setGeminiHint(null);
    setHintError(null);

    try {
      const problem = await getRandomCFProblem(
        selectedTag,
        selectedRating,
        solvedProblemIds
      );
      setRandomProblem(problem);

      // Nếu có API key, tự động yêu cầu gợi ý từ Gemini AI luôn
      if (geminiApiKey.trim()) {
        fetchHint(problem, geminiApiKey.trim());
      }
    } catch (err: any) {
      setRandomError(err.message || 'Lỗi khi chọn bài tập.');
    } finally {
      setLoadingRandom(false);
    }
  };

  // 2. Lấy gợi ý tư duy từ Gemini AI với timeout 8 giây
  const fetchHint = async (prob: CFRandomProblemItem, key: string) => {
    setLoadingHint(true);
    setHintError(null);

    try {
      const hint = await getGeminiHintWithTimeout(key, prob);
      setGeminiHint(hint);
    } catch (err: any) {
      setHintError(err.message || 'Không thể lấy gợi ý AI.');
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
    <div className="bg-white border border-[#e8e8e8] rounded shadow-sm overflow-hidden">
      {/* Header phong cách LibreOJ */}
      <div className="bg-[#fafafa] px-4 py-3 border-b border-[#e8e8e8] flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center space-x-2">
          <Dices className="w-4 h-4 text-blue-600" />
          <h2 className="text-sm font-semibold text-gray-800 tracking-tight flex items-center space-x-2">
            <span>Random bài tập Codeforces & Định hướng tư duy</span>
            <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded font-mono text-[10px] font-bold">
              Gemini AI
            </span>
          </h2>
        </div>
        <span className="text-xs text-gray-500 font-mono">
          Tài khoản: <strong className="text-gray-800">{handle}</strong>
        </span>
      </div>

      <div className="p-4 sm:p-5 space-y-5">

        {/* Khung cấu hình Gemini API Key */}
        <div className="p-3 bg-[#fbfbfc] border border-gray-200 rounded text-xs space-y-2">
          <div className="flex items-center justify-between flex-wrap gap-1">
            <div className="flex items-center space-x-1.5 text-gray-800 font-medium">
              <Key className="w-3.5 h-3.5 text-blue-600" />
              <span>Gemini API Key (Tùy chọn: Dùng để nhận định hướng tư duy giải thuật)</span>
            </div>
            {keySaved ? (
              <span className="inline-flex items-center space-x-1 text-[11px] text-emerald-600 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Đã lưu API Key</span>
              </span>
            ) : (
              <span className="text-[11px] text-gray-500">
                (Không bắt buộc, có thể random bài ngay không cần key)
              </span>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <input
                type={showKey ? 'text' : 'password'}
                value={geminiApiKey}
                onChange={(e) => handleSaveApiKey(e.target.value)}
                placeholder="Dán API Key Google AI Studio của bạn (ví dụ: AIzaSy...)"
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
              Lấy API Key ↗
            </a>
          </div>
        </div>
        
        {/* Hàng điều khiển Chọn Tag, Rating và Nút Random */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 p-3.5 bg-[#fafbfc] border border-gray-200 rounded">
          
          {/* Chọn Tag */}
          <div className="md:col-span-4">
            <label className="block text-[11px] font-medium text-gray-700 mb-1">
              1. Chủ đề thuật toán (Tag)
            </label>
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="w-full text-xs bg-white border border-gray-300 rounded px-2.5 py-1.5 focus:outline-none focus:border-blue-500"
            >
              {COMMON_CF_TAGS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Chọn Rating */}
          <div className="md:col-span-4">
            <div className="flex items-center justify-between mb-1">
              <label className="text-[11px] font-medium text-gray-700">
                2. Độ khó (Rating)
              </label>
              <button
                type="button"
                onClick={() => setSelectedRating(recommendedRating)}
                className="text-[10px] text-blue-600 hover:underline font-medium"
              >
                Dùng đề xuất ({recommendedRating})
              </button>
            </div>
            <select
              value={selectedRating}
              onChange={(e) => setSelectedRating(Number(e.target.value))}
              className="w-full text-xs bg-white border border-gray-300 rounded px-2.5 py-1.5 focus:outline-none focus:border-blue-500 font-mono"
            >
              {RATING_OPTIONS.map((r) => (
                <option key={r} value={r}>
                  {r} {r === recommendedRating ? '★ (Đề xuất)' : ''}
                </option>
              ))}
            </select>
          </div>

          {/* Nút bấm Random (Cực nhanh, tức thì) */}
          <div className="md:col-span-4 flex items-end">
            <button
              onClick={handleRandomize}
              disabled={loadingRandom}
              className="w-full py-1.5 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-medium transition-colors flex items-center justify-center space-x-1.5 disabled:opacity-50 shadow-sm"
            >
              {loadingRandom ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Đang chọn bài...</span>
                </>
              ) : (
                <>
                  <Dices className="w-3.5 h-3.5" />
                  <span>Random bài chưa AC</span>
                </>
              )}
            </button>
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
                    Rating {randomProblem.rating}
                  </span>
                  {randomProblem.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-gray-50 border border-gray-200 rounded text-[11px] text-gray-600 font-mono"
                    >
                      {t}
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
                  <span>Đổi bài khác</span>
                </button>

                <a
                  href={randomProblem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-medium transition-colors shadow-sm"
                >
                  <span>Mở trên Codeforces</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Nút kích hoạt Gemini nếu chưa có gợi ý */}
            {!geminiHint && !loadingHint && (
              <div className="p-3 bg-indigo-50/60 border border-indigo-100 rounded flex items-center justify-between flex-wrap gap-2 text-xs">
                <span className="text-indigo-900">
                  Cần gợi ý tư duy cho bài này mà không spoil code?
                </span>
                <button
                  onClick={() => {
                    if (!geminiApiKey.trim()) {
                      setHintError('Vui lòng nhập Gemini API Key ở ô cấu hình phía trên.');
                      return;
                    }
                    fetchHint(randomProblem, geminiApiKey.trim());
                  }}
                  className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-xs font-medium transition-colors flex items-center space-x-1 shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Nhận gợi ý từ Gemini AI</span>
                </button>
              </div>
            )}

            {/* Trạng thái đang tải gợi ý */}
            {loadingHint && (
              <div className="p-3 bg-blue-50 border border-blue-200 rounded text-xs text-blue-700 flex items-center space-x-2">
                <Loader2 className="w-4 h-4 animate-spin text-blue-600 shrink-0" />
                <span>Gemini AI đang phân tích bài toán và tạo gợi ý sư phạm...</span>
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
                      Hãy nhập Gemini API Key ở ô cấu hình phía trên để nhận hướng dẫn tư duy.
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Tóm tắt đề bài ngắn gọn */}
            {geminiHint?.briefSummary && (
              <div className="p-3 bg-gray-50/80 rounded border border-gray-200 text-xs text-gray-700 leading-relaxed">
                <span className="font-semibold text-gray-900 block mb-1">📖 Tóm tắt đề bài:</span>
                {geminiHint.briefSummary}
              </div>
            )}

            {/* Khung Định hướng tư duy từ Gemini AI */}
            {geminiHint && (
              <div className="p-4 bg-blue-50/40 border border-blue-200 rounded-md space-y-3">
                <div className="flex items-center space-x-1.5 text-xs font-semibold text-blue-900 pb-2 border-b border-blue-100">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>Định hướng tư duy sư phạm từ Gemini AI (Không spoil code)</span>
                </div>

                {/* 1. Quan sát then chốt */}
                {geminiHint.keyObservation && (
                  <div className="text-xs space-y-1">
                    <span className="font-bold text-gray-900 text-[11px] uppercase tracking-wide flex items-center space-x-1">
                      <span>💡 Quan sát then chốt (Key Observation):</span>
                    </span>
                    <p className="text-gray-700 leading-relaxed pl-3 border-l-2 border-amber-400 whitespace-pre-line">
                      {geminiHint.keyObservation}
                    </p>
                  </div>
                )}

                {/* 2. Hướng tiếp cận từng bước */}
                {geminiHint.stepByStepHint && (
                  <div className="text-xs space-y-1">
                    <span className="font-bold text-gray-900 text-[11px] uppercase tracking-wide flex items-center space-x-1">
                      <span>🧭 Hướng tiếp cận từng bước:</span>
                    </span>
                    <div className="text-gray-700 leading-relaxed whitespace-pre-line pl-3 border-l-2 border-blue-400">
                      {geminiHint.stepByStepHint}
                    </div>
                  </div>
                )}

                {/* 3. Trường hợp biên & Bẫy test */}
                {geminiHint.edgeCases && (
                  <div className="text-xs space-y-1">
                    <span className="font-bold text-gray-900 text-[11px] uppercase tracking-wide flex items-center space-x-1">
                      <span>⚠️ Lưu ý trường hợp biên (Edge cases):</span>
                    </span>
                    <p className="text-gray-700 leading-relaxed pl-3 border-l-2 border-rose-400">
                      {geminiHint.edgeCases}
                    </p>
                  </div>
                )}

                {/* 4. Độ phức tạp mục tiêu */}
                {geminiHint.targetComplexity && (
                  <div className="pt-2 border-t border-blue-100/70 flex items-center justify-between text-xs text-gray-600">
                    <span className="font-medium text-gray-700">⚡ Độ phức tạp mục tiêu:</span>
                    <span className="font-mono font-semibold text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200">
                      {geminiHint.targetComplexity}
                    </span>
                  </div>
                )}

              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};

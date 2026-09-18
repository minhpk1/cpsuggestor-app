'use client';

import React, { useState } from 'react';
import { parsePastedOjuzSubmissions } from '@/lib/multiPlatformCrawler';
import { UserSubmission } from '@/types';
import { X, UploadCloud, Terminal, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

interface ImportSubmissionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImportSubmissions: (submissions: UserSubmission[]) => void;
  onSyncCodeforces: (cfHandle: string) => void;
  currentCfHandle?: string;
}

export const ImportSubmissionsModal: React.FC<ImportSubmissionsModalProps> = ({
  isOpen,
  onClose,
  onImportSubmissions,
  onSyncCodeforces,
  currentCfHandle = '',
}) => {
  const [tab, setTab] = useState<'codeforces' | 'paste'>('codeforces');
  const [cfInput, setCfInput] = useState(currentCfHandle);
  const [pastedText, setPastedText] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSyncCf = () => {
    if (!cfInput.trim()) {
      setError('Vui lòng nhập handle Codeforces.');
      return;
    }
    setError(null);
    onSyncCodeforces(cfInput.trim());
    onClose();
  };

  const handleParsePaste = () => {
    if (!pastedText.trim()) {
      setError('Vui lòng dán nội dung từ trang Submissions.');
      return;
    }

    try {
      const parsed = parsePastedOjuzSubmissions(pastedText);
      if (parsed.length === 0) {
        setError('Không tìm thấy bản ghi submission nào trong đoạn văn bản bạn dán. Hãy copy bảng hoặc mã nguồn HTML trang oj.uz/submissions.');
        return;
      }
      onImportSubmissions(parsed);
      setSuccessMsg(`Đã nhập thành công ${parsed.length} bài nộp thật!`);
      setTimeout(() => {
        onClose();
      }, 1000);
    } catch (e: any) {
      setError('Lỗi khi bóc tách: ' + e.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden transition-all">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <UploadCloud className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">
              Đồng bộ Lịch sử Nộp bài Thật (100% Accurate)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 text-xs font-semibold">
          <button
            onClick={() => { setTab('codeforces'); setError(null); }}
            className={`flex-1 py-2.5 text-center border-b-2 transition-colors ${
              tab === 'codeforces'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Cách 1: Đồng bộ qua Codeforces (Khuyên dùng)
          </button>
          <button
            onClick={() => { setTab('paste'); setError(null); }}
            className={`flex-1 py-2.5 text-center border-b-2 transition-colors ${
              tab === 'paste'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Cách 2: Dán trực tiếp từ oj.uz
          </button>
        </div>

        {/* Body */}
        <div className="p-5 text-xs">
          {error && (
            <div className="mb-4 p-3 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {successMsg && (
            <div className="mb-4 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {tab === 'codeforces' ? (
            <div className="space-y-4">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Codeforces cung cấp API mở chính thức chứa <strong>toàn bộ submission chuẩn xác đến từng giây</strong>. Bạn chỉ cần nhập handle Codeforces của mình, hệ thống sẽ tự động lấy toàn bộ lượt nộp để vẽ Activity Heatmap chuẩn 100%!
              </p>
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Handle Codeforces:
                </label>
                <input
                  type="text"
                  placeholder="Ví dụ: tourist, Benq, hoang_long..."
                  value={cfInput}
                  onChange={(e) => setCfInput(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 font-mono"
                />
              </div>
              <button
                onClick={handleSyncCf}
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-colors shadow-sm shadow-blue-500/20"
              >
                Đồng bộ ngay từ Codeforces
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Do oj.uz có tường lửa Cloudflare chặn máy chủ tự động cào, bạn có thể tự mở trang{' '}
                <a
                  href="https://oj.uz/submissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 underline font-semibold"
                >
                  oj.uz/submissions
                </a>
                , bôi đen copy bảng hoặc copy mã nguồn HTML rồi dán vào đây:
              </p>
              <textarea
                rows={5}
                placeholder="Dán mã nguồn HTML hoặc văn bản bảng nộp bài oj.uz vào đây..."
                value={pastedText}
                onChange={(e) => setPastedText(e.target.value)}
                className="w-full p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none font-mono text-[11px]"
              />
              <button
                onClick={handleParsePaste}
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold transition-colors shadow-sm shadow-emerald-500/20"
              >
                Trích xuất & Lưu vào Heatmap
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

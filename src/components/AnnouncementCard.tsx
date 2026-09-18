'use client';

import React from 'react';
import { Megaphone } from 'lucide-react';

interface AnnouncementCardProps {
  handle: string;
  totalSolved: number;
  totalUnsolved: number;
  topStrength?: string;
  topWeakness?: string;
}

export const AnnouncementCard: React.FC<AnnouncementCardProps> = ({
  handle,
  totalSolved,
  totalUnsolved,
  topStrength,
  topWeakness,
}) => {
  const items = [
    {
      title: `[Tài khoản oj.uz] ${handle}: Đã giải quyết ${totalSolved} bài, còn ${totalUnsolved} bài dở dang trên hệ thống.`,
      date: 'Hôm nay',
      highlight: true,
    },
    {
      title: topStrength
        ? `[Phân tích Điểm mạnh] Bạn đang thể hiện phong độ xuất sắc ở mảng "${topStrength}".`
        : '[Phân tích Điểm mạnh] Tiếp tục duy trì giải các bài IOI / APIO mức độ cao.',
      date: '2026-09-18',
    },
    {
      title: topWeakness
        ? `[Khuyến nghị Luyện tập] Nên ưu tiên bù đắp mảng "${topWeakness}" qua các bài mức Silver/Gold.`
        : '[Khuyến nghị Luyện tập] Khắc phục các bài nộp chưa full điểm trong danh sách bài dở dang.',
      date: '2026-09-15',
    },
    {
      title: 'Kho lưu trữ bài tập oj.uz đã cập nhật đầy đủ các đề thi APIO, IZhO, CEOI, BOI, IOI, JOI, COCI.',
      date: '2026-09-01',
    },
  ];

  return (
    <div className="loj-card">
      <div className="loj-card-header">
        <div className="flex items-center space-x-2">
          <Megaphone className="w-4 h-4 text-gray-500" />
          <span>Announcement</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-gray-200 text-gray-500 bg-white font-medium">
              <th className="py-2.5 px-4">Title</th>
              <th className="py-2.5 px-4 w-28 text-right">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {items.map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="py-2.5 px-4">
                  <span className={item.highlight ? 'font-medium text-gray-900' : 'loj-link cursor-pointer'}>
                    {item.title}
                  </span>
                </td>
                <td className="py-2.5 px-4 text-right text-gray-400 font-mono">
                  {item.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

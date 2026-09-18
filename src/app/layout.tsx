import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'oj.uz Insight & Recommender — LibreOJ Style',
  description:
    'Phân tích tài khoản oj.uz, chỉ ra điểm mạnh yếu theo chủ đề và gợi ý bài tập Olympic Tin học (OI/CP) tiếp theo kèm Activity Heatmap.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="dark">
      <body className="antialiased min-h-screen selection:bg-blue-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}

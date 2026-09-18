import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CPSuggestor — OJ.uz Checklist & Codeforces AI Recommender',
  description:
    'Nền tảng hỗ trợ học sinh Olympic Tin học (OI/CP): Checklist 12 kỳ thi OJ.uz và Huấn luyện viên AI phân tích Rating Codeforces.',
};

import { LanguageProvider } from '@/context/LanguageContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="dark">
      <body className="antialiased min-h-screen selection:bg-blue-500 selection:text-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

# Kế hoạch phát triển: Hệ thống Phân tích & Gợi ý Bài tập oj.uz (oj.uz CP Tracker & Recommender)

Dự án này là một web application có thể deploy trực tiếp lên **Vercel**, phục vụ cộng đồng học sinh/sinh viên luyện tập Olympic Tin học (OI) và Competitive Programming (CP) trên nền tảng **oj.uz**.

---

## 1. Mục tiêu cốt lõi

1. **Phân tích tài khoản oj.uz**:
   - Nhập `username` tài khoản oj.uz.
   - Cào (crawl) và phân tích tự động danh sách:
     - **Solved problems** (các bài đã giải quyết trọn vẹn 100 điểm).
     - **Submitted but unsolved problems** (các bài đang dở dang / ăn điểm partial subtask).
2. **Đánh giá Điểm mạnh & Điểm yếu theo Chủ đề (Topic Mastery Analysis)**:
   - Dựa trên cơ sở dữ liệu các bài thi kinh điển (IOI, APIO, CEOI, JOI, BOI, COCI, BalkanOI...) được phân loại theo các chủ đề thuật toán:
     - *Dynamic Programming (DP)*: Tree DP, Bitmask, CHT/Divide & Conquer, Knapsack, Range DP.
     - *Graph & Tree*: Shortest Path, DSU, LCA, Flow/Matching, SCC/Tarjan, 2-SAT.
     - *Data Structures*: Segment Tree, Fenwick/BIT, Treap/Splay, Trie, Persistent DS.
     - *Math & Number Theory*: Combinatorics, Modular Arithmetic, Matrix Exponentiation.
     - *Greedy & Two Pointers / Binary Search*: Search on Answer, Ternary Search.
     - *Geometry & String*: Convex Hull, KMP, Aho-Corasick, Suffix Automaton/Array.
     - *Interactive & Constructive*: Bài toán tương tác / dựng nghiệm đặc trưng của IOI/JOI.
   - Thống kê tỷ lệ hoàn thành (%) và hiển thị trực quan qua **Biểu đồ Radar (Mạng nhện)** và **Biểu đồ Cột (Bar Chart)**.
   - Kết luận rõ ràng:
     - 🔥 **Điểm mạnh (Strengths)**: Các mảng kiến thức người dùng đã giải được nhiều bài cấp độ cao.
     - ⚠️ **Điểm yếu (Weaknesses)**: Các mảng còn hổng, ít giải bài hoặc có nhiều bài nộp nhưng chưa full điểm.
3. **Gợi ý bài tập CP/OI tiếp theo (Smart Recommendation Engine)**:
   - **Chế độ 1: Khắc phục điểm yếu (Targeted Improvement)**: Gợi ý các bài có độ khó vừa phải (Silver/Gold) ở những chủ đề còn yếu.
   - **Chế độ 2: Thử thách nâng cao (Push Your Limits)**: Gợi ý các bài khó (Gold/Platinum/IOI) ở chủ đề sở trường để bứt phá.
   - **Chế độ 3: Phục thù bài dở dang (Unsolved Revamp)**: Danh sách bài bạn từng nộp nhưng chưa đạt 100đ, kèm gợi ý hướng giải subtask.
   - Kèm link trực tiếp sang `https://oj.uz/problem/view/{id}`.
4. **Theo dõi tần suất làm bài theo ngày (Daily Submission Tracker & Heatmap)**:
   - Thu thập lịch sử nộp bài để tạo **Activity Heatmap (giống GitHub / LeetCode calendar)**.
   - Đếm số lượng submission theo ngày, chuỗi ngày làm bài liên tục (Current Streak / Longest Streak), tổng lượt nộp.
5. **Dễ dàng Deploy lên Vercel**:
   - Sử dụng **Next.js (App Router) + TypeScript + Tailwind CSS**.
   - Hỗ trợ serverless API fetching và cơ chế cache/fallback trên client-side để đảm bảo hoạt động trơn tru không sợ bị giới hạn IP.

---

## 2. Kiến trúc Ứng dụng

```
auziuzet/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── analyze/route.ts      # Serverless API lấy dữ liệu từ oj.uz
│   │   │   └── submissions/route.ts  # API lấy danh sách submission & timestamps
│   │   ├── layout.tsx                # Layout chung (Dark/Light mode, Header, Footer)
│   │   ├── page.tsx                  # Trang chủ: Nhập username, Dashboard tổng quan
│   │   ├── globals.css               # Tailwind CSS & custom styles
│   │   └── recommendations/page.tsx  # Trang chi tiết gợi ý bài tập & lộ trình
│   ├── components/
│   │   ├── UserSearch.tsx            # Ô nhập username oj.uz kèm lịch sử tìm kiếm
│   │   ├── TopicRadarChart.tsx       # Biểu đồ mạng nhện đánh giá điểm mạnh/yếu
│   │   ├── StrengthsWeaknesses.tsx   # Thẻ tóm tắt thế mạnh & lỗ hổng kiến thức
│   │   ├── ProblemRecommendations.tsx# Bộ gợi ý bài tập thông minh kèm bộ lọc
│   │   ├── SubmissionHeatmap.tsx     # Lịch nộp bài theo ngày (GitHub-style Heatmap)
│   │   ├── DailyStreakCard.tsx       # Thống kê Streak, tổng bài AC, số bài hôm nay
│   │   └── UnsolvedProblemsList.tsx  # Danh sách các bài làm dở dang cần phục thù
│   ├── data/
│   │   └── ojuz_problemset.json      # Dataset phân loại chủ đề & độ khó các bài oj.uz
│   ├── lib/
│   │   ├── ojuzCrawler.ts            # Logic phân tích HTML từ oj.uz profile & submissions
│   │   ├── recommendationEngine.ts   # Thuật toán tính toán điểm mạnh/yếu & gợi ý bài
│   │   └── types.ts                  # Định nghĩa TypeScript Types
├── public/                           # Assets, icon
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vercel.json                       # Cấu hình tối ưu cho Vercel
```

---

## 3. Kế hoạch triển khai từng bước

- **Bước 1**: Khởi tạo Project Next.js + TypeScript + Tailwind CSS + Lucide Icons + Recharts.
- **Bước 2**: Xây dựng cơ sở dữ liệu `ojuz_problemset.json` với phân loại Topic/Difficulty chuẩn mực cho hàng trăm bài trên oj.uz.
- **Bước 3**: Viết engine cào dữ liệu từ oj.uz (profile, solved, unsolved, submissions, timestamps).
- **Bước 4**: Xây dựng thuật toán tính toán Topic Mastery, xác định Điểm mạnh / Điểm yếu và gợi ý bài tập theo level.
- **Bước 5**: Thiết kế giao diện Dashboard: Activity Heatmap (GitHub style), Radar Chart kỹ năng, bộ lọc đề bài.
- **Bước 6**: Tối ưu hóa cấu hình Vercel (`vercel.json`) và viết tài liệu hướng dẫn deploy 1-click.

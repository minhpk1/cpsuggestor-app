# LibreOJ Theme - OJ.uz & Codeforces CP Recommender + Gemini AI

Ứng dụng web Next.js 14 chuyên sâu dành cho cộng đồng Lập trình thi đấu (Competitive Programming) & Olympic Tin học, hỗ trợ cả 2 nền tảng lớn: **OJ.uz** và **Codeforces**.

Giao diện được thiết kế theo phong cách tối giản và chuẩn mực của **LibreOJ (`loj.ac`)**, không màu mè, sử dụng font chữ hệ thống thanh lịch, bố cục 2 cột rõ ràng.

---

## 1. Phân hệ 1: Olympic Tin học (OJ.uz Checklist & Random bài theo kỳ thi)

- **Đóng vai trò OI Checklist thuần túy**:
  - Không hiển thị thẻ Tag và không gán độ khó (do oj.uz không judge cụ thể độ khó từng bài).
  - Bao phủ toàn bộ **1.117 bài tập chính quy đầy đủ 100% không thiếu bài nào** từ 12 kỳ thi danh giá trên `oj.uz`:
    - **APIO**: 46 bài
    - **IZhO**: 47 bài
    - **CEOI**: 109 bài
    - **BOI**: 104 bài
    - **IOI**: 154 bài
    - **JOI / JOISC**: 254 bài
    - **COCI**: 248 bài
    - **BalkanOI**: 9 bài
    - **Info1Cup**: 26 bài
    - **LMIO**: 17 bài
    - **NOI**: 79 bài
    - **RMI**: 24 bài
  - Trạng thái trực quan: Đã đạt 100 điểm (AC), Đang làm dở (điểm thành phần), Chưa làm.
  - Thống kê tiến độ hoàn thành theo từng kỳ thi (ví dụ: APIO 12/46 AC, CEOI 18/109 AC...).
- **🎲 Random bài chưa AC theo tên kỳ thi**:
  - Tùy chọn bất kỳ kỳ thi nào trong 12 kỳ thi hoặc "Tất cả kỳ thi".
  - Tự động lọc ra những bài bạn chưa AC để bốc ngẫu nhiên 1 bài luyện tập tức thì.
- **Theo dõi tiến độ hàng ngày (Heatmap)**: Bản đồ nhiệt 52 tuần, thống kê chuỗi ngày liên tục (Streaks), hỗ trợ nút **"Dán bảng submissions oj.uz"** để trích xuất chuẩn xác từng mốc thời gian ISO (`data-timestamp-iso`).

---

## 2. Phân hệ 2: Codeforces & Gemini AI

- **Sửa triệt để hiển thị Avatar người dùng**:
  - Thêm `referrerPolicy="no-referrer"` để vượt qua cơ chế Hotlink Protection (403 Forbidden) của máy chủ ảnh `userpic.codeforces.org`.
  - Tự động chuẩn hóa link sang `https:`.
  - Fallback thông minh sang Avatar tròn viền màu Rank chính thức kèm chữ cái đầu của Handle nếu tài khoản chưa đặt ảnh đại diện.

- **Thống kê toàn diện bài đã AC**: Đọc lịch sử nộp bài của tài khoản Codeforces, đếm tổng số bài AC duy nhất.
- **Thống kê dạng bài (Tags)**: Bảng thống kê số bài đã giải cho từng tag (dp, greedy, math, data structures, graphs, strings, constructive algorithms...), phân loại thế mạnh và mảng cần cải thiện.
- **Biểu đồ cột Rating các bài giải được (800 $\rightarrow$ 2400+)**:
  - Trực quan hóa số lượng bài bạn đã giải ở từng nấc rating.
  - Màu sắc cột tương ứng với các bậc Rank trên Codeforces (Newbie, Pupil, Specialist, Expert, CM, Master, Grandmaster).
- **Đề xuất Rating luyện tập tối ưu (Recommended Target Rating)**:
  - Thuật toán tự động tính toán vùng phát triển năng lực tối ưu (Sweet Spot) dựa trên rating thi đấu và phân vị 75% của các bài đã giải.
- **🎲 Random bài tập chưa AC & Định hướng tư duy từ Gemini 3.6 Flash**:
  - **100% Client-Side - Không cần Backend**: Bạn chỉ cần nhập **Gemini API Key** (lấy miễn phí từ Google AI Studio), trình duyệt sẽ gọi trực tiếp mô hình **Gemini 3.6 Flash** (`gemini-3.6-flash`) mới nhất để chọn bài và đưa ra lời khuyên.
  - Tùy chọn **Tag** (chủ đề mong muốn) và **Rating** (hoặc dùng ngay rating đề xuất).
  - Mô hình **Gemini 3.6 Flash** đóng vai Huấn luyện viên CP:
    - Chọn ngẫu nhiên bài toán thực tế có thật trên Codeforces kèm link trực tiếp.
    - **Tóm tắt đề bài ngắn gọn** bằng tiếng Việt.
    - **Quan sát then chốt (Key Observation)**: Tính chất toán học, tính đơn điệu, bất biến.
    - **Hướng tiếp cận từng bước (Step-by-step guidance)** (Tuyệt đối không spoil code).
    - **Lưu ý bẫy thường gặp & Trường hợp biên (Edge cases)**.
    - **Độ phức tạp mục tiêu (Target Complexity)**: $O(N)$, $O(N \log N)$ cần đạt để AC.

---

## 3. Hướng dẫn Chạy trên máy Local

```bash
# Cài đặt thư viện
npm install

# Chạy môi trường phát triển (Dev)
npm run dev

# Hoặc build và chạy Production
npm run build
npm run start
```
Mở trình duyệt truy cập: [http://localhost:3000](http://localhost:3000)

---

## 4. Hướng dẫn Triển khai lên Vercel (Miễn phí)

Dự án hoàn toàn tự chủ, không cần cơ sở dữ liệu và hoạt động trơn tru trên Vercel:

1. Đẩy mã nguồn lên GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: LibreOJ UI with OJ.uz & Codeforces Gemini AI trainer"
   git branch -M main
   git remote add origin <URL_REPO_GITHUB_CUA_BAN>
   git push -u origin main
   ```
2. Truy cập [Vercel.com](https://vercel.com) $\rightarrow$ Chọn **Add New Project** $\rightarrow$ Chọn repository vừa tạo.
3. Bấm **Deploy**. Vercel sẽ tự động build và cung cấp link trang web hoạt động 24/7.
4. Mở website và nhập Gemini API Key của bạn để bắt đầu luyện tập!

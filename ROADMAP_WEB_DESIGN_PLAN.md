# KẾ HOẠCH THIẾT KẾ GIAO DIỆN WEB CHO ROADMAP THUẬT TOÁN (28 CHỦ ĐỀ & 280 BÀI TẬP)
> **Định hướng**: Phong cách Tối giản Hiện đại (Minimalist Engineering), Không Emoji, Tập trung Học thuật & Hiển thị Tiến độ AC Tinh tế.

---

## 1. NGHIÊN CỨU PHONG CÁCH CỦA CÁC TRANG WEB ROADMAP HỌNG ĐẦU

Sau khi phân tích sâu các website luyện tập và tài liệu hàng đầu như **NeetCode 150**, **USACO Guide**, **CSES**, **roadmap.sh**, và phong cách tài liệu chuẩn mực của **Linear / Stripe**:

| Tiêu chí | roadmap.sh | NeetCode 150 | CSES Problem Set | USACO Guide | Phong cách Đề xuất cho Website |
|---|---|---|---|---|---|
| **Hình thức** | Biểu đồ cây phức tạp | Dạng bảng phân loại (Accordion) | Danh sách thuần túy | Giáo trình chia Division | **Sidebar điều hướng + Canvas bảng học tập phẳng** |
| **Độ tối giản** | Nhiều màu sắc, icon | Khá tối giản, nền tối | Tối giản tuyệt đối | Trung bình (nhiều text) | **Tối giản kỹ thuật (No emoji, 1px border)** |
| **Theo dõi AC** | Checkmark thô | Checkbox + Bộ đếm | Tick xanh | Lưu tiến độ tài khoản | **Thước đo 10 ô phân đoạn (10-Dash Matrix) + Tự động đồng bộ CF** |
| **Độ tập trung** | Dễ phân tâm | Cao | Rất cao | Cao | **Tối đa hóa trải nghiệm giải bài không xao nhãng** |

---

## 2. NGHIÊN CỨU & LỰA CHỌN FONT CHỮ (TYPOGRAPHY)

Giao diện học thuật CP đòi hỏi:
- Tiếng Việt hiển thị sắc nét, không lỗi chân chữ, không lệch dấu thanh.
- Chỉ số toán học ($O(N \log N)$, $O(V + E)$) và số liệu tiến độ phải hiển thị rõ ràng, không giật màn hình khi số thay đổi.

### 2 Bộ Font Khuyến Nghị Hàng Đầu:
1. **Bộ Đề Xuất Số 1 (Khuyên Dùng): Inter + JetBrains Mono**
   - **Font nội dung & Tiêu đề**: `Inter` (Font tiêu chuẩn quốc tế số 1 cho giao diện hiện đại, đã có sẵn trong dự án).
   - **Font mã nguồn, Rating, Phức tạp & Tiến độ**: `JetBrains Mono` (Hỗ trợ phân biệt số 0 gạch chéo và chữ O, số có cùng độ rộng `tabular-nums`).
2. **Bộ Phong Cách Vercel: Geist Sans + Geist Mono**
   - Rất sắc sảo, khoảng cách chữ hẹp, đậm chất lập trình viên thế hệ mới.

---

## 3. PHÂN BỔ BỐ CỤC KHÔNG GIAN (LAYOUT ARCHITECTURE)

Thiết kế theo mô hình **Master-Detail 2 cột (Sidebar Cố định + Màn hình Học tập Tập trung)**:

```
+---------------------------------------------------------------------------------------------------+
| TOP NAVIGATION BAR                                                                                |
| CPSuggestor  |  [OJ.uz Checklist]   [Codeforces Trainer]   [Roadmap 28]  |  CF Handle: [tourist]  |
+---------------------------------------------------------------------------------------------------+
| SIDEBAR ĐIỀU HƯỚNG (Sticky 280px)      | MÀN HÌNH CHỦ ĐỀ CHÍNH (Canvas Max-width: 960px)          |
|                                        |                                                          |
| [ Bộ lọc: Tất cả | Chưa làm | Đã AC ]  | [PHASE 01: FOUNDATION (< 1200 - 1399)]                   |
|                                        | Tiến độ Phase: [■■■■■■■■■■■■■□□□□□□□] 38 / 50 (76%)      |
| v Phase 1: Foundation (38/50)          |----------------------------------------------------------|
|   01. Prefix Sum & Diff       [10/10]  | TOPIC 01                                                 |
|   02. Two Pointers & Window   [08/10]  | MẢNG CỘNG DỒN (PREFIX SUMS) & MẢNG HIỆU                  |
|   03. Binary Search on Answer [07/10]  | Phân hạng: Newbie (800 - 1100)       Tiến độ: [ 10 / 10 ]|
|   04. Sieve & Number Theory   [06/10]  | Độ phức tạp: O(N) tiền xử lý, O(1) truy vấn              |
|   05. Greedy & Sorting        [07/10]  |                                                          |
|                                        | Tóm tắt bản chất cốt lõi:                                |
| > Phase 2: Intermediate       (22/50)  | • Prefix Sum tính tổng đoạn [L, R] trong O(1): P[R]-P[L-1|
| > Phase 3: Advanced           (15/60)  | • Difference Array cộng V vào [L, R] trong O(1) qua mảng D|
| > Phase 4: High-End Core      (08/60)  |                                                          |
| > Phase 5: Grandmaster        (02/60)  | Tài liệu tham khảo uy tín:                               |
|                                        | - [Prefix Sums and Difference Arrays (CF Blog)]          |
|----------------------------------------|                                                          |
| TỔNG TIẾN ĐỘ TOÀN LỘ TRÌNH:            | Bảng 10 bài tập rèn luyện phân cấp:                      |
| 85 / 280 Hoàn thành (30.4%)            | [x] CF 313B - Ilya and Queries      (1000) [Key Insight] |
|                                        | [x] CF 433B - Kuriyama Mirai Stones (1200) [Key Insight] |
|                                        | [ ] CF 816B - Karen and Coffee      (1400) [Key Insight] |
+---------------------------------------------------------------------------------------------------+
```

---

## 4. GIẢI PHÁP HIỂN THỊ SỐ BÀI ĐÃ AC THUẬN MẮT VÀ TINH TẾ NHẤT

Để giao diện không bị cảm giác "game hóa" hay rối rắm với các thanh màu lòe loẹt, chúng tôi đề xuất kết hợp **3 tầng hiển thị**:

### Tầng 1: Cấp độ Từng Chủ đề (Topic Level) — Thước đo 10 Phân đoạn (Segmented 10-Dash Matrix)
Vì mỗi chủ đề đều có đúng **10 bài tập**, cách hiển thị 10 vạch phân đoạn là cách trực quan nhất:
```
01. Prefix Sums & Difference Array         [ ■ ■ ■ ■ ■ ■ ■ ⬚ ⬚ ⬚ ]  07 / 10
```
- **Kích thước mỗi ô**: Rộng $7\text{px}$, cao $3\text{px}$, bo góc nhẹ $1\text{px}$, khoảng cách giữa các ô là $2\text{px}$.
- **Màu sắc**:
  - Đã AC: Xanh lục bảo tinh tế (`bg-emerald-500` ở light mode, `bg-emerald-400` ở dark mode).
  - Chưa làm: Xám nhạt (`bg-slate-200 dark:bg-slate-800`).
- **Chỉ số số học**: `font-mono text-xs tabular-nums text-slate-500 font-medium` hiển thị `07 / 10`.
- **Ưu điểm vượt trội**: Người học chỉ cần liếc mắt trong 0.2 giây là nắm bắt ngay cấu trúc: bài nào đã xong, còn bao nhiêu bài chưa xong mà không cần tính toán số học.

### Tầng 2: Cấp độ Giai đoạn (Phase Level)
- Hiển thị đầu mỗi giai đoạn:
  ```
  PHASE 02: INTERMEDIATE (PUPIL ➔ SPECIALIST)
  Tiến độ: 22 / 50 bài hoàn thành (44%)
  [■■■■■■■■■□□□□□□□□□□□□□] (Thanh bar siêu mảnh 3px)
  ```

### Tầng 3: Cấp độ Toàn Lộ trình (Global Header Progress)
- Đặt gọn gàng trên thanh trạng thái: `85 / 280 Solved (30.4%)`.

---

## 5. CẤU TRÚC CHI TIẾT CỦA BẢNG BÀI TẬP (FLAT PROBLEM TABLE)

Mỗi hàng bài tập được thiết kế dạng bảng tối giản với các cột rõ ràng:

1. **Checkbox AC**: Ô vuông nhỏ có bo góc `rounded-[3px]`. Khi tích chọn, hàng bài tập chuyển màu chữ sang hơi mờ nhẹ (`text-slate-400`), tạo cảm giác đã chinh phục xong.
2. **Mã & Tên bài**: Phông chữ `Inter`, kích thước 13px, link mở trực tiếp sang Codeforces trong tab mới kèm icon `ExternalLink` siêu nhỏ khi hover.
3. **Rating Codeforces**: Dạng chip đơn sắc `font-mono text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300`.
4. **Nhận xét Sư phạm Then chốt (Key Insight)**:
   - Dòng văn bản cô đọng (1-2 câu) nêu thẳng vào bản chất: ý tưởng đưa về bài toán gốc, phương trình DP, hoặc tính chất bất biến toán học.
   - Có thể ẩn/hiện hoặc để mặc định hiển thị tùy chọn của người dùng.

---

## 6. TÍNH NĂNG THÔNG MINH BỔ TRỢ

1. **Tự động đồng bộ với Codeforces Handle**:
   - Khi người dùng đã nhập handle ở trang chủ (hoặc nhập vào ô trên Roadmap), hệ thống gọi trực tiếp API `codeforces.com/api/user.status?handle=...`.
   - Các bài nằm trong 280 bài mà tài khoản đó đã có verdict `OK` sẽ **tự động được tích xanh AC**!
2. **Lưu trữ Offline qua LocalStorage**:
   - Mọi tùy chọn tích thủ công, thu gọn chủ đề đều được lưu cục bộ trên trình duyệt.
3. **Bộ lọc trạng thái (Filter pills)**:
   - `Tất cả (280)`
   - `Chưa giải (Unsolved)`: Giúp người dùng ẩn đi những bài đã AC để tập trung cày các bài còn lại.
   - `Đã giải (Solved)`: Xem lại lịch sử các bài đã làm.
   - `Ô tìm kiếm`: Gõ nhanh tên thuật toán hoặc mã bài để nhảy ngay tới nội dung.

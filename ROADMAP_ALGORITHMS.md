# BẢN ĐỒ LỘ TRÌNH THUẬT TOÁN COMPETITIVE PROGRAMMING (NEWBIE ➔ GRANDMASTER)
> **Dành cho Luyện thi Codeforces & Đội tuyển Olympic Tin học Quốc tế (VNOI / IOI)**  
> Phân bậc chuẩn xác theo thực tế thi đấu Codeforces, đưa Tree DP & LCA vào nhóm trọng tâm của Expert, và bổ sung các vũ khí High-End tối thượng (HLD, Cây ảo, WQS BS, Parallel Binary Search, Centroid, Persistent SegTree, CHT...).

---

## 🗺️ BẢNG TỔNG QUAN PHÂN CẤP 5 GIAI ĐOẠN & 25+ THUẬT TOÁN

| Giai đoạn | Rating Codeforces | Danh mục thuật toán & Kỹ thuật |
|---|---|---|
| **Phase 1: Foundation (Newbie ➔ Pupil)** | `< 1200 - 1399` | 1. Mảng cộng dồn (Prefix Sum) & Mảng hiệu (Difference Array)<br>2. Hai con trỏ (Two Pointers) & Cửa sổ trượt (Sliding Window)<br>3. Tìm kiếm nhị phân & Chặt nhị phân kết quả<br>4. Sàng nguyên tố Eratosthenes, SPF & Số học cơ bản<br>5. Tham lam (Greedy) & Bất đẳng thức sắp xếp (Exchange Argument) |
| **Phase 2: Intermediate (Pupil ➔ Specialist)** | `1200 - 1599` | 6. Duyệt đồ thị DFS/BFS & Đồ thị trên ma trận lưới<br>7. Cấu trúc tập hợp rời rạc (DSU - Disjoint Set Union)<br>8. Quy hoạch động cơ bản (1D, 2D, Balo, LIS, LCS)<br>9. Sắp xếp Tô-pô & Đồ thị DAG<br>10. Đường đi ngắn nhất (Dijkstra, 0-1 BFS, Floyd-Warshall) |
| **Phase 3: Advanced (Specialist ➔ Expert)** | `1600 - 1899` | 11. **Tổ tiên chung gần nhất (LCA), Binary Lifting & Euler Tour**<br>12. **Quy hoạch động trên Cây cơ bản & Kỹ thuật Đổi gốc (Tree DP & Rerooting)**<br>13. Số học Modular & Tổ hợp nâng cao (Fermat, Lucas, Stars and Bars)<br>14. Quy hoạch động Bitmask & SOS DP<br>15. Cây Fenwick (BIT) & Segment Tree cơ bản (Point Update, Range Query)<br>16. Segment Tree cập nhật lười (Lazy Propagation) |
| **Phase 4: High-End Core (Candidate Master ➔ Master)** | `1900 - 2299` | 17. Xử lý chuỗi nâng cao (String Hashing, Z-Algorithm, KMP & Trie)<br>18. Thành phần liên thông mạnh (SCC) & Cầu / Khớp (Tarjan & 2-SAT)<br>19. Luồng cực đại Dinic & Cặp ghép cực đại (Max Flow & Bipartite Matching)<br>20. Cây phân đoạn bền vững (Persistent Segment Tree & Persistent Trie)<br>21. **Phân tách đường đi nặng - nhẹ trên cây (Heavy-Light Decomposition - HLD)**<br>22. **Tối ưu hóa Quy hoạch động: Bao lồi (Convex Hull Trick) & Cây Li Chao** |
| **Phase 5: Legendary & Grandmaster (Master ➔ GM / IGM)** | `2300 - 2600+` | 23. **Cây ảo (Virtual Tree / Auxiliary Tree)**<br>24. **Tìm kiếm nhị phân song song (Parallel Binary Search)**<br>25. **Tối ưu hóa WQS / Alien's Trick (Lambda Optimization)**<br>26. **Phân tách trọng tâm trên cây (Centroid Decomposition)**<br>27. **Biến đổi Fourier nhanh (Fast Fourier Transform - FFT / NTT)**<br>28. **Suffix Automaton (SAM - Máy tự động hậu tố) & Cây hậu tố** |

---

# CHI TIẾT TỪNG THUẬT TOÁN: BẢN CHẤT, BLOG CODEFORCES & BÀI TẬP PHÂN CẤP

---

## 1. MẢNG CỘNG DỒN (PREFIX SUMS) & MẢNG HIỆU (DIFFERENCE ARRAY)
* **Phân hạng:** `Newbie (800 - 1100)`
* **Bản chất:**
  * Prefix Sum tính tổng đoạn con $[L, R]$ trong $O(1)$: $P[R] - P[L-1]$.
  * Difference Array cộng một lượng $V$ vào đoạn $[L, R]$ trong $O(1)$: $D[L] \mathrel{+}= V, D[R+1] \mathrel{-}= V$.
* **Độ phức tạp:** Tiền xử lý $O(N)$, truy vấn $O(1)$, bộ nhớ $O(N)$.
* **Link Codeforces Blog:**
  * [Prefix Sums and Difference Arrays (CF Blog by Errichto)](https://codeforces.com/blog/entry/78584)
  * [Multi-dimensional prefix sums tutorial](https://codeforces.com/blog/entry/82672)
* **Bài tập tiêu biểu:**
  1. [CF 313B - Ilya and Queries](https://codeforces.com/problemset/problem/313/B) (1000) – *Cộng dồn các vị trí liền kề giống nhau.*
  2. [CF 433B - Kuriyama Mirai's Stones](https://codeforces.com/problemset/problem/433/B) (1200) – *Hai mảng cộng dồn trên mảng gốc và mảng sắp xếp.*
  3. [CF 816B - Karen and Coffee](https://codeforces.com/problemset/problem/816/B) (1400) – *Difference Array cộng dải nhiệt độ kết hợp Prefix Sum.*
  4. [CF 295A - Greg and Array](https://codeforces.com/problemset/problem/295/A) (1400) – *Difference Array 2 tầng độc lập.*
  5. [CF 1398C - Good Subarrays](https://codeforces.com/problemset/problem/1398/C) (1400) – *Chuyển đổi $P[R] - R = P[L-1] - (L-1)$ đếm qua map.*

---

## 2. HAI CON TRỎ (TWO POINTERS) & CỬA SỔ TRƯỢT (SLIDING WINDOW)
* **Phân hạng:** `Newbie ➔ Pupil (900 - 1300)`
* **Bản chất:** Duyệt không gian trạng thái bằng $(L, R)$ theo một chiều đơn điệu, không bao giờ lùi. Cửa sổ mở rộng khi điều kiện thỏa mãn và co lại khi vi phạm.
* **Độ phức tạp:** $O(N)$ tổng thể.
* **Link Codeforces Blog:**
  * [Codeforces Edu: Two Pointers Method Step 1 - 3](https://codeforces.com/edu/course/2/lesson/9)
* **Bài tập tiêu biểu:**
  1. [CF 381A - Sereja and Dima](https://codeforces.com/problemset/problem/381/A) (800) – *Hai con trỏ co từ 2 đầu mảng.*
  2. [CF 279B - Books](https://codeforces.com/problemset/problem/279/B) (1100) – *Cửa sổ trượt tìm đoạn đọc sách dài nhất $\le t$.*
  3. [CF 602B - Approximating a Constant Range](https://codeforces.com/problemset/problem/602/B) (1400) – *Cửa sổ trượt duy trì hiệu $\max - \min \le 1$.*
  4. [CF 1251C - Minimize The Integer](https://codeforces.com/problemset/problem/1251/C) (1400) – *Trộn hai chuỗi chẵn lẻ theo thứ tự từ điển.*

---

## 3. TÌM KIẾM NHỊ PHÂN & CHẶT NHỊ PHÂN KẾT QUẢ (BINARY SEARCH ON ANSWER)
* **Phân hạng:** `Pupil (1000 - 1400)`
* **Bản chất:** Chuyển đổi bài toán tối ưu "Tìm giá trị $X$ tốt nhất" thành bài toán quyết định "Với giá trị $M$, liệu có phương án khả thi hay không?". Yêu cầu hàm kiểm tra có tính đơn điệu.
* **Độ phức tạp:** $O(\log(\text{range}) \times \text{Cost}(f))$.
* **Link Codeforces Blog:**
  * [Codeforces Edu: Binary Search Step 1 - 5](https://codeforces.com/edu/course/2/lesson/6)
  * [Binary Search comprehensive tutorial by Errichto](https://codeforces.com/blog/entry/67509)
* **Bài tập tiêu biểu:**
  1. [CF 706B - Interesting drink](https://codeforces.com/problemset/problem/706/B) (1100) – *Dùng upper_bound đếm số lượng giá tiền.*
  2. [CF 1613C - Poisoned Dagger](https://codeforces.com/problemset/problem/1613/C) (1200) – *Chặt nhị phân lượng sát thương $k$ để giết rồng.*
  3. [CF 371C - Hamburgers](https://codeforces.com/problemset/problem/371/C) (1400) – *Chặt số lượng hamburger làm được với ngân sách.*
  4. [CF 1201C - Maximum Median](https://codeforces.com/problemset/problem/1201/C) (1400) – *Chặt nhị phân giá trị trung vị tối đa sau $k$ thao tác.*

---

## 4. SÀNG NGUYÊN TỐ & SỐ HỌC CƠ BẢN (NUMBER THEORY BASICS)
* **Phân hạng:** `Pupil (1000 - 1400)`
* **Bản chất:** Sàng Eratosthenes $O(N \log \log N)$, Sàng ước nguyên tố nhỏ nhất (SPF) giúp phân tích thừa số nguyên tố của mọi số $\le N$ trong $O(\log X)$, thuật toán Euclid tính GCD.
* **Link Codeforces Blog:**
  * [Number Theory Tutorial (Primes, Sieve, GCD)](https://codeforces.com/blog/entry/78065)
* **Bài tập tiêu biểu:**
  1. [CF 230B - T-primes](https://codeforces.com/problemset/problem/230/B) (1300) – *Số có đúng 3 ước là bình phương của số nguyên tố.*
  2. [CF 154B - Colliders](https://codeforces.com/problemset/problem/154/B) (1600) – *Kiểm tra nguyên tố cùng nhau nhanh bằng SPF.*
  3. [CF 1033B - Square Difference](https://codeforces.com/problemset/problem/1033/B) (1100) – *Phân tích hằng đẳng thức $a^2 - b^2 = (a-b)(a+b)$.*

---

## 5. THAM LAM & BẤT ĐẲNG THỨC SẮP XẾP (GREEDY & SORTING)
* **Phân hạng:** `Pupil ➔ Specialist (1100 - 1500)`
* **Bản chất:** Lựa chọn tối ưu cục bộ tại từng bước. Kỹ thuật chứng minh Exchange Argument: Giả định hoán vị tối ưu có nghịch thế, chứng minh việc đổi chỗ 2 phần tử kề nhau không làm giảm chất lượng nghiệm.
* **Link Codeforces Blog:**
  * [Thinking about Greedy Algorithms](https://codeforces.com/blog/entry/92661)
* **Bài tập tiêu biểu:**
  1. [CF 405A - Gravity Flip](https://codeforces.com/problemset/problem/405/A) (900) – *Sắp xếp mô phỏng trọng lực.*
  2. [CF 1360D - Buying Shovels](https://codeforces.com/problemset/problem/1360/D) (1300) – *Tham lam tìm ước lớn nhất $\le k$.*
  3. [CF 1490C - Sum of Cubes](https://codeforces.com/problemset/problem/1490/C) (1100) – *Duyệt $a$ và binary search $b$ thỏa $a^3 + b^3 = x$.*

---

## 6. DUYỆT ĐỒ THỊ DFS/BFS & ĐỒ THỊ TRÊN LƯỚI (GRAPHS & GRIDS)
* **Phân hạng:** `Pupil ➔ Specialist (1200 - 1500)`
* **Bản chất:** DFS tìm thành phần liên thông, chu trình, đường đi sâu. BFS tìm đường đi ngắn nhất trên đồ thị không trọng số hoặc trọng số bằng 1.
* **Độ phức tạp:** $O(V + E)$.
* **Link Codeforces Blog:**
  * [Graph Theory Part 1: DFS & BFS Fundamentals](https://codeforces.com/blog/entry/68138)
* **Bài tập tiêu biểu:**
  1. [CF 520B - Two Buttons](https://codeforces.com/problemset/problem/520/B) (1400) – *BFS tìm số bước biến đổi ngắn nhất từ $n$ đến $m$.*
  2. [CF 500A - New Year Transportation](https://codeforces.com/problemset/problem/500/A) (1000) – *DFS kiểm tra tính liên thông trên tuyến đường.*
  3. [CF 580C - Kefa and Park](https://codeforces.com/problemset/problem/580/C) (1500) – *DFS trên cây đếm lá hợp lệ với giới hạn mèo liên tiếp.*

---

## 7. CẤU TRÚC TẬP HỢP RỜI RẠC (DISJOINT SET UNION - DSU)
* **Phân hạng:** `Specialist (1300 - 1600)`
* **Bản chất:** Quản lý các tập hợp động với Path Compression và Union by Size/Rank. Hỗ trợ gộp và truy vấn đại diện trong thời gian thực tế $O(1)$ ($\alpha(N) \le 4$).
* **Link Codeforces Blog:**
  * [Codeforces Edu: Disjoint Sets Union (Step 1 - 3)](https://codeforces.com/edu/course/2/lesson/7)
* **Bài tập tiêu biểu:**
  1. [CF 25D - Roads not only in Berland](https://codeforces.com/problemset/problem/25/D) (1700) – *Tìm cạnh thừa tạo chu trình và nối các thành phần rời rạc.*
  2. [CF 1167C - News Distribution](https://codeforces.com/problemset/problem/1167/C) (1400) – *Gộp nhóm bạn, xuất kích thước tập hợp.*
  3. [CF 1213G - Path Queries](https://codeforces.com/problemset/problem/1213/G) (1800) – *Sắp xếp cạnh tăng dần, dùng DSU tính đóng góp cặp đỉnh mới.*

---

## 8. QUY HOẠCH ĐỘNG CƠ BẢN (DP: 1D, 2D, BALO, LIS, LCS)
* **Phân hạng:** `Specialist (1300 - 1600)`
* **Bản chất:** Giải bài toán bằng bảng phương án gối nhau. Xác định trạng thái, bài toán cơ sở và công thức chuyển.
* **Link Codeforces Blog:**
  * [Dynamic Programming for Beginners (Errichto)](https://codeforces.com/blog/entry/67679)
* **Bài tập tiêu biểu:**
  1. [CF 455A - Boredom](https://codeforces.com/problemset/problem/455/A) (1500) – *Chọn $x$ thì bỏ $x-1$ và $x+1$, quy đổi về House Robber.*
  2. [CF 118D - Caesar's Legions](https://codeforces.com/problemset/problem/118/D) (1600) – *DP trạng thái giới hạn số lượng quân liên tiếp.*
  3. [CF 474D - Flowers](https://codeforces.com/problemset/problem/474/D) (1500) – *$DP[i] = DP[i-1] + DP[i-k]$ kết hợp Prefix Sum trả lời nhanh.*

---

## 9. SẮP XẾP TÔ-PÔ & ĐỒ THỊ DAG (TOPOLOGICAL SORT)
* **Phân hạng:** `Specialist ➔ Expert (1400 - 1700)`
* **Bản chất:** Sắp xếp tuyến tính các đỉnh trên DAG bằng thuật toán Kahn (xóa dần đỉnh có bậc vào bằng 0). Dùng để phát hiện chu trình và tính DP trên đồ thị có hướng.
* **Link Codeforces Blog:**
  * [Topological Sorting and DAG DP Tutorial](https://codeforces.com/blog/entry/81258)
* **Bài tập tiêu biểu:**
  1. [CF 510C - Fox And Names](https://codeforces.com/problemset/problem/510/C) (1500) – *Dựng thứ tự từ điển của bảng chữ cái lạ qua Tô-pô.*
  2. [CF 919D - Substring](https://codeforces.com/problemset/problem/919/D) (1700) – *Kiểm tra chu trình và DP tính tần suất ký tự cực đại trên DAG.*
  3. [CF 1385E - Directing Edges](https://codeforces.com/problemset/problem/1385/E) (1900) – *Định hướng cạnh vô hướng theo thứ tự tô-pô tăng dần.*

---

## 10. ĐƯỜNG ĐI NGẮN NHẤT: DIJKSTRA, 0-1 BFS & FLOYD-WARSHALL
* **Phân hạng:** `Specialist ➔ Expert (1400 - 1700)`
* **Bản chất:** Dijkstra dùng `priority_queue` cho trọng số không âm $O((V+E)\log V)$; 0-1 BFS dùng `deque` tối ưu $O(V+E)$; Floyd-Warshall tính mọi cặp đỉnh $O(V^3)$.
* **Link Codeforces Blog:**
  * [0-1 BFS Tutorial with Codeforces Problems](https://codeforces.com/blog/entry/88408)
* **Bài tập tiêu biểu:**
  1. [CF 20C - Dijkstra?](https://codeforces.com/problemset/problem/20/C) (1500) – *Dijkstra lưu vết đường đi chuẩn mực.*
  2. [CF 1063B - Labyrinth](https://codeforces.com/problemset/problem/1063/B) (1800) – *Mô hình hóa số bước rẽ trái bằng 0-1 BFS.*
  3. [CF 59E - Shortest Path](https://codeforces.com/problemset/problem/59/E) (1900) – *Dijkstra trên cạnh tránh các bộ 3 cấm.*

---

## 11. TỔ TIÊN CHUNG GẦN NHẤT (LCA), BINARY LIFTING & EULER TOUR
* **Phân hạng:** `Specialist ➔ Expert (1600 - 1900)` *(Hạ tầng từ nhóm 4 theo yêu cầu)*
* **Bản chất:**
  * **Binary Lifting:** Lưu $up[u][j]$ là tổ tiên thứ $2^j$ của $u$, nhảy tìm LCA và khoảng cách trong $O(\log N)$.
  * **Euler Tour:** Trải phẳng cây thành mảng 1D bằng thứ tự `tin[u], tout[u]`, chuyển truy vấn trên cây con thành truy vấn đoạn $[tin[u], tout[u]]$.
* **Link Codeforces Blog:**
  * [Binary Lifting & LCA Tutorial](https://codeforces.com/blog/entry/22325)
  * [Euler Tour Technique & Subtree Queries](https://codeforces.com/blog/entry/18051)
* **Bài tập tiêu biểu:**
  1. [CF 1328E - Tree Queries](https://codeforces.com/problemset/problem/1328/E) (1900) – *Kiểm tra các đỉnh có nằm gần đường đi gốc - lá bằng LCA.*
  2. [CF 208E - Blood Cousins](https://codeforces.com/problemset/problem/208/E) (2000) – *Binary Lifting tìm tổ tiên thứ $k$, kết hợp Euler Tour đếm anh em họ.*
  3. [CF 1702G2 - Passable Paths](https://codeforces.com/problemset/problem/1702/G2) (1900) – *Sắp xếp độ sâu và kiểm tra tập đỉnh có cùng nằm trên đường đi đơn.*

---

## 12. QUY HOẠCH ĐỘNG TRÊN CÂY CƠ BẢN & ĐỔI GỐC (TREE DP & REROOTING)
* **Phân hạng:** `Specialist ➔ Expert (1600 - 1900)` *(Hạ tầng từ nhóm 4 theo yêu cầu)*
* **Bản chất:**
  * **Bottom-up Tree DP:** DFS hậu thứ tự tính giá trị cho nút cha từ các nút con.
  * **Rerooting (2-Pass DFS):** DFS lần 1 tính kết quả cố định gốc 1; DFS lần 2 dịch chuyển gốc sang con $v$ trong $O(1)$ bằng cách trừ đi đóng góp cũ của $v$. Cho kết quả mọi gốc trong $O(N)$.
* **Link Codeforces Blog:**
  * [Tree DP: Rerooting Technique Explained](https://codeforces.com/blog/entry/68774)
  * [Dynamic Programming on Trees Tutorial](https://codeforces.com/blog/entry/20935)
* **Bài tập tiêu biểu:**
  1. [CF 1324F - Maximum White Subtree](https://codeforces.com/problemset/problem/1324/F) (1800) – *Bài tập kinh điển: Rerooting tìm cây con liên thông chứa $u$ tối ưu.*
  2. [CF 1187E - Tree Painting](https://codeforces.com/problemset/problem/1187/E) (2100) – *Đổi gốc cập nhật tổng kích thước cây con: $\Delta = N - 2 \cdot sz_v$.*
  3. [CF 1083A - The Fair Nut and the Best Path](https://codeforces.com/problemset/problem/1083/A) (2100) – *Duy trì 2 nhánh con có lượng xăng lớn nhất.*

---

## 13. SỐ HỌC MODULAR & TỔ HỢP NÂNG CAO (COMBINATORICS & MODULO)
* **Phân hạng:** `Expert (1500 - 1800)`
* **Bản chất:** Nghịch đảo modulo bằng Fermat nhỏ ($a^{M-2} \pmod M$), tính $C(N, K)$ bằng tiền xử lý giai thừa trong $O(1)$, kỹ thuật chia kẹo Euler (Stars and Bars).
* **Link Codeforces Blog:**
  * [Combinatorics in Competitive Programming by Errichto](https://codeforces.com/blog/entry/78584)
* **Bài tập tiêu biểu:**
  1. [CF 300C - Beautiful Numbers](https://codeforces.com/problemset/problem/300/C) (1600) – *Duyệt số lần xuất hiện chữ số đẹp, tính tổ hợp $C(N, k)$.*
  2. [CF 1284B - New Year and Ascent Sequence](https://codeforces.com/problemset/problem/1284/B) (1400) – *Bù trừ logic tổ hợp: $N^2 - \text{cặp không thỏa mãn}$.*
  3. [CF 559C - Gerald and Giant Chess](https://codeforces.com/problemset/problem/559/C) (2000) – *DP bù trừ các ô cấm trên bàn cờ khổng lồ.*

---

## 14. QUY HOẠCH ĐỘNG BITMASK & SOS DP
* **Phân hạng:** `Expert (1600 - 1900)`
* **Bản chất:** Biểu diễn trạng thái bằng dãy bit nhị phân cho $N \le 20$. Kỹ thuật SOS DP (Sum Over Subsets) tính tổng trên mọi tập con trong $O(N \cdot 2^N)$ thay vì $O(3^N)$.
* **Link Codeforces Blog:**
  * [SOS DP (Sum Over Subsets DP) Tutorial](https://codeforces.com/blog/entry/45223)
* **Bài tập tiêu biểu:**
  1. [CF 550B - Preparing Olympiad](https://codeforces.com/problemset/problem/550/B) (1400) – *Duyệt $2^N$ tập con kiểm tra độ khó đề thi.*
  2. [CF 476B - Dreamoon and WiFi](https://codeforces.com/problemset/problem/476/B) (1300) – *Phân bổ các dấu `?` bằng bitmask.*
  3. [CF 165E - Compatible Numbers](https://codeforces.com/problemset/problem/165/E) (2200) – *SOS DP tìm số có bitmask đảo `~x`.*

---

## 15. CÂY FENWICK (BIT) & SEGMENT TREE CƠ BẢN
* **Phân hạng:** `Expert (1600 - 1900)`
* **Bản chất:** Fenwick Tree dùng `x & (-x)` quản lý prefix sum trong 10 dòng code; Segment Tree quản lý cây nhị phân đầy đủ hỗ trợ Point Update & Range Query cho mọi hàm có tính kết hợp trong $O(\log N)$.
* **Link Codeforces Blog:**
  * [Codeforces Edu: Segment Tree Part 1](https://codeforces.com/edu/course/2/lesson/4)
  * [Fenwick Tree / Binary Indexed Tree Comprehensive Guide](https://codeforces.com/blog/entry/61364)
* **Bài tập tiêu biểu:**
  1. [CF 339D - Xenia and Bitwise Operations](https://codeforces.com/problemset/problem/339/D) (1700) – *Segment tree đan xen các tầng OR và XOR.*
  2. [CF 380C - Sereja and Brackets](https://codeforces.com/problemset/problem/380/C) (2000) – *Gộp đoạn ngoặc đúng trong $O(1)$ tại mỗi nút.*
  3. [CF 652D - Nested Segments](https://codeforces.com/problemset/problem/652/D) (1800) – *Đếm đoạn con lọt thỏm bằng nén tọa độ và BIT.*

---

## 16. SEGMENT TREE CẬP NHẬT ĐOẠN LƯỜI (LAZY PROPAGATION)
* **Phân hạng:** `Expert ➔ Candidate Master (1700 - 2000)`
* **Bản chất:** Lưu giá trị biến đổi treo tại nhãn `lazy[node]`, chỉ đẩy (pushdown) xuống 2 con trực tiếp khi có truy vấn đi qua, giữ độ phức tạp Range Update & Range Query ở $O(\log N)$.
* **Link Codeforces Blog:**
  * [Codeforces Edu: Segment Tree Part 2 (Lazy Propagation)](https://codeforces.com/edu/course/2/lesson/5)
* **Bài tập tiêu biểu:**
  1. [CF 52C - Circular RMQ](https://codeforces.com/problemset/problem/52/C) (2200) – *Range Add & Range Min trên mảng xoay vòng.*
  2. [CF 292E - Copying Data](https://codeforces.com/problemset/problem/292/E) (1900) – *Gán đoạn dữ liệu theo nhãn thời gian.*
  3. [CF 145E - Lucky Queries](https://codeforces.com/problemset/problem/145/E) (2400) – *Cập nhật lười đảo cờ 4 và 7.*

---

## 17. XỬ LÝ CHUỖI NÂNG CAO: HASHING, Z-ALGORITHM, KMP & TRIE
* **Phân hạng:** `Candidate Master (1800 - 2200)`
* **Bản chất:** Rolling Double Hash so khớp chuỗi con trong $O(1)$; Z-algorithm và KMP tính mảng khớp tiền tố/hậu tố trong thời gian tuyến tính $O(N)$ tuyệt đối.
* **Link Codeforces Blog:**
  * [String Hashing and Anti-Hash Test Prevention](https://codeforces.com/blog/entry/60445)
  * [KMP and Z-Algorithm Illustrated](https://codeforces.com/blog/entry/3107)
* **Bài tập tiêu biểu:**
  1. [CF 126B - Password](https://codeforces.com/problemset/problem/126/B) (1700) – *Tìm chuỗi vừa là tiền tố, hậu tố và nằm ở giữa qua KMP.*
  2. [CF 432D - Prefixes and Suffixes](https://codeforces.com/problemset/problem/432/D) (1900) – *Z-algorithm kết hợp đếm tần suất tiền tố trùng hậu tố.*
  3. [CF 271D - Good Substrings](https://codeforces.com/problemset/problem/271/D) (1600) – *Đếm chuỗi con phân biệt không quá $k$ ký tự xấu bằng Trie/Hash.*

---

## 18. THÀNH PHẦN LIÊN THÔNG MẠNH (SCC), CẦU / KHỚP & 2-SAT
* **Phân hạng:** `Candidate Master ➔ Master (1800 - 2200)`
* **Bản chất:** Tarjan duy trì `tin[u]` và `low[u]`. Xác định Cầu ($low[v] > tin[u]$), Khớp ($low[v] \ge tin[u]$) và thu gọn chu trình có hướng thành DAG (Condensation Graph). Ứng dụng giải 2-SAT trong $O(V + E)$.
* **Link Codeforces Blog:**
  * [Finding Bridges and Articulation Points in O(N + M)](https://codeforces.com/blog/entry/68138)
  * [2-SAT Tutorial and Implementation](https://codeforces.com/blog/entry/16205)
* **Bài tập tiêu biểu:**
  1. [CF 427C - Checkposts](https://codeforces.com/problemset/problem/427/C) (1700) – *Chia cụm SCC, nhân số phương án chọn trạm rẻ nhất.*
  2. [CF 1000E - We Need More Bosses](https://codeforces.com/problemset/problem/1000/E) (2100) – *Co các thành phần 2-cạnh liên thông thành cây (Bridge Block Tree).*
  3. [CF 1215F - Radio Stations](https://codeforces.com/problemset/problem/1215/F) (2500) – *Mô hình hóa điều kiện tần số thành đồ thị 2-SAT.*

---

## 19. LUỒNG CỰC ĐẠI DINIC & LÁT CẮT HẸP NHẤT (MAX FLOW & MIN CUT)
* **Phân hạng:** `Candidate Master ➔ Master (1900 - 2300)`
* **Bản chất:** Thuật toán Dinic chia tầng bằng BFS và vét cạn luồng bằng DFS. Giá trị Max-Flow bằng Min-Cut. Áp dụng giải Cặp ghép cực đại, Bài toán chọn dự án (Project Selection).
* **Link Codeforces Blog:**
  * [Maximum Flow: Dinic's Algorithm with proofs and code](https://codeforces.com/blog/entry/64504)
  * [Flows & Cuts Modeling: Project Selection](https://codeforces.com/blog/entry/70212)
* **Bài tập tiêu biểu:**
  1. [CF 1082G - Petya and Graph](https://codeforces.com/problemset/problem/1082/G) (2400) – *Bài toán chọn dự án kinh điển chuyển về Min-Cut.*
  2. [CF 653D - Delivery Bears](https://codeforces.com/problemset/problem/653/D) (2300) – *Chặt nhị phân khối lượng hàng kết hợp kiểm tra bằng Max Flow.*
  3. [CF 546E - Soldier and Traveling](https://codeforces.com/problemset/problem/546/E) (2000) – *Luồng phân chia quân lính với bảo toàn số lượng tại mỗi đỉnh.*

---

## 20. CÂY PHÂN ĐOẠN BỀN VỮNG (PERSISTENT SEGMENT TREE)
* **Phân hạng:** `Candidate Master ➔ Master (1900 - 2300)`
* **Bản chất:** Giữ lại toàn bộ lịch sử các phiên bản của cây sau mỗi lần cập nhật. Khi cập nhật điểm, chỉ tạo ra $O(\log N)$ nút mới dọc đường đi và tái sử dụng các nút con không đổi từ phiên bản trước.
* **Ứng dụng:** Trả lời truy vấn $k$-th số nhỏ nhất trên đoạn $[L, R]$ trong $O(\log N)$ không cần biến đổi mảng.
* **Link Codeforces Blog:**
  * [Persistent Segment Tree Tutorial (CF Blog)](https://codeforces.com/blog/entry/15890)
  * [Advanced Persistent Data Structures](https://codeforces.com/blog/entry/76447)
* **Bài tập tiêu biểu:**
  1. [CF 813E - Army Creation](https://codeforces.com/problemset/problem/813/E) (2200) – *Persistent SegTree đếm số phần tử xuất hiện không quá $k$ lần online.*
  2. [CF 961E - Tufur and Paper](https://codeforces.com/problemset/problem/961/E) (1900) – *Đếm số cặp thỏa điều kiện bằng Persistent SegTree hoặc Fenwick offline.*
  3. [SPOJ MKTHNUM - K-th Number](https://www.spoj.com/problems/MKTHNUM/) – *Bài toán nền tảng của Persistent SegTree: Tìm số nhỏ thứ $k$ trên đoạn.*

---

## 21. PHÂN TÁCH ĐƯỜNG ĐI NẶNG - NHẸ TRÊN CÂY (HEAVY-LIGHT DECOMPOSITION - HLD)
* **Phân hạng:** `Master ➔ Grandmaster (2000 - 2400)`
* **Bản chất:**
  * Phân rã mọi cây thành tập hợp các chuỗi đường đi thẳng (Heavy Chains). Mỗi cạnh nối cha đến con có kích thước cây con lớn nhất gọi là cạnh nặng (Heavy Edge).
  * Mọi đường đi giữa hai đỉnh bất kỳ trên cây chỉ cắt qua tối đa $O(\log N)$ chuỗi nặng.
  * Đánh số lại các đỉnh trên mảng 1D theo thứ tự duyệt HLD, biến các thao tác cập nhật/truy vấn trên đường đi thành $O(\log N)$ đoạn con trên Segment Tree.
* **Độ phức tạp:** $O(\log^2 N)$ cho mỗi truy vấn đường đi cây.
* **Link Codeforces Blog:**
  * [Heavy-Light Decomposition Tutorial (Anudeep & CP-Algorithms)](https://codeforces.com/blog/entry/12239)
  * [HLD implementation tricks and optimizations](https://codeforces.com/blog/entry/53170)
* **Bài tập tiêu biểu:**
  1. [CF 343D - Water Tree](https://codeforces.com/problemset/problem/343/D) (2100) – *Đổ nước cây con và làm rỗng đường đi lên gốc dùng HLD/Euler Tour.*
  2. [CF 396C - On Segment Tree](https://codeforces.com/problemset/problem/396/C) (2200) – *Cập nhật hàm bậc nhất trên cây con và truy vấn đường đi.*
  3. [CF 117E - Tree or not Tree](https://codeforces.com/problemset/problem/117/E) (2700) – *Đồ thị có $N$ đỉnh $N$ cạnh (cây + 1 cạnh), HLD xử lý chu trình.*

---

## 22. TỐI ƯU HÓA QUY HOẠCH ĐỘNG: BAO LỒI (CHT) & CÂY LI CHAO
* **Phân hạng:** `Master ➔ Grandmaster (2000 - 2400)`
* **Bản chất:**
  * Tối ưu hóa chuyển trạng thái dạng $DP[i] = \min_{j < i} (DP[j] + m_j \cdot x_i + c_j)$. Đây là bài toán tìm giá trị cực trị của tập hợp các đường thẳng $y = m \cdot x + c$ tại hoành độ $x_i$.
  * **Convex Hull Trick (CHT):** Duy trì bao lồi các đường thẳng bằng ngăn xếp (nếu hệ số góc $m$ đơn điệu) hoặc `std::set` (Dynamic CHT).
  * **Cây Li Chao:** Cây phân đoạn quản lý đoạn thẳng, không cần điều kiện đơn điệu của $m$ hay $x$, cài đặt cực kỳ tinh gọn.
* **Độ phức tạp:** Giảm từ $O(N^2)$ xuống $O(N)$ hoặc $O(N \log N)$.
* **Link Codeforces Blog:**
  * [Convex Hull Trick & Li Chao Tree Tutorial](https://codeforces.com/blog/entry/63823)
  * [Dynamic Programming Optimizations (by Radewoosh)](https://codeforces.com/blog/entry/8284)
* **Bài tập tiêu biểu:**
  1. [CF 319C - Kalila and Dimna in the Logging Industry](https://codeforces.com/problemset/problem/319/C) (2100) – *Bài toán nhập môn CHT kinh điển.*
  2. [CF 1083E - The Fair Nut and Rectangles](https://codeforces.com/problemset/problem/1083/E) (2300) – *Bao lồi CHT kết hợp sắp xếp hình chữ nhật lồng nhau.*
  3. [CF 932F - Escape Through Leaf](https://codeforces.com/problemset/problem/932/F) (2500) – *CHT trên cây kết hợp kỹ thuật gộp cây Li Chao (Li Chao Tree Merging).*

---

## 23. CÂY ẢO (VIRTUAL TREE / AUXILIARY TREE)
* **Phân hạng:** `Master ➔ Grandmaster (2200 - 2500)`
* **Bản chất:**
  * Khi bài toán cho một cây rất lớn ($N \le 5 \cdot 10^5$), nhưng mỗi truy vấn chỉ có một tập con $K$ đỉnh quan trọng với điều kiện $\sum K \le 5 \cdot 10^5$.
  * Ta dựng một **Cây ảo** chỉ gồm tập $K$ đỉnh này cùng với các đỉnh LCA chung của chúng. Cây ảo này chỉ có tối đa $2K$ đỉnh và bảo toàn toàn bộ cấu trúc tổ tiên - con cháu của cây gốc!
  * **Cách dựng trong $O(K \log K)$:** Sắp xếp $K$ đỉnh theo thứ tự DFS (`tin`), duyệt qua và dùng ngăn xếp duy trì nhánh cây hiện tại.
* **Link Codeforces Blog:**
  * [Virtual Tree / Auxiliary Tree Tutorial](https://codeforces.com/blog/entry/76955)
  * [Auxiliary Tree construction guide](https://codeforces.com/blog/entry/80388)
* **Bài tập tiêu biểu:**
  1. [CF 613D - Kingdom and its Cities](https://codeforces.com/problemset/problem/613/D) (2400) – *Bài tập kinh điển: Dựng cây ảo và chạy DP tham lam ngắt kết nối các thành phố.*
  2. [CF 1111E - Tree](https://codeforces.com/problemset/problem/1111/E) (2400) – *Cây ảo kết hợp DP chia tập hợp con.*
  3. [CF 1320E - Treeland Virus](https://codeforces.com/problemset/problem/1320/E) (2600) – *Dijkstra đa nguồn lây nhiễm virus trực tiếp trên cây ảo.*

---

## 24. TÌM KIẾM NHỊ PHÂN SONG SONG (PARALLEL BINARY SEARCH)
* **Phân hạng:** `Master ➔ Grandmaster (2200 - 2500)`
* **Bản chất:**
  * Khi có $Q$ truy vấn độc lập, mỗi truy vấn có thể giải bằng chặt nhị phân qua $M$ sự kiện biến đổi. Nếu làm tuần tự từng truy vấn, mỗi lần phải dựng lại cấu trúc dữ liệu từ đầu, mất $O(Q \cdot M \log M)$ (bị TLE).
  * **Ý tưởng then chốt:** Thay vì chặt nhị phân từng truy vấn riêng lẻ, ta chặt nhị phân **đồng thời cho toàn bộ $Q$ truy vấn**!
  * Sau mỗi vòng lặp nhị phân, ta chỉ cần kích hoạt $M$ sự kiện **đúng 1 lần duy nhất** rồi phân loại các truy vấn vào nhánh trái hay nhánh phải.
* **Độ phức tạp:** Giảm từ $O(Q \cdot M \log M)$ xuống $O((M + Q) \log M \cdot \text{Cost(DS)})$.
* **Link Codeforces Blog:**
  * [Parallel Binary Search Tutorial & Applications](https://codeforces.com/blog/entry/45578)
* **Bài tập tiêu biểu:**
  1. [SPOJ METEORS - Meteors](https://www.spoj.com/problems/METEORS/) – *Bài tập cội nguồn của kỹ thuật: Các quốc gia hứng mưa sao băng.*
  2. [CF 891C - Envy](https://codeforces.com/problemset/problem/891/C) (2400) – *Kiểm tra tập cạnh có thể cùng thuộc cây khung nhỏ nhất bằng DSU Rollback.*
  3. [CF 1100F - Ivan and Burgers](https://codeforces.com/problemset/problem/1100/F) (2400) – *Linear Basis song song hoặc xử lý offline truy vấn XOR lớn nhất.*

---

## 25. TỐI ƯU HÓA WQS / ALIEN'S TRICK (LAMBDA OPTIMIZATION)
* **Phân hạng:** `Grandmaster (2300 - 2600+)`
* **Bản chất:**
  * Dành riêng cho các bài toán tối ưu hàm mục tiêu với ràng buộc khắt khe: **"Hãy chọn đúng $K$ phần tử/đoạn con để tổng giá trị là lớn nhất/nhỏ nhất"**.
  * Nếu vẽ đồ thị của hàm mục tiêu $f(k)$ theo số lượng phần tử $k$, đồ thị có tính chất **lồi hoặc lõm** (Convex / Concave).
  * Ta gỡ bỏ ràng buộc chọn đúng $K$ phần tử bằng cách đặt thêm một **"khoản tiền phạt" (Penalty) $\lambda$** cho mỗi lần lựa chọn. Chặt nhị phân giá trị phạt $\lambda$ cho đến khi số lượng phần tử được chọn tự do rơi đúng vào $K$!
* **Link Codeforces Blog:**
  * [The Alien's Trick / WQS Binary Search Tutorial](https://codeforces.com/blog/entry/98663)
  * [Lagrange Relaxation & WQS Optimization in Competitive Programming](https://codeforces.com/blog/entry/73643)
* **Bài tập tiêu biểu:**
  1. [IOI 2016 - Aliens](https://oj.uz/problem/view/IOI16_aliens) – *Nguồn gốc tên gọi Alien's Trick: Tối ưu số lượng ảnh chụp vệ tinh.*
  2. [CF 1279F - New Year and Handle Change](https://codeforces.com/problemset/problem/1279/F) (2500) – *WQS Binary Search chọn đúng $K$ đoạn đảo ký tự.*
  3. [CF 739E - Gosha is hunting](https://codeforces.com/problemset/problem/739/E) (2600) – *WQS 2 chiều (Double Alien's Trick) với 2 loại bóng bắt Pokemon.*

---

## 26. PHÂN TÁCH TRỌNG TÂM TRÊN CÂY (CENTROID DECOMPOSITION)
* **Phân hạng:** `Master ➔ Grandmaster (2200 - 2500)`
* **Bản chất:**
  * Kỹ thuật chia để trị tối thượng trên đồ thị dạng cây: Luôn tìm được một đỉnh trọng tâm (Centroid) mà khi loại bỏ đỉnh này, mọi cây con còn lại đều có kích thước không vượt quá $\frac{N}{2}$.
  * Bằng cách liên tục phân tách tại trọng tâm, ta xây dựng được một "Cây trọng tâm" (Centroid Tree) có **độ sâu tối đa chỉ $O(\log N)$**!
  * Cho phép giải quyết các bài toán đếm đường đi có độ dài hoặc tính chất đặc biệt trên cây trong $O(N \log^2 N)$ hoặc $O(N \log N)$.
* **Link Codeforces Blog:**
  * [Centroid Decomposition of Tree Tutorial](https://codeforces.com/blog/entry/58025)
* **Bài tập tiêu biểu:**
  1. [CF 321C - Ciel the Commander](https://codeforces.com/problemset/problem/321/C) (2100) – *Dựng cây Centroid và gán cấp bậc chữ cái từ A đến Z.*
  2. [CF 161D - Distance in Tree](https://codeforces.com/problemset/problem/161/D) (1800) – *Đếm số cặp đỉnh có khoảng cách đúng bằng $k$ bằng Centroid.*
  3. [CF 715C - Digit Tree](https://codeforces.com/problemset/problem/715/C) (2700) – *Đếm số đường đi trên cây ghép thành số chia hết cho $M$.*

---

## 27. BIẾN ĐỔI FOURIER NHANH (FAST FOURIER TRANSFORM - FFT / NTT)
* **Phân hạng:** `Grandmaster (2300 - 2600+)`
* **Bản chất:**
  * Nhân hai đa thức bậc $N$ trong thời gian $O(N \log N)$ thay vì $O(N^2)$ bằng cách chuyển đổi giữa biểu diễn hệ số và biểu diễn điểm giá trị (Point-Value).
  * **FFT:** Sử dụng căn đơn vị phức (Complex Roots of Unity).
  * **NTT (Number Theoretic Transform):** Sử dụng căn nguyên thủy theo modulo số nguyên tố đặc biệt dạng $P = c \cdot 2^k + 1$ (như $998244353$).
* **Link Codeforces Blog:**
  * [FFT / NTT from basics to polynomial operations](https://codeforces.com/blog/entry/43499)
* **Bài tập tiêu biểu:**
  1. [CF 528D - Fuzzy Search](https://codeforces.com/problemset/problem/528/D) (2400) – *Biểu diễn phép so khớp chuỗi xấp xỉ thành nhân chập đa thức FFT.*
  2. [CF 997C - Sky Full of Stars](https://codeforces.com/problemset/problem/997/C) (2400) – *Tổ hợp bù trừ đa thức kết hợp NTT.*

---

## 28. SUFFIX AUTOMATON (SAM - MÁY TỰ ĐỘNG HẬU TỐ)
* **Phân hạng:** `Grandmaster (2400 - 2700+)`
* **Bản chất:**
  * Đồ thị có hướng không chu trình (DAG) nén toàn bộ thông tin của tất cả các chuỗi con của một chuỗi $S$ độ dài $N$.
  * Chỉ có tối đa $2N$ trạng thái và $3N$ chuyển trạng thái. Dựng được trong thời gian tuyến tính $O(N)$ tuyệt đối.
  * Là cấu trúc dữ liệu chuỗi mạnh nhất trong Competitive Programming, thay thế hoàn toàn Suffix Tree và Suffix Array trong hầu hết mọi bài toán.
* **Link Codeforces Blog:**
  * [Suffix Automaton Tutorial & Problems (CP-Algorithms)](https://codeforces.com/blog/entry/20861)
* **Bài tập tiêu biểu:**
  1. [CF 235C - Cyclical Quest](https://codeforces.com/problemset/problem/235/C) (2400) – *Đếm số lần xuất hiện của các hoán vị vòng tròn trên SAM.*
  2. [CF 700E - Cool Slogans](https://codeforces.com/problemset/problem/700/E) (3000) – *DP trên cây liên kết hậu tố (Link Tree) của SAM kết hợp Persistent SegTree.*

---

## 📈 LỊCH TRÌNH HUẤN LUYỆN ĐỀ XUẤT (THEO NĂNG LỰC)

```
Level 1: Newbie ➔ Specialist (<1200 - 1500)
├── Nắm chắc: Mảng cộng dồn, Hai con trỏ, Chặt nhị phân, Sàng nguyên tố
└── Nền tảng đồ thị: BFS, DFS, DSU, Dijkstra, DP 1D/2D cơ bản

Level 2: Specialist ➔ Expert (1600 - 1900)
├── Cây & Tổ tiên: LCA (Binary Lifting), Euler Tour, Tree DP cơ bản & Đổi gốc
└── Cấu trúc dữ liệu & Số học: Fenwick Tree, Segment Tree, Lazy Propagation, Bitmask DP

Level 3: Expert ➔ Candidate Master (1900 - 2200)
├── Nâng cao: Heavy-Light Decomposition (HLD), Persistent Segment Tree
└── Đồ thị & Chuỗi: Tarjan SCC, Max Flow Dinic, Hashing, Z-Algo, CHT / Li Chao

Level 4: Master ➔ Grandmaster (2200 - 2600+)
├── Kỹ thuật đỉnh cao: Cây ảo (Virtual Tree), Tìm kiếm nhị phân song song
└── Thuật toán tối thượng: WQS / Alien's Trick, Centroid Decomposition, FFT/NTT, Suffix Automaton
```

---
*Bản quyền nội dung thuộc CPSuggestor Ecosystem - Tự động hóa quá trình học tập và rèn luyện thuật toán thi đấu đỉnh cao.*

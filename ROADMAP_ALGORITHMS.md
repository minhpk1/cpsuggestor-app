# BẢN ĐỒ LỘ TRÌNH THUẬT TOÁN COMPETITIVE PROGRAMMING (NEWBIE ➔ GRANDMASTER)
> **Dành cho Luyện thi Codeforces & Olympic Tin học (VNOI / IOI)**  
> Được thiết kế chuẩn hóa theo thứ tự tăng tiến độ khó, phân cấp rating thực tế, kèm tóm tắt bản chất, tài liệu Codeforces blog và hệ thống bài tập phân tầng có định hướng tư duy.

---

## 🗺️ TỔNG QUAN HỆ THỐNG PHÂN BẬC RATING & 20 THUẬT TOÁN CỐT LÕI

| Giai đoạn | Rating Codeforces | Danh mục thuật toán trọng tâm |
|---|---|---|
| **Phase 1: Foundation (Newbie ➔ Pupil)** | `< 1200 - 1399` | 1. Mảng cộng dồn & Mảng hiệu<br>2. Hai con trỏ & Cửa sổ trượt<br>3. Tìm kiếm nhị phân & Chặt nhị phân kết quả<br>4. Sàng nguyên tố Eratosthenes & Thừa số nguyên tố<br>5. Kỹ thuật Tham lam & Sắp xếp biến đổi |
| **Phase 2: Intermediate (Pupil ➔ Specialist)** | `1200 - 1599` | 6. Duyệt đồ thị DFS/BFS & Đồ thị trên lưới<br>7. Cấu trúc tập hợp rời rạc (DSU)<br>8. Quy hoạch động cơ bản (1D, 2D, Balo, LIS)<br>9. Sắp xếp Tô-pô & Đồ thị DAG<br>10. Đường đi ngắn nhất (Dijkstra, 0-1 BFS) |
| **Phase 3: Advanced (Specialist ➔ Expert)** | `1600 - 1899` | 11. Số học Modular & Tổ hợp nâng cao<br>12. Quy hoạch động Bitmask<br>13. Cây chỉ số nhị phân (Fenwick Tree / BIT)<br>14. Cây phân đoạn cơ bản (Segment Tree)<br>15. Segment Tree cập nhật lười (Lazy Propagation) |
| **Phase 4: Candidate Master ➔ Master ➔ GM** | `1900 - 2400+` | 16. Quy hoạch động trên Cây & Đổi gốc (Tree DP & Rerooting)<br>17. Tổ tiên chung gần nhất (LCA) & Kỹ thuật Euler Tour<br>18. Thuật toán chuỗi: Hashing, Z-Algorithm & KMP<br>19. Thành phần liên thông mạnh (SCC) & Cầu / Khớp (Tarjan)<br>20. Luồng cực đại & Lát cắt hẹp nhất (Max Flow Dinic / Min Cut) |

---

# PHẦN CHI TIẾT 20 THUẬT TOÁN KÈM TÀI LIỆU & BÀI TẬP PHÂN CẤP

---

## 1. MẢNG CỘNG DỒN (PREFIX SUMS) & MẢNG HIỆU (DIFFERENCE ARRAY)
* **Phân hạng:** `Newbie (800 - 1100)`
* **Bản chất thuật toán:**
  * **Prefix Sum (1D & 2D):** Biến đổi mảng $A$ thành $P$ với $P[i] = P[i-1] + A[i]$. Cho phép truy vấn tổng đoạn con $[L, R]$ trong $O(1)$: $\text{Sum}(L, R) = P[R] - P[L-1]$. Trên 2D: $P[i][j] = A[i][j] + P[i-1][j] + P[i][j-1] - P[i-1][j-1]$.
  * **Difference Array:** Biến đổi thao tác cộng một lượng $V$ vào đoạn $[L, R]$ trên mảng từ $O(N)$ thành $O(1)$ bằng cách thực hiện: $D[L] \mathrel{+}= V$ và $D[R+1] \mathrel{-}= V$, sau đó tính prefix sum của $D$ để thu về mảng kết quả cuối.
* **Độ phức tạp:** Tiền xử lý $O(N)$, mỗi truy vấn $O(1)$, bộ nhớ $O(N)$.
* **Lưu ý bẫy cài đặt:** Dùng chỉ số 1-based (chừa ô `0` bằng `0`) để tránh `if (L == 0)` và tràn số khi cộng dồn (bắt buộc dùng `long long` trong C++).
* **Tài liệu Codeforces Blog:**
  * [Prefix Sums and Difference Arrays (CF Blog by Errichto)](https://codeforces.com/blog/entry/78584)
  * [Multi-dimensional prefix sums tutorial](https://codeforces.com/blog/entry/82672)

### 📌 Danh sách bài tập phân cấp:
#### Cấp độ 1: Thông hiểu thuần túy
1. [CF 313B - Ilya and Queries](https://codeforces.com/problemset/problem/313/B) (Rating 1000)
   * *Nhận xét:* Dựng mảng tiền xử lý đếm các vị trí liền kề giống nhau, truy vấn đoạn $[l, r-1]$ trong $O(1)$.
2. [CF 433B - Kuriyama Mirai's Stones](https://codeforces.com/problemset/problem/433/B) (Rating 1200)
   * *Nhận xét:* Hai mảng cộng dồn song song: một trên mảng gốc và một trên mảng đã sắp xếp.
3. [CF 816B - Karen and Coffee](https://codeforces.com/problemset/problem/816/B) (Rating 1400)
   * *Nhận xét:* Kết hợp Difference Array để cộng nhiệt độ trên dải đoạn lớn, sau đó Prefix Sum trên mảng thỏa mãn điều kiện.
4. [CF 295A - Greg and Array](https://codeforces.com/problemset/problem/295/A) (Rating 1400)
   * *Nhận xét:* Difference Array 2 tầng: tầng 1 đếm số lần áp dụng mỗi phép biến đổi, tầng 2 cộng dồn giá trị lên mảng ban đầu.
5. [CF 1398C - Good Subarrays](https://codeforces.com/problemset/problem/1398/C) (Rating 1400)
   * *Nhận xét:* Chuyển đổi công thức tổng đoạn con $P[R] - P[L-1] = R - L + 1 \iff P[R] - R = P[L-1] - (L-1)$, dùng `map`/mảng đếm tần suất.

---

## 2. HAI CON TRỎ (TWO POINTERS) & CỬA SỔ TRƯỢT (SLIDING WINDOW)
* **Phân hạng:** `Newbie ➔ Pupil (900 - 1300)`
* **Bản chất thuật toán:**
  * Duyệt qua không gian trạng thái bằng hai chỉ số con trỏ $(L, R)$ cùng di chuyển theo một chiều đơn điệu (không bao giờ lùi).
  * Điều kiện cốt lõi: Tính chất đơn điệu của hàm mục tiêu (ví dụ: khi nới rộng đoạn $[L, R]$, tổng các số không âm luôn tăng; khi thu hẹp $L$, tổng giảm).
* **Độ phức tạp:** $O(N)$ tổng thể (do mỗi con trỏ duyệt tối đa $N$ bước), bộ nhớ $O(1)$.
* **Lưu ý bẫy cài đặt:** Tránh lặp vô hạn ở con trỏ $L$ khi $L > R$; kiểm soát chặt chẽ giá trị rỗng khi cửa sổ trượt co về 0 phần tử.
* **Tài liệu Codeforces Blog:**
  * [Codeforces Edu: Two Pointers Method Step 1 - 3](https://codeforces.com/edu/course/2/lesson/9)
  * [Two Pointers Technique Overview & Practice](https://codeforces.com/blog/entry/77112)

### 📌 Danh sách bài tập phân cấp:
#### Cấp độ 1: Thông hiểu thuần túy
1. [CF 6A - Triangle](https://codeforces.com/problemset/problem/6/A) / [CF 381A - Sereja and Dima](https://codeforces.com/problemset/problem/381/A) (Rating 800)
   * *Nhận xét:* Hai con trỏ ở hai đầu mảng co dần vào giữa, mô phỏng trò chơi đối xứng.
2. [CF 279B - Books](https://codeforces.com/problemset/problem/279/B) (Rating 1100)
   * *Nhận xét:* Bài toán mẫu mực: tìm đoạn dài nhất có tổng thời gian đọc không vượt quá $t$.
3. [CF 600B - Queries about less or equal elements](https://codeforces.com/problemset/problem/600/B) (Rating 1100)
   * *Nhận xét:* Sắp xếp và dùng con trỏ tịnh tiến hoặc binary search để đếm số lượng phần tử nhỏ hơn.
#### Cấp độ 2: Vận dụng chuẩn hóa
4. [CF 602B - Approximating a Constant Range](https://codeforces.com/problemset/problem/602/B) (Rating 1400)
   * *Nhận xét:* Cửa sổ trượt duy trì hiệu $\max - \min \le 1$ bằng mảng đếm tần số hoặc `std::multiset`.
5. [CF 1251C - Minimize The Integer](https://codeforces.com/problemset/problem/1251/C) (Rating 1400)
   * *Nhận xét:* Tách chuỗi thành hai nhóm chẵn và lẻ, dùng Two Pointers để trộn (merge) theo thứ tự từ điển nhỏ nhất.
6. [CF 1006C - Three Parts of the Array](https://codeforces.com/problemset/problem/1006/C) (Rating 1100)
   * *Nhận xét:* Hai con trỏ duyệt từ hai đầu sao cho tổng tiền tố bằng tổng hậu tố mà không giao nhau.

---

## 3. TÌM KIẾM NHỊ PHÂN & CHẶT NHỊ PHÂN TRÊN KẾT QUẢ (BINARY SEARCH ON ANSWER)
* **Phân hạng:** `Pupil (1000 - 1400)`
* **Bản chất thuật toán:**
  * Thay vì tìm trực tiếp đáp án $X$, ta định nghĩa hàm kiểm tra tính khả thi $f(M) \in \{\text{true}, \text{false}\}$.
  * Điều kiện tiên quyết: Hàm $f(M)$ phải có **tính đơn điệu** (Monotonicity), ví dụ: nếu $M$ thỏa mãn thì mọi $M' \le M$ cũng thỏa mãn (hoặc ngược lại).
* **Độ phức tạp:** $O(\log(\text{range}) \times \text{Cost}(f))$. Thông thường là $O(N \log(\max - \min))$.
* **Lưu ý bẫy cài đặt:**
  * Tránh tràn số: dùng `mid = low + (high - low) / 2`.
  * Điều kiện dừng vòng lặp: chuẩn hóa quy ước `while (low <= high)` với `ans = mid` hoặc `while (high - low > 1)`.
* **Tài liệu Codeforces Blog:**
  * [Codeforces Edu: Binary Search Step 1 - 5](https://codeforces.com/edu/course/2/lesson/6)
  * [Binary Search comprehensive tutorial by Errichto](https://codeforces.com/blog/entry/67509)

### 📌 Danh sách bài tập phân cấp:
#### Cấp độ 1: Thông hiểu thuần túy
1. [CF 706B - Interesting drink](https://codeforces.com/problemset/problem/706/B) (Rating 1100)
   * *Nhận xét:* Áp dụng `std::upper_bound` đếm số cửa hàng bán giá $\le m$.
2. [CF 474B - Worms](https://codeforces.com/problemset/problem/474/B) (Rating 1200)
   * *Nhận xét:* Cộng dồn số lượng giun của từng đống, dùng binary search xác định nhãn đống.
#### Cấp độ 2: Chặt nhị phân kết quả
3. [CF 1613C - Poisoned Dagger](https://codeforces.com/problemset/problem/1613/C) (Rating 1200)
   * *Nhận xét:* Chặt nhị phân tìm lượng sát thương $k$ nhỏ nhất để tổng độc trừ máu rồng đủ tiêu diệt boss.
4. [CF 371C - Hamburgers](https://codeforces.com/problemset/problem/371/C) (Rating 1400)
   * *Nhận xét:* Chặt số bánh hamburger có thể làm được với số tiền và nguyên liệu cho trước.
5. [CF 760B - Frodo and pillows](https://codeforces.com/problemset/problem/760/B) (Rating 1400)
   * *Nhận xét:* Chặt nhị phân số gối tối đa mà Frodo có thể nhận, tính tổng gối cần thiết bằng công thức cấp số cộng.
6. [CF 1201C - Maximum Median](https://codeforces.com/problemset/problem/1201/C) (Rating 1400)
   * *Nhận xét:* Chặt nhị phân giá trị trung vị tối đa có thể đạt được sau không quá $k$ thao tác tăng.

---

## 4. SÀNG SỐ NGUYÊN TỐ & PHÂN TÍCH THỪA SỐ (NUMBER THEORY BASICS)
* **Phân hạng:** `Pupil (1000 - 1400)`
* **Bản chất thuật toán:**
  * **Sàng Eratosthenes:** Tìm toàn bộ số nguyên tố $\le N$ trong thời gian $O(N \log \log N)$.
  * **Sàng ước nguyên tố nhỏ nhất (SPF - Smallest Prime Factor):** Lưu $\text{spf}[x]$ là ước nguyên tố nhỏ nhất của $x$. Cho phép phân tích thừa số nguyên tố của bất kỳ số nào $\le N$ trong thời gian $O(\log x)$.
  * **Ước chung lớn nhất (GCD & Extended GCD):** Thuật toán Euclid tính $\gcd(a, b)$ trong $O(\log(\min(a, b)))$.
* **Lưu ý bẫy cài đặt:** Chú ý giới hạn $N > 10^7$ dễ gây tràn bộ nhớ; dùng `vector<bool>` hoặc bitset để tiết kiệm dung lượng.
* **Tài liệu Codeforces Blog:**
  * [Number Theory Tutorial (Part 1 - Primes, Sieve, GCD)](https://codeforces.com/blog/entry/78065)
  * [Linear Sieve Algorithm and SPF in O(N)](https://codeforces.com/blog/entry/54090)

### 📌 Danh sách bài tập phân cấp:
1. [CF 230B - T-primes](https://codeforces.com/problemset/problem/230/B) (Rating 1300)
   * *Nhận xét:* Số có đúng 3 ước là bình phương của một số nguyên tố. Dùng sàng tiền xử lý căn bậc hai.
2. [CF 1512D - Corrupted Array](https://codeforces.com/problemset/problem/1512/D) (Rating 1200)
   * *Nhận xét:* Tổng mảng và phần tử lớn nhất; phân tích tính chất chia hết và tổng nguyên tố.
3. [CF 154B - Colliders](https://codeforces.com/problemset/problem/154/B) (Rating 1600)
   * *Nhận xét:* Phân tích thừa số nguyên tố nhanh qua SPF để kiểm tra xung đột nguyên tố cùng nhau giữa các máy gia tốc.
4. [CF 1033B - Square Difference](https://codeforces.com/problemset/problem/1033/B) (Rating 1100)
   * *Nhận xét:* $a^2 - b^2 = (a-b)(a+b)$, số này nguyên tố khi và chỉ khi $a - b = 1$ và $a + b$ là số nguyên tố.
5. [CF 1475A - Odd Divisor](https://codeforces.com/problemset/problem/1475/A) (Rating 900)
   * *Nhận xét:* Một số có ước lẻ $>1$ khi và chỉ khi nó không phải là lũy thừa của 2: `(n & (n - 1)) != 0`.

---

## 5. THUẬT TOÁN THAM LAM & BẤT ĐẲNG THỨC SẮP XẾP (GREEDY & SORTING)
* **Phân hạng:** `Pupil ➔ Specialist (1100 - 1500)`
* **Bản chất thuật toán:**
  * Tại mỗi bước, lựa chọn phương án tối ưu cục bộ với kỳ vọng đạt được tối ưu toàn cục.
  * **Kỹ thuật chứng minh Exchange Argument:** Giả sử nghiệm tối ưu có thứ tự khác, chứng minh rằng hoán đổi hai phần tử liền kề nghịch thế luôn cho kết quả tốt hơn hoặc bằng.
* **Lưu ý bẫy cài đặt:** Tham lam rất dễ tạo ra thuật toán sai (heuristic giả). Luôn chứng minh tính chất lựa chọn tham lam trước khi nộp.
* **Tài liệu Codeforces Blog:**
  * [Thinking about Greedy Algorithms](https://codeforces.com/blog/entry/92661)
  * [Sorting & Custom Comparators in C++](https://codeforces.com/blog/entry/71234)

### 📌 Danh sách bài tập phân cấp:
1. [CF 405A - Gravity Flip](https://codeforces.com/problemset/problem/405/A) (Rating 900)
   * *Nhận xét:* Trực quan hóa việc sắp xếp mảng theo thứ tự tăng dần.
2. [CF 118A - String Task](https://codeforces.com/problemset/problem/118/A) (Rating 1000)
   * *Nhận xét:* Xử lý ký tự theo điều kiện tham lam tuần tự.
3. [CF 1335C - Two Teams Composing](https://codeforces.com/problemset/problem/1335/C) (Rating 1100)
   * *Nhận xét:* Cân bằng số phần tử phân biệt và số phần tử trùng nhau bằng đếm tần số.
4. [CF 1360D - Buying Shovels](https://codeforces.com/problemset/problem/1360/D) (Rating 1300)
   * *Nhận xét:* Tham lam tìm ước lớn nhất của $N$ mà $\le K$ bằng cách duyệt tới $\sqrt{N}$.
5. [CF 1490C - Sum of Cubes](https://codeforces.com/problemset/problem/1490/C) (Rating 1100)
   * *Nhận xét:* Duyệt $a$, kiểm tra xem $x - a^3$ có phải lập phương của một số nguyên không qua set/binary search.

---

## 6. DUYỆT ĐỒ THỊ CƠ BẢN: BFS, DFS & ĐỒ THỊ TRÊN LƯỚI (GRAPHS & GRIDS)
* **Phân hạng:** `Pupil ➔ Specialist (1200 - 1500)`
* **Bản chất thuật toán:**
  * **DFS (Depth-First Search):** Duyệt sâu với đệ quy hoặc ngăn xếp; dùng xác định thành phần liên thông, chu trình, kiểm tra tính liên thông hai chiều.
  * **BFS (Breadth-First Search):** Duyệt theo từng lớp khoảng cách bằng hàng đợi (`queue`); **đảm bảo tìm đường đi ngắn nhất** trên đồ thị có trọng số các cạnh đều bằng nhau (hoặc bằng 1).
* **Độ phức tạp:** $O(V + E)$ thời gian, $O(V)$ không gian bộ nhớ.
* **Lưu ý bẫy cài đặt:**
  * Lỗi đệ quy tràn bộ nhớ (Stack Overflow) khi $V \ge 2 \cdot 10^5$: tăng stack hoặc dùng khử đệ quy.
  * Đánh dấu mảng `visited[u] = true` ngay khi đẩy vào queue trong BFS (tránh lặp vô hạn).
* **Tài liệu Codeforces Blog:**
  * [Graph Theory Part 1: DFS & BFS Fundamentals](https://codeforces.com/blog/entry/68138)
  * [DFS and BFS on 2D Grids](https://codeforces.com/blog/entry/73618)

### 📌 Danh sách bài tập phân cấp:
1. [CF 520B - Two Buttons](https://codeforces.com/problemset/problem/520/B) (Rating 1400)
   * *Nhận xét:* Mô hình hóa thành bài toán đường đi ngắn nhất bằng BFS từ $n$ đến $m$, hoặc tham lam đi ngược từ $m$ về $n$.
2. [CF 500A - New Year Transportation](https://codeforces.com/problemset/problem/500/A) (Rating 1000)
   * *Nhận xét:* Duyệt DFS đơn giản trên đường đi có hướng đơn tuyến.
3. [CF 1033A - King Escape](https://codeforces.com/problemset/problem/1033/A) (Rating 1000)
   * *Nhận xét:* Kiểm tra vị trí vua và quân hậu trên cùng một góc phần tư bằng DFS hoặc so sánh tọa độ trực tiếp.
4. [CF 115A - Party](https://codeforces.com/problemset/problem/115/A) (Rating 900)
   * *Nhận xét:* Rừng cây phân cấp; đáp án là chiều cao lớn nhất của cây qua duyệt DFS tính độ sâu.
5. [CF 580C - Kefa and Park](https://codeforces.com/problemset/problem/580/C) (Rating 1500)
   * *Nhận xét:* DFS trên cây đếm số nút lá hợp lệ, duy trì biến đếm số lượng mèo liên tiếp trên đường đi từ gốc.

---

## 7. CẤU TRÚC TẬP HỢP RỜI RẠC (DISJOINT SET UNION - DSU)
* **Phân hạng:** `Specialist (1300 - 1600)`
* **Bản chất thuật toán:**
  * Quản lý phân hoạch của một tập hợp thành các tập con không giao nhau với hai thao tác:
    1. `find(u)`: Tìm đại diện của tập hợp chứa $u$.
    2. `unite(u, v)`: Gộp hai tập hợp chứa $u$ và $v$.
  * **Hai kỹ thuật tối ưu hóa then chốt:**
    * *Nén đường đi (Path Compression):* `parent[u] = find(parent[u])`.
    * *Gộp theo kích thước/hạng (Union by Rank/Size):* Gộp cây nhỏ vào cây lớn hơn.
* **Độ phức tạp:** $O(\alpha(N))$ cho mỗi thao tác, trong đó $\alpha$ là hàm Ackermann đảo (trên thực tế $\alpha(N) \le 4$, coi như hằng số $O(1)$).
* **Tài liệu Codeforces Blog:**
  * [Codeforces Edu: Disjoint Sets Union (Step 1 - 3)](https://codeforces.com/edu/course/2/lesson/7)
  * [DSU: From basics to Rollback & Bipartiteness](https://codeforces.com/blog/entry/73643)

### 📌 Danh sách bài tập phân cấp:
1. [CF 25D - Roads not only in Berland](https://codeforces.com/problemset/problem/25/D) (Rating 1700)
   * *Nhận xét:* DSU phát hiện các cạnh tạo chu trình thừa và gộp các thành phần liên thông rời rạc.
2. [CF 1167C - News Distribution](https://codeforces.com/problemset/problem/1167/C) (Rating 1400)
   * *Nhận xét:* Gộp các bạn trong cùng một nhóm trò chuyện, đáp án là kích thước tập hợp `sz[find(u)]`.
3. [CF 1213G - Path Queries](https://codeforces.com/problemset/problem/1213/G) (Rating 1800)
   * *Nhận xét:* Sắp xếp truy vấn và các cạnh theo trọng số tăng dần, dùng DSU gộp đỉnh và tính số cặp đỉnh mới: $\frac{sz_u \times sz_v}{2}$.
4. [CF 1559D1 - Mocha and Diana (Easy Version)](https://codeforces.com/problemset/problem/1559/D1) (Rating 1400)
   * *Nhận xét:* Duyệt mọi cặp $(u, v)$, nếu chưa liên thông trên cả 2 rừng DSU thì tiến hành nối cạnh.

---

## 8. QUY HOẠCH ĐỘNG CƠ BẢN (DP: 1D, 2D, LCS, LIS & KNAPSACK)
* **Phân hạng:** `Specialist (1300 - 1600)`
* **Bản chất thuật toán:**
  * Giải bài toán lớn bằng cách kết hợp lời giải của các bài toán con gối nhau (Overlapping Subproblems) và có cấu trúc con tối ưu (Optimal Substructure).
  * Các bước chuẩn mực:
    1. Định nghĩa trạng thái $DP[\dots]$.
    2. Xác định bài toán cơ sở (Base cases).
    3. Xây dựng công thức chuyển trạng thái (Transitions).
    4. Thứ tự tính toán (Topological ordering/Loops).
* **Tài liệu Codeforces Blog:**
  * [Dynamic Programming for Beginners (by Errichto)](https://codeforces.com/blog/entry/67679)
  * [Comprehensive DP Tutorial on Codeforces](https://codeforces.com/blog/entry/43256)

### 📌 Danh sách bài tập phân cấp:
1. [CF 702A - Maximum Increase](https://codeforces.com/problemset/problem/702/A) (Rating 800)
   * *Nhận xét:* DP 1D tìm độ dài dãy con tăng liên tiếp dài nhất.
2. [CF 455A - Boredom](https://codeforces.com/problemset/problem/455/A) (Rating 1500)
   * *Nhận xét:* Mô hình tương tự House Robber: chọn số $x$ thì không được chọn $x-1$ và $x+1$. $DP[i] = \max(DP[i-1], DP[i-2] + i \times \text{count}[i])$.
3. [CF 118D - Caesar's Legions](https://codeforces.com/problemset/problem/118/D) (Rating 1600)
   * *Nhận xét:* DP đa chiều duy trì số kỵ binh, bộ binh và số lượng liên tiếp hiện tại.
4. [CF 474D - Flowers](https://codeforces.com/problemset/problem/474/D) (Rating 1500)
   * *Nhận xét:* $DP[i] = DP[i-1] + DP[i-k]$, kết hợp Prefix Sum để trả lời truy vấn đoạn $[a, b]$ trong $O(1)$.
5. [CF 1338A - Powered Addition](https://codeforces.com/problemset/problem/1338/A) (Rating 1500)
   * *Nhận xét:* Tìm độ lệch âm lớn nhất giữa các phần tử cực đại trước đó và giá trị hiện tại, biểu diễn nhị phân.

---

## 9. ĐỒ THỊ CÓ HƯỚNG KHÔNG CHU TRÌNH & SẮP XẾP TÔ-PÔ (DAG & TOPOLOGICAL SORT)
* **Phân hạng:** `Specialist ➔ Expert (1400 - 1700)`
* **Bản chất thuật toán:**
  * Thứ tự tuyến tính của các đỉnh sao cho với mọi cạnh có hướng $u \to v$, $u$ luôn xuất hiện trước $v$.
  * **Thuật toán Kahn (Bằng bậc vào - In-degree):**
    1. Đếm bán bậc vào $\text{in}[u]$ cho mọi đỉnh.
    2. Đẩy các đỉnh có $\text{in}[u] = 0$ vào hàng đợi.
    3. Rút đỉnh từ hàng đợi, giảm bậc vào của các đỉnh kề; nếu đỉnh nào có bậc vào về 0 thì đẩy vào hàng đợi.
  * Nếu số đỉnh duyệt được $< V$, đồ thị có chứa **chu trình**.
* **Độ phức tạp:** $O(V + E)$.
* **Tài liệu Codeforces Blog:**
  * [Topological Sorting and DAG DP Tutorial](https://codeforces.com/blog/entry/81258)
  * [Graph cycle detection techniques](https://codeforces.com/blog/entry/73643)

### 📌 Danh sách bài tập phân cấp:
1. [CF 510C - Fox And Names](https://codeforces.com/problemset/problem/510/C) (Rating 1500)
   * *Nhận xét:* So sánh các từ liền kề để dựng đồ thị thứ tự chữ cái, sắp xếp tô-pô để tìm bảng chữ cái hợp lệ.
2. [CF 919D - Substring](https://codeforces.com/problemset/problem/919/D) (Rating 1700)
   * *Nhận xét:* Phát hiện chu trình bằng Tô-pô; nếu là DAG thì DP tính tần suất ký tự cực đại trên đường đi.
3. [CF 1385E - Directing Edges](https://codeforces.com/problemset/problem/1385/E) (Rating 1900)
   * *Nhận xét:* Sắp xếp tô-pô trên đồ thị có hướng con, sau đó định hướng các cạnh vô hướng theo thứ tự tô-pô tăng dần.
4. [CF 721C - Journey](https://codeforces.com/problemset/problem/721/C) (Rating 1800)
   * *Nhận xét:* DP trên DAG: $DP[u][k]$ là thời gian ngắn nhất đi từ 1 đến $u$ qua đúng $k$ đỉnh.

---

## 10. ĐƯỜNG ĐI NGẮN NHẤT: DIJKSTRA, 0-1 BFS & FLOYD-WARSHALL
* **Phân hạng:** `Specialist ➔ Expert (1400 - 1700)`
* **Bản chất thuật toán:**
  * **Dijkstra:** Tìm đường đi ngắn nhất từ một nguồn trên đồ thị có trọng số không âm bằng hàng đợi ưu tiên `std::priority_queue`. Độ phức tạp $O((V + E) \log V)$.
  * **0-1 BFS:** Khi trọng số các cạnh chỉ nhận giá trị $0$ hoặc $1$, dùng `std::deque`: cạnh trọng số 0 đẩy vào đầu (`push_front`), cạnh trọng số 1 đẩy vào đuôi (`push_back`). Độ phức tạp tối ưu $O(V + E)$.
  * **Floyd-Warshall:** Tìm đường đi ngắn nhất giữa mọi cặp đỉnh trong đồ thị qua 3 vòng lặp $O(V^3)$.
* **Lưu ý bẫy cài đặt:** Dijkstra không áp dụng được cho đồ thị có trọng số âm; mảng khoảng cách `dist` phải khởi tạo vô cùng lớn (`1e18`) với `long long`.
* **Tài liệu Codeforces Blog:**
  * [Dijkstra's Algorithm Tutorial and Optimizations](https://codeforces.com/blog/entry/73643)
  * [0-1 BFS Tutorial with Codeforces Problems](https://codeforces.com/blog/entry/88408)

### 📌 Danh sách bài tập phân cấp:
1. [CF 20C - Dijkstra?](https://codeforces.com/problemset/problem/20/C) (Rating 1500)
   * *Nhận xét:* Bài tập kinh điển: Dijkstra lưu vết đường đi (`parent`) từ đỉnh 1 đến đỉnh $N$.
2. [CF 1063B - Labyrinth](https://codeforces.com/problemset/problem/1063/B) (Rating 1800)
   * *Nhận xét:* Di chuyển trái/phải trên lưới ma trận quy đổi thành 0-1 BFS tối ưu số bước rẽ trái.
3. [CF 59E - Shortest Path](https://codeforces.com/problemset/problem/59/E) (Rating 1900)
   * *Nhận xét:* Trạng thái Dijkstra trên cạnh: $dist(u, v)$ là khoảng cách ngắn nhất đến đỉnh $v$ thông qua đỉnh $u$ để tránh bộ 3 cấm $(a, b, c)$.
4. [CF 449B - Jzzhu and Cities](https://codeforces.com/problemset/problem/449/B) (Rating 2000)
   * *Nhận xét:* Đa nguồn đường sắt và đường bộ, Dijkstra kiểm tra tuyến tàu hỏa nào có thể bị loại bỏ.

---

## 11. SỐ HỌC MODULAR & TỔ HỢP NÂNG CAO (COMBINATORICS & MODULAR ARITHMETIC)
* **Phân hạng:** `Expert (1500 - 1800)`
* **Bản chất thuật toán:**
  * **Nghịch đảo Modular (Modular Inverse):** Theo định lý Fermat nhỏ, nếu $M$ là số nguyên tố thì $a^{-1} \equiv a^{M-2} \pmod M$.
  * **Tổ hợp $C(N, K)$:** $C(N, K) = \frac{N!}{K!(N-K)!} \pmod M$. Tiền xử lý giai thừa $\text{fact}[i]$ và nghịch đảo giai thừa $\text{invFact}[i]$ trong $O(N)$ để tính mỗi tổ hợp trong $O(1)$.
  * **Công thức Sao và Vạch (Stars and Bars):** Phân chia $N$ đồ vật vào $K$ nhóm.
* **Tài liệu Codeforces Blog:**
  * [Combinatorics in Competitive Programming by Errichto](https://codeforces.com/blog/entry/78584)
  * [Fermat's Little Theorem and Modulo Arithmetic](https://codeforces.com/blog/entry/72527)

### 📌 Danh sách bài tập phân cấp:
1. [CF 1284B - New Year and Ascent Sequence](https://codeforces.com/problemset/problem/1284/B) (Rating 1400)
   * *Nhận xét:* Bù trừ logic tổ hợp: Đếm số cặp không thỏa mãn và lấy tổng số cặp $N^2$ trừ đi.
2. [CF 300C - Beautiful Numbers](https://codeforces.com/problemset/problem/300/C) (Rating 1600)
   * *Nhận xét:* Duyệt số lần xuất hiện của chữ số $a$, tính tổng các chữ số và dùng $C(N, k) \pmod{10^9+7}$.
3. [CF 1328E - Tree Queries](https://codeforces.com/problemset/problem/1328/E) (Rating 1900)
   * *Nhận xét:* Tổ hợp và tính chất bao hàm tổ tiên: Chọn đỉnh sâu nhất và kiểm tra mọi đỉnh còn lại có cách đường đi $\le 1$ bước hay không.
4. [CF 559C - Gerald and Giant Chess](https://codeforces.com/problemset/problem/559/C) (Rating 2000)
   * *Nhận xét:* DP kết hợp nguyên lý bù trừ và tổ hợp đường đi trên lưới tránh các ô cấm.

---

## 12. QUY HOẠCH ĐỘNG BITMASK (BIT MANIPULATION & BITMASK DP)
* **Phân hạng:** `Expert (1600 - 1900)`
* **Bản chất thuật toán:**
  * Đại diện cho một tập con của $N$ phần tử bằng số nguyên nhị phân độ dài $N$ (với $N \le 20$).
  * Phép toán bit cơ bản:
    * Bật bit thứ $i$: `mask | (1 << i)`
    * Tắt bit thứ $i$: `mask & ~(1 << i)`
    * Kiểm tra bit thứ $i$: `(mask >> i) & 1`
    * Duyệt tập con: `for (int sub = mask; sub > 0; sub = (sub - 1) & mask)`
* **Độ phức tạp:** Thường là $O(2^N \times N)$ hoặc $O(3^N)$ khi duyệt mọi tập con của mọi mask.
* **Tài liệu Codeforces Blog:**
  * [Bitmask DP from scratch to advanced](https://codeforces.com/blog/entry/45132)
  * [SOS DP (Sum Over Subsets DP) Tutorial](https://codeforces.com/blog/entry/45223)

### 📌 Danh sách bài tập phân cấp:
1. [CF 550B - Preparing Olympiad](https://codeforces.com/problemset/problem/550/B) (Rating 1400)
   * *Nhận xét:* Duyệt toàn bộ $2^n$ tập con bằng bitmask với $n \le 15$ để kiểm tra giới hạn độ khó.
2. [CF 476B - Dreamoon and WiFi](https://codeforces.com/problemset/problem/476/B) (Rating 1300)
   * *Nhận xét:* Duyệt toàn bộ phân bổ dấu `+` và `-` cho các dấu `?` chưa biết.
3. [CF 1101E - Polycarp's New Job](https://codeforces.com/problemset/problem/1101/E) (Rating 1200)
   * *Nhận xét:* Tối ưu hóa kiểm tra điều kiện hình chữ nhật qua hoán vị kích thước.
4. [CF 165E - Compatible Numbers](https://codeforces.com/problemset/problem/165/E) (Rating 2200)
   * *Nhận xét:* SOS DP (Sum Over Subsets) tìm số có bitmask bù đảo `~x`.

---

## 13. CÂY CHỈ SỐ NHỊ PHÂN (BINARY INDEXED TREE / FENWICK TREE)
* **Phân hạng:** `Expert (1600 - 1900)`
* **Bản chất thuật toán:**
  * Cấu trúc dữ liệu cực kỳ gọn nhẹ quản lý tổng tiền tố và cập nhật phần tử đơn vị trong $O(\log N)$.
  * Phép toán then chốt: `lowbit(x) = x & (-x)` lấy bit 1 nhỏ nhất của $x$.
    * Cập nhật điểm: `for (; x <= n; x += x & -x) tree[x] += val;`
    * Truy vấn tiền tố: `for (; x > 0; x -= x & -x) sum += tree[x];`
* **Ưu điểm:** Bộ nhớ $O(N)$ tối thiểu, code chỉ khoảng 10 dòng, hằng số thực thi siêu nhanh so với Segment Tree.
* **Tài liệu Codeforces Blog:**
  * [Fenwick Tree / Binary Indexed Tree Comprehensive Guide](https://codeforces.com/blog/entry/61364)
  * [Inversion Count and 2D Fenwick Tree](https://codeforces.com/blog/entry/64914)

### 📌 Danh sách bài tập phân cấp:
1. [CF 276C - Little Girl and Maximum Sum](https://codeforces.com/problemset/problem/276/C) (Rating 1500)
   * *Nhận xét:* Đếm tần suất phủ của các truy vấn đoạn bằng Difference Array hoặc Fenwick Tree.
2. [CF 652D - Nested Segments](https://codeforces.com/problemset/problem/652/D) (Rating 1800)
   * *Nhận xét:* Nén tọa độ, sắp xếp các đoạn theo đầu mút phải, dùng Fenwick Tree đếm số đoạn lọt thỏm bên trong.
3. [CF 1042D - Petya and Array](https://codeforces.com/problemset/problem/1042/D) (Rating 1800)
   * *Nhận xét:* Đếm số đoạn con có tổng $< t \iff P[r] - P[l-1] < t$. Nén giá trị và đếm bằng Fenwick Tree.

---

## 14. CÂY PHÂN ĐOẠN CƠ BẢN (SEGMENT TREE - POINT UPDATE & RANGE QUERY)
* **Phân hạng:** `Expert (1600 - 2000)`
* **Bản chất thuật toán:**
  * Cây nhị phân đầy đủ quản lý thông tin các đoạn con $[L, R]$. Nút gốc quản lý toàn bộ mảng $[1, N]$.
  * Hỗ trợ cập nhật một phần tử (Point Update) và truy vấn trên đoạn (Range Query) cho các hàm có tính kết hợp như $\min, \max, \gcd, \text{sum}$ trong thời gian $O(\log N)$.
* **Độ phức tạp:** Dựng cây $O(N)$, mỗi truy vấn $O(\log N)$, bộ nhớ $4N$.
* **Tài liệu Codeforces Blog:**
  * [Codeforces Edu: Segment Tree Part 1 (Step 1 - 4)](https://codeforces.com/edu/course/2/lesson/4)
  * [Segment Tree from beginner to master](https://codeforces.com/blog/entry/18051)

### 📌 Danh sách bài tập phân cấp:
1. [CF 339D - Xenia and Bitwise Operations](https://codeforces.com/problemset/problem/339/D) (Rating 1700)
   * *Nhận xét:* Dựng cây Segment Tree với các tầng đan xen phép toán `OR` và `XOR`.
2. [CF 380C - Sereja and Brackets](https://codeforces.com/problemset/problem/380/C) (Rating 2000)
   * *Nhận xét:* Lưu trữ tại mỗi nút: số cặp ngoặc đúng, số ngoặc mở thừa, số ngoặc đóng thừa. Phép gộp nút (Merge) trong $O(1)$.
3. [CF 459D - Pashmak and Parmida's problem](https://codeforces.com/problemset/problem/459/D) (Rating 1800)
   * *Nhận xét:* Tiền xử lý tần suất tiền tố và hậu tố, đếm nghịch thế bằng Fenwick Tree hoặc Segment Tree.

---

## 15. SEGMENT TREE CẬP NHẬT ĐOẠN LƯỜI (LAZY PROPAGATION)
* **Phân hạng:** `Expert ➔ Candidate Master (1700 - 2100)`
* **Bản chất thuật toán:**
  * Khi cập nhật giá trị trên một đoạn $[u, v]$, thay vì đi xuống tất cả các lá ($O(N)$), ta chỉ cập nhật các nút bao trọn đoạn con và lưu giá trị cập nhật treo tại nhãn `lazy[node]`.
  * Khi duyệt xuống các nút con trong các truy vấn tiếp theo, ta "đẩy" (pushdown) giá trị lazy xuống 2 con trực tiếp.
* **Độ phức tạp:** $O(\log N)$ cho cả Range Update và Range Query.
* **Tài liệu Codeforces Blog:**
  * [Codeforces Edu: Segment Tree Part 2 (Lazy Propagation)](https://codeforces.com/edu/course/2/lesson/5)
  * [Efficient and clean implementation of Lazy Segment Tree](https://codeforces.com/blog/entry/22616)

### 📌 Danh sách bài tập phân cấp:
1. [CF 52C - Circular RMQ](https://codeforces.com/problemset/problem/52/C) (Rating 2200)
   * *Nhận xét:* Xử lý đoạn xoay vòng tròn: nếu $l > r$ thì tách thành hai đoạn $[l, n-1]$ và $[0, r]$ cập nhật lazy.
2. [CF 292E - Copying Data](https://codeforces.com/problemset/problem/292/E) (Rating 1900)
   * *Nhận xét:* Gán đoạn truy vấn thời gian gần nhất lên mảng đích bằng Segment Tree cập nhật gán.
3. [CF 145E - Lucky Queries](https://codeforces.com/problemset/problem/145/E) (Rating 2400)
   * *Nhận xét:* Cập nhật đảo số 4 và 7 trên đoạn; lazy lưu cờ đảo ngược (`flip`).

---

## 16. QUY HOẠCH ĐỘNG TRÊN CÂY & ĐỔI GỐC (TREE DP & REROOTING)
* **Phân hạng:** `Candidate Master (1700 - 2200)`
* **Bản chất thuật toán:**
  * **Tree DP cơ bản:** Định nghĩa $DP[u]$ tính dựa trên các con $v$ của $u$ thông qua duyệt DFS hậu thứ tự (Post-order).
  * **Kỹ thuật Đổi gốc (Rerooting):**
    * *Pass 1 (Bottom-up DFS):* Tính kết quả cho bài toán khi cố định gốc tại đỉnh 1.
    * *Pass 2 (Top-down DFS):* Khi dịch chuyển gốc từ cha $u$ sang con $v$, cập nhật lại kết quả cho $v$ trong $O(1)$ bằng cách loại bỏ đóng góp của $v$ khỏi $u$. Cho phép tìm đáp án cho mọi gốc trong $O(N)$.
* **Tài liệu Codeforces Blog:**
  * [Dynamic Programming on Trees Tutorial](https://codeforces.com/blog/entry/20935)
  * [Tree DP: Rerooting Technique Explained](https://codeforces.com/blog/entry/68774)

### 📌 Danh sách bài tập phân cấp:
1. [CF 1324F - Maximum White Subtree](https://codeforces.com/problemset/problem/1324/F) (Rating 1800)
   * *Nhận xét:* Bài tập kinh điển về Rerooting: Tìm cây con liên thông chứa đỉnh $u$ có hiệu số đỉnh trắng - đen lớn nhất.
2. [CF 1187E - Tree Painting](https://codeforces.com/problemset/problem/1187/E) (Rating 2100)
   * *Nhận xét:* Tính tổng kích thước các cây con khi đổi gốc từ cha sang con: $\Delta = N - 2 \cdot sz_v$.
3. [CF 1083A - The Fair Nut and the Best Path](https://codeforces.com/problemset/problem/1083/A) (Rating 2100)
   * *Nhận xét:* DP cây tìm đường đi có trọng số xăng lớn nhất, lưu giữ 2 nhánh con có giá trị lớn nhất.

---

## 17. TỔ TIÊN CHUNG GẦN NHẤT (LCA) & KỸ THUẬT EULER TOUR
* **Phân hạng:** `Candidate Master ➔ Master (1800 - 2200)`
* **Bản chất thuật toán:**
  * **Binary Lifting (Nhảy nhị phân):** Lưu $up[u][j]$ là tổ tiên thứ $2^j$ của đỉnh $u$. Cho phép tìm $\text{LCA}(u, v)$ và khoảng cách giữa hai đỉnh trong $O(\log N)$.
  * **Euler Tour Technique:** Trải phẳng cây thành mảng 1D bằng thứ tự vào/ra của DFS (`tin[u], tout[u]`).
    * $v$ nằm trong cây con của $u \iff tin[u] \le tin[v] \le tout[u]$.
    * Biến thao tác trên cây con thành thao tác trên đoạn con $[tin[u], tout[u]]$.
* **Tài liệu Codeforces Blog:**
  * [Binary Lifting & LCA Tutorial](https://codeforces.com/blog/entry/22325)
  * [Euler Tour Technique & Subtree Queries](https://codeforces.com/blog/entry/18051)

### 📌 Danh sách bài tập phân cấp:
1. [CF 208E - Blood Cousins](https://codeforces.com/problemset/problem/208/E) (Rating 2000)
   * *Nhận xét:* Nhảy nhị phân tìm tổ tiên thứ $k$, sau đó dùng Euler Tour + Binary Search đếm số anh em họ cùng độ sâu.
2. [CF 1051F - The Shortest Statement](https://codeforces.com/problemset/problem/1051/F) (Rating 2300)
   * *Nhận xét:* Đồ thị có ít hơn $V + 21$ cạnh. Dựng cây khung dùng LCA, chạy Dijkstra từ 42 đỉnh đặc biệt còn lại.
3. [CF 1702G2 - Passable Paths (Hard Version)](https://codeforces.com/problemset/problem/1702/G2) (Rating 1900)
   * *Nhận xét:* Kiểm tra tập đỉnh có cùng nằm trên một đường đi đơn bằng cách sắp xếp theo độ sâu và tính LCA.

---

## 18. XỬ LÝ CHUỖI: STRING HASHING, Z-ALGORITHM & KMP
* **Phân hạng:** `Candidate Master ➔ Master (1800 - 2300)`
* **Bản chất thuật toán:**
  * **Rolling Hash:** Ánh xạ chuỗi thành số nguyên: $H(S) = \sum S[i] \cdot B^i \pmod M$. Cho phép so sánh hai chuỗi con trong $O(1)$. Nên dùng Double Hash ($M_1 = 10^9+7, M_2 = 10^9+9$) để chống test phản ví dụ (anti-hash tests).
  * **Z-Algorithm / KMP:** Tiền xử lý mảng tiền tố trong $O(N)$ để so khớp mẫu trong thời gian tuyến tính $O(N + M)$ không cần xác suất.
* **Tài liệu Codeforces Blog:**
  * [String Hashing and Anti-Hash Test Prevention](https://codeforces.com/blog/entry/60445)
  * [KMP and Z-Algorithm Illustrated](https://codeforces.com/blog/entry/3107)

### 📌 Danh sách bài tập phân cấp:
1. [CF 126B - Password](https://codeforces.com/problemset/problem/126/B) (Rating 1700)
   * *Nhận xét:* KMP mảng $\pi$ hoặc Z-Algorithm tìm chuỗi con vừa là tiền tố, vừa là hậu tố, vừa xuất hiện ở giữa.
2. [CF 432D - Prefixes and Suffixes](https://codeforces.com/problemset/problem/432/D) (Rating 1900)
   * *Nhận xét:* Z-algorithm kết hợp mảng đếm tần suất hậu tố để đếm số lần xuất hiện của các tiền tố trùng hậu tố.
3. [CF 271D - Good Substrings](https://codeforces.com/problemset/problem/271/D) (Rating 1600)
   * *Nhận xét:* Đếm số lượng chuỗi con phân biệt không quá $k$ ký tự xấu bằng Hashing hoặc Trie.

---

## 19. THÀNH PHẦN LIÊN THÔNG MẠNH & CẦU / KHỚP (TARJAN & KOSARAJU)
* **Phân hạng:** `Master ➔ Grandmaster (1900 - 2400)`
* **Bản chất thuật toán:**
  * **Cầu và Khớp (Bridges & Articulation Points):** Dựa trên cây DFS, duy trì nhãn thời gian thăm `tin[u]` và nút có thời gian thăm nhỏ nhất vươn tới được `low[u]`.
    * Cạnh $(u, v)$ là Cầu $\iff low[v] > tin[u]$.
    * Đỉnh $u$ là Khớp $\iff low[v] \ge tin[u]$ (với nút gốc cần $\ge 2$ nhánh con).
  * **Thành phần liên thông mạnh (SCC - Strongly Connected Components):** Thu nhỏ đồ thị có hướng chứa các chu trình thành một DAG (Condensation Graph).
* **Tài liệu Codeforces Blog:**
  * [Finding Bridges and Articulation Points in O(N + M)](https://codeforces.com/blog/entry/68138)
  * [Tarjan's and Kosaraju's Algorithms for SCC](https://codeforces.com/blog/entry/16205)

### 📌 Danh sách bài tập phân cấp:
1. [CF 427C - Checkposts](https://codeforces.com/problemset/problem/427/C) (Rating 1700)
   * *Nhận xét:* Tìm các SCC, tại mỗi SCC chọn các trạm kiểm soát có chi phí rẻ nhất và nhân số cách theo quy tắc nhân.
2. [CF 1000E - We Need More Bosses](https://codeforces.com/problemset/problem/1000/E) (Rating 2100)
   * *Nhận xét:* Nén đồ thị bằng cách co các thành phần liên thông 2-cạnh (Bridge Block Tree), đường kính của cây là đáp án.
3. [CF 1137B - Camp Schedule](https://codeforces.com/problemset/problem/1137/B) (Rating 1600)
   * *Nhận xét:* Tận dụng tiền tố trùng hậu tố dài nhất qua KMP để tham lam ghép chuỗi lặp lại nhiều nhất.

---

## 20. LUỒNG CỰC ĐẠI & LÁT CẮT HẸP NHẤT (MAX FLOW - DINIC'S ALGORITHM & MIN CUT)
* **Phân hạng:** `Master ➔ Grandmaster (2000 - 2500)`
* **Bản chất thuật toán:**
  * **Định lý Max-Flow Min-Cut:** Giá trị luồng cực đại từ $S$ đến $T$ luôn bằng dung lượng của lát cắt nhỏ nhất chia cắt $S$ và $T$.
  * **Thuật toán Dinic:** Kết hợp chia tầng bằng BFS (Level Graph) và đẩy luồng triệt để bằng DFS (Blocking Flow).
  * **Độ phức tạp:** $O(V^2 E)$ tổng quát, nhưng trên mạng đơn vị hoặc đồ thị hai phía cực nhanh: $O(E \sqrt{V})$.
* **Ứng dụng kinh điển:**
  * Cặp ghép cực đại trên đồ thị hai phía (Maximum Bipartite Matching).
  * Bài toán phân công công việc, bài toán chia cắt dự án với chi phí tối thiểu.
* **Tài liệu Codeforces Blog:**
  * [Maximum Flow: Dinic's Algorithm with proofs and code](https://codeforces.com/blog/entry/64504)
  * [Flows & Cuts Modeling: From basic to Project Selection](https://codeforces.com/blog/entry/70212)

### 📌 Danh sách bài tập phân cấp:
1. [CF 1082G - Petya and Graph](https://codeforces.com/problemset/problem/1082/G) (Rating 2400)
   * *Nhận xét:* Bài toán chọn dự án (Project Selection Problem) quy đổi chuẩn về lát cắt cực tiểu (Min-Cut) giải bằng Dinic.
2. [CF 653D - Delivery Bears](https://codeforces.com/problemset/problem/653/D) (Rating 2300)
   * *Nhận xét:* Chặt nhị phân khối lượng hàng $x$ mỗi chú gấu có thể mang, kiểm tra bằng thuật toán Max Flow xem có đẩy đủ $k$ gấu hay không.
3. [CF 1416D - Graph and Queries](https://codeforces.com/problemset/problem/1416/D) (Rating 2300)
   * *Nhận xét:* Cây DSU Kruskal kết hợp Euler Tour và Segment Tree truy vấn giá trị lớn nhất trong thành phần liên thông theo thời gian.

---

## 📈 KẾ HOẠCH LUYỆN TẬP ĐỀ XUẤT THEO TUẦN (ACTION PLAN)

```
Giai đoạn 1: Xây móng (Tuần 1 - Tuần 4)
├── Tuần 1: Mảng cộng dồn, Mảng hiệu & Hai con trỏ
├── Tuần 2: Tìm kiếm nhị phân & Chặt nhị phân kết quả
├── Tuần 3: Sàng nguyên tố & Số học cơ bản
└── Tuần 4: Tham lam & Sắp xếp biến đổi

Giai đoạn 2: Luyện nội công (Tuần 5 - Tuần 8)
├── Tuần 5: DFS / BFS đồ thị và ma trận lưới
├── Tuần 6: DSU & Cây khung nhỏ nhất
├── Tuần 7: Quy hoạch động 1D / 2D cổ điển
└── Tuần 8: Sắp xếp Tô-pô & Dijkstra

Giai đoạn 3: Bứt phá Specialist ➔ Expert (Tuần 9 - Tuần 12)
├── Tuần 9: Tổ hợp & Nghịch đảo Modular
├── Tuần 10: Quy hoạch động Bitmask
├── Tuần 11: Fenwick Tree (BIT)
└── Tuần 12: Segment Tree & Lazy Propagation

Giai đoạn 4: Chinh phục Master & GM (Tuần 13+)
├── Tuần 13: Tree DP & Rerooting
├── Tuần 14: LCA, Binary Lifting & Euler Tour
├── Tuần 15: String Hashing & Z-Algorithm / KMP
└── Tuần 16: Cầu/Khớp/SCC Tarjan & Max Flow Dinic
```

---
*Tài liệu được biên soạn đồng bộ với nền tảng CPSuggestor để người học có thể đối chiếu mã bài, luyện tập trực tiếp và nhận gợi ý tư duy tự động từ Gemini AI.*

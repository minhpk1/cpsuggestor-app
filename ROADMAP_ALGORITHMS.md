# BẢN ĐỒ LỘ TRÌNH THUẬT TOÁN COMPETITIVE PROGRAMMING (NEWBIE ➔ GRANDMASTER)
> **Dành cho Luyện thi Codeforces & Đội tuyển Olympic Tin học Quốc tế (VNOI / IOI)**
> Tuyển tập 31 thuật toán cốt lõi với 310 bài tập Codeforces kinh điển được phân cấp sư phạm chi tiết từ thông hiểu thuần túy đến vận dụng nâng cao.

---

## 🗺️ BẢNG TỔNG QUAN PHÂN CẤP 5 GIAI ĐOẠN & 31 THUẬT TOÁN

| Giai đoạn | Rating Codeforces | Danh mục thuật toán & Kỹ thuật |
|---|---|---|
| **Phase 1: Foundation (Newbie ➔ Pupil)** | `< 1200 - 1399` | 1. Mảng cộng dồn (Prefix Sum) & Mảng hiệu (Difference Array)<br>2. Hai con trỏ (Two Pointers) & Cửa sổ trượt (Sliding Window)<br>3. Tìm kiếm nhị phân & Chặt nhị phân kết quả<br>4. Sàng nguyên tố Eratosthenes, SPF & Số học cơ bản<br>5. Tham lam (Greedy) & Bất đẳng thức sắp xếp (Exchange Argument) |
| **Phase 2: Intermediate (Pupil ➔ Specialist)** | `1200 - 1599` | 6. Duyệt đồ thị DFS/BFS & Đồ thị trên ma trận lưới<br>7. Cấu trúc tập hợp rời rạc (DSU - Disjoint Set Union)<br>8. Quy hoạch động cơ bản (1D, 2D, Balo, LIS, LCS)<br>9. Sắp xếp Tô-pô & Đồ thị DAG<br>10. Đường đi ngắn nhất (Dijkstra, 0-1 BFS, Floyd-Warshall) |
| **Phase 3: Advanced (Specialist ➔ Expert)** | `1600 - 1899` | 11. **Tổ tiên chung gần nhất (LCA), Binary Lifting & Euler Tour**<br>12. **Quy hoạch động trên Cây cơ bản & Kỹ thuật Đổi gốc (Tree DP & Rerooting)**<br>13. Số học Modular & Tổ hợp nâng cao (Fermat, Lucas, Stars and Bars)<br>14. Quy hoạch động Bitmask & SOS DP<br>15. Cây Fenwick (BIT) & Segment Tree cơ bản (Point Update, Range Query)<br>16. Segment Tree cập nhật lười (Lazy Propagation)<br>29. **Chia để trị (Divide and Conquer - Inversion & Closest Pair)**<br>31. **Cây tiền tố (Trie & 0-1 Trie bitwise XOR)** |
| **Phase 4: High-End Core (Candidate Master ➔ Master)** | `1900 - 2299` | 17. Xử lý chuỗi nâng cao (String Hashing, Z-Algorithm, KMP & Trie)<br>18. Thành phần liên thông mạnh (SCC) & Cầu / Khớp (Tarjan & 2-SAT)<br>19. Luồng cực đại Dinic & Cặp ghép cực đại (Max Flow & Bipartite Matching)<br>20. Cây phân đoạn bền vững (Persistent Segment Tree & Persistent Trie)<br>21. **Phân tách đường đi nặng - nhẹ trên cây (Heavy-Light Decomposition - HLD)**<br>22. **Tối ưu hóa Quy hoạch động: Bao lồi (Convex Hull Trick) & Cây Li Chao** |
| **Phase 5: Legendary & Grandmaster (Master ➔ GM / IGM)** | `2300 - 2600+` | 23. **Cây ảo (Virtual Tree / Auxiliary Tree)**<br>24. **Tìm kiếm nhị phân song song (Parallel Binary Search)**<br>25. **Tối ưu hóa WQS / Alien's Trick (Lambda Optimization)**<br>26. **Phân tách trọng tâm trên cây (Centroid Decomposition)**<br>27. **Biến đổi Fourier nhanh (Fast Fourier Transform - FFT / NTT)**<br>28. **Suffix Automaton (SAM - Máy tự động hậu tố) & Cây hậu tố**<br>30. **Chia để trị Chen Danqi (CDQ Divide and Conquer - CDQ 分治)** |

---

# CHI TIẾT TỪNG THUẬT TOÁN: BẢN CHẤT, BLOG CODEFORCES & 310 BÀI TẬP PHÂN CẤP


---

## 1. MẢNG CỘNG DỒN (PREFIX SUMS) & MẢNG HIỆU (DIFFERENCE ARRAY)
* **Phân hạng:** `Newbie (800 - 1100)`
* **Bản chất:**
  * Prefix Sum tính tổng đoạn con $[L, R]$ trong $O(1)$: $P[R] - P[L-1]$ (với mảng 1D) hoặc $S[x_2][y_2] - S[x_1-1][y_2] - S[x_2][y_1-1] + S[x_1-1][y_1-1]$ (với mảng 2D).
  * Difference Array cộng một lượng $V$ vào đoạn $[L, R]$ trong $O(1)$: $D[L] \mathrel{+}= V, D[R+1] \mathrel{-}= V$, sau đó tính prefix sum của $D$ để khôi phục mảng.
* **Độ phức tạp:** Tiền xử lý $O(N)$ (hoặc $O(N \times M)$), mỗi truy vấn $O(1)$, bộ nhớ $O(N)$.
* **Link Codeforces Blog:**
  * [Prefix Sums and Difference Arrays (CF Blog by Errichto)](https://codeforces.com/blog/entry/78584)
  * [Multi-dimensional prefix sums tutorial](https://codeforces.com/blog/entry/82672)
* **Bài tập tiêu biểu rèn luyện (10 bài phân cấp từ dễ đến khó):**
  1. [CF 313B - Ilya and Queries](https://codeforces.com/problemset/problem/313/B) (1000) – *Mức thông hiểu: Tạo mảng đánh dấu $a[i] = 1$ nếu $s[i] == s[i+1]$, sau đó tính prefix sum để trả lời số cặp liên kề bằng nhau trong $[L, R-1]$.*
  2. [CF 433B - Kuriyama Mirai's Stones](https://codeforces.com/problemset/problem/433/B) (1200) – *Mức vận dụng cơ bản: Xây dựng đồng thời 2 mảng prefix sum: một trên mảng ban đầu và một trên mảng đã sắp xếp tăng dần.*
  3. [CF 816B - Karen and Coffee](https://codeforces.com/problemset/problem/816/B) (1400) – *Difference Array kết hợp Prefix Sum 2 lần: Lần 1 dùng mảng hiệu đếm số công thức che phủ nhiệt độ $T$, lần 2 cộng dồn số nhiệt độ đạt chuẩn $\ge k$.*
  4. [CF 295A - Greg and Array](https://codeforces.com/problemset/problem/295/A) (1400) – *Mảng hiệu 2 tầng độc lập: Tầng 1 đếm số lần áp dụng mỗi thao tác $[l, r]$, tầng 2 áp dụng các thao tác đã nhân hệ số lên mảng giá trị ban đầu.*
  5. [CF 1398C - Good Subarrays](https://codeforces.com/problemset/problem/1398/C) (1400) – *Biến đổi toán học: $\sum_{i=l}^r a_i = r - l + 1 \Leftrightarrow P[r] - r = P[l-1] - (l-1)$. Dùng hash map đếm số lượng tiền tố có cùng giá trị $(P[i] - i)$.*
  6. [CF 466C - Number of Ways](https://codeforces.com/problemset/problem/466/C) (1700) – *Chia mảng thành 3 phần bằng nhau: Tổng toàn mảng phải chia hết cho 3 (gọi là $S$). Dùng prefix sum đếm số vị trí có tổng bằng $S$ trước mỗi vị trí có tổng $2S$.*
  7. [CF 1003C - Intense Heat](https://codeforces.com/problemset/problem/1003/C) (1200) – *Dùng Prefix Sum tính trung bình cộng của tất cả các đoạn con có độ dài $\ge k$ trong thời gian $O(N^2)$ với $N \le 5000$.*
  8. [CF 276C - Little Girl and Maximum Sum](https://codeforces.com/problemset/problem/276/C) (1500) – *Kỹ thuật mảng hiệu đếm tần suất truy vấn từng chỉ số. Sắp xếp tần suất và mảng số theo cùng thứ tự tăng dần để tối đa hóa tích theo bất đẳng thức hoán vị.*
  9. [CF 1118B - Tanya and Candies](https://codeforces.com/problemset/problem/1118/B) (1200) – *Prefix sum riêng biệt cho các vị trí chẵn và lẻ. Khi xóa phần tử tại $i$, các phần tử phía sau hoán đổi tính chẵn lẻ của chỉ số trong $O(1)$.*
  10. [CF 1200B - Block Adventure](https://codeforces.com/problemset/problem/1200/B) (1200) – *Duyệt tuần tự tối ưu hóa số block trong túi: tại mỗi bước, hạ độ cao cột hiện tại xuống mức thấp nhất cho phép $\max(0, h[i+1]-k)$ để thu hồi block.*

---

## 2. HAI CON TRỎ (TWO POINTERS) & CỬA SỔ TRƯỢT (SLIDING WINDOW)
* **Phân hạng:** `Newbie ➔ Pupil (900 - 1300)`
* **Bản chất:**
  * Duyệt không gian trạng thái bằng cặp chỉ số $(L, R)$ theo một chiều đơn điệu, không bao giờ lùi con trỏ.
  * Cửa sổ mở rộng $R$ khi điều kiện vẫn thỏa mãn và co $L$ lại khi điều kiện bị vi phạm hoặc cần tìm nghiệm tối thiểu.
* **Độ phức tạp:** Mỗi con trỏ di chuyển tối đa $N$ bước $\implies$ Độ phức tạp tổng thể $O(N)$.
* **Link Codeforces Blog:**
  * [Codeforces Edu: Two Pointers Method Step 1 - 3](https://codeforces.com/edu/course/2/lesson/9)
* **Bài tập tiêu biểu rèn luyện (10 bài phân cấp từ dễ đến khó):**
  1. [CF 381A - Sereja and Dima](https://codeforces.com/problemset/problem/381/A) (800) – *Hai con trỏ co từ 2 đầu mảng: Mỗi người chơi lần lượt lấy phần tử lớn hơn giữa $L$ và $R$, tăng/giảm con trỏ tương ứng.*
  2. [CF 279B - Books](https://codeforces.com/problemset/problem/279/B) (1100) – *Cửa sổ trượt kinh điển: Tìm đoạn sách liên tiếp dài nhất có tổng thời gian đọc $\le t$. Tăng $R$ tích lũy thời gian, khi vượt quá $t$ thì tăng $L$ trừ bớt.*
  3. [CF 602B - Approximating a Constant Range](https://codeforces.com/problemset/problem/602/B) (1400) – *Cửa sổ trượt duy trì $\max - \min \le 1$. Sử dụng mảng đếm tần suất hoặc multiset để kiểm tra điều kiện trong $O(1)$ khi dịch chuyển $L$ và $R$.*
  4. [CF 1251C - Minimize The Integer](https://codeforces.com/problemset/problem/1251/C) (1400) – *Tách các chữ số thành 2 danh sách chẵn và lẻ (do các chữ số cùng tính chẵn lẻ không thể đổi chỗ cho nhau), sau đó dùng two pointers trộn lại như Merge Sort.*
  5. [CF 161A - Dress'em in Vests!](https://codeforces.com/problemset/problem/161/A) (1200) – *Hai con trỏ trên 2 mảng đã sắp xếp: Ghép áo giáp phù hợp kích thước cho binh sĩ, tăng con trỏ áo nếu quá nhỏ và tăng binh sĩ nếu không có áo vừa.*
  6. [CF 676C - Vasya and String](https://codeforces.com/problemset/problem/676/C) (1500) – *Cửa sổ trượt tìm chuỗi con dài nhất chứa toàn ký tự 'a' (hoặc 'b') khi được phép đổi tối đa $k$ ký tự khác loại.*
  7. [CF 251A - Points on Line](https://codeforces.com/problemset/problem/251/A) (1300) – *Cố định con trỏ phải $R$, dùng con trỏ trái $L$ tìm vị trí xa nhất thỏa $x[R] - x[L] \le d$. Số bộ 3 kết thúc tại $R$ là $\binom{R-L}{2}$.*
  8. [CF 701C - They Are Everywhere](https://codeforces.com/problemset/problem/701/C) (1400) – *Cửa sổ trượt tìm đoạn ngắn nhất chứa đủ tất cả các loại Pokemon phân biệt: mở $R$ cho đến khi đủ loại, sau đó co $L$ tối đa có thể.*
  9. [CF 1006C - Three Parts of the Array](https://codeforces.com/problemset/problem/1006/C) (1100) – *Hai con trỏ xuất phát từ 2 đầu mảng tính tổng tiền tố và hậu tố, co dần về giữa để tìm tổng lớn nhất thỏa mãn $sum_1 == sum_3$ và không giao nhau.*
  10. [CF 1133C - Balanced Team](https://codeforces.com/problemset/problem/1133/C) (1200) – *Sắp xếp mảng kỹ năng tăng dần, dùng hai con trỏ duy trì cửa sổ $a[R] - a[L] \le 5$ để tìm kích thước đội bóng lớn nhất.*

---

## 3. TÌM KIẾM NHỊ PHÂN & CHẶT NHỊ PHÂN KẾT QUẢ (BINARY SEARCH ON ANSWER)
* **Phân hạng:** `Pupil (1000 - 1400)`
* **Bản chất:**
  * Chuyển đổi bài toán tối ưu 'Tìm giá trị $X$ tốt nhất' thành bài toán quyết định 'Với giá trị $M$, liệu có phương án khả thi hay không?'.
  * Yêu cầu hàm kiểm tra khả thi $f(M)$ phải có tính đơn điệu (Monotonicity): chuỗi kết quả có dạng `FFFFFTTTTT` hoặc `TTTTTFFFFF`.
* **Độ phức tạp:** $O(\log(\text{range}) \times \text{Cost}(f))$. Giảm không gian tìm kiếm theo hàm mũ.
* **Link Codeforces Blog:**
  * [Codeforces Edu: Binary Search Step 1 - 5](https://codeforces.com/edu/course/2/lesson/6)
  * [Binary Search comprehensive tutorial by Errichto](https://codeforces.com/blog/entry/67509)
* **Bài tập tiêu biểu rèn luyện (10 bài phân cấp từ dễ đến khó):**
  1. [CF 706B - Interesting drink](https://codeforces.com/problemset/problem/706/B) (1100) – *Mức thông hiểu: Sắp xếp giá tiền các chai nước và sử dụng hàm `std::upper_bound` để đếm số quán bán giá $\le m_i$ trong $O(\log N)$.*
  2. [CF 1613C - Poisoned Dagger](https://codeforces.com/problemset/problem/1613/C) (1200) – *Chặt nhị phân kết quả thời gian độc $k$: Sát thương của nhát chém thứ $i$ là $\min(k, a_{i+1}-a_i)$. Hàm kiểm tra tính đơn điệu tăng theo $k$.*
  3. [CF 371C - Hamburgers](https://codeforces.com/problemset/problem/371/C) (1400) – *Chặt nhị phân số lượng bánh burger làm được. Với $M$ cái bánh, tính chi phí mua thêm các nguyên liệu còn thiếu và kiểm tra xem có $\le r$ rúp không.*
  4. [CF 1201C - Maximum Median](https://codeforces.com/problemset/problem/1201/C) (1400) – *Chặt nhị phân giá trị trung vị $X$: Để trung vị đạt ít nhất $X$, cần tăng tất cả các phần tử từ vị trí trung vị $n/2$ đến cuối lên ít nhất $X$ với tổng chi phí $\le k$.*
  5. [CF 760B - Frodo and pillows](https://codeforces.com/problemset/problem/760/B) (1400) – *Chặt nhị phân số gối của Frodo tại vị trí $k$. Số gối giảm dần 1 đơn vị mỗi bước sang 2 bên cho đến khi đạt 1; tính tổng gối bằng công thức cấp số cộng trong $O(1)$.*
  6. [CF 1676E - Eating Queries](https://codeforces.com/problemset/problem/1676/E) (1100) – *Sắp xếp lượng kẹo giảm dần, tính mảng prefix sum và dùng `std::lower_bound` để tìm số viên kẹo tối thiểu đạt tổng đường $\ge x$.*
  7. [CF 448D - Multiplication Table](https://codeforces.com/problemset/problem/448/D) (1800) – *Tìm số nhỏ thứ $k$ trong bảng nhân $n \times m$: Chặt nhị phân giá trị $X$, đếm số phần tử $\le X$ trong bảng bằng $\sum_{i=1}^n \min(m, \lfloor X/i \rfloor)$ trong $O(n)$.*
  8. [CF 1117C - Magic Ship](https://codeforces.com/problemset/problem/1117/C) (1700) – *Chặt nhị phân số ngày di chuyển $D$. Tách $D = q \times n + r$ để tính tọa độ con tàu trôi theo gió, kiểm tra khoảng cách Manhattan tới đích có $\le D$ hay không.*
  9. [CF 670D2 - Magic Powder (hard version)](https://codeforces.com/problemset/problem/670/D2) (1500) – *Chặt nhị phân số bánh nướng được trong phạm vi $[0, 2 \times 10^9]$. Kiểm tra tổng lượng bột ma thuật cần bù cho các nguyên liệu thiếu có $\le k$ không (chú ý tràn số 64-bit).*
  10. [CF 1352E - Special Elements](https://codeforces.com/problemset/problem/1352/E) (1300) – *Tính tổng tất cả các đoạn con độ dài $\ge 2$ và đánh dấu sự tồn tại vào mảng boolean kích thước $N$, sau đó đếm số phần tử ban đầu xuất hiện trong mảng đánh dấu.*

---

## 4. SÀNG NGUYÊN TỐ, SPF & SỐ HỌC CƠ BẢN (NUMBER THEORY BASICS)
* **Phân hạng:** `Pupil (1000 - 1400)`
* **Bản chất:**
  * Sàng Eratosthenes $O(N \log \log N)$ tìm mọi số nguyên tố $\le N$. Sàng SPF (Smallest Prime Factor) lưu ước nguyên tố nhỏ nhất của mỗi số.
  * Nhờ SPF, ta phân tích thừa số nguyên tố của bất kỳ số nào $\le N$ chỉ mất $O(\log X)$ thay vì $O(\sqrt{X})$. Thuật toán Euclid tính $\gcd(a, b)$ trong $O(\log(\min(a,b)))$.
* **Độ phức tạp:** Tiền xử lý $O(N \log \log N)$, phân tích thừa số $O(\log X)$, truy vấn $\gcd$ $O(\log(\min(a,b)))$.
* **Link Codeforces Blog:**
  * [Number Theory Tutorial (Primes, Sieve, GCD)](https://codeforces.com/blog/entry/78065)
* **Bài tập tiêu biểu rèn luyện (10 bài phân cấp từ dễ đến khó):**
  1. [CF 230B - T-primes](https://codeforces.com/problemset/problem/230/B) (1300) – *Số có đúng 3 ước dương khi và chỉ khi nó là bình phương của một số nguyên tố ($x = p^2$). Sàng nguyên tố tới $10^6$ và kiểm tra căn bậc hai.*
  2. [CF 154B - Colliders](https://codeforces.com/problemset/problem/154/B) (1600) – *Quản lý va chạm collider: Dùng SPF phân tích nhanh các ước nguyên tố của số cần bật, duy trì mảng đánh dấu ước nguyên tố đã bị kích hoạt bởi collider nào.*
  3. [CF 1033B - Square Difference](https://codeforces.com/problemset/problem/1033/B) (1100) – *Phân tích hằng đẳng thức: $a^2 - b^2 = (a - b)(a + b)$. Vì số nguyên tố chỉ có ước là 1 và chính nó, điều kiện cần là $a - b = 1$ và $a + b$ là số nguyên tố.*
  4. [CF 1370A - Maximum GCD](https://codeforces.com/problemset/problem/1370/A) (800) – *Nhận xét toán học sắc bén: Để $\gcd(a, b)$ lớn nhất với $1 \le a < b \le n$, cặp tối ưu luôn là $(\lfloor n/2 \rfloor, 2 \times \lfloor n/2 \rfloor)$ với đáp án là $\lfloor n/2 \rfloor$.*
  5. [CF 1490C - Sum of Cubes](https://codeforces.com/problemset/problem/1490/C) (1100) – *Duyệt $a$ từ $1$ tới $\sqrt[3]{x} \le 10^4$, kiểm tra xem $x - a^3$ có phải là lập phương hoàn hảo của một số nguyên dương $b$ bằng hàm `cbrt` hoặc nhị phân.*
  6. [CF 1294C - Product of Three Numbers](https://codeforces.com/problemset/problem/1294/C) (1300) – *Tham lam tìm ước nhỏ nhất $a > 1$ của $n$, sau đó tìm ước nhỏ nhất $b > a$ của $n/a$. Phần còn lại $c = n/(a \times b)$, kiểm tra $c > b$ và $c > 1$.*
  7. [CF 1458A - Row GCD](https://codeforces.com/problemset/problem/1458/A) (1600) – *Tính chất GCD: $\gcd(a_1+x, a_2+x, \dots, a_n+x) = \gcd(a_1+x, \gcd(|a_2-a_1|, |a_3-a_1|, \dots))$. Tính trước GCD các hiệu, mỗi truy vấn mất $O(\log).*
  8. [CF 17A - Noldbach problem](https://codeforces.com/problemset/problem/17/A) (1000) – *Sàng nguyên tố tới $n$, trích xuất danh sách các số nguyên tố và kiểm tra các số có dạng $p_i + p_{i+1} + 1$ xem có phải số nguyên tố $\le n$ hay không.*
  9. [CF 797A - k-Factorization](https://codeforces.com/problemset/problem/797/A) (1100) – *Phân tích $n$ ra các thừa số nguyên tố. Nếu tổng số thừa số $< k$ thì vô nghiệm; ngược lại gom các thừa số dư vào phần tử cuối cùng để có đúng $k$ số.*
  10. [CF 1165D - Almost All Divisors](https://codeforces.com/problemset/problem/1165/D) (1500) – *Khôi phục số $n = d_{\min} \times d_{\max}$. Tìm lại toàn bộ các ước thực sự của số $n$ vừa tính và so sánh với danh sách đề bài cho xem có trùng khớp hoàn toàn không.*

---

## 5. THAM LAM (GREEDY) & BẤT ĐẲNG THỨC SẮP XẾP (EXCHANGE ARGUMENT)
* **Phân hạng:** `Pupil ➔ Specialist (1100 - 1500)`
* **Bản chất:**
  * Đưa ra lựa chọn tối ưu cục bộ tại từng bước nhằm đạt được tối ưu toàn cục. Không quay lui lại các quyết định đã chọn.
  * Kỹ thuật chứng minh Exchange Argument: Giả định hoán vị tối ưu có một cặp nghịch thế vi phạm thứ tự tham lam, chứng minh việc đổi chỗ (swap) 2 phần tử kề nhau không làm giảm chất lượng nghiệm.
* **Độ phức tạp:** Thường đi kèm sắp xếp $O(N \log N)$ hoặc hàng đợi ưu tiên $O(N \log N)$.
* **Link Codeforces Blog:**
  * [Thinking about Greedy Algorithms](https://codeforces.com/blog/entry/92661)
* **Bài tập tiêu biểu rèn luyện (10 bài phân cấp từ dễ đến khó):**
  1. [CF 405A - Gravity Flip](https://codeforces.com/problemset/problem/405/A) (900) – *Mức thông hiểu: Trọng lực kéo các khối hộp rơi về phía bên phải tương đương với việc sắp xếp mảng độ cao theo thứ tự tăng dần.*
  2. [CF 1360D - Buying Shovels](https://codeforces.com/problemset/problem/1360/D) (1300) – *Tìm ước $d$ của $n$ sao cho $d \le k$ và $d$ lớn nhất có thể để số lượng gói xẻng $n/d$ là nhỏ nhất. Duyệt ước tới $\sqrt{n}$.*
  3. [CF 978C - Letters](https://codeforces.com/problemset/problem/978/C) (1000) – *Duyệt tham lam qua mảng số phòng cộng dồn: Khi số thứ tự phòng của lá thư vượt quá ký túc xá hiện tại, tăng chỉ số ký túc xá cho đến khi bao phủ được.*
  4. [CF 1526C2 - Potions (Hard Version)](https://codeforces.com/problemset/problem/1526/C2) (1600) – *Regret Greedy (Tham lam có hối hận): Uống mọi lọ thuốc. Nếu máu $< 0$, nhả lọ thuốc độc có giá trị âm lớn nhất đã uống ra khỏi cơ thể bằng `priority_queue`.*
  5. [CF 1409D - Decrease the Sum of Digits](https://codeforces.com/problemset/problem/1409/D) (1400) – *Muốn giảm tổng các chữ số, cách duy nhất là tăng $n$ để tạo ra các số 0 ở đuôi nhờ phép nhớ. Tham lam làm tròn từ hàng đơn vị lên hàng chục, trăm...*
  6. [CF 1157C2 - Increasing Subsequence (hard version)](https://codeforces.com/problemset/problem/1157/C2) (1500) – *Tham lam chọn phần tử nhỏ hơn giữa 2 đầu $L$ và $R$ nếu cả hai đều $> prev$. Trường hợp $a[L] == a[R]$, thử tham lam rẽ nhánh đi hết bên trái hoặc bên phải.*
  7. [CF 1029B - Creating the Contest](https://codeforces.com/problemset/problem/1029/B) (1200) – *Tìm dãy con liên tiếp dài nhất thỏa $a_{i+1} \le 2 a_i$. Duyệt tuyến tính tham lam kéo dài chuỗi hiện tại, nếu vi phạm thì khởi tạo lại chuỗi mới.*
  8. [CF 898B - Proper Nutrition](https://codeforces.com/problemset/problem/898/B) (1200) – *Phương trình Diophantine $a x + b y = n$: Duyệt tham lam số chai $x$ từ $0$ đến $n/a$, kiểm tra xem lượng còn lại $(n - a x)$ có chia hết cho $b$ hay không.*
  9. [CF 1368B - Codeforces Subsequences](https://codeforces.com/problemset/problem/1368/B) (1400) – *Số chuỗi con 'codeforces' tạo thành là $\prod c_i$. Để tổng các ký tự $\sum c_i$ nhỏ nhất mà tích $\ge k$, ta dùng tham lam tăng dần đều từng chữ số từ 1.*
  10. [CF 160A - Twins](https://codeforces.com/problemset/problem/160/A) (900) – *Sắp xếp giảm dần và tham lam lấy các đồng xu có mệnh giá lớn nhất cho đến khi tổng giá trị vượt quá $50\%$ tổng số tiền của tất cả các đồng xu.*

---

## 6. DUYỆT ĐỒ THỊ DFS/BFS & ĐỒ THỊ TRÊN LƯỚI (GRAPHS & GRIDS)
* **Phân hạng:** `Pupil ➔ Specialist (1200 - 1500)`
* **Bản chất:**
  * DFS (Depth-First Search) duyệt sâu tìm thành phần liên thông, chu trình, kiểm tra tính 2 phía (bipartite).
  * BFS (Breadth-First Search) duyệt theo từng lớp khoảng cách, tìm đường đi ngắn nhất trên đồ thị không trọng số hoặc lưới ma trận ô vuông.
* **Độ phức tạp:** Thời gian $O(V + E)$ hoặc $O(N \times M)$ trên lưới. Bộ nhớ $O(V)$ cho ngăn xếp đệ quy hoặc hàng đợi `std::queue`.
* **Link Codeforces Blog:**
  * [Graph Theory Part 1: DFS & BFS Fundamentals](https://codeforces.com/blog/entry/68138)
* **Bài tập tiêu biểu rèn luyện (10 bài phân cấp từ dễ đến khó):**
  1. [CF 115A - Party](https://codeforces.com/problemset/problem/115/A) (900) – *Mức cơ bản: Đồ thị cây cấp quản lý. Số nhóm ít nhất cần chia chính là chiều cao tối đa của cây, tính bằng DFS/BFS từ các đỉnh gốc (không có sếp).*
  2. [CF 520B - Two Buttons](https://codeforces.com/problemset/problem/520/B) (1400) – *BFS tìm đường đi ngắn nhất từ $n$ đến $m$ trên không gian trạng thái số, hoặc tư duy ngược: từ $m$ về $n$ nếu $m$ chẵn thì chia 2, nếu lẻ thì cộng 1.*
  3. [CF 1033A - King Escape](https://codeforces.com/problemset/problem/1033/A) (1000) – *Duyệt BFS/DFS trên bàn cờ tránh các ô bị Hậu kiểm soát, hoặc nhận xét hình học: Quân Vua chỉ đến được đích nếu cả 2 điểm cùng nằm trong 1 góc phần tư của Hậu.*
  4. [CF 580C - Kefa and Park](https://codeforces.com/problemset/problem/580/C) (1500) – *DFS trên cây duy trì số lượng mèo liên tiếp trên đường đi từ gốc đến nút hiện tại. Nếu vượt quá $m$, cắt nhánh ngay lập tức; đếm số lá hợp lệ đến được.*
  5. [CF 793B - Igor and his way to work](https://codeforces.com/problemset/problem/793/B) (1600) – *0-1 BFS trên lưới: Trạng thái $(x, y, dir, turns)$. Nếu tiếp tục đi cùng hướng chi phí đổi hướng bằng 0, nếu rẽ hướng chi phí bằng 1, yêu cầu $\le 2$ lần rẽ.*
  6. [CF 1365D - Solve The Maze](https://codeforces.com/problemset/problem/1365/D) (1700) – *Tư duy xây tường: Đặt tường chặn tại 4 ô kề với tất cả kẻ xấu 'B'. Sau đó BFS từ đích $(n, m)$: Kiểm tra xem mọi người tốt 'G' có tới được và kẻ xấu có bị nhốt kín không.*
  7. [CF 217A - Ice Skating](https://codeforces.com/problemset/problem/217/A) (1200) – *Nối cạnh giữa hai điểm nếu chúng có cùng tọa độ $x$ hoặc $y$. Dùng DFS đếm số thành phần liên thông $C$, đáp án cần thêm là $C - 1$ điểm tuyết.*
  8. [CF 1037D - Valid BFS?](https://codeforces.com/problemset/problem/1037/D) (1600) – *Kiểm tra thứ tự BFS: Sắp xếp danh sách kề của mỗi đỉnh theo vị trí xuất hiện của đỉnh con trong mảng thứ tự đề bài cho, sau đó chạy lại BFS để so sánh.*
  9. [CF 977E - Cyclic Components](https://codeforces.com/problemset/problem/977/E) (1500) – *Dùng DFS duyệt từng thành phần liên thông: Thành phần là một chu trình đơn (cycle) khi và chỉ khi mọi đỉnh trong thành phần đó đều có bậc đúng bằng 2.*
  10. [CF 329B - Biridian Forest](https://codeforces.com/problemset/problem/329/B) (1500) – *Tư duy BFS ngược: Chạy BFS 1 lần duy nhất từ lối thoát hiểm (Exit) để tính khoảng cách ngắn nhất tới tất cả các ô. Người chơi phải chiến đấu với mọi quái vật có $d \le d_{player}$.*

---

## 7. CẤU TRÚC TẬP HỢP RỜI RẠC (DISJOINT SET UNION - DSU)
* **Phân hạng:** `Pupil ➔ Specialist (1200 - 1600)`
* **Bản chất:**
  * DSU quản lý các tập hợp rời nhau với 2 thao tác cơ bản: `find(u)` (tìm đại diện tập hợp) và `unite(u, v)` (hợp nhất 2 tập).
  * Hai kỹ thuật tối ưu cốt lõi: Nén đường đi (Path Compression) và Hợp nhất theo hạng/kích thước (Union by Rank/Size) đưa thời gian mỗi thao tác về gần như hằng số $O(\alpha(N))$.
* **Độ phức tạp:** $O(\alpha(N))$ cho mỗi thao tác, với $\alpha$ là hàm nghịch đảo Ackermann (thực tế $\alpha(N) \le 4$).
* **Link Codeforces Blog:**
  * [Disjoint Set Union (DSU) - Comprehensive Guide](https://codeforces.com/blog/entry/84042)
* **Bài tập tiêu biểu rèn luyện (10 bài phân cấp từ dễ đến khó):**
  1. [CF 1167C - News Distribution](https://codeforces.com/problemset/problem/1167/C) (1200) – *Mức cơ bản: DSU gộp các thành viên trong cùng một nhóm bạn bè. Trả lời kích thước tập hợp $sz[find(u)]$ của mỗi người dùng.*
  2. [CF 277A - Learning Languages](https://codeforces.com/problemset/problem/277/A) (1400) – *Tạo đồ thị 2 phía giữa nhân viên và ngôn ngữ, dùng DSU gộp các nhân viên biết chung ngôn ngữ. Đếm số thành phần liên thông của những người biết ít nhất 1 thứ tiếng.*
  3. [CF 1213G - Path Queries](https://codeforces.com/problemset/problem/1213/G) (1600) – *Offline queries + DSU: Sắp xếp các cạnh và các truy vấn theo trọng số tăng dần. Khi thêm cạnh $(u, v)$, số cặp đường đi tăng thêm là $sz[u] \times sz[v]$.*
  4. [CF 1559D1 - Mocha and Diana (Easy Version)](https://codeforces.com/problemset/problem/1559/D1) (1400) – *Sử dụng 2 cấu trúc DSU song song cho Mocha và Diana. Duyệt mọi cặp $(u, v)$, nếu việc nối cạnh không tạo chu trình trên cả 2 rừng cây thì tiến hành gộp cả hai.*
  5. [CF 1702E - Split Into Two Sets](https://codeforces.com/problemset/problem/1702/E) (1400) – *DSU 2 màu (bipartite check): Mỗi quân domino là một cạnh nối giữa 2 số. Bài toán khả thi khi mỗi số xuất hiện đúng 2 lần và đồ thị không chứa chu trình độ dài lẻ.*
  6. [CF 292D - Connected Components](https://codeforces.com/problemset/problem/292/D) (1800) – *DSU tiền tố và hậu tố: Xây dựng mảng DSU tiền tố cho $i$ cạnh đầu và DSU hậu tố cho các cạnh từ $j$ đến $m$. Khi bỏ đoạn cạnh $[l, r]$, gộp 2 DSU lại trong $O(N \alpha(N))$.*
  7. [CF 1609D - Social Network](https://codeforces.com/problemset/problem/1609/D) (1400) – *DSU theo dõi số cạnh dư thừa (cạnh nối 2 đỉnh đã cùng thành phần liên thông). Với $k$ cạnh thừa, đáp án là tổng kích thước của $(k+1)$ thành phần lớn nhất.*
  8. [CF 722C - Destroying Array](https://codeforces.com/problemset/problem/722/C) (1600) – *Tư duy đảo ngược thời gian: Thay vì xóa phần tử, ta thêm dần các phần tử theo thứ tự ngược từ cuối lên và dùng DSU gộp các đoạn kề nhau, cập nhật tổng lớn nhất.*
  9. [CF 1332C - K-Complete Word](https://codeforces.com/problemset/problem/1332/C) (1500) – *Dùng DSU gộp các vị trí phải có cùng ký tự do 2 ràng buộc: tính tuần hoàn chu kỳ $k$ ($i$ với $i+k$) và tính đối xứng đối gương ($i$ với $n-1-i$).*
  10. [CF 1559D2 - Mocha and Diana (Hard Version)](https://codeforces.com/problemset/problem/1559/D2) (2100) – *Nâng cấp $O(N \log N)$: Cố định đỉnh 1, tìm các đỉnh chưa liên thông với 1 ở đồ thị 1 và đồ thị 2, ghép cặp nhanh bằng hai danh sách độc lập.*

---

## 8. QUY HOẠCH ĐỘNG CƠ BẢN (1D, 2D, KNAPSACK, LIS, LCS)
* **Phân hạng:** `Pupil ➔ Specialist (1200 - 1600)`
* **Bản chất:**
  * Chia bài toán lớn thành các bài toán con gối nhau (overlapping subproblems) và có cấu trúc con tối ưu (optimal substructure).
  * Quy hoạch động 1D/2D, bài toán xếp balo (Knapsack 0/1, unbounded), chuỗi con tăng dài nhất (LIS bằng BS trong $O(N \log N)$), chuỗi con chung dài nhất (LCS).
* **Độ phức tạp:** Tùy bài toán, phổ biến $O(N), O(N^2)$ hoặc $O(N \times W)$.
* **Link Codeforces Blog:**
  * [Dynamic Programming: From Novice to Advanced](https://codeforces.com/blog/entry/67679)
* **Bài tập tiêu biểu rèn luyện (10 bài phân cấp từ dễ đến khó):**
  1. [CF 455A - Boredom](https://codeforces.com/problemset/problem/455/A) (1500) – *DP 1D dạng House Robber: Đếm tần suất $cnt[x]$. Nếu chọn lấy giá trị $x$, ta nhận $x \times cnt[x]$ điểm nhưng không được lấy $x-1$: $dp[i] = \max(dp[i-1], dp[i-2] + i \times cnt[i])$.*
  2. [CF 189A - Cut Ribbon](https://codeforces.com/problemset/problem/189/A) (1300) – *DP Balo không giới hạn (Unbounded Knapsack): $dp[i]$ là số đoạn cắt tối đa tạo thành thanh ruy băng độ dài $i$ từ 3 độ dài cho trước $a, b, c$.*
  3. [CF 118D - Caesar's Legion](https://codeforces.com/problemset/problem/118/D) (1500) – *DP 4 trạng thái: $dp[i][j][k][type]$ lưu số cách sắp xếp $i$ lính chân, $j$ kỵ binh khi ở đuôi có $k$ lính liên tiếp thuộc loại $type$.*
  4. [CF 349B - Color the Fence](https://codeforces.com/problemset/problem/349/B) (1400) – *Số càng nhiều chữ số càng lớn: Tìm chữ số có giá trị sơn rẻ nhất để xác định độ dài cực đại của số. Sau đó tham lam duyệt từ hàng đầu thay bằng chữ số lớn hơn nếu đủ sơn.*
  5. [CF 166E - Tetrahedron](https://codeforces.com/problemset/problem/166/E) (1500) – *DP đếm đường đi trên tứ diện: $dp[steps][0]$ là số cách đứng tại đỉnh $D$ và $dp[steps][1]$ là số cách đứng tại 3 đỉnh còn lại sau $steps$ bước.*
  6. [CF 474D - Flowers](https://codeforces.com/problemset/problem/474/D) (1500) – *DP tiền xử lý kết hợp Prefix Sum: $dp[i] = dp[i-1] + dp[i-k]$ (ăn 1 hoa đỏ hoặc $k$ hoa trắng). Dùng prefix sum để trả lời mỗi truy vấn đoạn $[a, b]$ trong $O(1)$.*
  7. [CF 1359B - New Theatre Square](https://codeforces.com/problemset/problem/1359/B) (1000) – *DP/Greedy trên lưới: So sánh chi phí lát 1 viên gạch $1 \times 2$ giá $y$ với việc lát 2 viên $1 \times 1$ giá $2x$. Nếu $y < 2x$, ưu tiên ghép cặp tối đa các ô kề nhau.*
  8. [CF 607A - Chain Reaction](https://codeforces.com/problemset/problem/607/A) (1600) – *DP kết hợp `std::lower_bound`: Sắp xếp các beacon theo vị trí. $dp[i]$ là số beacon còn sống nếu kích hoạt từ vị trí $i$: $dp[i] = dp[j] + 1$ với $j$ là vị trí ngoài tầm hủy.*
  9. [CF 1061C - Multiplicity](https://codeforces.com/problemset/problem/1061/C) (1700) – *DP mảng $dp[j]$: Số dãy con hợp lệ độ dài $j$. Với mỗi số $a_i$, tìm tất cả các ước số của nó và cập nhật $dp[d] \mathrel{+}= dp[d-1]$ theo thứ tự ước giảm dần.*
  10. [CF 835D - Palindromic characteristics](https://codeforces.com/problemset/problem/835/D) (1800) – *DP trên đoạn $[l, r]$: Đoạn là palindrome cấp $k$ nếu nó là palindrome và nửa đầu là palindrome cấp $k-1$. Tính toán toàn bộ bảng $dp[l][r]$ trong $O(N^2)$.*

---

## 9. SẮP XẾP TÔ-PÔ (TOPOLOGICAL SORT) & ĐỒ THỊ DAG
* **Phân hạng:** `Pupil ➔ Specialist (1300 - 1700)`
* **Bản chất:**
  * Topological Sort sắp xếp các đỉnh của đồ thị có hướng không chu trình (DAG) thành một dãy tuyến tính sao cho với mọi cạnh $u \to v$, $u$ luôn đứng trước $v$.
  * Hai thuật toán phổ biến: Thuật toán Kahn (bóc tách các đỉnh có bán bậc vào $\text{in-degree} = 0$ bằng queue) và DFS (ghi nhận đỉnh theo thứ tự thời điểm kết thúc).
* **Độ phức tạp:** Thời gian $O(V + E)$, bộ nhớ $O(V + E)$.
* **Link Codeforces Blog:**
  * [Topological Sort and DAG Properties](https://codeforces.com/blog/entry/70275)
* **Bài tập tiêu biểu rèn luyện (10 bài phân cấp từ dễ đến khó):**
  1. [CF 510C - Fox And Names](https://codeforces.com/problemset/problem/510/C) (1500) – *Xây dựng thứ tự từ điển mới: So sánh các cặp từ liền kề để dựng cạnh có hướng giữa các chữ cái. Chạy Topological Sort kiểm tra chu trình và đưa ra thứ tự bảng chữ cái.*
  2. [CF 1385E - Directing Edges](https://codeforces.com/problemset/problem/1385/E) (1800) – *Định hướng cạnh vô hướng: Chạy Topological Sort trên tập các cạnh có hướng sẵn có để gán chỉ số topo cho mỗi đỉnh. Sau đó định hướng mọi cạnh vô hướng từ bậc nhỏ sang lớn.*
  3. [CF 919D - Substring](https://codeforces.com/problemset/problem/919/D) (1700) – *Kiểm tra chu trình bằng Topological Sort. Nếu có chu trình in -1; ngược lại DP trên DAG: $dp[u][c]$ lưu số lần xuất hiện nhiều nhất của chữ cái $c$ trên đường đi tới $u$.*
  4. [CF 825E - Minimal Labels](https://codeforces.com/problemset/problem/825/E) (2000) – *Kỹ thuật Topo ngược với Max-Heap: Để thứ tự từ điển của nhãn nhỏ nhất, ta đảo chiều tất cả các cạnh, tìm đỉnh có bán bậc vào bằng 0 lớn nhất để gán nhãn từ $N$ giảm dần về 1.*
  5. [CF 500A - New Year Transportation](https://codeforces.com/problemset/problem/500/A) (1000) – *Duyệt trên DAG tuyến tính suy biến: Mỗi cổng dịch chuyển chỉ dẫn tới đúng 1 cổng $i + a_i$. Bắt đầu từ cổng 1 nhảy bước theo chỉ dẫn cho tới khi $\ge t$.*
  6. [CF 1593E - Gardener and Tree](https://codeforces.com/problemset/problem/1593/E) (1500) – *Thuật toán Kahn bóc lá trên cây: Đẩy tất cả các đỉnh lá (bậc $\le 1$) vào queue. Mỗi bước BFS loại bỏ 1 lớp lá và giảm bậc các đỉnh kề, lặp lại đúng $k$ vòng.*
  7. [CF 1100E - Andrew and Taxi](https://codeforces.com/problemset/problem/1100/E) (2100) – *Chặt nhị phân chi phí lớn nhất $C$ của các cạnh cần đổi hướng. Giữ lại các cạnh có trọng số $> C$, dùng Topological Sort kiểm tra xem đồ thị có chu trình hay không.*
  8. [CF 721C - Journey](https://codeforces.com/problemset/problem/721/C) (2000) – *DP trên DAG: $dp[u][len]$ là thời gian di chuyển ngắn nhất để đi từ đỉnh 1 đến $u$ qua đúng $len$ đỉnh. Duyệt cập nhật theo thứ tự Topological Sort và truy vết đáp án.*
  9. [CF 1176E - Cover it!](https://codeforces.com/problemset/problem/1176/E) (1400) – *Dựng cây khung BFS/DFS và tô màu 2 phía (0 và 1) theo độ sâu. Do tổng số đỉnh là $n$, số đỉnh mang màu có số lượng ít hơn chắc chắn $\le \lfloor n/2 \rfloor$ và luôn bao phủ đồ thị.*
  10. [CF 1638D - Big Brush](https://codeforces.com/problemset/problem/1638/D) (1900) – *Tư duy Topo ngược: Tìm các ô vuông $2 \times 2$ có cùng màu trên bức tranh kết quả, đẩy vào queue. Khi một ô vuông được xử lý, nó trở thành ô 'vạn năng' (wildcard) khớp với mọi màu.*

---

## 10. ĐƯỜNG ĐI NGẮN NHẤT (DIJKSTRA, 0-1 BFS, FLOYD-WARSHALL)
* **Phân hạng:** `Specialist ➔ Expert (1400 - 1800)`
* **Bản chất:**
  * Dijkstra: Tìm đường đi ngắn nhất từ 1 nguồn trên đồ thị trọng số không âm bằng Priority Queue trong $O((V + E) \log V)$.
  * 0-1 BFS: Đồ thị chỉ có trọng số 0 và 1, dùng `std::deque` đẩy cạnh 0 vào đầu (front) và cạnh 1 vào cuối (back) chạy trong $O(V + E)$.
  * Floyd-Warshall: Tìm khoảng cách giữa mọi cặp đỉnh trên ma trận kề trong $O(V^3)$.
* **Độ phức tạp:** Dijkstra: $O(M \log N)$, 0-1 BFS: $O(N + M)$, Floyd-Warshall: $O(N^3)$.
* **Link Codeforces Blog:**
  * [Shortest Paths Algorithms and Variants](https://codeforces.com/blog/entry/73618)
* **Bài tập tiêu biểu rèn luyện (10 bài phân cấp từ dễ đến khó):**
  1. [CF 20C - Dijkstra?](https://codeforces.com/problemset/problem/20/C) (1600) – *Mức thông hiểu: Cài đặt thuật toán Dijkstra chuẩn mực tìm đường đi ngắn nhất từ đỉnh 1 đến $n$ trên đồ thị vô hướng và truy vết đường đi bằng mảng $parent$.*
  2. [CF 295B - Greg and Graph](https://codeforces.com/problemset/problem/295/B) (1700) – *Floyd-Warshall đảo ngược: Đề bài yêu cầu xóa đỉnh, ta đổi góc nhìn thành thêm dần từng đỉnh từ cuối lên và cập nhật khoảng cách giữa mọi cặp đỉnh trong $O(N^2)$ mỗi bước.*
  3. [CF 1063B - Labyrinth](https://codeforces.com/problemset/problem/1063/B) (1700) – *0-1 BFS trên lưới: Vì di chuyển lên/xuống không tốn tài nguyên rẽ ngang, còn rẽ trái tốn 1 lượt. Trọng số rẽ trái là 1, các hướng khác là 0, tối ưu bằng `std::deque`.*
  4. [CF 59E - Shortest Path](https://codeforces.com/problemset/problem/59/E) (1900) – *Dijkstra/BFS mở rộng trạng thái trên đồ thị có cấm bộ 3 đỉnh liên tiếp $(a, b, c)$: Đỉnh trong đồ thị mới là cạnh có hướng $(u, v)$, chuyển trạng thái sang $(v, w)$.*
  5. [CF 449B - Jzzhu and Cities](https://codeforces.com/problemset/problem/449/B) (1700) – *Dijkstra đồng thời tuyến đường sắt và đường bộ: Ưu tiên đường bộ khi khoảng cách bằng nhau để loại bỏ nhiều tuyến đường sắt thừa thãi nhất có thể.*
  6. [CF 821D - Okabe and City](https://codeforces.com/problemset/problem/821/D) (2000) – *0-1 BFS giữa các ô sáng và các hàng/cột: Đi giữa 2 ô sáng kề nhau chi phí 0; thắp sáng 1 hàng hoặc cột để di chuyển chi phí 1.*
  7. [CF 1076D - Edge Deletion](https://codeforces.com/problemset/problem/1076/D) (1800) – *Cây đường đi ngắn nhất (Shortest Path Tree): Chạy Dijkstra từ đỉnh 1 tạo ra cây SPT. Duyệt BFS trên cây SPT và giữ lại đúng $k$ cạnh đầu tiên được thăm.*
  8. [CF 25C - Roads in Berland](https://codeforces.com/problemset/problem/25/C) (1800) – *Cập nhật ma trận Floyd-Warshall: Khi xây thêm con đường mới $(u, v)$ có độ dài $w$, cập nhật lại khoảng cách giữa mọi cặp $(i, j)$ qua công thức $\min(d[i][j], d[i][u] + w + d[v][j])$.*
  9. [CF 1433G - Reducing Delivery Cost](https://codeforces.com/problemset/problem/1433/G) (2000) – *Chạy Dijkstra từ tất cả $n$ đỉnh để có ma trận khoảng cách $d[u][v]$ trong $O(N M \log N)$. Thử đặt trọng số của từng cạnh về 0 và tính tổng khoảng cách của $k$ lộ trình.*
  10. [CF 1005F - Berland and the Shortest Path Trees](https://codeforces.com/problemset/problem/1005/F) (1900) – *BFS tìm khoảng cách từ 1. Với mỗi đỉnh $v \ne 1$, thu thập tất cả các cạnh $(u, v)$ thỏa mãn $dist[u] + 1 == dist[v]$. Sinh các cây SPT bằng phương pháp quay lui.*

---

## 11. TỔ TIÊN CHUNG GẦN NHẤT (LCA), BINARY LIFTING & EULER TOUR
* **Phân hạng:** `Specialist ➔ Expert (1600 - 1900)`
* **Bản chất:**
  * Binary Lifting: Tiền xử lý bảng $up[u][j]$ là tổ tiên thứ $2^j$ của $u$ trong $O(N \log N)$, cho phép nhảy tìm LCA của $(u, v)$ trong $O(\log N)$.
  * Euler Tour: Đánh dấu thời điểm vào (`tin`) và ra (`tout`) của mỗi đỉnh khi DFS. Đỉnh $u$ là tổ tiên của $v \iff tin[u] \le tin[v] \land tout[v] \le tout[u]$. Đưa các truy vấn trên cây con về truy vấn trên đoạn liên tiếp $[tin[u], tout[u]]$.
* **Độ phức tạp:** Tiền xử lý $O(N \log N)$, mỗi truy vấn LCA / khoảng cách $O(\log N)$, Euler tour trải phẳng cây trong $O(N)$.
* **Link Codeforces Blog:**
  * [Binary Lifting and LCA Tutorial](https://codeforces.com/blog/entry/74847)
  * [Euler Tour Technique on Trees](https://codeforces.com/blog/entry/63020)
* **Bài tập tiêu biểu rèn luyện (10 bài phân cấp từ dễ đến khó):**
  1. [CF 1304E - 1-Trees and Queries](https://codeforces.com/problemset/problem/1304/E) (2000) – *Dùng LCA tính khoảng cách ngắn nhất giữa hai đỉnh $dist(u, v) = depth[u] + depth[v] - 2 \times depth[LCA(u, v)]$. Kiểm tra 3 đường đi khả thi khi có cạnh tắt $(x, y)$.*
  2. [CF 208E - Blood Cousins](https://codeforces.com/problemset/problem/208/E) (1800) – *Binary Lifting nhảy lên tổ tiên thứ $k$ của $v$. Sau đó dùng Euler Tour kết hợp vector lưu các đỉnh theo độ sâu, dùng `std::upper_bound` và `lower_bound` để đếm họ hàng.*
  3. [CF 1062E - Company](https://codeforces.com/problemset/problem/1062/E) (2000) – *Segment Tree tìm LCA của một tập đỉnh: LCA của một tập là LCA của đỉnh có $tin$ nhỏ nhất và đỉnh có $tin$ lớn nhất. Thử loại bỏ đỉnh có $tin$ min hoặc max.*
  4. [CF 832D - Misha, Scher and Forest](https://codeforces.com/problemset/problem/832/D) (1800) – *Tìm điểm phân nhánh chung dài nhất của 3 đường đi giữa $a, b, c$: Độ dài chung của đường đi từ $s$ đến $t_1$ và $t_2$ được tính chính xác thông qua hàm LCA của từng cặp.*
  5. [CF 519E - A and B and Lecture Rooms](https://codeforces.com/problemset/problem/519/E) (1700) – *Tìm các đỉnh cách đều $a$ và $b$: Nếu khoảng cách lẻ thì vô nghiệm. Nếu chẵn, dùng Binary Lifting nhảy lên trung điểm đường đi và đếm kích thước các cây con.*
  6. [CF 1702G2 - Passable Paths (Hard Version)](https://codeforces.com/problemset/problem/1702/G2) (1900) – *Kiểm tra tập đỉnh có nằm trên 1 đường đi đơn: Chọn đỉnh sâu nhất $u$, đỉnh sâu nhất không thuộc cây con của $u$ là $v$. Dùng LCA và Euler Tour kiểm tra toàn bộ tập đỉnh.*
  7. [CF 383C - Propagating tree](https://codeforces.com/problemset/problem/383/C) (1900) – *Euler Tour trải phẳng cây kết hợp chia tầng chẵn/lẻ: Giá trị cộng dồn đan dấu $+val$ và $-val$ theo độ sâu, đưa bài toán về cập nhật đoạn trên Fenwick Tree.*
  8. [CF 609E - Minimum spanning tree for each edge](https://codeforces.com/problemset/problem/609/E) (2000) – *Dựng cây khung nhỏ nhất (MST). Khi thêm một cạnh $(u, v)$ có trọng số $w$, chu trình được tạo ra; dùng Binary Lifting tìm cạnh lớn nhất trên đường đi giữa $u$ và $v$ để thay thế.*
  9. [CF 1328E - Tree Queries](https://codeforces.com/problemset/problem/1328/E) (1700) – *Thay thế mỗi đỉnh $v$ bằng cha của nó $parent[v]$ (trừ gốc). Dùng Euler Tour kiểm tra xem tất cả các đỉnh này có phải là tổ tiên của đỉnh có độ sâu lớn nhất trong tập truy vấn không.*
  10. [CF 916E - Jamie and Tree](https://codeforces.com/problemset/problem/916/E) (2400) – *LCA trên cây có gốc thay đổi động: LCA mới của $(u, v)$ với gốc $root$ là đỉnh có độ sâu lớn nhất trong 3 đỉnh $LCA(u, v), LCA(u, root), LCA(v, root)$.*

---

## 12. QUY HOẠCH ĐỘNG TRÊN CÂY & KỸ THUẬT ĐỔI GỐC (TREE DP & REROOTING)
* **Phân hạng:** `Specialist ➔ Expert (1600 - 1900)`
* **Bản chất:**
  * Tree DP cơ bản: Tính toán giá trị của nút cha dựa trên các nút con bằng cách duyệt hậu thứ tự (Post-order DFS).
  * Kỹ thuật Rerooting (Đổi gốc): DFS lần 1 tính nghiệm khi chọn gốc là 1; DFS lần 2 truyền kết quả từ cha xuống con để cập nhật đáp án cho mọi đỉnh làm gốc trong $O(N)$ tổng thể.
* **Độ phức tạp:** Cả 2 lượt DFS đều chạy trong thời gian tuyến tính $O(N)$.
* **Link Codeforces Blog:**
  * [Tree DP Tutorial and Rerooting Technique](https://codeforces.com/blog/entry/20935)
  * [Rerooting DP Made Easy by Benq](https://codeforces.com/blog/entry/68288)
* **Bài tập tiêu biểu rèn luyện (10 bài phân cấp từ dễ đến khó):**
  1. [CF 1187E - Tree Painting](https://codeforces.com/problemset/problem/1187/E) (2100) – *Rerooting DP kinh điển: DFS 1 tính $sz[u]$ và tổng điểm $dp[1]$. DFS 2 khi chuyển gốc từ $u$ sang con $v$, điểm thay đổi chính xác $dp[v] = dp[u] + (N - 2 \times sz[v])$.*
  2. [CF 1324F - Maximum White Subtree](https://codeforces.com/problemset/problem/1324/F) (1800) – *Tìm cây con liên thông chứa đỉnh $u$ có chênh lệch trắng - đen lớn nhất. DFS 1 tính $dp[u] = val[u] + \sum \max(0, dp[v])$. DFS 2 đẩy phần đóng góp từ cha xuống con.*
  3. [CF 219D - Choosing Capital for Treeland](https://codeforces.com/problemset/problem/219/D) (1600) – *Rerooting đếm số cạnh cần đảo chiều: DFS 1 tính số cạnh ngược hướng đi từ gốc 1. DFS 2 khi dời gốc từ $u$ sang $v$, nếu cạnh là $u \to v$ thì tăng 1, ngược lại giảm 1.*
  4. [CF 161D - Distance in Tree](https://codeforces.com/problemset/problem/161/D) (1800) – *Tree DP: $dp[u][d]$ là số đỉnh ở cây con gốc $u$ có khoảng cách $d$ tới $u$. Gộp thông tin từ các cây con của $u$ để đếm số cặp đỉnh có khoảng cách đúng bằng $k$ trong $O(N \times k)$.*
  5. [CF 337D - Book Evil](https://codeforces.com/problemset/problem/337/D) (2000) – *Tree DP tìm khoảng cách xa nhất tới các quỷ: Lưu 2 khoảng cách lớn nhất trong cây con của $u$, sau đó DFS 2 truyền khoảng cách xa nhất ngoài cây con của $u$ xuống.*
  6. [CF 1092F - Tree with Maximum Cost](https://codeforces.com/problemset/problem/1092/F) (1800) – *Rerooting tính tổng $\sum a_v \times dist(u, v)$: Khi chuyển gốc từ $u$ sang $v$, tổng trọng số cây con của $v$ tiến lại gần 1 bước $(-sum[v])$, phần còn lại xa hơn 1 bước $(+ (total - sum[v]))$.*
  7. [CF 960E - Alternating Tree Paths](https://codeforces.com/problemset/problem/960/E) (2100) – *Tree DP đếm tổng giá trị đường đi đan dấu chẵn/lẻ: Đếm số lượng đường đi có độ dài chẵn và lẻ xuất phát từ $u$ tới các nút con để tính đóng góp của mỗi nút $u$ vào kết quả.*
  8. [CF 1153D - Serval and Rooted Tree](https://codeforces.com/problemset/problem/1153/D) (1700) – *Tree DP: Với nút Max, $dp[u] = \min_{v} dp[v]$ (chỉ cần tối ưu 1 nhánh con). Với nút Min, $dp[u] = \sum_{v} dp[v]$ (phải gánh chịu tổn thất của tất cả các nhánh con).*
  9. [CF 1406C - Link Cut Centroids](https://codeforces.com/problemset/problem/1406/C) (1600) – *Tìm trọng tâm của cây bằng Tree DP kích thước cây con. Nếu cây có 2 trọng tâm $C_1, C_2$, cắt một lá thuộc nhánh $C_1$ rồi nối lại vào $C_2$ để biến $C_1$ thành trọng tâm duy nhất.*
  10. [CF 1528A - Parsa's Humongous Tree](https://codeforces.com/problemset/problem/1528/A) (1600) – *Tree DP 2 trạng thái: Giá trị tối ưu tại mỗi đỉnh chỉ có thể là biên trái $l_u$ hoặc biên phải $r_u$. $dp[u][0/1]$ tính tổng chênh lệch lớn nhất khi gán nhãn cho cả cây con.*

---

## 13. SỐ HỌC MODULAR & TỔ HỢP NÂNG CAO (COMBINATORICS & NUMBER THEORY)
* **Phân hạng:** `Specialist ➔ Expert (1600 - 2000)`
* **Bản chất:**
  * Tính toán tổ hợp $\binom{n}{k} \pmod p$ bằng tiền xử lý giai thừa $fac[n]$ và nghịch đảo modulo $invFac[n]$ qua định lý Fermat nhỏ: $a^{p-2} \equiv a^{-1} \pmod p$.
  * Bài toán chia kẹo Euler (Stars and Bars): Số cách chia $n$ đồ vật giống nhau cho $k$ người là $\binom{n+k-1}{k-1}$. Định lý Bao hàm loại trừ (Principle of Inclusion-Exclusion - PIE).
* **Độ phức tạp:** Tiền xử lý giai thừa $O(N)$, mỗi truy vấn tổ hợp $O(1)$. PIE với $K$ điều kiện mất $O(2^K)$.
* **Link Codeforces Blog:**
  * [Combinatorics and Inverses on Codeforces](https://codeforces.com/blog/entry/54503)
  * [Principle of Inclusion-Exclusion Tutorial](https://codeforces.com/blog/entry/64625)
* **Bài tập tiêu biểu rèn luyện (10 bài phân cấp từ dễ đến khó):**
  1. [CF 300C - Beautiful Numbers](https://codeforces.com/problemset/problem/300/C) (1600) – *Duyệt số lần xuất hiện của chữ số $a$ (gọi là $i$ lần) thì chữ số $b$ xuất hiện $n - i$ lần. Nếu tổng các chữ số là số đẹp, cộng $\binom{n}{i} \pmod{10^9+7}$.*
  2. [CF 559C - Gerald and Giant Chess](https://codeforces.com/problemset/problem/559/C) (2000) – *DP Bao hàm loại trừ: Sắp xếp các ô cấm theo tọa độ tăng dần. $dp[i]$ là số đường đi từ $(1, 1)$ đến ô cấm thứ $i$ mà không đi qua bất kỳ ô cấm nào trước đó.*
  3. [CF 131C - The World is a Theatre](https://codeforces.com/problemset/problem/131/C) (1300) – *Mức cơ bản: Duyệt số nam $i$ từ 4 đến $n$, số nữ còn lại là $t - i \ge 1$. Tính số cách chọn bằng công thức tổ hợp $\binom{n}{i} \times \binom{m}{t-i}$.*
  4. [CF 451E - Devu and Flowers](https://codeforces.com/problemset/problem/451/E) (2400) – *Stars and Bars kết hợp PIE: Dùng Bitmask $2^n$ đại diện cho tập các loại hoa bị lấy vượt quá giới hạn $f_i$, áp dụng công thức bù trừ với số mũ lớn qua nghịch đảo modular.*
  5. [CF 1359E - Modular Stability](https://codeforces.com/problemset/problem/1359/E) (2000) – *Điều kiện ổn định: Mọi số trong dãy đều phải là bội số của số nhỏ nhất $x$. Số lượng bội số của $x$ $\le n$ là $\lfloor n/x \rfloor$, số cách chọn $k-1$ số còn lại là $\binom{\lfloor n/x \rfloor - 1}{k-1}$.*
  6. [CF 895C - Square Subsets](https://codeforces.com/problemset/problem/895/C) (2000) – *Tích là số chính phương khi mọi số mũ nguyên tố đều chẵn. Có 19 số nguyên tố $\le 70$, biểu diễn mỗi số thành bitmask 19 bit chẵn lẻ, quy về bài toán DP Bitmask hoặc Linear Basis.*
  7. [CF 1512G - Short Task](https://codeforces.com/problemset/problem/1512/G) (1700) – *Dùng sàng kiểu Eratosthenes tính tổng các ước $\sigma(x)$ cho toàn bộ các số đến $10^7$ trong $O(N \log N)$, sau đó ghi nhận giá trị $x$ nhỏ nhất có $\sigma(x) = c$.*
  8. [CF 1278D - Segment Tree?](https://codeforces.com/problemset/problem/1278/D) (1900) – *Đồ thị tạo bởi các đoạn giao nhau là một cây $\iff$ có đúng $n-1$ cạnh và không có chu trình. Duyệt quét dòng và dừng ngay khi số cạnh vượt quá $n-1$.*
  9. [CF 1420C2 - Pokémon Army (Hard Version)](https://codeforces.com/problemset/problem/1420/C2) (1800) – *Nhận xét cực trị địa phương: Tổng đan dấu tối đa chính là tổng các đỉnh cực đại trừ đi các đỉnh cực tiểu cục bộ. Khi hoán đổi 2 phần tử, chỉ cập nhật lại các vị trí lân cận.*
  10. [CF 1535E - Gold Transfer](https://codeforces.com/problemset/problem/1535/E) (2100) – *Binary Lifting trên cây: Nhảy lên tổ tiên cao nhất còn vàng để mua với giá rẻ nhất theo chiến lược tham lam, lặp lại cho đến khi mua đủ hoặc hết tiền.*

---

## 14. QUY HOẠCH ĐỘNG BITMASK & SOS DP (SUM OVER SUBSETS)
* **Phân hạng:** `Expert ➔ Candidate Master (1700 - 2100)`
* **Bản chất:**
  * Bitmask DP: Sử dụng số nguyên biểu diễn tập hợp con của tập có $N$ phần tử ($N \le 20$), độ phức tạp $O(2^N \times N)$.
  * SOS DP: Tính tổng hàm $f(mask)$ trên mọi tập con $sub \subseteq mask$ bằng cách cập nhật lần lượt qua từng bit trong $O(N \times 2^N)$ thay vì $O(3^N)$.
* **Độ phức tạp:** Bitmask DP: $O(2^N \times N)$ hoặc $O(3^N)$, SOS DP: $O(N \times 2^N)$.
* **Link Codeforces Blog:**
  * [SOS Dynamic Programming Tutorial](https://codeforces.com/blog/entry/45223)
  * [Bitmask DP from beginner to expert](https://codeforces.com/blog/entry/18169)
* **Bài tập tiêu biểu rèn luyện (10 bài phân cấp từ dễ đến khó):**
  1. [CF 165E - Compatible Numbers](https://codeforces.com/problemset/problem/165/E) (2200) – *Điều kiện $a \,\&\, b = 0 \iff b \subseteq (\sim a)$. Dùng SOS DP trên mảng boolean kích thước $2^{22}$ để tìm một số bất kỳ trong mảng là tập con của phần bù bitmask.*
  2. [CF 580D - Kefa and Dishes](https://codeforces.com/problemset/problem/580/D) (1800) – *Bitmask DP dạng TSP (Người du lịch): $dp[mask][last]$ là điểm thưởng tối đa khi đã ăn tập món trong $mask$ và món ăn gần nhất là $last$. Độ phức tạp $O(2^n \times n^2)$ với $n \le 18$.*
  3. [CF 1209E2 - Rotate Columns (hard version)](https://codeforces.com/problemset/problem/1209/E2) (2400) – *Vì số hàng $n \le 12$, chỉ có tối đa $n$ cột có giá trị lớn nhất là đáng quan tâm. Tiền xử lý giá trị cực đại khi dịch chuyển vòng tròn cho mỗi cột, sau đó chạy Bitmask DP qua các cột.*
  4. [CF 1234F - Yet Another Substring Reverse](https://codeforces.com/problemset/problem/1234/F) (2300) – *Chuỗi con không có ký tự trùng nhau có mask các bit độ dài $\le 20$. Dùng SOS DP tìm độ dài chuỗi con dài nhất là tập con của mọi mask, sau đó ghép cặp $mask$ và $\sim mask$.*
  5. [CF 453B - Little Elephant and Array](https://codeforces.com/problemset/problem/453/B) (2200) – *Vì $b_i < 60$, chỉ có 16 số nguyên tố nhỏ hơn 60. Bitmask DP lưu tập các ước nguyên tố đã được sử dụng: $dp[i][mask]$ tìm mảng nguyên tố cùng nhau có tổng chênh lệch nhỏ nhất.*
  6. [CF 475D - CGCDSSQ](https://codeforces.com/problemset/problem/475/D) (2000) – *Số lượng giá trị GCD khác nhau của các tiền tố kết thúc tại một vị trí tối đa là $\log_2(\max A)$. Duy trì danh sách các cặp $(gcd, count)$ và cập nhật dồn qua từng bước.*
  7. [CF 1556D - Take a Guess](https://codeforces.com/problemset/problem/1556/D) (1800) – *Đẳng thức bit toán học: $a + b = (a \,\&\, b) + (a \mid b)$. Hỏi 3 cặp đỉnh đầu tiên để giải hệ 3 phương trình tìm $a, b, c$, sau đó tìm toàn bộ mảng còn lại.*
  8. [CF 1043F - Make It Connected](https://codeforces.com/problemset/problem/1043/F) (2100) – *Tìm số phần tử ít nhất có GCD bằng 1. Đáp án luôn $\le 7$. Dùng DP kết hợp nghịch đảo Mobius hoặc SOS DP đếm số cách chọn tập con có GCD bằng 1.*
  9. [CF 808G - Anthem of Europe](https://codeforces.com/problemset/problem/808/G) (2400) – *DP kết hợp KMP: $dp[i][j]$ là số lần xuất hiện tối đa của xâu $T$ khi duyệt tới ký tự $i$ của $S$ và đang khớp được tiền tố độ dài $j$ của $T$.*
  10. [CF 38E - Let's Go Rolling!](https://codeforces.com/problemset/problem/38/E) (1700) – *Sắp xếp tọa độ tăng dần. $dp[i][j]$ là chi phí tối thiểu cho $i$ viên bi đầu tiên khi viên bi gần nhất được ghim lại là viên thứ $j$.*

---

## 15. CÂY FENWICK (BIT) & SEGMENT TREE CƠ BẢN (POINT UPDATE, RANGE QUERY)
* **Phân hạng:** `Specialist ➔ Expert (1500 - 1900)`
* **Bản chất:**
  * Fenwick Tree (BIT): Cấu trúc mảng 1D tính tổng tiền tố và cập nhật phần tử dựa trên thao tác bit `i & (-i)`, cài đặt chỉ 10 dòng, bộ nhớ $O(N)$.
  * Segment Tree cơ bản: Cây nhị phân quản lý đoạn con, hỗ trợ cập nhật 1 điểm và truy vấn hàm kết hợp (Sum, Min, Max, GCD) trên đoạn $[L, R]$ trong $O(\log N)$.
* **Độ phức tạp:** Dựng cây $O(N)$, cập nhật 1 điểm $O(\log N)$, truy vấn đoạn $O(\log N)$.
* **Link Codeforces Blog:**
  * [Fenwick Tree Tutorial with visual animations](https://codeforces.com/blog/entry/61364)
  * [Segment Tree for Beginners by PrinceOfPersia](https://codeforces.com/blog/entry/18051)
* **Bài tập tiêu biểu rèn luyện (10 bài phân cấp từ dễ đến khó):**
  1. [CF 61E - Enemy is weak](https://codeforces.com/problemset/problem/61/E) (1600) – *Đếm bộ 3 nghịch thế $a_i > a_j > a_k$: Nén tọa độ, dùng 2 cây Fenwick: một cây đếm số phần tử lớn hơn bên trái và một cây đếm số phần tử nhỏ hơn bên phải.*
  2. [CF 339D - Xenia and Bit Operations](https://codeforces.com/problemset/problem/339/D) (1400) – *Segment tree có phép toán xen kẽ: Tầng đáy thực hiện phép OR, tầng kế thực hiện XOR, xen kẽ liên tục cho tới gốc.*
  3. [CF 459D - Pashmak and Parmida's problem](https://codeforces.com/problemset/problem/459/D) (1800) – *Tính tần suất tiền tố $f(1, i, a_i)$ và hậu tố $f(j, n, a_j)$. Bài toán quy về đếm cặp nghịch thế $pre[i] > suf[j]$ với $i < j$, giải bằng Fenwick Tree.*
  4. [CF 380C - Sereja and Brackets](https://codeforces.com/problemset/problem/380/C) (2000) – *Segment Tree gộp thông tin ngoặc đúng: Mỗi nút lưu số ngoặc đúng $optimal$, số ngoặc mở dư thừa $open$, số ngoặc đóng dư thừa $close$.*
  5. [CF 474F - Ant colony](https://codeforces.com/problemset/problem/474/F) (1900) – *Segment Tree lưu $\gcd$ đoạn và giá trị nhỏ nhất cùng tần suất của nó. Một chú kiến sống sót khi và chỉ khi giá trị của nó bằng đúng $\gcd$ của cả đoạn.*
  6. [CF 1234D - Distinct Characters Queries](https://codeforces.com/problemset/problem/1234/D) (1500) – *Dùng 26 cây Fenwick Tree (hoặc `std::set`) lưu vị trí xuất hiện của từng chữ cái. Truy vấn số ký tự phân biệt trong $[L, R]$ bằng tổng các chữ cái có số lượng $> 0$.*
  7. [CF 522D - Closest Equals](https://codeforces.com/problemset/problem/522/D) (2100) – *Offline queries + Segment Tree: Duyệt $R$ từ trái sang phải, với mỗi phần tử trùng nhau gần nhất tại $prev[i]$, cập nhật khoảng cách vào vị trí $prev[i]$ trên SegTree.*
  8. [CF 276E - Little Girl and Problem on Trees](https://codeforces.com/problemset/problem/276/E) (2100) – *Cây có dạng các nhánh tia tỏa ra từ gốc 1. Dùng Fenwick Tree quản lý khoảng cách trên từng nhánh riêng biệt và một Fenwick Tree chung cho khoảng cách tính từ gốc.*
  9. [CF 1000F - One Occurrence](https://codeforces.com/problemset/problem/1000/F) (2400) – *Segment Tree tìm phần tử chỉ xuất hiện đúng 1 lần: Lưu vị trí xuất hiện trước đó $last[a_i]$ và trước nữa $prev[a_i]$, truy vấn Min trên Segment Tree.*
  10. [CF 1108E2 - Array and Segments (Hard Version)](https://codeforces.com/problemset/problem/1108/E2) (2000) – *Duyệt chọn phần tử nhỏ nhất tại $i$, áp dụng tất cả các đoạn không chứa $i$ để giảm trừ tối đa các phần tử khác, dùng Segment Tree duy trì $\max - \min$.*

---

## 16. SEGMENT TREE CẬP NHẬT LƯỜI (LAZY PROPAGATION SEGMENT TREE)
* **Phân hạng:** `Expert ➔ Candidate Master (1700 - 2100)`
* **Bản chất:**
  * Lazy Propagation trì hoãn việc đẩy thông tin cập nhật xuống các nút lá con cho đến khi có truy vấn thực sự đi qua nút đó (`push_down`).
  * Cho phép thực hiện các thao tác trên đoạn: Cộng đoạn, Gán đoạn, Đảo bit đoạn kết hợp truy vấn Tổng, Min, Max trên đoạn trong $O(\log N)$.
* **Độ phức tạp:** Dựng cây $O(N)$, mỗi thao tác cập nhật đoạn và truy vấn đoạn đều chạy trong $O(\log N)$. Bộ nhớ $O(4N)$.
* **Link Codeforces Blog:**
  * [Segment Tree with Lazy Propagation - Complete Guide](https://codeforces.com/blog/entry/22616)
* **Bài tập tiêu biểu rèn luyện (10 bài phân cấp từ dễ đến khó):**
  1. [CF 292E - Copying Data](https://codeforces.com/problemset/problem/292/E) (1700) – *Lazy Segment Tree gán đè đoạn: Thay vì copy trực tiếp, gán mốc thời gian của thao tác copy lên đoạn của mảng $B$. Truy vấn điểm đọc thời gian copy gần nhất.*
  2. [CF 52C - Circular RMQ](https://codeforces.com/problemset/problem/52/C) (2200) – *Segment Tree cập nhật cộng đoạn và truy vấn Min trên mảng vòng tròn. Nếu đoạn $[L, R]$ bị vòng qua cuối mảng ($L > R$), tách thành 2 truy vấn $[L, n-1]$ và $[0, R]$.*
  3. [CF 877E - Danil and a Part-time Job](https://codeforces.com/problemset/problem/877/E) (1800) – *Euler tour đưa cây con về đoạn liên tiếp $[tin[u], tout[u]]$. Dùng Lazy Segment Tree lật trạng thái bóng đèn (0 thành 1, 1 thành 0) bằng cờ lazy XOR 1.*
  4. [CF 145E - Lucky Queries](https://codeforces.com/problemset/problem/145/E) (2000) – *Segment tree duy trì độ dài dãy con không giảm chữ số may mắn (4 và 7): Lưu số chữ số 4, 7 và độ dài chuỗi dạng $44..77$ và $77..44$. Cập nhật lười đảo 4 thành 7.*
  5. [CF 438D - The Child and Sequence](https://codeforces.com/problemset/problem/438/D) (2300) – *Segment Tree lấy modulo: Do $x \pmod m < x/2$ khi $x \ge m$, giá trị giảm theo hàm mũ. Lưu giá trị Max của mỗi nút; chỉ duyệt sâu vào nhánh con khi $\max \ge m$.*
  6. [CF 920F - SUM and REPLACE](https://codeforces.com/problemset/problem/920/F) (2000) – *Thay thế phần tử bằng số lượng ước $d(x)$. Vì $d(x)$ giảm rất nhanh về 1 hoặc 2, ta duy trì giá trị Max của nút; nếu $\max \le 2$ thì bỏ qua không đệ quy xuống nữa.*
  7. [CF 1114F - Please, another Queries on Array?](https://codeforces.com/problemset/problem/1114/F) (2400) – *Tính hàm phi Euler $\phi(X) = X \times \prod (1 - 1/p)$. Vì các số $\le 300$ chỉ có 62 số nguyên tố, dùng Lazy Segment Tree lưu tích đoạn kết hợp bitmask 62-bit lưu tập các ước nguyên tố.*
  8. [CF 1439C - Greedy Shopping](https://codeforces.com/problemset/problem/1439/C) (2400) – *Segment Tree kết hợp Binary Search trên cây (Walk on Segment Tree): Cập nhật gán $\max(a_i, v)$ trên đoạn không tăng và truy vấn mô phỏng mua kẹo với ngân sách.*
  9. [CF 1208E - Let Them Slide](https://codeforces.com/problemset/problem/1208/E) (2200) – *Tìm đóng góp lớn nhất của mỗi hàng vào từng cột: Trượt cửa sổ tìm Max trong đoạn trượt được và dùng Lazy Segment Tree hoặc Difference Array cộng dồn kết quả.*
  10. [CF 1698D - Fixed Point Guessing](https://codeforces.com/problemset/problem/1698/D) (1600) – *Nhị phân tương tác: Chia đôi đoạn $[L, R]$, hỏi các giá trị trong nửa đầu. Số phần tử có giá trị nằm trong đoạn $[L, M]$ là lẻ khi và chỉ khi phần tử cố định ($a_i = i$) nằm ở nửa đầu.*

---

## 17. XỬ LÝ CHUỖI NÂNG CAO (STRING HASHING, Z-ALGORITHM, KMP, TRIE)
* **Phân hạng:** `Candidate Master (1900 - 2100)`
* **Bản chất:**
  * Polynomial Rolling Hash: So sánh 2 chuỗi con trong $O(1)$ bằng hashing đa thức (nên dùng Double Hash với modulo nguyên tố lớn để chống hack test).
  * KMP (Knuth-Morris-Pratt): Tiền xử lý mảng $\pi[i]$ (tiền tố dài nhất đồng thời là hậu tố thực sự) trong $O(N)$.
  * Z-Algorithm: Mảng $Z[i]$ lưu độ dài tiền tố chung dài nhất giữa chuỗi $S$ và hậu tố bắt đầu tại $i$ trong $O(N)$. Cây Trie quản lý tập từ và tìm kiếm theo tiền tố hoặc tìm XOR lớn nhất (0-1 Trie).
* **Độ phức tạp:** Khởi tạo $O(N)$ hoặc $O(\sum |S|)$, so sánh / tìm kiếm $O(1)$ hoặc $O(|P|)$.
* **Link Codeforces Blog:**
  * [Everything about String Hashing by Neal Wu](https://codeforces.com/blog/entry/60445)
  * [KMP Algorithm and Prefix Function](https://codeforces.com/blog/entry/72458)
* **Bài tập tiêu biểu rèn luyện (10 bài phân cấp từ dễ đến khó):**
  1. [CF 271D - Good Substrings](https://codeforces.com/problemset/problem/271/D) (1600) – *Cây Trie hoặc Rolling Hash đếm số lượng chuỗi con phân biệt chứa không quá $k$ ký tự xấu. Chèn các chuỗi con vào Trie và đếm số nút mới tạo.*
  2. [CF 126B - Password](https://codeforces.com/problemset/problem/126/B) (1700) – *KMP hoặc Z-Algorithm: Tìm chuỗi vừa là tiền tố, vừa là hậu tố và xuất hiện ít nhất một lần ở giữa văn bản. Kiểm tra các giá trị $\pi[n-1]$ và $\pi[\pi[n-1]-1]$.*
  3. [CF 432D - Prefixes and Suffixes](https://codeforces.com/problemset/problem/432/D) (1900) – *Z-Algorithm kết hợp DP đếm tần suất: Tìm các độ dài vừa là tiền tố vừa là hậu tố ($Z[i] == n - i$), sau đó dùng mảng cộng dồn đếm số lần xuất hiện trong xâu.*
  4. [CF 1137B - Camp Schedule](https://codeforces.com/problemset/problem/1137/B) (1600) – *KMP tối ưu ghép xâu: Dùng mảng $\pi$ để tìm phần tiền tố trùng với hậu tố dài nhất của $t$. Ghép 1 lần $t$ hoàn chỉnh, sau đó tham lam lặp lại đoạn đuôi $(t - \pi[|t|-1])$.*
  5. [CF 514C - Watto and Mechanism](https://codeforces.com/problemset/problem/514/C) (1700) – *Polynomial Double Hashing hoặc Trie: Với mỗi chuỗi truy vấn, thử thay đổi từng ký tự thành 2 ký tự khác và kiểm tra mã hash mới có tồn tại trong bảng băm không trong $O(|s| \times 2)$.*
  6. [CF 835D - Palindromic characteristics](https://codeforces.com/problemset/problem/835/D) (1800) – *Dùng Polynomial Hashing tiền xử lý cả chiều xuôi và chiều ngược để kiểm tra một đoạn con bất kỳ có phải là Palindrome hay không trong $O(1)$.*
  7. [CF 471D - MUH and Cube Walls](https://codeforces.com/problemset/problem/471/D) (1800) – *KMP trên mảng hiệu độ cao: Tính mảng chênh lệch giữa các cột kề nhau $\Delta a$ và $\Delta b$, sau đó chạy KMP tìm kiếm mẫu chênh lệch của bức tường.*
  8. [CF 1200E - Compress Words](https://codeforces.com/problemset/problem/1200/E) (1600) – *KMP nối từ vựng: Với mỗi từ mới, ghép tiền tố của từ mới với hậu tố của văn bản hiện tại (độ dài $\le |word|$) qua ký tự phân cách '#' để tìm độ dài trùng lặp bằng mảng $\pi$.*
  9. [CF 1055C - Lucky Days](https://codeforces.com/problemset/problem/1055/C) (1800) – *Thuật toán Euclid mở rộng: Tìm độ giao nhau lớn nhất giữa 2 chu kỳ tuần hoàn bằng cách giải phương trình đồng dư khoảng cách qua $\gcd(t_a, t_b)$.*
  10. [CF 848A - From Y to Y](https://codeforces.com/problemset/problem/848/A) (1500) – *Chi phí tạo $c$ ký tự giống nhau là $\binom{c}{2}$. Tham lam chọn $c$ lớn nhất có $\binom{c}{2} \le k$, trừ đi và chuyển sang ký tự bảng chữ cái tiếp theo.*

---

## 18. THÀNH PHẦN LIÊN THÔNG MẠNH (SCC) & CẦU / KHỚP (TARJAN & 2-SAT)
* **Phân hạng:** `Candidate Master (1900 - 2200)`
* **Bản chất:**
  * Tarjan's Algorithm: Dùng chỉ số DFS `num[u]` và `low[u]` để tìm Cầu (Bridge: $low[v] > num[u]$), Khớp (Articulation Point: $low[v] \ge num[u]$) và Thành phần liên thông mạnh (SCC: $low[u] == num[u]$) trong một lần duyệt duy nhất.
  * 2-SAT (2-Satisfiability): Biểu diễn mệnh đề $(u \lor v) \equiv (\neg u \implies v) \land (\neg v \implies u)$ thành đồ thị có hướng. Hệ có nghiệm $\iff$ không có biến $x$ nào nằm cùng SCC với $\neg x$.
* **Độ phức tạp:** Cả Tarjan tìm SCC/Cầu/Khớp và 2-SAT đều chạy tuyến tính $O(V + E)$.
* **Link Codeforces Blog:**
  * [Tarjan's Strongly Connected Components and Bridges](https://codeforces.com/blog/entry/71659)
  * [2-SAT Tutorial and Implementation](https://codeforces.com/blog/entry/16205)
* **Bài tập tiêu biểu rèn luyện (10 bài phân cấp từ dễ đến khó):**
  1. [CF 427C - Checkposts](https://codeforces.com/problemset/problem/427/C) (1700) – *Tarjan tìm các SCC. Trong mỗi SCC, cảnh sát đặt tại đỉnh có chi phí nhỏ nhất có thể bảo vệ toàn bộ SCC. Chi phí tối thiểu là tổng các min, số cách chọn là tích số lượng các min.*
  2. [CF 118E - Bertown roads](https://codeforces.com/problemset/problem/118/E) (2100) – *DFS Tree kiểm tra Cầu: Nếu đồ thị chứa cầu thì không thể định hướng thành đồ thị liên thông mạnh. Ngược lại, định hướng các cạnh xuôi theo cây DFS và các cạnh ngược hướng lên tổ tiên.*
  3. [CF 776D - The Door Problem](https://codeforces.com/problemset/problem/776/D) (2100) – *2-SAT chuẩn mực: Mỗi phòng điều khiển bởi đúng 2 công tắc $x, y$. Cửa đóng ban đầu đòi hỏi $(x \oplus y = 1)$, cửa mở ban đầu đòi hỏi $(x \oplus y = 0)$. Dựng đồ thị suy diễn và kiểm tra SCC.*
  4. [CF 1000E - We Need More Bosses](https://codeforces.com/problemset/problem/1000/E) (2100) – *Cây cầu-khối (Bridge-Block Tree): Tìm các cầu và co từng thành phần 2-liên thông cạnh thành 1 siêu đỉnh để tạo thành một cây mới. Đáp án là đường kính (đường đi dài nhất) của cây mới này.*
  5. [CF 1213F - Shortest Normal String](https://codeforces.com/problemset/problem/1213/F) (2100) – *Tạo cạnh có hướng $p_i \to p_{i+1}$ và $q_i \to q_{i+1}$. Co các đỉnh trong cùng SCC lại, sau đó sắp xếp topo đồ thị các SCC để gán các chữ cái tăng dần từ 'a' đến 'z'.*
  6. [CF 1438C - Engineer Artem](https://codeforces.com/problemset/problem/1438/C) (2000) – *Tô màu bàn cờ 2 phía (Bipartite 2-coloring): Với các ô có $(i+j)$ chẵn, ta ép giá trị phải là số chẵn (tăng 1 nếu đang lẻ). Với $(i+j)$ lẻ, ép phải là số lẻ. Khi đó không bao giờ có 2 ô kề nhau bằng nhau.*
  7. [CF 1399E2 - Weights Division (hard version)](https://codeforces.com/problemset/problem/1399/E2) (2000) – *DFS tính số lần đi qua mỗi cạnh (tần suất $c_e$). Dùng 2 Priority Queue cho các cạnh chi phí 1 và chi phí 2, tham lam giảm trọng số các cạnh mang lại độ giảm tổng lớn nhất.*
  8. [CF 22E - Scheme](https://codeforces.com/problemset/problem/22/E) (2400) – *Đồ thị hàm (Functional Graph): Mỗi đỉnh có bán bậc ra đúng bằng 1 gồm các chu trình và các cây con hướng vào chu trình. Co các thành phần và nối các lá với các chu trình để tạo 1 SCC lớn.*
  9. [CF 555E - Case of Computer Network](https://codeforces.com/problemset/problem/555/E) (2700) – *Co các thành phần 2-liên thông cạnh thành cây. Định hướng các đường đi trên cây bằng LCA và mảng cộng dồn trên cây để kiểm tra xem có cạnh nào bị yêu cầu đi cả 2 chiều ngược nhau không.*
  10. [CF 1681D - Required Length](https://codeforces.com/problemset/problem/1681/D) (1700) – *BFS trên không gian trạng thái số kết hợp cắt nhánh thông minh: Nhân số hiện tại với các chữ số khác 0 và 1 của chính nó, dùng `std::map` lưu khoảng cách ít nhất đạt độ dài $n$.*

---

## 19. LUỒNG CỰC ĐẠI DINIC & CẶP GHÉP CỰC ĐẠI (MAX FLOW & MIN-CUT)
* **Phân hạng:** `Candidate Master ➔ Master (2000 - 2300)`
* **Bản chất:**
  * Thuật toán Dinic: Tìm luồng cực đại bằng cách chia tầng đồ thị (Level Graph bằng BFS) kết hợp đẩy luồng chặn (Blocking Flow bằng DFS với con trỏ `ptr` tránh duyệt lại) trong $O(V^2 E)$.
  * Định lý Luồng cực đại - Lát cắt hẹp nhất (Max Flow - Min Cut Theorem): Giá trị luồng cực đại từ $S$ đến $T$ bằng dung lượng nhỏ nhất của lát cắt chia cách $S$ và $T$. Ứng dụng mô hình hóa bài toán Project Selection.
* **Độ phức tạp:** Đồ thị tổng quát: $O(V^2 E)$. Trên mạng đơn vị hoặc đồ thị 2 phía: $O(E \sqrt{V})$ (nhanh ngang ngửa Hopcroft-Karp).
* **Link Codeforces Blog:**
  * [Dinic's Algorithm Tutorial and Implementation](https://codeforces.com/blog/entry/64504)
  * [Flow problems and Applications (Min-Cut, Project Selection)](https://codeforces.com/blog/entry/85532)
* **Bài tập tiêu biểu rèn luyện (10 bài phân cấp từ dễ đến khó):**
  1. [CF 1082G - Petya and Graph](https://codeforces.com/problemset/problem/1082/G) (2400) – *Project Selection kinh điển quy về Min-Cut: Đỉnh nguồn $S$ nối tới mỗi cạnh với dung lượng $w_e$. Mỗi cạnh nối tới 2 đỉnh mút với dung lượng $\infty$. Mỗi đỉnh nối tới đích $T$ với dung lượng $a_v$.*
  2. [CF 653D - Delivery Bears](https://codeforces.com/problemset/problem/653/D) (2300) – *Chặt nhị phân trọng lượng mỗi chú gấu là $W$. Dung lượng cạnh mới là $\lfloor cap / W \rfloor$. Chạy Dinic kiểm tra xem luồng cực đại có $\ge x$ chú gấu hay không.*
  3. [CF 847J - Students' Initiation](https://codeforces.com/problemset/problem/847/J) (2200) – *Chặt nhị phân bán bậc vào cực đại $K$. Dựng mạng luồng: $S$ nối tới các cặp cạnh, mỗi cặp cạnh nối tới 2 bạn học sinh, mỗi học sinh nối tới $T$ với dung lượng $K$. Chạy Dinic kiểm tra luồng bão hòa.*
  4. [CF 1139E - Maximize Mex](https://codeforces.com/problemset/problem/1139/E) (2400) – *Đảo ngược thời gian và Bipartite Matching: Thêm dần từng học sinh từ cuối lên, cạnh nối giữa giá trị tiềm năng $val$ và câu lạc bộ. Dùng thuật toán đường tăng luồng (Kuhn) tăng dần giá trị MEX.*
  5. [CF 498C - Array and Operations](https://codeforces.com/problemset/problem/498/C) (2200) – *Với mỗi thừa số nguyên tố $p$, dựng đồ thị 2 phía giữa các phần tử ở vị trí lẻ và chẵn. Dung lượng là số mũ của $p$ trong phân tích thừa số nguyên tố. Chạy Dinic tìm tổng số thao tác triệt tiêu.*
  6. [CF 277E - Binary Tree on Plane](https://codeforces.com/problemset/problem/277/E) (2400) – *Min-Cost Max-Flow (MCMF): Tách mỗi đỉnh thành đỉnh cha (cung cấp tối đa 2 con) và đỉnh con (cần đúng 1 cha). Nối cạnh có hướng từ đỉnh có tung độ lớn hơn xuống đỉnh thấp hơn với chi phí khoảng cách Euclid.*
  7. [CF 311E - Biologist](https://codeforces.com/problemset/problem/311/E) (2600) – *Project Selection mở rộng có phạt: Đỉnh nguồn nối các loài chó, đích nối loài mèo. Các yêu cầu của bạn bè nối với các loài chó/mèo tương ứng, chi phí phạt cộng thêm vào dung lượng lát cắt.*
  8. [CF 724E - Goods transportation](https://codeforces.com/problemset/problem/724/E) (2600) – *Mô hình Min-Cut giải bằng DP: Đồ thị luồng có dạng đặc biệt cho phép phân tích mọi lát cắt $(S, T)$ phụ thuộc vào số lượng đỉnh thuộc $S$. Dùng DP $O(N^2)$ tìm lát cắt nhỏ nhất mà không cần chạy Dinic.*
  9. [CF 1783F - Double Sort II](https://codeforces.com/problemset/problem/1783/F) (2600) – *Phân tích hoán vị thành các chu trình rời nhau. Mỗi thao tác hoán đổi có thể giải quyết 1 cạnh trong chu trình của hoán vị $a$ hoặc $b$. Ghép cặp cực đại trên đồ thị 2 phía giữa các chu trình.*
  10. [CF 827D - Best Edge Weight](https://codeforces.com/problemset/problem/827/D) (2700) – *Dựng cây khung nhỏ nhất (MST). Với cạnh thuộc MST, tìm cạnh ngoài cây nhỏ nhất có thể thay thế nó; với cạnh ngoài MST, tìm cạnh trong cây lớn nhất trên chu trình. Giải bằng HLD kết hợp Segment Tree.*

---

## 20. CÂY PHÂN ĐOẠN BỀN VỮNG (PERSISTENT SEGMENT TREE & PERSISTENT TRIE)
* **Phân hạng:** `Candidate Master ➔ Master (2100 - 2400)`
* **Bản chất:**
  * Persistent Data Structure bảo toàn các phiên bản lịch sử sau mỗi thao tác cập nhật. Khi thay đổi 1 điểm, thay vì sửa trực tiếp, ta tạo một đường dẫn mới từ gốc gồm $\log N$ nút mới, trỏ các nhánh không đổi về phiên bản cũ.
  * Kỹ thuật tiền xử lý $N$ phiên bản tiền tố: Phiên bản thứ $R$ lưu trạng thái mảng $a[1..R]$, cho phép truy vấn đoạn $[L, R]$ bằng cách trừ phiên bản $R$ cho phiên bản $L-1$ (tương tự Prefix Sum).
* **Độ phức tạp:** Mỗi thao tác cập nhật tạo $O(\log N)$ nút mới. Bộ nhớ $O(N \log N)$, thời gian truy vấn $O(\log N)$.
* **Link Codeforces Blog:**
  * [Persistent Segment Tree Tutorial by Anudeep](https://codeforces.com/blog/entry/15729)
  * [Advanced Data Structures: Persistence and Treaps](https://codeforces.com/blog/entry/84101)
* **Bài tập tiêu biểu rèn luyện (10 bài phân cấp từ dễ đến khó):**
  1. [CF 813E - Army Creation](https://codeforces.com/problemset/problem/813/E) (2200) – *Với mỗi phần tử $i$, tìm vị trí xuất hiện thứ $k$ trước đó của cùng giá trị $prev_k[i]$. Phần tử được chọn khi $prev_k[i] < L$. Dùng Persistent Segment Tree đếm số phần tử có $prev_k < L$ trong $[L, R]$.*
  2. [CF 840D - Destiny](https://codeforces.com/problemset/problem/840/D) (2500) – *Tìm phần tử xuất hiện $> (R - L + 1) / k$ lần với $k \le 5$. Dùng Persistent Segment Tree: Tại mỗi bước chỉ có tối đa $k$ nhánh con có tổng tần suất lớn hơn ngưỡng, đệ quy tìm số nhỏ nhất thỏa mãn.*
  3. [CF 707D - Persistent Bookcase](https://codeforces.com/problemset/problem/707/D) (2000) – *Persistent Data Structure trên cây phiên bản: Thao tác kiểu 4 quay lại phiên bản $k$ tạo thành một cây lịch sử các truy vấn. Lưu các truy vấn thành cây và DFS duyệt trên cây lịch sử kết hợp `std::bitset`.*
  4. [CF 960F - Pathwalks](https://codeforces.com/problemset/problem/960/F) (2100) – *Dynamic Segment Tree cho mỗi đỉnh: $dp[u][w]$ là độ dài đường đi dài nhất kết thúc tại đỉnh $u$ với trọng số cạnh cuối cùng là $w$. Cập nhật và truy vấn Max trên SegTree động tại đỉnh $u$.*
  5. [CF 484E - Sign on Fence](https://codeforces.com/problemset/problem/484/E) (2500) – *Sắp xếp các cột theo độ cao giảm dần. Thêm dần từng cột vào Persistent Segment Tree duy trì độ dài đoạn liên tiếp toàn số 1 dài nhất. Chặt nhị phân phiên bản thời gian trên cây bền vững.*
  6. [CF 1422F - Boring Queries](https://codeforces.com/problemset/problem/1422/F) (2700) – *Tính $\text{LCM}(a_L, \dots, a_R) \pmod{10^9+7}$. Tách các số nguyên tố $\le \sqrt{\max A}$ (chỉ có 86 số, lưu số mũ lớn nhất) và các số nguyên tố lớn (mỗi số chỉ xuất hiện số mũ tối đa 1, dùng Persistent SegTree).*
  7. [CF 1093E - Intersection of Permutations](https://codeforces.com/problemset/problem/1093/E) (2400) – *Đếm điểm trong hình chữ nhật 2D khi có đổi chỗ: Fenwick Tree chứa các Treap / PBDS hoặc Persistent Segment Tree kết hợp Fenwick ngoài (BIT of SegTree) cập nhật động.*
  8. [CF 622F - The Sum of the k-th Powers](https://codeforces.com/problemset/problem/622/F) (2000) – *Tổng lũy thừa bậc $k$: $S(n) = \sum_{i=1}^n i^k$ là một đa thức bậc $k+1$ theo $n$. Tính $k+2$ giá trị đầu tiên và dùng công thức nội suy Lagrange tính $S(n)$ trong $O(k)$.*
  9. [CF 1188C - Array Beautification](https://codeforces.com/problemset/problem/1188/C) (2300) – *DP mảng con: Giá trị đẹp nhất của mảng là khoảng cách nhỏ nhất giữa 2 phần tử. Với mỗi giá trị khoảng cách $X$, dùng Two Pointers và DP prefix sum tính số dãy con có khoảng cách $\ge X$.*
  10. [CF 1401E - Divide Square](https://codeforces.com/problemset/problem/1401/E) (2300) – *Công thức Euler cho đồ thị phẳng: Số miền tạo thành $= 1 + \text{số giao điểm} + \text{số đoạn chạm cả 2 biên}$. Quét dòng (Sweep-line) từ trái sang phải dùng Fenwick Tree đếm giao điểm.*

---

## 21. PHÂN TÁCH ĐƯỜNG ĐI NẶNG - NHẸ TRÊN CÂY (HEAVY-LIGHT DECOMPOSITION - HLD)
* **Phân hạng:** `Master (2100 - 2400)`
* **Bản chất:**
  * HLD chia các cạnh của cây thành Cạnh nặng (Heavy Edge: dẫn tới con có kích thước cây con lớn nhất) và Cạnh nhẹ (Light Edge). Cây được phân rã thành các chuỗi nặng liên tục (Heavy Paths).
  * Bất kỳ đường đi nào giữa hai đỉnh bất kỳ trên cây cũng chỉ đi qua tối đa $O(\log N)$ chuỗi nặng. Mỗi chuỗi nặng là một đoạn liên tục trên mảng Euler tour $\implies$ dùng Segment Tree quản lý mọi thao tác trên đường đi trong $O(\log^2 N)$.
* **Độ phức tạp:** Tiền xử lý HLD $O(N)$, mỗi thao tác cập nhật hoặc truy vấn trên đường đi $(u, v)$ mất $O(\log^2 N)$.
* **Link Codeforces Blog:**
  * [Heavy-Light Decomposition Complete Tutorial and Code](https://codeforces.com/blog/entry/81317)
  * [HLD on Codeforces: Practical Tricks and Range Queries](https://codeforces.com/blog/entry/53170)
* **Bài tập tiêu biểu rèn luyện (10 bài phân cấp từ dễ đến khó):**
  1. [CF 165D - Beard Graph](https://codeforces.com/problemset/problem/165/D) (2400) – *HLD cơ bản: Đưa cạnh về đỉnh con sâu hơn. Thao tác biến cạnh thành trắng/đen quy về cập nhật điểm trên Segment Tree. Truy vấn khoảng cách là kiểm tra xem trên đường đi có cạnh đen không.*
  2. [CF 343D - Water Tree](https://codeforces.com/problemset/problem/343/D) (2100) – *Đổ nước vào cây con gốc $u$ (cập nhật đoạn trên Euler tour). Rút nước tại đỉnh $v$ làm rỗng đường đi từ $v$ lên gốc cây (cập nhật đường đi bằng HLD). Truy vấn trạng thái nước bằng Segment Tree.*
  3. [CF 916E - Jamie and Tree](https://codeforces.com/problemset/problem/916/E) (2400) – *HLD với gốc cây động: Cập nhật giá trị đường đi giữa $u$ và $v$ không đổi theo gốc. Cập nhật cây con với gốc động đòi hỏi chia trường hợp dựa trên quan hệ tổ tiên với gốc mới.*
  4. [CF 587C - Duff in the Army](https://codeforces.com/problemset/problem/587/C) (2200) – *HLD kết hợp gộp danh sách: Mỗi nút lưu tối đa 10 ID người nhỏ nhất. Khi nhảy qua các chuỗi nặng của HLD, gộp các danh sách 10 phần tử lại với nhau trong $O(10)$.*
  5. [CF 1023F - Mobile Phone Network](https://codeforces.com/problemset/problem/1023/F) (2700) – *Dựng cây khung chứa toàn bộ $k$ cạnh của ta. Với mỗi cạnh của đối thủ $(u, v)$ có trọng số $w$, dùng HLD gán trọng số $\le w$ cho tất cả các cạnh của ta nằm trên đường đi giữa $u$ và $v$.*
  6. [CF 609E - Minimum spanning tree for each edge](https://codeforces.com/problemset/problem/609/E) (2000) – *Dựng cây khung nhỏ nhất Kruskal. Với mỗi cạnh đề bài cho, truy vấn trọng số lớn nhất trên đường đi giữa 2 đỉnh đầu mút bằng HLD kết hợp Segment Tree RMQ.*
  7. [CF 1239D - Runaway to a Sitter](https://codeforces.com/problemset/problem/1239/D) (2400) – *Xây dựng đồ thị có hướng giữa người và mèo: Nếu người $i$ quen mèo $j$ ($i \ne j$), nối cạnh $i \to j$. Tìm thành phần liên thông mạnh bằng Tarjan; nếu chỉ có 1 SCC thì vô nghiệm.*
  8. [CF 1017G - The Tree](https://codeforces.com/problemset/problem/1017/G) (3100) – *HLD quản lý dòng chảy kích hoạt: Segment Tree lưu tổng và hậu tố lớn nhất (Max Suffix Sum) của các chuỗi nặng để kiểm tra xem một đỉnh có bị kích hoạt bởi các thao tác từ tổ tiên không.*
  9. [CF 739E - Gosha is hunting](https://codeforces.com/problemset/problem/739/E) (2400) – *Tối ưu hóa WQS Binary Search hoặc DP: Tìm hệ số phạt $\lambda$ cho việc sử dụng Pokéball loại 2, quy bài toán về tìm giá trị lớn nhất độc lập cho từng con Pokémon.*
  10. [CF 117E - Tree or not Tree](https://codeforces.com/problemset/problem/117/E) (3000) – *Đồ thị 1 chu trình (cactus / pseudo-tree): Tìm chu trình duy nhất, tách chu trình và các cây con gắn vào chu trình, quản lý lật bit các cạnh bằng HLD trên cây kết hợp Segment Tree trên chu trình.*

---

## 22. TỐI ƯU HÓA QUY HOẠCH ĐỘNG: BAO LỒI (CONVEX HULL TRICK) & CÂY LI CHAO
* **Phân hạng:** `Master (2100 - 2400)`
* **Bản chất:**
  * Convex Hull Trick (CHT): Tối ưu hóa hệ thức quy hoạch động có dạng $dp[i] = \min_{j < i}(dp[j] + a[i] \times b[j])$. Mỗi trạng thái $j$ là một đường thẳng $y = m x + c$ với hệ số góc $m = b[j]$ và hằng số $c = dp[j]$.
  * Nếu hệ số góc $m$ đơn điệu, dùng `std::deque` duy trì bao lồi trong $O(N)$. Nếu hệ số góc hoặc truy vấn không đơn điệu, dùng Cây Li Chao (Li Chao Segment Tree) hỗ trợ thêm đoạn thẳng và truy vấn cực trị tại $x$ trong $O(\log(\text{range}))$, cài đặt cực kỳ tinh gọn.
* **Độ phức tạp:** CHT đơn điệu: $O(N)$. Cây Li Chao: $O(N \log C)$ với $C$ là miền giá trị của tọa độ $x$.
* **Link Codeforces Blog:**
  * [Convex Hull Trick and Li Chao Tree Tutorial](https://codeforces.com/blog/entry/63823)
  * [Li Chao Segment Tree: The Elegant Way to CHT](https://codeforces.com/blog/entry/51532)
* **Bài tập tiêu biểu rèn luyện (10 bài phân cấp từ dễ đến khó):**
  1. [CF 319C - Kalila and Dimna in the Logging Industry](https://codeforces.com/problemset/problem/319/C) (2100) – *CHT cổ điển: $dp[i] = \min_{j < i}(dp[j] + a_i \times b_j)$. Do $a_i$ tăng dần và $b_i$ giảm dần, sử dụng hàng đợi `std::deque` duy trì bao lồi các đường thẳng, giải trong $O(N)$.*
  2. [CF 1083E - The Fair Nut and Rectangles](https://codeforces.com/problemset/problem/1083/E) (2400) – *Sắp xếp các hình chữ nhật theo tọa độ $x$ tăng dần (kéo theo $y$ giảm dần). $dp[i] = x_i y_i - a_i + \max_{j < i}(dp[j] - x_j y_i)$. Áp dụng CHT tìm giá trị lớn nhất.*
  3. [CF 932F - Escape Through Leaf](https://codeforces.com/problemset/problem/932/F) (2500) – *Tree DP kết hợp Cây Li Chao: Tại mỗi nút trên cây, ta cần truy vấn giá trị nhỏ nhất từ tập các đường thẳng của tất cả các lá trong cây con. Dùng kỹ thuật gộp cây Li Chao (Li Chao Tree Merge).*
  4. [CF 1179D - Fedor Does Runs](https://codeforces.com/problemset/problem/1179/D) (2600) – *Tìm đường đi đơn tối thiểu hóa số cặp không thuộc đường đi: Tree DP kết hợp CHT để ghép cặp 2 nhánh con tối ưu nhất tại mỗi đỉnh cha trong $O(N)$.*
  5. [CF 631E - Product Sum](https://codeforces.com/problemset/problem/631/E) (2600) – *Dịch chuyển phần tử $a_i$ sang $j$ làm thay đổi tổng tích lũy $\sum i \times a_i$. Biến đổi công thức độ chênh lệch thành hàm bậc nhất của $a_i$, giải bằng Cây Li Chao.*
  6. [CF 455E - Function](https://codeforces.com/problemset/problem/455/E) (2600) – *Biến đổi hàm đệ quy thành bài toán tìm giá trị nhỏ nhất của các đường thẳng có dạng $f(j) = a_j \times (x - y) + (y \times a_j - S_j)$. Giải bằng Segment Tree các Cây Li Chao.*
  7. [CF 1299C - Water Balance](https://codeforces.com/problemset/problem/1299/C) (2000) – *Bao lồi trên đồ thị mảng cộng dồn: San bằng các đoạn nước tương đương với việc tìm bao lồi dưới (Lower Convex Hull) của các điểm $(i, P[i])$. Dùng ngăn xếp duy trì độ dốc tăng dần.*
  8. [CF 1303G - Antichain](https://codeforces.com/problemset/problem/1303/G) (2900) – *Centroid Decomposition kết hợp CHT: Tính tổng trọng số nhân khoảng cách dọc đường đi qua trọng tâm. Mỗi đường đi từ trọng tâm xuống lá trở thành một đường thẳng trong CHT.*
  9. [CF 715C - Digit Tree](https://codeforces.com/problemset/problem/715/C) (2700) – *Centroid Decomposition đếm số đường đi tạo thành số chia hết cho $M$: Ghép các đường đi lên trọng tâm và từ trọng tâm xuống lá thông qua nghịch đảo modulo Euler.*
  10. [CF 1392E - Omkar and Duck](https://codeforces.com/problemset/problem/1392/E) (2100) – *Quy hoạch ma trận bằng lũy thừa của 2: Gán giá trị các ô trên lưới sao cho mỗi đường đi từ $(1, 1)$ đến $(n, n)$ sinh ra một tổng duy nhất, khôi phục đường đi bằng cách kiểm tra từng bit.*

---

## 23. CÂY ẢO (VIRTUAL TREE / AUXILIARY TREE)
* **Phân hạng:** `Grandmaster (2400 - 2700+)`
* **Bản chất:**
  * Khi có $K$ đỉnh quan trọng trên cây $N$ đỉnh và $\sum K \le 10^5$, thuật toán trên toàn bộ cây sẽ bị TLE. Cây ảo trích xuất một cây con chỉ gồm đúng $K$ đỉnh này và các LCA của từng cặp đỉnh liền kề.
  * Kỹ thuật dựng cây ảo: Sắp xếp $K$ đỉnh theo thời gian vào `tin` của Euler Tour, dùng một `std::stack` duy trì chuỗi tổ tiên để dựng cây ảo kích thước tối đa $2K$ nút trong $O(K \log K)$. Sau đó chạy Tree DP trực tiếp trên cây ảo.
* **Độ phức tạp:** Dựng cây và giải bài toán trong $O(K \log K)$ cho mỗi truy vấn, tổng thể $O(\sum K \log K)$.
* **Link Codeforces Blog:**
  * [Virtual Trees (Auxiliary Trees) Tutorial](https://codeforces.com/blog/entry/73644)
  * [Building Auxiliary Tree in O(K log K) with Stack](https://codeforces.com/blog/entry/71567)
* **Bài tập tiêu biểu rèn luyện (10 bài phân cấp từ dễ đến khó):**
  1. [CF 613D - Kingdom and its Cities](https://codeforces.com/problemset/problem/613/D) (2800) – *Bài toán kinh điển về Cây ảo: Cho $k$ thành phố quan trọng, cần xóa ít đỉnh trung gian nhất để cô lập chúng. Dựng Cây ảo kích thước $O(k)$ và chạy Tree DP tham lam cắt đỉnh.*
  2. [CF 1111E - Tree Queries](https://codeforces.com/problemset/problem/1111/E) (2600) – *Dựng Cây ảo trên tập $k$ đỉnh cần xét cùng đỉnh gốc $r$. Tính số tổ tiên là đỉnh quan trọng của mỗi nút, sau đó chạy DP xếp nhóm độc lập không vượt quá $m$ nhóm.*
  3. [CF 1320E - Treeland Virus](https://codeforces.com/problemset/problem/1320/E) (2800) – *Virus lây lan trên cây với tốc độ khác nhau: Dựng Cây ảo chứa các tâm phát tán virus và các thành phố cần truy vấn. Chạy thuật toán Dijkstra đa nguồn trực tiếp trên Cây ảo.*
  4. [CF 809E - Surprise me!](https://codeforces.com/problemset/problem/809/E) (2900) – *Tính $\sum \phi(a_u \times a_v) \times dist(u, v)$: Áp dụng đảo ngược Mobius và hàm nhân tính $\phi$, với mỗi ước $d$, dựng Cây ảo trên tập các bội số của $d$ để tính tổng khoảng cách.*
  5. [CF 1254D - Tree Queries](https://codeforces.com/problemset/problem/1254/D) (2700) – *Chia căn bậc của đỉnh (Heavy-Light Vertex): Các đỉnh có bậc lớn $> \sqrt{N}$ được tiền xử lý riêng, các đỉnh bậc nhỏ cập nhật trực tiếp vào cây con qua Euler Tour và Segment Tree.*
  6. [CF 980E - The Number of Games](https://codeforces.com/problemset/problem/980/E) (2200) – *Tham lam từ lớn về bé: Vì $2^i > \sum_{j < i} 2^j$, ta duyệt từ $N$ về 1, dùng Binary Lifting kiểm tra số đỉnh cần thêm từ $i$ lên cây đã chọn có $\le k$ hay không để nạp vào cây.*
  7. [CF 576E - Painting Edges](https://codeforces.com/problemset/problem/576/E) (3000) – *Divide and Conquer trên trục thời gian kết hợp DSU Rollback (hoặc Cây ảo): Kiểm tra tính 2 phía của từng màu và hoàn tác trạng thái nếu việc tô màu thất bại.*
  8. [CF 1746F - Kazaee](https://codeforces.com/problemset/problem/1746/F) (2800) – *Xác suất Hashing: Gán cho mỗi số một giá trị ngẫu nhiên 0/1 (hoặc số nguyên ngẫu nhiên). Kiểm tra tổng giá trị trên đoạn có chia hết cho $k$ với 30-40 mảng ngẫu nhiên độc lập.*
  9. [CF 1060F - Shrinking Tree](https://codeforces.com/problemset/problem/1060/F) (3000) – *Tree DP xác suất gộp cạnh: $dp[u][i]$ là xác suất cây con gốc $u$ co lại thành đỉnh $u$ khi có $i$ cạnh bị gộp trước cạnh nối $u$ với cha. Gộp các nhánh con bằng DP tích chập tổ hợp.*
  10. [CF 1528D - It's a Guess!](https://codeforces.com/problemset/problem/1528/D) (2700) – *Dijkstra tối ưu trên đồ thị xoay vòng: Do các cạnh xoay vòng tròn theo thời gian, sau khi tìm được khoảng cách ngắn nhất đến đỉnh $u$, ta có thể lan tỏa sang đỉnh $(u+1) \pmod n$ với chi phí 1.*

---

## 24. TÌM KIẾM NHỊ PHÂN SONG SONG (PARALLEL BINARY SEARCH)
* **Phân hạng:** `Grandmaster (2400 - 2700+)`
* **Bản chất:**
  * Áp dụng khi có $Q$ truy vấn độc lập, mỗi truy vấn cần tìm kiếm nhị phân thời điểm $T$ mà một điều kiện được thỏa mãn, nhưng việc chạy riêng từng truy vấn sẽ tốn cấu trúc dữ liệu và bị TLE.
  * Parallel BS chạy nhị phân đồng thời cho toàn bộ $Q$ truy vấn qua $\log(\text{Time})$ vòng lặp. Mỗi vòng lặp áp dụng các biến đổi từ $1$ đến $Mid$, sau đó kiểm tra và phân loại các truy vấn sang nhánh trái $[L, Mid]$ hoặc nhánh phải $[Mid+1, R]$.
* **Độ phức tạp:** Mỗi biến đổi và kiểm tra mất $O(M \log N)$, lặp lại $\log(\text{Time})$ lần $\implies O((N + Q) \log(\text{Time}) \log N)$.
* **Link Codeforces Blog:**
  * [Parallel Binary Search Tutorial by Errichto](https://codeforces.com/blog/entry/45508)
  * [Parallel Binary Search on Codeforces](https://codeforces.com/blog/entry/77519)
* **Bài tập tiêu biểu rèn luyện (10 bài phân cấp từ dễ đến khó):**
  1. [CF 484E - Sign on Fence](https://codeforces.com/problemset/problem/484/E) (2500) – *Tìm độ cao lớn nhất của bảng quảng cáo có chiều rộng $w$ lọt vừa hàng rào trong $[L, R]$. Giải bằng Parallel Binary Search kết hợp Segment Tree duy trì đoạn 1 liên tiếp dài nhất.*
  2. [CF 1100F - Ivan and Burgers](https://codeforces.com/problemset/problem/1100/F) (2500) – *Truy vấn Max XOR đoạn con: Xây dựng Linear Basis theo tiền tố (Prefix Linear Basis), lưu kèm vị trí xuất hiện lớn nhất của mỗi bit cơ sở để trả lời mọi truy vấn trong $O(30)$.*
  3. [CF 1065F - Up and Down the Tree](https://codeforces.com/problemset/problem/1065/F) (2400) – *Tree DP: Nút có thể nhảy ngược lên tổ tiên nếu khoảng cách tới lá $\le k$. Tính số lá có thể thu gom được mà vẫn quay về được tổ tiên, và số lá tối đa thu gom được nếu không cần quay về.*
  4. [CF 1208F - Fooling TSP](https://codeforces.com/problemset/problem/1208/F) (2400) – *SOS DP tối ưu hóa: Duy trì 2 chỉ số lớn nhất $j < k$ thỏa mãn $mask \subseteq (a_j \,\&\, a_k)$. Duyệt $i$ từ phải sang trái, tham lam từng bit từ cao xuống thấp để tối đa hóa $a_i \mid (a_j \,\&\, a_k)$.*
  5. [CF 685C - Optimal Point](https://codeforces.com/problemset/problem/685/C) (2900) – *Chặt nhị phân bán kính khoảng cách Manhattan $R$. Biến đổi tọa độ $(x, y, z)$ thành 4 biến $(x+y+z, x+y-z, x-y+z, -x+y+z)$, giải hệ bất phương trình khoảng nguyên.*
  6. [CF 1379D - Freight Train](https://codeforces.com/problemset/problem/1379/D) (2400) – *Two Pointers trên vòng tròn modulo $m/2$: Tìm khoảng thời gian bảo trì độ dài $k$ sao cho số lượng chuyến tàu bị hủy là ít nhất.*
  7. [CF 149D - Coloring Brackets](https://codeforces.com/problemset/problem/149/D) (1900) – *DP ngoặc lồng nhau: $dp[l][r][c_l][c_r]$ là số cách tô màu đoạn ngoặc đúng $[l, r]$ khi ngoặc tại $l$ có màu $c_l$ và tại $r$ có màu $c_r$ thỏa mãn các ràng buộc kề nhau.*
  8. [CF 1363E - Tree Shuffling](https://codeforces.com/problemset/problem/1363/E) (1700) – *Tree DP tham lam: Đẩy chi phí rẻ nhất từ gốc xuống các nút con: $cost[u] = \min(cost[u], cost[parent])$. Tại mỗi cây con, ghép tối đa các cặp $(0\to 1)$ và $(1\to 0)$ với chi phí của nút cha.*
  9. [CF 1188D - Make Equal](https://codeforces.com/problemset/problem/1188/D) (3100) – *DP trên từng bit từ 0 đến 60: Số lượng phép nhớ (carry) khi cộng thêm $X$ vào mảng phụ thuộc vào thứ tự sắp xếp của $(a_i \pmod{2^k})$. Trạng thái DP lưu số lượng phần tử có nhớ.*
  10. [CF 1689E - AND-OR-Square](https://codeforces.com/problemset/problem/1689/E) (2400) – *DSU kiểm tra tính liên thông bit: Đáp án luôn $\le 2$ thao tác tăng/giảm. Dùng DSU kiểm tra xem mảng đã liên thông chưa; nếu chưa thử thay đổi 1 phần tử, nếu vẫn không được thì thay đổi 2 phần tử.*

---

## 25. TỐI ƯU HÓA WQS / ALIEN'S TRICK (LAMBDA OPTIMIZATION)
* **Phân hạng:** `Grandmaster (2500 - 2800+)`
* **Bản chất:**
  * Alien's Trick (WQS Binary Search) giải quyết bài toán tối ưu hóa khi có ràng buộc 'chọn đúng $K$ phần tử' mà hàm chi phí tối ưu theo $K$, ký hiệu $f(K)$, có tính chất lồi (Convex) hoặc lõm (Concave).
  * Kỹ thuật nhân tử Lagrange (Lambda Penalty): Phạt một lượng chi phí $\lambda$ cho mỗi lần chọn một phần tử. Ta chặt nhị phân hệ số phạt $\lambda$ để tìm điểm tiếp xúc có đạo hàm bằng $\lambda$, loại bỏ hoàn toàn ràng buộc chọn đúng $K$ phần tử và đưa về DP không ràng buộc.
* **Độ phức tạp:** Thời gian $O(\log(\text{cost}) \times \text{Cost}(DP))$. Giảm số chiều của quy hoạch động đi 1 bậc.
* **Link Codeforces Blog:**
  * [The Alien's Trick (WQS Binary Search) Explained](https://codeforces.com/blog/entry/67634)
  * [WQS Binary Search / Slope Trick Tutorial](https://codeforces.com/blog/entry/78584)
* **Bài tập tiêu biểu rèn luyện (10 bài phân cấp từ dễ đến khó):**
  1. [CF 739E - Gosha is hunting](https://codeforces.com/problemset/problem/739/E) (2400) – *WQS Binary Search kinh điển: Giới hạn $a$ bóng loại 1 và $b$ bóng loại 2. Chặt nhị phân hình phạt $\lambda$ cho mỗi lần ném bóng loại 2, quy bài toán về DP tham lam 1 chiều.*
  2. [CF 802O - Send the Fool Further (hard)](https://codeforces.com/problemset/problem/802/O) (2900) – *Chọn đúng $k$ cặp gửi thông điệp: Chặt nhị phân chi phí phạt $\lambda$ cho mỗi gói gửi bằng Alien's Trick, sau đó dùng Priority Queue (Regret Greedy) giải bài toán không giới hạn số lượng.*
  3. [CF 1270G - Subset with Zero Sum](https://codeforces.com/problemset/problem/1270/G) (2600) – *Dựng đồ thị có hướng $i \to i - a_i$. Vì $1 \le i - a_i \le n$, mọi đỉnh đều có bậc ra đúng bằng 1 (Functional Graph). Chu trình có hướng trên đồ thị này chính là tập hợp có tổng bằng 0!*
  4. [CF 1344D - Résumé Review](https://codeforces.com/problemset/problem/1344/D) (2500) – *Hàm lợi ích $f(b_i) = b_i (a_i - b_i^2)$ có đạo hàm giảm dần (hàm lõm). Chặt nhị phân độ dốc biên $\lambda = f'(b_i)$, với mỗi $a_i$ tìm nghiệm nguyên $b_i$ thỏa đạo hàm $\ge \lambda$ sao cho $\sum b_i = k$.*
  5. [CF 1097E - Egor and an RPG game](https://codeforces.com/problemset/problem/1097/E) (2700) – *Định lý Dilworth: Nếu độ dài LIS $\ge k$, ta bóc tách dãy LIS đó ra; nếu LIS $< k$, mảng có thể phân rã thành $< k$ dãy giảm dần. Lặp lại quá trình bóc tách để đạt tối đa $k$ dãy.*
  6. [CF 1250N - Wire Reconstruction](https://codeforces.com/problemset/problem/1250/N) (1900) – *Đồ thị và thành phần liên thông: Co các dây nối thành cây khung, nhấc các cạnh thừa không cần thiết của các thành phần liên thông để nối chúng lại thành một đồ thị liên thông duy nhất.*
  7. [CF 1394C - Boboniu and String](https://codeforces.com/problemset/problem/1394/C) (2800) – *Biểu diễn mỗi xâu thành cặp $(cnt_B, cnt_N)$ trên mặt phẳng tọa độ. Chặt nhị phân bán kính khoảng cách Chebyshev và kiểm tra giao điểm của các hình bình hành $45^\circ$.*
  8. [CF 1479D - Odd Mineral Resource](https://codeforces.com/problemset/problem/1479/D) (2700) – *Persistent Segment Tree kết hợp gán nhãn ngẫu nhiên XOR (XOR Hashing): Gán mỗi loại khoáng sản một số ngẫu nhiên 64-bit, kiểm tra giá trị XOR trên cây để tìm khoáng sản xuất hiện lẻ lần.*
  9. [CF 1530E - Minimax](https://codeforces.com/problemset/problem/1530/E) (1900) – *Tham lam phân tích trường hợp: Sắp xếp các ký tự và xây dựng chuỗi có $\max \pi[i]$ nhỏ nhất có thể (bằng 0 nếu có chữ cái xuất hiện 1 lần, bằng 1 nếu phân bổ xen kẽ được).*
  10. [CF 1601D - Difficult Mountain](https://codeforces.com/problemset/problem/1601/D) (2500) – *Bất đẳng thức hoán vị (Exchange Argument): Sắp xếp các nhà leo núi theo khóa $\max(s_i, a_i)$ tăng dần, nếu bằng nhau sắp xếp theo $s_i$ tăng dần. Sau đó tham lam duyệt lấy người leo núi.*

---

## 26. PHÂN TÁCH TRỌNG TÂM TRÊN CÂY (CENTROID DECOMPOSITION)
* **Phân hạng:** `Grandmaster (2400 - 2700+)`
* **Bản chất:**
  * Trọng tâm của cây là đỉnh mà khi xóa nó, mọi cây con còn lại đều có kích thước không vượt quá $N/2$.
  * Centroid Decomposition chia để trị trên cây: Tìm trọng tâm, giải quyết các đường đi đi qua trọng tâm, sau đó xóa trọng tâm và đệ quy vào các cây con. Cây trọng tâm (Centroid Tree) có độ sâu tối đa chỉ $O(\log N)$.
* **Độ phức tạp:** Độ sâu đệ quy $O(\log N)$. Tổng thời gian xử lý mọi tầng là $O(N \log N)$ hoặc $O(N \log^2 N)$.
* **Link Codeforces Blog:**
  * [Centroid Decomposition Tutorial and Applications](https://codeforces.com/blog/entry/81661)
  * [Divide and Conquer on Trees (Centroid)](https://codeforces.com/blog/entry/58025)
* **Bài tập tiêu biểu rèn luyện (10 bài phân cấp từ dễ đến khó):**
  1. [CF 321C - Ciel the Commander](https://codeforces.com/problemset/problem/321/C) (2100) – *Mức thông hiểu: Tìm trọng tâm gán nhãn 'A', sau đó đệ quy vào các cây con gán 'B', 'C'... Vì độ sâu cây trọng tâm $\le \log_2(10^5) \approx 17 \le 26$, luôn gán đủ bằng bảng chữ cái tiếng Anh.*
  2. [CF 161D - Distance in tree](https://codeforces.com/problemset/problem/161/D) (1800) – *Đếm số cặp đỉnh có khoảng cách bằng $k$: Tìm trọng tâm, tính khoảng cách từ trọng tâm tới các lá, dùng mảng đếm tần suất ghép cặp $d_1 + d_2 = k$ và trừ đi các cặp cùng nhánh con.*
  3. [CF 342E - Xenia and Tree](https://codeforces.com/problemset/problem/342/E) (2400) – *Centroid Tree động: Dựng cây trọng tâm. Mỗi nút trọng tâm lưu khoảng cách nhỏ nhất tới một nút đỏ trong cây con trọng tâm của nó. Khi cập nhật đỏ, nhảy lên $O(\log N)$ tổ tiên trọng tâm để cập nhật.*
  4. [CF 1790F - Timofey and Black-White Tree](https://codeforces.com/problemset/problem/1790/F) (2100) – *Cập nhật đỉnh đen và truy vấn khoảng cách ngắn nhất: Dùng Centroid Tree hoặc nhận xét BFS: Khoảng cách ngắn nhất giảm dần sau mỗi thao tác và không bao giờ vượt quá $\sqrt{N}$.*
  5. [CF 1303G - Antichain](https://codeforces.com/problemset/problem/1303/G) (2900) – *Centroid Decomposition kết hợp Convex Hull Trick: Tính tổng $\sum_{i=1}^k i \times a_i$ trên đường đi. Mỗi đường đi từ trọng tâm xuống lá là một đường thẳng $y = mx + c$, tối ưu bằng Li Chao Tree.*
  6. [CF 715C - Digit Tree](https://codeforces.com/problemset/problem/715/C) (2700) – *Centroid Decomposition kết hợp nghịch đảo modulo: Ghép đường đi từ $u$ lên trọng tâm $C$ và từ $C$ xuống $v$ sao cho $(val_{up} \times 10^{len} + val_{down}) \equiv 0 \pmod M$ bằng `std::map`.*
  7. [CF 150E - Freezing with Style](https://codeforces.com/problemset/problem/150/E) (3100) – *Centroid Decomposition kết hợp chặt nhị phân trung vị và Monotonic Queue: Chuyển trọng số cạnh thành $+1$ hoặc $-1$, tìm đường đi có độ dài trong $[L, R]$ có tổng trọng số $\ge 0$.*
  8. [CF 1260F - Colored Tree](https://codeforces.com/problemset/problem/1260/F) (3000) – *Tính tổng khoảng cách giữa các cặp đỉnh có màu giao nhau: Chuyển bài toán thành quét dòng trên màu sắc kết hợp Centroid Decomposition hoặc Euler Tour cập nhật trên Fenwick Tree.*
  9. [CF 1178F2 - Short Colorful Strip](https://codeforces.com/problemset/problem/1178/F2) (2800) – *Nén các đoạn màu liên tiếp giống nhau, kiểm tra tính hợp lệ của các khoảng màu lồng nhau, sau đó chạy DP trên đoạn $[L, R]$ chia tách tại vị trí màu nhỏ nhất.*
  10. [CF 1437F - Emotional Fishermen](https://codeforces.com/problemset/problem/1437/F) (2600) – *Sắp xếp các phần tử tăng dần. $dp[i]$ là số cách xếp sao cho $a_i$ là phần tử hợp lệ tiếp theo (gấp đôi phần tử trước đó). Tối ưu hóa chuyển trạng thái bằng mảng cộng dồn.*

---

## 27. BIẾN ĐỔI FOURIER NHANH (FAST FOURIER TRANSFORM - FFT / NTT)
* **Phân hạng:** `Grandmaster (2400 - 2800+)`
* **Bản chất:**
  * FFT (trên số phức) và NTT (Number Theoretic Transform trên trường hữu hạn $\mathbb{Z}_p$ với modulo nguyên tố dạng $c \times 2^k + 1$ như $998244353$) tính tích chập (Convolution) của 2 đa thức $A(x) \times B(x)$ bậc $N$ trong $O(N \log N)$ thay vì $O(N^2)$.
  * Chuyển đổi biểu diễn hệ số (Coefficient representation) sang biểu diễn giá trị điểm (Point-value representation) tại các nghiệm đơn vị (Roots of unity) và ngược lại qua IFFT/INTT.
* **Độ phức tạp:** Nhân 2 đa thức bậc $N$ trong $O(N \log N)$. Nghịch đảo đa thức, tính $\ln, \exp$ trong $O(N \log N)$.
* **Link Codeforces Blog:**
  * [Comprehensive FFT/NTT Tutorial on Codeforces](https://codeforces.com/blog/entry/43499)
  * [Polynomial Operations and NTT by MiFaFaOvO](https://codeforces.com/blog/entry/48798)
* **Bài tập tiêu biểu rèn luyện (10 bài phân cấp từ dễ đến khó):**
  1. [CF 528D - Fuzzy Search](https://codeforces.com/problemset/problem/528/D) (2200) – *FFT so khớp chuỗi có sai số: Với mỗi ký tự ('A', 'C', 'G', 'T'), mở rộng vùng an toàn $k$ đơn vị. Đảo ngược chuỗi mẫu $P$ và tính tích chập FFT với văn bản $T$ để đếm số lượng ký tự khớp.*
  2. [CF 954I - Yet Another String Matching Problem](https://codeforces.com/problemset/problem/954/I) (2200) – *Có 6 chữ cái từ 'a' đến 'f' $\implies \binom{6}{2} = 15$ cặp chữ cái. Chạy FFT cho mỗi cặp $(c_1, c_2)$ để kiểm tra xem tại vị trí dịch chuyển nào có sự xuất hiện của cạnh nối, sau đó dùng DSU đếm số thao tác.*
  3. [CF 1096G - Lucky Tickets](https://codeforces.com/problemset/problem/1096/G) (2300) – *Tạo đa thức đặc trưng $P(x) = \sum x^d$ cho các chữ số cho phép. Đa thức sinh tổng nửa đầu là $P(x)^{n/2} \pmod{998244353}$. Dùng lũy thừa nhị phân đa thức kết hợp NTT, đáp án là $\sum c_i^2$.*
  4. [CF 632E - Thief in a Shop](https://codeforces.com/problemset/problem/632/E) (2400) – *Tìm mọi giá trị có thể tạo thành từ đúng $k$ món đồ: Đa thức $P(x)$ với $x^v = 1$ nếu có món đồ giá $v$. Tính $P(x)^k$ bằng lũy thừa nhanh NTT, các số mũ có hệ số $> 0$ là giá trị khả thi.*
  5. [CF 1398G - Running Competition](https://codeforces.com/problemset/problem/1398/G) (2600) – *Tìm mọi hiệu khoảng cách $x_j - x_i$: Đặt $A(x) = \sum x^{a_i}$ và $B(x) = \sum x^{-a_i} = \sum x^{M - a_i}$. Tích chập $A \times B$ qua FFT cho biết mọi khoảng cách xuất hiện. Sau đó duyệt ước số trả lời truy vấn.*
  6. [CF 1251F - White Lines](https://codeforces.com/problemset/problem/1251/F) (2600) – *Với mỗi bảng trắng, các thanh chắn ngắn hơn chia thành nhóm xuất hiện 1 lần (đóng góp $(1 + 2x)$) và nhóm xuất hiện $\ge 2$ lần (đóng góp $(1 + 2x + x^2) = (1+x)^2$). Nhân đa thức bằng NTT.*
  7. [CF 1613F - Tree Xor](https://codeforces.com/problemset/problem/1613/F) (2500) – *Bao hàm loại trừ trên cây: Biến đổi thành tích của $N$ nhị thức bậc 1 $(1 + d_i x)$ với $d_i$ là số con của nút $i$. Dùng Divide and Conquer kết hợp NTT nhân $N$ nhị thức trong $O(N \log^2 N)$.*
  8. [CF 986D - Perfect Power](https://codeforces.com/problemset/problem/986/D) (2900) – *Nhân số lớn bằng FFT: Tích các số có tổng cố định đạt cực đại khi chia thành các số 3. Tính $3^k$ bằng lũy thừa nhị phân số lớn sử dụng FFT, so sánh với số nguyên lớn $n$.*
  9. [CF 1039D - You Are Given a Tree](https://codeforces.com/problemset/problem/1039/D) (2800) – *Chia căn kết quả: Với $k \le \sqrt{N \log N}$, chạy Tree DP tham lam $O(N)$. Với các giá trị $ans \le N/k \le \sqrt{N}$, dùng chặt nhị phân tìm khoảng các giá trị $k$ có cùng đáp án (Parallel/Block BS).*
  10. [CF 884E - Binary Matrix](https://codeforces.com/problemset/problem/884/E) (2600) – *Quản lý bộ nhớ cực hạn ($16$ MB) cho ma trận $2^{12} \times 2^{14}$: DSU nén chỉ lưu 2 dòng liên tiếp tại mỗi bước duyệt, gán lại nhãn các thành phần liên thông để không bị tràn bộ nhớ.*

---

## 28. SUFFIX AUTOMATON (SAM - MÁY TỰ ĐỘNG HẬU TỐ) & CÂY HẬU TỐ
* **Phân hạng:** `Legendary Grandmaster (2600 - 3000+)`
* **Bản chất:**
  * Suffix Automaton (SAM) là một Đồ thị có hướng không chu trình (DAG) nén toàn bộ thông tin của tất cả các chuỗi con của một chuỗi $S$ độ dài $N$ trong đúng $O(N)$ trạng thái và $O(N)$ bước chuyển.
  * Mỗi trạng thái đại diện cho một lớp tương đương các chuỗi con có cùng tập hợp vị trí kết thúc `endpos`. Cây liên kết hậu tố (Suffix Link Tree) của SAM chính là Cây hậu tố (Suffix Tree) của chuỗi đảo ngược.
* **Độ phức tạp:** Xây dựng SAM trực tuyến (Online) trong $O(N)$. Số trạng thái $\le 2N-1$, số bước chuyển $\le 3N-4$.
* **Link Codeforces Blog:**
  * [Suffix Automaton Tutorial & Implementation (e-maxx / CP-Algorithms)](https://codeforces.com/blog/entry/20861)
  * [Suffix Automaton and Suffix Tree Applications](https://codeforces.com/blog/entry/56545)
* **Bài tập tiêu biểu rèn luyện (10 bài phân cấp từ dễ đến khó):**
  1. [CF 235C - Cyclical Quest](https://codeforces.com/problemset/problem/235/C) (2600) – *SAM đếm số lần xuất hiện của các hoán vị vòng tròn: Dựng SAM trên chuỗi văn bản $S$. Với mỗi chuỗi truy vấn $x$, nhân đôi thành $x+x$, duyệt trên SAM duy trì độ dài khớp $\ge |x|$ và đánh dấu các trạng thái đã thăm.*
  2. [CF 128B - String Problem](https://codeforces.com/problemset/problem/128/B) (1900) – *Tìm xâu con thứ $k$ theo thứ tự từ điển: Dựng SAM, tính số lượng xâu con xuất phát từ mỗi trạng thái bằng DP trên DAG. Sau đó duyệt tham lam theo thứ tự từ điển các cạnh chuyển trạng thái.*
  3. [CF 1037H - Security](https://codeforces.com/problemset/problem/1037/H) (3200) – *SAM kết hợp Persistent Segment Tree: Dùng cây SegTree lưu tập `endpos` của mỗi trạng thái. Truy vấn xâu con lớn hơn $T$ theo từ điển nhỏ nhất xuất hiện trong $[L, R]$ bằng cách duyệt và kiểm tra `endpos` lọt vào $[L+|len|-1, R]$.*
  4. [CF 123D - String](https://codeforces.com/problemset/problem/123/D) (2600) – *Tính $\sum \binom{cnt(p)+1}{2}$ cho mọi chuỗi con $p$: Dựng SAM, tính tần suất xuất hiện $cnt$ của mỗi trạng thái qua cây Suffix Link. Mỗi trạng thái đóng góp $(len[u] - len[link[u]]) \times \binom{cnt[u]+1}{2}$.*
  5. [CF 666E - Forensic Examination](https://codeforces.com/problemset/problem/666/E) (3000) – *Generalized SAM + Segment Tree Merge: Dựng SAM trên tập $M$ chuỗi văn bản. Mỗi trạng thái duy trì một Segment Tree lưu tần suất xuất hiện trong từng chuỗi, gộp cây trên Suffix Link để trả lời truy vấn cực trị.*
  6. [CF 316G3 - Good Substrings](https://codeforces.com/problemset/problem/316/G3) (2400) – *Dựng Generalized SAM cho chuỗi $S$ và $n$ chuỗi ràng buộc. Đếm số lần xuất hiện của mỗi trạng thái trong từng chuỗi bằng cách lan truyền trên cây Suffix Link, kiểm tra điều kiện $[l_i, r_i]$.*
  7. [CF 1073G - Yet Another LCP Problem](https://codeforces.com/problemset/problem/1073/G) (2200) – *Dựng Cây ảo (Virtual Tree) trên Suffix Tree (cây Suffix Link của SAM): Tính tổng LCP giữa hai tập hậu tố $A$ và $B$ bằng cách tính trọng số các nút LCA trên cây ảo trong $O((|A| + |B|) \log N)$.*
  8. [CF 472D - Design Tutorial: Inverse the Problem](https://codeforces.com/problemset/problem/472/D) (1900) – *Khôi phục cây từ ma trận khoảng cách: Chạy thuật toán cây khung nhỏ nhất (Prim/Kruskal) trên ma trận khoảng cách, sau đó chạy DFS tính lại khoảng cách trên cây để so sánh với ma trận gốc.*
  9. [CF 802L - Send the Fool Further (medium)](https://codeforces.com/problemset/problem/802/L) (2000) – *Kỳ vọng ngẫu nhiên trên cây (Random Walk on Tree): Phương trình kỳ vọng $E[u] = \frac{1}{deg(u)} \sum (E[v] + w)$. Biểu diễn $E[u] = A_u E[parent] + B_u$ và tính bằng 2 lượt DFS.*
  10. [CF 700D - Huffman Coding on a String](https://codeforces.com/problemset/problem/700/D) (3200) – *Mo's Algorithm chia căn tần suất kết hợp Priority Queue: Các phần tử có tần suất $> \sqrt{N}$ tối đa $\sqrt{N}$ phần tử, mô phỏng thuật toán Huffman Coding trên các khối tần suất bằng hàng đợi ưu tiên.*

---

## 29. CHIA ĐỂ TRỊ (DIVIDE AND CONQUER - D&C)
* **Phân hạng:** `Specialist ➔ Expert (1500 - 1900)`
* **Bản chất:**
  * Chia bài toán kích thước $N$ thành các bài toán con độc lập có kích thước $N/2$, giải đệ quy cho từng nửa, sau đó gộp nghiệm và tính lượng đóng góp tương tác giữa hai nửa qua trục phân cách trong thời gian $O(N)$ hoặc $O(N \log N)$.
  * **Các bài toán kinh điển trong CP:**
    1. **Đếm số nghịch thế (Inversion Counting)**: Mở rộng Merge Sort để đếm số cặp $i < j$ có $a[i] > a[j]$ qua điểm chia `mid` trong $O(N \log N)$.
    2. **Cặp điểm gần nhất trên mặt phẳng (Closest Pair of Points)**: Chia theo tọa độ $X$, đệ quy tìm khoảng cách nhỏ nhất $d = \min(d_L, d_R)$, sau đó lọc các điểm trong dải phân cách $|x_i - x_{mid}| < d$ và quét theo thứ tự tăng dần của $Y$. Chứng minh hình học mỗi điểm chỉ cần so sánh với tối đa 7 điểm tiếp theo trong dải, đạt độ phức tạp $O(N \log N)$.
    3. **Tối ưu hóa Quy hoạch động Chia để trị (D&C DP Optimization)**: Áp dụng khi hàm chi phí thỏa mãn bất đẳng thức tứ giác Monge hoặc tính đơn điệu của điểm chuyển trạng thái tối ưu: $opt[i][j-1] \le opt[i][j] \le opt[i+1][j]$, giảm độ phức tạp từ $O(K \cdot N^2)$ xuống $O(K \cdot N \log N)$.
* **Độ phức tạp:** Thời gian $O(N \log N)$ hoặc $O(N \log^2 N)$, bộ nhớ bổ trợ $O(N)$.
* **Link Codeforces Blog:**
  * [Divide and Conquer on Trees and Arrays (Errichto)](https://codeforces.com/blog/entry/78584)
  * [Divide and Conquer DP Optimization (CP-Algorithms)](https://cp-algorithms.com/dynamic_programming/divide-and-conquer-dp.html)
* **Bài tập tiêu biểu rèn luyện (10 bài phân cấp từ dễ đến khó):**
  1. [CF 1490C - Sum of Cubes](https://codeforces.com/problemset/problem/1490/C) (1100) – *Chia để trị tìm kiếm cặp nghiệm $a^3 + b^3 = x$.*
  2. [CF 911D - Inversion Counting](https://codeforces.com/problemset/problem/911/D) (1400) – *Tính chẵn lẻ của số nghịch thế sau phép đảo ngược đoạn: mỗi phép đảo đoạn độ dài $L$ đảo ngược $\binom{L}{2}$ cặp.*
  3. [CF 845C - Two TVs](https://codeforces.com/problemset/problem/845/C) (1500) – *Chia để trị và sắp xếp sự kiện kiểm tra giao thoa các khoảng thời gian.*
  4. [CF 1042D - Petya and Array](https://codeforces.com/problemset/problem/1042/D) (1800) – *Chia để trị đếm số đoạn con có tổng $< t$ tương tự Merge Sort trên mảng tổng tiền tố.*
  5. [CF 1155D - Beautiful Array](https://codeforces.com/problemset/problem/1155/D) (1800) – *Chia để trị hoặc DP tối đa hóa tổng đoạn con sau phép nhân một đoạn với hệ số $x$.*
  6. [CF 86D - Powerful array](https://codeforces.com/problemset/problem/86/D) (2200) – *Chia để trị phân khối Mo's Algorithm sắp xếp truy vấn offline.*
  7. [CF 1175F - The Number of Subpermutations](https://codeforces.com/problemset/problem/1175/F) (2300) – *Chia để trị qua vị trí phần tử lớn nhất: đệ quy nửa nhỏ hơn để đếm số hoán vị hợp lệ.*
  8. [CF 1442D - Sum of Paths](https://codeforces.com/problemset/problem/1442/D) (2400) – *D&C Knapsack: Bỏ qua lần lượt từng mảng để tính toán Balo mà không cần phép trừ trong $O(N K \log N)$.*
  9. [CF 868F - Yet Another Minimization Problem](https://codeforces.com/problemset/problem/868/F) (2500) – *D&C DP kết hợp Two Pointers duy trì chi phí $\binom{cnt}{2}$ khi dịch chuyển giữa các khoảng $[L, R]$.*
  10. [CF 321E - Ciel and Gondolas](https://codeforces.com/problemset/problem/321/E) (2600) – *Bài toán kinh điển tối ưu hóa DP Chia để trị: chia $N$ người vào $K$ thuyền để giảm chi phí giao tiếp từ $O(K N^2)$ xuống $O(K N \log N)$.*

---

## 30. CHIA ĐỂ TRỊ CHEN DANQI (CDQ DIVIDE AND CONQUER - CDQ 分治)
* **Phân hạng:** `Master ➔ Grandmaster (2300 - 2700+)`
* **Bản chất:**
  * Kỹ thuật chia để trị offline do tuyển thủ IOI 2008 người Trung Quốc **Trần Đan Kỳ (Chen Danqi)** đề xuất. Kỹ thuật này cho phép giải quyết bài toán **Thứ tự riêng phần đa chiều (Multi-dimensional Partial Orders)** và chuyển đổi các bài toán **cập nhật động (dynamic) thành các truy vấn tĩnh (static) trên dòng thời gian** trong $O(N \log^2 N)$ mà không cần cấu trúc dữ liệu lồng nhau phức tạp.
  * **Cơ chế 3 tầng triệt tiêu số chiều trong bài toán 3D Partial Order $(a, b, c)$:**
    1. **Tầng 1 (Chiều $a$)**: Sắp xếp toàn bộ phần tử theo chiều $a$, đảm bảo mọi phần tử bên trái có $a_i \le a_j$.
    2. **Tầng 2 (Chiều $b$)**: Chia để trị CDQ trên đoạn $[L, R]$, lấy $mid = (L+R)/2$:
       - Đệ quy nửa trái $[L, mid]$.
       - Sắp xếp nửa trái và nửa phải theo chiều $b$ (dùng Merge Sort để giữ độ phức tạp tuyến tính).
       - Dùng Hai con trỏ: với mỗi phần tử $j$ ở nửa phải, đẩy toàn bộ phần tử $i$ ở nửa trái thỏa mãn $b_i \le b_j$ vào Cây Fenwick theo tọa độ chiều $c$.
       - Truy vấn Fenwick để tính đóng góp lên phần tử $j$.
       - **Rollback dọn dẹp Fenwick trong $O(\text{size})$**: Tuyệt đối không dùng `memset` để bảo toàn độ phức tạp $O(N \log^2 N)$.
       - Đệ quy nửa phải $[mid+1, R]$.
    3. **Tầng 3 (Chiều $c$)**: Cây Fenwick 1 chiều thực hiện cập nhật điểm và truy vấn tổng tiền tố trong $O(\log N)$.
* **Độ phức tạp:** Thời gian $O(N \log^2 N)$, bộ nhớ $O(N)$.
* **Link Codeforces Blog:**
  * [CDQ Divide and Conquer Tutorial on Codeforces by misakas](https://codeforces.com/blog/entry/84042)
  * [A brief introduction to CDQ divide and conquer](https://codeforces.com/blog/entry/75685)
* **Bài tập tiêu biểu rèn luyện (10 bài phân cấp từ dễ đến khó):**
  1. [Luogu P3810 - 3D Partial Order](https://www.luogu.com.cn/problem/P3810) (2200) – *Bài tập mẫu kinh điển của CDQ: Đếm số phần tử bị chi phối bởi không quá $k$ phần tử khác trong không gian 3 chiều.*
  2. [CF 369E - Valera and Queries](https://codeforces.com/problemset/problem/369/E) (2100) – *Đếm số đoạn chứa ít nhất 1 điểm truy vấn: Chuyển thành bài toán 2D offline xử lý bằng CDQ hoặc Fenwick.*
  3. [CF 1093E - Intersection of Permutations](https://codeforces.com/problemset/problem/1093/E) (2400) – *Đổi chỗ 2 phần tử và đếm số phần tử chung trong 2 đoạn con: Đưa về bài toán thêm/xóa điểm động trong 2D, giải bằng CDQ trên dòng thời gian.*
  4. [CF 1398G - Running Competition](https://codeforces.com/problemset/problem/1398/G) (2500) – *Tìm mọi hiệu khoảng cách xuất hiện và tối ưu hóa truy vấn bằng CDQ.*
  5. [CF 848C - Goodbye Souvenir](https://codeforces.com/problemset/problem/848/C) (2600) – *Tính tổng chênh lệch vị trí đầu cuối của các số phân biệt khi có thao tác gán giá trị: CDQ phân trị 3 chiều trên (thời gian, vị trí, giá trị trước đó).*
  6. [CF 1198F - GCD Groups 2](https://codeforces.com/problemset/problem/1198/F) (2600) – *Chia nhóm tối ưu hóa số học và nhánh cận.*
  7. [CF 1442E - Black, White and Grey Tree](https://codeforces.com/problemset/problem/1442/E) (2600) – *Tô màu cây và chia để trị đường kính.*
  8. [CF 601D - Acyclic Negotiating](https://codeforces.com/problemset/problem/601/D) (2700) – *Gộp cây Trie kết hợp chia để trị tính số chuỗi con phân biệt trên cây.*
  9. [CF 568E - Longest Increasing Subsequence](https://codeforces.com/problemset/problem/568/E) (3000) – *Tối ưu hóa quy hoạch động LIS với các giá trị bị khuyết bằng CDQ divide and conquer.*
  10. [CF 765F - Souvenirs](https://codeforces.com/problemset/problem/765/F) (3100) – *Tìm độ chênh lệch nhỏ nhất giữa 2 phần tử trong đoạn $[L, R]$: CDQ divide and conquer kết hợp Segment Tree lịch sử.*

---

## 31. CÂY TIỀN TỐ (TRIE & 0-1 TRIE)
* **Phân hạng:** `Specialist ➔ Candidate Master (1500 - 1900)`
* **Bản chất:**
  * Cấu trúc dữ liệu cây $K$-phân tối ưu hóa việc lưu trữ, tìm kiếm tập hợp chuỗi ký tự hoặc các số nguyên biểu diễn dưới dạng chuỗi bit nhị phân có chung tiền tố.
  * **Hai nhánh ứng dụng cốt lõi:**
    1. **String Trie (Cây tiền tố chuỗi)**: Mỗi nút đại diện cho một tiền tố, chứa mảng liên kết `next[26]`, cờ kết thúc `is_end`, và biến đếm `count_prefix`. Độ phức tạp chèn/tìm kiếm $O(|S|)$, tối ưu hơn Hash table khi cần tìm tiền tố chung dài nhất (LCP) hoặc duyệt theo thứ tự từ điển.
    2. **0-1 Trie (Binary Trie - Trie nhị phân)**: Biểu diễn mỗi số nguyên không âm thành chuỗi $30$ bit (hoặc $60$ bit). Hỗ trợ các bài toán CP kinh điển:
       - **Tìm XOR lớn nhất / nhỏ nhất với $X$**: Tham lam rẽ vào nhánh có bit ngược lại `1 - bit` (cho max) hoặc cùng bit (cho min) tại mỗi vị trí bit trong đúng $O(30)$ thao tác.
       - **Đếm số phần tử có $X \oplus V \le K$**: Tại mỗi bit, nếu bit của $K$ là 1 thì cộng toàn bộ số phần tử ở nhánh có bit XOR bằng 0, rồi đi tiếp vào nhánh có bit XOR bằng 1.
* **Độ phức tạp:** Thao tác thêm/xóa/truy vấn trong $O(|S|)$ (với xâu) hoặc $O(\log(\text{MAX\_VAL}))$ (với số nguyên, khoảng 30 bước). Bộ nhớ $O(N \cdot |S|)$ hoặc $O(N \cdot 30)$.
* **Link Codeforces Blog:**
  * [Trie Data Structure and 0-1 Trie (USACO Guide)](https://usaco.guide/silver/trie)
  * [Bitwise XOR Trie Tutorial (CP-Algorithms)](https://cp-algorithms.com/data_structures/trie.html)
* **Bài tập tiêu biểu rèn luyện (10 bài phân cấp từ dễ đến khó):**
  1. [CF 706D - Vasiliy's Multiset](https://codeforces.com/problemset/problem/706/D) (1500) – *Bài tập mẫu 0-1 Trie: Thêm số, xóa số và tìm $\max(x \oplus v)$ với $v$ thuộc tập hợp.*
  2. [CF 514C - Watto and Mechanism](https://codeforces.com/problemset/problem/514/C) (1700) – *String Trie kết hợp DFS: Kiểm tra xem chuỗi truy vấn có thể biến đổi thành một chuỗi trong từ điển bằng cách thay đúng 1 ký tự không.*
  3. [CF 282E - Sausage Maximization](https://codeforces.com/problemset/problem/282/E) (1800) – *Prefix XOR và Suffix XOR kết hợp 0-1 Trie để tìm giá trị XOR đoạn đầu và đoạn đuôi lớn nhất.*
  4. [CF 842D - Vanya and Brackets / XOR Queries](https://codeforces.com/problemset/problem/842/D) (1900) – *0-1 Trie tìm MEX của mảng sau mỗi thao tác XOR toàn bộ mảng với $x$: Duy trì số lượng phần tử đầy đủ của cây con.*
  5. [CF 665E - Beautiful Subarrays](https://codeforces.com/problemset/problem/665/E) (2000) – *0-1 Trie kết hợp Prefix XOR: Đếm số lượng đoạn con có tổng XOR $\ge k$ trong $O(N \log(\text{MAX}))$.*
  6. [CF 965E - Short Code](https://codeforces.com/problemset/problem/965/E) (2200) – *Dựng Trie từ điển, dùng hàng đợi ưu tiên (Priority Queue) đẩy các nhãn độ sâu lên cao để tối thiểu hóa tổng độ dài.*
  7. [CF 1625D - Binary Spanning Tree](https://codeforces.com/problemset/problem/1625/D) (2200) – *0-1 Trie tìm tập con lớn nhất có XOR đôi một $\ge k$.*
  8. [CF 1447E - Tri-Graph](https://codeforces.com/problemset/problem/1447/E) (2300) – *0-1 Trie kết hợp Quy hoạch động: Mỗi nút rẽ đôi chỉ được giữ lại 1 cạnh liên thông, tính số phần tử tối đa giữ lại.*
  9. [CF 1777F - Comfortably Numb](https://codeforces.com/problemset/problem/1777/F) (2500) – *Chia để trị qua phần tử lớn nhất của đoạn kết hợp 0-1 Trie và kỹ thuật gộp tập nhỏ vào tập lớn (Small-to-Large).*
  10. [CF 1055F - Paths and XORs](https://codeforces.com/problemset/problem/1055/F) (2600) – *0-1 Trie song song trên cây: Tìm đường đi thứ $k$ có tổng trọng số XOR nhỏ nhất trong đồ thị cây.*

---

## 💡 PHƯƠNG PHÁP LUYỆN TẬP ĐẠT HIỆU QUẢ CAO NHẤT THEO ROADMAP
1. **Học theo chiều sâu (Mastery over Quantity):** Đừng vội sang chủ đề mới khi chưa tự tay code AC ít nhất 5 bài đầu tiên của chủ đề hiện tại.
2. **Chiến lược giải bài tập 3 bước:**
   * **Bước 1 (15-30 phút đầu):** Nghĩ thuần túy trên giấy/nháp, phác thảo bất biến, quy luật toán học hoặc tính đơn điệu.
   * **Bước 2 (Viết mã & Debug):** Tự tay cài đặt từ đầu không copy template để nhớ sâu bản chất của từng biến và cấu trúc.
   * **Bước 3 (Phản tư & Đọc Editorial):** Luôn mở Editorial của Codeforces và đọc code của các International Grandmaster (IGM/LGM) để học cách code ngắn gọn, thanh lịch.
3. **Thi đấu mô phỏng Virtual Contest:** Mỗi tuần nên làm ít nhất 1-2 contest mô phỏng (Div.2/Div.3 cho Newbie-Specialist, Div.1/Div.2 kết hợp cho Candidate Master trở lên) để rèn tâm lý chiến trường.
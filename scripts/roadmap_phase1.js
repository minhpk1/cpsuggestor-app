module.exports = [
  {
    id: 1,
    name: "MẢNG CỘNG DỒN (PREFIX SUMS) & MẢNG HIỆU (DIFFERENCE ARRAY)",
    tier: "Newbie (800 - 1100)",
    essence: [
      "Prefix Sum tính tổng đoạn con $[L, R]$ trong $O(1)$: $P[R] - P[L-1]$ (với mảng 1D) hoặc $S[x_2][y_2] - S[x_1-1][y_2] - S[x_2][y_1-1] + S[x_1-1][y_1-1]$ (với mảng 2D).",
      "Difference Array cộng một lượng $V$ vào đoạn $[L, R]$ trong $O(1)$: $D[L] \\mathrel{+}= V, D[R+1] \\mathrel{-}= V$, sau đó tính prefix sum của $D$ để khôi phục mảng."
    ],
    complexity: "Tiền xử lý $O(N)$ (hoặc $O(N \\times M)$), mỗi truy vấn $O(1)$, bộ nhớ $O(N)$.",
    blogs: [
      { title: "Prefix Sums and Difference Arrays (CF Blog by Errichto)", url: "https://codeforces.com/blog/entry/78584" },
      { title: "Multi-dimensional prefix sums tutorial", url: "https://codeforces.com/blog/entry/82672" }
    ],
    problems: [
      {
        code: "CF 313B",
        name: "Ilya and Queries",
        rating: 1000,
        url: "https://codeforces.com/problemset/problem/313/B",
        comment: "Mức thông hiểu: Tạo mảng đánh dấu $a[i] = 1$ nếu $s[i] == s[i+1]$, sau đó tính prefix sum để trả lời số cặp liên kề bằng nhau trong $[L, R-1]$."
      },
      {
        code: "CF 433B",
        name: "Kuriyama Mirai's Stones",
        rating: 1200,
        url: "https://codeforces.com/problemset/problem/433/B",
        comment: "Mức vận dụng cơ bản: Xây dựng đồng thời 2 mảng prefix sum: một trên mảng ban đầu và một trên mảng đã sắp xếp tăng dần."
      },
      {
        code: "CF 816B",
        name: "Karen and Coffee",
        rating: 1400,
        url: "https://codeforces.com/problemset/problem/816/B",
        comment: "Difference Array kết hợp Prefix Sum 2 lần: Lần 1 dùng mảng hiệu đếm số công thức che phủ nhiệt độ $T$, lần 2 cộng dồn số nhiệt độ đạt chuẩn $\\ge k$."
      },
      {
        code: "CF 295A",
        name: "Greg and Array",
        rating: 1400,
        url: "https://codeforces.com/problemset/problem/295/A",
        comment: "Mảng hiệu 2 tầng độc lập: Tầng 1 đếm số lần áp dụng mỗi thao tác $[l, r]$, tầng 2 áp dụng các thao tác đã nhân hệ số lên mảng giá trị ban đầu."
      },
      {
        code: "CF 1398C",
        name: "Good Subarrays",
        rating: 1400,
        url: "https://codeforces.com/problemset/problem/1398/C",
        comment: "Biến đổi toán học: $\\sum_{i=l}^r a_i = r - l + 1 \\Leftrightarrow P[r] - r = P[l-1] - (l-1)$. Dùng hash map đếm số lượng tiền tố có cùng giá trị $(P[i] - i)$."
      },
      {
        code: "CF 466C",
        name: "Number of Ways",
        rating: 1700,
        url: "https://codeforces.com/problemset/problem/466/C",
        comment: "Chia mảng thành 3 phần bằng nhau: Tổng toàn mảng phải chia hết cho 3 (gọi là $S$). Dùng prefix sum đếm số vị trí có tổng bằng $S$ trước mỗi vị trí có tổng $2S$."
      },
      {
        code: "CF 1003C",
        name: "Intense Heat",
        rating: 1200,
        url: "https://codeforces.com/problemset/problem/1003/C",
        comment: "Dùng Prefix Sum tính trung bình cộng của tất cả các đoạn con có độ dài $\\ge k$ trong thời gian $O(N^2)$ với $N \\le 5000$."
      },
      {
        code: "CF 276C",
        name: "Little Girl and Maximum Sum",
        rating: 1500,
        url: "https://codeforces.com/problemset/problem/276/C",
        comment: "Kỹ thuật mảng hiệu đếm tần suất truy vấn từng chỉ số. Sắp xếp tần suất và mảng số theo cùng thứ tự tăng dần để tối đa hóa tích theo bất đẳng thức hoán vị."
      },
      {
        code: "CF 1118B",
        name: "Tanya and Candies",
        rating: 1200,
        url: "https://codeforces.com/problemset/problem/1118/B",
        comment: "Prefix sum riêng biệt cho các vị trí chẵn và lẻ. Khi xóa phần tử tại $i$, các phần tử phía sau hoán đổi tính chẵn lẻ của chỉ số trong $O(1)$."
      },
      {
        code: "CF 1200B",
        name: "Block Adventure",
        rating: 1200,
        url: "https://codeforces.com/problemset/problem/1200/B",
        comment: "Duyệt tuần tự tối ưu hóa số block trong túi: tại mỗi bước, hạ độ cao cột hiện tại xuống mức thấp nhất cho phép $\\max(0, h[i+1]-k)$ để thu hồi block."
      }
    ]
  },
  {
    id: 2,
    name: "HAI CON TRỎ (TWO POINTERS) & CỬA SỔ TRƯỢT (SLIDING WINDOW)",
    tier: "Newbie ➔ Pupil (900 - 1300)",
    essence: [
      "Duyệt không gian trạng thái bằng cặp chỉ số $(L, R)$ theo một chiều đơn điệu, không bao giờ lùi con trỏ.",
      "Cửa sổ mở rộng $R$ khi điều kiện vẫn thỏa mãn và co $L$ lại khi điều kiện bị vi phạm hoặc cần tìm nghiệm tối thiểu."
    ],
    complexity: "Mỗi con trỏ di chuyển tối đa $N$ bước $\\implies$ Độ phức tạp tổng thể $O(N)$.",
    blogs: [
      { title: "Codeforces Edu: Two Pointers Method Step 1 - 3", url: "https://codeforces.com/edu/course/2/lesson/9" }
    ],
    problems: [
      {
        code: "CF 381A",
        name: "Sereja and Dima",
        rating: 800,
        url: "https://codeforces.com/problemset/problem/381/A",
        comment: "Hai con trỏ co từ 2 đầu mảng: Mỗi người chơi lần lượt lấy phần tử lớn hơn giữa $L$ và $R$, tăng/giảm con trỏ tương ứng."
      },
      {
        code: "CF 279B",
        name: "Books",
        rating: 1100,
        url: "https://codeforces.com/problemset/problem/279/B",
        comment: "Cửa sổ trượt kinh điển: Tìm đoạn sách liên tiếp dài nhất có tổng thời gian đọc $\\le t$. Tăng $R$ tích lũy thời gian, khi vượt quá $t$ thì tăng $L$ trừ bớt."
      },
      {
        code: "CF 602B",
        name: "Approximating a Constant Range",
        rating: 1400,
        url: "https://codeforces.com/problemset/problem/602/B",
        comment: "Cửa sổ trượt duy trì $\\max - \\min \\le 1$. Sử dụng mảng đếm tần suất hoặc multiset để kiểm tra điều kiện trong $O(1)$ khi dịch chuyển $L$ và $R$."
      },
      {
        code: "CF 1251C",
        name: "Minimize The Integer",
        rating: 1400,
        url: "https://codeforces.com/problemset/problem/1251/C",
        comment: "Tách các chữ số thành 2 danh sách chẵn và lẻ (do các chữ số cùng tính chẵn lẻ không thể đổi chỗ cho nhau), sau đó dùng two pointers trộn lại như Merge Sort."
      },
      {
        code: "CF 161A",
        name: "Dress'em in Vests!",
        rating: 1200,
        url: "https://codeforces.com/problemset/problem/161/A",
        comment: "Hai con trỏ trên 2 mảng đã sắp xếp: Ghép áo giáp phù hợp kích thước cho binh sĩ, tăng con trỏ áo nếu quá nhỏ và tăng binh sĩ nếu không có áo vừa."
      },
      {
        code: "CF 676C",
        name: "Vasya and String",
        rating: 1500,
        url: "https://codeforces.com/problemset/problem/676/C",
        comment: "Cửa sổ trượt tìm chuỗi con dài nhất chứa toàn ký tự 'a' (hoặc 'b') khi được phép đổi tối đa $k$ ký tự khác loại."
      },
      {
        code: "CF 251A",
        name: "Points on Line",
        rating: 1300,
        url: "https://codeforces.com/problemset/problem/251/A",
        comment: "Cố định con trỏ phải $R$, dùng con trỏ trái $L$ tìm vị trí xa nhất thỏa $x[R] - x[L] \\le d$. Số bộ 3 kết thúc tại $R$ là $\\binom{R-L}{2}$."
      },
      {
        code: "CF 701C",
        name: "They Are Everywhere",
        rating: 1400,
        url: "https://codeforces.com/problemset/problem/701/C",
        comment: "Cửa sổ trượt tìm đoạn ngắn nhất chứa đủ tất cả các loại Pokemon phân biệt: mở $R$ cho đến khi đủ loại, sau đó co $L$ tối đa có thể."
      },
      {
        code: "CF 1006C",
        name: "Three Parts of the Array",
        rating: 1100,
        url: "https://codeforces.com/problemset/problem/1006/C",
        comment: "Hai con trỏ xuất phát từ 2 đầu mảng tính tổng tiền tố và hậu tố, co dần về giữa để tìm tổng lớn nhất thỏa mãn $sum_1 == sum_3$ và không giao nhau."
      },
      {
        code: "CF 1133C",
        name: "Balanced Team",
        rating: 1200,
        url: "https://codeforces.com/problemset/problem/1133/C",
        comment: "Sắp xếp mảng kỹ năng tăng dần, dùng hai con trỏ duy trì cửa sổ $a[R] - a[L] \\le 5$ để tìm kích thước đội bóng lớn nhất."
      }
    ]
  },
  {
    id: 3,
    name: "TÌM KIẾM NHỊ PHÂN & CHẶT NHỊ PHÂN KẾT QUẢ (BINARY SEARCH ON ANSWER)",
    tier: "Pupil (1000 - 1400)",
    essence: [
      "Chuyển đổi bài toán tối ưu 'Tìm giá trị $X$ tốt nhất' thành bài toán quyết định 'Với giá trị $M$, liệu có phương án khả thi hay không?'.",
      "Yêu cầu hàm kiểm tra khả thi $f(M)$ phải có tính đơn điệu (Monotonicity): chuỗi kết quả có dạng `FFFFFTTTTT` hoặc `TTTTTFFFFF`."
    ],
    complexity: "$O(\\log(\\text{range}) \\times \\text{Cost}(f))$. Giảm không gian tìm kiếm theo hàm mũ.",
    blogs: [
      { title: "Codeforces Edu: Binary Search Step 1 - 5", url: "https://codeforces.com/edu/course/2/lesson/6" },
      { title: "Binary Search comprehensive tutorial by Errichto", url: "https://codeforces.com/blog/entry/67509" }
    ],
    problems: [
      {
        code: "CF 706B",
        name: "Interesting drink",
        rating: 1100,
        url: "https://codeforces.com/problemset/problem/706/B",
        comment: "Mức thông hiểu: Sắp xếp giá tiền các chai nước và sử dụng hàm `std::upper_bound` để đếm số quán bán giá $\\le m_i$ trong $O(\\log N)$."
      },
      {
        code: "CF 1613C",
        name: "Poisoned Dagger",
        rating: 1200,
        url: "https://codeforces.com/problemset/problem/1613/C",
        comment: "Chặt nhị phân kết quả thời gian độc $k$: Sát thương của nhát chém thứ $i$ là $\\min(k, a_{i+1}-a_i)$. Hàm kiểm tra tính đơn điệu tăng theo $k$."
      },
      {
        code: "CF 371C",
        name: "Hamburgers",
        rating: 1400,
        url: "https://codeforces.com/problemset/problem/371/C",
        comment: "Chặt nhị phân số lượng bánh burger làm được. Với $M$ cái bánh, tính chi phí mua thêm các nguyên liệu còn thiếu và kiểm tra xem có $\\le r$ rúp không."
      },
      {
        code: "CF 1201C",
        name: "Maximum Median",
        rating: 1400,
        url: "https://codeforces.com/problemset/problem/1201/C",
        comment: "Chặt nhị phân giá trị trung vị $X$: Để trung vị đạt ít nhất $X$, cần tăng tất cả các phần tử từ vị trí trung vị $n/2$ đến cuối lên ít nhất $X$ với tổng chi phí $\\le k$."
      },
      {
        code: "CF 760B",
        name: "Frodo and pillows",
        rating: 1400,
        url: "https://codeforces.com/problemset/problem/760/B",
        comment: "Chặt nhị phân số gối của Frodo tại vị trí $k$. Số gối giảm dần 1 đơn vị mỗi bước sang 2 bên cho đến khi đạt 1; tính tổng gối bằng công thức cấp số cộng trong $O(1)$."
      },
      {
        code: "CF 1676E",
        name: "Eating Queries",
        rating: 1100,
        url: "https://codeforces.com/problemset/problem/1676/E",
        comment: "Sắp xếp lượng kẹo giảm dần, tính mảng prefix sum và dùng `std::lower_bound` để tìm số viên kẹo tối thiểu đạt tổng đường $\\ge x$."
      },
      {
        code: "CF 448D",
        name: "Multiplication Table",
        rating: 1800,
        url: "https://codeforces.com/problemset/problem/448/D",
        comment: "Tìm số nhỏ thứ $k$ trong bảng nhân $n \\times m$: Chặt nhị phân giá trị $X$, đếm số phần tử $\\le X$ trong bảng bằng $\\sum_{i=1}^n \\min(m, \\lfloor X/i \\rfloor)$ trong $O(n)$."
      },
      {
        code: "CF 1117C",
        name: "Magic Ship",
        rating: 1700,
        url: "https://codeforces.com/problemset/problem/1117/C",
        comment: "Chặt nhị phân số ngày di chuyển $D$. Tách $D = q \\times n + r$ để tính tọa độ con tàu trôi theo gió, kiểm tra khoảng cách Manhattan tới đích có $\\le D$ hay không."
      },
      {
        code: "CF 670D2",
        name: "Magic Powder (hard version)",
        rating: 1500,
        url: "https://codeforces.com/problemset/problem/670/D2",
        comment: "Chặt nhị phân số bánh nướng được trong phạm vi $[0, 2 \\times 10^9]$. Kiểm tra tổng lượng bột ma thuật cần bù cho các nguyên liệu thiếu có $\\le k$ không (chú ý tràn số 64-bit)."
      },
      {
        code: "CF 1352E",
        name: "Special Elements",
        rating: 1300,
        url: "https://codeforces.com/problemset/problem/1352/E",
        comment: "Tính tổng tất cả các đoạn con độ dài $\\ge 2$ và đánh dấu sự tồn tại vào mảng boolean kích thước $N$, sau đó đếm số phần tử ban đầu xuất hiện trong mảng đánh dấu."
      }
    ]
  },
  {
    id: 4,
    name: "SÀNG NGUYÊN TỐ, SPF & SỐ HỌC CƠ BẢN (NUMBER THEORY BASICS)",
    tier: "Pupil (1000 - 1400)",
    essence: [
      "Sàng Eratosthenes $O(N \\log \\log N)$ tìm mọi số nguyên tố $\\le N$. Sàng SPF (Smallest Prime Factor) lưu ước nguyên tố nhỏ nhất của mỗi số.",
      "Nhờ SPF, ta phân tích thừa số nguyên tố của bất kỳ số nào $\\le N$ chỉ mất $O(\\log X)$ thay vì $O(\\sqrt{X})$. Thuật toán Euclid tính $\\gcd(a, b)$ trong $O(\\log(\\min(a,b)))$."
    ],
    complexity: "Tiền xử lý $O(N \\log \\log N)$, phân tích thừa số $O(\\log X)$, truy vấn $\\gcd$ $O(\\log(\\min(a,b)))$.",
    blogs: [
      { title: "Number Theory Tutorial (Primes, Sieve, GCD)", url: "https://codeforces.com/blog/entry/78065" }
    ],
    problems: [
      {
        code: "CF 230B",
        name: "T-primes",
        rating: 1300,
        url: "https://codeforces.com/problemset/problem/230/B",
        comment: "Số có đúng 3 ước dương khi và chỉ khi nó là bình phương của một số nguyên tố ($x = p^2$). Sàng nguyên tố tới $10^6$ và kiểm tra căn bậc hai."
      },
      {
        code: "CF 154B",
        name: "Colliders",
        rating: 1600,
        url: "https://codeforces.com/problemset/problem/154/B",
        comment: "Quản lý va chạm collider: Dùng SPF phân tích nhanh các ước nguyên tố của số cần bật, duy trì mảng đánh dấu ước nguyên tố đã bị kích hoạt bởi collider nào."
      },
      {
        code: "CF 1033B",
        name: "Square Difference",
        rating: 1100,
        url: "https://codeforces.com/problemset/problem/1033/B",
        comment: "Phân tích hằng đẳng thức: $a^2 - b^2 = (a - b)(a + b)$. Vì số nguyên tố chỉ có ước là 1 và chính nó, điều kiện cần là $a - b = 1$ và $a + b$ là số nguyên tố."
      },
      {
        code: "CF 1370A",
        name: "Maximum GCD",
        rating: 800,
        url: "https://codeforces.com/problemset/problem/1370/A",
        comment: "Nhận xét toán học sắc bén: Để $\\gcd(a, b)$ lớn nhất với $1 \\le a < b \\le n$, cặp tối ưu luôn là $(\\lfloor n/2 \\rfloor, 2 \\times \\lfloor n/2 \\rfloor)$ với đáp án là $\\lfloor n/2 \\rfloor$."
      },
      {
        code: "CF 1490C",
        name: "Sum of Cubes",
        rating: 1100,
        url: "https://codeforces.com/problemset/problem/1490/C",
        comment: "Duyệt $a$ từ $1$ tới $\\sqrt[3]{x} \\le 10^4$, kiểm tra xem $x - a^3$ có phải là lập phương hoàn hảo của một số nguyên dương $b$ bằng hàm `cbrt` hoặc nhị phân."
      },
      {
        code: "CF 1294C",
        name: "Product of Three Numbers",
        rating: 1300,
        url: "https://codeforces.com/problemset/problem/1294/C",
        comment: "Tham lam tìm ước nhỏ nhất $a > 1$ của $n$, sau đó tìm ước nhỏ nhất $b > a$ của $n/a$. Phần còn lại $c = n/(a \\times b)$, kiểm tra $c > b$ và $c > 1$."
      },
      {
        code: "CF 1458A",
        name: "Row GCD",
        rating: 1600,
        url: "https://codeforces.com/problemset/problem/1458/A",
        comment: "Tính chất GCD: $\\gcd(a_1+x, a_2+x, \\dots, a_n+x) = \\gcd(a_1+x, \\gcd(|a_2-a_1|, |a_3-a_1|, \\dots))$. Tính trước GCD các hiệu, mỗi truy vấn mất $O(\\log)."
      },
      {
        code: "CF 17A",
        name: "Noldbach problem",
        rating: 1000,
        url: "https://codeforces.com/problemset/problem/17/A",
        comment: "Sàng nguyên tố tới $n$, trích xuất danh sách các số nguyên tố và kiểm tra các số có dạng $p_i + p_{i+1} + 1$ xem có phải số nguyên tố $\\le n$ hay không."
      },
      {
        code: "CF 797A",
        name: "k-Factorization",
        rating: 1100,
        url: "https://codeforces.com/problemset/problem/797/A",
        comment: "Phân tích $n$ ra các thừa số nguyên tố. Nếu tổng số thừa số $< k$ thì vô nghiệm; ngược lại gom các thừa số dư vào phần tử cuối cùng để có đúng $k$ số."
      },
      {
        code: "CF 1165D",
        name: "Almost All Divisors",
        rating: 1500,
        url: "https://codeforces.com/problemset/problem/1165/D",
        comment: "Khôi phục số $n = d_{\\min} \\times d_{\\max}$. Tìm lại toàn bộ các ước thực sự của số $n$ vừa tính và so sánh với danh sách đề bài cho xem có trùng khớp hoàn toàn không."
      }
    ]
  },
  {
    id: 5,
    name: "THAM LAM (GREEDY) & BẤT ĐẲNG THỨC SẮP XẾP (EXCHANGE ARGUMENT)",
    tier: "Pupil ➔ Specialist (1100 - 1500)",
    essence: [
      "Đưa ra lựa chọn tối ưu cục bộ tại từng bước nhằm đạt được tối ưu toàn cục. Không quay lui lại các quyết định đã chọn.",
      "Kỹ thuật chứng minh Exchange Argument: Giả định hoán vị tối ưu có một cặp nghịch thế vi phạm thứ tự tham lam, chứng minh việc đổi chỗ (swap) 2 phần tử kề nhau không làm giảm chất lượng nghiệm."
    ],
    complexity: "Thường đi kèm sắp xếp $O(N \\log N)$ hoặc hàng đợi ưu tiên $O(N \\log N)$.",
    blogs: [
      { title: "Thinking about Greedy Algorithms", url: "https://codeforces.com/blog/entry/92661" }
    ],
    problems: [
      {
        code: "CF 405A",
        name: "Gravity Flip",
        rating: 900,
        url: "https://codeforces.com/problemset/problem/405/A",
        comment: "Mức thông hiểu: Trọng lực kéo các khối hộp rơi về phía bên phải tương đương với việc sắp xếp mảng độ cao theo thứ tự tăng dần."
      },
      {
        code: "CF 1360D",
        name: "Buying Shovels",
        rating: 1300,
        url: "https://codeforces.com/problemset/problem/1360/D",
        comment: "Tìm ước $d$ của $n$ sao cho $d \\le k$ và $d$ lớn nhất có thể để số lượng gói xẻng $n/d$ là nhỏ nhất. Duyệt ước tới $\\sqrt{n}$."
      },
      {
        code: "CF 978C",
        name: "Letters",
        rating: 1000,
        url: "https://codeforces.com/problemset/problem/978/C",
        comment: "Duyệt tham lam qua mảng số phòng cộng dồn: Khi số thứ tự phòng của lá thư vượt quá ký túc xá hiện tại, tăng chỉ số ký túc xá cho đến khi bao phủ được."
      },
      {
        code: "CF 1526C2",
        name: "Potions (Hard Version)",
        rating: 1600,
        url: "https://codeforces.com/problemset/problem/1526/C2",
        comment: "Regret Greedy (Tham lam có hối hận): Uống mọi lọ thuốc. Nếu máu $< 0$, nhả lọ thuốc độc có giá trị âm lớn nhất đã uống ra khỏi cơ thể bằng `priority_queue`."
      },
      {
        code: "CF 1409D",
        name: "Decrease the Sum of Digits",
        rating: 1400,
        url: "https://codeforces.com/problemset/problem/1409/D",
        comment: "Muốn giảm tổng các chữ số, cách duy nhất là tăng $n$ để tạo ra các số 0 ở đuôi nhờ phép nhớ. Tham lam làm tròn từ hàng đơn vị lên hàng chục, trăm..."
      },
      {
        code: "CF 1157C2",
        name: "Increasing Subsequence (hard version)",
        rating: 1500,
        url: "https://codeforces.com/problemset/problem/1157/C2",
        comment: "Tham lam chọn phần tử nhỏ hơn giữa 2 đầu $L$ và $R$ nếu cả hai đều $> prev$. Trường hợp $a[L] == a[R]$, thử tham lam rẽ nhánh đi hết bên trái hoặc bên phải."
      },
      {
        code: "CF 1029B",
        name: "Creating the Contest",
        rating: 1200,
        url: "https://codeforces.com/problemset/problem/1029/B",
        comment: "Tìm dãy con liên tiếp dài nhất thỏa $a_{i+1} \\le 2 a_i$. Duyệt tuyến tính tham lam kéo dài chuỗi hiện tại, nếu vi phạm thì khởi tạo lại chuỗi mới."
      },
      {
        code: "CF 898B",
        name: "Proper Nutrition",
        rating: 1200,
        url: "https://codeforces.com/problemset/problem/898/B",
        comment: "Phương trình Diophantine $a x + b y = n$: Duyệt tham lam số chai $x$ từ $0$ đến $n/a$, kiểm tra xem lượng còn lại $(n - a x)$ có chia hết cho $b$ hay không."
      },
      {
        code: "CF 1368B",
        name: "Codeforces Subsequences",
        rating: 1400,
        url: "https://codeforces.com/problemset/problem/1368/B",
        comment: "Số chuỗi con 'codeforces' tạo thành là $\\prod c_i$. Để tổng các ký tự $\\sum c_i$ nhỏ nhất mà tích $\\ge k$, ta dùng tham lam tăng dần đều từng chữ số từ 1."
      },
      {
        code: "CF 160A",
        name: "Twins",
        rating: 900,
        url: "https://codeforces.com/problemset/problem/160/A",
        comment: "Sắp xếp giảm dần và tham lam lấy các đồng xu có mệnh giá lớn nhất cho đến khi tổng giá trị vượt quá $50\\%$ tổng số tiền của tất cả các đồng xu."
      }
    ]
  }
];

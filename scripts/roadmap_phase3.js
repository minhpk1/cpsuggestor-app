module.exports = [
  {
    id: 11,
    name: "TỔ TIÊN CHUNG GẦN NHẤT (LCA), BINARY LIFTING & EULER TOUR",
    tier: "Specialist ➔ Expert (1600 - 1900)",
    essence: [
      "Binary Lifting: Tiền xử lý bảng $up[u][j]$ là tổ tiên thứ $2^j$ của $u$ trong $O(N \\log N)$, cho phép nhảy tìm LCA của $(u, v)$ trong $O(\\log N)$.",
      "Euler Tour: Đánh dấu thời điểm vào (`tin`) và ra (`tout`) của mỗi đỉnh khi DFS. Đỉnh $u$ là tổ tiên của $v \\iff tin[u] \\le tin[v] \\land tout[v] \\le tout[u]$. Đưa các truy vấn trên cây con về truy vấn trên đoạn liên tiếp $[tin[u], tout[u]]$."
    ],
    complexity: "Tiền xử lý $O(N \\log N)$, mỗi truy vấn LCA / khoảng cách $O(\\log N)$, Euler tour trải phẳng cây trong $O(N)$.",
    blogs: [
      { title: "Binary Lifting and LCA Tutorial", url: "https://codeforces.com/blog/entry/74847" },
      { title: "Euler Tour Technique on Trees", url: "https://codeforces.com/blog/entry/63020" }
    ],
    problems: [
      {
        code: "CF 1304E",
        name: "1-Trees and Queries",
        rating: 2000,
        url: "https://codeforces.com/problemset/problem/1304/E",
        comment: "Dùng LCA tính khoảng cách ngắn nhất giữa hai đỉnh $dist(u, v) = depth[u] + depth[v] - 2 \\times depth[LCA(u, v)]$. Kiểm tra 3 đường đi khả thi khi có cạnh tắt $(x, y)$."
      },
      {
        code: "CF 208E",
        name: "Blood Cousins",
        rating: 1800,
        url: "https://codeforces.com/problemset/problem/208/E",
        comment: "Binary Lifting nhảy lên tổ tiên thứ $k$ của $v$. Sau đó dùng Euler Tour kết hợp vector lưu các đỉnh theo độ sâu, dùng `std::upper_bound` và `lower_bound` để đếm họ hàng."
      },
      {
        code: "CF 1062E",
        name: "Company",
        rating: 2000,
        url: "https://codeforces.com/problemset/problem/1062/E",
        comment: "Segment Tree tìm LCA của một tập đỉnh: LCA của một tập là LCA của đỉnh có $tin$ nhỏ nhất và đỉnh có $tin$ lớn nhất. Thử loại bỏ đỉnh có $tin$ min hoặc max."
      },
      {
        code: "CF 832D",
        name: "Misha, Scher and Forest",
        rating: 1800,
        url: "https://codeforces.com/problemset/problem/832/D",
        comment: "Tìm điểm phân nhánh chung dài nhất của 3 đường đi giữa $a, b, c$: Độ dài chung của đường đi từ $s$ đến $t_1$ và $t_2$ được tính chính xác thông qua hàm LCA của từng cặp."
      },
      {
        code: "CF 519E",
        name: "A and B and Lecture Rooms",
        rating: 1700,
        url: "https://codeforces.com/problemset/problem/519/E",
        comment: "Tìm các đỉnh cách đều $a$ và $b$: Nếu khoảng cách lẻ thì vô nghiệm. Nếu chẵn, dùng Binary Lifting nhảy lên trung điểm đường đi và đếm kích thước các cây con."
      },
      {
        code: "CF 1702G2",
        name: "Passable Paths (Hard Version)",
        rating: 1900,
        url: "https://codeforces.com/problemset/problem/1702/G2",
        comment: "Kiểm tra tập đỉnh có nằm trên 1 đường đi đơn: Chọn đỉnh sâu nhất $u$, đỉnh sâu nhất không thuộc cây con của $u$ là $v$. Dùng LCA và Euler Tour kiểm tra toàn bộ tập đỉnh."
      },
      {
        code: "CF 383C",
        name: "Propagating tree",
        rating: 1900,
        url: "https://codeforces.com/problemset/problem/383/C",
        comment: "Euler Tour trải phẳng cây kết hợp chia tầng chẵn/lẻ: Giá trị cộng dồn đan dấu $+val$ và $-val$ theo độ sâu, đưa bài toán về cập nhật đoạn trên Fenwick Tree."
      },
      {
        code: "CF 609E",
        name: "Minimum spanning tree for each edge",
        rating: 2000,
        url: "https://codeforces.com/problemset/problem/609/E",
        comment: "Dựng cây khung nhỏ nhất (MST). Khi thêm một cạnh $(u, v)$ có trọng số $w$, chu trình được tạo ra; dùng Binary Lifting tìm cạnh lớn nhất trên đường đi giữa $u$ và $v$ để thay thế."
      },
      {
        code: "CF 1328E",
        name: "Tree Queries",
        rating: 1700,
        url: "https://codeforces.com/problemset/problem/1328/E",
        comment: "Thay thế mỗi đỉnh $v$ bằng cha của nó $parent[v]$ (trừ gốc). Dùng Euler Tour kiểm tra xem tất cả các đỉnh này có phải là tổ tiên của đỉnh có độ sâu lớn nhất trong tập truy vấn không."
      },
      {
        code: "CF 916E",
        name: "Jamie and Tree",
        rating: 2400,
        url: "https://codeforces.com/problemset/problem/916/E",
        comment: "LCA trên cây có gốc thay đổi động: LCA mới của $(u, v)$ với gốc $root$ là đỉnh có độ sâu lớn nhất trong 3 đỉnh $LCA(u, v), LCA(u, root), LCA(v, root)$."
      }
    ]
  },
  {
    id: 12,
    name: "QUY HOẠCH ĐỘNG TRÊN CÂY & KỸ THUẬT ĐỔI GỐC (TREE DP & REROOTING)",
    tier: "Specialist ➔ Expert (1600 - 1900)",
    essence: [
      "Tree DP cơ bản: Tính toán giá trị của nút cha dựa trên các nút con bằng cách duyệt hậu thứ tự (Post-order DFS).",
      "Kỹ thuật Rerooting (Đổi gốc): DFS lần 1 tính nghiệm khi chọn gốc là 1; DFS lần 2 truyền kết quả từ cha xuống con để cập nhật đáp án cho mọi đỉnh làm gốc trong $O(N)$ tổng thể."
    ],
    complexity: "Cả 2 lượt DFS đều chạy trong thời gian tuyến tính $O(N)$.",
    blogs: [
      { title: "Tree DP Tutorial and Rerooting Technique", url: "https://codeforces.com/blog/entry/20935" },
      { title: "Rerooting DP Made Easy by Benq", url: "https://codeforces.com/blog/entry/68288" }
    ],
    problems: [
      {
        code: "CF 1187E",
        name: "Tree Painting",
        rating: 2100,
        url: "https://codeforces.com/problemset/problem/1187/E",
        comment: "Rerooting DP kinh điển: DFS 1 tính $sz[u]$ và tổng điểm $dp[1]$. DFS 2 khi chuyển gốc từ $u$ sang con $v$, điểm thay đổi chính xác $dp[v] = dp[u] + (N - 2 \\times sz[v])$."
      },
      {
        code: "CF 1324F",
        name: "Maximum White Subtree",
        rating: 1800,
        url: "https://codeforces.com/problemset/problem/1324/F",
        comment: "Tìm cây con liên thông chứa đỉnh $u$ có chênh lệch trắng - đen lớn nhất. DFS 1 tính $dp[u] = val[u] + \\sum \\max(0, dp[v])$. DFS 2 đẩy phần đóng góp từ cha xuống con."
      },
      {
        code: "CF 219D",
        name: "Choosing Capital for Treeland",
        rating: 1600,
        url: "https://codeforces.com/problemset/problem/219/D",
        comment: "Rerooting đếm số cạnh cần đảo chiều: DFS 1 tính số cạnh ngược hướng đi từ gốc 1. DFS 2 khi dời gốc từ $u$ sang $v$, nếu cạnh là $u \\to v$ thì tăng 1, ngược lại giảm 1."
      },
      {
        code: "CF 161D",
        name: "Distance in Tree",
        rating: 1800,
        url: "https://codeforces.com/problemset/problem/161/D",
        comment: "Tree DP: $dp[u][d]$ là số đỉnh ở cây con gốc $u$ có khoảng cách $d$ tới $u$. Gộp thông tin từ các cây con của $u$ để đếm số cặp đỉnh có khoảng cách đúng bằng $k$ trong $O(N \\times k)$."
      },
      {
        code: "CF 337D",
        name: "Book Evil",
        rating: 2000,
        url: "https://codeforces.com/problemset/problem/337/D",
        comment: "Tree DP tìm khoảng cách xa nhất tới các quỷ: Lưu 2 khoảng cách lớn nhất trong cây con của $u$, sau đó DFS 2 truyền khoảng cách xa nhất ngoài cây con của $u$ xuống."
      },
      {
        code: "CF 1092F",
        name: "Tree with Maximum Cost",
        rating: 1800,
        url: "https://codeforces.com/problemset/problem/1092/F",
        comment: "Rerooting tính tổng $\\sum a_v \\times dist(u, v)$: Khi chuyển gốc từ $u$ sang $v$, tổng trọng số cây con của $v$ tiến lại gần 1 bước $(-sum[v])$, phần còn lại xa hơn 1 bước $(+ (total - sum[v]))$."
      },
      {
        code: "CF 960E",
        name: "Alternating Tree Paths",
        rating: 2100,
        url: "https://codeforces.com/problemset/problem/960/E",
        comment: "Tree DP đếm tổng giá trị đường đi đan dấu chẵn/lẻ: Đếm số lượng đường đi có độ dài chẵn và lẻ xuất phát từ $u$ tới các nút con để tính đóng góp của mỗi nút $u$ vào kết quả."
      },
      {
        code: "CF 1153D",
        name: "Serval and Rooted Tree",
        rating: 1700,
        url: "https://codeforces.com/problemset/problem/1153/D",
        comment: "Tree DP: Với nút Max, $dp[u] = \\min_{v} dp[v]$ (chỉ cần tối ưu 1 nhánh con). Với nút Min, $dp[u] = \\sum_{v} dp[v]$ (phải gánh chịu tổn thất của tất cả các nhánh con)."
      },
      {
        code: "CF 1406C",
        name: "Link Cut Centroids",
        rating: 1600,
        url: "https://codeforces.com/problemset/problem/1406/C",
        comment: "Tìm trọng tâm của cây bằng Tree DP kích thước cây con. Nếu cây có 2 trọng tâm $C_1, C_2$, cắt một lá thuộc nhánh $C_1$ rồi nối lại vào $C_2$ để biến $C_1$ thành trọng tâm duy nhất."
      },
      {
        code: "CF 1528A",
        name: "Parsa's Humongous Tree",
        rating: 1600,
        url: "https://codeforces.com/problemset/problem/1528/A",
        comment: "Tree DP 2 trạng thái: Giá trị tối ưu tại mỗi đỉnh chỉ có thể là biên trái $l_u$ hoặc biên phải $r_u$. $dp[u][0/1]$ tính tổng chênh lệch lớn nhất khi gán nhãn cho cả cây con."
      }
    ]
  },
  {
    id: 13,
    name: "SỐ HỌC MODULAR & TỔ HỢP NÂNG CAO (COMBINATORICS & NUMBER THEORY)",
    tier: "Specialist ➔ Expert (1600 - 2000)",
    essence: [
      "Tính toán tổ hợp $\\binom{n}{k} \\pmod p$ bằng tiền xử lý giai thừa $fac[n]$ và nghịch đảo modulo $invFac[n]$ qua định lý Fermat nhỏ: $a^{p-2} \\equiv a^{-1} \\pmod p$.",
      "Bài toán chia kẹo Euler (Stars and Bars): Số cách chia $n$ đồ vật giống nhau cho $k$ người là $\\binom{n+k-1}{k-1}$. Định lý Bao hàm loại trừ (Principle of Inclusion-Exclusion - PIE)."
    ],
    complexity: "Tiền xử lý giai thừa $O(N)$, mỗi truy vấn tổ hợp $O(1)$. PIE với $K$ điều kiện mất $O(2^K)$.",
    blogs: [
      { title: "Combinatorics and Inverses on Codeforces", url: "https://codeforces.com/blog/entry/54503" },
      { title: "Principle of Inclusion-Exclusion Tutorial", url: "https://codeforces.com/blog/entry/64625" }
    ],
    problems: [
      {
        code: "CF 300C",
        name: "Beautiful Numbers",
        rating: 1600,
        url: "https://codeforces.com/problemset/problem/300/C",
        comment: "Duyệt số lần xuất hiện của chữ số $a$ (gọi là $i$ lần) thì chữ số $b$ xuất hiện $n - i$ lần. Nếu tổng các chữ số là số đẹp, cộng $\\binom{n}{i} \\pmod{10^9+7}$."
      },
      {
        code: "CF 559C",
        name: "Gerald and Giant Chess",
        rating: 2000,
        url: "https://codeforces.com/problemset/problem/559/C",
        comment: "DP Bao hàm loại trừ: Sắp xếp các ô cấm theo tọa độ tăng dần. $dp[i]$ là số đường đi từ $(1, 1)$ đến ô cấm thứ $i$ mà không đi qua bất kỳ ô cấm nào trước đó."
      },
      {
        code: "CF 131C",
        name: "The World is a Theatre",
        rating: 1300,
        url: "https://codeforces.com/problemset/problem/131/C",
        comment: "Mức cơ bản: Duyệt số nam $i$ từ 4 đến $n$, số nữ còn lại là $t - i \\ge 1$. Tính số cách chọn bằng công thức tổ hợp $\\binom{n}{i} \\times \\binom{m}{t-i}$."
      },
      {
        code: "CF 451E",
        name: "Devu and Flowers",
        rating: 2400,
        url: "https://codeforces.com/problemset/problem/451/E",
        comment: "Stars and Bars kết hợp PIE: Dùng Bitmask $2^n$ đại diện cho tập các loại hoa bị lấy vượt quá giới hạn $f_i$, áp dụng công thức bù trừ với số mũ lớn qua nghịch đảo modular."
      },
      {
        code: "CF 1359E",
        name: "Modular Stability",
        rating: 2000,
        url: "https://codeforces.com/problemset/problem/1359/E",
        comment: "Điều kiện ổn định: Mọi số trong dãy đều phải là bội số của số nhỏ nhất $x$. Số lượng bội số của $x$ $\\le n$ là $\\lfloor n/x \\rfloor$, số cách chọn $k-1$ số còn lại là $\\binom{\\lfloor n/x \\rfloor - 1}{k-1}$."
      },
      {
        code: "CF 895C",
        name: "Square Subsets",
        rating: 2000,
        url: "https://codeforces.com/problemset/problem/895/C",
        comment: "Tích là số chính phương khi mọi số mũ nguyên tố đều chẵn. Có 19 số nguyên tố $\\le 70$, biểu diễn mỗi số thành bitmask 19 bit chẵn lẻ, quy về bài toán DP Bitmask hoặc Linear Basis."
      },
      {
        code: "CF 1512G",
        name: "Short Task",
        rating: 1700,
        url: "https://codeforces.com/problemset/problem/1512/G",
        comment: "Dùng sàng kiểu Eratosthenes tính tổng các ước $\\sigma(x)$ cho toàn bộ các số đến $10^7$ trong $O(N \\log N)$, sau đó ghi nhận giá trị $x$ nhỏ nhất có $\\sigma(x) = c$."
      },
      {
        code: "CF 1278D",
        name: "Segment Tree?",
        rating: 1900,
        url: "https://codeforces.com/problemset/problem/1278/D",
        comment: "Đồ thị tạo bởi các đoạn giao nhau là một cây $\\iff$ có đúng $n-1$ cạnh và không có chu trình. Duyệt quét dòng và dừng ngay khi số cạnh vượt quá $n-1$."
      },
      {
        code: "CF 1420C2",
        name: "Pokémon Army (Hard Version)",
        rating: 1800,
        url: "https://codeforces.com/problemset/problem/1420/C2",
        comment: "Nhận xét cực trị địa phương: Tổng đan dấu tối đa chính là tổng các đỉnh cực đại trừ đi các đỉnh cực tiểu cục bộ. Khi hoán đổi 2 phần tử, chỉ cập nhật lại các vị trí lân cận."
      },
      {
        code: "CF 1535E",
        name: "Gold Transfer",
        rating: 2100,
        url: "https://codeforces.com/problemset/problem/1535/E",
        comment: "Binary Lifting trên cây: Nhảy lên tổ tiên cao nhất còn vàng để mua với giá rẻ nhất theo chiến lược tham lam, lặp lại cho đến khi mua đủ hoặc hết tiền."
      }
    ]
  },
  {
    id: 14,
    name: "QUY HOẠCH ĐỘNG BITMASK & SOS DP (SUM OVER SUBSETS)",
    tier: "Expert ➔ Candidate Master (1700 - 2100)",
    essence: [
      "Bitmask DP: Sử dụng số nguyên biểu diễn tập hợp con của tập có $N$ phần tử ($N \\le 20$), độ phức tạp $O(2^N \\times N)$.",
      "SOS DP: Tính tổng hàm $f(mask)$ trên mọi tập con $sub \\subseteq mask$ bằng cách cập nhật lần lượt qua từng bit trong $O(N \\times 2^N)$ thay vì $O(3^N)$."
    ],
    complexity: "Bitmask DP: $O(2^N \\times N)$ hoặc $O(3^N)$, SOS DP: $O(N \\times 2^N)$.",
    blogs: [
      { title: "SOS Dynamic Programming Tutorial", url: "https://codeforces.com/blog/entry/45223" },
      { title: "Bitmask DP from beginner to expert", url: "https://codeforces.com/blog/entry/18169" }
    ],
    problems: [
      {
        code: "CF 165E",
        name: "Compatible Numbers",
        rating: 2200,
        url: "https://codeforces.com/problemset/problem/165/E",
        comment: "Điều kiện $a \\,\\&\\, b = 0 \\iff b \\subseteq (\\sim a)$. Dùng SOS DP trên mảng boolean kích thước $2^{22}$ để tìm một số bất kỳ trong mảng là tập con của phần bù bitmask."
      },
      {
        code: "CF 580D",
        name: "Kefa and Dishes",
        rating: 1800,
        url: "https://codeforces.com/problemset/problem/580/D",
        comment: "Bitmask DP dạng TSP (Người du lịch): $dp[mask][last]$ là điểm thưởng tối đa khi đã ăn tập món trong $mask$ và món ăn gần nhất là $last$. Độ phức tạp $O(2^n \\times n^2)$ với $n \\le 18$."
      },
      {
        code: "CF 1209E2",
        name: "Rotate Columns (hard version)",
        rating: 2400,
        url: "https://codeforces.com/problemset/problem/1209/E2",
        comment: "Vì số hàng $n \\le 12$, chỉ có tối đa $n$ cột có giá trị lớn nhất là đáng quan tâm. Tiền xử lý giá trị cực đại khi dịch chuyển vòng tròn cho mỗi cột, sau đó chạy Bitmask DP qua các cột."
      },
      {
        code: "CF 1234F",
        name: "Yet Another Substring Reverse",
        rating: 2300,
        url: "https://codeforces.com/problemset/problem/1234/F",
        comment: "Chuỗi con không có ký tự trùng nhau có mask các bit độ dài $\\le 20$. Dùng SOS DP tìm độ dài chuỗi con dài nhất là tập con của mọi mask, sau đó ghép cặp $mask$ và $\\sim mask$."
      },
      {
        code: "CF 453B",
        name: "Little Elephant and Array",
        rating: 2200,
        url: "https://codeforces.com/problemset/problem/453/B",
        comment: "Vì $b_i < 60$, chỉ có 16 số nguyên tố nhỏ hơn 60. Bitmask DP lưu tập các ước nguyên tố đã được sử dụng: $dp[i][mask]$ tìm mảng nguyên tố cùng nhau có tổng chênh lệch nhỏ nhất."
      },
      {
        code: "CF 475D",
        name: "CGCDSSQ",
        rating: 2000,
        url: "https://codeforces.com/problemset/problem/475/D",
        comment: "Số lượng giá trị GCD khác nhau của các tiền tố kết thúc tại một vị trí tối đa là $\\log_2(\\max A)$. Duy trì danh sách các cặp $(gcd, count)$ và cập nhật dồn qua từng bước."
      },
      {
        code: "CF 1556D",
        name: "Take a Guess",
        rating: 1800,
        url: "https://codeforces.com/problemset/problem/1556/D",
        comment: "Đẳng thức bit toán học: $a + b = (a \\,\\&\\, b) + (a \\mid b)$. Hỏi 3 cặp đỉnh đầu tiên để giải hệ 3 phương trình tìm $a, b, c$, sau đó tìm toàn bộ mảng còn lại."
      },
      {
        code: "CF 1043F",
        name: "Make It Connected",
        rating: 2100,
        url: "https://codeforces.com/problemset/problem/1043/F",
        comment: "Tìm số phần tử ít nhất có GCD bằng 1. Đáp án luôn $\\le 7$. Dùng DP kết hợp nghịch đảo Mobius hoặc SOS DP đếm số cách chọn tập con có GCD bằng 1."
      },
      {
        code: "CF 808G",
        name: "Anthem of Europe",
        rating: 2400,
        url: "https://codeforces.com/problemset/problem/808/G",
        comment: "DP kết hợp KMP: $dp[i][j]$ là số lần xuất hiện tối đa của xâu $T$ khi duyệt tới ký tự $i$ của $S$ và đang khớp được tiền tố độ dài $j$ của $T$."
      },
      {
        code: "CF 38E",
        name: "Let's Go Rolling!",
        rating: 1700,
        url: "https://codeforces.com/problemset/problem/38/E",
        comment: "Sắp xếp tọa độ tăng dần. $dp[i][j]$ là chi phí tối thiểu cho $i$ viên bi đầu tiên khi viên bi gần nhất được ghim lại là viên thứ $j$."
      }
    ]
  },
  {
    id: 15,
    name: "CÂY FENWICK (BIT) & SEGMENT TREE CƠ BẢN (POINT UPDATE, RANGE QUERY)",
    tier: "Specialist ➔ Expert (1500 - 1900)",
    essence: [
      "Fenwick Tree (BIT): Cấu trúc mảng 1D tính tổng tiền tố và cập nhật phần tử dựa trên thao tác bit `i & (-i)`, cài đặt chỉ 10 dòng, bộ nhớ $O(N)$.",
      "Segment Tree cơ bản: Cây nhị phân quản lý đoạn con, hỗ trợ cập nhật 1 điểm và truy vấn hàm kết hợp (Sum, Min, Max, GCD) trên đoạn $[L, R]$ trong $O(\\log N)$."
    ],
    complexity: "Dựng cây $O(N)$, cập nhật 1 điểm $O(\\log N)$, truy vấn đoạn $O(\\log N)$.",
    blogs: [
      { title: "Fenwick Tree Tutorial with visual animations", url: "https://codeforces.com/blog/entry/61364" },
      { title: "Segment Tree for Beginners by PrinceOfPersia", url: "https://codeforces.com/blog/entry/18051" }
    ],
    problems: [
      {
        code: "CF 61E",
        name: "Enemy is weak",
        rating: 1600,
        url: "https://codeforces.com/problemset/problem/61/E",
        comment: "Đếm bộ 3 nghịch thế $a_i > a_j > a_k$: Nén tọa độ, dùng 2 cây Fenwick: một cây đếm số phần tử lớn hơn bên trái và một cây đếm số phần tử nhỏ hơn bên phải."
      },
      {
        code: "CF 339D",
        name: "Xenia and Bit Operations",
        rating: 1400,
        url: "https://codeforces.com/problemset/problem/339/D",
        comment: "Segment tree có phép toán xen kẽ: Tầng đáy thực hiện phép OR, tầng kế thực hiện XOR, xen kẽ liên tục cho tới gốc."
      },
      {
        code: "CF 459D",
        name: "Pashmak and Parmida's problem",
        rating: 1800,
        url: "https://codeforces.com/problemset/problem/459/D",
        comment: "Tính tần suất tiền tố $f(1, i, a_i)$ và hậu tố $f(j, n, a_j)$. Bài toán quy về đếm cặp nghịch thế $pre[i] > suf[j]$ với $i < j$, giải bằng Fenwick Tree."
      },
      {
        code: "CF 380C",
        name: "Sereja and Brackets",
        rating: 2000,
        url: "https://codeforces.com/problemset/problem/380/C",
        comment: "Segment Tree gộp thông tin ngoặc đúng: Mỗi nút lưu số ngoặc đúng $optimal$, số ngoặc mở dư thừa $open$, số ngoặc đóng dư thừa $close$."
      },
      {
        code: "CF 474F",
        name: "Ant colony",
        rating: 1900,
        url: "https://codeforces.com/problemset/problem/474/F",
        comment: "Segment Tree lưu $\\gcd$ đoạn và giá trị nhỏ nhất cùng tần suất của nó. Một chú kiến sống sót khi và chỉ khi giá trị của nó bằng đúng $\\gcd$ của cả đoạn."
      },
      {
        code: "CF 1234D",
        name: "Distinct Characters Queries",
        rating: 1500,
        url: "https://codeforces.com/problemset/problem/1234/D",
        comment: "Dùng 26 cây Fenwick Tree (hoặc `std::set`) lưu vị trí xuất hiện của từng chữ cái. Truy vấn số ký tự phân biệt trong $[L, R]$ bằng tổng các chữ cái có số lượng $> 0$."
      },
      {
        code: "CF 522D",
        name: "Closest Equals",
        rating: 2100,
        url: "https://codeforces.com/problemset/problem/522/D",
        comment: "Offline queries + Segment Tree: Duyệt $R$ từ trái sang phải, với mỗi phần tử trùng nhau gần nhất tại $prev[i]$, cập nhật khoảng cách vào vị trí $prev[i]$ trên SegTree."
      },
      {
        code: "CF 276E",
        name: "Little Girl and Problem on Trees",
        rating: 2100,
        url: "https://codeforces.com/problemset/problem/276/E",
        comment: "Cây có dạng các nhánh tia tỏa ra từ gốc 1. Dùng Fenwick Tree quản lý khoảng cách trên từng nhánh riêng biệt và một Fenwick Tree chung cho khoảng cách tính từ gốc."
      },
      {
        code: "CF 1000F",
        name: "One Occurrence",
        rating: 2400,
        url: "https://codeforces.com/problemset/problem/1000/F",
        comment: "Segment Tree tìm phần tử chỉ xuất hiện đúng 1 lần: Lưu vị trí xuất hiện trước đó $last[a_i]$ và trước nữa $prev[a_i]$, truy vấn Min trên Segment Tree."
      },
      {
        code: "CF 1108E2",
        name: "Array and Segments (Hard Version)",
        rating: 2000,
        url: "https://codeforces.com/problemset/problem/1108/E2",
        comment: "Duyệt chọn phần tử nhỏ nhất tại $i$, áp dụng tất cả các đoạn không chứa $i$ để giảm trừ tối đa các phần tử khác, dùng Segment Tree duy trì $\\max - \\min$."
      }
    ]
  },
  {
    id: 16,
    name: "SEGMENT TREE CẬP NHẬT LƯỜI (LAZY PROPAGATION SEGMENT TREE)",
    tier: "Expert ➔ Candidate Master (1700 - 2100)",
    essence: [
      "Lazy Propagation trì hoãn việc đẩy thông tin cập nhật xuống các nút lá con cho đến khi có truy vấn thực sự đi qua nút đó (`push_down`).",
      "Cho phép thực hiện các thao tác trên đoạn: Cộng đoạn, Gán đoạn, Đảo bit đoạn kết hợp truy vấn Tổng, Min, Max trên đoạn trong $O(\\log N)$."
    ],
    complexity: "Dựng cây $O(N)$, mỗi thao tác cập nhật đoạn và truy vấn đoạn đều chạy trong $O(\\log N)$. Bộ nhớ $O(4N)$.",
    blogs: [
      { title: "Segment Tree with Lazy Propagation - Complete Guide", url: "https://codeforces.com/blog/entry/22616" }
    ],
    problems: [
      {
        code: "CF 292E",
        name: "Copying Data",
        rating: 1700,
        url: "https://codeforces.com/problemset/problem/292/E",
        comment: "Lazy Segment Tree gán đè đoạn: Thay vì copy trực tiếp, gán mốc thời gian của thao tác copy lên đoạn của mảng $B$. Truy vấn điểm đọc thời gian copy gần nhất."
      },
      {
        code: "CF 52C",
        name: "Circular RMQ",
        rating: 2200,
        url: "https://codeforces.com/problemset/problem/52/C",
        comment: "Segment Tree cập nhật cộng đoạn và truy vấn Min trên mảng vòng tròn. Nếu đoạn $[L, R]$ bị vòng qua cuối mảng ($L > R$), tách thành 2 truy vấn $[L, n-1]$ và $[0, R]$."
      },
      {
        code: "CF 877E",
        name: "Danil and a Part-time Job",
        rating: 1800,
        url: "https://codeforces.com/problemset/problem/877/E",
        comment: "Euler tour đưa cây con về đoạn liên tiếp $[tin[u], tout[u]]$. Dùng Lazy Segment Tree lật trạng thái bóng đèn (0 thành 1, 1 thành 0) bằng cờ lazy XOR 1."
      },
      {
        code: "CF 145E",
        name: "Lucky Queries",
        rating: 2000,
        url: "https://codeforces.com/problemset/problem/145/E",
        comment: "Segment tree duy trì độ dài dãy con không giảm chữ số may mắn (4 và 7): Lưu số chữ số 4, 7 và độ dài chuỗi dạng $44..77$ và $77..44$. Cập nhật lười đảo 4 thành 7."
      },
      {
        code: "CF 438D",
        name: "The Child and Sequence",
        rating: 2300,
        url: "https://codeforces.com/problemset/problem/438/D",
        comment: "Segment Tree lấy modulo: Do $x \\pmod m < x/2$ khi $x \\ge m$, giá trị giảm theo hàm mũ. Lưu giá trị Max của mỗi nút; chỉ duyệt sâu vào nhánh con khi $\\max \\ge m$."
      },
      {
        code: "CF 920F",
        name: "SUM and REPLACE",
        rating: 2000,
        url: "https://codeforces.com/problemset/problem/920/F",
        comment: "Thay thế phần tử bằng số lượng ước $d(x)$. Vì $d(x)$ giảm rất nhanh về 1 hoặc 2, ta duy trì giá trị Max của nút; nếu $\\max \\le 2$ thì bỏ qua không đệ quy xuống nữa."
      },
      {
        code: "CF 1114F",
        name: "Please, another Queries on Array?",
        rating: 2400,
        url: "https://codeforces.com/problemset/problem/1114/F",
        comment: "Tính hàm phi Euler $\\phi(X) = X \\times \\prod (1 - 1/p)$. Vì các số $\\le 300$ chỉ có 62 số nguyên tố, dùng Lazy Segment Tree lưu tích đoạn kết hợp bitmask 62-bit lưu tập các ước nguyên tố."
      },
      {
        code: "CF 1439C",
        name: "Greedy Shopping",
        rating: 2400,
        url: "https://codeforces.com/problemset/problem/1439/C",
        comment: "Segment Tree kết hợp Binary Search trên cây (Walk on Segment Tree): Cập nhật gán $\\max(a_i, v)$ trên đoạn không tăng và truy vấn mô phỏng mua kẹo với ngân sách."
      },
      {
        code: "CF 1208E",
        name: "Let Them Slide",
        rating: 2200,
        url: "https://codeforces.com/problemset/problem/1208/E",
        comment: "Tìm đóng góp lớn nhất của mỗi hàng vào từng cột: Trượt cửa sổ tìm Max trong đoạn trượt được và dùng Lazy Segment Tree hoặc Difference Array cộng dồn kết quả."
      },
      {
        code: "CF 1698D",
        name: "Fixed Point Guessing",
        rating: 1600,
        url: "https://codeforces.com/problemset/problem/1698/D",
        comment: "Nhị phân tương tác: Chia đôi đoạn $[L, R]$, hỏi các giá trị trong nửa đầu. Số phần tử có giá trị nằm trong đoạn $[L, M]$ là lẻ khi và chỉ khi phần tử cố định ($a_i = i$) nằm ở nửa đầu."
      }
    ]
  }
];

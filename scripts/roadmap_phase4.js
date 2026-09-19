module.exports = [
  {
    id: 17,
    name: "XỬ LÝ CHUỖI NÂNG CAO (STRING HASHING, Z-ALGORITHM, KMP, TRIE)",
    tier: "Candidate Master (1900 - 2100)",
    essence: [
      "Polynomial Rolling Hash: So sánh 2 chuỗi con trong $O(1)$ bằng hashing đa thức (nên dùng Double Hash với modulo nguyên tố lớn để chống hack test).",
      "KMP (Knuth-Morris-Pratt): Tiền xử lý mảng $\\pi[i]$ (tiền tố dài nhất đồng thời là hậu tố thực sự) trong $O(N)$.",
      "Z-Algorithm: Mảng $Z[i]$ lưu độ dài tiền tố chung dài nhất giữa chuỗi $S$ và hậu tố bắt đầu tại $i$ trong $O(N)$. Cây Trie quản lý tập từ và tìm kiếm theo tiền tố hoặc tìm XOR lớn nhất (0-1 Trie)."
    ],
    complexity: "Khởi tạo $O(N)$ hoặc $O(\\sum |S|)$, so sánh / tìm kiếm $O(1)$ hoặc $O(|P|)$.",
    blogs: [
      { title: "Everything about String Hashing by Neal Wu", url: "https://codeforces.com/blog/entry/60445" },
      { title: "KMP Algorithm and Prefix Function", url: "https://codeforces.com/blog/entry/72458" }
    ],
    problems: [
      {
        code: "CF 271D",
        name: "Good Substrings",
        rating: 1600,
        url: "https://codeforces.com/problemset/problem/271/D",
        comment: "Cây Trie hoặc Rolling Hash đếm số lượng chuỗi con phân biệt chứa không quá $k$ ký tự xấu. Chèn các chuỗi con vào Trie và đếm số nút mới tạo."
      },
      {
        code: "CF 126B",
        name: "Password",
        rating: 1700,
        url: "https://codeforces.com/problemset/problem/126/B",
        comment: "KMP hoặc Z-Algorithm: Tìm chuỗi vừa là tiền tố, vừa là hậu tố và xuất hiện ít nhất một lần ở giữa văn bản. Kiểm tra các giá trị $\\pi[n-1]$ và $\\pi[\\pi[n-1]-1]$."
      },
      {
        code: "CF 432D",
        name: "Prefixes and Suffixes",
        rating: 1900,
        url: "https://codeforces.com/problemset/problem/432/D",
        comment: "Z-Algorithm kết hợp DP đếm tần suất: Tìm các độ dài vừa là tiền tố vừa là hậu tố ($Z[i] == n - i$), sau đó dùng mảng cộng dồn đếm số lần xuất hiện trong xâu."
      },
      {
        code: "CF 1137B",
        name: "Camp Schedule",
        rating: 1600,
        url: "https://codeforces.com/problemset/problem/1137/B",
        comment: "KMP tối ưu ghép xâu: Dùng mảng $\\pi$ để tìm phần tiền tố trùng với hậu tố dài nhất của $t$. Ghép 1 lần $t$ hoàn chỉnh, sau đó tham lam lặp lại đoạn đuôi $(t - \\pi[|t|-1])$."
      },
      {
        code: "CF 514C",
        name: "Watto and Mechanism",
        rating: 1700,
        url: "https://codeforces.com/problemset/problem/514/C",
        comment: "Polynomial Double Hashing hoặc Trie: Với mỗi chuỗi truy vấn, thử thay đổi từng ký tự thành 2 ký tự khác và kiểm tra mã hash mới có tồn tại trong bảng băm không trong $O(|s| \\times 2)$."
      },
      {
        code: "CF 835D",
        name: "Palindromic characteristics",
        rating: 1800,
        url: "https://codeforces.com/problemset/problem/835/D",
        comment: "Dùng Polynomial Hashing tiền xử lý cả chiều xuôi và chiều ngược để kiểm tra một đoạn con bất kỳ có phải là Palindrome hay không trong $O(1)$."
      },
      {
        code: "CF 471D",
        name: "MUH and Cube Walls",
        rating: 1800,
        url: "https://codeforces.com/problemset/problem/471/D",
        comment: "KMP trên mảng hiệu độ cao: Tính mảng chênh lệch giữa các cột kề nhau $\\Delta a$ và $\\Delta b$, sau đó chạy KMP tìm kiếm mẫu chênh lệch của bức tường."
      },
      {
        code: "CF 1200E",
        name: "Compress Words",
        rating: 1600,
        url: "https://codeforces.com/problemset/problem/1200/E",
        comment: "KMP nối từ vựng: Với mỗi từ mới, ghép tiền tố của từ mới với hậu tố của văn bản hiện tại (độ dài $\\le |word|$) qua ký tự phân cách '#' để tìm độ dài trùng lặp bằng mảng $\\pi$."
      },
      {
        code: "CF 1055C",
        name: "Lucky Days",
        rating: 1800,
        url: "https://codeforces.com/problemset/problem/1055/C",
        comment: "Thuật toán Euclid mở rộng: Tìm độ giao nhau lớn nhất giữa 2 chu kỳ tuần hoàn bằng cách giải phương trình đồng dư khoảng cách qua $\\gcd(t_a, t_b)$."
      },
      {
        code: "CF 848A",
        name: "From Y to Y",
        rating: 1500,
        url: "https://codeforces.com/problemset/problem/848/A",
        comment: "Chi phí tạo $c$ ký tự giống nhau là $\\binom{c}{2}$. Tham lam chọn $c$ lớn nhất có $\\binom{c}{2} \\le k$, trừ đi và chuyển sang ký tự bảng chữ cái tiếp theo."
      }
    ]
  },
  {
    id: 18,
    name: "THÀNH PHẦN LIÊN THÔNG MẠNH (SCC) & CẦU / KHỚP (TARJAN & 2-SAT)",
    tier: "Candidate Master (1900 - 2200)",
    essence: [
      "Tarjan's Algorithm: Dùng chỉ số DFS `num[u]` và `low[u]` để tìm Cầu (Bridge: $low[v] > num[u]$), Khớp (Articulation Point: $low[v] \\ge num[u]$) và Thành phần liên thông mạnh (SCC: $low[u] == num[u]$) trong một lần duyệt duy nhất.",
      "2-SAT (2-Satisfiability): Biểu diễn mệnh đề $(u \\lor v) \\equiv (\\neg u \\implies v) \\land (\\neg v \\implies u)$ thành đồ thị có hướng. Hệ có nghiệm $\\iff$ không có biến $x$ nào nằm cùng SCC với $\\neg x$."
    ],
    complexity: "Cả Tarjan tìm SCC/Cầu/Khớp và 2-SAT đều chạy tuyến tính $O(V + E)$.",
    blogs: [
      { title: "Tarjan's Strongly Connected Components and Bridges", url: "https://codeforces.com/blog/entry/71659" },
      { title: "2-SAT Tutorial and Implementation", url: "https://codeforces.com/blog/entry/16205" }
    ],
    problems: [
      {
        code: "CF 427C",
        name: "Checkposts",
        rating: 1700,
        url: "https://codeforces.com/problemset/problem/427/C",
        comment: "Tarjan tìm các SCC. Trong mỗi SCC, cảnh sát đặt tại đỉnh có chi phí nhỏ nhất có thể bảo vệ toàn bộ SCC. Chi phí tối thiểu là tổng các min, số cách chọn là tích số lượng các min."
      },
      {
        code: "CF 118E",
        name: "Bertown roads",
        rating: 2100,
        url: "https://codeforces.com/problemset/problem/118/E",
        comment: "DFS Tree kiểm tra Cầu: Nếu đồ thị chứa cầu thì không thể định hướng thành đồ thị liên thông mạnh. Ngược lại, định hướng các cạnh xuôi theo cây DFS và các cạnh ngược hướng lên tổ tiên."
      },
      {
        code: "CF 776D",
        name: "The Door Problem",
        rating: 2100,
        url: "https://codeforces.com/problemset/problem/776/D",
        comment: "2-SAT chuẩn mực: Mỗi phòng điều khiển bởi đúng 2 công tắc $x, y$. Cửa đóng ban đầu đòi hỏi $(x \\oplus y = 1)$, cửa mở ban đầu đòi hỏi $(x \\oplus y = 0)$. Dựng đồ thị suy diễn và kiểm tra SCC."
      },
      {
        code: "CF 1000E",
        name: "We Need More Bosses",
        rating: 2100,
        url: "https://codeforces.com/problemset/problem/1000/E",
        comment: "Cây cầu-khối (Bridge-Block Tree): Tìm các cầu và co từng thành phần 2-liên thông cạnh thành 1 siêu đỉnh để tạo thành một cây mới. Đáp án là đường kính (đường đi dài nhất) của cây mới này."
      },
      {
        code: "CF 1213F",
        name: "Shortest Normal String",
        rating: 2100,
        url: "https://codeforces.com/problemset/problem/1213/F",
        comment: "Tạo cạnh có hướng $p_i \\to p_{i+1}$ và $q_i \\to q_{i+1}$. Co các đỉnh trong cùng SCC lại, sau đó sắp xếp topo đồ thị các SCC để gán các chữ cái tăng dần từ 'a' đến 'z'."
      },
      {
        code: "CF 1438C",
        name: "Engineer Artem",
        rating: 2000,
        url: "https://codeforces.com/problemset/problem/1438/C",
        comment: "Tô màu bàn cờ 2 phía (Bipartite 2-coloring): Với các ô có $(i+j)$ chẵn, ta ép giá trị phải là số chẵn (tăng 1 nếu đang lẻ). Với $(i+j)$ lẻ, ép phải là số lẻ. Khi đó không bao giờ có 2 ô kề nhau bằng nhau."
      },
      {
        code: "CF 1399E2",
        name: "Weights Division (hard version)",
        rating: 2000,
        url: "https://codeforces.com/problemset/problem/1399/E2",
        comment: "DFS tính số lần đi qua mỗi cạnh (tần suất $c_e$). Dùng 2 Priority Queue cho các cạnh chi phí 1 và chi phí 2, tham lam giảm trọng số các cạnh mang lại độ giảm tổng lớn nhất."
      },
      {
        code: "CF 22E",
        name: "Scheme",
        rating: 2400,
        url: "https://codeforces.com/problemset/problem/22/E",
        comment: "Đồ thị hàm (Functional Graph): Mỗi đỉnh có bán bậc ra đúng bằng 1 gồm các chu trình và các cây con hướng vào chu trình. Co các thành phần và nối các lá với các chu trình để tạo 1 SCC lớn."
      },
      {
        code: "CF 555E",
        name: "Case of Computer Network",
        rating: 2700,
        url: "https://codeforces.com/problemset/problem/555/E",
        comment: "Co các thành phần 2-liên thông cạnh thành cây. Định hướng các đường đi trên cây bằng LCA và mảng cộng dồn trên cây để kiểm tra xem có cạnh nào bị yêu cầu đi cả 2 chiều ngược nhau không."
      },
      {
        code: "CF 1681D",
        name: "Required Length",
        rating: 1700,
        url: "https://codeforces.com/problemset/problem/1681/D",
        comment: "BFS trên không gian trạng thái số kết hợp cắt nhánh thông minh: Nhân số hiện tại với các chữ số khác 0 và 1 của chính nó, dùng `std::map` lưu khoảng cách ít nhất đạt độ dài $n$."
      }
    ]
  },
  {
    id: 19,
    name: "LUỒNG CỰC ĐẠI DINIC & CẶP GHÉP CỰC ĐẠI (MAX FLOW & MIN-CUT)",
    tier: "Candidate Master ➔ Master (2000 - 2300)",
    essence: [
      "Thuật toán Dinic: Tìm luồng cực đại bằng cách chia tầng đồ thị (Level Graph bằng BFS) kết hợp đẩy luồng chặn (Blocking Flow bằng DFS với con trỏ `ptr` tránh duyệt lại) trong $O(V^2 E)$.",
      "Định lý Luồng cực đại - Lát cắt hẹp nhất (Max Flow - Min Cut Theorem): Giá trị luồng cực đại từ $S$ đến $T$ bằng dung lượng nhỏ nhất của lát cắt chia cách $S$ và $T$. Ứng dụng mô hình hóa bài toán Project Selection."
    ],
    complexity: "Đồ thị tổng quát: $O(V^2 E)$. Trên mạng đơn vị hoặc đồ thị 2 phía: $O(E \\sqrt{V})$ (nhanh ngang ngửa Hopcroft-Karp).",
    blogs: [
      { title: "Dinic's Algorithm Tutorial and Implementation", url: "https://codeforces.com/blog/entry/64504" },
      { title: "Flow problems and Applications (Min-Cut, Project Selection)", url: "https://codeforces.com/blog/entry/85532" }
    ],
    problems: [
      {
        code: "CF 1082G",
        name: "Petya and Graph",
        rating: 2400,
        url: "https://codeforces.com/problemset/problem/1082/G",
        comment: "Project Selection kinh điển quy về Min-Cut: Đỉnh nguồn $S$ nối tới mỗi cạnh với dung lượng $w_e$. Mỗi cạnh nối tới 2 đỉnh mút với dung lượng $\\infty$. Mỗi đỉnh nối tới đích $T$ với dung lượng $a_v$."
      },
      {
        code: "CF 653D",
        name: "Delivery Bears",
        rating: 2300,
        url: "https://codeforces.com/problemset/problem/653/D",
        comment: "Chặt nhị phân trọng lượng mỗi chú gấu là $W$. Dung lượng cạnh mới là $\\lfloor cap / W \\rfloor$. Chạy Dinic kiểm tra xem luồng cực đại có $\\ge x$ chú gấu hay không."
      },
      {
        code: "CF 847J",
        name: "Students' Initiation",
        rating: 2200,
        url: "https://codeforces.com/problemset/problem/847/J",
        comment: "Chặt nhị phân bán bậc vào cực đại $K$. Dựng mạng luồng: $S$ nối tới các cặp cạnh, mỗi cặp cạnh nối tới 2 bạn học sinh, mỗi học sinh nối tới $T$ với dung lượng $K$. Chạy Dinic kiểm tra luồng bão hòa."
      },
      {
        code: "CF 1139E",
        name: "Maximize Mex",
        rating: 2400,
        url: "https://codeforces.com/problemset/problem/1139/E",
        comment: "Đảo ngược thời gian và Bipartite Matching: Thêm dần từng học sinh từ cuối lên, cạnh nối giữa giá trị tiềm năng $val$ và câu lạc bộ. Dùng thuật toán đường tăng luồng (Kuhn) tăng dần giá trị MEX."
      },
      {
        code: "CF 498C",
        name: "Array and Operations",
        rating: 2200,
        url: "https://codeforces.com/problemset/problem/498/C",
        comment: "Với mỗi thừa số nguyên tố $p$, dựng đồ thị 2 phía giữa các phần tử ở vị trí lẻ và chẵn. Dung lượng là số mũ của $p$ trong phân tích thừa số nguyên tố. Chạy Dinic tìm tổng số thao tác triệt tiêu."
      },
      {
        code: "CF 277E",
        name: "Binary Tree on Plane",
        rating: 2400,
        url: "https://codeforces.com/problemset/problem/277/E",
        comment: "Min-Cost Max-Flow (MCMF): Tách mỗi đỉnh thành đỉnh cha (cung cấp tối đa 2 con) và đỉnh con (cần đúng 1 cha). Nối cạnh có hướng từ đỉnh có tung độ lớn hơn xuống đỉnh thấp hơn với chi phí khoảng cách Euclid."
      },
      {
        code: "CF 311E",
        name: "Biologist",
        rating: 2600,
        url: "https://codeforces.com/problemset/problem/311/E",
        comment: "Project Selection mở rộng có phạt: Đỉnh nguồn nối các loài chó, đích nối loài mèo. Các yêu cầu của bạn bè nối với các loài chó/mèo tương ứng, chi phí phạt cộng thêm vào dung lượng lát cắt."
      },
      {
        code: "CF 724E",
        name: "Goods transportation",
        rating: 2600,
        url: "https://codeforces.com/problemset/problem/724/E",
        comment: "Mô hình Min-Cut giải bằng DP: Đồ thị luồng có dạng đặc biệt cho phép phân tích mọi lát cắt $(S, T)$ phụ thuộc vào số lượng đỉnh thuộc $S$. Dùng DP $O(N^2)$ tìm lát cắt nhỏ nhất mà không cần chạy Dinic."
      },
      {
        code: "CF 1783F",
        name: "Double Sort II",
        rating: 2600,
        url: "https://codeforces.com/problemset/problem/1783/F",
        comment: "Phân tích hoán vị thành các chu trình rời nhau. Mỗi thao tác hoán đổi có thể giải quyết 1 cạnh trong chu trình của hoán vị $a$ hoặc $b$. Ghép cặp cực đại trên đồ thị 2 phía giữa các chu trình."
      },
      {
        code: "CF 827D",
        name: "Best Edge Weight",
        rating: 2700,
        url: "https://codeforces.com/problemset/problem/827/D",
        comment: "Dựng cây khung nhỏ nhất (MST). Với cạnh thuộc MST, tìm cạnh ngoài cây nhỏ nhất có thể thay thế nó; với cạnh ngoài MST, tìm cạnh trong cây lớn nhất trên chu trình. Giải bằng HLD kết hợp Segment Tree."
      }
    ]
  },
  {
    id: 20,
    name: "CÂY PHÂN ĐOẠN BỀN VỮNG (PERSISTENT SEGMENT TREE & PERSISTENT TRIE)",
    tier: "Candidate Master ➔ Master (2100 - 2400)",
    essence: [
      "Persistent Data Structure bảo toàn các phiên bản lịch sử sau mỗi thao tác cập nhật. Khi thay đổi 1 điểm, thay vì sửa trực tiếp, ta tạo một đường dẫn mới từ gốc gồm $\\log N$ nút mới, trỏ các nhánh không đổi về phiên bản cũ.",
      "Kỹ thuật tiền xử lý $N$ phiên bản tiền tố: Phiên bản thứ $R$ lưu trạng thái mảng $a[1..R]$, cho phép truy vấn đoạn $[L, R]$ bằng cách trừ phiên bản $R$ cho phiên bản $L-1$ (tương tự Prefix Sum)."
    ],
    complexity: "Mỗi thao tác cập nhật tạo $O(\\log N)$ nút mới. Bộ nhớ $O(N \\log N)$, thời gian truy vấn $O(\\log N)$.",
    blogs: [
      { title: "Persistent Segment Tree Tutorial by Anudeep", url: "https://codeforces.com/blog/entry/15729" },
      { title: "Advanced Data Structures: Persistence and Treaps", url: "https://codeforces.com/blog/entry/84101" }
    ],
    problems: [
      {
        code: "CF 813E",
        name: "Army Creation",
        rating: 2200,
        url: "https://codeforces.com/problemset/problem/813/E",
        comment: "Với mỗi phần tử $i$, tìm vị trí xuất hiện thứ $k$ trước đó của cùng giá trị $prev_k[i]$. Phần tử được chọn khi $prev_k[i] < L$. Dùng Persistent Segment Tree đếm số phần tử có $prev_k < L$ trong $[L, R]$."
      },
      {
        code: "CF 840D",
        name: "Destiny",
        rating: 2500,
        url: "https://codeforces.com/problemset/problem/840/D",
        comment: "Tìm phần tử xuất hiện $> (R - L + 1) / k$ lần với $k \\le 5$. Dùng Persistent Segment Tree: Tại mỗi bước chỉ có tối đa $k$ nhánh con có tổng tần suất lớn hơn ngưỡng, đệ quy tìm số nhỏ nhất thỏa mãn."
      },
      {
        code: "CF 707D",
        name: "Persistent Bookcase",
        rating: 2000,
        url: "https://codeforces.com/problemset/problem/707/D",
        comment: "Persistent Data Structure trên cây phiên bản: Thao tác kiểu 4 quay lại phiên bản $k$ tạo thành một cây lịch sử các truy vấn. Lưu các truy vấn thành cây và DFS duyệt trên cây lịch sử kết hợp `std::bitset`."
      },
      {
        code: "CF 960F",
        name: "Pathwalks",
        rating: 2100,
        url: "https://codeforces.com/problemset/problem/960/F",
        comment: "Dynamic Segment Tree cho mỗi đỉnh: $dp[u][w]$ là độ dài đường đi dài nhất kết thúc tại đỉnh $u$ với trọng số cạnh cuối cùng là $w$. Cập nhật và truy vấn Max trên SegTree động tại đỉnh $u$."
      },
      {
        code: "CF 484E",
        name: "Sign on Fence",
        rating: 2500,
        url: "https://codeforces.com/problemset/problem/484/E",
        comment: "Sắp xếp các cột theo độ cao giảm dần. Thêm dần từng cột vào Persistent Segment Tree duy trì độ dài đoạn liên tiếp toàn số 1 dài nhất. Chặt nhị phân phiên bản thời gian trên cây bền vững."
      },
      {
        code: "CF 1422F",
        name: "Boring Queries",
        rating: 2700,
        url: "https://codeforces.com/problemset/problem/1422/F",
        comment: "Tính $\\text{LCM}(a_L, \\dots, a_R) \\pmod{10^9+7}$. Tách các số nguyên tố $\\le \\sqrt{\\max A}$ (chỉ có 86 số, lưu số mũ lớn nhất) và các số nguyên tố lớn (mỗi số chỉ xuất hiện số mũ tối đa 1, dùng Persistent SegTree)."
      },
      {
        code: "CF 1093E",
        name: "Intersection of Permutations",
        rating: 2400,
        url: "https://codeforces.com/problemset/problem/1093/E",
        comment: "Đếm điểm trong hình chữ nhật 2D khi có đổi chỗ: Fenwick Tree chứa các Treap / PBDS hoặc Persistent Segment Tree kết hợp Fenwick ngoài (BIT of SegTree) cập nhật động."
      },
      {
        code: "CF 622F",
        name: "The Sum of the k-th Powers",
        rating: 2000,
        url: "https://codeforces.com/problemset/problem/622/F",
        comment: "Tổng lũy thừa bậc $k$: $S(n) = \\sum_{i=1}^n i^k$ là một đa thức bậc $k+1$ theo $n$. Tính $k+2$ giá trị đầu tiên và dùng công thức nội suy Lagrange tính $S(n)$ trong $O(k)$."
      },
      {
        code: "CF 1188C",
        name: "Array Beautification",
        rating: 2300,
        url: "https://codeforces.com/problemset/problem/1188/C",
        comment: "DP mảng con: Giá trị đẹp nhất của mảng là khoảng cách nhỏ nhất giữa 2 phần tử. Với mỗi giá trị khoảng cách $X$, dùng Two Pointers và DP prefix sum tính số dãy con có khoảng cách $\\ge X$."
      },
      {
        code: "CF 1401E",
        name: "Divide Square",
        rating: 2300,
        url: "https://codeforces.com/problemset/problem/1401/E",
        comment: "Công thức Euler cho đồ thị phẳng: Số miền tạo thành $= 1 + \\text{số giao điểm} + \\text{số đoạn chạm cả 2 biên}$. Quét dòng (Sweep-line) từ trái sang phải dùng Fenwick Tree đếm giao điểm."
      }
    ]
  },
  {
    id: 21,
    name: "PHÂN TÁCH ĐƯỜNG ĐI NẶNG - NHẸ TRÊN CÂY (HEAVY-LIGHT DECOMPOSITION - HLD)",
    tier: "Master (2100 - 2400)",
    essence: [
      "HLD chia các cạnh của cây thành Cạnh nặng (Heavy Edge: dẫn tới con có kích thước cây con lớn nhất) và Cạnh nhẹ (Light Edge). Cây được phân rã thành các chuỗi nặng liên tục (Heavy Paths).",
      "Bất kỳ đường đi nào giữa hai đỉnh bất kỳ trên cây cũng chỉ đi qua tối đa $O(\\log N)$ chuỗi nặng. Mỗi chuỗi nặng là một đoạn liên tục trên mảng Euler tour $\\implies$ dùng Segment Tree quản lý mọi thao tác trên đường đi trong $O(\\log^2 N)$."
    ],
    complexity: "Tiền xử lý HLD $O(N)$, mỗi thao tác cập nhật hoặc truy vấn trên đường đi $(u, v)$ mất $O(\\log^2 N)$.",
    blogs: [
      { title: "Heavy-Light Decomposition Complete Tutorial and Code", url: "https://codeforces.com/blog/entry/81317" },
      { title: "HLD on Codeforces: Practical Tricks and Range Queries", url: "https://codeforces.com/blog/entry/53170" }
    ],
    problems: [
      {
        code: "CF 165D",
        name: "Beard Graph",
        rating: 2400,
        url: "https://codeforces.com/problemset/problem/165/D",
        comment: "HLD cơ bản: Đưa cạnh về đỉnh con sâu hơn. Thao tác biến cạnh thành trắng/đen quy về cập nhật điểm trên Segment Tree. Truy vấn khoảng cách là kiểm tra xem trên đường đi có cạnh đen không."
      },
      {
        code: "CF 343D",
        name: "Water Tree",
        rating: 2100,
        url: "https://codeforces.com/problemset/problem/343/D",
        comment: "Đổ nước vào cây con gốc $u$ (cập nhật đoạn trên Euler tour). Rút nước tại đỉnh $v$ làm rỗng đường đi từ $v$ lên gốc cây (cập nhật đường đi bằng HLD). Truy vấn trạng thái nước bằng Segment Tree."
      },
      {
        code: "CF 916E",
        name: "Jamie and Tree",
        rating: 2400,
        url: "https://codeforces.com/problemset/problem/916/E",
        comment: "HLD với gốc cây động: Cập nhật giá trị đường đi giữa $u$ và $v$ không đổi theo gốc. Cập nhật cây con với gốc động đòi hỏi chia trường hợp dựa trên quan hệ tổ tiên với gốc mới."
      },
      {
        code: "CF 587C",
        name: "Duff in the Army",
        rating: 2200,
        url: "https://codeforces.com/problemset/problem/587/C",
        comment: "HLD kết hợp gộp danh sách: Mỗi nút lưu tối đa 10 ID người nhỏ nhất. Khi nhảy qua các chuỗi nặng của HLD, gộp các danh sách 10 phần tử lại với nhau trong $O(10)$."
      },
      {
        code: "CF 1023F",
        name: "Mobile Phone Network",
        rating: 2700,
        url: "https://codeforces.com/problemset/problem/1023/F",
        comment: "Dựng cây khung chứa toàn bộ $k$ cạnh của ta. Với mỗi cạnh của đối thủ $(u, v)$ có trọng số $w$, dùng HLD gán trọng số $\\le w$ cho tất cả các cạnh của ta nằm trên đường đi giữa $u$ và $v$."
      },
      {
        code: "CF 609E",
        name: "Minimum spanning tree for each edge",
        rating: 2000,
        url: "https://codeforces.com/problemset/problem/609/E",
        comment: "Dựng cây khung nhỏ nhất Kruskal. Với mỗi cạnh đề bài cho, truy vấn trọng số lớn nhất trên đường đi giữa 2 đỉnh đầu mút bằng HLD kết hợp Segment Tree RMQ."
      },
      {
        code: "CF 1239D",
        name: "Runaway to a Sitter",
        rating: 2400,
        url: "https://codeforces.com/problemset/problem/1239/D",
        comment: "Xây dựng đồ thị có hướng giữa người và mèo: Nếu người $i$ quen mèo $j$ ($i \\ne j$), nối cạnh $i \\to j$. Tìm thành phần liên thông mạnh bằng Tarjan; nếu chỉ có 1 SCC thì vô nghiệm."
      },
      {
        code: "CF 1017G",
        name: "The Tree",
        rating: 3100,
        url: "https://codeforces.com/problemset/problem/1017/G",
        comment: "HLD quản lý dòng chảy kích hoạt: Segment Tree lưu tổng và hậu tố lớn nhất (Max Suffix Sum) của các chuỗi nặng để kiểm tra xem một đỉnh có bị kích hoạt bởi các thao tác từ tổ tiên không."
      },
      {
        code: "CF 739E",
        name: "Gosha is hunting",
        rating: 2400,
        url: "https://codeforces.com/problemset/problem/739/E",
        comment: "Tối ưu hóa WQS Binary Search hoặc DP: Tìm hệ số phạt $\\lambda$ cho việc sử dụng Pokéball loại 2, quy bài toán về tìm giá trị lớn nhất độc lập cho từng con Pokémon."
      },
      {
        code: "CF 117E",
        name: "Tree or not Tree",
        rating: 3000,
        url: "https://codeforces.com/problemset/problem/117/E",
        comment: "Đồ thị 1 chu trình (cactus / pseudo-tree): Tìm chu trình duy nhất, tách chu trình và các cây con gắn vào chu trình, quản lý lật bit các cạnh bằng HLD trên cây kết hợp Segment Tree trên chu trình."
      }
    ]
  },
  {
    id: 22,
    name: "TỐI ƯU HÓA QUY HOẠCH ĐỘNG: BAO LỒI (CONVEX HULL TRICK) & CÂY LI CHAO",
    tier: "Master (2100 - 2400)",
    essence: [
      "Convex Hull Trick (CHT): Tối ưu hóa hệ thức quy hoạch động có dạng $dp[i] = \\min_{j < i}(dp[j] + a[i] \\times b[j])$. Mỗi trạng thái $j$ là một đường thẳng $y = m x + c$ với hệ số góc $m = b[j]$ và hằng số $c = dp[j]$.",
      "Nếu hệ số góc $m$ đơn điệu, dùng `std::deque` duy trì bao lồi trong $O(N)$. Nếu hệ số góc hoặc truy vấn không đơn điệu, dùng Cây Li Chao (Li Chao Segment Tree) hỗ trợ thêm đoạn thẳng và truy vấn cực trị tại $x$ trong $O(\\log(\\text{range}))$, cài đặt cực kỳ tinh gọn."
    ],
    complexity: "CHT đơn điệu: $O(N)$. Cây Li Chao: $O(N \\log C)$ với $C$ là miền giá trị của tọa độ $x$.",
    blogs: [
      { title: "Convex Hull Trick and Li Chao Tree Tutorial", url: "https://codeforces.com/blog/entry/63823" },
      { title: "Li Chao Segment Tree: The Elegant Way to CHT", url: "https://codeforces.com/blog/entry/51532" }
    ],
    problems: [
      {
        code: "CF 319C",
        name: "Kalila and Dimna in the Logging Industry",
        rating: 2100,
        url: "https://codeforces.com/problemset/problem/319/C",
        comment: "CHT cổ điển: $dp[i] = \\min_{j < i}(dp[j] + a_i \\times b_j)$. Do $a_i$ tăng dần và $b_i$ giảm dần, sử dụng hàng đợi `std::deque` duy trì bao lồi các đường thẳng, giải trong $O(N)$."
      },
      {
        code: "CF 1083E",
        name: "The Fair Nut and Rectangles",
        rating: 2400,
        url: "https://codeforces.com/problemset/problem/1083/E",
        comment: "Sắp xếp các hình chữ nhật theo tọa độ $x$ tăng dần (kéo theo $y$ giảm dần). $dp[i] = x_i y_i - a_i + \\max_{j < i}(dp[j] - x_j y_i)$. Áp dụng CHT tìm giá trị lớn nhất."
      },
      {
        code: "CF 932F",
        name: "Escape Through Leaf",
        rating: 2500,
        url: "https://codeforces.com/problemset/problem/932/F",
        comment: "Tree DP kết hợp Cây Li Chao: Tại mỗi nút trên cây, ta cần truy vấn giá trị nhỏ nhất từ tập các đường thẳng của tất cả các lá trong cây con. Dùng kỹ thuật gộp cây Li Chao (Li Chao Tree Merge)."
      },
      {
        code: "CF 1179D",
        name: "Fedor Does Runs",
        rating: 2600,
        url: "https://codeforces.com/problemset/problem/1179/D",
        comment: "Tìm đường đi đơn tối thiểu hóa số cặp không thuộc đường đi: Tree DP kết hợp CHT để ghép cặp 2 nhánh con tối ưu nhất tại mỗi đỉnh cha trong $O(N)$."
      },
      {
        code: "CF 631E",
        name: "Product Sum",
        rating: 2600,
        url: "https://codeforces.com/problemset/problem/631/E",
        comment: "Dịch chuyển phần tử $a_i$ sang $j$ làm thay đổi tổng tích lũy $\\sum i \\times a_i$. Biến đổi công thức độ chênh lệch thành hàm bậc nhất của $a_i$, giải bằng Cây Li Chao."
      },
      {
        code: "CF 455E",
        name: "Function",
        rating: 2600,
        url: "https://codeforces.com/problemset/problem/455/E",
        comment: "Biến đổi hàm đệ quy thành bài toán tìm giá trị nhỏ nhất của các đường thẳng có dạng $f(j) = a_j \\times (x - y) + (y \\times a_j - S_j)$. Giải bằng Segment Tree các Cây Li Chao."
      },
      {
        code: "CF 1299C",
        name: "Water Balance",
        rating: 2000,
        url: "https://codeforces.com/problemset/problem/1299/C",
        comment: "Bao lồi trên đồ thị mảng cộng dồn: San bằng các đoạn nước tương đương với việc tìm bao lồi dưới (Lower Convex Hull) của các điểm $(i, P[i])$. Dùng ngăn xếp duy trì độ dốc tăng dần."
      },
      {
        code: "CF 1303G",
        name: "Antichain",
        rating: 2900,
        url: "https://codeforces.com/problemset/problem/1303/G",
        comment: "Centroid Decomposition kết hợp CHT: Tính tổng trọng số nhân khoảng cách dọc đường đi qua trọng tâm. Mỗi đường đi từ trọng tâm xuống lá trở thành một đường thẳng trong CHT."
      },
      {
        code: "CF 715C",
        name: "Digit Tree",
        rating: 2700,
        url: "https://codeforces.com/problemset/problem/715/C",
        comment: "Centroid Decomposition đếm số đường đi tạo thành số chia hết cho $M$: Ghép các đường đi lên trọng tâm và từ trọng tâm xuống lá thông qua nghịch đảo modulo Euler."
      },
      {
        code: "CF 1392E",
        name: "Omkar and Duck",
        rating: 2100,
        url: "https://codeforces.com/problemset/problem/1392/E",
        comment: "Quy hoạch ma trận bằng lũy thừa của 2: Gán giá trị các ô trên lưới sao cho mỗi đường đi từ $(1, 1)$ đến $(n, n)$ sinh ra một tổng duy nhất, khôi phục đường đi bằng cách kiểm tra từng bit."
      }
    ]
  }
];

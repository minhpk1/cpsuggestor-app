module.exports = [
  {
    id: 6,
    name: "DUYỆT ĐỒ THỊ DFS/BFS & ĐỒ THỊ TRÊN LƯỚI (GRAPHS & GRIDS)",
    tier: "Pupil ➔ Specialist (1200 - 1500)",
    essence: [
      "DFS (Depth-First Search) duyệt sâu tìm thành phần liên thông, chu trình, kiểm tra tính 2 phía (bipartite).",
      "BFS (Breadth-First Search) duyệt theo từng lớp khoảng cách, tìm đường đi ngắn nhất trên đồ thị không trọng số hoặc lưới ma trận ô vuông."
    ],
    complexity: "Thời gian $O(V + E)$ hoặc $O(N \\times M)$ trên lưới. Bộ nhớ $O(V)$ cho ngăn xếp đệ quy hoặc hàng đợi `std::queue`.",
    blogs: [
      { title: "Graph Theory Part 1: DFS & BFS Fundamentals", url: "https://codeforces.com/blog/entry/68138" }
    ],
    problems: [
      {
        code: "CF 115A",
        name: "Party",
        rating: 900,
        url: "https://codeforces.com/problemset/problem/115/A",
        comment: "Mức cơ bản: Đồ thị cây cấp quản lý. Số nhóm ít nhất cần chia chính là chiều cao tối đa của cây, tính bằng DFS/BFS từ các đỉnh gốc (không có sếp)."
      },
      {
        code: "CF 520B",
        name: "Two Buttons",
        rating: 1400,
        url: "https://codeforces.com/problemset/problem/520/B",
        comment: "BFS tìm đường đi ngắn nhất từ $n$ đến $m$ trên không gian trạng thái số, hoặc tư duy ngược: từ $m$ về $n$ nếu $m$ chẵn thì chia 2, nếu lẻ thì cộng 1."
      },
      {
        code: "CF 1033A",
        name: "King Escape",
        rating: 1000,
        url: "https://codeforces.com/problemset/problem/1033/A",
        comment: "Duyệt BFS/DFS trên bàn cờ tránh các ô bị Hậu kiểm soát, hoặc nhận xét hình học: Quân Vua chỉ đến được đích nếu cả 2 điểm cùng nằm trong 1 góc phần tư của Hậu."
      },
      {
        code: "CF 580C",
        name: "Kefa and Park",
        rating: 1500,
        url: "https://codeforces.com/problemset/problem/580/C",
        comment: "DFS trên cây duy trì số lượng mèo liên tiếp trên đường đi từ gốc đến nút hiện tại. Nếu vượt quá $m$, cắt nhánh ngay lập tức; đếm số lá hợp lệ đến được."
      },
      {
        code: "CF 793B",
        name: "Igor and his way to work",
        rating: 1600,
        url: "https://codeforces.com/problemset/problem/793/B",
        comment: "0-1 BFS trên lưới: Trạng thái $(x, y, dir, turns)$. Nếu tiếp tục đi cùng hướng chi phí đổi hướng bằng 0, nếu rẽ hướng chi phí bằng 1, yêu cầu $\\le 2$ lần rẽ."
      },
      {
        code: "CF 1365D",
        name: "Solve The Maze",
        rating: 1700,
        url: "https://codeforces.com/problemset/problem/1365/D",
        comment: "Tư duy xây tường: Đặt tường chặn tại 4 ô kề với tất cả kẻ xấu 'B'. Sau đó BFS từ đích $(n, m)$: Kiểm tra xem mọi người tốt 'G' có tới được và kẻ xấu có bị nhốt kín không."
      },
      {
        code: "CF 217A",
        name: "Ice Skating",
        rating: 1200,
        url: "https://codeforces.com/problemset/problem/217/A",
        comment: "Nối cạnh giữa hai điểm nếu chúng có cùng tọa độ $x$ hoặc $y$. Dùng DFS đếm số thành phần liên thông $C$, đáp án cần thêm là $C - 1$ điểm tuyết."
      },
      {
        code: "CF 1037D",
        name: "Valid BFS?",
        rating: 1600,
        url: "https://codeforces.com/problemset/problem/1037/D",
        comment: "Kiểm tra thứ tự BFS: Sắp xếp danh sách kề của mỗi đỉnh theo vị trí xuất hiện của đỉnh con trong mảng thứ tự đề bài cho, sau đó chạy lại BFS để so sánh."
      },
      {
        code: "CF 977E",
        name: "Cyclic Components",
        rating: 1500,
        url: "https://codeforces.com/problemset/problem/977/E",
        comment: "Dùng DFS duyệt từng thành phần liên thông: Thành phần là một chu trình đơn (cycle) khi và chỉ khi mọi đỉnh trong thành phần đó đều có bậc đúng bằng 2."
      },
      {
        code: "CF 329B",
        name: "Biridian Forest",
        rating: 1500,
        url: "https://codeforces.com/problemset/problem/329/B",
        comment: "Tư duy BFS ngược: Chạy BFS 1 lần duy nhất từ lối thoát hiểm (Exit) để tính khoảng cách ngắn nhất tới tất cả các ô. Người chơi phải chiến đấu với mọi quái vật có $d \\le d_{player}$."
      }
    ]
  },
  {
    id: 7,
    name: "CẤU TRÚC TẬP HỢP RỜI RẠC (DISJOINT SET UNION - DSU)",
    tier: "Pupil ➔ Specialist (1200 - 1600)",
    essence: [
      "DSU quản lý các tập hợp rời nhau với 2 thao tác cơ bản: `find(u)` (tìm đại diện tập hợp) và `unite(u, v)` (hợp nhất 2 tập).",
      "Hai kỹ thuật tối ưu cốt lõi: Nén đường đi (Path Compression) và Hợp nhất theo hạng/kích thước (Union by Rank/Size) đưa thời gian mỗi thao tác về gần như hằng số $O(\\alpha(N))$."
    ],
    complexity: "$O(\\alpha(N))$ cho mỗi thao tác, với $\\alpha$ là hàm nghịch đảo Ackermann (thực tế $\\alpha(N) \\le 4$).",
    blogs: [
      { title: "Disjoint Set Union (DSU) - Comprehensive Guide", url: "https://codeforces.com/blog/entry/84042" }
    ],
    problems: [
      {
        code: "CF 1167C",
        name: "News Distribution",
        rating: 1200,
        url: "https://codeforces.com/problemset/problem/1167/C",
        comment: "Mức cơ bản: DSU gộp các thành viên trong cùng một nhóm bạn bè. Trả lời kích thước tập hợp $sz[find(u)]$ của mỗi người dùng."
      },
      {
        code: "CF 277A",
        name: "Learning Languages",
        rating: 1400,
        url: "https://codeforces.com/problemset/problem/277/A",
        comment: "Tạo đồ thị 2 phía giữa nhân viên và ngôn ngữ, dùng DSU gộp các nhân viên biết chung ngôn ngữ. Đếm số thành phần liên thông của những người biết ít nhất 1 thứ tiếng."
      },
      {
        code: "CF 1213G",
        name: "Path Queries",
        rating: 1600,
        url: "https://codeforces.com/problemset/problem/1213/G",
        comment: "Offline queries + DSU: Sắp xếp các cạnh và các truy vấn theo trọng số tăng dần. Khi thêm cạnh $(u, v)$, số cặp đường đi tăng thêm là $sz[u] \\times sz[v]$."
      },
      {
        code: "CF 1559D1",
        name: "Mocha and Diana (Easy Version)",
        rating: 1400,
        url: "https://codeforces.com/problemset/problem/1559/D1",
        comment: "Sử dụng 2 cấu trúc DSU song song cho Mocha và Diana. Duyệt mọi cặp $(u, v)$, nếu việc nối cạnh không tạo chu trình trên cả 2 rừng cây thì tiến hành gộp cả hai."
      },
      {
        code: "CF 1702E",
        name: "Split Into Two Sets",
        rating: 1400,
        url: "https://codeforces.com/problemset/problem/1702/E",
        comment: "DSU 2 màu (bipartite check): Mỗi quân domino là một cạnh nối giữa 2 số. Bài toán khả thi khi mỗi số xuất hiện đúng 2 lần và đồ thị không chứa chu trình độ dài lẻ."
      },
      {
        code: "CF 292D",
        name: "Connected Components",
        rating: 1800,
        url: "https://codeforces.com/problemset/problem/292/D",
        comment: "DSU tiền tố và hậu tố: Xây dựng mảng DSU tiền tố cho $i$ cạnh đầu và DSU hậu tố cho các cạnh từ $j$ đến $m$. Khi bỏ đoạn cạnh $[l, r]$, gộp 2 DSU lại trong $O(N \\alpha(N))$."
      },
      {
        code: "CF 1609D",
        name: "Social Network",
        rating: 1400,
        url: "https://codeforces.com/problemset/problem/1609/D",
        comment: "DSU theo dõi số cạnh dư thừa (cạnh nối 2 đỉnh đã cùng thành phần liên thông). Với $k$ cạnh thừa, đáp án là tổng kích thước của $(k+1)$ thành phần lớn nhất."
      },
      {
        code: "CF 722C",
        name: "Destroying Array",
        rating: 1600,
        url: "https://codeforces.com/problemset/problem/722/C",
        comment: "Tư duy đảo ngược thời gian: Thay vì xóa phần tử, ta thêm dần các phần tử theo thứ tự ngược từ cuối lên và dùng DSU gộp các đoạn kề nhau, cập nhật tổng lớn nhất."
      },
      {
        code: "CF 1332C",
        name: "K-Complete Word",
        rating: 1500,
        url: "https://codeforces.com/problemset/problem/1332/C",
        comment: "Dùng DSU gộp các vị trí phải có cùng ký tự do 2 ràng buộc: tính tuần hoàn chu kỳ $k$ ($i$ với $i+k$) và tính đối xứng đối gương ($i$ với $n-1-i$)."
      },
      {
        code: "CF 1559D2",
        name: "Mocha and Diana (Hard Version)",
        rating: 2100,
        url: "https://codeforces.com/problemset/problem/1559/D2",
        comment: "Nâng cấp $O(N \\log N)$: Cố định đỉnh 1, tìm các đỉnh chưa liên thông với 1 ở đồ thị 1 và đồ thị 2, ghép cặp nhanh bằng hai danh sách độc lập."
      }
    ]
  },
  {
    id: 8,
    name: "QUY HOẠCH ĐỘNG CƠ BẢN (1D, 2D, KNAPSACK, LIS, LCS)",
    tier: "Pupil ➔ Specialist (1200 - 1600)",
    essence: [
      "Chia bài toán lớn thành các bài toán con gối nhau (overlapping subproblems) và có cấu trúc con tối ưu (optimal substructure).",
      "Quy hoạch động 1D/2D, bài toán xếp balo (Knapsack 0/1, unbounded), chuỗi con tăng dài nhất (LIS bằng BS trong $O(N \\log N)$), chuỗi con chung dài nhất (LCS)."
    ],
    complexity: "Tùy bài toán, phổ biến $O(N), O(N^2)$ hoặc $O(N \\times W)$.",
    blogs: [
      { title: "Dynamic Programming: From Novice to Advanced", url: "https://codeforces.com/blog/entry/67679" }
    ],
    problems: [
      {
        code: "CF 455A",
        name: "Boredom",
        rating: 1500,
        url: "https://codeforces.com/problemset/problem/455/A",
        comment: "DP 1D dạng House Robber: Đếm tần suất $cnt[x]$. Nếu chọn lấy giá trị $x$, ta nhận $x \\times cnt[x]$ điểm nhưng không được lấy $x-1$: $dp[i] = \\max(dp[i-1], dp[i-2] + i \\times cnt[i])$."
      },
      {
        code: "CF 189A",
        name: "Cut Ribbon",
        rating: 1300,
        url: "https://codeforces.com/problemset/problem/189/A",
        comment: "DP Balo không giới hạn (Unbounded Knapsack): $dp[i]$ là số đoạn cắt tối đa tạo thành thanh ruy băng độ dài $i$ từ 3 độ dài cho trước $a, b, c$."
      },
      {
        code: "CF 118D",
        name: "Caesar's Legion",
        rating: 1500,
        url: "https://codeforces.com/problemset/problem/118/D",
        comment: "DP 4 trạng thái: $dp[i][j][k][type]$ lưu số cách sắp xếp $i$ lính chân, $j$ kỵ binh khi ở đuôi có $k$ lính liên tiếp thuộc loại $type$."
      },
      {
        code: "CF 349B",
        name: "Color the Fence",
        rating: 1400,
        url: "https://codeforces.com/problemset/problem/349/B",
        comment: "Số càng nhiều chữ số càng lớn: Tìm chữ số có giá trị sơn rẻ nhất để xác định độ dài cực đại của số. Sau đó tham lam duyệt từ hàng đầu thay bằng chữ số lớn hơn nếu đủ sơn."
      },
      {
        code: "CF 166E",
        name: "Tetrahedron",
        rating: 1500,
        url: "https://codeforces.com/problemset/problem/166/E",
        comment: "DP đếm đường đi trên tứ diện: $dp[steps][0]$ là số cách đứng tại đỉnh $D$ và $dp[steps][1]$ là số cách đứng tại 3 đỉnh còn lại sau $steps$ bước."
      },
      {
        code: "CF 474D",
        name: "Flowers",
        rating: 1500,
        url: "https://codeforces.com/problemset/problem/474/D",
        comment: "DP tiền xử lý kết hợp Prefix Sum: $dp[i] = dp[i-1] + dp[i-k]$ (ăn 1 hoa đỏ hoặc $k$ hoa trắng). Dùng prefix sum để trả lời mỗi truy vấn đoạn $[a, b]$ trong $O(1)$."
      },
      {
        code: "CF 1359B",
        name: "New Theatre Square",
        rating: 1000,
        url: "https://codeforces.com/problemset/problem/1359/B",
        comment: "DP/Greedy trên lưới: So sánh chi phí lát 1 viên gạch $1 \\times 2$ giá $y$ với việc lát 2 viên $1 \\times 1$ giá $2x$. Nếu $y < 2x$, ưu tiên ghép cặp tối đa các ô kề nhau."
      },
      {
        code: "CF 607A",
        name: "Chain Reaction",
        rating: 1600,
        url: "https://codeforces.com/problemset/problem/607/A",
        comment: "DP kết hợp `std::lower_bound`: Sắp xếp các beacon theo vị trí. $dp[i]$ là số beacon còn sống nếu kích hoạt từ vị trí $i$: $dp[i] = dp[j] + 1$ với $j$ là vị trí ngoài tầm hủy."
      },
      {
        code: "CF 1061C",
        name: "Multiplicity",
        rating: 1700,
        url: "https://codeforces.com/problemset/problem/1061/C",
        comment: "DP mảng $dp[j]$: Số dãy con hợp lệ độ dài $j$. Với mỗi số $a_i$, tìm tất cả các ước số của nó và cập nhật $dp[d] \\mathrel{+}= dp[d-1]$ theo thứ tự ước giảm dần."
      },
      {
        code: "CF 835D",
        name: "Palindromic characteristics",
        rating: 1800,
        url: "https://codeforces.com/problemset/problem/835/D",
        comment: "DP trên đoạn $[l, r]$: Đoạn là palindrome cấp $k$ nếu nó là palindrome và nửa đầu là palindrome cấp $k-1$. Tính toán toàn bộ bảng $dp[l][r]$ trong $O(N^2)$."
      }
    ]
  },
  {
    id: 9,
    name: "SẮP XẾP TÔ-PÔ (TOPOLOGICAL SORT) & ĐỒ THỊ DAG",
    tier: "Pupil ➔ Specialist (1300 - 1700)",
    essence: [
      "Topological Sort sắp xếp các đỉnh của đồ thị có hướng không chu trình (DAG) thành một dãy tuyến tính sao cho với mọi cạnh $u \\to v$, $u$ luôn đứng trước $v$.",
      "Hai thuật toán phổ biến: Thuật toán Kahn (bóc tách các đỉnh có bán bậc vào $\\text{in-degree} = 0$ bằng queue) và DFS (ghi nhận đỉnh theo thứ tự thời điểm kết thúc)."
    ],
    complexity: "Thời gian $O(V + E)$, bộ nhớ $O(V + E)$.",
    blogs: [
      { title: "Topological Sort and DAG Properties", url: "https://codeforces.com/blog/entry/70275" }
    ],
    problems: [
      {
        code: "CF 510C",
        name: "Fox And Names",
        rating: 1500,
        url: "https://codeforces.com/problemset/problem/510/C",
        comment: "Xây dựng thứ tự từ điển mới: So sánh các cặp từ liền kề để dựng cạnh có hướng giữa các chữ cái. Chạy Topological Sort kiểm tra chu trình và đưa ra thứ tự bảng chữ cái."
      },
      {
        code: "CF 1385E",
        name: "Directing Edges",
        rating: 1800,
        url: "https://codeforces.com/problemset/problem/1385/E",
        comment: "Định hướng cạnh vô hướng: Chạy Topological Sort trên tập các cạnh có hướng sẵn có để gán chỉ số topo cho mỗi đỉnh. Sau đó định hướng mọi cạnh vô hướng từ bậc nhỏ sang lớn."
      },
      {
        code: "CF 919D",
        name: "Substring",
        rating: 1700,
        url: "https://codeforces.com/problemset/problem/919/D",
        comment: "Kiểm tra chu trình bằng Topological Sort. Nếu có chu trình in -1; ngược lại DP trên DAG: $dp[u][c]$ lưu số lần xuất hiện nhiều nhất của chữ cái $c$ trên đường đi tới $u$."
      },
      {
        code: "CF 825E",
        name: "Minimal Labels",
        rating: 2000,
        url: "https://codeforces.com/problemset/problem/825/E",
        comment: "Kỹ thuật Topo ngược với Max-Heap: Để thứ tự từ điển của nhãn nhỏ nhất, ta đảo chiều tất cả các cạnh, tìm đỉnh có bán bậc vào bằng 0 lớn nhất để gán nhãn từ $N$ giảm dần về 1."
      },
      {
        code: "CF 500A",
        name: "New Year Transportation",
        rating: 1000,
        url: "https://codeforces.com/problemset/problem/500/A",
        comment: "Duyệt trên DAG tuyến tính suy biến: Mỗi cổng dịch chuyển chỉ dẫn tới đúng 1 cổng $i + a_i$. Bắt đầu từ cổng 1 nhảy bước theo chỉ dẫn cho tới khi $\\ge t$."
      },
      {
        code: "CF 1593E",
        name: "Gardener and Tree",
        rating: 1500,
        url: "https://codeforces.com/problemset/problem/1593/E",
        comment: "Thuật toán Kahn bóc lá trên cây: Đẩy tất cả các đỉnh lá (bậc $\\le 1$) vào queue. Mỗi bước BFS loại bỏ 1 lớp lá và giảm bậc các đỉnh kề, lặp lại đúng $k$ vòng."
      },
      {
        code: "CF 1100E",
        name: "Andrew and Taxi",
        rating: 2100,
        url: "https://codeforces.com/problemset/problem/1100/E",
        comment: "Chặt nhị phân chi phí lớn nhất $C$ của các cạnh cần đổi hướng. Giữ lại các cạnh có trọng số $> C$, dùng Topological Sort kiểm tra xem đồ thị có chu trình hay không."
      },
      {
        code: "CF 721C",
        name: "Journey",
        rating: 2000,
        url: "https://codeforces.com/problemset/problem/721/C",
        comment: "DP trên DAG: $dp[u][len]$ là thời gian di chuyển ngắn nhất để đi từ đỉnh 1 đến $u$ qua đúng $len$ đỉnh. Duyệt cập nhật theo thứ tự Topological Sort và truy vết đáp án."
      },
      {
        code: "CF 1176E",
        name: "Cover it!",
        rating: 1400,
        url: "https://codeforces.com/problemset/problem/1176/E",
        comment: "Dựng cây khung BFS/DFS và tô màu 2 phía (0 và 1) theo độ sâu. Do tổng số đỉnh là $n$, số đỉnh mang màu có số lượng ít hơn chắc chắn $\\le \\lfloor n/2 \\rfloor$ và luôn bao phủ đồ thị."
      },
      {
        code: "CF 1638D",
        name: "Big Brush",
        rating: 1900,
        url: "https://codeforces.com/problemset/problem/1638/D",
        comment: "Tư duy Topo ngược: Tìm các ô vuông $2 \\times 2$ có cùng màu trên bức tranh kết quả, đẩy vào queue. Khi một ô vuông được xử lý, nó trở thành ô 'vạn năng' (wildcard) khớp với mọi màu."
      }
    ]
  },
  {
    id: 10,
    name: "ĐƯỜNG ĐI NGẮN NHẤT (DIJKSTRA, 0-1 BFS, FLOYD-WARSHALL)",
    tier: "Specialist ➔ Expert (1400 - 1800)",
    essence: [
      "Dijkstra: Tìm đường đi ngắn nhất từ 1 nguồn trên đồ thị trọng số không âm bằng Priority Queue trong $O((V + E) \\log V)$.",
      "0-1 BFS: Đồ thị chỉ có trọng số 0 và 1, dùng `std::deque` đẩy cạnh 0 vào đầu (front) và cạnh 1 vào cuối (back) chạy trong $O(V + E)$.",
      "Floyd-Warshall: Tìm khoảng cách giữa mọi cặp đỉnh trên ma trận kề trong $O(V^3)$."
    ],
    complexity: "Dijkstra: $O(M \\log N)$, 0-1 BFS: $O(N + M)$, Floyd-Warshall: $O(N^3)$.",
    blogs: [
      { title: "Shortest Paths Algorithms and Variants", url: "https://codeforces.com/blog/entry/73618" }
    ],
    problems: [
      {
        code: "CF 20C",
        name: "Dijkstra?",
        rating: 1600,
        url: "https://codeforces.com/problemset/problem/20/C",
        comment: "Mức thông hiểu: Cài đặt thuật toán Dijkstra chuẩn mực tìm đường đi ngắn nhất từ đỉnh 1 đến $n$ trên đồ thị vô hướng và truy vết đường đi bằng mảng $parent$."
      },
      {
        code: "CF 295B",
        name: "Greg and Graph",
        rating: 1700,
        url: "https://codeforces.com/problemset/problem/295/B",
        comment: "Floyd-Warshall đảo ngược: Đề bài yêu cầu xóa đỉnh, ta đổi góc nhìn thành thêm dần từng đỉnh từ cuối lên và cập nhật khoảng cách giữa mọi cặp đỉnh trong $O(N^2)$ mỗi bước."
      },
      {
        code: "CF 1063B",
        name: "Labyrinth",
        rating: 1700,
        url: "https://codeforces.com/problemset/problem/1063/B",
        comment: "0-1 BFS trên lưới: Vì di chuyển lên/xuống không tốn tài nguyên rẽ ngang, còn rẽ trái tốn 1 lượt. Trọng số rẽ trái là 1, các hướng khác là 0, tối ưu bằng `std::deque`."
      },
      {
        code: "CF 59E",
        name: "Shortest Path",
        rating: 1900,
        url: "https://codeforces.com/problemset/problem/59/E",
        comment: "Dijkstra/BFS mở rộng trạng thái trên đồ thị có cấm bộ 3 đỉnh liên tiếp $(a, b, c)$: Đỉnh trong đồ thị mới là cạnh có hướng $(u, v)$, chuyển trạng thái sang $(v, w)$."
      },
      {
        code: "CF 449B",
        name: "Jzzhu and Cities",
        rating: 1700,
        url: "https://codeforces.com/problemset/problem/449/B",
        comment: "Dijkstra đồng thời tuyến đường sắt và đường bộ: Ưu tiên đường bộ khi khoảng cách bằng nhau để loại bỏ nhiều tuyến đường sắt thừa thãi nhất có thể."
      },
      {
        code: "CF 821D",
        name: "Okabe and City",
        rating: 2000,
        url: "https://codeforces.com/problemset/problem/821/D",
        comment: "0-1 BFS giữa các ô sáng và các hàng/cột: Đi giữa 2 ô sáng kề nhau chi phí 0; thắp sáng 1 hàng hoặc cột để di chuyển chi phí 1."
      },
      {
        code: "CF 1076D",
        name: "Edge Deletion",
        rating: 1800,
        url: "https://codeforces.com/problemset/problem/1076/D",
        comment: "Cây đường đi ngắn nhất (Shortest Path Tree): Chạy Dijkstra từ đỉnh 1 tạo ra cây SPT. Duyệt BFS trên cây SPT và giữ lại đúng $k$ cạnh đầu tiên được thăm."
      },
      {
        code: "CF 25C",
        name: "Roads in Berland",
        rating: 1800,
        url: "https://codeforces.com/problemset/problem/25/C",
        comment: "Cập nhật ma trận Floyd-Warshall: Khi xây thêm con đường mới $(u, v)$ có độ dài $w$, cập nhật lại khoảng cách giữa mọi cặp $(i, j)$ qua công thức $\\min(d[i][j], d[i][u] + w + d[v][j])$."
      },
      {
        code: "CF 1433G",
        name: "Reducing Delivery Cost",
        rating: 2000,
        url: "https://codeforces.com/problemset/problem/1433/G",
        comment: "Chạy Dijkstra từ tất cả $n$ đỉnh để có ma trận khoảng cách $d[u][v]$ trong $O(N M \\log N)$. Thử đặt trọng số của từng cạnh về 0 và tính tổng khoảng cách của $k$ lộ trình."
      },
      {
        code: "CF 1005F",
        name: "Berland and the Shortest Path Trees",
        rating: 1900,
        url: "https://codeforces.com/problemset/problem/1005/F",
        comment: "BFS tìm khoảng cách từ 1. Với mỗi đỉnh $v \\ne 1$, thu thập tất cả các cạnh $(u, v)$ thỏa mãn $dist[u] + 1 == dist[v]$. Sinh các cây SPT bằng phương pháp quay lui."
      }
    ]
  }
];

module.exports = [
  {
    id: 23,
    name: "CÂY ẢO (VIRTUAL TREE / AUXILIARY TREE)",
    tier: "Grandmaster (2400 - 2700+)",
    essence: [
      "Khi có $K$ đỉnh quan trọng trên cây $N$ đỉnh và $\\sum K \\le 10^5$, thuật toán trên toàn bộ cây sẽ bị TLE. Cây ảo trích xuất một cây con chỉ gồm đúng $K$ đỉnh này và các LCA của từng cặp đỉnh liền kề.",
      "Kỹ thuật dựng cây ảo: Sắp xếp $K$ đỉnh theo thời gian vào `tin` của Euler Tour, dùng một `std::stack` duy trì chuỗi tổ tiên để dựng cây ảo kích thước tối đa $2K$ nút trong $O(K \\log K)$. Sau đó chạy Tree DP trực tiếp trên cây ảo."
    ],
    complexity: "Dựng cây và giải bài toán trong $O(K \\log K)$ cho mỗi truy vấn, tổng thể $O(\\sum K \\log K)$.",
    blogs: [
      { title: "Virtual Trees (Auxiliary Trees) Tutorial", url: "https://codeforces.com/blog/entry/73644" },
      { title: "Building Auxiliary Tree in O(K log K) with Stack", url: "https://codeforces.com/blog/entry/71567" }
    ],
    problems: [
      {
        code: "CF 613D",
        name: "Kingdom and its Cities",
        rating: 2800,
        url: "https://codeforces.com/problemset/problem/613/D",
        comment: "Bài toán kinh điển về Cây ảo: Cho $k$ thành phố quan trọng, cần xóa ít đỉnh trung gian nhất để cô lập chúng. Dựng Cây ảo kích thước $O(k)$ và chạy Tree DP tham lam cắt đỉnh."
      },
      {
        code: "CF 1111E",
        name: "Tree Queries",
        rating: 2600,
        url: "https://codeforces.com/problemset/problem/1111/E",
        comment: "Dựng Cây ảo trên tập $k$ đỉnh cần xét cùng đỉnh gốc $r$. Tính số tổ tiên là đỉnh quan trọng của mỗi nút, sau đó chạy DP xếp nhóm độc lập không vượt quá $m$ nhóm."
      },
      {
        code: "CF 1320E",
        name: "Treeland Virus",
        rating: 2800,
        url: "https://codeforces.com/problemset/problem/1320/E",
        comment: "Virus lây lan trên cây với tốc độ khác nhau: Dựng Cây ảo chứa các tâm phát tán virus và các thành phố cần truy vấn. Chạy thuật toán Dijkstra đa nguồn trực tiếp trên Cây ảo."
      },
      {
        code: "CF 809E",
        name: "Surprise me!",
        rating: 2900,
        url: "https://codeforces.com/problemset/problem/809/E",
        comment: "Tính $\\sum \\phi(a_u \\times a_v) \\times dist(u, v)$: Áp dụng đảo ngược Mobius và hàm nhân tính $\\phi$, với mỗi ước $d$, dựng Cây ảo trên tập các bội số của $d$ để tính tổng khoảng cách."
      },
      {
        code: "CF 1254D",
        name: "Tree Queries",
        rating: 2700,
        url: "https://codeforces.com/problemset/problem/1254/D",
        comment: "Chia căn bậc của đỉnh (Heavy-Light Vertex): Các đỉnh có bậc lớn $> \\sqrt{N}$ được tiền xử lý riêng, các đỉnh bậc nhỏ cập nhật trực tiếp vào cây con qua Euler Tour và Segment Tree."
      },
      {
        code: "CF 980E",
        name: "The Number of Games",
        rating: 2200,
        url: "https://codeforces.com/problemset/problem/980/E",
        comment: "Tham lam từ lớn về bé: Vì $2^i > \\sum_{j < i} 2^j$, ta duyệt từ $N$ về 1, dùng Binary Lifting kiểm tra số đỉnh cần thêm từ $i$ lên cây đã chọn có $\\le k$ hay không để nạp vào cây."
      },
      {
        code: "CF 576E",
        name: "Painting Edges",
        rating: 3000,
        url: "https://codeforces.com/problemset/problem/576/E",
        comment: "Divide and Conquer trên trục thời gian kết hợp DSU Rollback (hoặc Cây ảo): Kiểm tra tính 2 phía của từng màu và hoàn tác trạng thái nếu việc tô màu thất bại."
      },
      {
        code: "CF 1746F",
        name: "Kazaee",
        rating: 2800,
        url: "https://codeforces.com/problemset/problem/1746/F",
        comment: "Xác suất Hashing: Gán cho mỗi số một giá trị ngẫu nhiên 0/1 (hoặc số nguyên ngẫu nhiên). Kiểm tra tổng giá trị trên đoạn có chia hết cho $k$ với 30-40 mảng ngẫu nhiên độc lập."
      },
      {
        code: "CF 1060F",
        name: "Shrinking Tree",
        rating: 3000,
        url: "https://codeforces.com/problemset/problem/1060/F",
        comment: "Tree DP xác suất gộp cạnh: $dp[u][i]$ là xác suất cây con gốc $u$ co lại thành đỉnh $u$ khi có $i$ cạnh bị gộp trước cạnh nối $u$ với cha. Gộp các nhánh con bằng DP tích chập tổ hợp."
      },
      {
        code: "CF 1528D",
        name: "It's a Guess!",
        rating: 2700,
        url: "https://codeforces.com/problemset/problem/1528/D",
        comment: "Dijkstra tối ưu trên đồ thị xoay vòng: Do các cạnh xoay vòng tròn theo thời gian, sau khi tìm được khoảng cách ngắn nhất đến đỉnh $u$, ta có thể lan tỏa sang đỉnh $(u+1) \\pmod n$ với chi phí 1."
      }
    ]
  },
  {
    id: 24,
    name: "TÌM KIẾM NHỊ PHÂN SONG SONG (PARALLEL BINARY SEARCH)",
    tier: "Grandmaster (2400 - 2700+)",
    essence: [
      "Áp dụng khi có $Q$ truy vấn độc lập, mỗi truy vấn cần tìm kiếm nhị phân thời điểm $T$ mà một điều kiện được thỏa mãn, nhưng việc chạy riêng từng truy vấn sẽ tốn cấu trúc dữ liệu và bị TLE.",
      "Parallel BS chạy nhị phân đồng thời cho toàn bộ $Q$ truy vấn qua $\\log(\\text{Time})$ vòng lặp. Mỗi vòng lặp áp dụng các biến đổi từ $1$ đến $Mid$, sau đó kiểm tra và phân loại các truy vấn sang nhánh trái $[L, Mid]$ hoặc nhánh phải $[Mid+1, R]$."
    ],
    complexity: "Mỗi biến đổi và kiểm tra mất $O(M \\log N)$, lặp lại $\\log(\\text{Time})$ lần $\\implies O((N + Q) \\log(\\text{Time}) \\log N)$.",
    blogs: [
      { title: "Parallel Binary Search Tutorial by Errichto", url: "https://codeforces.com/blog/entry/45508" },
      { title: "Parallel Binary Search on Codeforces", url: "https://codeforces.com/blog/entry/77519" }
    ],
    problems: [
      {
        code: "CF 484E",
        name: "Sign on Fence",
        rating: 2500,
        url: "https://codeforces.com/problemset/problem/484/E",
        comment: "Tìm độ cao lớn nhất của bảng quảng cáo có chiều rộng $w$ lọt vừa hàng rào trong $[L, R]$. Giải bằng Parallel Binary Search kết hợp Segment Tree duy trì đoạn 1 liên tiếp dài nhất."
      },
      {
        code: "CF 1100F",
        name: "Ivan and Burgers",
        rating: 2500,
        url: "https://codeforces.com/problemset/problem/1100/F",
        comment: "Truy vấn Max XOR đoạn con: Xây dựng Linear Basis theo tiền tố (Prefix Linear Basis), lưu kèm vị trí xuất hiện lớn nhất của mỗi bit cơ sở để trả lời mọi truy vấn trong $O(30)$."
      },
      {
        code: "CF 1065F",
        name: "Up and Down the Tree",
        rating: 2400,
        url: "https://codeforces.com/problemset/problem/1065/F",
        comment: "Tree DP: Nút có thể nhảy ngược lên tổ tiên nếu khoảng cách tới lá $\\le k$. Tính số lá có thể thu gom được mà vẫn quay về được tổ tiên, và số lá tối đa thu gom được nếu không cần quay về."
      },
      {
        code: "CF 1208F",
        name: "Fooling TSP",
        rating: 2400,
        url: "https://codeforces.com/problemset/problem/1208/F",
        comment: "SOS DP tối ưu hóa: Duy trì 2 chỉ số lớn nhất $j < k$ thỏa mãn $mask \\subseteq (a_j \\,\\&\\, a_k)$. Duyệt $i$ từ phải sang trái, tham lam từng bit từ cao xuống thấp để tối đa hóa $a_i \\mid (a_j \\,\\&\\, a_k)$."
      },
      {
        code: "CF 685C",
        name: "Optimal Point",
        rating: 2900,
        url: "https://codeforces.com/problemset/problem/685/C",
        comment: "Chặt nhị phân bán kính khoảng cách Manhattan $R$. Biến đổi tọa độ $(x, y, z)$ thành 4 biến $(x+y+z, x+y-z, x-y+z, -x+y+z)$, giải hệ bất phương trình khoảng nguyên."
      },
      {
        code: "CF 1379D",
        name: "Freight Train",
        rating: 2400,
        url: "https://codeforces.com/problemset/problem/1379/D",
        comment: "Two Pointers trên vòng tròn modulo $m/2$: Tìm khoảng thời gian bảo trì độ dài $k$ sao cho số lượng chuyến tàu bị hủy là ít nhất."
      },
      {
        code: "CF 149D",
        name: "Coloring Brackets",
        rating: 1900,
        url: "https://codeforces.com/problemset/problem/149/D",
        comment: "DP ngoặc lồng nhau: $dp[l][r][c_l][c_r]$ là số cách tô màu đoạn ngoặc đúng $[l, r]$ khi ngoặc tại $l$ có màu $c_l$ và tại $r$ có màu $c_r$ thỏa mãn các ràng buộc kề nhau."
      },
      {
        code: "CF 1363E",
        name: "Tree Shuffling",
        rating: 1700,
        url: "https://codeforces.com/problemset/problem/1363/E",
        comment: "Tree DP tham lam: Đẩy chi phí rẻ nhất từ gốc xuống các nút con: $cost[u] = \\min(cost[u], cost[parent])$. Tại mỗi cây con, ghép tối đa các cặp $(0\\to 1)$ và $(1\\to 0)$ với chi phí của nút cha."
      },
      {
        code: "CF 1188D",
        name: "Make Equal",
        rating: 3100,
        url: "https://codeforces.com/problemset/problem/1188/D",
        comment: "DP trên từng bit từ 0 đến 60: Số lượng phép nhớ (carry) khi cộng thêm $X$ vào mảng phụ thuộc vào thứ tự sắp xếp của $(a_i \\pmod{2^k})$. Trạng thái DP lưu số lượng phần tử có nhớ."
      },
      {
        code: "CF 1689E",
        name: "AND-OR-Square",
        rating: 2400,
        url: "https://codeforces.com/problemset/problem/1689/E",
        comment: "DSU kiểm tra tính liên thông bit: Đáp án luôn $\\le 2$ thao tác tăng/giảm. Dùng DSU kiểm tra xem mảng đã liên thông chưa; nếu chưa thử thay đổi 1 phần tử, nếu vẫn không được thì thay đổi 2 phần tử."
      }
    ]
  },
  {
    id: 25,
    name: "TỐI ƯU HÓA WQS / ALIEN'S TRICK (LAMBDA OPTIMIZATION)",
    tier: "Grandmaster (2500 - 2800+)",
    essence: [
      "Alien's Trick (WQS Binary Search) giải quyết bài toán tối ưu hóa khi có ràng buộc 'chọn đúng $K$ phần tử' mà hàm chi phí tối ưu theo $K$, ký hiệu $f(K)$, có tính chất lồi (Convex) hoặc lõm (Concave).",
      "Kỹ thuật nhân tử Lagrange (Lambda Penalty): Phạt một lượng chi phí $\\lambda$ cho mỗi lần chọn một phần tử. Ta chặt nhị phân hệ số phạt $\\lambda$ để tìm điểm tiếp xúc có đạo hàm bằng $\\lambda$, loại bỏ hoàn toàn ràng buộc chọn đúng $K$ phần tử và đưa về DP không ràng buộc."
    ],
    complexity: "Thời gian $O(\\log(\\text{cost}) \\times \\text{Cost}(DP))$. Giảm số chiều của quy hoạch động đi 1 bậc.",
    blogs: [
      { title: "The Alien's Trick (WQS Binary Search) Explained", url: "https://codeforces.com/blog/entry/67634" },
      { title: "WQS Binary Search / Slope Trick Tutorial", url: "https://codeforces.com/blog/entry/78584" }
    ],
    problems: [
      {
        code: "CF 739E",
        name: "Gosha is hunting",
        rating: 2400,
        url: "https://codeforces.com/problemset/problem/739/E",
        comment: "WQS Binary Search kinh điển: Giới hạn $a$ bóng loại 1 và $b$ bóng loại 2. Chặt nhị phân hình phạt $\\lambda$ cho mỗi lần ném bóng loại 2, quy bài toán về DP tham lam 1 chiều."
      },
      {
        code: "CF 802O",
        name: "Send the Fool Further (hard)",
        rating: 2900,
        url: "https://codeforces.com/problemset/problem/802/O",
        comment: "Chọn đúng $k$ cặp gửi thông điệp: Chặt nhị phân chi phí phạt $\\lambda$ cho mỗi gói gửi bằng Alien's Trick, sau đó dùng Priority Queue (Regret Greedy) giải bài toán không giới hạn số lượng."
      },
      {
        code: "CF 1270G",
        name: "Subset with Zero Sum",
        rating: 2600,
        url: "https://codeforces.com/problemset/problem/1270/G",
        comment: "Dựng đồ thị có hướng $i \\to i - a_i$. Vì $1 \\le i - a_i \\le n$, mọi đỉnh đều có bậc ra đúng bằng 1 (Functional Graph). Chu trình có hướng trên đồ thị này chính là tập hợp có tổng bằng 0!"
      },
      {
        code: "CF 1344D",
        name: "Résumé Review",
        rating: 2500,
        url: "https://codeforces.com/problemset/problem/1344/D",
        comment: "Hàm lợi ích $f(b_i) = b_i (a_i - b_i^2)$ có đạo hàm giảm dần (hàm lõm). Chặt nhị phân độ dốc biên $\\lambda = f'(b_i)$, với mỗi $a_i$ tìm nghiệm nguyên $b_i$ thỏa đạo hàm $\\ge \\lambda$ sao cho $\\sum b_i = k$."
      },
      {
        code: "CF 1097E",
        name: "Egor and an RPG game",
        rating: 2700,
        url: "https://codeforces.com/problemset/problem/1097/E",
        comment: "Định lý Dilworth: Nếu độ dài LIS $\\ge k$, ta bóc tách dãy LIS đó ra; nếu LIS $< k$, mảng có thể phân rã thành $< k$ dãy giảm dần. Lặp lại quá trình bóc tách để đạt tối đa $k$ dãy."
      },
      {
        code: "CF 1250N",
        name: "Wire Reconstruction",
        rating: 1900,
        url: "https://codeforces.com/problemset/problem/1250/N",
        comment: "Đồ thị và thành phần liên thông: Co các dây nối thành cây khung, nhấc các cạnh thừa không cần thiết của các thành phần liên thông để nối chúng lại thành một đồ thị liên thông duy nhất."
      },
      {
        code: "CF 1394C",
        name: "Boboniu and String",
        rating: 2800,
        url: "https://codeforces.com/problemset/problem/1394/C",
        comment: "Biểu diễn mỗi xâu thành cặp $(cnt_B, cnt_N)$ trên mặt phẳng tọa độ. Chặt nhị phân bán kính khoảng cách Chebyshev và kiểm tra giao điểm của các hình bình hành $45^\\circ$."
      },
      {
        code: "CF 1479D",
        name: "Odd Mineral Resource",
        rating: 2700,
        url: "https://codeforces.com/problemset/problem/1479/D",
        comment: "Persistent Segment Tree kết hợp gán nhãn ngẫu nhiên XOR (XOR Hashing): Gán mỗi loại khoáng sản một số ngẫu nhiên 64-bit, kiểm tra giá trị XOR trên cây để tìm khoáng sản xuất hiện lẻ lần."
      },
      {
        code: "CF 1530E",
        name: "Minimax",
        rating: 1900,
        url: "https://codeforces.com/problemset/problem/1530/E",
        comment: "Tham lam phân tích trường hợp: Sắp xếp các ký tự và xây dựng chuỗi có $\\max \\pi[i]$ nhỏ nhất có thể (bằng 0 nếu có chữ cái xuất hiện 1 lần, bằng 1 nếu phân bổ xen kẽ được)."
      },
      {
        code: "CF 1601D",
        name: "Difficult Mountain",
        rating: 2500,
        url: "https://codeforces.com/problemset/problem/1601/D",
        comment: "Bất đẳng thức hoán vị (Exchange Argument): Sắp xếp các nhà leo núi theo khóa $\\max(s_i, a_i)$ tăng dần, nếu bằng nhau sắp xếp theo $s_i$ tăng dần. Sau đó tham lam duyệt lấy người leo núi."
      }
    ]
  },
  {
    id: 26,
    name: "PHÂN TÁCH TRỌNG TÂM TRÊN CÂY (CENTROID DECOMPOSITION)",
    tier: "Grandmaster (2400 - 2700+)",
    essence: [
      "Trọng tâm của cây là đỉnh mà khi xóa nó, mọi cây con còn lại đều có kích thước không vượt quá $N/2$.",
      "Centroid Decomposition chia để trị trên cây: Tìm trọng tâm, giải quyết các đường đi đi qua trọng tâm, sau đó xóa trọng tâm và đệ quy vào các cây con. Cây trọng tâm (Centroid Tree) có độ sâu tối đa chỉ $O(\\log N)$."
    ],
    complexity: "Độ sâu đệ quy $O(\\log N)$. Tổng thời gian xử lý mọi tầng là $O(N \\log N)$ hoặc $O(N \\log^2 N)$.",
    blogs: [
      { title: "Centroid Decomposition Tutorial and Applications", url: "https://codeforces.com/blog/entry/81661" },
      { title: "Divide and Conquer on Trees (Centroid)", url: "https://codeforces.com/blog/entry/58025" }
    ],
    problems: [
      {
        code: "CF 321C",
        name: "Ciel the Commander",
        rating: 2100,
        url: "https://codeforces.com/problemset/problem/321/C",
        comment: "Mức thông hiểu: Tìm trọng tâm gán nhãn 'A', sau đó đệ quy vào các cây con gán 'B', 'C'... Vì độ sâu cây trọng tâm $\\le \\log_2(10^5) \\approx 17 \\le 26$, luôn gán đủ bằng bảng chữ cái tiếng Anh."
      },
      {
        code: "CF 161D",
        name: "Distance in tree",
        rating: 1800,
        url: "https://codeforces.com/problemset/problem/161/D",
        comment: "Đếm số cặp đỉnh có khoảng cách bằng $k$: Tìm trọng tâm, tính khoảng cách từ trọng tâm tới các lá, dùng mảng đếm tần suất ghép cặp $d_1 + d_2 = k$ và trừ đi các cặp cùng nhánh con."
      },
      {
        code: "CF 342E",
        name: "Xenia and Tree",
        rating: 2400,
        url: "https://codeforces.com/problemset/problem/342/E",
        comment: "Centroid Tree động: Dựng cây trọng tâm. Mỗi nút trọng tâm lưu khoảng cách nhỏ nhất tới một nút đỏ trong cây con trọng tâm của nó. Khi cập nhật đỏ, nhảy lên $O(\\log N)$ tổ tiên trọng tâm để cập nhật."
      },
      {
        code: "CF 1790F",
        name: "Timofey and Black-White Tree",
        rating: 2100,
        url: "https://codeforces.com/problemset/problem/1790/F",
        comment: "Cập nhật đỉnh đen và truy vấn khoảng cách ngắn nhất: Dùng Centroid Tree hoặc nhận xét BFS: Khoảng cách ngắn nhất giảm dần sau mỗi thao tác và không bao giờ vượt quá $\\sqrt{N}$."
      },
      {
        code: "CF 1303G",
        name: "Antichain",
        rating: 2900,
        url: "https://codeforces.com/problemset/problem/1303/G",
        comment: "Centroid Decomposition kết hợp Convex Hull Trick: Tính tổng $\\sum_{i=1}^k i \\times a_i$ trên đường đi. Mỗi đường đi từ trọng tâm xuống lá là một đường thẳng $y = mx + c$, tối ưu bằng Li Chao Tree."
      },
      {
        code: "CF 715C",
        name: "Digit Tree",
        rating: 2700,
        url: "https://codeforces.com/problemset/problem/715/C",
        comment: "Centroid Decomposition kết hợp nghịch đảo modulo: Ghép đường đi từ $u$ lên trọng tâm $C$ và từ $C$ xuống $v$ sao cho $(val_{up} \\times 10^{len} + val_{down}) \\equiv 0 \\pmod M$ bằng `std::map`."
      },
      {
        code: "CF 150E",
        name: "Freezing with Style",
        rating: 3100,
        url: "https://codeforces.com/problemset/problem/150/E",
        comment: "Centroid Decomposition kết hợp chặt nhị phân trung vị và Monotonic Queue: Chuyển trọng số cạnh thành $+1$ hoặc $-1$, tìm đường đi có độ dài trong $[L, R]$ có tổng trọng số $\\ge 0$."
      },
      {
        code: "CF 1260F",
        name: "Colored Tree",
        rating: 3000,
        url: "https://codeforces.com/problemset/problem/1260/F",
        comment: "Tính tổng khoảng cách giữa các cặp đỉnh có màu giao nhau: Chuyển bài toán thành quét dòng trên màu sắc kết hợp Centroid Decomposition hoặc Euler Tour cập nhật trên Fenwick Tree."
      },
      {
        code: "CF 1178F2",
        name: "Short Colorful Strip",
        rating: 2800,
        url: "https://codeforces.com/problemset/problem/1178/F2",
        comment: "Nén các đoạn màu liên tiếp giống nhau, kiểm tra tính hợp lệ của các khoảng màu lồng nhau, sau đó chạy DP trên đoạn $[L, R]$ chia tách tại vị trí màu nhỏ nhất."
      },
      {
        code: "CF 1437F",
        name: "Emotional Fishermen",
        rating: 2600,
        url: "https://codeforces.com/problemset/problem/1437/F",
        comment: "Sắp xếp các phần tử tăng dần. $dp[i]$ là số cách xếp sao cho $a_i$ là phần tử hợp lệ tiếp theo (gấp đôi phần tử trước đó). Tối ưu hóa chuyển trạng thái bằng mảng cộng dồn."
      }
    ]
  },
  {
    id: 27,
    name: "BIẾN ĐỔI FOURIER NHANH (FAST FOURIER TRANSFORM - FFT / NTT)",
    tier: "Grandmaster (2400 - 2800+)",
    essence: [
      "FFT (trên số phức) và NTT (Number Theoretic Transform trên trường hữu hạn $\\mathbb{Z}_p$ với modulo nguyên tố dạng $c \\times 2^k + 1$ như $998244353$) tính tích chập (Convolution) của 2 đa thức $A(x) \\times B(x)$ bậc $N$ trong $O(N \\log N)$ thay vì $O(N^2)$.",
      "Chuyển đổi biểu diễn hệ số (Coefficient representation) sang biểu diễn giá trị điểm (Point-value representation) tại các nghiệm đơn vị (Roots of unity) và ngược lại qua IFFT/INTT."
    ],
    complexity: "Nhân 2 đa thức bậc $N$ trong $O(N \\log N)$. Nghịch đảo đa thức, tính $\\ln, \\exp$ trong $O(N \\log N)$.",
    blogs: [
      { title: "Comprehensive FFT/NTT Tutorial on Codeforces", url: "https://codeforces.com/blog/entry/43499" },
      { title: "Polynomial Operations and NTT by MiFaFaOvO", url: "https://codeforces.com/blog/entry/48798" }
    ],
    problems: [
      {
        code: "CF 528D",
        name: "Fuzzy Search",
        rating: 2200,
        url: "https://codeforces.com/problemset/problem/528/D",
        comment: "FFT so khớp chuỗi có sai số: Với mỗi ký tự ('A', 'C', 'G', 'T'), mở rộng vùng an toàn $k$ đơn vị. Đảo ngược chuỗi mẫu $P$ và tính tích chập FFT với văn bản $T$ để đếm số lượng ký tự khớp."
      },
      {
        code: "CF 954I",
        name: "Yet Another String Matching Problem",
        rating: 2200,
        url: "https://codeforces.com/problemset/problem/954/I",
        comment: "Có 6 chữ cái từ 'a' đến 'f' $\\implies \\binom{6}{2} = 15$ cặp chữ cái. Chạy FFT cho mỗi cặp $(c_1, c_2)$ để kiểm tra xem tại vị trí dịch chuyển nào có sự xuất hiện của cạnh nối, sau đó dùng DSU đếm số thao tác."
      },
      {
        code: "CF 1096G",
        name: "Lucky Tickets",
        rating: 2300,
        url: "https://codeforces.com/problemset/problem/1096/G",
        comment: "Tạo đa thức đặc trưng $P(x) = \\sum x^d$ cho các chữ số cho phép. Đa thức sinh tổng nửa đầu là $P(x)^{n/2} \\pmod{998244353}$. Dùng lũy thừa nhị phân đa thức kết hợp NTT, đáp án là $\\sum c_i^2$."
      },
      {
        code: "CF 632E",
        name: "Thief in a Shop",
        rating: 2400,
        url: "https://codeforces.com/problemset/problem/632/E",
        comment: "Tìm mọi giá trị có thể tạo thành từ đúng $k$ món đồ: Đa thức $P(x)$ với $x^v = 1$ nếu có món đồ giá $v$. Tính $P(x)^k$ bằng lũy thừa nhanh NTT, các số mũ có hệ số $> 0$ là giá trị khả thi."
      },
      {
        code: "CF 1398G",
        name: "Running Competition",
        rating: 2600,
        url: "https://codeforces.com/problemset/problem/1398/G",
        comment: "Tìm mọi hiệu khoảng cách $x_j - x_i$: Đặt $A(x) = \\sum x^{a_i}$ và $B(x) = \\sum x^{-a_i} = \\sum x^{M - a_i}$. Tích chập $A \\times B$ qua FFT cho biết mọi khoảng cách xuất hiện. Sau đó duyệt ước số trả lời truy vấn."
      },
      {
        code: "CF 1251F",
        name: "White Lines",
        rating: 2600,
        url: "https://codeforces.com/problemset/problem/1251/F",
        comment: "Với mỗi bảng trắng, các thanh chắn ngắn hơn chia thành nhóm xuất hiện 1 lần (đóng góp $(1 + 2x)$) và nhóm xuất hiện $\\ge 2$ lần (đóng góp $(1 + 2x + x^2) = (1+x)^2$). Nhân đa thức bằng NTT."
      },
      {
        code: "CF 1613F",
        name: "Tree Xor",
        rating: 2500,
        url: "https://codeforces.com/problemset/problem/1613/F",
        comment: "Bao hàm loại trừ trên cây: Biến đổi thành tích của $N$ nhị thức bậc 1 $(1 + d_i x)$ với $d_i$ là số con của nút $i$. Dùng Divide and Conquer kết hợp NTT nhân $N$ nhị thức trong $O(N \\log^2 N)$."
      },
      {
        code: "CF 986D",
        name: "Perfect Power",
        rating: 2900,
        url: "https://codeforces.com/problemset/problem/986/D",
        comment: "Nhân số lớn bằng FFT: Tích các số có tổng cố định đạt cực đại khi chia thành các số 3. Tính $3^k$ bằng lũy thừa nhị phân số lớn sử dụng FFT, so sánh với số nguyên lớn $n$."
      },
      {
        code: "CF 1039D",
        name: "You Are Given a Tree",
        rating: 2800,
        url: "https://codeforces.com/problemset/problem/1039/D",
        comment: "Chia căn kết quả: Với $k \\le \\sqrt{N \\log N}$, chạy Tree DP tham lam $O(N)$. Với các giá trị $ans \\le N/k \\le \\sqrt{N}$, dùng chặt nhị phân tìm khoảng các giá trị $k$ có cùng đáp án (Parallel/Block BS)."
      },
      {
        code: "CF 884E",
        name: "Binary Matrix",
        rating: 2600,
        url: "https://codeforces.com/problemset/problem/884/E",
        comment: "Quản lý bộ nhớ cực hạn ($16$ MB) cho ma trận $2^{12} \\times 2^{14}$: DSU nén chỉ lưu 2 dòng liên tiếp tại mỗi bước duyệt, gán lại nhãn các thành phần liên thông để không bị tràn bộ nhớ."
      }
    ]
  },
  {
    id: 28,
    name: "SUFFIX AUTOMATON (SAM - MÁY TỰ ĐỘNG HẬU TỐ) & CÂY HẬU TỐ",
    tier: "Legendary Grandmaster (2600 - 3000+)",
    essence: [
      "Suffix Automaton (SAM) là một Đồ thị có hướng không chu trình (DAG) nén toàn bộ thông tin của tất cả các chuỗi con của một chuỗi $S$ độ dài $N$ trong đúng $O(N)$ trạng thái và $O(N)$ bước chuyển.",
      "Mỗi trạng thái đại diện cho một lớp tương đương các chuỗi con có cùng tập hợp vị trí kết thúc `endpos`. Cây liên kết hậu tố (Suffix Link Tree) của SAM chính là Cây hậu tố (Suffix Tree) của chuỗi đảo ngược."
    ],
    complexity: "Xây dựng SAM trực tuyến (Online) trong $O(N)$. Số trạng thái $\\le 2N-1$, số bước chuyển $\\le 3N-4$.",
    blogs: [
      { title: "Suffix Automaton Tutorial & Implementation (e-maxx / CP-Algorithms)", url: "https://codeforces.com/blog/entry/20861" },
      { title: "Suffix Automaton and Suffix Tree Applications", url: "https://codeforces.com/blog/entry/56545" }
    ],
    problems: [
      {
        code: "CF 235C",
        name: "Cyclical Quest",
        rating: 2600,
        url: "https://codeforces.com/problemset/problem/235/C",
        comment: "SAM đếm số lần xuất hiện của các hoán vị vòng tròn: Dựng SAM trên chuỗi văn bản $S$. Với mỗi chuỗi truy vấn $x$, nhân đôi thành $x+x$, duyệt trên SAM duy trì độ dài khớp $\\ge |x|$ và đánh dấu các trạng thái đã thăm."
      },
      {
        code: "CF 128B",
        name: "String Problem",
        rating: 1900,
        url: "https://codeforces.com/problemset/problem/128/B",
        comment: "Tìm xâu con thứ $k$ theo thứ tự từ điển: Dựng SAM, tính số lượng xâu con xuất phát từ mỗi trạng thái bằng DP trên DAG. Sau đó duyệt tham lam theo thứ tự từ điển các cạnh chuyển trạng thái."
      },
      {
        code: "CF 1037H",
        name: "Security",
        rating: 3200,
        url: "https://codeforces.com/problemset/problem/1037/H",
        comment: "SAM kết hợp Persistent Segment Tree: Dùng cây SegTree lưu tập `endpos` của mỗi trạng thái. Truy vấn xâu con lớn hơn $T$ theo từ điển nhỏ nhất xuất hiện trong $[L, R]$ bằng cách duyệt và kiểm tra `endpos` lọt vào $[L+|len|-1, R]$."
      },
      {
        code: "CF 123D",
        name: "String",
        rating: 2600,
        url: "https://codeforces.com/problemset/problem/123/D",
        comment: "Tính $\\sum \\binom{cnt(p)+1}{2}$ cho mọi chuỗi con $p$: Dựng SAM, tính tần suất xuất hiện $cnt$ của mỗi trạng thái qua cây Suffix Link. Mỗi trạng thái đóng góp $(len[u] - len[link[u]]) \\times \\binom{cnt[u]+1}{2}$."
      },
      {
        code: "CF 666E",
        name: "Forensic Examination",
        rating: 3000,
        url: "https://codeforces.com/problemset/problem/666/E",
        comment: "Generalized SAM + Segment Tree Merge: Dựng SAM trên tập $M$ chuỗi văn bản. Mỗi trạng thái duy trì một Segment Tree lưu tần suất xuất hiện trong từng chuỗi, gộp cây trên Suffix Link để trả lời truy vấn cực trị."
      },
      {
        code: "CF 316G3",
        name: "Good Substrings",
        rating: 2400,
        url: "https://codeforces.com/problemset/problem/316/G3",
        comment: "Dựng Generalized SAM cho chuỗi $S$ và $n$ chuỗi ràng buộc. Đếm số lần xuất hiện của mỗi trạng thái trong từng chuỗi bằng cách lan truyền trên cây Suffix Link, kiểm tra điều kiện $[l_i, r_i]$."
      },
      {
        code: "CF 1073G",
        name: "Yet Another LCP Problem",
        rating: 2200,
        url: "https://codeforces.com/problemset/problem/1073/G",
        comment: "Dựng Cây ảo (Virtual Tree) trên Suffix Tree (cây Suffix Link của SAM): Tính tổng LCP giữa hai tập hậu tố $A$ và $B$ bằng cách tính trọng số các nút LCA trên cây ảo trong $O((|A| + |B|) \\log N)$."
      },
      {
        code: "CF 472D",
        name: "Design Tutorial: Inverse the Problem",
        rating: 1900,
        url: "https://codeforces.com/problemset/problem/472/D",
        comment: "Khôi phục cây từ ma trận khoảng cách: Chạy thuật toán cây khung nhỏ nhất (Prim/Kruskal) trên ma trận khoảng cách, sau đó chạy DFS tính lại khoảng cách trên cây để so sánh với ma trận gốc."
      },
      {
        code: "CF 802L",
        name: "Send the Fool Further (medium)",
        rating: 2000,
        url: "https://codeforces.com/problemset/problem/802/L",
        comment: "Kỳ vọng ngẫu nhiên trên cây (Random Walk on Tree): Phương trình kỳ vọng $E[u] = \\frac{1}{deg(u)} \\sum (E[v] + w)$. Biểu diễn $E[u] = A_u E[parent] + B_u$ và tính bằng 2 lượt DFS."
      },
      {
        code: "CF 700D",
        name: "Huffman Coding on a String",
        rating: 3200,
        url: "https://codeforces.com/problemset/problem/700/D",
        comment: "Mo's Algorithm chia căn tần suất kết hợp Priority Queue: Các phần tử có tần suất $> \\sqrt{N}$ tối đa $\\sqrt{N}$ phần tử, mô phỏng thuật toán Huffman Coding trên các khối tần suất bằng hàng đợi ưu tiên."
      }
    ]
  }
];

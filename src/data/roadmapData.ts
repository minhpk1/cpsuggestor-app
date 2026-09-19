// Auto-generated bilingual and math-sanitized roadmap data
export interface RoadmapProblem {
  code: string;
  name: string;
  rating: number;
  url: string;
  commentVi: string;
  commentEn: string;
  contestId: number;
  index: string;
}

export interface RoadmapTopic {
  id: number;
  phaseId: number;
  nameVi: string;
  nameEn: string;
  tierVi: string;
  tierEn: string;
  essenceVi: string[];
  essenceEn: string[];
  complexityVi: string;
  complexityEn: string;
  blogs: Array<{ title: string; url: string }>;
  problems: RoadmapProblem[];
}

export interface RoadmapPhase {
  id: number;
  titleVi: string;
  titleEn: string;
  ratingRange: string;
  descriptionVi: string;
  descriptionEn: string;
  topicIds: number[];
}

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    "id": 1,
    "titleVi": "Phase 1: Foundation (Newbie ➔ Pupil)",
    "titleEn": "Phase 1: Foundation (Newbie ➔ Pupil)",
    "ratingRange": "< 1200 - 1399",
    "descriptionVi": "Nền tảng tư duy mảng, hai con trỏ, tìm kiếm nhị phân, số học cơ bản và tham lam.",
    "descriptionEn": "Core array techniques, two pointers, binary search on answer, elementary number theory, and greedy exchange arguments.",
    "topicIds": [
      1,
      2,
      3,
      4,
      5
    ]
  },
  {
    "id": 2,
    "titleVi": "Phase 2: Intermediate (Pupil ➔ Specialist)",
    "titleEn": "Phase 2: Intermediate (Pupil ➔ Specialist)",
    "ratingRange": "1200 - 1599",
    "descriptionVi": "Duyệt đồ thị lưới BFS/DFS, tập hợp rời rạc DSU, quy hoạch động cơ bản và đường đi ngắn nhất.",
    "descriptionEn": "Grid graphs (BFS/DFS), disjoint set union (DSU), classical dynamic programming, and shortest path algorithms.",
    "topicIds": [
      6,
      7,
      8,
      9,
      10
    ]
  },
  {
    "id": 3,
    "titleVi": "Phase 3: Advanced (Specialist ➔ Expert)",
    "titleEn": "Phase 3: Advanced (Specialist ➔ Expert)",
    "ratingRange": "1600 - 1899",
    "descriptionVi": "Tổ tiên chung LCA, Euler Tour, Tree DP đổi gốc, tổ hợp Modular, Bitmask DP và Segment Tree cơ bản & lười.",
    "descriptionEn": "LCA & Euler Tour, Tree DP with rerooting, modular combinatorics, bitmask / SOS DP, and segment trees with lazy propagation.",
    "topicIds": [
      11,
      12,
      13,
      14,
      15,
      16
    ]
  },
  {
    "id": 4,
    "titleVi": "Phase 4: High-End Core (Candidate Master ➔ Master)",
    "titleEn": "Phase 4: High-End Core (Candidate Master ➔ Master)",
    "ratingRange": "1900 - 2299",
    "descriptionVi": "Xử lý xâu nâng cao, thành phần liên thông mạnh Tarjan, luồng Dinic, cây bền vững, HLD và tối ưu hóa CHT/Li Chao.",
    "descriptionEn": "Advanced strings, Tarjan bridges/SCC & 2-SAT, Dinic max flow, persistent segment trees, HLD, and CHT / Li Chao trees.",
    "topicIds": [
      17,
      18,
      19,
      20,
      21,
      22
    ]
  },
  {
    "id": 5,
    "titleVi": "Phase 5: Legendary & Grandmaster (Master ➔ GM / IGM)",
    "titleEn": "Phase 5: Legendary & Grandmaster (Master ➔ GM / IGM)",
    "ratingRange": "2300 - 2600+",
    "descriptionVi": "Vũ khí tối thượng của GM: Cây ảo, Parallel BS, WQS BS, Centroid Decomposition, FFT/NTT và Suffix Automaton.",
    "descriptionEn": "Grandmaster armory: virtual trees, parallel binary search, Alien's trick (WQS), centroid decomposition, polynomial FFT/NTT, and suffix automata.",
    "topicIds": [
      23,
      24,
      25,
      26,
      27,
      28
    ]
  }
];

export const ROADMAP_TOPICS: RoadmapTopic[] = [
  {
    "id": 1,
    "phaseId": 1,
    "nameVi": "MẢNG CỘNG DỒN (PREFIX SUMS) & MẢNG HIỆU (DIFFERENCE ARRAY)",
    "nameEn": "Prefix Sums & Difference Arrays",
    "tierVi": "Newbie (800 - 1100)",
    "tierEn": "Newbie (800 - 1100)",
    "essenceVi": [
      "Prefix Sum tính tổng đoạn con [L, R] trong O(1): P[R] - P[L-1] (với mảng 1D) hoặc S[x_2][y_2] - S[x_1-1][y_2] - S[x_2][y_1-1] + S[x_1-1][y_1-1] (với mảng 2D).",
      "Difference Array cộng một lượng V vào đoạn [L, R] trong O(1): D[L] += V, D[R+1] -= V, sau đó tính prefix sum của D để khôi phục mảng."
    ],
    "essenceEn": [
      "Prefix Sum tính tổng đoạn con [L, R] trong O(1): P[R] - P[L-1] (với mảng 1D) hoặc S[x_2][y_2] - S[x_1-1][y_2] - S[x_2][y_1-1] + S[x_1-1][y_1-1] (với mảng 2D).",
      "Difference Array cộng một lượng V vào đoạn [L, R] trong O(1): D[L] += V, D[R+1] -= V, sau đó tính prefix sum của D để khôi phục mảng."
    ],
    "complexityVi": "Tiền xử lý O(N) (hoặc O(N × M)), mỗi truy vấn O(1), bộ nhớ O(N).",
    "complexityEn": "Tiền xử lý O(N) (hoặc O(N × M)), mỗi truy vấn O(1), bộ nhớ O(N).",
    "blogs": [
      {
        "title": "Prefix Sums and Difference Arrays (CF Blog by Errichto)",
        "url": "https://codeforces.com/blog/entry/78584"
      },
      {
        "title": "Multi-dimensional prefix sums tutorial",
        "url": "https://codeforces.com/blog/entry/82672"
      }
    ],
    "problems": [
      {
        "code": "CF 313B",
        "name": "Ilya and Queries",
        "rating": 1000,
        "url": "https://codeforces.com/problemset/problem/313/B",
        "commentVi": "Mức thông hiểu: Tạo mảng đánh dấu a[i] = 1 nếu s[i] == s[i+1], sau đó tính prefix sum để trả lời số cặp liên kề bằng nhau trong [L, R-1].",
        "commentEn": "Mức thông hiểu: Tạo mảng đánh dấu a[i] = 1 nếu s[i] == s[i+1], sau đó tính prefix sum để trả lời số cặp liên kề bằng nhau trong [L, R-1].",
        "contestId": 313,
        "index": "B"
      },
      {
        "code": "CF 433B",
        "name": "Kuriyama Mirai's Stones",
        "rating": 1200,
        "url": "https://codeforces.com/problemset/problem/433/B",
        "commentVi": "Mức vận dụng cơ bản: Xây dựng đồng thời 2 mảng prefix sum: một trên mảng ban đầu và một trên mảng đã sắp xếp tăng dần.",
        "commentEn": "Mức vận dụng cơ bản: Xây dựng đồng thời 2 mảng prefix sum: một trên mảng ban đầu và một trên mảng đã sắp xếp tăng dần.",
        "contestId": 433,
        "index": "B"
      },
      {
        "code": "CF 816B",
        "name": "Karen and Coffee",
        "rating": 1400,
        "url": "https://codeforces.com/problemset/problem/816/B",
        "commentVi": "Difference Array kết hợp Prefix Sum 2 lần: Lần 1 dùng mảng hiệu đếm số công thức che phủ nhiệt độ T, lần 2 cộng dồn số nhiệt độ đạt chuẩn ≥ k.",
        "commentEn": "Difference Array kết hợp Prefix Sum 2 lần: Lần 1 dùng mảng hiệu đếm số công thức che phủ nhiệt độ T, lần 2 cộng dồn số nhiệt độ đạt chuẩn ≥ k.",
        "contestId": 816,
        "index": "B"
      },
      {
        "code": "CF 295A",
        "name": "Greg and Array",
        "rating": 1400,
        "url": "https://codeforces.com/problemset/problem/295/A",
        "commentVi": "Mảng hiệu 2 tầng độc lập: Tầng 1 đếm số lần áp dụng mỗi thao tác [l, r], tầng 2 áp dụng các thao tác đã nhân hệ số lên mảng giá trị ban đầu.",
        "commentEn": "Mảng hiệu 2 tầng độc lập: Tầng 1 đếm số lần áp dụng mỗi thao tác [l, r], tầng 2 áp dụng các thao tác đã nhân hệ số lên mảng giá trị ban đầu.",
        "contestId": 295,
        "index": "A"
      },
      {
        "code": "CF 1398C",
        "name": "Good Subarrays",
        "rating": 1400,
        "url": "https://codeforces.com/problemset/problem/1398/C",
        "commentVi": "Biến đổi toán học: ∑_{i=l}^r a_i = r - l + 1 \\Leftrightarrow P[r] - r = P[l-1] - (l-1). Dùng hash map đếm số lượng tiền tố có cùng giá trị (P[i] - i).",
        "commentEn": "Biến đổi toán học: ∑_{i=l}^r a_i = r - l + 1 \\Leftrightarrow P[r] - r = P[l-1] - (l-1). Dùng hash map đếm số lượng tiền tố có cùng giá trị (P[i] - i).",
        "contestId": 1398,
        "index": "C"
      },
      {
        "code": "CF 466C",
        "name": "Number of Ways",
        "rating": 1700,
        "url": "https://codeforces.com/problemset/problem/466/C",
        "commentVi": "Chia mảng thành 3 phần bằng nhau: Tổng toàn mảng phải chia hết cho 3 (gọi là S). Dùng prefix sum đếm số vị trí có tổng bằng S trước mỗi vị trí có tổng 2S.",
        "commentEn": "Chia mảng thành 3 phần bằng nhau: Tổng toàn mảng phải chia hết cho 3 (gọi là S). Dùng prefix sum đếm số vị trí có tổng bằng S trước mỗi vị trí có tổng 2S.",
        "contestId": 466,
        "index": "C"
      },
      {
        "code": "CF 1003C",
        "name": "Intense Heat",
        "rating": 1200,
        "url": "https://codeforces.com/problemset/problem/1003/C",
        "commentVi": "Dùng Prefix Sum tính trung bình cộng của tất cả các đoạn con có độ dài ≥ k trong thời gian O(N²) với N ≤ 5000.",
        "commentEn": "Dùng Prefix Sum tính trung bình cộng của tất cả các đoạn con có độ dài ≥ k trong thời gian O(N²) với N ≤ 5000.",
        "contestId": 1003,
        "index": "C"
      },
      {
        "code": "CF 276C",
        "name": "Little Girl and Maximum Sum",
        "rating": 1500,
        "url": "https://codeforces.com/problemset/problem/276/C",
        "commentVi": "Kỹ thuật mảng hiệu đếm tần suất truy vấn từng chỉ số. Sắp xếp tần suất và mảng số theo cùng thứ tự tăng dần để tối đa hóa tích theo bất đẳng thức hoán vị.",
        "commentEn": "Kỹ thuật mảng hiệu đếm tần suất truy vấn từng chỉ số. Sắp xếp tần suất và mảng số theo cùng thứ tự tăng dần để tối đa hóa tích theo bất đẳng thức hoán vị.",
        "contestId": 276,
        "index": "C"
      },
      {
        "code": "CF 1118B",
        "name": "Tanya and Candies",
        "rating": 1200,
        "url": "https://codeforces.com/problemset/problem/1118/B",
        "commentVi": "Prefix sum riêng biệt cho các vị trí chẵn và lẻ. Khi xóa phần tử tại i, các phần tử phía sau hoán đổi tính chẵn lẻ của chỉ số trong O(1).",
        "commentEn": "Prefix sum riêng biệt cho các vị trí chẵn và lẻ. Khi xóa phần tử tại i, các phần tử phía sau hoán đổi tính chẵn lẻ của chỉ số trong O(1).",
        "contestId": 1118,
        "index": "B"
      },
      {
        "code": "CF 1200B",
        "name": "Block Adventure",
        "rating": 1200,
        "url": "https://codeforces.com/problemset/problem/1200/B",
        "commentVi": "Duyệt tuần tự tối ưu hóa số block trong túi: tại mỗi bước, hạ độ cao cột hiện tại xuống mức thấp nhất cho phép \\max(0, h[i+1]-k) để thu hồi block.",
        "commentEn": "Duyệt tuần tự tối ưu hóa số block trong túi: tại mỗi bước, hạ độ cao cột hiện tại xuống mức thấp nhất cho phép \\max(0, h[i+1]-k) để thu hồi block.",
        "contestId": 1200,
        "index": "B"
      }
    ]
  },
  {
    "id": 2,
    "phaseId": 1,
    "nameVi": "HAI CON TRỎ (TWO POINTERS) & CỬA SỔ TRƯỢT (SLIDING WINDOW)",
    "nameEn": "Two Pointers & Sliding Window",
    "tierVi": "Newbie ➔ Pupil (900 - 1300)",
    "tierEn": "Newbie to Pupil (900 - 1300)",
    "essenceVi": [
      "Duyệt không gian trạng thái bằng cặp chỉ số (L, R) theo một chiều đơn điệu, không bao giờ lùi con trỏ.",
      "Cửa sổ mở rộng R khi điều kiện vẫn thỏa mãn và co L lại khi điều kiện bị vi phạm hoặc cần tìm nghiệm tối thiểu."
    ],
    "essenceEn": [
      "Duyệt không gian trạng thái bằng cặp chỉ số (L, R) theo một chiều đơn điệu, không bao giờ lùi con trỏ.",
      "Cửa sổ mở rộng R khi điều kiện vẫn thỏa mãn và co L lại khi điều kiện bị vi phạm hoặc cần tìm nghiệm tối thiểu."
    ],
    "complexityVi": "Mỗi con trỏ di chuyển tối đa N bước ⇒ Độ phức tạp tổng thể O(N).",
    "complexityEn": "Mỗi con trỏ di chuyển tối đa N bước ⇒ Độ phức tạp tổng thể O(N).",
    "blogs": [
      {
        "title": "Codeforces Edu: Two Pointers Method Step 1 - 3",
        "url": "https://codeforces.com/edu/course/2/lesson/9"
      }
    ],
    "problems": [
      {
        "code": "CF 381A",
        "name": "Sereja and Dima",
        "rating": 800,
        "url": "https://codeforces.com/problemset/problem/381/A",
        "commentVi": "Hai con trỏ co từ 2 đầu mảng: Mỗi người chơi lần lượt lấy phần tử lớn hơn giữa L và R, tăng/giảm con trỏ tương ứng.",
        "commentEn": "Hai con trỏ co từ 2 đầu mảng: Mỗi người chơi lần lượt lấy phần tử lớn hơn giữa L và R, tăng/giảm con trỏ tương ứng.",
        "contestId": 381,
        "index": "A"
      },
      {
        "code": "CF 279B",
        "name": "Books",
        "rating": 1100,
        "url": "https://codeforces.com/problemset/problem/279/B",
        "commentVi": "Cửa sổ trượt kinh điển: Tìm đoạn sách liên tiếp dài nhất có tổng thời gian đọc ≤ t. Tăng R tích lũy thời gian, khi vượt quá t thì tăng L trừ bớt.",
        "commentEn": "Cửa sổ trượt kinh điển: Tìm đoạn sách liên tiếp dài nhất có tổng thời gian đọc ≤ t. Tăng R tích lũy thời gian, khi vượt quá t thì tăng L trừ bớt.",
        "contestId": 279,
        "index": "B"
      },
      {
        "code": "CF 602B",
        "name": "Approximating a Constant Range",
        "rating": 1400,
        "url": "https://codeforces.com/problemset/problem/602/B",
        "commentVi": "Cửa sổ trượt duy trì \\max - \\min ≤ 1. Sử dụng mảng đếm tần suất hoặc multiset để kiểm tra điều kiện trong O(1) khi dịch chuyển L và R.",
        "commentEn": "Cửa sổ trượt duy trì \\max - \\min ≤ 1. Sử dụng mảng đếm tần suất hoặc multiset để kiểm tra điều kiện trong O(1) khi dịch chuyển L và R.",
        "contestId": 602,
        "index": "B"
      },
      {
        "code": "CF 1251C",
        "name": "Minimize The Integer",
        "rating": 1400,
        "url": "https://codeforces.com/problemset/problem/1251/C",
        "commentVi": "Tách các chữ số thành 2 danh sách chẵn và lẻ (do các chữ số cùng tính chẵn lẻ không thể đổi chỗ cho nhau), sau đó dùng two pointers trộn lại như Merge Sort.",
        "commentEn": "Tách các chữ số thành 2 danh sách chẵn và lẻ (do các chữ số cùng tính chẵn lẻ không thể đổi chỗ cho nhau), sau đó dùng two pointers trộn lại như Merge Sort.",
        "contestId": 1251,
        "index": "C"
      },
      {
        "code": "CF 161A",
        "name": "Dress'em in Vests!",
        "rating": 1200,
        "url": "https://codeforces.com/problemset/problem/161/A",
        "commentVi": "Hai con trỏ trên 2 mảng đã sắp xếp: Ghép áo giáp phù hợp kích thước cho binh sĩ, tăng con trỏ áo nếu quá nhỏ và tăng binh sĩ nếu không có áo vừa.",
        "commentEn": "Hai con trỏ trên 2 mảng đã sắp xếp: Ghép áo giáp phù hợp kích thước cho binh sĩ, tăng con trỏ áo nếu quá nhỏ và tăng binh sĩ nếu không có áo vừa.",
        "contestId": 161,
        "index": "A"
      },
      {
        "code": "CF 676C",
        "name": "Vasya and String",
        "rating": 1500,
        "url": "https://codeforces.com/problemset/problem/676/C",
        "commentVi": "Cửa sổ trượt tìm chuỗi con dài nhất chứa toàn ký tự 'a' (hoặc 'b') khi được phép đổi tối đa k ký tự khác loại.",
        "commentEn": "Cửa sổ trượt tìm chuỗi con dài nhất chứa toàn ký tự 'a' (hoặc 'b') khi được phép đổi tối đa k ký tự khác loại.",
        "contestId": 676,
        "index": "C"
      },
      {
        "code": "CF 251A",
        "name": "Points on Line",
        "rating": 1300,
        "url": "https://codeforces.com/problemset/problem/251/A",
        "commentVi": "Cố định con trỏ phải R, dùng con trỏ trái L tìm vị trí xa nhất thỏa x[R] - x[L] ≤ d. Số bộ 3 kết thúc tại R là C(R-L, 2).",
        "commentEn": "Cố định con trỏ phải R, dùng con trỏ trái L tìm vị trí xa nhất thỏa x[R] - x[L] ≤ d. Số bộ 3 kết thúc tại R là C(R-L, 2).",
        "contestId": 251,
        "index": "A"
      },
      {
        "code": "CF 701C",
        "name": "They Are Everywhere",
        "rating": 1400,
        "url": "https://codeforces.com/problemset/problem/701/C",
        "commentVi": "Cửa sổ trượt tìm đoạn ngắn nhất chứa đủ tất cả các loại Pokemon phân biệt: mở R cho đến khi đủ loại, sau đó co L tối đa có thể.",
        "commentEn": "Cửa sổ trượt tìm đoạn ngắn nhất chứa đủ tất cả các loại Pokemon phân biệt: mở R cho đến khi đủ loại, sau đó co L tối đa có thể.",
        "contestId": 701,
        "index": "C"
      },
      {
        "code": "CF 1006C",
        "name": "Three Parts of the Array",
        "rating": 1100,
        "url": "https://codeforces.com/problemset/problem/1006/C",
        "commentVi": "Hai con trỏ xuất phát từ 2 đầu mảng tính tổng tiền tố và hậu tố, co dần về giữa để tìm tổng lớn nhất thỏa mãn sum_1 == sum_3 và không giao nhau.",
        "commentEn": "Hai con trỏ xuất phát từ 2 đầu mảng tính tổng tiền tố và hậu tố, co dần về giữa để tìm tổng lớn nhất thỏa mãn sum_1 == sum_3 và không giao nhau.",
        "contestId": 1006,
        "index": "C"
      },
      {
        "code": "CF 1133C",
        "name": "Balanced Team",
        "rating": 1200,
        "url": "https://codeforces.com/problemset/problem/1133/C",
        "commentVi": "Sắp xếp mảng kỹ năng tăng dần, dùng hai con trỏ duy trì cửa sổ a[R] - a[L] ≤ 5 để tìm kích thước đội bóng lớn nhất.",
        "commentEn": "Sắp xếp mảng kỹ năng tăng dần, dùng hai con trỏ duy trì cửa sổ a[R] - a[L] ≤ 5 để tìm kích thước đội bóng lớn nhất.",
        "contestId": 1133,
        "index": "C"
      }
    ]
  },
  {
    "id": 3,
    "phaseId": 1,
    "nameVi": "TÌM KIẾM NHỊ PHÂN & CHẶT NHỊ PHÂN KẾT QUẢ (BINARY SEARCH ON ANSWER)",
    "nameEn": "Binary Search on Answer",
    "tierVi": "Pupil (1000 - 1400)",
    "tierEn": "Pupil (1000 - 1400)",
    "essenceVi": [
      "Chuyển đổi bài toán tối ưu 'Tìm giá trị X tốt nhất' thành bài toán quyết định 'Với giá trị M, liệu có phương án khả thi hay không?'.",
      "Yêu cầu hàm kiểm tra khả thi f(M) phải có tính đơn điệu (Monotonicity): chuỗi kết quả có dạng `FFFFFTTTTT` hoặc `TTTTTFFFFF`."
    ],
    "essenceEn": [
      "Chuyển đổi bài toán tối ưu 'Tìm giá trị X tốt nhất' thành bài toán quyết định 'Với giá trị M, liệu có phương án khả thi hay không?'.",
      "Yêu cầu hàm kiểm tra khả thi f(M) phải có tính đơn điệu (Monotonicity): chuỗi kết quả có dạng `FFFFFTTTTT` hoặc `TTTTTFFFFF`."
    ],
    "complexityVi": "O(log(\\text{range}) × \\text{Cost}(f)). Giảm không gian tìm kiếm theo hàm mũ.",
    "complexityEn": "O(log(\\text{range}) × \\text{Cost}(f)). Giảm không gian tìm kiếm theo hàm mũ.",
    "blogs": [
      {
        "title": "Codeforces Edu: Binary Search Step 1 - 5",
        "url": "https://codeforces.com/edu/course/2/lesson/6"
      },
      {
        "title": "Binary Search comprehensive tutorial by Errichto",
        "url": "https://codeforces.com/blog/entry/67509"
      }
    ],
    "problems": [
      {
        "code": "CF 706B",
        "name": "Interesting drink",
        "rating": 1100,
        "url": "https://codeforces.com/problemset/problem/706/B",
        "commentVi": "Mức thông hiểu: Sắp xếp giá tiền các chai nước và sử dụng hàm `std::upper_bound` để đếm số quán bán giá ≤ m_i trong O(log N).",
        "commentEn": "Mức thông hiểu: Sắp xếp giá tiền các chai nước và sử dụng hàm `std::upper_bound` để đếm số quán bán giá ≤ m_i trong O(log N).",
        "contestId": 706,
        "index": "B"
      },
      {
        "code": "CF 1613C",
        "name": "Poisoned Dagger",
        "rating": 1200,
        "url": "https://codeforces.com/problemset/problem/1613/C",
        "commentVi": "Chặt nhị phân kết quả thời gian độc k: Sát thương của nhát chém thứ i là \\min(k, a_{i+1}-a_i). Hàm kiểm tra tính đơn điệu tăng theo k.",
        "commentEn": "Chặt nhị phân kết quả thời gian độc k: Sát thương của nhát chém thứ i là \\min(k, a_{i+1}-a_i). Hàm kiểm tra tính đơn điệu tăng theo k.",
        "contestId": 1613,
        "index": "C"
      },
      {
        "code": "CF 371C",
        "name": "Hamburgers",
        "rating": 1400,
        "url": "https://codeforces.com/problemset/problem/371/C",
        "commentVi": "Chặt nhị phân số lượng bánh burger làm được. Với M cái bánh, tính chi phí mua thêm các nguyên liệu còn thiếu và kiểm tra xem có ≤ r rúp không.",
        "commentEn": "Chặt nhị phân số lượng bánh burger làm được. Với M cái bánh, tính chi phí mua thêm các nguyên liệu còn thiếu và kiểm tra xem có ≤ r rúp không.",
        "contestId": 371,
        "index": "C"
      },
      {
        "code": "CF 1201C",
        "name": "Maximum Median",
        "rating": 1400,
        "url": "https://codeforces.com/problemset/problem/1201/C",
        "commentVi": "Chặt nhị phân giá trị trung vị X: Để trung vị đạt ít nhất X, cần tăng tất cả các phần tử từ vị trí trung vị n/2 đến cuối lên ít nhất X với tổng chi phí ≤ k.",
        "commentEn": "Chặt nhị phân giá trị trung vị X: Để trung vị đạt ít nhất X, cần tăng tất cả các phần tử từ vị trí trung vị n/2 đến cuối lên ít nhất X với tổng chi phí ≤ k.",
        "contestId": 1201,
        "index": "C"
      },
      {
        "code": "CF 760B",
        "name": "Frodo and pillows",
        "rating": 1400,
        "url": "https://codeforces.com/problemset/problem/760/B",
        "commentVi": "Chặt nhị phân số gối của Frodo tại vị trí k. Số gối giảm dần 1 đơn vị mỗi bước sang 2 bên cho đến khi đạt 1; tính tổng gối bằng công thức cấp số cộng trong O(1).",
        "commentEn": "Chặt nhị phân số gối của Frodo tại vị trí k. Số gối giảm dần 1 đơn vị mỗi bước sang 2 bên cho đến khi đạt 1; tính tổng gối bằng công thức cấp số cộng trong O(1).",
        "contestId": 760,
        "index": "B"
      },
      {
        "code": "CF 1676E",
        "name": "Eating Queries",
        "rating": 1100,
        "url": "https://codeforces.com/problemset/problem/1676/E",
        "commentVi": "Sắp xếp lượng kẹo giảm dần, tính mảng prefix sum và dùng `std::lower_bound` để tìm số viên kẹo tối thiểu đạt tổng đường ≥ x.",
        "commentEn": "Sắp xếp lượng kẹo giảm dần, tính mảng prefix sum và dùng `std::lower_bound` để tìm số viên kẹo tối thiểu đạt tổng đường ≥ x.",
        "contestId": 1676,
        "index": "E"
      },
      {
        "code": "CF 448D",
        "name": "Multiplication Table",
        "rating": 1800,
        "url": "https://codeforces.com/problemset/problem/448/D",
        "commentVi": "Tìm số nhỏ thứ k trong bảng nhân n × m: Chặt nhị phân giá trị X, đếm số phần tử ≤ X trong bảng bằng ∑_{i=1}^n \\min(m, ⌊ X/i ⌋) trong O(n).",
        "commentEn": "Tìm số nhỏ thứ k trong bảng nhân n × m: Chặt nhị phân giá trị X, đếm số phần tử ≤ X trong bảng bằng ∑_{i=1}^n \\min(m, ⌊ X/i ⌋) trong O(n).",
        "contestId": 448,
        "index": "D"
      },
      {
        "code": "CF 1117C",
        "name": "Magic Ship",
        "rating": 1700,
        "url": "https://codeforces.com/problemset/problem/1117/C",
        "commentVi": "Chặt nhị phân số ngày di chuyển D. Tách D = q × n + r để tính tọa độ con tàu trôi theo gió, kiểm tra khoảng cách Manhattan tới đích có ≤ D hay không.",
        "commentEn": "Chặt nhị phân số ngày di chuyển D. Tách D = q × n + r để tính tọa độ con tàu trôi theo gió, kiểm tra khoảng cách Manhattan tới đích có ≤ D hay không.",
        "contestId": 1117,
        "index": "C"
      },
      {
        "code": "CF 670D2",
        "name": "Magic Powder (hard version)",
        "rating": 1500,
        "url": "https://codeforces.com/problemset/problem/670/D2",
        "commentVi": "Chặt nhị phân số bánh nướng được trong phạm vi [0, 2 × 10⁹]. Kiểm tra tổng lượng bột ma thuật cần bù cho các nguyên liệu thiếu có ≤ k không (chú ý tràn số 64-bit).",
        "commentEn": "Chặt nhị phân số bánh nướng được trong phạm vi [0, 2 × 10⁹]. Kiểm tra tổng lượng bột ma thuật cần bù cho các nguyên liệu thiếu có ≤ k không (chú ý tràn số 64-bit).",
        "contestId": 670,
        "index": "D2"
      },
      {
        "code": "CF 1352E",
        "name": "Special Elements",
        "rating": 1300,
        "url": "https://codeforces.com/problemset/problem/1352/E",
        "commentVi": "Tính tổng tất cả các đoạn con độ dài ≥ 2 và đánh dấu sự tồn tại vào mảng boolean kích thước N, sau đó đếm số phần tử ban đầu xuất hiện trong mảng đánh dấu.",
        "commentEn": "Tính tổng tất cả các đoạn con độ dài ≥ 2 và đánh dấu sự tồn tại vào mảng boolean kích thước N, sau đó đếm số phần tử ban đầu xuất hiện trong mảng đánh dấu.",
        "contestId": 1352,
        "index": "E"
      }
    ]
  },
  {
    "id": 4,
    "phaseId": 1,
    "nameVi": "SÀNG NGUYÊN TỐ, SPF & SỐ HỌC CƠ BẢN (NUMBER THEORY BASICS)",
    "nameEn": "Sieve of Eratosthenes & Number Theory Basics",
    "tierVi": "Pupil (1000 - 1400)",
    "tierEn": "Pupil (1000 - 1400)",
    "essenceVi": [
      "Sàng Eratosthenes O(N log log N) tìm mọi số nguyên tố ≤ N. Sàng SPF (Smallest Prime Factor) lưu ước nguyên tố nhỏ nhất của mỗi số.",
      "Nhờ SPF, ta phân tích thừa số nguyên tố của bất kỳ số nào ≤ N chỉ mất O(log X) thay vì O(√X). Thuật toán Euclid tính gcd(a, b) trong O(log(\\min(a,b)))."
    ],
    "essenceEn": [
      "Sàng Eratosthenes O(N log log N) tìm mọi số nguyên tố ≤ N. Sàng SPF (Smallest Prime Factor) lưu ước nguyên tố nhỏ nhất của mỗi số.",
      "Nhờ SPF, ta phân tích thừa số nguyên tố của bất kỳ số nào ≤ N chỉ mất O(log X) thay vì O(√X). Thuật toán Euclid tính gcd(a, b) trong O(log(\\min(a,b)))."
    ],
    "complexityVi": "Tiền xử lý O(N log log N), phân tích thừa số O(log X), truy vấn gcd O(log(\\min(a,b))).",
    "complexityEn": "Tiền xử lý O(N log log N), phân tích thừa số O(log X), truy vấn gcd O(log(\\min(a,b))).",
    "blogs": [
      {
        "title": "Number Theory Tutorial (Primes, Sieve, GCD)",
        "url": "https://codeforces.com/blog/entry/78065"
      }
    ],
    "problems": [
      {
        "code": "CF 230B",
        "name": "T-primes",
        "rating": 1300,
        "url": "https://codeforces.com/problemset/problem/230/B",
        "commentVi": "Số có đúng 3 ước dương khi và chỉ khi nó là bình phương của một số nguyên tố (x = p^2). Sàng nguyên tố tới 10⁶ và kiểm tra căn bậc hai.",
        "commentEn": "Số có đúng 3 ước dương khi và chỉ khi nó là bình phương của một số nguyên tố (x = p^2). Sàng nguyên tố tới 10⁶ và kiểm tra căn bậc hai.",
        "contestId": 230,
        "index": "B"
      },
      {
        "code": "CF 154B",
        "name": "Colliders",
        "rating": 1600,
        "url": "https://codeforces.com/problemset/problem/154/B",
        "commentVi": "Quản lý va chạm collider: Dùng SPF phân tích nhanh các ước nguyên tố của số cần bật, duy trì mảng đánh dấu ước nguyên tố đã bị kích hoạt bởi collider nào.",
        "commentEn": "Quản lý va chạm collider: Dùng SPF phân tích nhanh các ước nguyên tố của số cần bật, duy trì mảng đánh dấu ước nguyên tố đã bị kích hoạt bởi collider nào.",
        "contestId": 154,
        "index": "B"
      },
      {
        "code": "CF 1033B",
        "name": "Square Difference",
        "rating": 1100,
        "url": "https://codeforces.com/problemset/problem/1033/B",
        "commentVi": "Phân tích hằng đẳng thức: a^2 - b^2 = (a - b)(a + b). Vì số nguyên tố chỉ có ước là 1 và chính nó, điều kiện cần là a - b = 1 và a + b là số nguyên tố.",
        "commentEn": "Phân tích hằng đẳng thức: a^2 - b^2 = (a - b)(a + b). Vì số nguyên tố chỉ có ước là 1 và chính nó, điều kiện cần là a - b = 1 và a + b là số nguyên tố.",
        "contestId": 1033,
        "index": "B"
      },
      {
        "code": "CF 1370A",
        "name": "Maximum GCD",
        "rating": 800,
        "url": "https://codeforces.com/problemset/problem/1370/A",
        "commentVi": "Nhận xét toán học sắc bén: Để gcd(a, b) lớn nhất với 1 ≤ a < b ≤ n, cặp tối ưu luôn là (⌊ n/2 ⌋, 2 × ⌊ n/2 ⌋) với đáp án là ⌊ n/2 ⌋.",
        "commentEn": "Nhận xét toán học sắc bén: Để gcd(a, b) lớn nhất với 1 ≤ a < b ≤ n, cặp tối ưu luôn là (⌊ n/2 ⌋, 2 × ⌊ n/2 ⌋) với đáp án là ⌊ n/2 ⌋.",
        "contestId": 1370,
        "index": "A"
      },
      {
        "code": "CF 1490C",
        "name": "Sum of Cubes",
        "rating": 1100,
        "url": "https://codeforces.com/problemset/problem/1490/C",
        "commentVi": "Duyệt a từ 1 tới √[3]{x} ≤ 10^4, kiểm tra xem x - a^3 có phải là lập phương hoàn hảo của một số nguyên dương b bằng hàm `cbrt` hoặc nhị phân.",
        "commentEn": "Duyệt a từ 1 tới √[3]{x} ≤ 10^4, kiểm tra xem x - a^3 có phải là lập phương hoàn hảo của một số nguyên dương b bằng hàm `cbrt` hoặc nhị phân.",
        "contestId": 1490,
        "index": "C"
      },
      {
        "code": "CF 1294C",
        "name": "Product of Three Numbers",
        "rating": 1300,
        "url": "https://codeforces.com/problemset/problem/1294/C",
        "commentVi": "Tham lam tìm ước nhỏ nhất a > 1 của n, sau đó tìm ước nhỏ nhất b > a của n/a. Phần còn lại c = n/(a × b), kiểm tra c > b và c > 1.",
        "commentEn": "Tham lam tìm ước nhỏ nhất a > 1 của n, sau đó tìm ước nhỏ nhất b > a của n/a. Phần còn lại c = n/(a × b), kiểm tra c > b và c > 1.",
        "contestId": 1294,
        "index": "C"
      },
      {
        "code": "CF 1458A",
        "name": "Row GCD",
        "rating": 1600,
        "url": "https://codeforces.com/problemset/problem/1458/A",
        "commentVi": "Tính chất GCD: gcd(a_1+x, a_2+x, ..., a_n+x) = gcd(a_1+x, gcd(|a_2-a_1|, |a_3-a_1|, ...)). Tính trước GCD các hiệu, mỗi truy vấn mất O(log).",
        "commentEn": "Tính chất GCD: gcd(a_1+x, a_2+x, ..., a_n+x) = gcd(a_1+x, gcd(|a_2-a_1|, |a_3-a_1|, ...)). Tính trước GCD các hiệu, mỗi truy vấn mất O(log).",
        "contestId": 1458,
        "index": "A"
      },
      {
        "code": "CF 17A",
        "name": "Noldbach problem",
        "rating": 1000,
        "url": "https://codeforces.com/problemset/problem/17/A",
        "commentVi": "Sàng nguyên tố tới n, trích xuất danh sách các số nguyên tố và kiểm tra các số có dạng p_i + p_{i+1} + 1 xem có phải số nguyên tố ≤ n hay không.",
        "commentEn": "Sàng nguyên tố tới n, trích xuất danh sách các số nguyên tố và kiểm tra các số có dạng p_i + p_{i+1} + 1 xem có phải số nguyên tố ≤ n hay không.",
        "contestId": 17,
        "index": "A"
      },
      {
        "code": "CF 797A",
        "name": "k-Factorization",
        "rating": 1100,
        "url": "https://codeforces.com/problemset/problem/797/A",
        "commentVi": "Phân tích n ra các thừa số nguyên tố. Nếu tổng số thừa số < k thì vô nghiệm; ngược lại gom các thừa số dư vào phần tử cuối cùng để có đúng k số.",
        "commentEn": "Phân tích n ra các thừa số nguyên tố. Nếu tổng số thừa số < k thì vô nghiệm; ngược lại gom các thừa số dư vào phần tử cuối cùng để có đúng k số.",
        "contestId": 797,
        "index": "A"
      },
      {
        "code": "CF 1165D",
        "name": "Almost All Divisors",
        "rating": 1500,
        "url": "https://codeforces.com/problemset/problem/1165/D",
        "commentVi": "Khôi phục số n = d_{\\min} × d_{\\max}. Tìm lại toàn bộ các ước thực sự của số n vừa tính và so sánh với danh sách đề bài cho xem có trùng khớp hoàn toàn không.",
        "commentEn": "Khôi phục số n = d_{\\min} × d_{\\max}. Tìm lại toàn bộ các ước thực sự của số n vừa tính và so sánh với danh sách đề bài cho xem có trùng khớp hoàn toàn không.",
        "contestId": 1165,
        "index": "D"
      }
    ]
  },
  {
    "id": 5,
    "phaseId": 1,
    "nameVi": "THAM LAM (GREEDY) & BẤT ĐẲNG THỨC SẮP XẾP (EXCHANGE ARGUMENT)",
    "nameEn": "Greedy Algorithms & Exchange Argument",
    "tierVi": "Pupil ➔ Specialist (1100 - 1500)",
    "tierEn": "Pupil to Specialist (1100 - 1500)",
    "essenceVi": [
      "Đưa ra lựa chọn tối ưu cục bộ tại từng bước nhằm đạt được tối ưu toàn cục. Không quay lui lại các quyết định đã chọn.",
      "Kỹ thuật chứng minh Exchange Argument: Giả định hoán vị tối ưu có một cặp nghịch thế vi phạm thứ tự tham lam, chứng minh việc đổi chỗ (swap) 2 phần tử kề nhau không làm giảm chất lượng nghiệm."
    ],
    "essenceEn": [
      "Đưa ra lựa chọn tối ưu cục bộ tại từng bước nhằm đạt được tối ưu toàn cục. Không quay lui lại các quyết định đã chọn.",
      "Kỹ thuật chứng minh Exchange Argument: Giả định hoán vị tối ưu có một cặp nghịch thế vi phạm thứ tự tham lam, chứng minh việc đổi chỗ (swap) 2 phần tử kề nhau không làm giảm chất lượng nghiệm."
    ],
    "complexityVi": "Thường đi kèm sắp xếp O(N log N) hoặc hàng đợi ưu tiên O(N log N).",
    "complexityEn": "Thường đi kèm sắp xếp O(N log N) hoặc hàng đợi ưu tiên O(N log N).",
    "blogs": [
      {
        "title": "Thinking about Greedy Algorithms",
        "url": "https://codeforces.com/blog/entry/92661"
      }
    ],
    "problems": [
      {
        "code": "CF 405A",
        "name": "Gravity Flip",
        "rating": 900,
        "url": "https://codeforces.com/problemset/problem/405/A",
        "commentVi": "Mức thông hiểu: Trọng lực kéo các khối hộp rơi về phía bên phải tương đương với việc sắp xếp mảng độ cao theo thứ tự tăng dần.",
        "commentEn": "Mức thông hiểu: Trọng lực kéo các khối hộp rơi về phía bên phải tương đương với việc sắp xếp mảng độ cao theo thứ tự tăng dần.",
        "contestId": 405,
        "index": "A"
      },
      {
        "code": "CF 1360D",
        "name": "Buying Shovels",
        "rating": 1300,
        "url": "https://codeforces.com/problemset/problem/1360/D",
        "commentVi": "Tìm ước d của n sao cho d ≤ k và d lớn nhất có thể để số lượng gói xẻng n/d là nhỏ nhất. Duyệt ước tới √n.",
        "commentEn": "Tìm ước d của n sao cho d ≤ k và d lớn nhất có thể để số lượng gói xẻng n/d là nhỏ nhất. Duyệt ước tới √n.",
        "contestId": 1360,
        "index": "D"
      },
      {
        "code": "CF 978C",
        "name": "Letters",
        "rating": 1000,
        "url": "https://codeforces.com/problemset/problem/978/C",
        "commentVi": "Duyệt tham lam qua mảng số phòng cộng dồn: Khi số thứ tự phòng của lá thư vượt quá ký túc xá hiện tại, tăng chỉ số ký túc xá cho đến khi bao phủ được.",
        "commentEn": "Duyệt tham lam qua mảng số phòng cộng dồn: Khi số thứ tự phòng của lá thư vượt quá ký túc xá hiện tại, tăng chỉ số ký túc xá cho đến khi bao phủ được.",
        "contestId": 978,
        "index": "C"
      },
      {
        "code": "CF 1526C2",
        "name": "Potions (Hard Version)",
        "rating": 1600,
        "url": "https://codeforces.com/problemset/problem/1526/C2",
        "commentVi": "Regret Greedy (Tham lam có hối hận): Uống mọi lọ thuốc. Nếu máu < 0, nhả lọ thuốc độc có giá trị âm lớn nhất đã uống ra khỏi cơ thể bằng `priority_queue`.",
        "commentEn": "Regret Greedy (Tham lam có hối hận): Uống mọi lọ thuốc. Nếu máu < 0, nhả lọ thuốc độc có giá trị âm lớn nhất đã uống ra khỏi cơ thể bằng `priority_queue`.",
        "contestId": 1526,
        "index": "C2"
      },
      {
        "code": "CF 1409D",
        "name": "Decrease the Sum of Digits",
        "rating": 1400,
        "url": "https://codeforces.com/problemset/problem/1409/D",
        "commentVi": "Muốn giảm tổng các chữ số, cách duy nhất là tăng n để tạo ra các số 0 ở đuôi nhờ phép nhớ. Tham lam làm tròn từ hàng đơn vị lên hàng chục, trăm...",
        "commentEn": "Muốn giảm tổng các chữ số, cách duy nhất là tăng n để tạo ra các số 0 ở đuôi nhờ phép nhớ. Tham lam làm tròn từ hàng đơn vị lên hàng chục, trăm...",
        "contestId": 1409,
        "index": "D"
      },
      {
        "code": "CF 1157C2",
        "name": "Increasing Subsequence (hard version)",
        "rating": 1500,
        "url": "https://codeforces.com/problemset/problem/1157/C2",
        "commentVi": "Tham lam chọn phần tử nhỏ hơn giữa 2 đầu L và R nếu cả hai đều > prev. Trường hợp a[L] == a[R], thử tham lam rẽ nhánh đi hết bên trái hoặc bên phải.",
        "commentEn": "Tham lam chọn phần tử nhỏ hơn giữa 2 đầu L và R nếu cả hai đều > prev. Trường hợp a[L] == a[R], thử tham lam rẽ nhánh đi hết bên trái hoặc bên phải.",
        "contestId": 1157,
        "index": "C2"
      },
      {
        "code": "CF 1029B",
        "name": "Creating the Contest",
        "rating": 1200,
        "url": "https://codeforces.com/problemset/problem/1029/B",
        "commentVi": "Tìm dãy con liên tiếp dài nhất thỏa a_{i+1} ≤ 2 a_i. Duyệt tuyến tính tham lam kéo dài chuỗi hiện tại, nếu vi phạm thì khởi tạo lại chuỗi mới.",
        "commentEn": "Tìm dãy con liên tiếp dài nhất thỏa a_{i+1} ≤ 2 a_i. Duyệt tuyến tính tham lam kéo dài chuỗi hiện tại, nếu vi phạm thì khởi tạo lại chuỗi mới.",
        "contestId": 1029,
        "index": "B"
      },
      {
        "code": "CF 898B",
        "name": "Proper Nutrition",
        "rating": 1200,
        "url": "https://codeforces.com/problemset/problem/898/B",
        "commentVi": "Phương trình Diophantine a x + b y = n: Duyệt tham lam số chai x từ 0 đến n/a, kiểm tra xem lượng còn lại (n - a x) có chia hết cho b hay không.",
        "commentEn": "Phương trình Diophantine a x + b y = n: Duyệt tham lam số chai x từ 0 đến n/a, kiểm tra xem lượng còn lại (n - a x) có chia hết cho b hay không.",
        "contestId": 898,
        "index": "B"
      },
      {
        "code": "CF 1368B",
        "name": "Codeforces Subsequences",
        "rating": 1400,
        "url": "https://codeforces.com/problemset/problem/1368/B",
        "commentVi": "Số chuỗi con 'codeforces' tạo thành là ∏ c_i. Để tổng các ký tự ∑ c_i nhỏ nhất mà tích ≥ k, ta dùng tham lam tăng dần đều từng chữ số từ 1.",
        "commentEn": "Số chuỗi con 'codeforces' tạo thành là ∏ c_i. Để tổng các ký tự ∑ c_i nhỏ nhất mà tích ≥ k, ta dùng tham lam tăng dần đều từng chữ số từ 1.",
        "contestId": 1368,
        "index": "B"
      },
      {
        "code": "CF 160A",
        "name": "Twins",
        "rating": 900,
        "url": "https://codeforces.com/problemset/problem/160/A",
        "commentVi": "Sắp xếp giảm dần và tham lam lấy các đồng xu có mệnh giá lớn nhất cho đến khi tổng giá trị vượt quá 50\\% tổng số tiền của tất cả các đồng xu.",
        "commentEn": "Sắp xếp giảm dần và tham lam lấy các đồng xu có mệnh giá lớn nhất cho đến khi tổng giá trị vượt quá 50\\% tổng số tiền của tất cả các đồng xu.",
        "contestId": 160,
        "index": "A"
      }
    ]
  },
  {
    "id": 6,
    "phaseId": 2,
    "nameVi": "DUYỆT ĐỒ THỊ DFS/BFS & ĐỒ THỊ TRÊN LƯỚI (GRAPHS & GRIDS)",
    "nameEn": "Graph Traversal (DFS/BFS) & Grid Graphs",
    "tierVi": "Pupil ➔ Specialist (1200 - 1500)",
    "tierEn": "Pupil to Specialist (1200 - 1500)",
    "essenceVi": [
      "DFS (Depth-First Search) duyệt sâu tìm thành phần liên thông, chu trình, kiểm tra tính 2 phía (bipartite).",
      "BFS (Breadth-First Search) duyệt theo từng lớp khoảng cách, tìm đường đi ngắn nhất trên đồ thị không trọng số hoặc lưới ma trận ô vuông."
    ],
    "essenceEn": [
      "DFS (Depth-First Search) duyệt sâu tìm thành phần liên thông, chu trình, kiểm tra tính 2 phía (bipartite).",
      "BFS (Breadth-First Search) duyệt theo từng lớp khoảng cách, tìm đường đi ngắn nhất trên đồ thị không trọng số hoặc lưới ma trận ô vuông."
    ],
    "complexityVi": "Thời gian O(V + E) hoặc O(N × M) trên lưới. Bộ nhớ O(V) cho ngăn xếp đệ quy hoặc hàng đợi `std::queue`.",
    "complexityEn": "Thời gian O(V + E) hoặc O(N × M) trên lưới. Bộ nhớ O(V) cho ngăn xếp đệ quy hoặc hàng đợi `std::queue`.",
    "blogs": [
      {
        "title": "Graph Theory Part 1: DFS & BFS Fundamentals",
        "url": "https://codeforces.com/blog/entry/68138"
      }
    ],
    "problems": [
      {
        "code": "CF 115A",
        "name": "Party",
        "rating": 900,
        "url": "https://codeforces.com/problemset/problem/115/A",
        "commentVi": "Mức cơ bản: Đồ thị cây cấp quản lý. Số nhóm ít nhất cần chia chính là chiều cao tối đa của cây, tính bằng DFS/BFS từ các đỉnh gốc (không có sếp).",
        "commentEn": "Mức cơ bản: Đồ thị cây cấp quản lý. Số nhóm ít nhất cần chia chính là chiều cao tối đa của cây, tính bằng DFS/BFS từ các đỉnh gốc (không có sếp).",
        "contestId": 115,
        "index": "A"
      },
      {
        "code": "CF 520B",
        "name": "Two Buttons",
        "rating": 1400,
        "url": "https://codeforces.com/problemset/problem/520/B",
        "commentVi": "BFS tìm đường đi ngắn nhất từ n đến m trên không gian trạng thái số, hoặc tư duy ngược: từ m về n nếu m chẵn thì chia 2, nếu lẻ thì cộng 1.",
        "commentEn": "BFS tìm đường đi ngắn nhất từ n đến m trên không gian trạng thái số, hoặc tư duy ngược: từ m về n nếu m chẵn thì chia 2, nếu lẻ thì cộng 1.",
        "contestId": 520,
        "index": "B"
      },
      {
        "code": "CF 1033A",
        "name": "King Escape",
        "rating": 1000,
        "url": "https://codeforces.com/problemset/problem/1033/A",
        "commentVi": "Duyệt BFS/DFS trên bàn cờ tránh các ô bị Hậu kiểm soát, hoặc nhận xét hình học: Quân Vua chỉ đến được đích nếu cả 2 điểm cùng nằm trong 1 góc phần tư của Hậu.",
        "commentEn": "Duyệt BFS/DFS trên bàn cờ tránh các ô bị Hậu kiểm soát, hoặc nhận xét hình học: Quân Vua chỉ đến được đích nếu cả 2 điểm cùng nằm trong 1 góc phần tư của Hậu.",
        "contestId": 1033,
        "index": "A"
      },
      {
        "code": "CF 580C",
        "name": "Kefa and Park",
        "rating": 1500,
        "url": "https://codeforces.com/problemset/problem/580/C",
        "commentVi": "DFS trên cây duy trì số lượng mèo liên tiếp trên đường đi từ gốc đến nút hiện tại. Nếu vượt quá m, cắt nhánh ngay lập tức; đếm số lá hợp lệ đến được.",
        "commentEn": "DFS trên cây duy trì số lượng mèo liên tiếp trên đường đi từ gốc đến nút hiện tại. Nếu vượt quá m, cắt nhánh ngay lập tức; đếm số lá hợp lệ đến được.",
        "contestId": 580,
        "index": "C"
      },
      {
        "code": "CF 793B",
        "name": "Igor and his way to work",
        "rating": 1600,
        "url": "https://codeforces.com/problemset/problem/793/B",
        "commentVi": "0-1 BFS trên lưới: Trạng thái (x, y, dir, turns). Nếu tiếp tục đi cùng hướng chi phí đổi hướng bằng 0, nếu rẽ hướng chi phí bằng 1, yêu cầu ≤ 2 lần rẽ.",
        "commentEn": "0-1 BFS trên lưới: Trạng thái (x, y, dir, turns). Nếu tiếp tục đi cùng hướng chi phí đổi hướng bằng 0, nếu rẽ hướng chi phí bằng 1, yêu cầu ≤ 2 lần rẽ.",
        "contestId": 793,
        "index": "B"
      },
      {
        "code": "CF 1365D",
        "name": "Solve The Maze",
        "rating": 1700,
        "url": "https://codeforces.com/problemset/problem/1365/D",
        "commentVi": "Tư duy xây tường: Đặt tường chặn tại 4 ô kề với tất cả kẻ xấu 'B'. Sau đó BFS từ đích (n, m): Kiểm tra xem mọi người tốt 'G' có tới được và kẻ xấu có bị nhốt kín không.",
        "commentEn": "Tư duy xây tường: Đặt tường chặn tại 4 ô kề với tất cả kẻ xấu 'B'. Sau đó BFS từ đích (n, m): Kiểm tra xem mọi người tốt 'G' có tới được và kẻ xấu có bị nhốt kín không.",
        "contestId": 1365,
        "index": "D"
      },
      {
        "code": "CF 217A",
        "name": "Ice Skating",
        "rating": 1200,
        "url": "https://codeforces.com/problemset/problem/217/A",
        "commentVi": "Nối cạnh giữa hai điểm nếu chúng có cùng tọa độ x hoặc y. Dùng DFS đếm số thành phần liên thông C, đáp án cần thêm là C - 1 điểm tuyết.",
        "commentEn": "Nối cạnh giữa hai điểm nếu chúng có cùng tọa độ x hoặc y. Dùng DFS đếm số thành phần liên thông C, đáp án cần thêm là C - 1 điểm tuyết.",
        "contestId": 217,
        "index": "A"
      },
      {
        "code": "CF 1037D",
        "name": "Valid BFS?",
        "rating": 1600,
        "url": "https://codeforces.com/problemset/problem/1037/D",
        "commentVi": "Kiểm tra thứ tự BFS: Sắp xếp danh sách kề của mỗi đỉnh theo vị trí xuất hiện của đỉnh con trong mảng thứ tự đề bài cho, sau đó chạy lại BFS để so sánh.",
        "commentEn": "Kiểm tra thứ tự BFS: Sắp xếp danh sách kề của mỗi đỉnh theo vị trí xuất hiện của đỉnh con trong mảng thứ tự đề bài cho, sau đó chạy lại BFS để so sánh.",
        "contestId": 1037,
        "index": "D"
      },
      {
        "code": "CF 977E",
        "name": "Cyclic Components",
        "rating": 1500,
        "url": "https://codeforces.com/problemset/problem/977/E",
        "commentVi": "Dùng DFS duyệt từng thành phần liên thông: Thành phần là một chu trình đơn (cycle) khi và chỉ khi mọi đỉnh trong thành phần đó đều có bậc đúng bằng 2.",
        "commentEn": "Dùng DFS duyệt từng thành phần liên thông: Thành phần là một chu trình đơn (cycle) khi và chỉ khi mọi đỉnh trong thành phần đó đều có bậc đúng bằng 2.",
        "contestId": 977,
        "index": "E"
      },
      {
        "code": "CF 329B",
        "name": "Biridian Forest",
        "rating": 1500,
        "url": "https://codeforces.com/problemset/problem/329/B",
        "commentVi": "Tư duy BFS ngược: Chạy BFS 1 lần duy nhất từ lối thoát hiểm (Exit) để tính khoảng cách ngắn nhất tới tất cả các ô. Người chơi phải chiến đấu với mọi quái vật có d ≤ d_{player}.",
        "commentEn": "Tư duy BFS ngược: Chạy BFS 1 lần duy nhất từ lối thoát hiểm (Exit) để tính khoảng cách ngắn nhất tới tất cả các ô. Người chơi phải chiến đấu với mọi quái vật có d ≤ d_{player}.",
        "contestId": 329,
        "index": "B"
      }
    ]
  },
  {
    "id": 7,
    "phaseId": 2,
    "nameVi": "CẤU TRÚC TẬP HỢP RỜI RẠC (DISJOINT SET UNION - DSU)",
    "nameEn": "Disjoint Set Union (DSU)",
    "tierVi": "Pupil ➔ Specialist (1200 - 1600)",
    "tierEn": "Pupil to Specialist (1200 - 1600)",
    "essenceVi": [
      "DSU quản lý các tập hợp rời nhau với 2 thao tác cơ bản: `find(u)` (tìm đại diện tập hợp) và `unite(u, v)` (hợp nhất 2 tập).",
      "Hai kỹ thuật tối ưu cốt lõi: Nén đường đi (Path Compression) và Hợp nhất theo hạng/kích thước (Union by Rank/Size) đưa thời gian mỗi thao tác về gần như hằng số O(\\alpha(N))."
    ],
    "essenceEn": [
      "DSU quản lý các tập hợp rời nhau với 2 thao tác cơ bản: `find(u)` (tìm đại diện tập hợp) và `unite(u, v)` (hợp nhất 2 tập).",
      "Hai kỹ thuật tối ưu cốt lõi: Nén đường đi (Path Compression) và Hợp nhất theo hạng/kích thước (Union by Rank/Size) đưa thời gian mỗi thao tác về gần như hằng số O(\\alpha(N))."
    ],
    "complexityVi": "O(\\alpha(N)) cho mỗi thao tác, với \\alpha là hàm nghịch đảo Ackermann (thực tế \\alpha(N) ≤ 4).",
    "complexityEn": "O(\\alpha(N)) cho mỗi thao tác, với \\alpha là hàm nghịch đảo Ackermann (thực tế \\alpha(N) ≤ 4).",
    "blogs": [
      {
        "title": "Disjoint Set Union (DSU) - Comprehensive Guide",
        "url": "https://codeforces.com/blog/entry/84042"
      }
    ],
    "problems": [
      {
        "code": "CF 1167C",
        "name": "News Distribution",
        "rating": 1200,
        "url": "https://codeforces.com/problemset/problem/1167/C",
        "commentVi": "Mức cơ bản: DSU gộp các thành viên trong cùng một nhóm bạn bè. Trả lời kích thước tập hợp sz[find(u)] của mỗi người dùng.",
        "commentEn": "Mức cơ bản: DSU gộp các thành viên trong cùng một nhóm bạn bè. Trả lời kích thước tập hợp sz[find(u)] của mỗi người dùng.",
        "contestId": 1167,
        "index": "C"
      },
      {
        "code": "CF 277A",
        "name": "Learning Languages",
        "rating": 1400,
        "url": "https://codeforces.com/problemset/problem/277/A",
        "commentVi": "Tạo đồ thị 2 phía giữa nhân viên và ngôn ngữ, dùng DSU gộp các nhân viên biết chung ngôn ngữ. Đếm số thành phần liên thông của những người biết ít nhất 1 thứ tiếng.",
        "commentEn": "Tạo đồ thị 2 phía giữa nhân viên và ngôn ngữ, dùng DSU gộp các nhân viên biết chung ngôn ngữ. Đếm số thành phần liên thông của những người biết ít nhất 1 thứ tiếng.",
        "contestId": 277,
        "index": "A"
      },
      {
        "code": "CF 1213G",
        "name": "Path Queries",
        "rating": 1600,
        "url": "https://codeforces.com/problemset/problem/1213/G",
        "commentVi": "Offline queries + DSU: Sắp xếp các cạnh và các truy vấn theo trọng số tăng dần. Khi thêm cạnh (u, v), số cặp đường đi tăng thêm là sz[u] × sz[v].",
        "commentEn": "Offline queries + DSU: Sắp xếp các cạnh và các truy vấn theo trọng số tăng dần. Khi thêm cạnh (u, v), số cặp đường đi tăng thêm là sz[u] × sz[v].",
        "contestId": 1213,
        "index": "G"
      },
      {
        "code": "CF 1559D1",
        "name": "Mocha and Diana (Easy Version)",
        "rating": 1400,
        "url": "https://codeforces.com/problemset/problem/1559/D1",
        "commentVi": "Sử dụng 2 cấu trúc DSU song song cho Mocha và Diana. Duyệt mọi cặp (u, v), nếu việc nối cạnh không tạo chu trình trên cả 2 rừng cây thì tiến hành gộp cả hai.",
        "commentEn": "Sử dụng 2 cấu trúc DSU song song cho Mocha và Diana. Duyệt mọi cặp (u, v), nếu việc nối cạnh không tạo chu trình trên cả 2 rừng cây thì tiến hành gộp cả hai.",
        "contestId": 1559,
        "index": "D1"
      },
      {
        "code": "CF 1702E",
        "name": "Split Into Two Sets",
        "rating": 1400,
        "url": "https://codeforces.com/problemset/problem/1702/E",
        "commentVi": "DSU 2 màu (bipartite check): Mỗi quân domino là một cạnh nối giữa 2 số. Bài toán khả thi khi mỗi số xuất hiện đúng 2 lần và đồ thị không chứa chu trình độ dài lẻ.",
        "commentEn": "DSU 2 màu (bipartite check): Mỗi quân domino là một cạnh nối giữa 2 số. Bài toán khả thi khi mỗi số xuất hiện đúng 2 lần và đồ thị không chứa chu trình độ dài lẻ.",
        "contestId": 1702,
        "index": "E"
      },
      {
        "code": "CF 292D",
        "name": "Connected Components",
        "rating": 1800,
        "url": "https://codeforces.com/problemset/problem/292/D",
        "commentVi": "DSU tiền tố và hậu tố: Xây dựng mảng DSU tiền tố cho i cạnh đầu và DSU hậu tố cho các cạnh từ j đến m. Khi bỏ đoạn cạnh [l, r], gộp 2 DSU lại trong O(N \\alpha(N)).",
        "commentEn": "DSU tiền tố và hậu tố: Xây dựng mảng DSU tiền tố cho i cạnh đầu và DSU hậu tố cho các cạnh từ j đến m. Khi bỏ đoạn cạnh [l, r], gộp 2 DSU lại trong O(N \\alpha(N)).",
        "contestId": 292,
        "index": "D"
      },
      {
        "code": "CF 1609D",
        "name": "Social Network",
        "rating": 1400,
        "url": "https://codeforces.com/problemset/problem/1609/D",
        "commentVi": "DSU theo dõi số cạnh dư thừa (cạnh nối 2 đỉnh đã cùng thành phần liên thông). Với k cạnh thừa, đáp án là tổng kích thước của (k+1) thành phần lớn nhất.",
        "commentEn": "DSU theo dõi số cạnh dư thừa (cạnh nối 2 đỉnh đã cùng thành phần liên thông). Với k cạnh thừa, đáp án là tổng kích thước của (k+1) thành phần lớn nhất.",
        "contestId": 1609,
        "index": "D"
      },
      {
        "code": "CF 722C",
        "name": "Destroying Array",
        "rating": 1600,
        "url": "https://codeforces.com/problemset/problem/722/C",
        "commentVi": "Tư duy đảo ngược thời gian: Thay vì xóa phần tử, ta thêm dần các phần tử theo thứ tự ngược từ cuối lên và dùng DSU gộp các đoạn kề nhau, cập nhật tổng lớn nhất.",
        "commentEn": "Tư duy đảo ngược thời gian: Thay vì xóa phần tử, ta thêm dần các phần tử theo thứ tự ngược từ cuối lên và dùng DSU gộp các đoạn kề nhau, cập nhật tổng lớn nhất.",
        "contestId": 722,
        "index": "C"
      },
      {
        "code": "CF 1332C",
        "name": "K-Complete Word",
        "rating": 1500,
        "url": "https://codeforces.com/problemset/problem/1332/C",
        "commentVi": "Dùng DSU gộp các vị trí phải có cùng ký tự do 2 ràng buộc: tính tuần hoàn chu kỳ k (i với i+k) và tính đối xứng đối gương (i với n-1-i).",
        "commentEn": "Dùng DSU gộp các vị trí phải có cùng ký tự do 2 ràng buộc: tính tuần hoàn chu kỳ k (i với i+k) và tính đối xứng đối gương (i với n-1-i).",
        "contestId": 1332,
        "index": "C"
      },
      {
        "code": "CF 1559D2",
        "name": "Mocha and Diana (Hard Version)",
        "rating": 2100,
        "url": "https://codeforces.com/problemset/problem/1559/D2",
        "commentVi": "Nâng cấp O(N log N): Cố định đỉnh 1, tìm các đỉnh chưa liên thông với 1 ở đồ thị 1 và đồ thị 2, ghép cặp nhanh bằng hai danh sách độc lập.",
        "commentEn": "Nâng cấp O(N log N): Cố định đỉnh 1, tìm các đỉnh chưa liên thông với 1 ở đồ thị 1 và đồ thị 2, ghép cặp nhanh bằng hai danh sách độc lập.",
        "contestId": 1559,
        "index": "D2"
      }
    ]
  },
  {
    "id": 8,
    "phaseId": 2,
    "nameVi": "QUY HOẠCH ĐỘNG CƠ BẢN (1D, 2D, KNAPSACK, LIS, LCS)",
    "nameEn": "Dynamic Programming Basics (1D, 2D, Knapsack, LIS, LCS)",
    "tierVi": "Pupil ➔ Specialist (1200 - 1600)",
    "tierEn": "Pupil to Specialist (1200 - 1600)",
    "essenceVi": [
      "Chia bài toán lớn thành các bài toán con gối nhau (overlapping subproblems) và có cấu trúc con tối ưu (optimal substructure).",
      "Quy hoạch động 1D/2D, bài toán xếp balo (Knapsack 0/1, unbounded), chuỗi con tăng dài nhất (LIS bằng BS trong O(N log N)), chuỗi con chung dài nhất (LCS)."
    ],
    "essenceEn": [
      "Chia bài toán lớn thành các bài toán con gối nhau (overlapping subproblems) và có cấu trúc con tối ưu (optimal substructure).",
      "Quy hoạch động 1D/2D, bài toán xếp balo (Knapsack 0/1, unbounded), chuỗi con tăng dài nhất (LIS bằng BS trong O(N log N)), chuỗi con chung dài nhất (LCS)."
    ],
    "complexityVi": "Tùy bài toán, phổ biến O(N), O(N²) hoặc O(N × W).",
    "complexityEn": "Tùy bài toán, phổ biến O(N), O(N²) hoặc O(N × W).",
    "blogs": [
      {
        "title": "Dynamic Programming: From Novice to Advanced",
        "url": "https://codeforces.com/blog/entry/67679"
      }
    ],
    "problems": [
      {
        "code": "CF 455A",
        "name": "Boredom",
        "rating": 1500,
        "url": "https://codeforces.com/problemset/problem/455/A",
        "commentVi": "DP 1D dạng House Robber: Đếm tần suất cnt[x]. Nếu chọn lấy giá trị x, ta nhận x × cnt[x] điểm nhưng không được lấy x-1: dp[i] = \\max(dp[i-1], dp[i-2] + i × cnt[i]).",
        "commentEn": "DP 1D dạng House Robber: Đếm tần suất cnt[x]. Nếu chọn lấy giá trị x, ta nhận x × cnt[x] điểm nhưng không được lấy x-1: dp[i] = \\max(dp[i-1], dp[i-2] + i × cnt[i]).",
        "contestId": 455,
        "index": "A"
      },
      {
        "code": "CF 189A",
        "name": "Cut Ribbon",
        "rating": 1300,
        "url": "https://codeforces.com/problemset/problem/189/A",
        "commentVi": "DP Balo không giới hạn (Unbounded Knapsack): dp[i] là số đoạn cắt tối đa tạo thành thanh ruy băng độ dài i từ 3 độ dài cho trước a, b, c.",
        "commentEn": "DP Balo không giới hạn (Unbounded Knapsack): dp[i] là số đoạn cắt tối đa tạo thành thanh ruy băng độ dài i từ 3 độ dài cho trước a, b, c.",
        "contestId": 189,
        "index": "A"
      },
      {
        "code": "CF 118D",
        "name": "Caesar's Legion",
        "rating": 1500,
        "url": "https://codeforces.com/problemset/problem/118/D",
        "commentVi": "DP 4 trạng thái: dp[i][j][k][type] lưu số cách sắp xếp i lính chân, j kỵ binh khi ở đuôi có k lính liên tiếp thuộc loại type.",
        "commentEn": "DP 4 trạng thái: dp[i][j][k][type] lưu số cách sắp xếp i lính chân, j kỵ binh khi ở đuôi có k lính liên tiếp thuộc loại type.",
        "contestId": 118,
        "index": "D"
      },
      {
        "code": "CF 349B",
        "name": "Color the Fence",
        "rating": 1400,
        "url": "https://codeforces.com/problemset/problem/349/B",
        "commentVi": "Số càng nhiều chữ số càng lớn: Tìm chữ số có giá trị sơn rẻ nhất để xác định độ dài cực đại của số. Sau đó tham lam duyệt từ hàng đầu thay bằng chữ số lớn hơn nếu đủ sơn.",
        "commentEn": "Số càng nhiều chữ số càng lớn: Tìm chữ số có giá trị sơn rẻ nhất để xác định độ dài cực đại của số. Sau đó tham lam duyệt từ hàng đầu thay bằng chữ số lớn hơn nếu đủ sơn.",
        "contestId": 349,
        "index": "B"
      },
      {
        "code": "CF 166E",
        "name": "Tetrahedron",
        "rating": 1500,
        "url": "https://codeforces.com/problemset/problem/166/E",
        "commentVi": "DP đếm đường đi trên tứ diện: dp[steps][0] là số cách đứng tại đỉnh D và dp[steps][1] là số cách đứng tại 3 đỉnh còn lại sau steps bước.",
        "commentEn": "DP đếm đường đi trên tứ diện: dp[steps][0] là số cách đứng tại đỉnh D và dp[steps][1] là số cách đứng tại 3 đỉnh còn lại sau steps bước.",
        "contestId": 166,
        "index": "E"
      },
      {
        "code": "CF 474D",
        "name": "Flowers",
        "rating": 1500,
        "url": "https://codeforces.com/problemset/problem/474/D",
        "commentVi": "DP tiền xử lý kết hợp Prefix Sum: dp[i] = dp[i-1] + dp[i-k] (ăn 1 hoa đỏ hoặc k hoa trắng). Dùng prefix sum để trả lời mỗi truy vấn đoạn [a, b] trong O(1).",
        "commentEn": "DP tiền xử lý kết hợp Prefix Sum: dp[i] = dp[i-1] + dp[i-k] (ăn 1 hoa đỏ hoặc k hoa trắng). Dùng prefix sum để trả lời mỗi truy vấn đoạn [a, b] trong O(1).",
        "contestId": 474,
        "index": "D"
      },
      {
        "code": "CF 1359B",
        "name": "New Theatre Square",
        "rating": 1000,
        "url": "https://codeforces.com/problemset/problem/1359/B",
        "commentVi": "DP/Greedy trên lưới: So sánh chi phí lát 1 viên gạch 1 × 2 giá y với việc lát 2 viên 1 × 1 giá 2x. Nếu y < 2x, ưu tiên ghép cặp tối đa các ô kề nhau.",
        "commentEn": "DP/Greedy trên lưới: So sánh chi phí lát 1 viên gạch 1 × 2 giá y với việc lát 2 viên 1 × 1 giá 2x. Nếu y < 2x, ưu tiên ghép cặp tối đa các ô kề nhau.",
        "contestId": 1359,
        "index": "B"
      },
      {
        "code": "CF 607A",
        "name": "Chain Reaction",
        "rating": 1600,
        "url": "https://codeforces.com/problemset/problem/607/A",
        "commentVi": "DP kết hợp `std::lower_bound`: Sắp xếp các beacon theo vị trí. dp[i] là số beacon còn sống nếu kích hoạt từ vị trí i: dp[i] = dp[j] + 1 với j là vị trí ngoài tầm hủy.",
        "commentEn": "DP kết hợp `std::lower_bound`: Sắp xếp các beacon theo vị trí. dp[i] là số beacon còn sống nếu kích hoạt từ vị trí i: dp[i] = dp[j] + 1 với j là vị trí ngoài tầm hủy.",
        "contestId": 607,
        "index": "A"
      },
      {
        "code": "CF 1061C",
        "name": "Multiplicity",
        "rating": 1700,
        "url": "https://codeforces.com/problemset/problem/1061/C",
        "commentVi": "DP mảng dp[j]: Số dãy con hợp lệ độ dài j. Với mỗi số a_i, tìm tất cả các ước số của nó và cập nhật dp[d] += dp[d-1] theo thứ tự ước giảm dần.",
        "commentEn": "DP mảng dp[j]: Số dãy con hợp lệ độ dài j. Với mỗi số a_i, tìm tất cả các ước số của nó và cập nhật dp[d] += dp[d-1] theo thứ tự ước giảm dần.",
        "contestId": 1061,
        "index": "C"
      },
      {
        "code": "CF 835D",
        "name": "Palindromic characteristics",
        "rating": 1800,
        "url": "https://codeforces.com/problemset/problem/835/D",
        "commentVi": "DP trên đoạn [l, r]: Đoạn là palindrome cấp k nếu nó là palindrome và nửa đầu là palindrome cấp k-1. Tính toán toàn bộ bảng dp[l][r] trong O(N²).",
        "commentEn": "DP trên đoạn [l, r]: Đoạn là palindrome cấp k nếu nó là palindrome và nửa đầu là palindrome cấp k-1. Tính toán toàn bộ bảng dp[l][r] trong O(N²).",
        "contestId": 835,
        "index": "D"
      }
    ]
  },
  {
    "id": 9,
    "phaseId": 2,
    "nameVi": "SẮP XẾP TÔ-PÔ (TOPOLOGICAL SORT) & ĐỒ THỊ DAG",
    "nameEn": "Topological Sort & Directed Acyclic Graphs (DAG)",
    "tierVi": "Pupil ➔ Specialist (1300 - 1700)",
    "tierEn": "Pupil to Specialist (1300 - 1700)",
    "essenceVi": [
      "Topological Sort sắp xếp các đỉnh của đồ thị có hướng không chu trình (DAG) thành một dãy tuyến tính sao cho với mọi cạnh u \\to v, u luôn đứng trước v.",
      "Hai thuật toán phổ biến: Thuật toán Kahn (bóc tách các đỉnh có bán bậc vào \\text{in-degree} = 0 bằng queue) và DFS (ghi nhận đỉnh theo thứ tự thời điểm kết thúc)."
    ],
    "essenceEn": [
      "Topological Sort sắp xếp các đỉnh của đồ thị có hướng không chu trình (DAG) thành một dãy tuyến tính sao cho với mọi cạnh u \\to v, u luôn đứng trước v.",
      "Hai thuật toán phổ biến: Thuật toán Kahn (bóc tách các đỉnh có bán bậc vào \\text{in-degree} = 0 bằng queue) và DFS (ghi nhận đỉnh theo thứ tự thời điểm kết thúc)."
    ],
    "complexityVi": "Thời gian O(V + E), bộ nhớ O(V + E).",
    "complexityEn": "Thời gian O(V + E), bộ nhớ O(V + E).",
    "blogs": [
      {
        "title": "Topological Sort and DAG Properties",
        "url": "https://codeforces.com/blog/entry/70275"
      }
    ],
    "problems": [
      {
        "code": "CF 510C",
        "name": "Fox And Names",
        "rating": 1500,
        "url": "https://codeforces.com/problemset/problem/510/C",
        "commentVi": "Xây dựng thứ tự từ điển mới: So sánh các cặp từ liền kề để dựng cạnh có hướng giữa các chữ cái. Chạy Topological Sort kiểm tra chu trình và đưa ra thứ tự bảng chữ cái.",
        "commentEn": "Xây dựng thứ tự từ điển mới: So sánh các cặp từ liền kề để dựng cạnh có hướng giữa các chữ cái. Chạy Topological Sort kiểm tra chu trình và đưa ra thứ tự bảng chữ cái.",
        "contestId": 510,
        "index": "C"
      },
      {
        "code": "CF 1385E",
        "name": "Directing Edges",
        "rating": 1800,
        "url": "https://codeforces.com/problemset/problem/1385/E",
        "commentVi": "Định hướng cạnh vô hướng: Chạy Topological Sort trên tập các cạnh có hướng sẵn có để gán chỉ số topo cho mỗi đỉnh. Sau đó định hướng mọi cạnh vô hướng từ bậc nhỏ sang lớn.",
        "commentEn": "Định hướng cạnh vô hướng: Chạy Topological Sort trên tập các cạnh có hướng sẵn có để gán chỉ số topo cho mỗi đỉnh. Sau đó định hướng mọi cạnh vô hướng từ bậc nhỏ sang lớn.",
        "contestId": 1385,
        "index": "E"
      },
      {
        "code": "CF 919D",
        "name": "Substring",
        "rating": 1700,
        "url": "https://codeforces.com/problemset/problem/919/D",
        "commentVi": "Kiểm tra chu trình bằng Topological Sort. Nếu có chu trình in -1; ngược lại DP trên DAG: dp[u][c] lưu số lần xuất hiện nhiều nhất của chữ cái c trên đường đi tới u.",
        "commentEn": "Kiểm tra chu trình bằng Topological Sort. Nếu có chu trình in -1; ngược lại DP trên DAG: dp[u][c] lưu số lần xuất hiện nhiều nhất của chữ cái c trên đường đi tới u.",
        "contestId": 919,
        "index": "D"
      },
      {
        "code": "CF 825E",
        "name": "Minimal Labels",
        "rating": 2000,
        "url": "https://codeforces.com/problemset/problem/825/E",
        "commentVi": "Kỹ thuật Topo ngược với Max-Heap: Để thứ tự từ điển của nhãn nhỏ nhất, ta đảo chiều tất cả các cạnh, tìm đỉnh có bán bậc vào bằng 0 lớn nhất để gán nhãn từ N giảm dần về 1.",
        "commentEn": "Kỹ thuật Topo ngược với Max-Heap: Để thứ tự từ điển của nhãn nhỏ nhất, ta đảo chiều tất cả các cạnh, tìm đỉnh có bán bậc vào bằng 0 lớn nhất để gán nhãn từ N giảm dần về 1.",
        "contestId": 825,
        "index": "E"
      },
      {
        "code": "CF 500A",
        "name": "New Year Transportation",
        "rating": 1000,
        "url": "https://codeforces.com/problemset/problem/500/A",
        "commentVi": "Duyệt trên DAG tuyến tính suy biến: Mỗi cổng dịch chuyển chỉ dẫn tới đúng 1 cổng i + a_i. Bắt đầu từ cổng 1 nhảy bước theo chỉ dẫn cho tới khi ≥ t.",
        "commentEn": "Duyệt trên DAG tuyến tính suy biến: Mỗi cổng dịch chuyển chỉ dẫn tới đúng 1 cổng i + a_i. Bắt đầu từ cổng 1 nhảy bước theo chỉ dẫn cho tới khi ≥ t.",
        "contestId": 500,
        "index": "A"
      },
      {
        "code": "CF 1593E",
        "name": "Gardener and Tree",
        "rating": 1500,
        "url": "https://codeforces.com/problemset/problem/1593/E",
        "commentVi": "Thuật toán Kahn bóc lá trên cây: Đẩy tất cả các đỉnh lá (bậc ≤ 1) vào queue. Mỗi bước BFS loại bỏ 1 lớp lá và giảm bậc các đỉnh kề, lặp lại đúng k vòng.",
        "commentEn": "Thuật toán Kahn bóc lá trên cây: Đẩy tất cả các đỉnh lá (bậc ≤ 1) vào queue. Mỗi bước BFS loại bỏ 1 lớp lá và giảm bậc các đỉnh kề, lặp lại đúng k vòng.",
        "contestId": 1593,
        "index": "E"
      },
      {
        "code": "CF 1100E",
        "name": "Andrew and Taxi",
        "rating": 2100,
        "url": "https://codeforces.com/problemset/problem/1100/E",
        "commentVi": "Chặt nhị phân chi phí lớn nhất C của các cạnh cần đổi hướng. Giữ lại các cạnh có trọng số > C, dùng Topological Sort kiểm tra xem đồ thị có chu trình hay không.",
        "commentEn": "Chặt nhị phân chi phí lớn nhất C của các cạnh cần đổi hướng. Giữ lại các cạnh có trọng số > C, dùng Topological Sort kiểm tra xem đồ thị có chu trình hay không.",
        "contestId": 1100,
        "index": "E"
      },
      {
        "code": "CF 721C",
        "name": "Journey",
        "rating": 2000,
        "url": "https://codeforces.com/problemset/problem/721/C",
        "commentVi": "DP trên DAG: dp[u][len] là thời gian di chuyển ngắn nhất để đi từ đỉnh 1 đến u qua đúng len đỉnh. Duyệt cập nhật theo thứ tự Topological Sort và truy vết đáp án.",
        "commentEn": "DP trên DAG: dp[u][len] là thời gian di chuyển ngắn nhất để đi từ đỉnh 1 đến u qua đúng len đỉnh. Duyệt cập nhật theo thứ tự Topological Sort và truy vết đáp án.",
        "contestId": 721,
        "index": "C"
      },
      {
        "code": "CF 1176E",
        "name": "Cover it!",
        "rating": 1400,
        "url": "https://codeforces.com/problemset/problem/1176/E",
        "commentVi": "Dựng cây khung BFS/DFS và tô màu 2 phía (0 và 1) theo độ sâu. Do tổng số đỉnh là n, số đỉnh mang màu có số lượng ít hơn chắc chắn ≤ ⌊ n/2 ⌋ và luôn bao phủ đồ thị.",
        "commentEn": "Dựng cây khung BFS/DFS và tô màu 2 phía (0 và 1) theo độ sâu. Do tổng số đỉnh là n, số đỉnh mang màu có số lượng ít hơn chắc chắn ≤ ⌊ n/2 ⌋ và luôn bao phủ đồ thị.",
        "contestId": 1176,
        "index": "E"
      },
      {
        "code": "CF 1638D",
        "name": "Big Brush",
        "rating": 1900,
        "url": "https://codeforces.com/problemset/problem/1638/D",
        "commentVi": "Tư duy Topo ngược: Tìm các ô vuông 2 × 2 có cùng màu trên bức tranh kết quả, đẩy vào queue. Khi một ô vuông được xử lý, nó trở thành ô 'vạn năng' (wildcard) khớp với mọi màu.",
        "commentEn": "Tư duy Topo ngược: Tìm các ô vuông 2 × 2 có cùng màu trên bức tranh kết quả, đẩy vào queue. Khi một ô vuông được xử lý, nó trở thành ô 'vạn năng' (wildcard) khớp với mọi màu.",
        "contestId": 1638,
        "index": "D"
      }
    ]
  },
  {
    "id": 10,
    "phaseId": 2,
    "nameVi": "ĐƯỜNG ĐI NGẮN NHẤT (DIJKSTRA, 0-1 BFS, FLOYD-WARSHALL)",
    "nameEn": "Shortest Paths (Dijkstra, 0-1 BFS, Floyd-Warshall)",
    "tierVi": "Specialist ➔ Expert (1400 - 1800)",
    "tierEn": "Specialist to Expert (1400 - 1800)",
    "essenceVi": [
      "Dijkstra: Tìm đường đi ngắn nhất từ 1 nguồn trên đồ thị trọng số không âm bằng Priority Queue trong O((V + E) log V).",
      "0-1 BFS: Đồ thị chỉ có trọng số 0 và 1, dùng `std::deque` đẩy cạnh 0 vào đầu (front) và cạnh 1 vào cuối (back) chạy trong O(V + E).",
      "Floyd-Warshall: Tìm khoảng cách giữa mọi cặp đỉnh trên ma trận kề trong O(V^3)."
    ],
    "essenceEn": [
      "Dijkstra: Tìm đường đi ngắn nhất từ 1 nguồn trên đồ thị trọng số không âm bằng Priority Queue trong O((V + E) log V).",
      "0-1 BFS: Đồ thị chỉ có trọng số 0 và 1, dùng `std::deque` đẩy cạnh 0 vào đầu (front) và cạnh 1 vào cuối (back) chạy trong O(V + E).",
      "Floyd-Warshall: Tìm khoảng cách giữa mọi cặp đỉnh trên ma trận kề trong O(V^3)."
    ],
    "complexityVi": "Dijkstra: O(M log N), 0-1 BFS: O(N + M), Floyd-Warshall: O(N³).",
    "complexityEn": "Dijkstra: O(M log N), 0-1 BFS: O(N + M), Floyd-Warshall: O(N³).",
    "blogs": [
      {
        "title": "Shortest Paths Algorithms and Variants",
        "url": "https://codeforces.com/blog/entry/73618"
      }
    ],
    "problems": [
      {
        "code": "CF 20C",
        "name": "Dijkstra?",
        "rating": 1600,
        "url": "https://codeforces.com/problemset/problem/20/C",
        "commentVi": "Mức thông hiểu: Cài đặt thuật toán Dijkstra chuẩn mực tìm đường đi ngắn nhất từ đỉnh 1 đến n trên đồ thị vô hướng và truy vết đường đi bằng mảng parent.",
        "commentEn": "Mức thông hiểu: Cài đặt thuật toán Dijkstra chuẩn mực tìm đường đi ngắn nhất từ đỉnh 1 đến n trên đồ thị vô hướng và truy vết đường đi bằng mảng parent.",
        "contestId": 20,
        "index": "C"
      },
      {
        "code": "CF 295B",
        "name": "Greg and Graph",
        "rating": 1700,
        "url": "https://codeforces.com/problemset/problem/295/B",
        "commentVi": "Floyd-Warshall đảo ngược: Đề bài yêu cầu xóa đỉnh, ta đổi góc nhìn thành thêm dần từng đỉnh từ cuối lên và cập nhật khoảng cách giữa mọi cặp đỉnh trong O(N²) mỗi bước.",
        "commentEn": "Floyd-Warshall đảo ngược: Đề bài yêu cầu xóa đỉnh, ta đổi góc nhìn thành thêm dần từng đỉnh từ cuối lên và cập nhật khoảng cách giữa mọi cặp đỉnh trong O(N²) mỗi bước.",
        "contestId": 295,
        "index": "B"
      },
      {
        "code": "CF 1063B",
        "name": "Labyrinth",
        "rating": 1700,
        "url": "https://codeforces.com/problemset/problem/1063/B",
        "commentVi": "0-1 BFS trên lưới: Vì di chuyển lên/xuống không tốn tài nguyên rẽ ngang, còn rẽ trái tốn 1 lượt. Trọng số rẽ trái là 1, các hướng khác là 0, tối ưu bằng `std::deque`.",
        "commentEn": "0-1 BFS trên lưới: Vì di chuyển lên/xuống không tốn tài nguyên rẽ ngang, còn rẽ trái tốn 1 lượt. Trọng số rẽ trái là 1, các hướng khác là 0, tối ưu bằng `std::deque`.",
        "contestId": 1063,
        "index": "B"
      },
      {
        "code": "CF 59E",
        "name": "Shortest Path",
        "rating": 1900,
        "url": "https://codeforces.com/problemset/problem/59/E",
        "commentVi": "Dijkstra/BFS mở rộng trạng thái trên đồ thị có cấm bộ 3 đỉnh liên tiếp (a, b, c): Đỉnh trong đồ thị mới là cạnh có hướng (u, v), chuyển trạng thái sang (v, w).",
        "commentEn": "Dijkstra/BFS mở rộng trạng thái trên đồ thị có cấm bộ 3 đỉnh liên tiếp (a, b, c): Đỉnh trong đồ thị mới là cạnh có hướng (u, v), chuyển trạng thái sang (v, w).",
        "contestId": 59,
        "index": "E"
      },
      {
        "code": "CF 449B",
        "name": "Jzzhu and Cities",
        "rating": 1700,
        "url": "https://codeforces.com/problemset/problem/449/B",
        "commentVi": "Dijkstra đồng thời tuyến đường sắt và đường bộ: Ưu tiên đường bộ khi khoảng cách bằng nhau để loại bỏ nhiều tuyến đường sắt thừa thãi nhất có thể.",
        "commentEn": "Dijkstra đồng thời tuyến đường sắt và đường bộ: Ưu tiên đường bộ khi khoảng cách bằng nhau để loại bỏ nhiều tuyến đường sắt thừa thãi nhất có thể.",
        "contestId": 449,
        "index": "B"
      },
      {
        "code": "CF 821D",
        "name": "Okabe and City",
        "rating": 2000,
        "url": "https://codeforces.com/problemset/problem/821/D",
        "commentVi": "0-1 BFS giữa các ô sáng và các hàng/cột: Đi giữa 2 ô sáng kề nhau chi phí 0; thắp sáng 1 hàng hoặc cột để di chuyển chi phí 1.",
        "commentEn": "0-1 BFS giữa các ô sáng và các hàng/cột: Đi giữa 2 ô sáng kề nhau chi phí 0; thắp sáng 1 hàng hoặc cột để di chuyển chi phí 1.",
        "contestId": 821,
        "index": "D"
      },
      {
        "code": "CF 1076D",
        "name": "Edge Deletion",
        "rating": 1800,
        "url": "https://codeforces.com/problemset/problem/1076/D",
        "commentVi": "Cây đường đi ngắn nhất (Shortest Path Tree): Chạy Dijkstra từ đỉnh 1 tạo ra cây SPT. Duyệt BFS trên cây SPT và giữ lại đúng k cạnh đầu tiên được thăm.",
        "commentEn": "Cây đường đi ngắn nhất (Shortest Path Tree): Chạy Dijkstra từ đỉnh 1 tạo ra cây SPT. Duyệt BFS trên cây SPT và giữ lại đúng k cạnh đầu tiên được thăm.",
        "contestId": 1076,
        "index": "D"
      },
      {
        "code": "CF 25C",
        "name": "Roads in Berland",
        "rating": 1800,
        "url": "https://codeforces.com/problemset/problem/25/C",
        "commentVi": "Cập nhật ma trận Floyd-Warshall: Khi xây thêm con đường mới (u, v) có độ dài w, cập nhật lại khoảng cách giữa mọi cặp (i, j) qua công thức \\min(d[i][j], d[i][u] + w + d[v][j]).",
        "commentEn": "Cập nhật ma trận Floyd-Warshall: Khi xây thêm con đường mới (u, v) có độ dài w, cập nhật lại khoảng cách giữa mọi cặp (i, j) qua công thức \\min(d[i][j], d[i][u] + w + d[v][j]).",
        "contestId": 25,
        "index": "C"
      },
      {
        "code": "CF 1433G",
        "name": "Reducing Delivery Cost",
        "rating": 2000,
        "url": "https://codeforces.com/problemset/problem/1433/G",
        "commentVi": "Chạy Dijkstra từ tất cả n đỉnh để có ma trận khoảng cách d[u][v] trong O(N M log N). Thử đặt trọng số của từng cạnh về 0 và tính tổng khoảng cách của k lộ trình.",
        "commentEn": "Chạy Dijkstra từ tất cả n đỉnh để có ma trận khoảng cách d[u][v] trong O(N M log N). Thử đặt trọng số của từng cạnh về 0 và tính tổng khoảng cách của k lộ trình.",
        "contestId": 1433,
        "index": "G"
      },
      {
        "code": "CF 1005F",
        "name": "Berland and the Shortest Path Trees",
        "rating": 1900,
        "url": "https://codeforces.com/problemset/problem/1005/F",
        "commentVi": "BFS tìm khoảng cách từ 1. Với mỗi đỉnh v ≠ 1, thu thập tất cả các cạnh (u, v) thỏa mãn dist[u] + 1 == dist[v]. Sinh các cây SPT bằng phương pháp quay lui.",
        "commentEn": "BFS tìm khoảng cách từ 1. Với mỗi đỉnh v ≠ 1, thu thập tất cả các cạnh (u, v) thỏa mãn dist[u] + 1 == dist[v]. Sinh các cây SPT bằng phương pháp quay lui.",
        "contestId": 1005,
        "index": "F"
      }
    ]
  },
  {
    "id": 11,
    "phaseId": 3,
    "nameVi": "TỔ TIÊN CHUNG GẦN NHẤT (LCA), BINARY LIFTING & EULER TOUR",
    "nameEn": "Lowest Common Ancestor (LCA), Binary Lifting & Euler Tour",
    "tierVi": "Specialist ➔ Expert (1600 - 1900)",
    "tierEn": "Specialist to Expert (1600 - 1900)",
    "essenceVi": [
      "Binary Lifting: Tiền xử lý bảng up[u][j] là tổ tiên thứ 2^j của u trong O(N log N), cho phép nhảy tìm LCA của (u, v) trong O(log N).",
      "Euler Tour: Đánh dấu thời điểm vào (`tin`) và ra (`tout`) của mỗi đỉnh khi DFS. Đỉnh u là tổ tiên của v ⇔ tin[u] ≤ tin[v] AND tout[v] ≤ tout[u]. Đưa các truy vấn trên cây con về truy vấn trên đoạn liên tiếp [tin[u], tout[u]]."
    ],
    "essenceEn": [
      "Binary Lifting: Tiền xử lý bảng up[u][j] là tổ tiên thứ 2^j của u trong O(N log N), cho phép nhảy tìm LCA của (u, v) trong O(log N).",
      "Euler Tour: Đánh dấu thời điểm vào (`tin`) và ra (`tout`) của mỗi đỉnh khi DFS. Đỉnh u là tổ tiên của v ⇔ tin[u] ≤ tin[v] AND tout[v] ≤ tout[u]. Đưa các truy vấn trên cây con về truy vấn trên đoạn liên tiếp [tin[u], tout[u]]."
    ],
    "complexityVi": "Tiền xử lý O(N log N), mỗi truy vấn LCA / khoảng cách O(log N), Euler tour trải phẳng cây trong O(N).",
    "complexityEn": "Tiền xử lý O(N log N), mỗi truy vấn LCA / khoảng cách O(log N), Euler tour trải phẳng cây trong O(N).",
    "blogs": [
      {
        "title": "Binary Lifting and LCA Tutorial",
        "url": "https://codeforces.com/blog/entry/74847"
      },
      {
        "title": "Euler Tour Technique on Trees",
        "url": "https://codeforces.com/blog/entry/63020"
      }
    ],
    "problems": [
      {
        "code": "CF 1304E",
        "name": "1-Trees and Queries",
        "rating": 2000,
        "url": "https://codeforces.com/problemset/problem/1304/E",
        "commentVi": "Dùng LCA tính khoảng cách ngắn nhất giữa hai đỉnh dist(u, v) = depth[u] + depth[v] - 2 × depth[LCA(u, v)]. Kiểm tra 3 đường đi khả thi khi có cạnh tắt (x, y).",
        "commentEn": "Dùng LCA tính khoảng cách ngắn nhất giữa hai đỉnh dist(u, v) = depth[u] + depth[v] - 2 × depth[LCA(u, v)]. Kiểm tra 3 đường đi khả thi khi có cạnh tắt (x, y).",
        "contestId": 1304,
        "index": "E"
      },
      {
        "code": "CF 208E",
        "name": "Blood Cousins",
        "rating": 1800,
        "url": "https://codeforces.com/problemset/problem/208/E",
        "commentVi": "Binary Lifting nhảy lên tổ tiên thứ k của v. Sau đó dùng Euler Tour kết hợp vector lưu các đỉnh theo độ sâu, dùng `std::upper_bound` và `lower_bound` để đếm họ hàng.",
        "commentEn": "Binary Lifting nhảy lên tổ tiên thứ k của v. Sau đó dùng Euler Tour kết hợp vector lưu các đỉnh theo độ sâu, dùng `std::upper_bound` và `lower_bound` để đếm họ hàng.",
        "contestId": 208,
        "index": "E"
      },
      {
        "code": "CF 1062E",
        "name": "Company",
        "rating": 2000,
        "url": "https://codeforces.com/problemset/problem/1062/E",
        "commentVi": "Segment Tree tìm LCA của một tập đỉnh: LCA của một tập là LCA của đỉnh có tin nhỏ nhất và đỉnh có tin lớn nhất. Thử loại bỏ đỉnh có tin min hoặc max.",
        "commentEn": "Segment Tree tìm LCA của một tập đỉnh: LCA của một tập là LCA của đỉnh có tin nhỏ nhất và đỉnh có tin lớn nhất. Thử loại bỏ đỉnh có tin min hoặc max.",
        "contestId": 1062,
        "index": "E"
      },
      {
        "code": "CF 832D",
        "name": "Misha, Scher and Forest",
        "rating": 1800,
        "url": "https://codeforces.com/problemset/problem/832/D",
        "commentVi": "Tìm điểm phân nhánh chung dài nhất của 3 đường đi giữa a, b, c: Độ dài chung của đường đi từ s đến t_1 và t_2 được tính chính xác thông qua hàm LCA của từng cặp.",
        "commentEn": "Tìm điểm phân nhánh chung dài nhất của 3 đường đi giữa a, b, c: Độ dài chung của đường đi từ s đến t_1 và t_2 được tính chính xác thông qua hàm LCA của từng cặp.",
        "contestId": 832,
        "index": "D"
      },
      {
        "code": "CF 519E",
        "name": "A and B and Lecture Rooms",
        "rating": 1700,
        "url": "https://codeforces.com/problemset/problem/519/E",
        "commentVi": "Tìm các đỉnh cách đều a và b: Nếu khoảng cách lẻ thì vô nghiệm. Nếu chẵn, dùng Binary Lifting nhảy lên trung điểm đường đi và đếm kích thước các cây con.",
        "commentEn": "Tìm các đỉnh cách đều a và b: Nếu khoảng cách lẻ thì vô nghiệm. Nếu chẵn, dùng Binary Lifting nhảy lên trung điểm đường đi và đếm kích thước các cây con.",
        "contestId": 519,
        "index": "E"
      },
      {
        "code": "CF 1702G2",
        "name": "Passable Paths (Hard Version)",
        "rating": 1900,
        "url": "https://codeforces.com/problemset/problem/1702/G2",
        "commentVi": "Kiểm tra tập đỉnh có nằm trên 1 đường đi đơn: Chọn đỉnh sâu nhất u, đỉnh sâu nhất không thuộc cây con của u là v. Dùng LCA và Euler Tour kiểm tra toàn bộ tập đỉnh.",
        "commentEn": "Kiểm tra tập đỉnh có nằm trên 1 đường đi đơn: Chọn đỉnh sâu nhất u, đỉnh sâu nhất không thuộc cây con của u là v. Dùng LCA và Euler Tour kiểm tra toàn bộ tập đỉnh.",
        "contestId": 1702,
        "index": "G2"
      },
      {
        "code": "CF 383C",
        "name": "Propagating tree",
        "rating": 1900,
        "url": "https://codeforces.com/problemset/problem/383/C",
        "commentVi": "Euler Tour trải phẳng cây kết hợp chia tầng chẵn/lẻ: Giá trị cộng dồn đan dấu +val và -val theo độ sâu, đưa bài toán về cập nhật đoạn trên Fenwick Tree.",
        "commentEn": "Euler Tour trải phẳng cây kết hợp chia tầng chẵn/lẻ: Giá trị cộng dồn đan dấu +val và -val theo độ sâu, đưa bài toán về cập nhật đoạn trên Fenwick Tree.",
        "contestId": 383,
        "index": "C"
      },
      {
        "code": "CF 609E",
        "name": "Minimum spanning tree for each edge",
        "rating": 2000,
        "url": "https://codeforces.com/problemset/problem/609/E",
        "commentVi": "Dựng cây khung nhỏ nhất (MST). Khi thêm một cạnh (u, v) có trọng số w, chu trình được tạo ra; dùng Binary Lifting tìm cạnh lớn nhất trên đường đi giữa u và v để thay thế.",
        "commentEn": "Dựng cây khung nhỏ nhất (MST). Khi thêm một cạnh (u, v) có trọng số w, chu trình được tạo ra; dùng Binary Lifting tìm cạnh lớn nhất trên đường đi giữa u và v để thay thế.",
        "contestId": 609,
        "index": "E"
      },
      {
        "code": "CF 1328E",
        "name": "Tree Queries",
        "rating": 1700,
        "url": "https://codeforces.com/problemset/problem/1328/E",
        "commentVi": "Thay thế mỗi đỉnh v bằng cha của nó parent[v] (trừ gốc). Dùng Euler Tour kiểm tra xem tất cả các đỉnh này có phải là tổ tiên của đỉnh có độ sâu lớn nhất trong tập truy vấn không.",
        "commentEn": "Thay thế mỗi đỉnh v bằng cha của nó parent[v] (trừ gốc). Dùng Euler Tour kiểm tra xem tất cả các đỉnh này có phải là tổ tiên của đỉnh có độ sâu lớn nhất trong tập truy vấn không.",
        "contestId": 1328,
        "index": "E"
      },
      {
        "code": "CF 916E",
        "name": "Jamie and Tree",
        "rating": 2400,
        "url": "https://codeforces.com/problemset/problem/916/E",
        "commentVi": "LCA trên cây có gốc thay đổi động: LCA mới của (u, v) với gốc root là đỉnh có độ sâu lớn nhất trong 3 đỉnh LCA(u, v), LCA(u, root), LCA(v, root).",
        "commentEn": "LCA trên cây có gốc thay đổi động: LCA mới của (u, v) với gốc root là đỉnh có độ sâu lớn nhất trong 3 đỉnh LCA(u, v), LCA(u, root), LCA(v, root).",
        "contestId": 916,
        "index": "E"
      }
    ]
  },
  {
    "id": 12,
    "phaseId": 3,
    "nameVi": "QUY HOẠCH ĐỘNG TRÊN CÂY & KỸ THUẬT ĐỔI GỐC (TREE DP & REROOTING)",
    "nameEn": "Tree DP & Rerooting Technique",
    "tierVi": "Specialist ➔ Expert (1600 - 1900)",
    "tierEn": "Specialist to Expert (1600 - 1900)",
    "essenceVi": [
      "Tree DP cơ bản: Tính toán giá trị của nút cha dựa trên các nút con bằng cách duyệt hậu thứ tự (Post-order DFS).",
      "Kỹ thuật Rerooting (Đổi gốc): DFS lần 1 tính nghiệm khi chọn gốc là 1; DFS lần 2 truyền kết quả từ cha xuống con để cập nhật đáp án cho mọi đỉnh làm gốc trong O(N) tổng thể."
    ],
    "essenceEn": [
      "Tree DP cơ bản: Tính toán giá trị của nút cha dựa trên các nút con bằng cách duyệt hậu thứ tự (Post-order DFS).",
      "Kỹ thuật Rerooting (Đổi gốc): DFS lần 1 tính nghiệm khi chọn gốc là 1; DFS lần 2 truyền kết quả từ cha xuống con để cập nhật đáp án cho mọi đỉnh làm gốc trong O(N) tổng thể."
    ],
    "complexityVi": "Cả 2 lượt DFS đều chạy trong thời gian tuyến tính O(N).",
    "complexityEn": "Cả 2 lượt DFS đều chạy trong thời gian tuyến tính O(N).",
    "blogs": [
      {
        "title": "Tree DP Tutorial and Rerooting Technique",
        "url": "https://codeforces.com/blog/entry/20935"
      },
      {
        "title": "Rerooting DP Made Easy by Benq",
        "url": "https://codeforces.com/blog/entry/68288"
      }
    ],
    "problems": [
      {
        "code": "CF 1187E",
        "name": "Tree Painting",
        "rating": 2100,
        "url": "https://codeforces.com/problemset/problem/1187/E",
        "commentVi": "Rerooting DP kinh điển: DFS 1 tính sz[u] và tổng điểm dp[1]. DFS 2 khi chuyển gốc từ u sang con v, điểm thay đổi chính xác dp[v] = dp[u] + (N - 2 × sz[v]).",
        "commentEn": "Rerooting DP kinh điển: DFS 1 tính sz[u] và tổng điểm dp[1]. DFS 2 khi chuyển gốc từ u sang con v, điểm thay đổi chính xác dp[v] = dp[u] + (N - 2 × sz[v]).",
        "contestId": 1187,
        "index": "E"
      },
      {
        "code": "CF 1324F",
        "name": "Maximum White Subtree",
        "rating": 1800,
        "url": "https://codeforces.com/problemset/problem/1324/F",
        "commentVi": "Tìm cây con liên thông chứa đỉnh u có chênh lệch trắng - đen lớn nhất. DFS 1 tính dp[u] = val[u] + ∑ \\max(0, dp[v]). DFS 2 đẩy phần đóng góp từ cha xuống con.",
        "commentEn": "Tìm cây con liên thông chứa đỉnh u có chênh lệch trắng - đen lớn nhất. DFS 1 tính dp[u] = val[u] + ∑ \\max(0, dp[v]). DFS 2 đẩy phần đóng góp từ cha xuống con.",
        "contestId": 1324,
        "index": "F"
      },
      {
        "code": "CF 219D",
        "name": "Choosing Capital for Treeland",
        "rating": 1600,
        "url": "https://codeforces.com/problemset/problem/219/D",
        "commentVi": "Rerooting đếm số cạnh cần đảo chiều: DFS 1 tính số cạnh ngược hướng đi từ gốc 1. DFS 2 khi dời gốc từ u sang v, nếu cạnh là u \\to v thì tăng 1, ngược lại giảm 1.",
        "commentEn": "Rerooting đếm số cạnh cần đảo chiều: DFS 1 tính số cạnh ngược hướng đi từ gốc 1. DFS 2 khi dời gốc từ u sang v, nếu cạnh là u \\to v thì tăng 1, ngược lại giảm 1.",
        "contestId": 219,
        "index": "D"
      },
      {
        "code": "CF 161D",
        "name": "Distance in Tree",
        "rating": 1800,
        "url": "https://codeforces.com/problemset/problem/161/D",
        "commentVi": "Tree DP: dp[u][d] là số đỉnh ở cây con gốc u có khoảng cách d tới u. Gộp thông tin từ các cây con của u để đếm số cặp đỉnh có khoảng cách đúng bằng k trong O(N × k).",
        "commentEn": "Tree DP: dp[u][d] là số đỉnh ở cây con gốc u có khoảng cách d tới u. Gộp thông tin từ các cây con của u để đếm số cặp đỉnh có khoảng cách đúng bằng k trong O(N × k).",
        "contestId": 161,
        "index": "D"
      },
      {
        "code": "CF 337D",
        "name": "Book Evil",
        "rating": 2000,
        "url": "https://codeforces.com/problemset/problem/337/D",
        "commentVi": "Tree DP tìm khoảng cách xa nhất tới các quỷ: Lưu 2 khoảng cách lớn nhất trong cây con của u, sau đó DFS 2 truyền khoảng cách xa nhất ngoài cây con của u xuống.",
        "commentEn": "Tree DP tìm khoảng cách xa nhất tới các quỷ: Lưu 2 khoảng cách lớn nhất trong cây con của u, sau đó DFS 2 truyền khoảng cách xa nhất ngoài cây con của u xuống.",
        "contestId": 337,
        "index": "D"
      },
      {
        "code": "CF 1092F",
        "name": "Tree with Maximum Cost",
        "rating": 1800,
        "url": "https://codeforces.com/problemset/problem/1092/F",
        "commentVi": "Rerooting tính tổng ∑ a_v × dist(u, v): Khi chuyển gốc từ u sang v, tổng trọng số cây con của v tiến lại gần 1 bước (-sum[v]), phần còn lại xa hơn 1 bước (+ (total - sum[v])).",
        "commentEn": "Rerooting tính tổng ∑ a_v × dist(u, v): Khi chuyển gốc từ u sang v, tổng trọng số cây con của v tiến lại gần 1 bước (-sum[v]), phần còn lại xa hơn 1 bước (+ (total - sum[v])).",
        "contestId": 1092,
        "index": "F"
      },
      {
        "code": "CF 960E",
        "name": "Alternating Tree Paths",
        "rating": 2100,
        "url": "https://codeforces.com/problemset/problem/960/E",
        "commentVi": "Tree DP đếm tổng giá trị đường đi đan dấu chẵn/lẻ: Đếm số lượng đường đi có độ dài chẵn và lẻ xuất phát từ u tới các nút con để tính đóng góp của mỗi nút u vào kết quả.",
        "commentEn": "Tree DP đếm tổng giá trị đường đi đan dấu chẵn/lẻ: Đếm số lượng đường đi có độ dài chẵn và lẻ xuất phát từ u tới các nút con để tính đóng góp của mỗi nút u vào kết quả.",
        "contestId": 960,
        "index": "E"
      },
      {
        "code": "CF 1153D",
        "name": "Serval and Rooted Tree",
        "rating": 1700,
        "url": "https://codeforces.com/problemset/problem/1153/D",
        "commentVi": "Tree DP: Với nút Max, dp[u] = \\min_{v} dp[v] (chỉ cần tối ưu 1 nhánh con). Với nút Min, dp[u] = ∑_{v} dp[v] (phải gánh chịu tổn thất của tất cả các nhánh con).",
        "commentEn": "Tree DP: Với nút Max, dp[u] = \\min_{v} dp[v] (chỉ cần tối ưu 1 nhánh con). Với nút Min, dp[u] = ∑_{v} dp[v] (phải gánh chịu tổn thất của tất cả các nhánh con).",
        "contestId": 1153,
        "index": "D"
      },
      {
        "code": "CF 1406C",
        "name": "Link Cut Centroids",
        "rating": 1600,
        "url": "https://codeforces.com/problemset/problem/1406/C",
        "commentVi": "Tìm trọng tâm của cây bằng Tree DP kích thước cây con. Nếu cây có 2 trọng tâm C_1, C_2, cắt một lá thuộc nhánh C_1 rồi nối lại vào C_2 để biến C_1 thành trọng tâm duy nhất.",
        "commentEn": "Tìm trọng tâm của cây bằng Tree DP kích thước cây con. Nếu cây có 2 trọng tâm C_1, C_2, cắt một lá thuộc nhánh C_1 rồi nối lại vào C_2 để biến C_1 thành trọng tâm duy nhất.",
        "contestId": 1406,
        "index": "C"
      },
      {
        "code": "CF 1528A",
        "name": "Parsa's Humongous Tree",
        "rating": 1600,
        "url": "https://codeforces.com/problemset/problem/1528/A",
        "commentVi": "Tree DP 2 trạng thái: Giá trị tối ưu tại mỗi đỉnh chỉ có thể là biên trái l_u hoặc biên phải r_u. dp[u][0/1] tính tổng chênh lệch lớn nhất khi gán nhãn cho cả cây con.",
        "commentEn": "Tree DP 2 trạng thái: Giá trị tối ưu tại mỗi đỉnh chỉ có thể là biên trái l_u hoặc biên phải r_u. dp[u][0/1] tính tổng chênh lệch lớn nhất khi gán nhãn cho cả cây con.",
        "contestId": 1528,
        "index": "A"
      }
    ]
  },
  {
    "id": 13,
    "phaseId": 3,
    "nameVi": "SỐ HỌC MODULAR & TỔ HỢP NÂNG CAO (COMBINATORICS & NUMBER THEORY)",
    "nameEn": "Modular Arithmetic & Combinatorics (Stars and Bars, PIE)",
    "tierVi": "Specialist ➔ Expert (1600 - 2000)",
    "tierEn": "Specialist to Expert (1600 - 2000)",
    "essenceVi": [
      "Tính toán tổ hợp C(n, k) mod p bằng tiền xử lý giai thừa fac[n] và nghịch đảo modulo invFac[n] qua định lý Fermat nhỏ: a^{p-2} \\equiv a^{-1} mod p.",
      "Bài toán chia kẹo Euler (Stars and Bars): Số cách chia n đồ vật giống nhau cho k người là C(n+k-1, k-1). Định lý Bao hàm loại trừ (Principle of Inclusion-Exclusion - PIE)."
    ],
    "essenceEn": [
      "Tính toán tổ hợp C(n, k) mod p bằng tiền xử lý giai thừa fac[n] và nghịch đảo modulo invFac[n] qua định lý Fermat nhỏ: a^{p-2} \\equiv a^{-1} mod p.",
      "Bài toán chia kẹo Euler (Stars and Bars): Số cách chia n đồ vật giống nhau cho k người là C(n+k-1, k-1). Định lý Bao hàm loại trừ (Principle of Inclusion-Exclusion - PIE)."
    ],
    "complexityVi": "Tiền xử lý giai thừa O(N), mỗi truy vấn tổ hợp O(1). PIE với K điều kiện mất O(2^K).",
    "complexityEn": "Tiền xử lý giai thừa O(N), mỗi truy vấn tổ hợp O(1). PIE với K điều kiện mất O(2^K).",
    "blogs": [
      {
        "title": "Combinatorics and Inverses on Codeforces",
        "url": "https://codeforces.com/blog/entry/54503"
      },
      {
        "title": "Principle of Inclusion-Exclusion Tutorial",
        "url": "https://codeforces.com/blog/entry/64625"
      }
    ],
    "problems": [
      {
        "code": "CF 300C",
        "name": "Beautiful Numbers",
        "rating": 1600,
        "url": "https://codeforces.com/problemset/problem/300/C",
        "commentVi": "Duyệt số lần xuất hiện của chữ số a (gọi là i lần) thì chữ số b xuất hiện n - i lần. Nếu tổng các chữ số là số đẹp, cộng C(n, i) (mod 10⁹+7).",
        "commentEn": "Duyệt số lần xuất hiện của chữ số a (gọi là i lần) thì chữ số b xuất hiện n - i lần. Nếu tổng các chữ số là số đẹp, cộng C(n, i) (mod 10⁹+7).",
        "contestId": 300,
        "index": "C"
      },
      {
        "code": "CF 559C",
        "name": "Gerald and Giant Chess",
        "rating": 2000,
        "url": "https://codeforces.com/problemset/problem/559/C",
        "commentVi": "DP Bao hàm loại trừ: Sắp xếp các ô cấm theo tọa độ tăng dần. dp[i] là số đường đi từ (1, 1) đến ô cấm thứ i mà không đi qua bất kỳ ô cấm nào trước đó.",
        "commentEn": "DP Bao hàm loại trừ: Sắp xếp các ô cấm theo tọa độ tăng dần. dp[i] là số đường đi từ (1, 1) đến ô cấm thứ i mà không đi qua bất kỳ ô cấm nào trước đó.",
        "contestId": 559,
        "index": "C"
      },
      {
        "code": "CF 131C",
        "name": "The World is a Theatre",
        "rating": 1300,
        "url": "https://codeforces.com/problemset/problem/131/C",
        "commentVi": "Mức cơ bản: Duyệt số nam i từ 4 đến n, số nữ còn lại là t - i ≥ 1. Tính số cách chọn bằng công thức tổ hợp C(n, i) × C(m, t-i).",
        "commentEn": "Mức cơ bản: Duyệt số nam i từ 4 đến n, số nữ còn lại là t - i ≥ 1. Tính số cách chọn bằng công thức tổ hợp C(n, i) × C(m, t-i).",
        "contestId": 131,
        "index": "C"
      },
      {
        "code": "CF 451E",
        "name": "Devu and Flowers",
        "rating": 2400,
        "url": "https://codeforces.com/problemset/problem/451/E",
        "commentVi": "Stars and Bars kết hợp PIE: Dùng Bitmask 2^n đại diện cho tập các loại hoa bị lấy vượt quá giới hạn f_i, áp dụng công thức bù trừ với số mũ lớn qua nghịch đảo modular.",
        "commentEn": "Stars and Bars kết hợp PIE: Dùng Bitmask 2^n đại diện cho tập các loại hoa bị lấy vượt quá giới hạn f_i, áp dụng công thức bù trừ với số mũ lớn qua nghịch đảo modular.",
        "contestId": 451,
        "index": "E"
      },
      {
        "code": "CF 1359E",
        "name": "Modular Stability",
        "rating": 2000,
        "url": "https://codeforces.com/problemset/problem/1359/E",
        "commentVi": "Điều kiện ổn định: Mọi số trong dãy đều phải là bội số của số nhỏ nhất x. Số lượng bội số của x ≤ n là ⌊ n/x ⌋, số cách chọn k-1 số còn lại là C(⌊ n/x ⌋ - 1, k-1).",
        "commentEn": "Điều kiện ổn định: Mọi số trong dãy đều phải là bội số của số nhỏ nhất x. Số lượng bội số của x ≤ n là ⌊ n/x ⌋, số cách chọn k-1 số còn lại là C(⌊ n/x ⌋ - 1, k-1).",
        "contestId": 1359,
        "index": "E"
      },
      {
        "code": "CF 895C",
        "name": "Square Subsets",
        "rating": 2000,
        "url": "https://codeforces.com/problemset/problem/895/C",
        "commentVi": "Tích là số chính phương khi mọi số mũ nguyên tố đều chẵn. Có 19 số nguyên tố ≤ 70, biểu diễn mỗi số thành bitmask 19 bit chẵn lẻ, quy về bài toán DP Bitmask hoặc Linear Basis.",
        "commentEn": "Tích là số chính phương khi mọi số mũ nguyên tố đều chẵn. Có 19 số nguyên tố ≤ 70, biểu diễn mỗi số thành bitmask 19 bit chẵn lẻ, quy về bài toán DP Bitmask hoặc Linear Basis.",
        "contestId": 895,
        "index": "C"
      },
      {
        "code": "CF 1512G",
        "name": "Short Task",
        "rating": 1700,
        "url": "https://codeforces.com/problemset/problem/1512/G",
        "commentVi": "Dùng sàng kiểu Eratosthenes tính tổng các ước \\sigma(x) cho toàn bộ các số đến 10⁷ trong O(N log N), sau đó ghi nhận giá trị x nhỏ nhất có \\sigma(x) = c.",
        "commentEn": "Dùng sàng kiểu Eratosthenes tính tổng các ước \\sigma(x) cho toàn bộ các số đến 10⁷ trong O(N log N), sau đó ghi nhận giá trị x nhỏ nhất có \\sigma(x) = c.",
        "contestId": 1512,
        "index": "G"
      },
      {
        "code": "CF 1278D",
        "name": "Segment Tree?",
        "rating": 1900,
        "url": "https://codeforces.com/problemset/problem/1278/D",
        "commentVi": "Đồ thị tạo bởi các đoạn giao nhau là một cây ⇔ có đúng n-1 cạnh và không có chu trình. Duyệt quét dòng và dừng ngay khi số cạnh vượt quá n-1.",
        "commentEn": "Đồ thị tạo bởi các đoạn giao nhau là một cây ⇔ có đúng n-1 cạnh và không có chu trình. Duyệt quét dòng và dừng ngay khi số cạnh vượt quá n-1.",
        "contestId": 1278,
        "index": "D"
      },
      {
        "code": "CF 1420C2",
        "name": "Pokémon Army (Hard Version)",
        "rating": 1800,
        "url": "https://codeforces.com/problemset/problem/1420/C2",
        "commentVi": "Nhận xét cực trị địa phương: Tổng đan dấu tối đa chính là tổng các đỉnh cực đại trừ đi các đỉnh cực tiểu cục bộ. Khi hoán đổi 2 phần tử, chỉ cập nhật lại các vị trí lân cận.",
        "commentEn": "Nhận xét cực trị địa phương: Tổng đan dấu tối đa chính là tổng các đỉnh cực đại trừ đi các đỉnh cực tiểu cục bộ. Khi hoán đổi 2 phần tử, chỉ cập nhật lại các vị trí lân cận.",
        "contestId": 1420,
        "index": "C2"
      },
      {
        "code": "CF 1535E",
        "name": "Gold Transfer",
        "rating": 2100,
        "url": "https://codeforces.com/problemset/problem/1535/E",
        "commentVi": "Binary Lifting trên cây: Nhảy lên tổ tiên cao nhất còn vàng để mua với giá rẻ nhất theo chiến lược tham lam, lặp lại cho đến khi mua đủ hoặc hết tiền.",
        "commentEn": "Binary Lifting trên cây: Nhảy lên tổ tiên cao nhất còn vàng để mua với giá rẻ nhất theo chiến lược tham lam, lặp lại cho đến khi mua đủ hoặc hết tiền.",
        "contestId": 1535,
        "index": "E"
      }
    ]
  },
  {
    "id": 14,
    "phaseId": 3,
    "nameVi": "QUY HOẠCH ĐỘNG BITMASK & SOS DP (SUM OVER SUBSETS)",
    "nameEn": "Bitmask DP & Sum Over Subsets (SOS DP)",
    "tierVi": "Expert ➔ Candidate Master (1700 - 2100)",
    "tierEn": "Expert ➔ Candidate Master (1700 - 2100)",
    "essenceVi": [
      "Bitmask DP: Sử dụng số nguyên biểu diễn tập hợp con của tập có N phần tử (N ≤ 20), độ phức tạp O(2ᴺ × N).",
      "SOS DP: Tính tổng hàm f(mask) trên mọi tập con sub \\subseteq mask bằng cách cập nhật lần lượt qua từng bit trong O(N × 2ᴺ) thay vì O(3^N)."
    ],
    "essenceEn": [
      "Bitmask DP: Sử dụng số nguyên biểu diễn tập hợp con của tập có N phần tử (N ≤ 20), độ phức tạp O(2ᴺ × N).",
      "SOS DP: Tính tổng hàm f(mask) trên mọi tập con sub \\subseteq mask bằng cách cập nhật lần lượt qua từng bit trong O(N × 2ᴺ) thay vì O(3^N)."
    ],
    "complexityVi": "Bitmask DP: O(2ᴺ × N) hoặc O(3^N), SOS DP: O(N × 2ᴺ).",
    "complexityEn": "Bitmask DP: O(2ᴺ × N) hoặc O(3^N), SOS DP: O(N × 2ᴺ).",
    "blogs": [
      {
        "title": "SOS Dynamic Programming Tutorial",
        "url": "https://codeforces.com/blog/entry/45223"
      },
      {
        "title": "Bitmask DP from beginner to expert",
        "url": "https://codeforces.com/blog/entry/18169"
      }
    ],
    "problems": [
      {
        "code": "CF 165E",
        "name": "Compatible Numbers",
        "rating": 2200,
        "url": "https://codeforces.com/problemset/problem/165/E",
        "commentVi": "Điều kiện a \\,\\&\\, b = 0 ⇔ b \\subseteq (~ a). Dùng SOS DP trên mảng boolean kích thước 2^{22} để tìm một số bất kỳ trong mảng là tập con của phần bù bitmask.",
        "commentEn": "Điều kiện a \\,\\&\\, b = 0 ⇔ b \\subseteq (~ a). Dùng SOS DP trên mảng boolean kích thước 2^{22} để tìm một số bất kỳ trong mảng là tập con của phần bù bitmask.",
        "contestId": 165,
        "index": "E"
      },
      {
        "code": "CF 580D",
        "name": "Kefa and Dishes",
        "rating": 1800,
        "url": "https://codeforces.com/problemset/problem/580/D",
        "commentVi": "Bitmask DP dạng TSP (Người du lịch): dp[mask][last] là điểm thưởng tối đa khi đã ăn tập món trong mask và món ăn gần nhất là last. Độ phức tạp O(2^n × n^2) với n ≤ 18.",
        "commentEn": "Bitmask DP dạng TSP (Người du lịch): dp[mask][last] là điểm thưởng tối đa khi đã ăn tập món trong mask và món ăn gần nhất là last. Độ phức tạp O(2^n × n^2) với n ≤ 18.",
        "contestId": 580,
        "index": "D"
      },
      {
        "code": "CF 1209E2",
        "name": "Rotate Columns (hard version)",
        "rating": 2400,
        "url": "https://codeforces.com/problemset/problem/1209/E2",
        "commentVi": "Vì số hàng n ≤ 12, chỉ có tối đa n cột có giá trị lớn nhất là đáng quan tâm. Tiền xử lý giá trị cực đại khi dịch chuyển vòng tròn cho mỗi cột, sau đó chạy Bitmask DP qua các cột.",
        "commentEn": "Vì số hàng n ≤ 12, chỉ có tối đa n cột có giá trị lớn nhất là đáng quan tâm. Tiền xử lý giá trị cực đại khi dịch chuyển vòng tròn cho mỗi cột, sau đó chạy Bitmask DP qua các cột.",
        "contestId": 1209,
        "index": "E2"
      },
      {
        "code": "CF 1234F",
        "name": "Yet Another Substring Reverse",
        "rating": 2300,
        "url": "https://codeforces.com/problemset/problem/1234/F",
        "commentVi": "Chuỗi con không có ký tự trùng nhau có mask các bit độ dài ≤ 20. Dùng SOS DP tìm độ dài chuỗi con dài nhất là tập con của mọi mask, sau đó ghép cặp mask và ~ mask.",
        "commentEn": "Chuỗi con không có ký tự trùng nhau có mask các bit độ dài ≤ 20. Dùng SOS DP tìm độ dài chuỗi con dài nhất là tập con của mọi mask, sau đó ghép cặp mask và ~ mask.",
        "contestId": 1234,
        "index": "F"
      },
      {
        "code": "CF 453B",
        "name": "Little Elephant and Array",
        "rating": 2200,
        "url": "https://codeforces.com/problemset/problem/453/B",
        "commentVi": "Vì b_i < 60, chỉ có 16 số nguyên tố nhỏ hơn 60. Bitmask DP lưu tập các ước nguyên tố đã được sử dụng: dp[i][mask] tìm mảng nguyên tố cùng nhau có tổng chênh lệch nhỏ nhất.",
        "commentEn": "Vì b_i < 60, chỉ có 16 số nguyên tố nhỏ hơn 60. Bitmask DP lưu tập các ước nguyên tố đã được sử dụng: dp[i][mask] tìm mảng nguyên tố cùng nhau có tổng chênh lệch nhỏ nhất.",
        "contestId": 453,
        "index": "B"
      },
      {
        "code": "CF 475D",
        "name": "CGCDSSQ",
        "rating": 2000,
        "url": "https://codeforces.com/problemset/problem/475/D",
        "commentVi": "Số lượng giá trị GCD khác nhau của các tiền tố kết thúc tại một vị trí tối đa là log_2(\\max A). Duy trì danh sách các cặp (gcd, count) và cập nhật dồn qua từng bước.",
        "commentEn": "Số lượng giá trị GCD khác nhau của các tiền tố kết thúc tại một vị trí tối đa là log_2(\\max A). Duy trì danh sách các cặp (gcd, count) và cập nhật dồn qua từng bước.",
        "contestId": 475,
        "index": "D"
      },
      {
        "code": "CF 1556D",
        "name": "Take a Guess",
        "rating": 1800,
        "url": "https://codeforces.com/problemset/problem/1556/D",
        "commentVi": "Đẳng thức bit toán học: a + b = (a \\,\\&\\, b) + (a \\mid b). Hỏi 3 cặp đỉnh đầu tiên để giải hệ 3 phương trình tìm a, b, c, sau đó tìm toàn bộ mảng còn lại.",
        "commentEn": "Đẳng thức bit toán học: a + b = (a \\,\\&\\, b) + (a \\mid b). Hỏi 3 cặp đỉnh đầu tiên để giải hệ 3 phương trình tìm a, b, c, sau đó tìm toàn bộ mảng còn lại.",
        "contestId": 1556,
        "index": "D"
      },
      {
        "code": "CF 1043F",
        "name": "Make It Connected",
        "rating": 2100,
        "url": "https://codeforces.com/problemset/problem/1043/F",
        "commentVi": "Tìm số phần tử ít nhất có GCD bằng 1. Đáp án luôn ≤ 7. Dùng DP kết hợp nghịch đảo Mobius hoặc SOS DP đếm số cách chọn tập con có GCD bằng 1.",
        "commentEn": "Tìm số phần tử ít nhất có GCD bằng 1. Đáp án luôn ≤ 7. Dùng DP kết hợp nghịch đảo Mobius hoặc SOS DP đếm số cách chọn tập con có GCD bằng 1.",
        "contestId": 1043,
        "index": "F"
      },
      {
        "code": "CF 808G",
        "name": "Anthem of Europe",
        "rating": 2400,
        "url": "https://codeforces.com/problemset/problem/808/G",
        "commentVi": "DP kết hợp KMP: dp[i][j] là số lần xuất hiện tối đa của xâu T khi duyệt tới ký tự i của S và đang khớp được tiền tố độ dài j của T.",
        "commentEn": "DP kết hợp KMP: dp[i][j] là số lần xuất hiện tối đa của xâu T khi duyệt tới ký tự i của S và đang khớp được tiền tố độ dài j của T.",
        "contestId": 808,
        "index": "G"
      },
      {
        "code": "CF 38E",
        "name": "Let's Go Rolling!",
        "rating": 1700,
        "url": "https://codeforces.com/problemset/problem/38/E",
        "commentVi": "Sắp xếp tọa độ tăng dần. dp[i][j] là chi phí tối thiểu cho i viên bi đầu tiên khi viên bi gần nhất được ghim lại là viên thứ j.",
        "commentEn": "Sắp xếp tọa độ tăng dần. dp[i][j] là chi phí tối thiểu cho i viên bi đầu tiên khi viên bi gần nhất được ghim lại là viên thứ j.",
        "contestId": 38,
        "index": "E"
      }
    ]
  },
  {
    "id": 15,
    "phaseId": 3,
    "nameVi": "CÂY FENWICK (BIT) & SEGMENT TREE CƠ BẢN (POINT UPDATE, RANGE QUERY)",
    "nameEn": "Fenwick Tree (BIT) & Basic Segment Tree",
    "tierVi": "Specialist ➔ Expert (1500 - 1900)",
    "tierEn": "Specialist to Expert (1500 - 1900)",
    "essenceVi": [
      "Fenwick Tree (BIT): Cấu trúc mảng 1D tính tổng tiền tố và cập nhật phần tử dựa trên thao tác bit `i & (-i)`, cài đặt chỉ 10 dòng, bộ nhớ O(N).",
      "Segment Tree cơ bản: Cây nhị phân quản lý đoạn con, hỗ trợ cập nhật 1 điểm và truy vấn hàm kết hợp (Sum, Min, Max, GCD) trên đoạn [L, R] trong O(log N)."
    ],
    "essenceEn": [
      "Fenwick Tree (BIT): Cấu trúc mảng 1D tính tổng tiền tố và cập nhật phần tử dựa trên thao tác bit `i & (-i)`, cài đặt chỉ 10 dòng, bộ nhớ O(N).",
      "Segment Tree cơ bản: Cây nhị phân quản lý đoạn con, hỗ trợ cập nhật 1 điểm và truy vấn hàm kết hợp (Sum, Min, Max, GCD) trên đoạn [L, R] trong O(log N)."
    ],
    "complexityVi": "Dựng cây O(N), cập nhật 1 điểm O(log N), truy vấn đoạn O(log N).",
    "complexityEn": "Dựng cây O(N), cập nhật 1 điểm O(log N), truy vấn đoạn O(log N).",
    "blogs": [
      {
        "title": "Fenwick Tree Tutorial with visual animations",
        "url": "https://codeforces.com/blog/entry/61364"
      },
      {
        "title": "Segment Tree for Beginners by PrinceOfPersia",
        "url": "https://codeforces.com/blog/entry/18051"
      }
    ],
    "problems": [
      {
        "code": "CF 61E",
        "name": "Enemy is weak",
        "rating": 1600,
        "url": "https://codeforces.com/problemset/problem/61/E",
        "commentVi": "Đếm bộ 3 nghịch thế a_i > a_j > a_k: Nén tọa độ, dùng 2 cây Fenwick: một cây đếm số phần tử lớn hơn bên trái và một cây đếm số phần tử nhỏ hơn bên phải.",
        "commentEn": "Đếm bộ 3 nghịch thế a_i > a_j > a_k: Nén tọa độ, dùng 2 cây Fenwick: một cây đếm số phần tử lớn hơn bên trái và một cây đếm số phần tử nhỏ hơn bên phải.",
        "contestId": 61,
        "index": "E"
      },
      {
        "code": "CF 339D",
        "name": "Xenia and Bit Operations",
        "rating": 1400,
        "url": "https://codeforces.com/problemset/problem/339/D",
        "commentVi": "Segment tree có phép toán xen kẽ: Tầng đáy thực hiện phép OR, tầng kế thực hiện XOR, xen kẽ liên tục cho tới gốc.",
        "commentEn": "Segment tree có phép toán xen kẽ: Tầng đáy thực hiện phép OR, tầng kế thực hiện XOR, xen kẽ liên tục cho tới gốc.",
        "contestId": 339,
        "index": "D"
      },
      {
        "code": "CF 459D",
        "name": "Pashmak and Parmida's problem",
        "rating": 1800,
        "url": "https://codeforces.com/problemset/problem/459/D",
        "commentVi": "Tính tần suất tiền tố f(1, i, a_i) và hậu tố f(j, n, a_j). Bài toán quy về đếm cặp nghịch thế pre[i] > suf[j] với i < j, giải bằng Fenwick Tree.",
        "commentEn": "Tính tần suất tiền tố f(1, i, a_i) và hậu tố f(j, n, a_j). Bài toán quy về đếm cặp nghịch thế pre[i] > suf[j] với i < j, giải bằng Fenwick Tree.",
        "contestId": 459,
        "index": "D"
      },
      {
        "code": "CF 380C",
        "name": "Sereja and Brackets",
        "rating": 2000,
        "url": "https://codeforces.com/problemset/problem/380/C",
        "commentVi": "Segment Tree gộp thông tin ngoặc đúng: Mỗi nút lưu số ngoặc đúng optimal, số ngoặc mở dư thừa open, số ngoặc đóng dư thừa close.",
        "commentEn": "Segment Tree gộp thông tin ngoặc đúng: Mỗi nút lưu số ngoặc đúng optimal, số ngoặc mở dư thừa open, số ngoặc đóng dư thừa close.",
        "contestId": 380,
        "index": "C"
      },
      {
        "code": "CF 474F",
        "name": "Ant colony",
        "rating": 1900,
        "url": "https://codeforces.com/problemset/problem/474/F",
        "commentVi": "Segment Tree lưu gcd đoạn và giá trị nhỏ nhất cùng tần suất của nó. Một chú kiến sống sót khi và chỉ khi giá trị của nó bằng đúng gcd của cả đoạn.",
        "commentEn": "Segment Tree lưu gcd đoạn và giá trị nhỏ nhất cùng tần suất của nó. Một chú kiến sống sót khi và chỉ khi giá trị của nó bằng đúng gcd của cả đoạn.",
        "contestId": 474,
        "index": "F"
      },
      {
        "code": "CF 1234D",
        "name": "Distinct Characters Queries",
        "rating": 1500,
        "url": "https://codeforces.com/problemset/problem/1234/D",
        "commentVi": "Dùng 26 cây Fenwick Tree (hoặc `std::set`) lưu vị trí xuất hiện của từng chữ cái. Truy vấn số ký tự phân biệt trong [L, R] bằng tổng các chữ cái có số lượng > 0.",
        "commentEn": "Dùng 26 cây Fenwick Tree (hoặc `std::set`) lưu vị trí xuất hiện của từng chữ cái. Truy vấn số ký tự phân biệt trong [L, R] bằng tổng các chữ cái có số lượng > 0.",
        "contestId": 1234,
        "index": "D"
      },
      {
        "code": "CF 522D",
        "name": "Closest Equals",
        "rating": 2100,
        "url": "https://codeforces.com/problemset/problem/522/D",
        "commentVi": "Offline queries + Segment Tree: Duyệt R từ trái sang phải, với mỗi phần tử trùng nhau gần nhất tại prev[i], cập nhật khoảng cách vào vị trí prev[i] trên SegTree.",
        "commentEn": "Offline queries + Segment Tree: Duyệt R từ trái sang phải, với mỗi phần tử trùng nhau gần nhất tại prev[i], cập nhật khoảng cách vào vị trí prev[i] trên SegTree.",
        "contestId": 522,
        "index": "D"
      },
      {
        "code": "CF 276E",
        "name": "Little Girl and Problem on Trees",
        "rating": 2100,
        "url": "https://codeforces.com/problemset/problem/276/E",
        "commentVi": "Cây có dạng các nhánh tia tỏa ra từ gốc 1. Dùng Fenwick Tree quản lý khoảng cách trên từng nhánh riêng biệt và một Fenwick Tree chung cho khoảng cách tính từ gốc.",
        "commentEn": "Cây có dạng các nhánh tia tỏa ra từ gốc 1. Dùng Fenwick Tree quản lý khoảng cách trên từng nhánh riêng biệt và một Fenwick Tree chung cho khoảng cách tính từ gốc.",
        "contestId": 276,
        "index": "E"
      },
      {
        "code": "CF 1000F",
        "name": "One Occurrence",
        "rating": 2400,
        "url": "https://codeforces.com/problemset/problem/1000/F",
        "commentVi": "Segment Tree tìm phần tử chỉ xuất hiện đúng 1 lần: Lưu vị trí xuất hiện trước đó last[a_i] và trước nữa prev[a_i], truy vấn Min trên Segment Tree.",
        "commentEn": "Segment Tree tìm phần tử chỉ xuất hiện đúng 1 lần: Lưu vị trí xuất hiện trước đó last[a_i] và trước nữa prev[a_i], truy vấn Min trên Segment Tree.",
        "contestId": 1000,
        "index": "F"
      },
      {
        "code": "CF 1108E2",
        "name": "Array and Segments (Hard Version)",
        "rating": 2000,
        "url": "https://codeforces.com/problemset/problem/1108/E2",
        "commentVi": "Duyệt chọn phần tử nhỏ nhất tại i, áp dụng tất cả các đoạn không chứa i để giảm trừ tối đa các phần tử khác, dùng Segment Tree duy trì \\max - \\min.",
        "commentEn": "Duyệt chọn phần tử nhỏ nhất tại i, áp dụng tất cả các đoạn không chứa i để giảm trừ tối đa các phần tử khác, dùng Segment Tree duy trì \\max - \\min.",
        "contestId": 1108,
        "index": "E2"
      }
    ]
  },
  {
    "id": 16,
    "phaseId": 3,
    "nameVi": "SEGMENT TREE CẬP NHẬT LƯỜI (LAZY PROPAGATION SEGMENT TREE)",
    "nameEn": "Segment Tree with Lazy Propagation",
    "tierVi": "Expert ➔ Candidate Master (1700 - 2100)",
    "tierEn": "Expert ➔ Candidate Master (1700 - 2100)",
    "essenceVi": [
      "Lazy Propagation trì hoãn việc đẩy thông tin cập nhật xuống các nút lá con cho đến khi có truy vấn thực sự đi qua nút đó (`push_down`).",
      "Cho phép thực hiện các thao tác trên đoạn: Cộng đoạn, Gán đoạn, Đảo bit đoạn kết hợp truy vấn Tổng, Min, Max trên đoạn trong O(log N)."
    ],
    "essenceEn": [
      "Lazy Propagation trì hoãn việc đẩy thông tin cập nhật xuống các nút lá con cho đến khi có truy vấn thực sự đi qua nút đó (`push_down`).",
      "Cho phép thực hiện các thao tác trên đoạn: Cộng đoạn, Gán đoạn, Đảo bit đoạn kết hợp truy vấn Tổng, Min, Max trên đoạn trong O(log N)."
    ],
    "complexityVi": "Dựng cây O(N), mỗi thao tác cập nhật đoạn và truy vấn đoạn đều chạy trong O(log N). Bộ nhớ O(4N).",
    "complexityEn": "Dựng cây O(N), mỗi thao tác cập nhật đoạn và truy vấn đoạn đều chạy trong O(log N). Bộ nhớ O(4N).",
    "blogs": [
      {
        "title": "Segment Tree with Lazy Propagation - Complete Guide",
        "url": "https://codeforces.com/blog/entry/22616"
      }
    ],
    "problems": [
      {
        "code": "CF 292E",
        "name": "Copying Data",
        "rating": 1700,
        "url": "https://codeforces.com/problemset/problem/292/E",
        "commentVi": "Lazy Segment Tree gán đè đoạn: Thay vì copy trực tiếp, gán mốc thời gian của thao tác copy lên đoạn của mảng B. Truy vấn điểm đọc thời gian copy gần nhất.",
        "commentEn": "Lazy Segment Tree gán đè đoạn: Thay vì copy trực tiếp, gán mốc thời gian của thao tác copy lên đoạn của mảng B. Truy vấn điểm đọc thời gian copy gần nhất.",
        "contestId": 292,
        "index": "E"
      },
      {
        "code": "CF 52C",
        "name": "Circular RMQ",
        "rating": 2200,
        "url": "https://codeforces.com/problemset/problem/52/C",
        "commentVi": "Segment Tree cập nhật cộng đoạn và truy vấn Min trên mảng vòng tròn. Nếu đoạn [L, R] bị vòng qua cuối mảng (L > R), tách thành 2 truy vấn [L, n-1] và [0, R].",
        "commentEn": "Segment Tree cập nhật cộng đoạn và truy vấn Min trên mảng vòng tròn. Nếu đoạn [L, R] bị vòng qua cuối mảng (L > R), tách thành 2 truy vấn [L, n-1] và [0, R].",
        "contestId": 52,
        "index": "C"
      },
      {
        "code": "CF 877E",
        "name": "Danil and a Part-time Job",
        "rating": 1800,
        "url": "https://codeforces.com/problemset/problem/877/E",
        "commentVi": "Euler tour đưa cây con về đoạn liên tiếp [tin[u], tout[u]]. Dùng Lazy Segment Tree lật trạng thái bóng đèn (0 thành 1, 1 thành 0) bằng cờ lazy XOR 1.",
        "commentEn": "Euler tour đưa cây con về đoạn liên tiếp [tin[u], tout[u]]. Dùng Lazy Segment Tree lật trạng thái bóng đèn (0 thành 1, 1 thành 0) bằng cờ lazy XOR 1.",
        "contestId": 877,
        "index": "E"
      },
      {
        "code": "CF 145E",
        "name": "Lucky Queries",
        "rating": 2000,
        "url": "https://codeforces.com/problemset/problem/145/E",
        "commentVi": "Segment tree duy trì độ dài dãy con không giảm chữ số may mắn (4 và 7): Lưu số chữ số 4, 7 và độ dài chuỗi dạng 44..77 và 77..44. Cập nhật lười đảo 4 thành 7.",
        "commentEn": "Segment tree duy trì độ dài dãy con không giảm chữ số may mắn (4 và 7): Lưu số chữ số 4, 7 và độ dài chuỗi dạng 44..77 và 77..44. Cập nhật lười đảo 4 thành 7.",
        "contestId": 145,
        "index": "E"
      },
      {
        "code": "CF 438D",
        "name": "The Child and Sequence",
        "rating": 2300,
        "url": "https://codeforces.com/problemset/problem/438/D",
        "commentVi": "Segment Tree lấy modulo: Do x mod m < x/2 khi x ≥ m, giá trị giảm theo hàm mũ. Lưu giá trị Max của mỗi nút; chỉ duyệt sâu vào nhánh con khi \\max ≥ m.",
        "commentEn": "Segment Tree lấy modulo: Do x mod m < x/2 khi x ≥ m, giá trị giảm theo hàm mũ. Lưu giá trị Max của mỗi nút; chỉ duyệt sâu vào nhánh con khi \\max ≥ m.",
        "contestId": 438,
        "index": "D"
      },
      {
        "code": "CF 920F",
        "name": "SUM and REPLACE",
        "rating": 2000,
        "url": "https://codeforces.com/problemset/problem/920/F",
        "commentVi": "Thay thế phần tử bằng số lượng ước d(x). Vì d(x) giảm rất nhanh về 1 hoặc 2, ta duy trì giá trị Max của nút; nếu \\max ≤ 2 thì bỏ qua không đệ quy xuống nữa.",
        "commentEn": "Thay thế phần tử bằng số lượng ước d(x). Vì d(x) giảm rất nhanh về 1 hoặc 2, ta duy trì giá trị Max của nút; nếu \\max ≤ 2 thì bỏ qua không đệ quy xuống nữa.",
        "contestId": 920,
        "index": "F"
      },
      {
        "code": "CF 1114F",
        "name": "Please, another Queries on Array?",
        "rating": 2400,
        "url": "https://codeforces.com/problemset/problem/1114/F",
        "commentVi": "Tính hàm phi Euler φ(X) = X × ∏ (1 - 1/p). Vì các số ≤ 300 chỉ có 62 số nguyên tố, dùng Lazy Segment Tree lưu tích đoạn kết hợp bitmask 62-bit lưu tập các ước nguyên tố.",
        "commentEn": "Tính hàm phi Euler φ(X) = X × ∏ (1 - 1/p). Vì các số ≤ 300 chỉ có 62 số nguyên tố, dùng Lazy Segment Tree lưu tích đoạn kết hợp bitmask 62-bit lưu tập các ước nguyên tố.",
        "contestId": 1114,
        "index": "F"
      },
      {
        "code": "CF 1439C",
        "name": "Greedy Shopping",
        "rating": 2400,
        "url": "https://codeforces.com/problemset/problem/1439/C",
        "commentVi": "Segment Tree kết hợp Binary Search trên cây (Walk on Segment Tree): Cập nhật gán \\max(a_i, v) trên đoạn không tăng và truy vấn mô phỏng mua kẹo với ngân sách.",
        "commentEn": "Segment Tree kết hợp Binary Search trên cây (Walk on Segment Tree): Cập nhật gán \\max(a_i, v) trên đoạn không tăng và truy vấn mô phỏng mua kẹo với ngân sách.",
        "contestId": 1439,
        "index": "C"
      },
      {
        "code": "CF 1208E",
        "name": "Let Them Slide",
        "rating": 2200,
        "url": "https://codeforces.com/problemset/problem/1208/E",
        "commentVi": "Tìm đóng góp lớn nhất của mỗi hàng vào từng cột: Trượt cửa sổ tìm Max trong đoạn trượt được và dùng Lazy Segment Tree hoặc Difference Array cộng dồn kết quả.",
        "commentEn": "Tìm đóng góp lớn nhất của mỗi hàng vào từng cột: Trượt cửa sổ tìm Max trong đoạn trượt được và dùng Lazy Segment Tree hoặc Difference Array cộng dồn kết quả.",
        "contestId": 1208,
        "index": "E"
      },
      {
        "code": "CF 1698D",
        "name": "Fixed Point Guessing",
        "rating": 1600,
        "url": "https://codeforces.com/problemset/problem/1698/D",
        "commentVi": "Nhị phân tương tác: Chia đôi đoạn [L, R], hỏi các giá trị trong nửa đầu. Số phần tử có giá trị nằm trong đoạn [L, M] là lẻ khi và chỉ khi phần tử cố định (a_i = i) nằm ở nửa đầu.",
        "commentEn": "Nhị phân tương tác: Chia đôi đoạn [L, R], hỏi các giá trị trong nửa đầu. Số phần tử có giá trị nằm trong đoạn [L, M] là lẻ khi và chỉ khi phần tử cố định (a_i = i) nằm ở nửa đầu.",
        "contestId": 1698,
        "index": "D"
      }
    ]
  },
  {
    "id": 17,
    "phaseId": 4,
    "nameVi": "XỬ LÝ CHUỖI NÂNG CAO (STRING HASHING, Z-ALGORITHM, KMP, TRIE)",
    "nameEn": "Advanced String Algorithms (Hashing, Z-Algorithm, KMP, Trie)",
    "tierVi": "Candidate Master (1900 - 2100)",
    "tierEn": "Candidate Master (1900 - 2100)",
    "essenceVi": [
      "Polynomial Rolling Hash: So sánh 2 chuỗi con trong O(1) bằng hashing đa thức (nên dùng Double Hash với modulo nguyên tố lớn để chống hack test).",
      "KMP (Knuth-Morris-Pratt): Tiền xử lý mảng π[i] (tiền tố dài nhất đồng thời là hậu tố thực sự) trong O(N).",
      "Z-Algorithm: Mảng Z[i] lưu độ dài tiền tố chung dài nhất giữa chuỗi S và hậu tố bắt đầu tại i trong O(N). Cây Trie quản lý tập từ và tìm kiếm theo tiền tố hoặc tìm XOR lớn nhất (0-1 Trie)."
    ],
    "essenceEn": [
      "Polynomial Rolling Hash: So sánh 2 chuỗi con trong O(1) bằng hashing đa thức (nên dùng Double Hash với modulo nguyên tố lớn để chống hack test).",
      "KMP (Knuth-Morris-Pratt): Tiền xử lý mảng π[i] (tiền tố dài nhất đồng thời là hậu tố thực sự) trong O(N).",
      "Z-Algorithm: Mảng Z[i] lưu độ dài tiền tố chung dài nhất giữa chuỗi S và hậu tố bắt đầu tại i trong O(N). Cây Trie quản lý tập từ và tìm kiếm theo tiền tố hoặc tìm XOR lớn nhất (0-1 Trie)."
    ],
    "complexityVi": "Khởi tạo O(N) hoặc O(∑ |S|), so sánh / tìm kiếm O(1) hoặc O(|P|).",
    "complexityEn": "Khởi tạo O(N) hoặc O(∑ |S|), so sánh / tìm kiếm O(1) hoặc O(|P|).",
    "blogs": [
      {
        "title": "Everything about String Hashing by Neal Wu",
        "url": "https://codeforces.com/blog/entry/60445"
      },
      {
        "title": "KMP Algorithm and Prefix Function",
        "url": "https://codeforces.com/blog/entry/72458"
      }
    ],
    "problems": [
      {
        "code": "CF 271D",
        "name": "Good Substrings",
        "rating": 1600,
        "url": "https://codeforces.com/problemset/problem/271/D",
        "commentVi": "Cây Trie hoặc Rolling Hash đếm số lượng chuỗi con phân biệt chứa không quá k ký tự xấu. Chèn các chuỗi con vào Trie và đếm số nút mới tạo.",
        "commentEn": "Cây Trie hoặc Rolling Hash đếm số lượng chuỗi con phân biệt chứa không quá k ký tự xấu. Chèn các chuỗi con vào Trie và đếm số nút mới tạo.",
        "contestId": 271,
        "index": "D"
      },
      {
        "code": "CF 126B",
        "name": "Password",
        "rating": 1700,
        "url": "https://codeforces.com/problemset/problem/126/B",
        "commentVi": "KMP hoặc Z-Algorithm: Tìm chuỗi vừa là tiền tố, vừa là hậu tố và xuất hiện ít nhất một lần ở giữa văn bản. Kiểm tra các giá trị π[n-1] và π[π[n-1]-1].",
        "commentEn": "KMP hoặc Z-Algorithm: Tìm chuỗi vừa là tiền tố, vừa là hậu tố và xuất hiện ít nhất một lần ở giữa văn bản. Kiểm tra các giá trị π[n-1] và π[π[n-1]-1].",
        "contestId": 126,
        "index": "B"
      },
      {
        "code": "CF 432D",
        "name": "Prefixes and Suffixes",
        "rating": 1900,
        "url": "https://codeforces.com/problemset/problem/432/D",
        "commentVi": "Z-Algorithm kết hợp DP đếm tần suất: Tìm các độ dài vừa là tiền tố vừa là hậu tố (Z[i] == n - i), sau đó dùng mảng cộng dồn đếm số lần xuất hiện trong xâu.",
        "commentEn": "Z-Algorithm kết hợp DP đếm tần suất: Tìm các độ dài vừa là tiền tố vừa là hậu tố (Z[i] == n - i), sau đó dùng mảng cộng dồn đếm số lần xuất hiện trong xâu.",
        "contestId": 432,
        "index": "D"
      },
      {
        "code": "CF 1137B",
        "name": "Camp Schedule",
        "rating": 1600,
        "url": "https://codeforces.com/problemset/problem/1137/B",
        "commentVi": "KMP tối ưu ghép xâu: Dùng mảng π để tìm phần tiền tố trùng với hậu tố dài nhất của t. Ghép 1 lần t hoàn chỉnh, sau đó tham lam lặp lại đoạn đuôi (t - π[|t|-1]).",
        "commentEn": "KMP tối ưu ghép xâu: Dùng mảng π để tìm phần tiền tố trùng với hậu tố dài nhất của t. Ghép 1 lần t hoàn chỉnh, sau đó tham lam lặp lại đoạn đuôi (t - π[|t|-1]).",
        "contestId": 1137,
        "index": "B"
      },
      {
        "code": "CF 514C",
        "name": "Watto and Mechanism",
        "rating": 1700,
        "url": "https://codeforces.com/problemset/problem/514/C",
        "commentVi": "Polynomial Double Hashing hoặc Trie: Với mỗi chuỗi truy vấn, thử thay đổi từng ký tự thành 2 ký tự khác và kiểm tra mã hash mới có tồn tại trong bảng băm không trong O(|s| × 2).",
        "commentEn": "Polynomial Double Hashing hoặc Trie: Với mỗi chuỗi truy vấn, thử thay đổi từng ký tự thành 2 ký tự khác và kiểm tra mã hash mới có tồn tại trong bảng băm không trong O(|s| × 2).",
        "contestId": 514,
        "index": "C"
      },
      {
        "code": "CF 835D",
        "name": "Palindromic characteristics",
        "rating": 1800,
        "url": "https://codeforces.com/problemset/problem/835/D",
        "commentVi": "Dùng Polynomial Hashing tiền xử lý cả chiều xuôi và chiều ngược để kiểm tra một đoạn con bất kỳ có phải là Palindrome hay không trong O(1).",
        "commentEn": "Dùng Polynomial Hashing tiền xử lý cả chiều xuôi và chiều ngược để kiểm tra một đoạn con bất kỳ có phải là Palindrome hay không trong O(1).",
        "contestId": 835,
        "index": "D"
      },
      {
        "code": "CF 471D",
        "name": "MUH and Cube Walls",
        "rating": 1800,
        "url": "https://codeforces.com/problemset/problem/471/D",
        "commentVi": "KMP trên mảng hiệu độ cao: Tính mảng chênh lệch giữa các cột kề nhau \\Delta a và \\Delta b, sau đó chạy KMP tìm kiếm mẫu chênh lệch của bức tường.",
        "commentEn": "KMP trên mảng hiệu độ cao: Tính mảng chênh lệch giữa các cột kề nhau \\Delta a và \\Delta b, sau đó chạy KMP tìm kiếm mẫu chênh lệch của bức tường.",
        "contestId": 471,
        "index": "D"
      },
      {
        "code": "CF 1200E",
        "name": "Compress Words",
        "rating": 1600,
        "url": "https://codeforces.com/problemset/problem/1200/E",
        "commentVi": "KMP nối từ vựng: Với mỗi từ mới, ghép tiền tố của từ mới với hậu tố của văn bản hiện tại (độ dài ≤ |word|) qua ký tự phân cách '#' để tìm độ dài trùng lặp bằng mảng π.",
        "commentEn": "KMP nối từ vựng: Với mỗi từ mới, ghép tiền tố của từ mới với hậu tố của văn bản hiện tại (độ dài ≤ |word|) qua ký tự phân cách '#' để tìm độ dài trùng lặp bằng mảng π.",
        "contestId": 1200,
        "index": "E"
      },
      {
        "code": "CF 1055C",
        "name": "Lucky Days",
        "rating": 1800,
        "url": "https://codeforces.com/problemset/problem/1055/C",
        "commentVi": "Thuật toán Euclid mở rộng: Tìm độ giao nhau lớn nhất giữa 2 chu kỳ tuần hoàn bằng cách giải phương trình đồng dư khoảng cách qua gcd(t_a, t_b).",
        "commentEn": "Thuật toán Euclid mở rộng: Tìm độ giao nhau lớn nhất giữa 2 chu kỳ tuần hoàn bằng cách giải phương trình đồng dư khoảng cách qua gcd(t_a, t_b).",
        "contestId": 1055,
        "index": "C"
      },
      {
        "code": "CF 848A",
        "name": "From Y to Y",
        "rating": 1500,
        "url": "https://codeforces.com/problemset/problem/848/A",
        "commentVi": "Chi phí tạo c ký tự giống nhau là C(c, 2). Tham lam chọn c lớn nhất có C(c, 2) ≤ k, trừ đi và chuyển sang ký tự bảng chữ cái tiếp theo.",
        "commentEn": "Chi phí tạo c ký tự giống nhau là C(c, 2). Tham lam chọn c lớn nhất có C(c, 2) ≤ k, trừ đi và chuyển sang ký tự bảng chữ cái tiếp theo.",
        "contestId": 848,
        "index": "A"
      }
    ]
  },
  {
    "id": 18,
    "phaseId": 4,
    "nameVi": "THÀNH PHẦN LIÊN THÔNG MẠNH (SCC) & CẦU / KHỚP (TARJAN & 2-SAT)",
    "nameEn": "Strongly Connected Components (SCC) & 2-SAT (Tarjan)",
    "tierVi": "Candidate Master (1900 - 2200)",
    "tierEn": "Candidate Master (1900 - 2200)",
    "essenceVi": [
      "Tarjan's Algorithm: Dùng chỉ số DFS `num[u]` và `low[u]` để tìm Cầu (Bridge: low[v] > num[u]), Khớp (Articulation Point: low[v] ≥ num[u]) và Thành phần liên thông mạnh (SCC: low[u] == num[u]) trong một lần duyệt duy nhất.",
      "2-SAT (2-Satisfiability): Biểu diễn mệnh đề (u OR v) \\equiv (≠g u ⇒ v) AND (≠g v ⇒ u) thành đồ thị có hướng. Hệ có nghiệm ⇔ không có biến x nào nằm cùng SCC với ≠g x."
    ],
    "essenceEn": [
      "Tarjan's Algorithm: Dùng chỉ số DFS `num[u]` và `low[u]` để tìm Cầu (Bridge: low[v] > num[u]), Khớp (Articulation Point: low[v] ≥ num[u]) và Thành phần liên thông mạnh (SCC: low[u] == num[u]) trong một lần duyệt duy nhất.",
      "2-SAT (2-Satisfiability): Biểu diễn mệnh đề (u OR v) \\equiv (≠g u ⇒ v) AND (≠g v ⇒ u) thành đồ thị có hướng. Hệ có nghiệm ⇔ không có biến x nào nằm cùng SCC với ≠g x."
    ],
    "complexityVi": "Cả Tarjan tìm SCC/Cầu/Khớp và 2-SAT đều chạy tuyến tính O(V + E).",
    "complexityEn": "Cả Tarjan tìm SCC/Cầu/Khớp và 2-SAT đều chạy tuyến tính O(V + E).",
    "blogs": [
      {
        "title": "Tarjan's Strongly Connected Components and Bridges",
        "url": "https://codeforces.com/blog/entry/71659"
      },
      {
        "title": "2-SAT Tutorial and Implementation",
        "url": "https://codeforces.com/blog/entry/16205"
      }
    ],
    "problems": [
      {
        "code": "CF 427C",
        "name": "Checkposts",
        "rating": 1700,
        "url": "https://codeforces.com/problemset/problem/427/C",
        "commentVi": "Tarjan tìm các SCC. Trong mỗi SCC, cảnh sát đặt tại đỉnh có chi phí nhỏ nhất có thể bảo vệ toàn bộ SCC. Chi phí tối thiểu là tổng các min, số cách chọn là tích số lượng các min.",
        "commentEn": "Tarjan tìm các SCC. Trong mỗi SCC, cảnh sát đặt tại đỉnh có chi phí nhỏ nhất có thể bảo vệ toàn bộ SCC. Chi phí tối thiểu là tổng các min, số cách chọn là tích số lượng các min.",
        "contestId": 427,
        "index": "C"
      },
      {
        "code": "CF 118E",
        "name": "Bertown roads",
        "rating": 2100,
        "url": "https://codeforces.com/problemset/problem/118/E",
        "commentVi": "DFS Tree kiểm tra Cầu: Nếu đồ thị chứa cầu thì không thể định hướng thành đồ thị liên thông mạnh. Ngược lại, định hướng các cạnh xuôi theo cây DFS và các cạnh ngược hướng lên tổ tiên.",
        "commentEn": "DFS Tree kiểm tra Cầu: Nếu đồ thị chứa cầu thì không thể định hướng thành đồ thị liên thông mạnh. Ngược lại, định hướng các cạnh xuôi theo cây DFS và các cạnh ngược hướng lên tổ tiên.",
        "contestId": 118,
        "index": "E"
      },
      {
        "code": "CF 776D",
        "name": "The Door Problem",
        "rating": 2100,
        "url": "https://codeforces.com/problemset/problem/776/D",
        "commentVi": "2-SAT chuẩn mực: Mỗi phòng điều khiển bởi đúng 2 công tắc x, y. Cửa đóng ban đầu đòi hỏi (x XOR y = 1), cửa mở ban đầu đòi hỏi (x XOR y = 0). Dựng đồ thị suy diễn và kiểm tra SCC.",
        "commentEn": "2-SAT chuẩn mực: Mỗi phòng điều khiển bởi đúng 2 công tắc x, y. Cửa đóng ban đầu đòi hỏi (x XOR y = 1), cửa mở ban đầu đòi hỏi (x XOR y = 0). Dựng đồ thị suy diễn và kiểm tra SCC.",
        "contestId": 776,
        "index": "D"
      },
      {
        "code": "CF 1000E",
        "name": "We Need More Bosses",
        "rating": 2100,
        "url": "https://codeforces.com/problemset/problem/1000/E",
        "commentVi": "Cây cầu-khối (Bridge-Block Tree): Tìm các cầu và co từng thành phần 2-liên thông cạnh thành 1 siêu đỉnh để tạo thành một cây mới. Đáp án là đường kính (đường đi dài nhất) của cây mới này.",
        "commentEn": "Cây cầu-khối (Bridge-Block Tree): Tìm các cầu và co từng thành phần 2-liên thông cạnh thành 1 siêu đỉnh để tạo thành một cây mới. Đáp án là đường kính (đường đi dài nhất) của cây mới này.",
        "contestId": 1000,
        "index": "E"
      },
      {
        "code": "CF 1213F",
        "name": "Shortest Normal String",
        "rating": 2100,
        "url": "https://codeforces.com/problemset/problem/1213/F",
        "commentVi": "Tạo cạnh có hướng p_i \\to p_{i+1} và q_i \\to q_{i+1}. Co các đỉnh trong cùng SCC lại, sau đó sắp xếp topo đồ thị các SCC để gán các chữ cái tăng dần từ 'a' đến 'z'.",
        "commentEn": "Tạo cạnh có hướng p_i \\to p_{i+1} và q_i \\to q_{i+1}. Co các đỉnh trong cùng SCC lại, sau đó sắp xếp topo đồ thị các SCC để gán các chữ cái tăng dần từ 'a' đến 'z'.",
        "contestId": 1213,
        "index": "F"
      },
      {
        "code": "CF 1438C",
        "name": "Engineer Artem",
        "rating": 2000,
        "url": "https://codeforces.com/problemset/problem/1438/C",
        "commentVi": "Tô màu bàn cờ 2 phía (Bipartite 2-coloring): Với các ô có (i+j) chẵn, ta ép giá trị phải là số chẵn (tăng 1 nếu đang lẻ). Với (i+j) lẻ, ép phải là số lẻ. Khi đó không bao giờ có 2 ô kề nhau bằng nhau.",
        "commentEn": "Tô màu bàn cờ 2 phía (Bipartite 2-coloring): Với các ô có (i+j) chẵn, ta ép giá trị phải là số chẵn (tăng 1 nếu đang lẻ). Với (i+j) lẻ, ép phải là số lẻ. Khi đó không bao giờ có 2 ô kề nhau bằng nhau.",
        "contestId": 1438,
        "index": "C"
      },
      {
        "code": "CF 1399E2",
        "name": "Weights Division (hard version)",
        "rating": 2000,
        "url": "https://codeforces.com/problemset/problem/1399/E2",
        "commentVi": "DFS tính số lần đi qua mỗi cạnh (tần suất c_e). Dùng 2 Priority Queue cho các cạnh chi phí 1 và chi phí 2, tham lam giảm trọng số các cạnh mang lại độ giảm tổng lớn nhất.",
        "commentEn": "DFS tính số lần đi qua mỗi cạnh (tần suất c_e). Dùng 2 Priority Queue cho các cạnh chi phí 1 và chi phí 2, tham lam giảm trọng số các cạnh mang lại độ giảm tổng lớn nhất.",
        "contestId": 1399,
        "index": "E2"
      },
      {
        "code": "CF 22E",
        "name": "Scheme",
        "rating": 2400,
        "url": "https://codeforces.com/problemset/problem/22/E",
        "commentVi": "Đồ thị hàm (Functional Graph): Mỗi đỉnh có bán bậc ra đúng bằng 1 gồm các chu trình và các cây con hướng vào chu trình. Co các thành phần và nối các lá với các chu trình để tạo 1 SCC lớn.",
        "commentEn": "Đồ thị hàm (Functional Graph): Mỗi đỉnh có bán bậc ra đúng bằng 1 gồm các chu trình và các cây con hướng vào chu trình. Co các thành phần và nối các lá với các chu trình để tạo 1 SCC lớn.",
        "contestId": 22,
        "index": "E"
      },
      {
        "code": "CF 555E",
        "name": "Case of Computer Network",
        "rating": 2700,
        "url": "https://codeforces.com/problemset/problem/555/E",
        "commentVi": "Co các thành phần 2-liên thông cạnh thành cây. Định hướng các đường đi trên cây bằng LCA và mảng cộng dồn trên cây để kiểm tra xem có cạnh nào bị yêu cầu đi cả 2 chiều ngược nhau không.",
        "commentEn": "Co các thành phần 2-liên thông cạnh thành cây. Định hướng các đường đi trên cây bằng LCA và mảng cộng dồn trên cây để kiểm tra xem có cạnh nào bị yêu cầu đi cả 2 chiều ngược nhau không.",
        "contestId": 555,
        "index": "E"
      },
      {
        "code": "CF 1681D",
        "name": "Required Length",
        "rating": 1700,
        "url": "https://codeforces.com/problemset/problem/1681/D",
        "commentVi": "BFS trên không gian trạng thái số kết hợp cắt nhánh thông minh: Nhân số hiện tại với các chữ số khác 0 và 1 của chính nó, dùng `std::map` lưu khoảng cách ít nhất đạt độ dài n.",
        "commentEn": "BFS trên không gian trạng thái số kết hợp cắt nhánh thông minh: Nhân số hiện tại với các chữ số khác 0 và 1 của chính nó, dùng `std::map` lưu khoảng cách ít nhất đạt độ dài n.",
        "contestId": 1681,
        "index": "D"
      }
    ]
  },
  {
    "id": 19,
    "phaseId": 4,
    "nameVi": "LUỒNG CỰC ĐẠI DINIC & CẶP GHÉP CỰC ĐẠI (MAX FLOW & MIN-CUT)",
    "nameEn": "Maximum Flow (Dinic) & Minimum Cut",
    "tierVi": "Candidate Master ➔ Master (2000 - 2300)",
    "tierEn": "Candidate Master to Master (2000 - 2300)",
    "essenceVi": [
      "Thuật toán Dinic: Tìm luồng cực đại bằng cách chia tầng đồ thị (Level Graph bằng BFS) kết hợp đẩy luồng chặn (Blocking Flow bằng DFS với con trỏ `ptr` tránh duyệt lại) trong O(V^2 E).",
      "Định lý Luồng cực đại - Lát cắt hẹp nhất (Max Flow - Min Cut Theorem): Giá trị luồng cực đại từ S đến T bằng dung lượng nhỏ nhất của lát cắt chia cách S và T. Ứng dụng mô hình hóa bài toán Project Selection."
    ],
    "essenceEn": [
      "Thuật toán Dinic: Tìm luồng cực đại bằng cách chia tầng đồ thị (Level Graph bằng BFS) kết hợp đẩy luồng chặn (Blocking Flow bằng DFS với con trỏ `ptr` tránh duyệt lại) trong O(V^2 E).",
      "Định lý Luồng cực đại - Lát cắt hẹp nhất (Max Flow - Min Cut Theorem): Giá trị luồng cực đại từ S đến T bằng dung lượng nhỏ nhất của lát cắt chia cách S và T. Ứng dụng mô hình hóa bài toán Project Selection."
    ],
    "complexityVi": "Đồ thị tổng quát: O(V^2 E). Trên mạng đơn vị hoặc đồ thị 2 phía: O(E √V) (nhanh ngang ngửa Hopcroft-Karp).",
    "complexityEn": "Đồ thị tổng quát: O(V^2 E). Trên mạng đơn vị hoặc đồ thị 2 phía: O(E √V) (nhanh ngang ngửa Hopcroft-Karp).",
    "blogs": [
      {
        "title": "Dinic's Algorithm Tutorial and Implementation",
        "url": "https://codeforces.com/blog/entry/64504"
      },
      {
        "title": "Flow problems and Applications (Min-Cut, Project Selection)",
        "url": "https://codeforces.com/blog/entry/85532"
      }
    ],
    "problems": [
      {
        "code": "CF 1082G",
        "name": "Petya and Graph",
        "rating": 2400,
        "url": "https://codeforces.com/problemset/problem/1082/G",
        "commentVi": "Project Selection kinh điển quy về Min-Cut: Đỉnh nguồn S nối tới mỗi cạnh với dung lượng w_e. Mỗi cạnh nối tới 2 đỉnh mút với dung lượng \\infty. Mỗi đỉnh nối tới đích T với dung lượng a_v.",
        "commentEn": "Project Selection kinh điển quy về Min-Cut: Đỉnh nguồn S nối tới mỗi cạnh với dung lượng w_e. Mỗi cạnh nối tới 2 đỉnh mút với dung lượng \\infty. Mỗi đỉnh nối tới đích T với dung lượng a_v.",
        "contestId": 1082,
        "index": "G"
      },
      {
        "code": "CF 653D",
        "name": "Delivery Bears",
        "rating": 2300,
        "url": "https://codeforces.com/problemset/problem/653/D",
        "commentVi": "Chặt nhị phân trọng lượng mỗi chú gấu là W. Dung lượng cạnh mới là ⌊ cap / W ⌋. Chạy Dinic kiểm tra xem luồng cực đại có ≥ x chú gấu hay không.",
        "commentEn": "Chặt nhị phân trọng lượng mỗi chú gấu là W. Dung lượng cạnh mới là ⌊ cap / W ⌋. Chạy Dinic kiểm tra xem luồng cực đại có ≥ x chú gấu hay không.",
        "contestId": 653,
        "index": "D"
      },
      {
        "code": "CF 847J",
        "name": "Students' Initiation",
        "rating": 2200,
        "url": "https://codeforces.com/problemset/problem/847/J",
        "commentVi": "Chặt nhị phân bán bậc vào cực đại K. Dựng mạng luồng: S nối tới các cặp cạnh, mỗi cặp cạnh nối tới 2 bạn học sinh, mỗi học sinh nối tới T với dung lượng K. Chạy Dinic kiểm tra luồng bão hòa.",
        "commentEn": "Chặt nhị phân bán bậc vào cực đại K. Dựng mạng luồng: S nối tới các cặp cạnh, mỗi cặp cạnh nối tới 2 bạn học sinh, mỗi học sinh nối tới T với dung lượng K. Chạy Dinic kiểm tra luồng bão hòa.",
        "contestId": 847,
        "index": "J"
      },
      {
        "code": "CF 1139E",
        "name": "Maximize Mex",
        "rating": 2400,
        "url": "https://codeforces.com/problemset/problem/1139/E",
        "commentVi": "Đảo ngược thời gian và Bipartite Matching: Thêm dần từng học sinh từ cuối lên, cạnh nối giữa giá trị tiềm năng val và câu lạc bộ. Dùng thuật toán đường tăng luồng (Kuhn) tăng dần giá trị MEX.",
        "commentEn": "Đảo ngược thời gian và Bipartite Matching: Thêm dần từng học sinh từ cuối lên, cạnh nối giữa giá trị tiềm năng val và câu lạc bộ. Dùng thuật toán đường tăng luồng (Kuhn) tăng dần giá trị MEX.",
        "contestId": 1139,
        "index": "E"
      },
      {
        "code": "CF 498C",
        "name": "Array and Operations",
        "rating": 2200,
        "url": "https://codeforces.com/problemset/problem/498/C",
        "commentVi": "Với mỗi thừa số nguyên tố p, dựng đồ thị 2 phía giữa các phần tử ở vị trí lẻ và chẵn. Dung lượng là số mũ của p trong phân tích thừa số nguyên tố. Chạy Dinic tìm tổng số thao tác triệt tiêu.",
        "commentEn": "Với mỗi thừa số nguyên tố p, dựng đồ thị 2 phía giữa các phần tử ở vị trí lẻ và chẵn. Dung lượng là số mũ của p trong phân tích thừa số nguyên tố. Chạy Dinic tìm tổng số thao tác triệt tiêu.",
        "contestId": 498,
        "index": "C"
      },
      {
        "code": "CF 277E",
        "name": "Binary Tree on Plane",
        "rating": 2400,
        "url": "https://codeforces.com/problemset/problem/277/E",
        "commentVi": "Min-Cost Max-Flow (MCMF): Tách mỗi đỉnh thành đỉnh cha (cung cấp tối đa 2 con) và đỉnh con (cần đúng 1 cha). Nối cạnh có hướng từ đỉnh có tung độ lớn hơn xuống đỉnh thấp hơn với chi phí khoảng cách Euclid.",
        "commentEn": "Min-Cost Max-Flow (MCMF): Tách mỗi đỉnh thành đỉnh cha (cung cấp tối đa 2 con) và đỉnh con (cần đúng 1 cha). Nối cạnh có hướng từ đỉnh có tung độ lớn hơn xuống đỉnh thấp hơn với chi phí khoảng cách Euclid.",
        "contestId": 277,
        "index": "E"
      },
      {
        "code": "CF 311E",
        "name": "Biologist",
        "rating": 2600,
        "url": "https://codeforces.com/problemset/problem/311/E",
        "commentVi": "Project Selection mở rộng có phạt: Đỉnh nguồn nối các loài chó, đích nối loài mèo. Các yêu cầu của bạn bè nối với các loài chó/mèo tương ứng, chi phí phạt cộng thêm vào dung lượng lát cắt.",
        "commentEn": "Project Selection mở rộng có phạt: Đỉnh nguồn nối các loài chó, đích nối loài mèo. Các yêu cầu của bạn bè nối với các loài chó/mèo tương ứng, chi phí phạt cộng thêm vào dung lượng lát cắt.",
        "contestId": 311,
        "index": "E"
      },
      {
        "code": "CF 724E",
        "name": "Goods transportation",
        "rating": 2600,
        "url": "https://codeforces.com/problemset/problem/724/E",
        "commentVi": "Mô hình Min-Cut giải bằng DP: Đồ thị luồng có dạng đặc biệt cho phép phân tích mọi lát cắt (S, T) phụ thuộc vào số lượng đỉnh thuộc S. Dùng DP O(N²) tìm lát cắt nhỏ nhất mà không cần chạy Dinic.",
        "commentEn": "Mô hình Min-Cut giải bằng DP: Đồ thị luồng có dạng đặc biệt cho phép phân tích mọi lát cắt (S, T) phụ thuộc vào số lượng đỉnh thuộc S. Dùng DP O(N²) tìm lát cắt nhỏ nhất mà không cần chạy Dinic.",
        "contestId": 724,
        "index": "E"
      },
      {
        "code": "CF 1783F",
        "name": "Double Sort II",
        "rating": 2600,
        "url": "https://codeforces.com/problemset/problem/1783/F",
        "commentVi": "Phân tích hoán vị thành các chu trình rời nhau. Mỗi thao tác hoán đổi có thể giải quyết 1 cạnh trong chu trình của hoán vị a hoặc b. Ghép cặp cực đại trên đồ thị 2 phía giữa các chu trình.",
        "commentEn": "Phân tích hoán vị thành các chu trình rời nhau. Mỗi thao tác hoán đổi có thể giải quyết 1 cạnh trong chu trình của hoán vị a hoặc b. Ghép cặp cực đại trên đồ thị 2 phía giữa các chu trình.",
        "contestId": 1783,
        "index": "F"
      },
      {
        "code": "CF 827D",
        "name": "Best Edge Weight",
        "rating": 2700,
        "url": "https://codeforces.com/problemset/problem/827/D",
        "commentVi": "Dựng cây khung nhỏ nhất (MST). Với cạnh thuộc MST, tìm cạnh ngoài cây nhỏ nhất có thể thay thế nó; với cạnh ngoài MST, tìm cạnh trong cây lớn nhất trên chu trình. Giải bằng HLD kết hợp Segment Tree.",
        "commentEn": "Dựng cây khung nhỏ nhất (MST). Với cạnh thuộc MST, tìm cạnh ngoài cây nhỏ nhất có thể thay thế nó; với cạnh ngoài MST, tìm cạnh trong cây lớn nhất trên chu trình. Giải bằng HLD kết hợp Segment Tree.",
        "contestId": 827,
        "index": "D"
      }
    ]
  },
  {
    "id": 20,
    "phaseId": 4,
    "nameVi": "CÂY PHÂN ĐOẠN BỀN VỮNG (PERSISTENT SEGMENT TREE & PERSISTENT TRIE)",
    "nameEn": "Persistent Segment Tree & Persistent Data Structures",
    "tierVi": "Candidate Master ➔ Master (2100 - 2400)",
    "tierEn": "Candidate Master to Master (2100 - 2400)",
    "essenceVi": [
      "Persistent Data Structure bảo toàn các phiên bản lịch sử sau mỗi thao tác cập nhật. Khi thay đổi 1 điểm, thay vì sửa trực tiếp, ta tạo một đường dẫn mới từ gốc gồm log N nút mới, trỏ các nhánh không đổi về phiên bản cũ.",
      "Kỹ thuật tiền xử lý N phiên bản tiền tố: Phiên bản thứ R lưu trạng thái mảng a[1..R], cho phép truy vấn đoạn [L, R] bằng cách trừ phiên bản R cho phiên bản L-1 (tương tự Prefix Sum)."
    ],
    "essenceEn": [
      "Persistent Data Structure bảo toàn các phiên bản lịch sử sau mỗi thao tác cập nhật. Khi thay đổi 1 điểm, thay vì sửa trực tiếp, ta tạo một đường dẫn mới từ gốc gồm log N nút mới, trỏ các nhánh không đổi về phiên bản cũ.",
      "Kỹ thuật tiền xử lý N phiên bản tiền tố: Phiên bản thứ R lưu trạng thái mảng a[1..R], cho phép truy vấn đoạn [L, R] bằng cách trừ phiên bản R cho phiên bản L-1 (tương tự Prefix Sum)."
    ],
    "complexityVi": "Mỗi thao tác cập nhật tạo O(log N) nút mới. Bộ nhớ O(N log N), thời gian truy vấn O(log N).",
    "complexityEn": "Mỗi thao tác cập nhật tạo O(log N) nút mới. Bộ nhớ O(N log N), thời gian truy vấn O(log N).",
    "blogs": [
      {
        "title": "Persistent Segment Tree Tutorial by Anudeep",
        "url": "https://codeforces.com/blog/entry/15729"
      },
      {
        "title": "Advanced Data Structures: Persistence and Treaps",
        "url": "https://codeforces.com/blog/entry/84101"
      }
    ],
    "problems": [
      {
        "code": "CF 813E",
        "name": "Army Creation",
        "rating": 2200,
        "url": "https://codeforces.com/problemset/problem/813/E",
        "commentVi": "Với mỗi phần tử i, tìm vị trí xuất hiện thứ k trước đó của cùng giá trị prev_k[i]. Phần tử được chọn khi prev_k[i] < L. Dùng Persistent Segment Tree đếm số phần tử có prev_k < L trong [L, R].",
        "commentEn": "Với mỗi phần tử i, tìm vị trí xuất hiện thứ k trước đó của cùng giá trị prev_k[i]. Phần tử được chọn khi prev_k[i] < L. Dùng Persistent Segment Tree đếm số phần tử có prev_k < L trong [L, R].",
        "contestId": 813,
        "index": "E"
      },
      {
        "code": "CF 840D",
        "name": "Destiny",
        "rating": 2500,
        "url": "https://codeforces.com/problemset/problem/840/D",
        "commentVi": "Tìm phần tử xuất hiện > (R - L + 1) / k lần với k ≤ 5. Dùng Persistent Segment Tree: Tại mỗi bước chỉ có tối đa k nhánh con có tổng tần suất lớn hơn ngưỡng, đệ quy tìm số nhỏ nhất thỏa mãn.",
        "commentEn": "Tìm phần tử xuất hiện > (R - L + 1) / k lần với k ≤ 5. Dùng Persistent Segment Tree: Tại mỗi bước chỉ có tối đa k nhánh con có tổng tần suất lớn hơn ngưỡng, đệ quy tìm số nhỏ nhất thỏa mãn.",
        "contestId": 840,
        "index": "D"
      },
      {
        "code": "CF 707D",
        "name": "Persistent Bookcase",
        "rating": 2000,
        "url": "https://codeforces.com/problemset/problem/707/D",
        "commentVi": "Persistent Data Structure trên cây phiên bản: Thao tác kiểu 4 quay lại phiên bản k tạo thành một cây lịch sử các truy vấn. Lưu các truy vấn thành cây và DFS duyệt trên cây lịch sử kết hợp `std::bitset`.",
        "commentEn": "Persistent Data Structure trên cây phiên bản: Thao tác kiểu 4 quay lại phiên bản k tạo thành một cây lịch sử các truy vấn. Lưu các truy vấn thành cây và DFS duyệt trên cây lịch sử kết hợp `std::bitset`.",
        "contestId": 707,
        "index": "D"
      },
      {
        "code": "CF 960F",
        "name": "Pathwalks",
        "rating": 2100,
        "url": "https://codeforces.com/problemset/problem/960/F",
        "commentVi": "Dynamic Segment Tree cho mỗi đỉnh: dp[u][w] là độ dài đường đi dài nhất kết thúc tại đỉnh u với trọng số cạnh cuối cùng là w. Cập nhật và truy vấn Max trên SegTree động tại đỉnh u.",
        "commentEn": "Dynamic Segment Tree cho mỗi đỉnh: dp[u][w] là độ dài đường đi dài nhất kết thúc tại đỉnh u với trọng số cạnh cuối cùng là w. Cập nhật và truy vấn Max trên SegTree động tại đỉnh u.",
        "contestId": 960,
        "index": "F"
      },
      {
        "code": "CF 484E",
        "name": "Sign on Fence",
        "rating": 2500,
        "url": "https://codeforces.com/problemset/problem/484/E",
        "commentVi": "Sắp xếp các cột theo độ cao giảm dần. Thêm dần từng cột vào Persistent Segment Tree duy trì độ dài đoạn liên tiếp toàn số 1 dài nhất. Chặt nhị phân phiên bản thời gian trên cây bền vững.",
        "commentEn": "Sắp xếp các cột theo độ cao giảm dần. Thêm dần từng cột vào Persistent Segment Tree duy trì độ dài đoạn liên tiếp toàn số 1 dài nhất. Chặt nhị phân phiên bản thời gian trên cây bền vững.",
        "contestId": 484,
        "index": "E"
      },
      {
        "code": "CF 1422F",
        "name": "Boring Queries",
        "rating": 2700,
        "url": "https://codeforces.com/problemset/problem/1422/F",
        "commentVi": "Tính \\text{LCM}(a_L, ..., a_R) (mod 10⁹+7). Tách các số nguyên tố ≤ √\\max A (chỉ có 86 số, lưu số mũ lớn nhất) và các số nguyên tố lớn (mỗi số chỉ xuất hiện số mũ tối đa 1, dùng Persistent SegTree).",
        "commentEn": "Tính \\text{LCM}(a_L, ..., a_R) (mod 10⁹+7). Tách các số nguyên tố ≤ √\\max A (chỉ có 86 số, lưu số mũ lớn nhất) và các số nguyên tố lớn (mỗi số chỉ xuất hiện số mũ tối đa 1, dùng Persistent SegTree).",
        "contestId": 1422,
        "index": "F"
      },
      {
        "code": "CF 1093E",
        "name": "Intersection of Permutations",
        "rating": 2400,
        "url": "https://codeforces.com/problemset/problem/1093/E",
        "commentVi": "Đếm điểm trong hình chữ nhật 2D khi có đổi chỗ: Fenwick Tree chứa các Treap / PBDS hoặc Persistent Segment Tree kết hợp Fenwick ngoài (BIT of SegTree) cập nhật động.",
        "commentEn": "Đếm điểm trong hình chữ nhật 2D khi có đổi chỗ: Fenwick Tree chứa các Treap / PBDS hoặc Persistent Segment Tree kết hợp Fenwick ngoài (BIT of SegTree) cập nhật động.",
        "contestId": 1093,
        "index": "E"
      },
      {
        "code": "CF 622F",
        "name": "The Sum of the k-th Powers",
        "rating": 2000,
        "url": "https://codeforces.com/problemset/problem/622/F",
        "commentVi": "Tổng lũy thừa bậc k: S(n) = ∑_{i=1}^n i^k là một đa thức bậc k+1 theo n. Tính k+2 giá trị đầu tiên và dùng công thức nội suy Lagrange tính S(n) trong O(k).",
        "commentEn": "Tổng lũy thừa bậc k: S(n) = ∑_{i=1}^n i^k là một đa thức bậc k+1 theo n. Tính k+2 giá trị đầu tiên và dùng công thức nội suy Lagrange tính S(n) trong O(k).",
        "contestId": 622,
        "index": "F"
      },
      {
        "code": "CF 1188C",
        "name": "Array Beautification",
        "rating": 2300,
        "url": "https://codeforces.com/problemset/problem/1188/C",
        "commentVi": "DP mảng con: Giá trị đẹp nhất của mảng là khoảng cách nhỏ nhất giữa 2 phần tử. Với mỗi giá trị khoảng cách X, dùng Two Pointers và DP prefix sum tính số dãy con có khoảng cách ≥ X.",
        "commentEn": "DP mảng con: Giá trị đẹp nhất của mảng là khoảng cách nhỏ nhất giữa 2 phần tử. Với mỗi giá trị khoảng cách X, dùng Two Pointers và DP prefix sum tính số dãy con có khoảng cách ≥ X.",
        "contestId": 1188,
        "index": "C"
      },
      {
        "code": "CF 1401E",
        "name": "Divide Square",
        "rating": 2300,
        "url": "https://codeforces.com/problemset/problem/1401/E",
        "commentVi": "Công thức Euler cho đồ thị phẳng: Số miền tạo thành = 1 + \\text{số giao điểm} + \\text{số đoạn chạm cả 2 biên}. Quét dòng (Sweep-line) từ trái sang phải dùng Fenwick Tree đếm giao điểm.",
        "commentEn": "Công thức Euler cho đồ thị phẳng: Số miền tạo thành = 1 + \\text{số giao điểm} + \\text{số đoạn chạm cả 2 biên}. Quét dòng (Sweep-line) từ trái sang phải dùng Fenwick Tree đếm giao điểm.",
        "contestId": 1401,
        "index": "E"
      }
    ]
  },
  {
    "id": 21,
    "phaseId": 4,
    "nameVi": "PHÂN TÁCH ĐƯỜNG ĐI NẶNG - NHẸ TRÊN CÂY (HEAVY-LIGHT DECOMPOSITION - HLD)",
    "nameEn": "Heavy-Light Decomposition (HLD)",
    "tierVi": "Master (2100 - 2400)",
    "tierEn": "Master (2100 - 2400)",
    "essenceVi": [
      "HLD chia các cạnh của cây thành Cạnh nặng (Heavy Edge: dẫn tới con có kích thước cây con lớn nhất) và Cạnh nhẹ (Light Edge). Cây được phân rã thành các chuỗi nặng liên tục (Heavy Paths).",
      "Bất kỳ đường đi nào giữa hai đỉnh bất kỳ trên cây cũng chỉ đi qua tối đa O(log N) chuỗi nặng. Mỗi chuỗi nặng là một đoạn liên tục trên mảng Euler tour ⇒ dùng Segment Tree quản lý mọi thao tác trên đường đi trong O(log^2 N)."
    ],
    "essenceEn": [
      "HLD chia các cạnh của cây thành Cạnh nặng (Heavy Edge: dẫn tới con có kích thước cây con lớn nhất) và Cạnh nhẹ (Light Edge). Cây được phân rã thành các chuỗi nặng liên tục (Heavy Paths).",
      "Bất kỳ đường đi nào giữa hai đỉnh bất kỳ trên cây cũng chỉ đi qua tối đa O(log N) chuỗi nặng. Mỗi chuỗi nặng là một đoạn liên tục trên mảng Euler tour ⇒ dùng Segment Tree quản lý mọi thao tác trên đường đi trong O(log^2 N)."
    ],
    "complexityVi": "Tiền xử lý HLD O(N), mỗi thao tác cập nhật hoặc truy vấn trên đường đi (u, v) mất O(log^2 N).",
    "complexityEn": "Tiền xử lý HLD O(N), mỗi thao tác cập nhật hoặc truy vấn trên đường đi (u, v) mất O(log^2 N).",
    "blogs": [
      {
        "title": "Heavy-Light Decomposition Complete Tutorial and Code",
        "url": "https://codeforces.com/blog/entry/81317"
      },
      {
        "title": "HLD on Codeforces: Practical Tricks and Range Queries",
        "url": "https://codeforces.com/blog/entry/53170"
      }
    ],
    "problems": [
      {
        "code": "CF 165D",
        "name": "Beard Graph",
        "rating": 2400,
        "url": "https://codeforces.com/problemset/problem/165/D",
        "commentVi": "HLD cơ bản: Đưa cạnh về đỉnh con sâu hơn. Thao tác biến cạnh thành trắng/đen quy về cập nhật điểm trên Segment Tree. Truy vấn khoảng cách là kiểm tra xem trên đường đi có cạnh đen không.",
        "commentEn": "HLD cơ bản: Đưa cạnh về đỉnh con sâu hơn. Thao tác biến cạnh thành trắng/đen quy về cập nhật điểm trên Segment Tree. Truy vấn khoảng cách là kiểm tra xem trên đường đi có cạnh đen không.",
        "contestId": 165,
        "index": "D"
      },
      {
        "code": "CF 343D",
        "name": "Water Tree",
        "rating": 2100,
        "url": "https://codeforces.com/problemset/problem/343/D",
        "commentVi": "Đổ nước vào cây con gốc u (cập nhật đoạn trên Euler tour). Rút nước tại đỉnh v làm rỗng đường đi từ v lên gốc cây (cập nhật đường đi bằng HLD). Truy vấn trạng thái nước bằng Segment Tree.",
        "commentEn": "Đổ nước vào cây con gốc u (cập nhật đoạn trên Euler tour). Rút nước tại đỉnh v làm rỗng đường đi từ v lên gốc cây (cập nhật đường đi bằng HLD). Truy vấn trạng thái nước bằng Segment Tree.",
        "contestId": 343,
        "index": "D"
      },
      {
        "code": "CF 916E",
        "name": "Jamie and Tree",
        "rating": 2400,
        "url": "https://codeforces.com/problemset/problem/916/E",
        "commentVi": "HLD với gốc cây động: Cập nhật giá trị đường đi giữa u và v không đổi theo gốc. Cập nhật cây con với gốc động đòi hỏi chia trường hợp dựa trên quan hệ tổ tiên với gốc mới.",
        "commentEn": "HLD với gốc cây động: Cập nhật giá trị đường đi giữa u và v không đổi theo gốc. Cập nhật cây con với gốc động đòi hỏi chia trường hợp dựa trên quan hệ tổ tiên với gốc mới.",
        "contestId": 916,
        "index": "E"
      },
      {
        "code": "CF 587C",
        "name": "Duff in the Army",
        "rating": 2200,
        "url": "https://codeforces.com/problemset/problem/587/C",
        "commentVi": "HLD kết hợp gộp danh sách: Mỗi nút lưu tối đa 10 ID người nhỏ nhất. Khi nhảy qua các chuỗi nặng của HLD, gộp các danh sách 10 phần tử lại với nhau trong O(10).",
        "commentEn": "HLD kết hợp gộp danh sách: Mỗi nút lưu tối đa 10 ID người nhỏ nhất. Khi nhảy qua các chuỗi nặng của HLD, gộp các danh sách 10 phần tử lại với nhau trong O(10).",
        "contestId": 587,
        "index": "C"
      },
      {
        "code": "CF 1023F",
        "name": "Mobile Phone Network",
        "rating": 2700,
        "url": "https://codeforces.com/problemset/problem/1023/F",
        "commentVi": "Dựng cây khung chứa toàn bộ k cạnh của ta. Với mỗi cạnh của đối thủ (u, v) có trọng số w, dùng HLD gán trọng số ≤ w cho tất cả các cạnh của ta nằm trên đường đi giữa u và v.",
        "commentEn": "Dựng cây khung chứa toàn bộ k cạnh của ta. Với mỗi cạnh của đối thủ (u, v) có trọng số w, dùng HLD gán trọng số ≤ w cho tất cả các cạnh của ta nằm trên đường đi giữa u và v.",
        "contestId": 1023,
        "index": "F"
      },
      {
        "code": "CF 609E",
        "name": "Minimum spanning tree for each edge",
        "rating": 2000,
        "url": "https://codeforces.com/problemset/problem/609/E",
        "commentVi": "Dựng cây khung nhỏ nhất Kruskal. Với mỗi cạnh đề bài cho, truy vấn trọng số lớn nhất trên đường đi giữa 2 đỉnh đầu mút bằng HLD kết hợp Segment Tree RMQ.",
        "commentEn": "Dựng cây khung nhỏ nhất Kruskal. Với mỗi cạnh đề bài cho, truy vấn trọng số lớn nhất trên đường đi giữa 2 đỉnh đầu mút bằng HLD kết hợp Segment Tree RMQ.",
        "contestId": 609,
        "index": "E"
      },
      {
        "code": "CF 1239D",
        "name": "Runaway to a Sitter",
        "rating": 2400,
        "url": "https://codeforces.com/problemset/problem/1239/D",
        "commentVi": "Xây dựng đồ thị có hướng giữa người và mèo: Nếu người i quen mèo j (i ≠ j), nối cạnh i \\to j. Tìm thành phần liên thông mạnh bằng Tarjan; nếu chỉ có 1 SCC thì vô nghiệm.",
        "commentEn": "Xây dựng đồ thị có hướng giữa người và mèo: Nếu người i quen mèo j (i ≠ j), nối cạnh i \\to j. Tìm thành phần liên thông mạnh bằng Tarjan; nếu chỉ có 1 SCC thì vô nghiệm.",
        "contestId": 1239,
        "index": "D"
      },
      {
        "code": "CF 1017G",
        "name": "The Tree",
        "rating": 3100,
        "url": "https://codeforces.com/problemset/problem/1017/G",
        "commentVi": "HLD quản lý dòng chảy kích hoạt: Segment Tree lưu tổng và hậu tố lớn nhất (Max Suffix Sum) của các chuỗi nặng để kiểm tra xem một đỉnh có bị kích hoạt bởi các thao tác từ tổ tiên không.",
        "commentEn": "HLD quản lý dòng chảy kích hoạt: Segment Tree lưu tổng và hậu tố lớn nhất (Max Suffix Sum) của các chuỗi nặng để kiểm tra xem một đỉnh có bị kích hoạt bởi các thao tác từ tổ tiên không.",
        "contestId": 1017,
        "index": "G"
      },
      {
        "code": "CF 739E",
        "name": "Gosha is hunting",
        "rating": 2400,
        "url": "https://codeforces.com/problemset/problem/739/E",
        "commentVi": "Tối ưu hóa WQS Binary Search hoặc DP: Tìm hệ số phạt \\lambda cho việc sử dụng Pokéball loại 2, quy bài toán về tìm giá trị lớn nhất độc lập cho từng con Pokémon.",
        "commentEn": "Tối ưu hóa WQS Binary Search hoặc DP: Tìm hệ số phạt \\lambda cho việc sử dụng Pokéball loại 2, quy bài toán về tìm giá trị lớn nhất độc lập cho từng con Pokémon.",
        "contestId": 739,
        "index": "E"
      },
      {
        "code": "CF 117E",
        "name": "Tree or not Tree",
        "rating": 3000,
        "url": "https://codeforces.com/problemset/problem/117/E",
        "commentVi": "Đồ thị 1 chu trình (cactus / pseudo-tree): Tìm chu trình duy nhất, tách chu trình và các cây con gắn vào chu trình, quản lý lật bit các cạnh bằng HLD trên cây kết hợp Segment Tree trên chu trình.",
        "commentEn": "Đồ thị 1 chu trình (cactus / pseudo-tree): Tìm chu trình duy nhất, tách chu trình và các cây con gắn vào chu trình, quản lý lật bit các cạnh bằng HLD trên cây kết hợp Segment Tree trên chu trình.",
        "contestId": 117,
        "index": "E"
      }
    ]
  },
  {
    "id": 22,
    "phaseId": 4,
    "nameVi": "TỐI ƯU HÓA QUY HOẠCH ĐỘNG: BAO LỒI (CONVEX HULL TRICK) & CÂY LI CHAO",
    "nameEn": "DP Optimization: Convex Hull Trick (CHT) & Li Chao Tree",
    "tierVi": "Master (2100 - 2400)",
    "tierEn": "Master (2100 - 2400)",
    "essenceVi": [
      "Convex Hull Trick (CHT): Tối ưu hóa hệ thức quy hoạch động có dạng dp[i] = \\min_{j < i}(dp[j] + a[i] × b[j]). Mỗi trạng thái j là một đường thẳng y = m x + c với hệ số góc m = b[j] và hằng số c = dp[j].",
      "Nếu hệ số góc m đơn điệu, dùng `std::deque` duy trì bao lồi trong O(N). Nếu hệ số góc hoặc truy vấn không đơn điệu, dùng Cây Li Chao (Li Chao Segment Tree) hỗ trợ thêm đoạn thẳng và truy vấn cực trị tại x trong O(log(\\text{range})), cài đặt cực kỳ tinh gọn."
    ],
    "essenceEn": [
      "Convex Hull Trick (CHT): Tối ưu hóa hệ thức quy hoạch động có dạng dp[i] = \\min_{j < i}(dp[j] + a[i] × b[j]). Mỗi trạng thái j là một đường thẳng y = m x + c với hệ số góc m = b[j] và hằng số c = dp[j].",
      "Nếu hệ số góc m đơn điệu, dùng `std::deque` duy trì bao lồi trong O(N). Nếu hệ số góc hoặc truy vấn không đơn điệu, dùng Cây Li Chao (Li Chao Segment Tree) hỗ trợ thêm đoạn thẳng và truy vấn cực trị tại x trong O(log(\\text{range})), cài đặt cực kỳ tinh gọn."
    ],
    "complexityVi": "CHT đơn điệu: O(N). Cây Li Chao: O(N log C) với C là miền giá trị của tọa độ x.",
    "complexityEn": "CHT đơn điệu: O(N). Cây Li Chao: O(N log C) với C là miền giá trị của tọa độ x.",
    "blogs": [
      {
        "title": "Convex Hull Trick and Li Chao Tree Tutorial",
        "url": "https://codeforces.com/blog/entry/63823"
      },
      {
        "title": "Li Chao Segment Tree: The Elegant Way to CHT",
        "url": "https://codeforces.com/blog/entry/51532"
      }
    ],
    "problems": [
      {
        "code": "CF 319C",
        "name": "Kalila and Dimna in the Logging Industry",
        "rating": 2100,
        "url": "https://codeforces.com/problemset/problem/319/C",
        "commentVi": "CHT cổ điển: dp[i] = \\min_{j < i}(dp[j] + a_i × b_j). Do a_i tăng dần và b_i giảm dần, sử dụng hàng đợi `std::deque` duy trì bao lồi các đường thẳng, giải trong O(N).",
        "commentEn": "CHT cổ điển: dp[i] = \\min_{j < i}(dp[j] + a_i × b_j). Do a_i tăng dần và b_i giảm dần, sử dụng hàng đợi `std::deque` duy trì bao lồi các đường thẳng, giải trong O(N).",
        "contestId": 319,
        "index": "C"
      },
      {
        "code": "CF 1083E",
        "name": "The Fair Nut and Rectangles",
        "rating": 2400,
        "url": "https://codeforces.com/problemset/problem/1083/E",
        "commentVi": "Sắp xếp các hình chữ nhật theo tọa độ x tăng dần (kéo theo y giảm dần). dp[i] = x_i y_i - a_i + \\max_{j < i}(dp[j] - x_j y_i). Áp dụng CHT tìm giá trị lớn nhất.",
        "commentEn": "Sắp xếp các hình chữ nhật theo tọa độ x tăng dần (kéo theo y giảm dần). dp[i] = x_i y_i - a_i + \\max_{j < i}(dp[j] - x_j y_i). Áp dụng CHT tìm giá trị lớn nhất.",
        "contestId": 1083,
        "index": "E"
      },
      {
        "code": "CF 932F",
        "name": "Escape Through Leaf",
        "rating": 2500,
        "url": "https://codeforces.com/problemset/problem/932/F",
        "commentVi": "Tree DP kết hợp Cây Li Chao: Tại mỗi nút trên cây, ta cần truy vấn giá trị nhỏ nhất từ tập các đường thẳng của tất cả các lá trong cây con. Dùng kỹ thuật gộp cây Li Chao (Li Chao Tree Merge).",
        "commentEn": "Tree DP kết hợp Cây Li Chao: Tại mỗi nút trên cây, ta cần truy vấn giá trị nhỏ nhất từ tập các đường thẳng của tất cả các lá trong cây con. Dùng kỹ thuật gộp cây Li Chao (Li Chao Tree Merge).",
        "contestId": 932,
        "index": "F"
      },
      {
        "code": "CF 1179D",
        "name": "Fedor Does Runs",
        "rating": 2600,
        "url": "https://codeforces.com/problemset/problem/1179/D",
        "commentVi": "Tìm đường đi đơn tối thiểu hóa số cặp không thuộc đường đi: Tree DP kết hợp CHT để ghép cặp 2 nhánh con tối ưu nhất tại mỗi đỉnh cha trong O(N).",
        "commentEn": "Tìm đường đi đơn tối thiểu hóa số cặp không thuộc đường đi: Tree DP kết hợp CHT để ghép cặp 2 nhánh con tối ưu nhất tại mỗi đỉnh cha trong O(N).",
        "contestId": 1179,
        "index": "D"
      },
      {
        "code": "CF 631E",
        "name": "Product Sum",
        "rating": 2600,
        "url": "https://codeforces.com/problemset/problem/631/E",
        "commentVi": "Dịch chuyển phần tử a_i sang j làm thay đổi tổng tích lũy ∑ i × a_i. Biến đổi công thức độ chênh lệch thành hàm bậc nhất của a_i, giải bằng Cây Li Chao.",
        "commentEn": "Dịch chuyển phần tử a_i sang j làm thay đổi tổng tích lũy ∑ i × a_i. Biến đổi công thức độ chênh lệch thành hàm bậc nhất của a_i, giải bằng Cây Li Chao.",
        "contestId": 631,
        "index": "E"
      },
      {
        "code": "CF 455E",
        "name": "Function",
        "rating": 2600,
        "url": "https://codeforces.com/problemset/problem/455/E",
        "commentVi": "Biến đổi hàm đệ quy thành bài toán tìm giá trị nhỏ nhất của các đường thẳng có dạng f(j) = a_j × (x - y) + (y × a_j - S_j). Giải bằng Segment Tree các Cây Li Chao.",
        "commentEn": "Biến đổi hàm đệ quy thành bài toán tìm giá trị nhỏ nhất của các đường thẳng có dạng f(j) = a_j × (x - y) + (y × a_j - S_j). Giải bằng Segment Tree các Cây Li Chao.",
        "contestId": 455,
        "index": "E"
      },
      {
        "code": "CF 1299C",
        "name": "Water Balance",
        "rating": 2000,
        "url": "https://codeforces.com/problemset/problem/1299/C",
        "commentVi": "Bao lồi trên đồ thị mảng cộng dồn: San bằng các đoạn nước tương đương với việc tìm bao lồi dưới (Lower Convex Hull) của các điểm (i, P[i]). Dùng ngăn xếp duy trì độ dốc tăng dần.",
        "commentEn": "Bao lồi trên đồ thị mảng cộng dồn: San bằng các đoạn nước tương đương với việc tìm bao lồi dưới (Lower Convex Hull) của các điểm (i, P[i]). Dùng ngăn xếp duy trì độ dốc tăng dần.",
        "contestId": 1299,
        "index": "C"
      },
      {
        "code": "CF 1303G",
        "name": "Antichain",
        "rating": 2900,
        "url": "https://codeforces.com/problemset/problem/1303/G",
        "commentVi": "Centroid Decomposition kết hợp CHT: Tính tổng trọng số nhân khoảng cách dọc đường đi qua trọng tâm. Mỗi đường đi từ trọng tâm xuống lá trở thành một đường thẳng trong CHT.",
        "commentEn": "Centroid Decomposition kết hợp CHT: Tính tổng trọng số nhân khoảng cách dọc đường đi qua trọng tâm. Mỗi đường đi từ trọng tâm xuống lá trở thành một đường thẳng trong CHT.",
        "contestId": 1303,
        "index": "G"
      },
      {
        "code": "CF 715C",
        "name": "Digit Tree",
        "rating": 2700,
        "url": "https://codeforces.com/problemset/problem/715/C",
        "commentVi": "Centroid Decomposition đếm số đường đi tạo thành số chia hết cho M: Ghép các đường đi lên trọng tâm và từ trọng tâm xuống lá thông qua nghịch đảo modulo Euler.",
        "commentEn": "Centroid Decomposition đếm số đường đi tạo thành số chia hết cho M: Ghép các đường đi lên trọng tâm và từ trọng tâm xuống lá thông qua nghịch đảo modulo Euler.",
        "contestId": 715,
        "index": "C"
      },
      {
        "code": "CF 1392E",
        "name": "Omkar and Duck",
        "rating": 2100,
        "url": "https://codeforces.com/problemset/problem/1392/E",
        "commentVi": "Quy hoạch ma trận bằng lũy thừa của 2: Gán giá trị các ô trên lưới sao cho mỗi đường đi từ (1, 1) đến (n, n) sinh ra một tổng duy nhất, khôi phục đường đi bằng cách kiểm tra từng bit.",
        "commentEn": "Quy hoạch ma trận bằng lũy thừa của 2: Gán giá trị các ô trên lưới sao cho mỗi đường đi từ (1, 1) đến (n, n) sinh ra một tổng duy nhất, khôi phục đường đi bằng cách kiểm tra từng bit.",
        "contestId": 1392,
        "index": "E"
      }
    ]
  },
  {
    "id": 23,
    "phaseId": 5,
    "nameVi": "CÂY ẢO (VIRTUAL TREE / AUXILIARY TREE)",
    "nameEn": "Virtual Trees (Auxiliary Trees)",
    "tierVi": "Grandmaster (2400 - 2700+)",
    "tierEn": "Grandmaster (2400 - 2700+)",
    "essenceVi": [
      "Khi có K đỉnh quan trọng trên cây N đỉnh và ∑ K ≤ 10⁵, thuật toán trên toàn bộ cây sẽ bị TLE. Cây ảo trích xuất một cây con chỉ gồm đúng K đỉnh này và các LCA của từng cặp đỉnh liền kề.",
      "Kỹ thuật dựng cây ảo: Sắp xếp K đỉnh theo thời gian vào `tin` của Euler Tour, dùng một `std::stack` duy trì chuỗi tổ tiên để dựng cây ảo kích thước tối đa 2K nút trong O(K log K). Sau đó chạy Tree DP trực tiếp trên cây ảo."
    ],
    "essenceEn": [
      "Khi có K đỉnh quan trọng trên cây N đỉnh và ∑ K ≤ 10⁵, thuật toán trên toàn bộ cây sẽ bị TLE. Cây ảo trích xuất một cây con chỉ gồm đúng K đỉnh này và các LCA của từng cặp đỉnh liền kề.",
      "Kỹ thuật dựng cây ảo: Sắp xếp K đỉnh theo thời gian vào `tin` của Euler Tour, dùng một `std::stack` duy trì chuỗi tổ tiên để dựng cây ảo kích thước tối đa 2K nút trong O(K log K). Sau đó chạy Tree DP trực tiếp trên cây ảo."
    ],
    "complexityVi": "Dựng cây và giải bài toán trong O(K log K) cho mỗi truy vấn, tổng thể O(∑ K log K).",
    "complexityEn": "Dựng cây và giải bài toán trong O(K log K) cho mỗi truy vấn, tổng thể O(∑ K log K).",
    "blogs": [
      {
        "title": "Virtual Trees (Auxiliary Trees) Tutorial",
        "url": "https://codeforces.com/blog/entry/73644"
      },
      {
        "title": "Building Auxiliary Tree in O(K log K) with Stack",
        "url": "https://codeforces.com/blog/entry/71567"
      }
    ],
    "problems": [
      {
        "code": "CF 613D",
        "name": "Kingdom and its Cities",
        "rating": 2800,
        "url": "https://codeforces.com/problemset/problem/613/D",
        "commentVi": "Bài toán kinh điển về Cây ảo: Cho k thành phố quan trọng, cần xóa ít đỉnh trung gian nhất để cô lập chúng. Dựng Cây ảo kích thước O(k) và chạy Tree DP tham lam cắt đỉnh.",
        "commentEn": "Bài toán kinh điển về Cây ảo: Cho k thành phố quan trọng, cần xóa ít đỉnh trung gian nhất để cô lập chúng. Dựng Cây ảo kích thước O(k) và chạy Tree DP tham lam cắt đỉnh.",
        "contestId": 613,
        "index": "D"
      },
      {
        "code": "CF 1111E",
        "name": "Tree Queries",
        "rating": 2600,
        "url": "https://codeforces.com/problemset/problem/1111/E",
        "commentVi": "Dựng Cây ảo trên tập k đỉnh cần xét cùng đỉnh gốc r. Tính số tổ tiên là đỉnh quan trọng của mỗi nút, sau đó chạy DP xếp nhóm độc lập không vượt quá m nhóm.",
        "commentEn": "Dựng Cây ảo trên tập k đỉnh cần xét cùng đỉnh gốc r. Tính số tổ tiên là đỉnh quan trọng của mỗi nút, sau đó chạy DP xếp nhóm độc lập không vượt quá m nhóm.",
        "contestId": 1111,
        "index": "E"
      },
      {
        "code": "CF 1320E",
        "name": "Treeland Virus",
        "rating": 2800,
        "url": "https://codeforces.com/problemset/problem/1320/E",
        "commentVi": "Virus lây lan trên cây với tốc độ khác nhau: Dựng Cây ảo chứa các tâm phát tán virus và các thành phố cần truy vấn. Chạy thuật toán Dijkstra đa nguồn trực tiếp trên Cây ảo.",
        "commentEn": "Virus lây lan trên cây với tốc độ khác nhau: Dựng Cây ảo chứa các tâm phát tán virus và các thành phố cần truy vấn. Chạy thuật toán Dijkstra đa nguồn trực tiếp trên Cây ảo.",
        "contestId": 1320,
        "index": "E"
      },
      {
        "code": "CF 809E",
        "name": "Surprise me!",
        "rating": 2900,
        "url": "https://codeforces.com/problemset/problem/809/E",
        "commentVi": "Tính ∑ φ(a_u × a_v) × dist(u, v): Áp dụng đảo ngược Mobius và hàm nhân tính φ, với mỗi ước d, dựng Cây ảo trên tập các bội số của d để tính tổng khoảng cách.",
        "commentEn": "Tính ∑ φ(a_u × a_v) × dist(u, v): Áp dụng đảo ngược Mobius và hàm nhân tính φ, với mỗi ước d, dựng Cây ảo trên tập các bội số của d để tính tổng khoảng cách.",
        "contestId": 809,
        "index": "E"
      },
      {
        "code": "CF 1254D",
        "name": "Tree Queries",
        "rating": 2700,
        "url": "https://codeforces.com/problemset/problem/1254/D",
        "commentVi": "Chia căn bậc của đỉnh (Heavy-Light Vertex): Các đỉnh có bậc lớn > √N được tiền xử lý riêng, các đỉnh bậc nhỏ cập nhật trực tiếp vào cây con qua Euler Tour và Segment Tree.",
        "commentEn": "Chia căn bậc của đỉnh (Heavy-Light Vertex): Các đỉnh có bậc lớn > √N được tiền xử lý riêng, các đỉnh bậc nhỏ cập nhật trực tiếp vào cây con qua Euler Tour và Segment Tree.",
        "contestId": 1254,
        "index": "D"
      },
      {
        "code": "CF 980E",
        "name": "The Number of Games",
        "rating": 2200,
        "url": "https://codeforces.com/problemset/problem/980/E",
        "commentVi": "Tham lam từ lớn về bé: Vì 2^i > ∑_{j < i} 2^j, ta duyệt từ N về 1, dùng Binary Lifting kiểm tra số đỉnh cần thêm từ i lên cây đã chọn có ≤ k hay không để nạp vào cây.",
        "commentEn": "Tham lam từ lớn về bé: Vì 2^i > ∑_{j < i} 2^j, ta duyệt từ N về 1, dùng Binary Lifting kiểm tra số đỉnh cần thêm từ i lên cây đã chọn có ≤ k hay không để nạp vào cây.",
        "contestId": 980,
        "index": "E"
      },
      {
        "code": "CF 576E",
        "name": "Painting Edges",
        "rating": 3000,
        "url": "https://codeforces.com/problemset/problem/576/E",
        "commentVi": "Divide and Conquer trên trục thời gian kết hợp DSU Rollback (hoặc Cây ảo): Kiểm tra tính 2 phía của từng màu và hoàn tác trạng thái nếu việc tô màu thất bại.",
        "commentEn": "Divide and Conquer trên trục thời gian kết hợp DSU Rollback (hoặc Cây ảo): Kiểm tra tính 2 phía của từng màu và hoàn tác trạng thái nếu việc tô màu thất bại.",
        "contestId": 576,
        "index": "E"
      },
      {
        "code": "CF 1746F",
        "name": "Kazaee",
        "rating": 2800,
        "url": "https://codeforces.com/problemset/problem/1746/F",
        "commentVi": "Xác suất Hashing: Gán cho mỗi số một giá trị ngẫu nhiên 0/1 (hoặc số nguyên ngẫu nhiên). Kiểm tra tổng giá trị trên đoạn có chia hết cho k với 30-40 mảng ngẫu nhiên độc lập.",
        "commentEn": "Xác suất Hashing: Gán cho mỗi số một giá trị ngẫu nhiên 0/1 (hoặc số nguyên ngẫu nhiên). Kiểm tra tổng giá trị trên đoạn có chia hết cho k với 30-40 mảng ngẫu nhiên độc lập.",
        "contestId": 1746,
        "index": "F"
      },
      {
        "code": "CF 1060F",
        "name": "Shrinking Tree",
        "rating": 3000,
        "url": "https://codeforces.com/problemset/problem/1060/F",
        "commentVi": "Tree DP xác suất gộp cạnh: dp[u][i] là xác suất cây con gốc u co lại thành đỉnh u khi có i cạnh bị gộp trước cạnh nối u với cha. Gộp các nhánh con bằng DP tích chập tổ hợp.",
        "commentEn": "Tree DP xác suất gộp cạnh: dp[u][i] là xác suất cây con gốc u co lại thành đỉnh u khi có i cạnh bị gộp trước cạnh nối u với cha. Gộp các nhánh con bằng DP tích chập tổ hợp.",
        "contestId": 1060,
        "index": "F"
      },
      {
        "code": "CF 1528D",
        "name": "It's a Guess!",
        "rating": 2700,
        "url": "https://codeforces.com/problemset/problem/1528/D",
        "commentVi": "Dijkstra tối ưu trên đồ thị xoay vòng: Do các cạnh xoay vòng tròn theo thời gian, sau khi tìm được khoảng cách ngắn nhất đến đỉnh u, ta có thể lan tỏa sang đỉnh (u+1) mod n với chi phí 1.",
        "commentEn": "Dijkstra tối ưu trên đồ thị xoay vòng: Do các cạnh xoay vòng tròn theo thời gian, sau khi tìm được khoảng cách ngắn nhất đến đỉnh u, ta có thể lan tỏa sang đỉnh (u+1) mod n với chi phí 1.",
        "contestId": 1528,
        "index": "D"
      }
    ]
  },
  {
    "id": 24,
    "phaseId": 5,
    "nameVi": "TÌM KIẾM NHỊ PHÂN SONG SONG (PARALLEL BINARY SEARCH)",
    "nameEn": "Parallel Binary Search",
    "tierVi": "Grandmaster (2400 - 2700+)",
    "tierEn": "Grandmaster (2400 - 2700+)",
    "essenceVi": [
      "Áp dụng khi có Q truy vấn độc lập, mỗi truy vấn cần tìm kiếm nhị phân thời điểm T mà một điều kiện được thỏa mãn, nhưng việc chạy riêng từng truy vấn sẽ tốn cấu trúc dữ liệu và bị TLE.",
      "Parallel BS chạy nhị phân đồng thời cho toàn bộ Q truy vấn qua log(\\text{Time}) vòng lặp. Mỗi vòng lặp áp dụng các biến đổi từ 1 đến Mid, sau đó kiểm tra và phân loại các truy vấn sang nhánh trái [L, Mid] hoặc nhánh phải [Mid+1, R]."
    ],
    "essenceEn": [
      "Áp dụng khi có Q truy vấn độc lập, mỗi truy vấn cần tìm kiếm nhị phân thời điểm T mà một điều kiện được thỏa mãn, nhưng việc chạy riêng từng truy vấn sẽ tốn cấu trúc dữ liệu và bị TLE.",
      "Parallel BS chạy nhị phân đồng thời cho toàn bộ Q truy vấn qua log(\\text{Time}) vòng lặp. Mỗi vòng lặp áp dụng các biến đổi từ 1 đến Mid, sau đó kiểm tra và phân loại các truy vấn sang nhánh trái [L, Mid] hoặc nhánh phải [Mid+1, R]."
    ],
    "complexityVi": "Mỗi biến đổi và kiểm tra mất O(M log N), lặp lại log(\\text{Time}) lần ⇒ O((N + Q) log(\\text{Time}) log N).",
    "complexityEn": "Mỗi biến đổi và kiểm tra mất O(M log N), lặp lại log(\\text{Time}) lần ⇒ O((N + Q) log(\\text{Time}) log N).",
    "blogs": [
      {
        "title": "Parallel Binary Search Tutorial by Errichto",
        "url": "https://codeforces.com/blog/entry/45508"
      },
      {
        "title": "Parallel Binary Search on Codeforces",
        "url": "https://codeforces.com/blog/entry/77519"
      }
    ],
    "problems": [
      {
        "code": "CF 484E",
        "name": "Sign on Fence",
        "rating": 2500,
        "url": "https://codeforces.com/problemset/problem/484/E",
        "commentVi": "Tìm độ cao lớn nhất của bảng quảng cáo có chiều rộng w lọt vừa hàng rào trong [L, R]. Giải bằng Parallel Binary Search kết hợp Segment Tree duy trì đoạn 1 liên tiếp dài nhất.",
        "commentEn": "Tìm độ cao lớn nhất của bảng quảng cáo có chiều rộng w lọt vừa hàng rào trong [L, R]. Giải bằng Parallel Binary Search kết hợp Segment Tree duy trì đoạn 1 liên tiếp dài nhất.",
        "contestId": 484,
        "index": "E"
      },
      {
        "code": "CF 1100F",
        "name": "Ivan and Burgers",
        "rating": 2500,
        "url": "https://codeforces.com/problemset/problem/1100/F",
        "commentVi": "Truy vấn Max XOR đoạn con: Xây dựng Linear Basis theo tiền tố (Prefix Linear Basis), lưu kèm vị trí xuất hiện lớn nhất của mỗi bit cơ sở để trả lời mọi truy vấn trong O(30).",
        "commentEn": "Truy vấn Max XOR đoạn con: Xây dựng Linear Basis theo tiền tố (Prefix Linear Basis), lưu kèm vị trí xuất hiện lớn nhất của mỗi bit cơ sở để trả lời mọi truy vấn trong O(30).",
        "contestId": 1100,
        "index": "F"
      },
      {
        "code": "CF 1065F",
        "name": "Up and Down the Tree",
        "rating": 2400,
        "url": "https://codeforces.com/problemset/problem/1065/F",
        "commentVi": "Tree DP: Nút có thể nhảy ngược lên tổ tiên nếu khoảng cách tới lá ≤ k. Tính số lá có thể thu gom được mà vẫn quay về được tổ tiên, và số lá tối đa thu gom được nếu không cần quay về.",
        "commentEn": "Tree DP: Nút có thể nhảy ngược lên tổ tiên nếu khoảng cách tới lá ≤ k. Tính số lá có thể thu gom được mà vẫn quay về được tổ tiên, và số lá tối đa thu gom được nếu không cần quay về.",
        "contestId": 1065,
        "index": "F"
      },
      {
        "code": "CF 1208F",
        "name": "Fooling TSP",
        "rating": 2400,
        "url": "https://codeforces.com/problemset/problem/1208/F",
        "commentVi": "SOS DP tối ưu hóa: Duy trì 2 chỉ số lớn nhất j < k thỏa mãn mask \\subseteq (a_j \\,\\&\\, a_k). Duyệt i từ phải sang trái, tham lam từng bit từ cao xuống thấp để tối đa hóa a_i \\mid (a_j \\,\\&\\, a_k).",
        "commentEn": "SOS DP tối ưu hóa: Duy trì 2 chỉ số lớn nhất j < k thỏa mãn mask \\subseteq (a_j \\,\\&\\, a_k). Duyệt i từ phải sang trái, tham lam từng bit từ cao xuống thấp để tối đa hóa a_i \\mid (a_j \\,\\&\\, a_k).",
        "contestId": 1208,
        "index": "F"
      },
      {
        "code": "CF 685C",
        "name": "Optimal Point",
        "rating": 2900,
        "url": "https://codeforces.com/problemset/problem/685/C",
        "commentVi": "Chặt nhị phân bán kính khoảng cách Manhattan R. Biến đổi tọa độ (x, y, z) thành 4 biến (x+y+z, x+y-z, x-y+z, -x+y+z), giải hệ bất phương trình khoảng nguyên.",
        "commentEn": "Chặt nhị phân bán kính khoảng cách Manhattan R. Biến đổi tọa độ (x, y, z) thành 4 biến (x+y+z, x+y-z, x-y+z, -x+y+z), giải hệ bất phương trình khoảng nguyên.",
        "contestId": 685,
        "index": "C"
      },
      {
        "code": "CF 1379D",
        "name": "Freight Train",
        "rating": 2400,
        "url": "https://codeforces.com/problemset/problem/1379/D",
        "commentVi": "Two Pointers trên vòng tròn modulo m/2: Tìm khoảng thời gian bảo trì độ dài k sao cho số lượng chuyến tàu bị hủy là ít nhất.",
        "commentEn": "Two Pointers trên vòng tròn modulo m/2: Tìm khoảng thời gian bảo trì độ dài k sao cho số lượng chuyến tàu bị hủy là ít nhất.",
        "contestId": 1379,
        "index": "D"
      },
      {
        "code": "CF 149D",
        "name": "Coloring Brackets",
        "rating": 1900,
        "url": "https://codeforces.com/problemset/problem/149/D",
        "commentVi": "DP ngoặc lồng nhau: dp[l][r][c_l][c_r] là số cách tô màu đoạn ngoặc đúng [l, r] khi ngoặc tại l có màu c_l và tại r có màu c_r thỏa mãn các ràng buộc kề nhau.",
        "commentEn": "DP ngoặc lồng nhau: dp[l][r][c_l][c_r] là số cách tô màu đoạn ngoặc đúng [l, r] khi ngoặc tại l có màu c_l và tại r có màu c_r thỏa mãn các ràng buộc kề nhau.",
        "contestId": 149,
        "index": "D"
      },
      {
        "code": "CF 1363E",
        "name": "Tree Shuffling",
        "rating": 1700,
        "url": "https://codeforces.com/problemset/problem/1363/E",
        "commentVi": "Tree DP tham lam: Đẩy chi phí rẻ nhất từ gốc xuống các nút con: cost[u] = \\min(cost[u], cost[parent]). Tại mỗi cây con, ghép tối đa các cặp (0\\to 1) và (1\\to 0) với chi phí của nút cha.",
        "commentEn": "Tree DP tham lam: Đẩy chi phí rẻ nhất từ gốc xuống các nút con: cost[u] = \\min(cost[u], cost[parent]). Tại mỗi cây con, ghép tối đa các cặp (0\\to 1) và (1\\to 0) với chi phí của nút cha.",
        "contestId": 1363,
        "index": "E"
      },
      {
        "code": "CF 1188D",
        "name": "Make Equal",
        "rating": 3100,
        "url": "https://codeforces.com/problemset/problem/1188/D",
        "commentVi": "DP trên từng bit từ 0 đến 60: Số lượng phép nhớ (carry) khi cộng thêm X vào mảng phụ thuộc vào thứ tự sắp xếp của (a_i (mod 2ᵏ)). Trạng thái DP lưu số lượng phần tử có nhớ.",
        "commentEn": "DP trên từng bit từ 0 đến 60: Số lượng phép nhớ (carry) khi cộng thêm X vào mảng phụ thuộc vào thứ tự sắp xếp của (a_i (mod 2ᵏ)). Trạng thái DP lưu số lượng phần tử có nhớ.",
        "contestId": 1188,
        "index": "D"
      },
      {
        "code": "CF 1689E",
        "name": "AND-OR-Square",
        "rating": 2400,
        "url": "https://codeforces.com/problemset/problem/1689/E",
        "commentVi": "DSU kiểm tra tính liên thông bit: Đáp án luôn ≤ 2 thao tác tăng/giảm. Dùng DSU kiểm tra xem mảng đã liên thông chưa; nếu chưa thử thay đổi 1 phần tử, nếu vẫn không được thì thay đổi 2 phần tử.",
        "commentEn": "DSU kiểm tra tính liên thông bit: Đáp án luôn ≤ 2 thao tác tăng/giảm. Dùng DSU kiểm tra xem mảng đã liên thông chưa; nếu chưa thử thay đổi 1 phần tử, nếu vẫn không được thì thay đổi 2 phần tử.",
        "contestId": 1689,
        "index": "E"
      }
    ]
  },
  {
    "id": 25,
    "phaseId": 5,
    "nameVi": "TỐI ƯU HÓA WQS / ALIEN'S TRICK (LAMBDA OPTIMIZATION)",
    "nameEn": "WQS Binary Search / Alien's Trick (Lambda Optimization)",
    "tierVi": "Grandmaster (2500 - 2800+)",
    "tierEn": "Grandmaster (2500 - 2800+)",
    "essenceVi": [
      "Alien's Trick (WQS Binary Search) giải quyết bài toán tối ưu hóa khi có ràng buộc 'chọn đúng K phần tử' mà hàm chi phí tối ưu theo K, ký hiệu f(K), có tính chất lồi (Convex) hoặc lõm (Concave).",
      "Kỹ thuật nhân tử Lagrange (Lambda Penalty): Phạt một lượng chi phí \\lambda cho mỗi lần chọn một phần tử. Ta chặt nhị phân hệ số phạt \\lambda để tìm điểm tiếp xúc có đạo hàm bằng \\lambda, loại bỏ hoàn toàn ràng buộc chọn đúng K phần tử và đưa về DP không ràng buộc."
    ],
    "essenceEn": [
      "Alien's Trick (WQS Binary Search) giải quyết bài toán tối ưu hóa khi có ràng buộc 'chọn đúng K phần tử' mà hàm chi phí tối ưu theo K, ký hiệu f(K), có tính chất lồi (Convex) hoặc lõm (Concave).",
      "Kỹ thuật nhân tử Lagrange (Lambda Penalty): Phạt một lượng chi phí \\lambda cho mỗi lần chọn một phần tử. Ta chặt nhị phân hệ số phạt \\lambda để tìm điểm tiếp xúc có đạo hàm bằng \\lambda, loại bỏ hoàn toàn ràng buộc chọn đúng K phần tử và đưa về DP không ràng buộc."
    ],
    "complexityVi": "Thời gian O(log(\\text{cost}) × \\text{Cost}(DP)). Giảm số chiều của quy hoạch động đi 1 bậc.",
    "complexityEn": "Thời gian O(log(\\text{cost}) × \\text{Cost}(DP)). Giảm số chiều của quy hoạch động đi 1 bậc.",
    "blogs": [
      {
        "title": "The Alien's Trick (WQS Binary Search) Explained",
        "url": "https://codeforces.com/blog/entry/67634"
      },
      {
        "title": "WQS Binary Search / Slope Trick Tutorial",
        "url": "https://codeforces.com/blog/entry/78584"
      }
    ],
    "problems": [
      {
        "code": "CF 739E",
        "name": "Gosha is hunting",
        "rating": 2400,
        "url": "https://codeforces.com/problemset/problem/739/E",
        "commentVi": "WQS Binary Search kinh điển: Giới hạn a bóng loại 1 và b bóng loại 2. Chặt nhị phân hình phạt \\lambda cho mỗi lần ném bóng loại 2, quy bài toán về DP tham lam 1 chiều.",
        "commentEn": "WQS Binary Search kinh điển: Giới hạn a bóng loại 1 và b bóng loại 2. Chặt nhị phân hình phạt \\lambda cho mỗi lần ném bóng loại 2, quy bài toán về DP tham lam 1 chiều.",
        "contestId": 739,
        "index": "E"
      },
      {
        "code": "CF 802O",
        "name": "Send the Fool Further (hard)",
        "rating": 2900,
        "url": "https://codeforces.com/problemset/problem/802/O",
        "commentVi": "Chọn đúng k cặp gửi thông điệp: Chặt nhị phân chi phí phạt \\lambda cho mỗi gói gửi bằng Alien's Trick, sau đó dùng Priority Queue (Regret Greedy) giải bài toán không giới hạn số lượng.",
        "commentEn": "Chọn đúng k cặp gửi thông điệp: Chặt nhị phân chi phí phạt \\lambda cho mỗi gói gửi bằng Alien's Trick, sau đó dùng Priority Queue (Regret Greedy) giải bài toán không giới hạn số lượng.",
        "contestId": 802,
        "index": "O"
      },
      {
        "code": "CF 1270G",
        "name": "Subset with Zero Sum",
        "rating": 2600,
        "url": "https://codeforces.com/problemset/problem/1270/G",
        "commentVi": "Dựng đồ thị có hướng i \\to i - a_i. Vì 1 ≤ i - a_i ≤ n, mọi đỉnh đều có bậc ra đúng bằng 1 (Functional Graph). Chu trình có hướng trên đồ thị này chính là tập hợp có tổng bằng 0!",
        "commentEn": "Dựng đồ thị có hướng i \\to i - a_i. Vì 1 ≤ i - a_i ≤ n, mọi đỉnh đều có bậc ra đúng bằng 1 (Functional Graph). Chu trình có hướng trên đồ thị này chính là tập hợp có tổng bằng 0!",
        "contestId": 1270,
        "index": "G"
      },
      {
        "code": "CF 1344D",
        "name": "Résumé Review",
        "rating": 2500,
        "url": "https://codeforces.com/problemset/problem/1344/D",
        "commentVi": "Hàm lợi ích f(b_i) = b_i (a_i - b_i^2) có đạo hàm giảm dần (hàm lõm). Chặt nhị phân độ dốc biên \\lambda = f'(b_i), với mỗi a_i tìm nghiệm nguyên b_i thỏa đạo hàm ≥ \\lambda sao cho ∑ b_i = k.",
        "commentEn": "Hàm lợi ích f(b_i) = b_i (a_i - b_i^2) có đạo hàm giảm dần (hàm lõm). Chặt nhị phân độ dốc biên \\lambda = f'(b_i), với mỗi a_i tìm nghiệm nguyên b_i thỏa đạo hàm ≥ \\lambda sao cho ∑ b_i = k.",
        "contestId": 1344,
        "index": "D"
      },
      {
        "code": "CF 1097E",
        "name": "Egor and an RPG game",
        "rating": 2700,
        "url": "https://codeforces.com/problemset/problem/1097/E",
        "commentVi": "Định lý Dilworth: Nếu độ dài LIS ≥ k, ta bóc tách dãy LIS đó ra; nếu LIS < k, mảng có thể phân rã thành < k dãy giảm dần. Lặp lại quá trình bóc tách để đạt tối đa k dãy.",
        "commentEn": "Định lý Dilworth: Nếu độ dài LIS ≥ k, ta bóc tách dãy LIS đó ra; nếu LIS < k, mảng có thể phân rã thành < k dãy giảm dần. Lặp lại quá trình bóc tách để đạt tối đa k dãy.",
        "contestId": 1097,
        "index": "E"
      },
      {
        "code": "CF 1250N",
        "name": "Wire Reconstruction",
        "rating": 1900,
        "url": "https://codeforces.com/problemset/problem/1250/N",
        "commentVi": "Đồ thị và thành phần liên thông: Co các dây nối thành cây khung, nhấc các cạnh thừa không cần thiết của các thành phần liên thông để nối chúng lại thành một đồ thị liên thông duy nhất.",
        "commentEn": "Đồ thị và thành phần liên thông: Co các dây nối thành cây khung, nhấc các cạnh thừa không cần thiết của các thành phần liên thông để nối chúng lại thành một đồ thị liên thông duy nhất.",
        "contestId": 1250,
        "index": "N"
      },
      {
        "code": "CF 1394C",
        "name": "Boboniu and String",
        "rating": 2800,
        "url": "https://codeforces.com/problemset/problem/1394/C",
        "commentVi": "Biểu diễn mỗi xâu thành cặp (cnt_B, cnt_N) trên mặt phẳng tọa độ. Chặt nhị phân bán kính khoảng cách Chebyshev và kiểm tra giao điểm của các hình bình hành 45^\\circ.",
        "commentEn": "Biểu diễn mỗi xâu thành cặp (cnt_B, cnt_N) trên mặt phẳng tọa độ. Chặt nhị phân bán kính khoảng cách Chebyshev và kiểm tra giao điểm của các hình bình hành 45^\\circ.",
        "contestId": 1394,
        "index": "C"
      },
      {
        "code": "CF 1479D",
        "name": "Odd Mineral Resource",
        "rating": 2700,
        "url": "https://codeforces.com/problemset/problem/1479/D",
        "commentVi": "Persistent Segment Tree kết hợp gán nhãn ngẫu nhiên XOR (XOR Hashing): Gán mỗi loại khoáng sản một số ngẫu nhiên 64-bit, kiểm tra giá trị XOR trên cây để tìm khoáng sản xuất hiện lẻ lần.",
        "commentEn": "Persistent Segment Tree kết hợp gán nhãn ngẫu nhiên XOR (XOR Hashing): Gán mỗi loại khoáng sản một số ngẫu nhiên 64-bit, kiểm tra giá trị XOR trên cây để tìm khoáng sản xuất hiện lẻ lần.",
        "contestId": 1479,
        "index": "D"
      },
      {
        "code": "CF 1530E",
        "name": "Minimax",
        "rating": 1900,
        "url": "https://codeforces.com/problemset/problem/1530/E",
        "commentVi": "Tham lam phân tích trường hợp: Sắp xếp các ký tự và xây dựng chuỗi có \\max π[i] nhỏ nhất có thể (bằng 0 nếu có chữ cái xuất hiện 1 lần, bằng 1 nếu phân bổ xen kẽ được).",
        "commentEn": "Tham lam phân tích trường hợp: Sắp xếp các ký tự và xây dựng chuỗi có \\max π[i] nhỏ nhất có thể (bằng 0 nếu có chữ cái xuất hiện 1 lần, bằng 1 nếu phân bổ xen kẽ được).",
        "contestId": 1530,
        "index": "E"
      },
      {
        "code": "CF 1601D",
        "name": "Difficult Mountain",
        "rating": 2500,
        "url": "https://codeforces.com/problemset/problem/1601/D",
        "commentVi": "Bất đẳng thức hoán vị (Exchange Argument): Sắp xếp các nhà leo núi theo khóa \\max(s_i, a_i) tăng dần, nếu bằng nhau sắp xếp theo s_i tăng dần. Sau đó tham lam duyệt lấy người leo núi.",
        "commentEn": "Bất đẳng thức hoán vị (Exchange Argument): Sắp xếp các nhà leo núi theo khóa \\max(s_i, a_i) tăng dần, nếu bằng nhau sắp xếp theo s_i tăng dần. Sau đó tham lam duyệt lấy người leo núi.",
        "contestId": 1601,
        "index": "D"
      }
    ]
  },
  {
    "id": 26,
    "phaseId": 5,
    "nameVi": "PHÂN TÁCH TRỌNG TÂM TRÊN CÂY (CENTROID DECOMPOSITION)",
    "nameEn": "Centroid Decomposition on Trees",
    "tierVi": "Grandmaster (2400 - 2700+)",
    "tierEn": "Grandmaster (2400 - 2700+)",
    "essenceVi": [
      "Trọng tâm của cây là đỉnh mà khi xóa nó, mọi cây con còn lại đều có kích thước không vượt quá N/2.",
      "Centroid Decomposition chia để trị trên cây: Tìm trọng tâm, giải quyết các đường đi đi qua trọng tâm, sau đó xóa trọng tâm và đệ quy vào các cây con. Cây trọng tâm (Centroid Tree) có độ sâu tối đa chỉ O(log N)."
    ],
    "essenceEn": [
      "Trọng tâm của cây là đỉnh mà khi xóa nó, mọi cây con còn lại đều có kích thước không vượt quá N/2.",
      "Centroid Decomposition chia để trị trên cây: Tìm trọng tâm, giải quyết các đường đi đi qua trọng tâm, sau đó xóa trọng tâm và đệ quy vào các cây con. Cây trọng tâm (Centroid Tree) có độ sâu tối đa chỉ O(log N)."
    ],
    "complexityVi": "Độ sâu đệ quy O(log N). Tổng thời gian xử lý mọi tầng là O(N log N) hoặc O(N log^2 N).",
    "complexityEn": "Độ sâu đệ quy O(log N). Tổng thời gian xử lý mọi tầng là O(N log N) hoặc O(N log^2 N).",
    "blogs": [
      {
        "title": "Centroid Decomposition Tutorial and Applications",
        "url": "https://codeforces.com/blog/entry/81661"
      },
      {
        "title": "Divide and Conquer on Trees (Centroid)",
        "url": "https://codeforces.com/blog/entry/58025"
      }
    ],
    "problems": [
      {
        "code": "CF 321C",
        "name": "Ciel the Commander",
        "rating": 2100,
        "url": "https://codeforces.com/problemset/problem/321/C",
        "commentVi": "Mức thông hiểu: Tìm trọng tâm gán nhãn 'A', sau đó đệ quy vào các cây con gán 'B', 'C'... Vì độ sâu cây trọng tâm ≤ log_2(10⁵) ≈ 17 ≤ 26, luôn gán đủ bằng bảng chữ cái tiếng Anh.",
        "commentEn": "Mức thông hiểu: Tìm trọng tâm gán nhãn 'A', sau đó đệ quy vào các cây con gán 'B', 'C'... Vì độ sâu cây trọng tâm ≤ log_2(10⁵) ≈ 17 ≤ 26, luôn gán đủ bằng bảng chữ cái tiếng Anh.",
        "contestId": 321,
        "index": "C"
      },
      {
        "code": "CF 161D",
        "name": "Distance in tree",
        "rating": 1800,
        "url": "https://codeforces.com/problemset/problem/161/D",
        "commentVi": "Đếm số cặp đỉnh có khoảng cách bằng k: Tìm trọng tâm, tính khoảng cách từ trọng tâm tới các lá, dùng mảng đếm tần suất ghép cặp d_1 + d_2 = k và trừ đi các cặp cùng nhánh con.",
        "commentEn": "Đếm số cặp đỉnh có khoảng cách bằng k: Tìm trọng tâm, tính khoảng cách từ trọng tâm tới các lá, dùng mảng đếm tần suất ghép cặp d_1 + d_2 = k và trừ đi các cặp cùng nhánh con.",
        "contestId": 161,
        "index": "D"
      },
      {
        "code": "CF 342E",
        "name": "Xenia and Tree",
        "rating": 2400,
        "url": "https://codeforces.com/problemset/problem/342/E",
        "commentVi": "Centroid Tree động: Dựng cây trọng tâm. Mỗi nút trọng tâm lưu khoảng cách nhỏ nhất tới một nút đỏ trong cây con trọng tâm của nó. Khi cập nhật đỏ, nhảy lên O(log N) tổ tiên trọng tâm để cập nhật.",
        "commentEn": "Centroid Tree động: Dựng cây trọng tâm. Mỗi nút trọng tâm lưu khoảng cách nhỏ nhất tới một nút đỏ trong cây con trọng tâm của nó. Khi cập nhật đỏ, nhảy lên O(log N) tổ tiên trọng tâm để cập nhật.",
        "contestId": 342,
        "index": "E"
      },
      {
        "code": "CF 1790F",
        "name": "Timofey and Black-White Tree",
        "rating": 2100,
        "url": "https://codeforces.com/problemset/problem/1790/F",
        "commentVi": "Cập nhật đỉnh đen và truy vấn khoảng cách ngắn nhất: Dùng Centroid Tree hoặc nhận xét BFS: Khoảng cách ngắn nhất giảm dần sau mỗi thao tác và không bao giờ vượt quá √N.",
        "commentEn": "Cập nhật đỉnh đen và truy vấn khoảng cách ngắn nhất: Dùng Centroid Tree hoặc nhận xét BFS: Khoảng cách ngắn nhất giảm dần sau mỗi thao tác và không bao giờ vượt quá √N.",
        "contestId": 1790,
        "index": "F"
      },
      {
        "code": "CF 1303G",
        "name": "Antichain",
        "rating": 2900,
        "url": "https://codeforces.com/problemset/problem/1303/G",
        "commentVi": "Centroid Decomposition kết hợp Convex Hull Trick: Tính tổng ∑_{i=1}^k i × a_i trên đường đi. Mỗi đường đi từ trọng tâm xuống lá là một đường thẳng y = mx + c, tối ưu bằng Li Chao Tree.",
        "commentEn": "Centroid Decomposition kết hợp Convex Hull Trick: Tính tổng ∑_{i=1}^k i × a_i trên đường đi. Mỗi đường đi từ trọng tâm xuống lá là một đường thẳng y = mx + c, tối ưu bằng Li Chao Tree.",
        "contestId": 1303,
        "index": "G"
      },
      {
        "code": "CF 715C",
        "name": "Digit Tree",
        "rating": 2700,
        "url": "https://codeforces.com/problemset/problem/715/C",
        "commentVi": "Centroid Decomposition kết hợp nghịch đảo modulo: Ghép đường đi từ u lên trọng tâm C và từ C xuống v sao cho (val_{up} × 10^{len} + val_{down}) \\equiv 0 mod M bằng `std::map`.",
        "commentEn": "Centroid Decomposition kết hợp nghịch đảo modulo: Ghép đường đi từ u lên trọng tâm C và từ C xuống v sao cho (val_{up} × 10^{len} + val_{down}) \\equiv 0 mod M bằng `std::map`.",
        "contestId": 715,
        "index": "C"
      },
      {
        "code": "CF 150E",
        "name": "Freezing with Style",
        "rating": 3100,
        "url": "https://codeforces.com/problemset/problem/150/E",
        "commentVi": "Centroid Decomposition kết hợp chặt nhị phân trung vị và Monotonic Queue: Chuyển trọng số cạnh thành +1 hoặc -1, tìm đường đi có độ dài trong [L, R] có tổng trọng số ≥ 0.",
        "commentEn": "Centroid Decomposition kết hợp chặt nhị phân trung vị và Monotonic Queue: Chuyển trọng số cạnh thành +1 hoặc -1, tìm đường đi có độ dài trong [L, R] có tổng trọng số ≥ 0.",
        "contestId": 150,
        "index": "E"
      },
      {
        "code": "CF 1260F",
        "name": "Colored Tree",
        "rating": 3000,
        "url": "https://codeforces.com/problemset/problem/1260/F",
        "commentVi": "Tính tổng khoảng cách giữa các cặp đỉnh có màu giao nhau: Chuyển bài toán thành quét dòng trên màu sắc kết hợp Centroid Decomposition hoặc Euler Tour cập nhật trên Fenwick Tree.",
        "commentEn": "Tính tổng khoảng cách giữa các cặp đỉnh có màu giao nhau: Chuyển bài toán thành quét dòng trên màu sắc kết hợp Centroid Decomposition hoặc Euler Tour cập nhật trên Fenwick Tree.",
        "contestId": 1260,
        "index": "F"
      },
      {
        "code": "CF 1178F2",
        "name": "Short Colorful Strip",
        "rating": 2800,
        "url": "https://codeforces.com/problemset/problem/1178/F2",
        "commentVi": "Nén các đoạn màu liên tiếp giống nhau, kiểm tra tính hợp lệ của các khoảng màu lồng nhau, sau đó chạy DP trên đoạn [L, R] chia tách tại vị trí màu nhỏ nhất.",
        "commentEn": "Nén các đoạn màu liên tiếp giống nhau, kiểm tra tính hợp lệ của các khoảng màu lồng nhau, sau đó chạy DP trên đoạn [L, R] chia tách tại vị trí màu nhỏ nhất.",
        "contestId": 1178,
        "index": "F2"
      },
      {
        "code": "CF 1437F",
        "name": "Emotional Fishermen",
        "rating": 2600,
        "url": "https://codeforces.com/problemset/problem/1437/F",
        "commentVi": "Sắp xếp các phần tử tăng dần. dp[i] là số cách xếp sao cho a_i là phần tử hợp lệ tiếp theo (gấp đôi phần tử trước đó). Tối ưu hóa chuyển trạng thái bằng mảng cộng dồn.",
        "commentEn": "Sắp xếp các phần tử tăng dần. dp[i] là số cách xếp sao cho a_i là phần tử hợp lệ tiếp theo (gấp đôi phần tử trước đó). Tối ưu hóa chuyển trạng thái bằng mảng cộng dồn.",
        "contestId": 1437,
        "index": "F"
      }
    ]
  },
  {
    "id": 27,
    "phaseId": 5,
    "nameVi": "BIẾN ĐỔI FOURIER NHANH (FAST FOURIER TRANSFORM - FFT / NTT)",
    "nameEn": "Fast Fourier Transform (FFT) & Number Theoretic Transform (NTT)",
    "tierVi": "Grandmaster (2400 - 2800+)",
    "tierEn": "Grandmaster (2400 - 2800+)",
    "essenceVi": [
      "FFT (trên số phức) và NTT (Number Theoretic Transform trên trường hữu hạn Z_p với modulo nguyên tố dạng c × 2ᵏ + 1 như 998244353) tính tích chập (Convolution) của 2 đa thức A(x) × B(x) bậc N trong O(N log N) thay vì O(N²).",
      "Chuyển đổi biểu diễn hệ số (Coefficient representation) sang biểu diễn giá trị điểm (Point-value representation) tại các nghiệm đơn vị (Roots of unity) và ngược lại qua IFFT/INTT."
    ],
    "essenceEn": [
      "FFT (trên số phức) và NTT (Number Theoretic Transform trên trường hữu hạn Z_p với modulo nguyên tố dạng c × 2ᵏ + 1 như 998244353) tính tích chập (Convolution) của 2 đa thức A(x) × B(x) bậc N trong O(N log N) thay vì O(N²).",
      "Chuyển đổi biểu diễn hệ số (Coefficient representation) sang biểu diễn giá trị điểm (Point-value representation) tại các nghiệm đơn vị (Roots of unity) và ngược lại qua IFFT/INTT."
    ],
    "complexityVi": "Nhân 2 đa thức bậc N trong O(N log N). Nghịch đảo đa thức, tính \\ln, \\exp trong O(N log N).",
    "complexityEn": "Nhân 2 đa thức bậc N trong O(N log N). Nghịch đảo đa thức, tính \\ln, \\exp trong O(N log N).",
    "blogs": [
      {
        "title": "Comprehensive FFT/NTT Tutorial on Codeforces",
        "url": "https://codeforces.com/blog/entry/43499"
      },
      {
        "title": "Polynomial Operations and NTT by MiFaFaOvO",
        "url": "https://codeforces.com/blog/entry/48798"
      }
    ],
    "problems": [
      {
        "code": "CF 528D",
        "name": "Fuzzy Search",
        "rating": 2200,
        "url": "https://codeforces.com/problemset/problem/528/D",
        "commentVi": "FFT so khớp chuỗi có sai số: Với mỗi ký tự ('A', 'C', 'G', 'T'), mở rộng vùng an toàn k đơn vị. Đảo ngược chuỗi mẫu P và tính tích chập FFT với văn bản T để đếm số lượng ký tự khớp.",
        "commentEn": "FFT so khớp chuỗi có sai số: Với mỗi ký tự ('A', 'C', 'G', 'T'), mở rộng vùng an toàn k đơn vị. Đảo ngược chuỗi mẫu P và tính tích chập FFT với văn bản T để đếm số lượng ký tự khớp.",
        "contestId": 528,
        "index": "D"
      },
      {
        "code": "CF 954I",
        "name": "Yet Another String Matching Problem",
        "rating": 2200,
        "url": "https://codeforces.com/problemset/problem/954/I",
        "commentVi": "Có 6 chữ cái từ 'a' đến 'f' ⇒ C(6, 2) = 15 cặp chữ cái. Chạy FFT cho mỗi cặp (c_1, c_2) để kiểm tra xem tại vị trí dịch chuyển nào có sự xuất hiện của cạnh nối, sau đó dùng DSU đếm số thao tác.",
        "commentEn": "Có 6 chữ cái từ 'a' đến 'f' ⇒ C(6, 2) = 15 cặp chữ cái. Chạy FFT cho mỗi cặp (c_1, c_2) để kiểm tra xem tại vị trí dịch chuyển nào có sự xuất hiện của cạnh nối, sau đó dùng DSU đếm số thao tác.",
        "contestId": 954,
        "index": "I"
      },
      {
        "code": "CF 1096G",
        "name": "Lucky Tickets",
        "rating": 2300,
        "url": "https://codeforces.com/problemset/problem/1096/G",
        "commentVi": "Tạo đa thức đặc trưng P(x) = ∑ x^d cho các chữ số cho phép. Đa thức sinh tổng nửa đầu là P(x)^{n/2} (mod 998244353). Dùng lũy thừa nhị phân đa thức kết hợp NTT, đáp án là ∑ c_i^2.",
        "commentEn": "Tạo đa thức đặc trưng P(x) = ∑ x^d cho các chữ số cho phép. Đa thức sinh tổng nửa đầu là P(x)^{n/2} (mod 998244353). Dùng lũy thừa nhị phân đa thức kết hợp NTT, đáp án là ∑ c_i^2.",
        "contestId": 1096,
        "index": "G"
      },
      {
        "code": "CF 632E",
        "name": "Thief in a Shop",
        "rating": 2400,
        "url": "https://codeforces.com/problemset/problem/632/E",
        "commentVi": "Tìm mọi giá trị có thể tạo thành từ đúng k món đồ: Đa thức P(x) với x^v = 1 nếu có món đồ giá v. Tính P(x)^k bằng lũy thừa nhanh NTT, các số mũ có hệ số > 0 là giá trị khả thi.",
        "commentEn": "Tìm mọi giá trị có thể tạo thành từ đúng k món đồ: Đa thức P(x) với x^v = 1 nếu có món đồ giá v. Tính P(x)^k bằng lũy thừa nhanh NTT, các số mũ có hệ số > 0 là giá trị khả thi.",
        "contestId": 632,
        "index": "E"
      },
      {
        "code": "CF 1398G",
        "name": "Running Competition",
        "rating": 2600,
        "url": "https://codeforces.com/problemset/problem/1398/G",
        "commentVi": "Tìm mọi hiệu khoảng cách x_j - x_i: Đặt A(x) = ∑ x^{a_i} và B(x) = ∑ x^{-a_i} = ∑ x^{M - a_i}. Tích chập A × B qua FFT cho biết mọi khoảng cách xuất hiện. Sau đó duyệt ước số trả lời truy vấn.",
        "commentEn": "Tìm mọi hiệu khoảng cách x_j - x_i: Đặt A(x) = ∑ x^{a_i} và B(x) = ∑ x^{-a_i} = ∑ x^{M - a_i}. Tích chập A × B qua FFT cho biết mọi khoảng cách xuất hiện. Sau đó duyệt ước số trả lời truy vấn.",
        "contestId": 1398,
        "index": "G"
      },
      {
        "code": "CF 1251F",
        "name": "White Lines",
        "rating": 2600,
        "url": "https://codeforces.com/problemset/problem/1251/F",
        "commentVi": "Với mỗi bảng trắng, các thanh chắn ngắn hơn chia thành nhóm xuất hiện 1 lần (đóng góp (1 + 2x)) và nhóm xuất hiện ≥ 2 lần (đóng góp (1 + 2x + x^2) = (1+x)^2). Nhân đa thức bằng NTT.",
        "commentEn": "Với mỗi bảng trắng, các thanh chắn ngắn hơn chia thành nhóm xuất hiện 1 lần (đóng góp (1 + 2x)) và nhóm xuất hiện ≥ 2 lần (đóng góp (1 + 2x + x^2) = (1+x)^2). Nhân đa thức bằng NTT.",
        "contestId": 1251,
        "index": "F"
      },
      {
        "code": "CF 1613F",
        "name": "Tree Xor",
        "rating": 2500,
        "url": "https://codeforces.com/problemset/problem/1613/F",
        "commentVi": "Bao hàm loại trừ trên cây: Biến đổi thành tích của N nhị thức bậc 1 (1 + d_i x) với d_i là số con của nút i. Dùng Divide and Conquer kết hợp NTT nhân N nhị thức trong O(N log^2 N).",
        "commentEn": "Bao hàm loại trừ trên cây: Biến đổi thành tích của N nhị thức bậc 1 (1 + d_i x) với d_i là số con của nút i. Dùng Divide and Conquer kết hợp NTT nhân N nhị thức trong O(N log^2 N).",
        "contestId": 1613,
        "index": "F"
      },
      {
        "code": "CF 986D",
        "name": "Perfect Power",
        "rating": 2900,
        "url": "https://codeforces.com/problemset/problem/986/D",
        "commentVi": "Nhân số lớn bằng FFT: Tích các số có tổng cố định đạt cực đại khi chia thành các số 3. Tính 3^k bằng lũy thừa nhị phân số lớn sử dụng FFT, so sánh với số nguyên lớn n.",
        "commentEn": "Nhân số lớn bằng FFT: Tích các số có tổng cố định đạt cực đại khi chia thành các số 3. Tính 3^k bằng lũy thừa nhị phân số lớn sử dụng FFT, so sánh với số nguyên lớn n.",
        "contestId": 986,
        "index": "D"
      },
      {
        "code": "CF 1039D",
        "name": "You Are Given a Tree",
        "rating": 2800,
        "url": "https://codeforces.com/problemset/problem/1039/D",
        "commentVi": "Chia căn kết quả: Với k ≤ √N log N, chạy Tree DP tham lam O(N). Với các giá trị ans ≤ N/k ≤ √N, dùng chặt nhị phân tìm khoảng các giá trị k có cùng đáp án (Parallel/Block BS).",
        "commentEn": "Chia căn kết quả: Với k ≤ √N log N, chạy Tree DP tham lam O(N). Với các giá trị ans ≤ N/k ≤ √N, dùng chặt nhị phân tìm khoảng các giá trị k có cùng đáp án (Parallel/Block BS).",
        "contestId": 1039,
        "index": "D"
      },
      {
        "code": "CF 884E",
        "name": "Binary Matrix",
        "rating": 2600,
        "url": "https://codeforces.com/problemset/problem/884/E",
        "commentVi": "Quản lý bộ nhớ cực hạn (16 MB) cho ma trận 2^{12} × 2^{14}: DSU nén chỉ lưu 2 dòng liên tiếp tại mỗi bước duyệt, gán lại nhãn các thành phần liên thông để không bị tràn bộ nhớ.",
        "commentEn": "Quản lý bộ nhớ cực hạn (16 MB) cho ma trận 2^{12} × 2^{14}: DSU nén chỉ lưu 2 dòng liên tiếp tại mỗi bước duyệt, gán lại nhãn các thành phần liên thông để không bị tràn bộ nhớ.",
        "contestId": 884,
        "index": "E"
      }
    ]
  },
  {
    "id": 28,
    "phaseId": 5,
    "nameVi": "SUFFIX AUTOMATON (SAM - MÁY TỰ ĐỘNG HẬU TỐ) & CÂY HẬU TỐ",
    "nameEn": "Suffix Automaton (SAM) & Suffix Tree",
    "tierVi": "Legendary Grandmaster (2600 - 3000+)",
    "tierEn": "Legendary Grandmaster (2600 - 3000+)",
    "essenceVi": [
      "Suffix Automaton (SAM) là một Đồ thị có hướng không chu trình (DAG) nén toàn bộ thông tin của tất cả các chuỗi con của một chuỗi S độ dài N trong đúng O(N) trạng thái và O(N) bước chuyển.",
      "Mỗi trạng thái đại diện cho một lớp tương đương các chuỗi con có cùng tập hợp vị trí kết thúc `endpos`. Cây liên kết hậu tố (Suffix Link Tree) của SAM chính là Cây hậu tố (Suffix Tree) của chuỗi đảo ngược."
    ],
    "essenceEn": [
      "Suffix Automaton (SAM) là một Đồ thị có hướng không chu trình (DAG) nén toàn bộ thông tin của tất cả các chuỗi con của một chuỗi S độ dài N trong đúng O(N) trạng thái và O(N) bước chuyển.",
      "Mỗi trạng thái đại diện cho một lớp tương đương các chuỗi con có cùng tập hợp vị trí kết thúc `endpos`. Cây liên kết hậu tố (Suffix Link Tree) của SAM chính là Cây hậu tố (Suffix Tree) của chuỗi đảo ngược."
    ],
    "complexityVi": "Xây dựng SAM trực tuyến (Online) trong O(N). Số trạng thái ≤ 2N-1, số bước chuyển ≤ 3N-4.",
    "complexityEn": "Xây dựng SAM trực tuyến (Online) trong O(N). Số trạng thái ≤ 2N-1, số bước chuyển ≤ 3N-4.",
    "blogs": [
      {
        "title": "Suffix Automaton Tutorial & Implementation (e-maxx / CP-Algorithms)",
        "url": "https://codeforces.com/blog/entry/20861"
      },
      {
        "title": "Suffix Automaton and Suffix Tree Applications",
        "url": "https://codeforces.com/blog/entry/56545"
      }
    ],
    "problems": [
      {
        "code": "CF 235C",
        "name": "Cyclical Quest",
        "rating": 2600,
        "url": "https://codeforces.com/problemset/problem/235/C",
        "commentVi": "SAM đếm số lần xuất hiện của các hoán vị vòng tròn: Dựng SAM trên chuỗi văn bản S. Với mỗi chuỗi truy vấn x, nhân đôi thành x+x, duyệt trên SAM duy trì độ dài khớp ≥ |x| và đánh dấu các trạng thái đã thăm.",
        "commentEn": "SAM đếm số lần xuất hiện của các hoán vị vòng tròn: Dựng SAM trên chuỗi văn bản S. Với mỗi chuỗi truy vấn x, nhân đôi thành x+x, duyệt trên SAM duy trì độ dài khớp ≥ |x| và đánh dấu các trạng thái đã thăm.",
        "contestId": 235,
        "index": "C"
      },
      {
        "code": "CF 128B",
        "name": "String Problem",
        "rating": 1900,
        "url": "https://codeforces.com/problemset/problem/128/B",
        "commentVi": "Tìm xâu con thứ k theo thứ tự từ điển: Dựng SAM, tính số lượng xâu con xuất phát từ mỗi trạng thái bằng DP trên DAG. Sau đó duyệt tham lam theo thứ tự từ điển các cạnh chuyển trạng thái.",
        "commentEn": "Tìm xâu con thứ k theo thứ tự từ điển: Dựng SAM, tính số lượng xâu con xuất phát từ mỗi trạng thái bằng DP trên DAG. Sau đó duyệt tham lam theo thứ tự từ điển các cạnh chuyển trạng thái.",
        "contestId": 128,
        "index": "B"
      },
      {
        "code": "CF 1037H",
        "name": "Security",
        "rating": 3200,
        "url": "https://codeforces.com/problemset/problem/1037/H",
        "commentVi": "SAM kết hợp Persistent Segment Tree: Dùng cây SegTree lưu tập `endpos` của mỗi trạng thái. Truy vấn xâu con lớn hơn T theo từ điển nhỏ nhất xuất hiện trong [L, R] bằng cách duyệt và kiểm tra `endpos` lọt vào [L+|len|-1, R].",
        "commentEn": "SAM kết hợp Persistent Segment Tree: Dùng cây SegTree lưu tập `endpos` của mỗi trạng thái. Truy vấn xâu con lớn hơn T theo từ điển nhỏ nhất xuất hiện trong [L, R] bằng cách duyệt và kiểm tra `endpos` lọt vào [L+|len|-1, R].",
        "contestId": 1037,
        "index": "H"
      },
      {
        "code": "CF 123D",
        "name": "String",
        "rating": 2600,
        "url": "https://codeforces.com/problemset/problem/123/D",
        "commentVi": "Tính ∑ C(cnt(p)+1, 2) cho mọi chuỗi con p: Dựng SAM, tính tần suất xuất hiện cnt của mỗi trạng thái qua cây Suffix Link. Mỗi trạng thái đóng góp (len[u] - len[link[u]]) × C(cnt[u]+1, 2).",
        "commentEn": "Tính ∑ C(cnt(p)+1, 2) cho mọi chuỗi con p: Dựng SAM, tính tần suất xuất hiện cnt của mỗi trạng thái qua cây Suffix Link. Mỗi trạng thái đóng góp (len[u] - len[link[u]]) × C(cnt[u]+1, 2).",
        "contestId": 123,
        "index": "D"
      },
      {
        "code": "CF 666E",
        "name": "Forensic Examination",
        "rating": 3000,
        "url": "https://codeforces.com/problemset/problem/666/E",
        "commentVi": "Generalized SAM + Segment Tree Merge: Dựng SAM trên tập M chuỗi văn bản. Mỗi trạng thái duy trì một Segment Tree lưu tần suất xuất hiện trong từng chuỗi, gộp cây trên Suffix Link để trả lời truy vấn cực trị.",
        "commentEn": "Generalized SAM + Segment Tree Merge: Dựng SAM trên tập M chuỗi văn bản. Mỗi trạng thái duy trì một Segment Tree lưu tần suất xuất hiện trong từng chuỗi, gộp cây trên Suffix Link để trả lời truy vấn cực trị.",
        "contestId": 666,
        "index": "E"
      },
      {
        "code": "CF 316G3",
        "name": "Good Substrings",
        "rating": 2400,
        "url": "https://codeforces.com/problemset/problem/316/G3",
        "commentVi": "Dựng Generalized SAM cho chuỗi S và n chuỗi ràng buộc. Đếm số lần xuất hiện của mỗi trạng thái trong từng chuỗi bằng cách lan truyền trên cây Suffix Link, kiểm tra điều kiện [l_i, r_i].",
        "commentEn": "Dựng Generalized SAM cho chuỗi S và n chuỗi ràng buộc. Đếm số lần xuất hiện của mỗi trạng thái trong từng chuỗi bằng cách lan truyền trên cây Suffix Link, kiểm tra điều kiện [l_i, r_i].",
        "contestId": 316,
        "index": "G3"
      },
      {
        "code": "CF 1073G",
        "name": "Yet Another LCP Problem",
        "rating": 2200,
        "url": "https://codeforces.com/problemset/problem/1073/G",
        "commentVi": "Dựng Cây ảo (Virtual Tree) trên Suffix Tree (cây Suffix Link của SAM): Tính tổng LCP giữa hai tập hậu tố A và B bằng cách tính trọng số các nút LCA trên cây ảo trong O((|A| + |B|) log N).",
        "commentEn": "Dựng Cây ảo (Virtual Tree) trên Suffix Tree (cây Suffix Link của SAM): Tính tổng LCP giữa hai tập hậu tố A và B bằng cách tính trọng số các nút LCA trên cây ảo trong O((|A| + |B|) log N).",
        "contestId": 1073,
        "index": "G"
      },
      {
        "code": "CF 472D",
        "name": "Design Tutorial: Inverse the Problem",
        "rating": 1900,
        "url": "https://codeforces.com/problemset/problem/472/D",
        "commentVi": "Khôi phục cây từ ma trận khoảng cách: Chạy thuật toán cây khung nhỏ nhất (Prim/Kruskal) trên ma trận khoảng cách, sau đó chạy DFS tính lại khoảng cách trên cây để so sánh với ma trận gốc.",
        "commentEn": "Khôi phục cây từ ma trận khoảng cách: Chạy thuật toán cây khung nhỏ nhất (Prim/Kruskal) trên ma trận khoảng cách, sau đó chạy DFS tính lại khoảng cách trên cây để so sánh với ma trận gốc.",
        "contestId": 472,
        "index": "D"
      },
      {
        "code": "CF 802L",
        "name": "Send the Fool Further (medium)",
        "rating": 2000,
        "url": "https://codeforces.com/problemset/problem/802/L",
        "commentVi": "Kỳ vọng ngẫu nhiên trên cây (Random Walk on Tree): Phương trình kỳ vọng E[u] = \\frac{1}{deg(u)} ∑ (E[v] + w). Biểu diễn E[u] = A_u E[parent] + B_u và tính bằng 2 lượt DFS.",
        "commentEn": "Kỳ vọng ngẫu nhiên trên cây (Random Walk on Tree): Phương trình kỳ vọng E[u] = \\frac{1}{deg(u)} ∑ (E[v] + w). Biểu diễn E[u] = A_u E[parent] + B_u và tính bằng 2 lượt DFS.",
        "contestId": 802,
        "index": "L"
      },
      {
        "code": "CF 700D",
        "name": "Huffman Coding on a String",
        "rating": 3200,
        "url": "https://codeforces.com/problemset/problem/700/D",
        "commentVi": "Mo's Algorithm chia căn tần suất kết hợp Priority Queue: Các phần tử có tần suất > √N tối đa √N phần tử, mô phỏng thuật toán Huffman Coding trên các khối tần suất bằng hàng đợi ưu tiên.",
        "commentEn": "Mo's Algorithm chia căn tần suất kết hợp Priority Queue: Các phần tử có tần suất > √N tối đa √N phần tử, mô phỏng thuật toán Huffman Coding trên các khối tần suất bằng hàng đợi ưu tiên.",
        "contestId": 700,
        "index": "D"
      }
    ]
  }
];

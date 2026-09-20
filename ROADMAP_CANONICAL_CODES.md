# KHO MÃ NGUỒN CHUẨN (CANONICAL CODE TEMPLATES) - 28 CHỦ ĐỀ THUẬT TOÁN CP

Tài liệu này tổng hợp **bộ mã nguồn chuẩn (Canonical Implementations)** cho toàn bộ 28 chủ đề thuật toán trong lộ trình Competitive Programming.
Mỗi mẫu code được chọn lọc và tinh chỉnh kỹ lưỡng dựa trên các nguồn uy tín hàng đầu thế giới (**CP-Algorithms**, **USACO Guide**, **KACTL**, **Codeforces Edu**, và code của các Grandmaster/LGM như **Errichto**, **Benq**, **Um_nik**).

---

## TIÊU CHUẨN THIẾT KẾ MÃ NGUỒN ("HUMAN-WRITTEN & READABLE")

1. **Không lạm dụng Macro gây rối mắt**:
   - Tuyệt đối không dùng các macro viết tắt khó hiểu như `#define FOR(i, a, b)`, `#define REP(i, n)`, `#define pb push_back`, `#define all(x)`.
   - Giữ nguyên cú pháp C++ chuẩn (`for (int i = 0; i < n; ++i)`, `vector`, `auto`).
2. **Đóng gói hướng module (Modular Struct / Class)**:
   - Các cấu trúc dữ liệu phức tạp (DSU, Fenwick, SegTree, Dinic, HLD, SAM...) được bọc gọn trong một `struct` với hàm khởi tạo (`constructor`) và các phương thức tự nhiên (`add`, `query`, `unite`, `get`).
   - Giúp người học có thể đọc hiểu luồng dữ liệu độc lập và copy trực tiếp vào template bài thi mà không sợ xung đột tên biến toàn cục.
3. **Chú thích logic trọng tâm (Pedagogical Comments)**:
   - Mỗi hàm và câu lệnh mấu chốt đều có comment giải thích *tại sao lại làm như vậy* (bất biến, cách nén đường đi, lazy propagation, bit manipulation).
4. **Chuẩn C++17/20 hiện đại, tối ưu hiệu năng**:
   - Dùng `long long` cho các đại lượng có nguy cơ tràn số.
   - I/O nhanh gọn: `cin.tie(nullptr)->sync_with_stdio(false)`.
5. **Tên hàm ngắn gọn (1 - 2 từ) & Không dùng Lambda**:
   - Tên hàm và phương thức trong struct cực kỳ ngắn gọn, dễ nhớ (1 - 2 từ): `query`, `update`, `build`, `add`, `find`, `unite`, `same`, `size`, `solve`, `dist`, `lca`, `power`, `inv`, `nCr`, `extend`, `decompose`, `max_len`, `count_pairs`, `bs_min`, `bs_max`, `schedule`, `topo_sort`, `bfs_grid`, `lis`, `sos_dp`,...
   - Tuyệt đối không dùng hàm ẩn danh (lambda `[]`, `[&]`), thay thế bằng hàm so sánh độc lập (`cmp`) hoặc nạp chồng toán tử (`operator<`) chuẩn C++ truyền thống, trong sáng và dễ đọc.

---

## MỤC LỤC 28 CHỦ ĐỀ

- [Phase 1: Foundation (Newbie ➔ Pupil)](#phase-1-foundation)
  - [1. Mảng cộng dồn (Prefix Sums) & Mảng hiệu (Difference Array)](#1-prefix-sums--difference-array)
  - [2. Hai con trỏ (Two Pointers) & Cửa sổ trượt (Sliding Window)](#2-two-pointers--sliding-window)
  - [3. Tìm kiếm nhị phân & Chặt nhị phân kết quả (Binary Search on Answer)](#3-binary-search-on-answer)
  - [4. Sàng nguyên tố Eratosthenes & SPF (Smallest Prime Factor)](#4-sieve-of-eratosthenes--spf)
  - [5. Thuật toán Tham lam (Greedy) & Bất đẳng thức sắp xếp](#5-greedy--exchange-argument)
- [Phase 2: Intermediate (Pupil ➔ Specialist)](#phase-2-intermediate)
  - [6. Duyệt đồ thị DFS/BFS & Đồ thị trên lưới (Grid Graphs)](#6-graph-traversal-dfsbfs--grid)
  - [7. Cấu trúc tập hợp rời rạc (Disjoint Set Union - DSU)](#7-disjoint-set-union-dsu)
  - [8. Quy hoạch động cơ bản (0/1 Knapsack & LIS O(N log N))](#8-dynamic-programming-basics)
  - [9. Sắp xếp tô-pô (Topological Sort - Kahn's Algorithm)](#9-topological-sort)
  - [10. Đường đi ngắn nhất (Dijkstra & 0-1 BFS)](#10-shortest-paths-dijkstra--0-1-bfs)
- [Phase 3: Advanced (Specialist ➔ Expert)](#phase-3-advanced)
  - [11. Tổ tiên chung gần nhất (LCA), Binary Lifting & Euler Tour](#11-lca-binary-lifting--euler-tour)
  - [12. Quy hoạch động trên cây & Kỹ thuật đổi gốc (Tree DP & Rerooting)](#12-tree-dp--rerooting)
  - [13. Số học Modular & Tổ hợp (Fermat's Little Theorem, nCr)](#13-modular-combinatorics)
  - [14. Quy hoạch động Bitmask & SOS DP (Sum Over Subsets)](#14-bitmask-dp--sos-dp)
  - [15. Cây Fenwick (Binary Indexed Tree - BIT)](#15-fenwick-tree-bit)
  - [16. Segment Tree cập nhật lười (Lazy Propagation)](#16-lazy-segment-tree)
- [Phase 4: High-End Core (Candidate Master ➔ Master)](#phase-4-high-end-core)
  - [17. Xử lý chuỗi nâng cao (String Hashing & KMP Algorithm)](#17-string-hashing--kmp)
  - [18. Thành phần liên thông mạnh (Tarjan's SCC & 2-SAT)](#18-tarjans-scc--2-sat)
  - [19. Luồng cực đại Dinic & Lát cắt hẹp nhất (Max Flow & Min-Cut)](#19-dinics-max-flow)
  - [20. Cây phân đoạn bền vững (Persistent Segment Tree)](#20-persistent-segment-tree)
  - [21. Phân tách đường đi nặng - nhẹ trên cây (Heavy-Light Decomposition - HLD)](#21-heavy-light-decomposition-hld)
  - [22. Tối ưu hóa Quy hoạch động: Cây Li Chao (Li Chao Tree for CHT)](#22-li-chao-segment-tree)
- [Phase 5: Legendary & Grandmaster (Master ➔ GM / IGM)](#phase-5-legendary--grandmaster)
  - [23. Cây ảo (Virtual Tree / Auxiliary Tree)](#23-virtual-tree-auxiliary-tree)
  - [24. Tìm kiếm nhị phân song song (Parallel Binary Search)](#24-parallel-binary-search)
  - [25. Tối ưu hóa WQS / Alien's Trick (WQS Binary Search)](#25-aliens-trick-wqs-binary-search)
  - [26. Phân tách trọng tâm trên cây (Centroid Decomposition)](#26-centroid-decomposition)
  - [27. Biến đổi Fourier nhanh (Fast Fourier Transform / NTT)](#27-fast-fourier-transform-ntt)
  - [28. Máy tự động hậu tố (Suffix Automaton - SAM)](#28-suffix-automaton-sam)

---

# PHASE 1: FOUNDATION

## 1. Prefix Sums & Difference Array
*Nguồn tham khảo: Codeforces Edu & CP-Algorithms*

### 1D & 2D Prefix Sums + Difference Array
```cpp
#include <iostream>
#include <vector>

using namespace std;

// 1. Mảng cộng dồn 1 chiều (1D Prefix Sums)
struct PrefixSum1D {
    vector<long long> pref;
    PrefixSum1D(const vector<long long>& a) {
        int n = a.size();
        pref.assign(n + 1, 0);
        for (int i = 0; i < n; ++i) {
            pref[i + 1] = pref[i] + a[i];
        }
    }
    // Tính tổng đoạn [l, r] (0-indexed) trong O(1)
    long long query(int l, int r) const {
        if (l > r) return 0;
        return pref[r + 1] - pref[l];
    }
};

// 2. Mảng hiệu 1 chiều (1D Difference Array)
struct DifferenceArray1D {
    int n;
    vector<long long> diff;
    DifferenceArray1D(int size) : n(size), diff(size + 2, 0) {}

    // Cộng v vào mọi phần tử trong đoạn [l, r] (0-indexed) trong O(1)
    void update(int l, int r, long long v) {
        diff[l] += v;
        diff[r + 1] -= v;
    }

    // Khôi phục mảng ban đầu sau khi thực hiện tất cả các truy vấn
    vector<long long> build() {
        vector<long long> result(n);
        long long current = 0;
        for (int i = 0; i < n; ++i) {
            current += diff[i];
            result[i] = current;
        }
        return result;
    }
};

// 3. Mảng cộng dồn 2 chiều (2D Prefix Sums)
struct PrefixSum2D {
    vector<vector<long long>> pref;
    PrefixSum2D(const vector<vector<long long>>& a) {
        int n = a.size(), m = a[0].size();
        pref.assign(n + 1, vector<long long>(m + 1, 0));
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < m; ++j) {
                pref[i + 1][j + 1] = a[i][j] + pref[i][j + 1] + pref[i + 1][j] - pref[i][j];
            }
        }
    }
    // Truy vấn tổng hình chữ nhật từ (r1, c1) đến (r2, c2) (0-indexed)
    long long query(int r1, int c1, int r2, int c2) const {
        return pref[r2 + 1][c2 + 1] - pref[r1][c2 + 1] - pref[r2 + 1][c1] + pref[r1][c1];
    }
};
```

---

## 2. Two Pointers & Sliding Window
*Nguồn tham khảo: Codeforces Edu Step 1-3 & USACO Guide*

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

// Tìm độ dài đoạn con liên tiếp dài nhất có tổng <= limit (Mảng số không âm)
int max_len(const vector<int>& a, long long limit) {
    int n = a.size();
    int ans = 0;
    long long current_sum = 0;
    int left = 0;

    // Con trỏ right mở rộng liên tục về bên phải
    for (int right = 0; right < n; ++right) {
        current_sum += a[right];

        // Khi điều kiện bị vi phạm, co con trỏ left lại
        while (current_sum > limit && left <= right) {
            current_sum -= a[left];
            left++;
        }

        // Cập nhật kết quả tối ưu
        ans = max(ans, right - left + 1);
    }
    return ans;
}

// Đếm số lượng cặp (i, j) với i < j sao cho a[i] + a[j] == target trên mảng đã sắp xếp
long long count_pairs(const vector<int>& a, int target) {
    long long pairs = 0;
    int left = 0, right = (int)a.size() - 1;

    while (left < right) {
        int sum = a[left] + a[right];
        if (sum == target) {
            if (a[left] == a[right]) {
                long long count = right - left + 1;
                pairs += count * (count - 1) / 2;
                break;
            } else {
                int count_l = 1, count_r = 1;
                while (left + 1 < right && a[left] == a[left + 1]) { left++; count_l++; }
                while (right - 1 > left && a[right] == a[right - 1]) { right--; count_r++; }
                pairs += 1LL * count_l * count_r;
                left++;
                right--;
            }
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return pairs;
}
```

---

## 3. Binary Search on Answer
*Nguồn tham khảo: Errichto's Binary Search Tutorial*

```cpp
#include <iostream>
#include <vector>
#include <functional>

using namespace std;

// Hàm mẫu chặt nhị phân kết quả tổng quát (Monotonic Predicate: FFFFFTTTTT)
// Tìm giá trị nhỏ nhất thỏa mãn predicate check(val) == true
template <typename F>
long long bs_min(long long low, long long high, F check) {
    long long ans = high;
    while (low <= high) {
        long long mid = low + (high - low) / 2;
        if (check(mid)) {
            ans = mid;         // mid thỏa mãn, thử tìm giá trị nhỏ hơn ở nửa trái
            high = mid - 1;
        } else {
            low = mid + 1;     // mid không thỏa mãn, bắt buộc tìm ở nửa phải
        }
    }
    return ans;
}

// Tìm giá trị lớn nhất thỏa mãn predicate check(val) == true (TTTTTFFFFF)
template <typename F>
long long bs_max(long long low, long long high, F check) {
    long long ans = low;
    while (low <= high) {
        long long mid = low + (high - low) / 2;
        if (check(mid)) {
            ans = mid;         // mid thỏa mãn, thử tìm giá trị lớn hơn ở nửa phải
            low = mid + 1;
        } else {
            high = mid - 1;    // mid không thỏa mãn, lùi về nửa trái
        }
    }
    return ans;
}
```

---

## 4. Sieve of Eratosthenes & SPF
*Nguồn tham khảo: CP-Algorithms*

```cpp
#include <iostream>
#include <vector>

using namespace std;

// Sàng SPF (Smallest Prime Factor) tính ước nguyên tố nhỏ nhất
struct PrimeSieve {
    int max_val;
    vector<int> spf; // spf[x] = ước nguyên tố nhỏ nhất của x

    PrimeSieve(int n) : max_val(n), spf(n + 1) {
        for (int i = 0; i <= n; ++i) spf[i] = i;

        for (int i = 2; i * i <= n; ++i) {
            if (spf[i] == i) { // i là số nguyên tố
                for (int j = i * i; j <= n; j += i) {
                    if (spf[j] == j) spf[j] = i;
                }
            }
        }
    }

    // Phân tích thừa số nguyên tố của x trong O(log X)
    vector<pair<int, int>> factorize(int x) const {
        vector<pair<int, int>> factors;
        while (x > 1) {
            int p = spf[x];
            int count = 0;
            while (x % p == 0) {
                count++;
                x /= p;
            }
            factors.emplace_back(p, count);
        }
        return factors;
    }
};
```

---

## 5. Greedy & Exchange Argument
*Nguồn tham khảo: USACO Guide Silver*

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

// Bài toán xếp lịch hoạt động (Interval Scheduling): Chọn nhiều khoảng không giao nhau nhất
struct Interval {
    int start, end;
};

// Hàm so sánh sắp xếp theo thời gian kết thúc sớm nhất (không dùng lambda)
bool cmp(const Interval& a, const Interval& b) {
    return a.end < b.end;
}

int schedule(vector<Interval>& a) {
    // Chứng minh Exchange Argument: Luôn kết thúc sớm nhất để chừa chỗ cho các sự kiện sau
    sort(a.begin(), a.end(), cmp);

    int count = 0;
    int last_end = -1e9;
    for (const auto& cur : a) {
        if (cur.start >= last_end) {
            count++;
            last_end = cur.end;
        }
    }
    return count;
}
```

---

# PHASE 2: INTERMEDIATE

## 6. Graph Traversal (DFS/BFS & Grid)
*Nguồn tham khảo: CP-Algorithms*

```cpp
#include <iostream>
#include <vector>
#include <queue>

using namespace std;

// BFS trên lưới 2D tìm đường đi ngắn nhất
const int dx[4] = {-1, 1, 0, 0};
const int dy[4] = {0, 0, -1, 1};

int bfs_grid(int start_r, int start_c, int target_r, int target_c,
             const vector<string>& grid) {
    int n = grid.size(), m = grid[0].size();
    vector<vector<int>> dist(n, vector<int>(m, -1));
    queue<pair<int, int>> q;

    dist[start_r][start_c] = 0;
    q.push({start_r, start_c});

    while (!q.empty()) {
        auto [r, c] = q.front();
        q.pop();

        if (r == target_r && c == target_c) return dist[r][c];

        for (int i = 0; i < 4; ++i) {
            int nr = r + dx[i], nc = c + dy[i];
            if (nr >= 0 && nr < n && nc >= 0 && nc < m && grid[nr][nc] != '#' && dist[nr][nc] == -1) {
                dist[nr][nc] = dist[r][c] + 1;
                q.push({nr, nc});
            }
        }
    }
    return -1; // Không đến được đích
}
```

---

## 7. Disjoint Set Union (DSU)
*Nguồn tham khảo: KACTL & CP-Algorithms*

```cpp
#include <vector>
#include <numeric>

using namespace std;

struct DSU {
    vector<int> parent, sz;
    int num_components;

    DSU(int n) : parent(n), sz(n, 1), num_components(n) {
        iota(parent.begin(), parent.end(), 0); // parent[i] = i
    }

    // Tìm đại diện tập hợp kết hợp Nén đường đi (Path Compression)
    int find(int u) {
        if (u == parent[u]) return u;
        return parent[u] = find(parent[u]);
    }

    // Hợp nhất theo kích thước (Union by Size)
    bool unite(int u, int v) {
        int root_u = find(u), root_v = find(v);
        if (root_u == root_v) return false;

        if (sz[root_u] < sz[root_v]) swap(root_u, root_v);
        parent[root_v] = root_u;
        sz[root_u] += sz[root_v];
        num_components--;
        return true;
    }

    bool same(int u, int v) {
        return find(u) == find(v);
    }

    int size(int u) {
        return sz[find(u)];
    }
};
```

---

## 8. Dynamic Programming Basics
*Nguồn tham khảo: CP-Algorithms & Benq's Guide*

### 0/1 Balo mảng 1 chiều & Dãy con tăng dài nhất LIS trong $O(N \log N)$
```cpp
#include <vector>
#include <algorithm>

using namespace std;

// 1. Balo 0/1 mảng 1 chiều (Space Optimized 0/1 Knapsack)
long long knapsack(int max_w, const vector<int>& weight, const vector<int>& val) {
    vector<long long> dp(max_w + 1, 0);
    int n = weight.size();

    for (int i = 0; i < n; ++i) {
        // Duyệt ngược để đảm bảo mỗi đồ vật chỉ dùng đúng 1 lần
        for (int w = max_w; w >= weight[i]; --w) {
            dp[w] = max(dp[w], dp[w - weight[i]] + val[i]);
        }
    }
    return dp[max_w];
}

// 2. Dãy con tăng dài nhất (LIS) trong O(N log N) bằng std::lower_bound
int lis(const vector<int>& nums) {
    vector<int> tails; // tails[i] lưu phần tử kết thúc nhỏ nhất của dãy con tăng độ dài i+1

    for (int x : nums) {
        auto it = lower_bound(tails.begin(), tails.end(), x);
        if (it == tails.end()) {
            tails.push_back(x);
        } else {
            *it = x; // Thay thế phần tử để mở rộng khả năng ghép cặp về sau
        }
    }
    return tails.size();
}
```

---

## 9. Topological Sort
*Nguồn tham khảo: CP-Algorithms (Kahn's Algorithm)*

```cpp
#include <vector>
#include <queue>

using namespace std;

// Sắp xếp tô-pô bằng thuật toán Kahn bóc tách bán bậc vào (In-Degree)
pair<bool, vector<int>> topo_sort(int n, const vector<vector<int>>& adj) {
    vector<int> in_degree(n, 0);
    for (int u = 0; u < n; ++u) {
        for (int v : adj[u]) {
            in_degree[v]++;
        }
    }

    queue<int> q;
    for (int i = 0; i < n; ++i) {
        if (in_degree[i] == 0) q.push(i);
    }

    vector<int> topo_order;
    while (!q.empty()) {
        int u = q.front();
        q.pop();
        topo_order.push_back(u);

        for (int v : adj[u]) {
            if (--in_degree[v] == 0) {
                q.push(v);
            }
        }
    }

    // Nếu không thăm hết n đỉnh => đồ thị chứa chu trình (Cycle)
    bool is_dag = (topo_order.size() == (size_t)n);
    return {is_dag, topo_order};
}
```

---

## 10. Shortest Paths (Dijkstra & 0-1 BFS)
*Nguồn tham khảo: CP-Algorithms*

```cpp
#include <vector>
#include <queue>
#include <deque>

using namespace std;

const long long INF = 1e18;

// 1. Thuật toán Dijkstra chuẩn mực với Priority Queue
vector<long long> dijkstra(int n, int src, const vector<vector<pair<int, int>>>& adj) {
    vector<long long> dist(n, INF);
    // Min-heap lưu {khoảng_cách, đỉnh}
    priority_queue<pair<long long, int>, vector<pair<long long, int>>, greater<>> pq;

    dist[src] = 0;
    pq.push({0, src});

    while (!pq.empty()) {
        auto [d, u] = pq.top();
        pq.pop();

        if (d > dist[u]) continue; // Bỏ qua trạng thái cũ đã có khoảng cách ngắn hơn

        for (auto [v, w] : adj[u]) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }
    return dist;
}

// 2. Thuật toán 0-1 BFS trên đồ thị trọng số 0 và 1 trong O(V + E)
vector<int> bfs01(int n, int src, const vector<vector<pair<int, int>>>& adj) {
    vector<int> dist(n, 1e9);
    deque<int> dq;

    dist[src] = 0;
    dq.push_back(src);

    while (!dq.empty()) {
        int u = dq.front();
        dq.pop_front();

        for (auto [v, w] : adj[u]) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                if (w == 0) dq.push_front(v); // Cạnh 0 đẩy lên đầu
                else dq.push_back(v);         // Cạnh 1 đẩy xuống cuối
            }
        }
    }
    return dist;
}
```

---

# PHASE 3: ADVANCED

## 11. LCA, Binary Lifting & Euler Tour
*Nguồn tham khảo: KACTL & CP-Algorithms*

```cpp
#include <vector>
#include <cmath>

using namespace std;

struct TreeLCA {
    int n, LOG;
    vector<int> depth, tin, tout;
    vector<vector<int>> up;
    int timer = 0;

    TreeLCA(int n, int root, const vector<vector<int>>& adj) : n(n), depth(n), tin(n), tout(n) {
        LOG = 32 - __builtin_clz(n);
        up.assign(n, vector<int>(LOG));
        dfs(root, root, 0, adj);
    }

    void dfs(int u, int p, int d, const vector<vector<int>>& adj) {
        tin[u] = ++timer;
        depth[u] = d;
        up[u][0] = p;
        for (int j = 1; j < LOG; ++j) {
            up[u][j] = up[up[u][j - 1]][j - 1];
        }
        for (int v : adj[u]) {
            if (v != p) dfs(v, u, d + 1, adj);
        }
        tout[u] = ++timer;
    }

    bool is_ancestor(int u, int v) const {
        return tin[u] <= tin[v] && tout[u] >= tout[v];
    }

    int lca(int u, int v) const {
        if (is_ancestor(u, v)) return u;
        if (is_ancestor(v, u)) return v;
        for (int j = LOG - 1; j >= 0; --j) {
            if (!is_ancestor(up[u][j], v)) {
                u = up[u][j];
            }
        }
        return up[u][0];
    }

    int dist(int u, int v) const {
        return depth[u] + depth[v] - 2 * depth[lca(u, v)];
    }
};
```

---

## 12. Tree DP & Rerooting
*Nguồn tham khảo: Benq's Rerooting DP & Codeforces Blog*

```cpp
#include <vector>

using namespace std;

// Bài toán: Với mỗi đỉnh u làm gốc, tính tổng khoảng cách tới tất cả các đỉnh khác
struct TreeRerooting {
    int n;
    vector<vector<int>> adj;
    vector<long long> sz, dp, ans;

    TreeRerooting(int n) : n(n), adj(n), sz(n, 1), dp(n, 0), ans(n, 0) {}

    void add_edge(int u, int v) {
        adj[u].push_back(v);
        adj[v].push_back(u);
    }

    // DFS 1: Tính kích thước cây con và kết quả khi gốc là 0
    void dfs1(int u, int p) {
        for (int v : adj[u]) {
            if (v != p) {
                dfs1(v, u);
                sz[u] += sz[v];
                dp[u] += dp[v] + sz[v];
            }
        }
    }

    // DFS 2: Đổi gốc - chuyển kết quả từ cha xuống con
    void dfs2(int u, int p) {
        ans[u] = dp[u];
        for (int v : adj[u]) {
            if (v != p) {
                // Khi đổi gốc sang v: nhánh v lại gần 1 bước (-sz[v]), phần còn lại xa hơn 1 bước (+(n - sz[v]))
                dp[u] -= dp[v] + sz[v];
                dp[v] += dp[u] + (n - sz[v]);

                dfs2(v, u);

                // Rollback trạng thái
                dp[v] -= dp[u] + (n - sz[v]);
                dp[u] += dp[v] + sz[v];
            }
        }
    }

    vector<long long> solve() {
        dfs1(0, -1);
        dfs2(0, -1);
        return ans;
    }
};
```

---

## 13. Modular Combinatorics
*Nguồn tham khảo: CP-Algorithms*

```cpp
#include <vector>

using namespace std;

const int MOD = 1e9 + 7;

// Lũy thừa nhị phân a^b mod MOD
long long power(long long a, long long b) {
    long long res = 1;
    a %= MOD;
    while (b > 0) {
        if (b & 1) res = (res * a) % MOD;
        a = (a * a) % MOD;
        b >>= 1;
    }
    return res;
}

// Nghịch đảo modulo theo Fermat nhỏ: a^{-1} = a^{MOD-2} (mod MOD)
long long inv(long long a) {
    return power(a, MOD - 2);
}

struct Combinatorics {
    int max_n;
    vector<long long> fac, inv_fac;

    Combinatorics(int n) : max_n(n), fac(n + 1), inv_fac(n + 1) {
        fac[0] = 1;
        for (int i = 1; i <= n; ++i) fac[i] = (fac[i - 1] * i) % MOD;
        inv_fac[n] = inv(fac[n]);
        for (int i = n - 1; i >= 0; --i) inv_fac[i] = (inv_fac[i + 1] * (i + 1)) % MOD;
    }

    // Tính tổ hợp C(n, k) trong O(1)
    long long nCr(int n, int r) const {
        if (r < 0 || r > n) return 0;
        return fac[n] * inv_fac[r] % MOD * inv_fac[n - r] % MOD;
    }
};
```

---

## 14. Bitmask DP & SOS DP
*Nguồn tham khảo: Codeforces SOS DP Tutorial*

```cpp
#include <vector>

using namespace std;

// SOS DP (Sum Over Subsets) trong O(N * 2^N)
// Tính F[mask] = sum_{sub in mask} a[sub]
vector<long long> sos_dp(int n, const vector<long long>& a) {
    int total_masks = 1 << n;
    vector<long long> f = a;

    // Cập nhật độc lập theo từng bit dimension
    for (int bit = 0; bit < n; ++bit) {
        for (int mask = 0; mask < total_masks; ++mask) {
            if (mask & (1 << bit)) {
                f[mask] += f[mask ^ (1 << bit)];
            }
        }
    }
    return f;
}
```

---

## 15. Fenwick Tree (BIT)
*Nguồn tham khảo: Fenwick Tree Tutorial & KACTL*

```cpp
#include <vector>

using namespace std;

// Cây Fenwick chỉ số 1-indexed (Cài đặt cực kỳ gọn nhẹ)
struct FenwickTree {
    int n;
    vector<long long> tree;

    FenwickTree(int n) : n(n), tree(n + 1, 0) {}

    // Cộng delta vào vị trí idx trong O(log N)
    void add(int idx, long long delta) {
        for (; idx <= n; idx += idx & -idx) {
            tree[idx] += delta;
        }
    }

    // Tính tổng tiền tố [1, idx] trong O(log N)
    long long query(int idx) const {
        long long sum = 0;
        for (; idx > 0; idx -= idx & -idx) {
            sum += tree[idx];
        }
        return sum;
    }

    // Truy vấn tổng đoạn [l, r]
    long long query(int l, int r) const {
        if (l > r) return 0;
        return query(r) - query(l - 1);
    }
};
```

---

## 16. Lazy Segment Tree
*Nguồn tham khảo: CP-Algorithms & PrinceOfPersia*

```cpp
#include <vector>

using namespace std;

struct LazySegTree {
    int n;
    vector<long long> tree, lazy;

    LazySegTree(int n) : n(n), tree(4 * n, 0), lazy(4 * n, 0) {}

    // Đẩy giá trị cập nhật lười xuống 2 con (Push down)
    void push(int node, int l, int r) {
        if (lazy[node] != 0) {
            int mid = l + (r - l) / 2;
            tree[2 * node] += lazy[node] * (mid - l + 1);
            lazy[2 * node] += lazy[node];
            tree[2 * node + 1] += lazy[node] * (r - mid);
            lazy[2 * node + 1] += lazy[node];
            lazy[node] = 0;
        }
    }

    // Cập nhật đoạn: Cộng val vào đoạn [ql, qr] trong O(log N)
    void update(int node, int l, int r, int ql, int qr, long long val) {
        if (ql <= l && r <= qr) {
            tree[node] += val * (r - l + 1);
            lazy[node] += val;
            return;
        }
        push(node, l, r);
        int mid = l + (r - l) / 2;
        if (ql <= mid) update(2 * node, l, mid, ql, qr, val);
        if (qr > mid) update(2 * node + 1, mid + 1, r, ql, qr, val);
        tree[node] = tree[2 * node] + tree[2 * node + 1];
    }

    // Truy vấn tổng đoạn [ql, qr] trong O(log N)
    long long query(int node, int l, int r, int ql, int qr) {
        if (ql <= l && r <= qr) return tree[node];
        push(node, l, r);
        int mid = l + (r - l) / 2;
        long long sum = 0;
        if (ql <= mid) sum += query(2 * node, l, mid, ql, qr);
        if (qr > mid) sum += query(2 * node + 1, mid + 1, r, ql, qr);
        return sum;
    }
};
```

---

# PHASE 4: HIGH-END CORE

## 17. String Hashing & KMP
*Nguồn tham khảo: Neal Wu's String Hash & CP-Algorithms*

### Double Hashing & KMP Prefix Function
```cpp
#include <iostream>
#include <vector>
#include <string>

using namespace std;

// 1. KMP Algorithm (Prefix Function pi[i])
vector<int> prefix_function(const string& s) {
    int n = s.length();
    vector<int> pi(n, 0);
    for (int i = 1; i < n; ++i) {
        int j = pi[i - 1];
        while (j > 0 && s[i] != s[j]) j = pi[j - 1];
        if (s[i] == s[j]) j++;
        pi[i] = j;
    }
    return pi;
}

// 2. Double Polynomial Rolling Hash (Chống anti-hash test)
struct DoubleHash {
    int n;
    const long long MOD1 = 1e9 + 7, MOD2 = 1e9 + 9;
    const long long BASE1 = 313, BASE2 = 317;
    vector<long long> h1, h2, p1, p2;

    DoubleHash(const string& s) : n(s.size()), h1(n + 1, 0), h2(n + 1, 0), p1(n + 1, 1), p2(n + 1, 1) {
        for (int i = 0; i < n; ++i) {
            h1[i + 1] = (h1[i] * BASE1 + s[i]) % MOD1;
            h2[i + 1] = (h2[i] * BASE2 + s[i]) % MOD2;
            p1[i + 1] = (p1[i] * BASE1) % MOD1;
            p2[i + 1] = (p2[i] * BASE2) % MOD2;
        }
    }

    // Lấy mã hash đoạn con [l, r] (0-indexed) trong O(1)
    pair<long long, long long> get(int l, int r) const {
        long long val1 = (h1[r + 1] - h1[l] * p1[r - l + 1]) % MOD1;
        if (val1 < 0) val1 += MOD1;
        long long val2 = (h2[r + 1] - h2[l] * p2[r - l + 1]) % MOD2;
        if (val2 < 0) val2 += MOD2;
        return {val1, val2};
    }
};
```

---

## 18. Tarjan's SCC & 2-SAT
*Nguồn tham khảo: KACTL & CP-Algorithms*

```cpp
#include <vector>
#include <stack>
#include <algorithm>

using namespace std;

struct TarjanSCC {
    int n, timer = 0, scc_count = 0;
    vector<vector<int>> adj;
    vector<int> tin, low, scc;
    vector<bool> on_stack;
    stack<int> st;

    TarjanSCC(int n) : n(n), adj(n), tin(n, 0), low(n, 0), scc(n, -1), on_stack(n, false) {}

    void add_edge(int u, int v) { adj[u].push_back(v); }

    void dfs(int u) {
        tin[u] = low[u] = ++timer;
        st.push(u);
        on_stack[u] = true;

        for (int v : adj[u]) {
            if (!tin[v]) {
                dfs(v);
                low[u] = min(low[u], low[v]);
            } else if (on_stack[v]) {
                low[u] = min(low[u], tin[v]);
            }
        }

        // Tìm thấy đỉnh gốc của một SCC
        if (low[u] == tin[u]) {
            while (true) {
                int v = st.top();
                st.pop();
                on_stack[v] = false;
                scc[v] = scc_count;
                if (u == v) break;
            }
            scc_count++;
        }
    }

    void build() {
        for (int i = 0; i < n; ++i) {
            if (!tin[i]) dfs(i);
        }
    }
};

// 2-SAT Solver dựa trên Tarjan SCC
struct TwoSAT {
    int n; // n biến (0 .. n-1), đỉnh phủ định của x là x + n
    TarjanSCC scc;

    TwoSAT(int n) : n(n), scc(2 * n) {}

    // Thêm mệnh đề: (u hoặc v)
    // is_u = false nghĩa là phủ định NOT u
    void add_clause(int u, bool is_u, int v, bool is_v) {
        int node_u = is_u ? u : u + n;
        int not_u = is_u ? u + n : u;
        int node_v = is_v ? v : v + n;
        int not_v = is_v ? v + n : v;
        // ~u => v và ~v => u
        scc.add_edge(not_u, node_v);
        scc.add_edge(not_v, node_u);
    }

    pair<bool, vector<bool>> solve() {
        scc.build();
        vector<bool> assignment(n);
        for (int i = 0; i < n; ++i) {
            if (scc.scc[i] == scc.scc[i + n]) return {false, {}}; // Mâu thuẫn logic
            // Biến mang giá trị true nếu SCC của nó nằm sau (topological order)
            assignment[i] = (scc.scc[i] < scc.scc[i + n]);
        }
        return {true, assignment};
    }
};
```

---

## 19. Dinic's Max Flow
*Nguồn tham khảo: KACTL & CP-Algorithms*

```cpp
#include <vector>
#include <queue>

using namespace std;

struct Dinic {
    struct Edge {
        int to;
        long long cap, flow;
        int rev;
    };

    int n, s, t;
    vector<vector<Edge>> adj;
    vector<int> level, ptr;

    Dinic(int n, int s, int t) : n(n), s(s), t(t), adj(n), level(n), ptr(n) {}

    void add_edge(int from, int to, long long cap) {
        adj[from].push_back({to, cap, 0, (int)adj[to].size()});
        adj[to].push_back({from, 0, 0, (int)adj[from].size() - 1});
    }

    // BFS chia tầng đồ thị (Level graph)
    bool bfs() {
        fill(level.begin(), level.end(), -1);
        level[s] = 0;
        queue<int> q;
        q.push(s);

        while (!q.empty()) {
            int u = q.front();
            q.pop();
            for (const auto& e : adj[u]) {
                if (e.cap - e.flow > 0 && level[e.to] == -1) {
                    level[e.to] = level[u] + 1;
                    q.push(e.to);
                }
            }
        }
        return level[t] != -1;
    }

    // DFS đẩy luồng chặn (Blocking flow) kết hợp con trỏ ptr
    long long dfs(int u, long long pushed) {
        if (pushed == 0 || u == t) return pushed;

        for (int& cid = ptr[u]; cid < (int)adj[u].size(); ++cid) {
            auto& e = adj[u][cid];
            int trg = e.to;
            if (level[u] + 1 != level[trg] || e.cap - e.flow == 0) continue;

            long long tr = dfs(trg, min(pushed, e.cap - e.flow));
            if (tr == 0) continue;

            e.flow += tr;
            adj[trg][e.rev].flow -= tr;
            return tr;
        }
        return 0;
    }

    long long max_flow() {
        long long flow = 0;
        while (bfs()) {
            fill(ptr.begin(), ptr.end(), 0);
            while (long long pushed = dfs(s, 1e18)) {
                flow += pushed;
            }
        }
        return flow;
    }
};
```

---

## 20. Persistent Segment Tree
*Nguồn tham khảo: Anudeep's Tutorial & CP-Algorithms*

```cpp
#include <vector>

using namespace std;

struct PersistentSegTree {
    struct Node {
        int count;
        int left_child, right_child;
    };

    int n;
    vector<Node> tree;
    vector<int> roots;

    PersistentSegTree(int n) : n(n) {
        tree.push_back({0, 0, 0}); // Node 0 là node rỗng
        roots.push_back(0);
    }

    // Tạo phiên bản mới khi cập nhật điểm tại pos: O(log N) node mới
    int update(int prev_node, int l, int r, int pos, int val) {
        int cur_node = tree.size();
        tree.push_back(tree[prev_node]); // Sao chép node cũ

        if (l == r) {
            tree[cur_node].count += val;
            return cur_node;
        }

        int mid = l + (r - l) / 2;
        if (pos <= mid) {
            tree[cur_node].left_child = update(tree[prev_node].left_child, l, mid, pos, val);
        } else {
            tree[cur_node].right_child = update(tree[prev_node].right_child, mid + 1, r, pos, val);
        }
        tree[cur_node].count = tree[tree[cur_node].left_child].count + tree[tree[cur_node].right_child].count;
        return cur_node;
    }

    // Tìm phần tử nhỏ thứ k trong đoạn [L, R] bằng cách trừ 2 phiên bản
    int query_kth(int node_l, int node_r, int l, int r, int k) const {
        if (l == r) return l;
        int left_count = tree[tree[node_r].left_child].count - tree[tree[node_l].left_child].count;
        int mid = l + (r - l) / 2;
        if (left_count >= k) {
            return query_kth(tree[node_l].left_child, tree[node_r].left_child, l, mid, k);
        } else {
            return query_kth(tree[node_l].right_child, tree[node_r].right_child, mid + 1, r, k - left_count);
        }
    }
};
```

---

## 21. Heavy-Light Decomposition (HLD)
*Nguồn tham khảo: CP-Algorithms & KACTL*

```cpp
#include <vector>
#include <algorithm>

using namespace std;

struct HLD {
    int n, timer = 0;
    vector<vector<int>> adj;
    vector<int> parent, depth, heavy, head, pos;

    HLD(int n) : n(n), adj(n), parent(n), depth(n), heavy(n, -1), head(n), pos(n) {}

    void add_edge(int u, int v) {
        adj[u].push_back(v);
        adj[v].push_back(u);
    }

    // DFS 1: Tìm kích thước cây con và chọn Cạnh Nặng (Heavy Edge)
    int dfs(int u, int p, int d) {
        int size = 1, max_c_size = 0;
        depth[u] = d;
        parent[u] = p;
        for (int c : adj[u]) {
            if (c != p) {
                int c_size = dfs(c, u, d + 1);
                size += c_size;
                if (c_size > max_c_size) {
                    max_c_size = c_size;
                    heavy[u] = c;
                }
            }
        }
        return size;
    }

    // DFS 2: Phân tách thành các chuỗi nặng liên tục (Heavy Paths)
    void decompose(int u, int h) {
        head[u] = h;
        pos[u] = ++timer; // Vị trí trải phẳng để đưa vào Segment Tree
        if (heavy[u] != -1) decompose(heavy[u], h);
        for (int c : adj[u]) {
            if (c != parent[u] && c != heavy[u]) {
                decompose(c, c); // Cạnh nhẹ mở đầu một chuỗi nặng mới
            }
        }
    }

    void init(int root = 0) {
        dfs(root, -1, 0);
        decompose(root, root);
    }

    // Phân rã đường đi giữa u và v thành O(log N) đoạn liên tiếp trên Segment Tree
    template <typename Op>
    void query_path(int u, int v, Op op) {
        while (head[u] != head[v]) {
            if (depth[head[u]] > depth[head[v]]) swap(u, v);
            op(pos[head[v]], pos[v]); // Thực hiện truy vấn trên đoạn [pos[head[v]], pos[v]]
            v = parent[head[v]];
        }
        if (depth[u] > depth[v]) swap(u, v);
        op(pos[u], pos[v]); // Xử lý đoạn cuối cùng giữa u và v
    }
};
```

---

## 22. Li Chao Segment Tree (for CHT)
*Nguồn tham khảo: CP-Algorithms*

```cpp
#include <vector>
#include <algorithm>

using namespace std;

// Cây Li Chao quản lý tập các đường thẳng y = m*x + c, truy vấn giá trị nhỏ nhất tại x trong O(log C)
struct Line {
    long long m, c;
    long long eval(long long x) const { return m * x + c; }
};

struct LiChaoTree {
    int n;
    vector<Line> tree;
    const long long INF = 2e18;

    LiChaoTree(int max_range) : n(max_range), tree(4 * max_range, {0, INF}) {}

    // Thêm một đường thẳng mới vào cây Li Chao
    void add_line(int node, int l, int r, Line new_line) {
        int mid = l + (r - l) / 2;
        bool left_better = new_line.eval(l) < tree[node].eval(l);
        bool mid_better = new_line.eval(mid) < tree[node].eval(mid);

        if (mid_better) swap(tree[node], new_line);

        if (l == r) return;

        if (left_better != mid_better) {
            add_line(2 * node, l, mid, new_line);
        } else {
            add_line(2 * node + 1, mid + 1, r, new_line);
        }
    }

    // Truy vấn giá trị min tại tọa độ x
    long long query(int node, int l, int r, long long x) const {
        long long current_val = tree[node].eval(x);
        if (l == r) return current_val;

        int mid = l + (r - l) / 2;
        if (x <= mid) {
            return min(current_val, query(2 * node, l, mid, x));
        } else {
            return min(current_val, query(2 * node + 1, mid + 1, r, x));
        }
    }
};
```

---

# PHASE 5: LEGENDARY & GRANDMASTER

## 23. Virtual Tree (Auxiliary Tree)
*Nguồn tham khảo: Codeforces Blog (Building Auxiliary Tree with Stack)*

```cpp
#include <vector>
#include <stack>
#include <algorithm>

using namespace std;

// Dựng Cây ảo kích thước O(K) từ K đỉnh quan trọng trong O(K log K)
struct VirtualTree {
    const vector<int>& tin;

    VirtualTree(const vector<int>& tin) : tin(tin) {}

    // Struct so sánh thứ tự Euler tour (không dùng lambda)
    struct Compare {
        const vector<int>& t;
        bool operator()(int u, int v) const { return t[u] < t[v]; }
    };

    // Dựng Cây ảo từ K đỉnh quan trọng
    template <typename F>
    vector<int> build(vector<int>& key_nodes, F lca) {
        Compare cmp{tin};
        sort(key_nodes.begin(), key_nodes.end(), cmp);

        vector<int> nodes = key_nodes;
        int k = key_nodes.size();
        for (int i = 0; i < k - 1; ++i) {
            nodes.push_back(lca(key_nodes[i], key_nodes[i + 1]));
        }

        // Loại bỏ trùng lặp và sắp xếp lại theo thứ tự Euler tour
        sort(nodes.begin(), nodes.end(), cmp);
        nodes.erase(unique(nodes.begin(), nodes.end()), nodes.end());

        stack<int> st;
        st.push(nodes[0]);
        vector<pair<int, int>> virtual_edges;

        for (size_t i = 1; i < nodes.size(); ++i) {
            int u = nodes[i];
            while (!st.empty() && lca(st.top(), u) != st.top()) {
                st.pop();
            }
            virtual_edges.push_back({st.top(), u});
            st.push(u);
        }
        return nodes;
    }
};
```

---

## 24. Parallel Binary Search
*Nguồn tham khảo: Errichto's Parallel BS Tutorial*

```cpp
#include <vector>
#include <numeric>

using namespace std;

// Khung giải thuật Tìm kiếm nhị phân song song cho Q truy vấn qua log(Time) vòng lặp
struct ParallelBinarySearch {
    struct Query {
        int id;
        long long requirement;
    };

    void solve(int num_queries, int max_time, vector<Query>& queries) {
        vector<int> low(num_queries, 1), high(num_queries, max_time), ans(num_queries, max_time + 1);

        bool has_active = true;
        while (has_active) {
            has_active = false;
            // Nhóm các truy vấn có cùng giá trị mid vào buckets
            vector<vector<int>> mid_buckets(max_time + 1);

            for (int i = 0; i < num_queries; ++i) {
                if (low[i] <= high[i]) {
                    has_active = true;
                    int mid = low[i] + (high[i] - low[i]) / 2;
                    mid_buckets[mid].push_back(i);
                }
            }
            if (!has_active) break;

            // Khởi tạo lại cấu trúc dữ liệu (ví dụ: Fenwick Tree)
            // Duyệt thời gian từ 1 đến max_time, áp dụng biến đổi và kiểm tra
            for (int t = 1; t <= max_time; ++t) {
                // apply_modification(t);

                for (int q_idx : mid_buckets[t]) {
                    // if (check_condition(queries[q_idx])) {
                    //     ans[q_idx] = t;
                    //     high[q_idx] = t - 1;
                    // } else {
                    //     low[q_idx] = t + 1;
                    // }
                }
            }
        }
    }
};
```

---

## 25. Alien's Trick (WQS Binary Search)
*Nguồn tham khảo: Codeforces Blog (WQS Binary Search Explained)*

```cpp
#include <iostream>
#include <vector>

using namespace std;

// Khung giải thuật WQS Binary Search: Giảm chiều ràng buộc 'chọn đúng K phần tử'
struct WQSOptimizer {
    struct State {
        long long cost;
        int count_k;
    };

    // Hàm quy hoạch động không ràng buộc K nhưng bị phạt chi phí penalty cho mỗi lần chọn
    State solve_dp(long long penalty) {
        State result = {0, 0};
        // Cài đặt DP tham lam/1 chiều trừ đi penalty cho mỗi đơn vị K
        return result;
    }

    // Chặt nhị phân tìm hệ số phạt tối ưu để đạt số lượng chọn target_k
    long long solve(int target_k, long long min_pen, long long max_pen) {
        long long low = min_pen, high = max_pen;
        long long best_pen = 0;

        while (low <= high) {
            long long mid = low + (high - low) / 2;
            State cur = solve_dp(mid);
            if (cur.count_k >= target_k) {
                best_pen = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        State final_state = solve_dp(best_pen);
        // Khôi phục giá trị thực: cộng trả lại lượng phạt best_pen * target_k
        return final_state.cost + best_pen * target_k;
    }
};
```

---

## 26. Centroid Decomposition
*Nguồn tham khảo: CP-Algorithms & Benq*

```cpp
#include <vector>
#include <algorithm>

using namespace std;

struct CentroidDecomposition {
    int n;
    vector<vector<int>> adj;
    vector<int> sz;
    vector<bool> removed;

    CentroidDecomposition(int n) : n(n), adj(n), sz(n), removed(n, false) {}

    void add_edge(int u, int v) {
        adj[u].push_back(v);
        adj[v].push_back(u);
    }

    int calc_size(int u, int p) {
        sz[u] = 1;
        for (int v : adj[u]) {
            if (v != p && !removed[v]) {
                sz[u] += calc_size(v, u);
            }
        }
        return sz[u];
    }

    // Tìm đỉnh trọng tâm: Mọi cây con sau khi xóa trọng tâm đều có kích thước <= total / 2
    int find_centroid(int u, int p, int total) {
        for (int v : adj[u]) {
            if (v != p && !removed[v] && sz[v] > total / 2) {
                return find_centroid(v, u, total);
            }
        }
        return u;
    }

    // Hàm đệ quy chia để trị trên cây trọng tâm
    void decompose(int u) {
        int total = calc_size(u, -1);
        int centroid = find_centroid(u, -1, total);

        // 1. Xử lý các đường đi đi xuyên qua centroid
        // processPathsThroughCentroid(centroid);

        removed[centroid] = true; // Xóa centroid

        // 2. Đệ quy vào các cây con
        for (int v : adj[centroid]) {
            if (!removed[v]) {
                decompose(v);
            }
        }
    }
};
```

---

## 27. Fast Fourier Transform / NTT
*Nguồn tham khảo: MiFaFaOvO & CP-Algorithms*

```cpp
#include <vector>
#include <algorithm>

using namespace std;

// Number Theoretic Transform (NTT) với modulo nguyên tố chuẩn 998244353
const int MOD = 998244353;
const int G = 3; // Căn nguyên thủy (Primitive root)

long long power(long long a, long long b) {
    long long res = 1;
    a %= MOD;
    while (b > 0) {
        if (b & 1) res = res * a % MOD;
        a = a * a % MOD;
        b >>= 1;
    }
    return res;
}

void ntt(vector<int>& a, bool invert) {
    int n = a.size();

    // Hoán vị đảo bit (Bit-reversal permutation)
    for (int i = 1, j = 0; i < n; ++i) {
        int bit = n >> 1;
        for (; j & bit; bit >>= 1) j ^= bit;
        j ^= bit;
        if (i < j) swap(a[i], a[j]);
    }

    // Biến đổi bướm Cooley-Tukey
    for (int len = 2; len <= n; len <<= 1) {
        long long wlen = power(G, (MOD - 1) / len);
        if (invert) wlen = power(wlen, MOD - 2);

        for (int i = 0; i < n; i += len) {
            long long w = 1;
            for (int j = 0; j < len / 2; ++j) {
                int u = a[i + j];
                int v = (int)(a[i + j + len / 2] * w % MOD);
                a[i + j] = (u + v >= MOD ? u + v - MOD : u + v);
                a[i + j + len / 2] = (u - v < 0 ? u - v + MOD : u - v);
                w = w * wlen % MOD;
            }
        }
    }

    if (invert) {
        long long n_inv = power(n, MOD - 2);
        for (int& x : a) x = (int)(x * n_inv % MOD);
    }
}

// Nhân 2 đa thức bậc N trong O(N log N)
vector<int> multiply(vector<int> a, vector<int> b) {
    int n = 1;
    while (n < (int)(a.size() + b.size())) n <<= 1;
    a.resize(n);
    b.resize(n);

    ntt(a, false);
    ntt(b, false);
    for (int i = 0; i < n; ++i) a[i] = (int)(1LL * a[i] * b[i] % MOD);
    ntt(a, true);

    while (!a.empty() && a.back() == 0) a.pop_back();
    return a;
}
```

---

## 28. Suffix Automaton (SAM)
*Nguồn tham khảo: e-maxx (CP-Algorithms) & Codeforces SAM Tutorial*

```cpp
#include <string>
#include <vector>
#include <map>

using namespace std;

// Suffix Automaton (Máy tự động hậu tố) nén toàn bộ chuỗi con trong O(N)
struct SuffixAutomaton {
    struct State {
        int len;           // Độ dài chuỗi con dài nhất thuộc lớp tương đương
        int link;          // Suffix link trỏ tới tiền tố dài nhất khác endpos
        map<char, int> next; // Chuyển trạng thái theo ký tự
    };

    vector<State> st;
    int sz, last;

    SuffixAutomaton(int max_len = 1000) {
        st.resize(2 * max_len);
        st[0].len = 0;
        st[0].link = -1;
        sz = 1;
        last = 0;
    }

    // Mở rộng trực tuyến thêm một ký tự c trong O(1) amortized
    void extend(char c) {
        int cur = sz++;
        st[cur].len = st[last].len + 1;
        int p = last;

        while (p != -1 && !st[p].next.count(c)) {
            st[p].next[c] = cur;
            p = st[p].link;
        }

        if (p == -1) {
            st[cur].link = 0;
        } else {
            int q = st[p].next[c];
            if (st[p].len + 1 == st[q].len) {
                st[cur].link = q;
            } else {
                int clone = sz++;
                st[clone].len = st[p].len + 1;
                st[clone].next = st[q].next;
                st[clone].link = st[q].link;

                while (p != -1 && st[p].next[c] == q) {
                    st[p].next[c] = clone;
                    p = st[p].link;
                }
                st[q].link = st[cur].link = clone;
            }
        }
        last = cur;
    }

    // Xây dựng SAM hoàn chỉnh từ chuỗi s trong O(|s|)
    void build(const string& s) {
        for (char c : s) extend(c);
    }
};
```

---

## KẾ HOẠCH TÍCH HỢP LÊN GIAO DIỆN WEB (PROPOSED UI INTEGRATION)

Sau khi bạn duyệt qua toàn bộ mã nguồn trên, đây là kế hoạch tích hợp mượt mà vào giao diện roadmap:

1. **Tab Switcher "Theory & Methodology" ⟷ "Canonical Code"**:
   - Ở mỗi chủ đề, bên cạnh phần **Algorithm Essence & Methodology**, sẽ có thêm một tab hoặc khối **Canonical C++ Implementation**.
   - Có nút **Copy Code** tức thì, hiển thị đánh dấu syntax highlighting sắc nét với theme tối giản chuẩn USACO Guide.
2. **Badge chú thích độ phức tạp & cấu trúc**:
   - Mỗi code đi kèm nhãn độ phức tạp Thời gian ($O(N \log N)$), Bộ nhớ ($O(N)$), và liên kết trích dẫn nguồn uy tín (CP-Algorithms, KACTL, USACO Guide).
3. **Mã nguồn tự chủ (Self-contained)**:
   - Các hàm và struct được thiết kế để học viên có thể ném vào bất kỳ solution Codeforces nào mà không cần sửa đổi biến ngoài luồng.

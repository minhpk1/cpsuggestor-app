module.exports = {
  11: {
    essenceEn: [
      "Binary Lifting: Precompute table up[u][j] storing the 2^j-th ancestor of vertex u in O(N log N), allowing LCA queries in O(log N).",
      "Euler Tour: Record entry (tin) and exit (tout) times during DFS. Vertex u is an ancestor of v iff tin[u] <= tin[v] and tout[v] <= tout[u]. Flattens subtree queries into range queries [tin[u], tout[u]]."
    ],
    complexityEn: "Precomputation O(N log N), LCA / distance queries O(log N), tree flattening Euler tour O(N).",
    commentsEn: [
      "Use LCA to calculate shortest distance dist(u, v) = depth[u] + depth[v] - 2 × depth[LCA(u, v)]. Check 3 candidate paths using the shortcut edge (x, y).",
      "Binary Lifting to jump to k-th ancestor of v. Combine Euler Tour with depth-bucketed vectors, using std::lower_bound and upper_bound to count blood cousins.",
      "Segment Tree finding LCA of a vertex set: The LCA of any set is the LCA of the vertex with minimum tin and the vertex with maximum tin. Test excluding boundary tins.",
      "Find longest common branching point among 3 paths between a, b, c: Length of shared path from s to t1 and t2 is determined via pairwise LCAs.",
      "Find vertices equidistant from a and b: If distance is odd, 0 vertices. If even, Binary Lift to path midpoint and count subtree sizes.",
      "Test if vertex set forms a single simple path: Find deepest node u, and deepest node v not in u's subtree. Verify remaining nodes using LCA and Euler Tour.",
      "Euler Tour tree flattening with alternating depth signs: Accumulate alternating +val and -val values by depth, mapping tree updates to Fenwick range updates.",
      "Construct Minimum Spanning Tree (MST). Adding edge (u, v) creates a cycle; use Binary Lifting to query maximum edge weight along path between u and v to replace it.",
      "Replace each query vertex v with its parent[v] (except root). Use Euler Tour to verify whether all parents are ancestors of the deepest query node.",
      "LCA on trees with dynamically changing root: The new LCA of (u, v) with root r is the deepest node among LCA(u, v), LCA(u, r), and LCA(v, r)."
    ]
  },
  12: {
    essenceEn: [
      "Standard Tree DP: Computes subproblem solutions bottom-up via post-order DFS based on children's values.",
      "Rerooting Technique: First DFS computes values for root 1; second DFS pushes contributions down from parent to child to update answers for all possible roots in overall O(N)."
    ],
    complexityEn: "Both DFS passes run in linear time O(N).",
    commentsEn: [
      "Classic Rerooting DP: DFS 1 calculates sz[u] and total score dp[1]. DFS 2 shifts root from u to child v with exact score change dp[v] = dp[u] + (N - 2 × sz[v]).",
      "Find connected subtree containing u with maximum white minus black count. DFS 1 computes dp[u] = val[u] + sum max(0, dp[v]). DFS 2 propagates parent's surplus.",
      "Rerooting edge reversal count: DFS 1 counts inverted edges from root 1. DFS 2 moving root from u to v: if edge is u -> v add 1, otherwise subtract 1.",
      "Tree DP: dp[u][d] is count of vertices in u's subtree at distance d from u. Combine child subtree information to count pairs with distance exactly k in O(N × k).",
      "Tree DP for furthest monster distance: Track top 2 furthest distances in u's subtree, then DFS 2 pushes down the furthest distance outside u's subtree.",
      "Rerooting sum sum a_v × dist(u, v): Shifting root from u to v brings v's subtree 1 unit closer (-sum[v]) and remaining tree 1 unit further (+ (total - sum[v])).",
      "Tree DP counting alternating path sums: Track counts of even and odd length paths from u to subtrees to evaluate node u's total contribution.",
      "Tree DP: For Max node, dp[u] = min_v dp[v] (optimize single branch). For Min node, dp[u] = sum_v dp[v] (must endure penalties across all child branches).",
      "Find tree centroids via subtree size DP. If tree has two centroids C1, C2, detach a leaf from C1's component and reattach to C2 to make C1 unique.",
      "2-state Tree DP: Optimal node value is restricted to its lower bound l_u or upper bound r_u. dp[u][0/1] computes maximum absolute edge differences across subtree."
    ]
  },
  13: {
    essenceEn: [
      "Compute binomial coefficients C(n, k) mod p via precomputed factorials fac[n] and modular inverse factorials invFac[n] using Fermat's Little Theorem: a^{p-2} = a^{-1} (mod p).",
      "Stars and Bars: Distributing n identical items among k recipients equals C(n+k-1, k-1). Principle of Inclusion-Exclusion (PIE) eliminates overlapping invalid subsets."
    ],
    complexityEn: "Factorial precomputation O(N), per combination query O(1). PIE with K constraints takes O(2^K).",
    commentsEn: [
      "Iterate occurrence count i of digit a, leaving n-i occurrences for digit b. If digit sum is excellent, accumulate C(n, i) mod (10^9+7).",
      "Inclusion-Exclusion DP: Sort obstacle coordinates. dp[i] is paths from (1, 1) to obstacle i avoiding all earlier obstacles.",
      "Comprehension: Iterate male actors i from 4 to n, female actors t-i >= 1. Compute valid actor ensembles via C(n, i) × C(m, t-i).",
      "Stars and Bars with PIE: Use 2^n bitmask representing flower types exceeding limits f_i; apply PIE with modular inverse combinations.",
      "Modular stability condition: All elements in sequence must be multiples of the smallest element x. Multiples count is floor(n/x); ways to pick remaining is C(floor(n/x)-1, k-1).",
      "Square product requires all prime exponents to be even. There are 19 primes <= 70; represent each number as a 19-bit parity mask and solve via Bitmask DP or Linear Basis.",
      "Sieve-like precomputation evaluates divisor sum sigma(x) for all integers up to 10^7 in O(N log N), recording smallest x with sigma(x) = c.",
      "Intersection graph of intervals is a tree iff edges == n-1 and acyclic. Sweep-line intervals and abort early if edge count exceeds n-1.",
      "Local extrema insight: Maximum alternating sum equals the sum of local maxima minus local minima. Swapping elements updates only local neighbor differences.",
      "Binary Lifting on tree: Jump to highest ancestor possessing gold to buy greedily at lowest price; repeat until requirement fulfilled or budget exhausted."
    ]
  },
  14: {
    essenceEn: [
      "Bitmask DP: Uses integers to represent subsets of an N-element universe (N <= 20) with complexity O(2^N × N).",
      "Sum Over Subsets (SOS DP): Accumulates f(mask) across all submasks sub subseteq mask in O(N × 2^N) by updating one bit dimension at a time, avoiding O(3^N)."
    ],
    complexityEn: "Bitmask DP: O(2^N × N) or O(3^N), SOS DP: O(N × 2^N).",
    commentsEn: [
      "Condition a & b = 0 <=> b subseteq (~a). Run SOS DP over boolean array of size 2^{22} to find any array element that is a submask of the bitwise negation.",
      "TSP style Bitmask DP: dp[mask][last] is maximum satisfaction having served dishes in mask with last dish being last. Complexity O(2^n × n^2) for n <= 18.",
      "Since row count n <= 12, at most n columns with maximal elements are relevant. Precompute cyclic shift values per column, then run Bitmask DP across chosen columns.",
      "Substrings without repeated letters correspond to bitmasks of length <= 20. Use SOS DP to find longest substring contained in submasks, then pair mask with ~mask.",
      "Since b_i < 60, there are only 16 primes < 60. Bitmask DP tracks used prime factors: dp[i][mask] minimizes total absolute deviation with coprime elements.",
      "Prefix GCDs take at most log2(max A) distinct values. Maintain compressed list of (gcd, count) pairs and aggregate transitions iteratively.",
      "Bitwise identity: a + b = (a & b) + (a | b). Query 3 initial pairs to solve 3 linear equations for a, b, c, then determine all remaining elements.",
      "Find minimal subset with GCD 1. Answer is always <= 7. Solve using DP with Mobius inversion or SOS DP counting subset combinations yielding GCD 1.",
      "DP with KMP: dp[i][j] is maximum occurrences of string T processed up to index i in S while matching prefix length j of T.",
      "Sort coordinates ascending. dp[i][j] is minimal cost for first i balls when the most recently pinned ball is at position j."
    ]
  },
  15: {
    essenceEn: [
      "Fenwick Tree (BIT): 1D array structure for prefix sums and point updates via lowbit i & (-i), implemented in ~10 lines with O(N) space.",
      "Basic Segment Tree: Binary tree managing intervals, supporting point updates and associative range queries (Sum, Min, Max, GCD) in O(log N)."
    ],
    complexityEn: "Tree construction O(N), point update O(log N), range query O(log N).",
    commentsEn: [
      "Counting inversion triplets a_i > a_j > a_k: Coordinate compress, maintain 2 Fenwick trees: one counting larger elements on left, one counting smaller on right.",
      "Segment tree with alternating operations: Leaf level applies bitwise OR, next level applies XOR, alternating recursively up to the root.",
      "Prefix frequencies f(1, i, a_i) and suffix frequencies f(j, n, a_j). Reduces to counting inversion pairs pre[i] > suf[j] with i < j via Fenwick Tree.",
      "Segment Tree bracket matching: Each node stores matched brackets (optimal), unmatched opening brackets (open), and unmatched closing brackets (close).",
      "Segment Tree storing range GCD, range minimum, and its frequency. An ant survives iff its strength equals the GCD of the entire queried interval.",
      "Maintain 26 Fenwick Trees (or std::set) storing character positions. Query distinct characters in [L, R] by summing characters with positive count.",
      "Offline queries + Segment Tree: Scan right endpoint R from left to right; for each duplicate at prev[i], update distance at position prev[i] in SegTree.",
      "Star graph tree with paths radiating from root 1. Use independent Fenwick trees for path depths and a shared Fenwick tree for root distances.",
      "Segment Tree finding element with exactly 1 occurrence: Store last appearance last[a_i] and previous appearance prev[a_i]; query Min on SegTree.",
      "Iterate over candidate minimum element at index i; apply all given segments not covering i to maximally depress remaining elements, tracking max - min on SegTree."
    ]
  },
  16: {
    essenceEn: [
      "Lazy Propagation defers pushing updates to child nodes until a query or modification explicitly traverses through that node (push_down).",
      "Enables range modifications (Range Addition, Range Assignment, Range Flip) combined with Range Queries (Sum, Min, Max) in O(log N)."
    ],
    complexityEn: "Tree construction O(N), range update and range query O(log N). Space O(4N).",
    commentsEn: [
      "Lazy Segment Tree range assignment: Instead of copying raw data, tag the copy operation timestamp on array B. Query points retrieve newest timestamp.",
      "Segment Tree range addition and Min query on circular array. If [L, R] wraps around (L > R), split into two queries [L, n-1] and [0, R].",
      "Euler tour flattens subtree into contiguous interval [tin[u], tout[u]]. Lazy Segment Tree toggles light state (0 to 1, 1 to 0) via lazy XOR 1 flag.",
      "Segment tree maintaining longest non-decreasing lucky subsequence (digits 4 and 7): Track counts of 4, 7 and patterns '44..77', '77..44' with lazy invert.",
      "Segment Tree modulo arithmetic: Since x mod m < x/2 for x >= m, values decrease exponentially. Track range Max; only recurse into subtrees when max >= m.",
      "Replace elements with divisor count d(x). Since d(x) rapidly collapses to <= 2, track node Max and skip recursive updates whenever max <= 2.",
      "Euler totient phi(X) = X × prod(1 - 1/p). Numbers <= 300 have only 62 primes; use Lazy SegTree tracking range products and 62-bit prime mask.",
      "Segment Tree with Binary Search on Tree (Walk on SegTree): Update max(a_i, v) on non-increasing array and simulate candy budget shopping queries.",
      "Evaluate maximum row contribution per column: Sliding window computes window maxima, combined with Lazy SegTree or Difference Arrays for accumulation.",
      "Interactive binary search: Halve interval [L, R], query values in first half. Number of values in [L, M] is odd iff the fixed point (a_i = i) lies in first half."
    ]
  }
};

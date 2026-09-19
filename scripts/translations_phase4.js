module.exports = {
  17: {
    essenceEn: [
      "Polynomial Rolling Hash: Compares any two substrings in O(1) using polynomial hashes (Double Hash with large primes recommended against anti-hash tests).",
      "KMP (Knuth-Morris-Pratt): Computes prefix function pi[i] (longest proper prefix that is also a suffix) in O(N).",
      "Z-Algorithm: Computes Z[i] (longest common prefix between string S and suffix starting at i) in O(N). Trie structures store word sets and enable prefix / bitwise maximum XOR queries (0-1 Trie)."
    ],
    complexityEn: "Precomputation O(N) or O(sum |S|), comparison / lookup O(1) or O(|P|).",
    commentsEn: [
      "Trie or Rolling Hash counting distinct substrings containing at most k bad characters. Insert substrings into Trie and count newly generated nodes.",
      "KMP or Z-Algorithm: Find a string that is simultaneously a prefix, suffix, and appears strictly in the middle of text. Inspect pi[n-1] and pi[pi[n-1]-1].",
      "Z-Algorithm combined with frequency DP: Find lengths that are both prefix and suffix (Z[i] == n - i), then accumulate total occurrence counts.",
      "KMP optimal string concatenation: Use pi array to find longest border of t. Output t once, then greedily append the tail suffix (t - pi[|t|-1]).",
      "Polynomial Double Hashing or Trie: For each query string, try changing each character to the other 2 characters and query hash set existence in O(|s| × 2).",
      "Use forward and reverse Polynomial Hashing to test whether any queried substring is a Palindrome in O(1).",
      "KMP on difference arrays: Compute adjacent column height differences Delta a and Delta b, then run KMP to match wall profile contours.",
      "KMP word concatenation: For each incoming word, concatenate prefix of word and suffix of current text separated by '#' to find overlap length via pi array.",
      "Extended Euclidean Algorithm: Find maximum overlap between two periodic schedules by solving modular congruence equations via gcd(t_a, t_b).",
      "Cost to create c identical characters is C(c, 2). Greedily pick largest c with C(c, 2) <= k, subtract, and advance to next alphabet character."
    ]
  },
  18: {
    essenceEn: [
      "Tarjan's Algorithm: Uses DFS discovery timestamps num[u] and low-link values low[u] to identify Bridges (low[v] > num[u]), Articulation Points (low[v] >= num[u]), and Strongly Connected Components (SCC: low[u] == num[u]) in a single linear pass.",
      "2-SAT (2-Satisfiability): Represents clauses (u or v) equiv (not u => v) and (not v => u) as an implication digraph. Solvable iff no variable x shares an SCC with not x."
    ],
    complexityEn: "Both Tarjan (SCC/Bridges/Articulation Points) and 2-SAT execute in linear time O(V + E).",
    commentsEn: [
      "Tarjan SCC decomposition: Within each SCC, a single checkpoint at the cheapest vertex secures the entire component. Minimum cost is sum of minimums; configurations count is product of minimum frequencies.",
      "DFS Tree bridge detection: If graph has bridges, strongly connected orientation is impossible. Otherwise, orient tree edges forward and back-edges upward to ancestors.",
      "Standard 2-SAT: Each room is governed by 2 switches x, y. Initially closed doors impose (x XOR y = 1); open doors impose (x XOR y = 0). Construct implication graph and verify SCCs.",
      "Bridge-Block Tree: Contract 2-edge-connected components across bridges into supernodes forming a tree. Answer is the diameter (longest simple path) of this block tree.",
      "Add directed edges p_i -> p_{i+1} and q_i -> q_{i+1}. Contract vertices in identical SCCs, then topologically sort the SCC DAG to assign characters 'a' through 'z'.",
      "Bipartite 2-coloring of grid: For cells with (i+j) even, enforce even values (+1 if odd). For (i+j) odd, enforce odd values. Adjacent cells never match.",
      "DFS computes edge traversal frequencies c_e. Maintain two priority queues for edges with cost 1 and 2; greedily apply operations yielding maximal total weight decrease.",
      "Functional Graph: Every node has out-degree 1, decomposing into cycles with incoming trees. Contract components and link tree leaves to cycles to build 1 single SCC.",
      "Contract 2-edge-connected components into a tree. Orient paths using LCA and tree prefix sums to verify no edge is requested in conflicting directions.",
      "State-space BFS with branch pruning: Multiply current value by its non-zero and non-one digits, tracking minimal steps to reach target length n using std::map."
    ]
  },
  19: {
    essenceEn: [
      "Dinic's Algorithm: Computes maximum network flow via layered graphs (BFS) and blocking flows (DFS with work-pointer optimization ptr) in O(V^2 E).",
      "Max-Flow Min-Cut Theorem: Maximum flow from source S to sink T equals the minimum capacity of an S-T cut separating S from T. Foundation for Project Selection modeling."
    ],
    complexityEn: "General graphs: O(V^2 E). Unit networks or bipartite matching: O(E sqrt(V)) (rivaling Hopcroft-Karp).",
    commentsEn: [
      "Classic Project Selection via Min-Cut: Source S links to each edge with capacity w_e. Each edge links to endpoints with capacity infinity. Endpoints link to sink T with capacity a_v.",
      "Binary search on individual bear weight W: Scaled edge capacities are floor(cap / W). Run Dinic to test if total flow supports >= x bears.",
      "Binary search on maximum in-degree K. Construct flow network: S connects to edge nodes, each edge connects to two students, each student connects to T with capacity K.",
      "Time reversal + Bipartite Matching: Add students in reverse order, connecting potential values val with clubs. Use augmenting path algorithm (Kuhn) to monotonically push MEX.",
      "For each prime factor p, build bipartite graph between odd and even array indices. Edge capacities equal exponent of p in factorization. Dinic finds total canceled operations.",
      "Min-Cost Max-Flow (MCMF): Split each node into parent capacity (offers at most 2 children) and child capacity (needs 1 parent). Direct edges downward with Euclidean distance costs.",
      "Generalized Project Selection with penalties: Source connects dogs, sink connects cats. Friend constraints link to respective pets, adding penalty costs to cut capacities.",
      "Min-Cut formulated as DP: Special graph topology reveals that every (S, T) cut depends solely on cardinality of S. Solve via O(N^2) DP without executing Dinic.",
      "Permutation cycle decomposition: Swaps resolve cycles in permutation a or b. Maximum bipartite matching between cycles of both permutations.",
      "Construct Minimum Spanning Tree (MST). For MST edges, find minimal replacement edge outside tree; for non-MST edges, find maximum tree edge on cycle. Solved via HLD + SegTree."
    ]
  },
  20: {
    essenceEn: [
      "Persistent Data Structures preserve all previous historical versions after modifications. Modifying a node allocates a new root-to-leaf path of O(log N) nodes, reusing unchanged branches.",
      "Prefix versioning: Version R represents array state a[1..R]. Query interval [L, R] by subtracting version L-1 from version R (analogous to 2D Prefix Sums)."
    ],
    complexityEn: "Each point update creates O(log N) new nodes. Memory O(N log N), query time O(log N).",
    commentsEn: [
      "For element i, find its k-th prior duplicate prev_k[i]. Element is distinct in query if prev_k[i] < L. Persistent SegTree counts elements with prev_k < L in [L, R].",
      "Find elements appearing > (R-L+1)/k times (k <= 5). Persistent SegTree: at each step at most k child branches exceed threshold, recursively finding smallest valid value.",
      "Persistent version tree: Version rollback queries form an operational tree. Store queries as a tree and DFS over query history combining with std::bitset.",
      "Dynamic Segment Tree per vertex: dp[u][w] is longest path ending at vertex u with last edge weight w. Update and query Max on dynamic SegTree at vertex u.",
      "Sort columns descending by height. Sequentially insert columns into Persistent SegTree tracking longest contiguous segment of 1s. Binary search version history.",
      "Evaluate LCM(a_L, ..., a_R) mod (10^9+7): Separate primes <= sqrt(max A) (86 primes, tracking max exponents) from larger primes (exponent at most 1, Persistent SegTree).",
      "2D range point counting with dynamic updates: Fenwick tree over Treaps / PBDS or Persistent SegTree nested within outer BIT (BIT of SegTree).",
      "Power sum S(n) = sum_{i=1}^n i^k is a degree-(k+1) polynomial in n. Compute first k+2 values and interpolate S(n) via Lagrange Interpolation in O(k).",
      "Subsequence DP: Array beauty is minimum adjacent difference. For candidate threshold X, use Two Pointers and prefix sum DP to count subsequences with spacing >= X.",
      "Euler characteristic for planar graphs: Faces = 1 + intersections + perimeter edges. Sweep-line left-to-right using Fenwick Tree to count segment intersections."
    ]
  },
  21: {
    essenceEn: [
      "HLD partitions tree edges into Heavy Edges (leading to child with maximum subtree size) and Light Edges, decomposing tree into contiguous Heavy Paths.",
      "Any path between two vertices traverses at most O(log N) distinct heavy paths. Each heavy path maps to a contiguous interval in Euler tour order => manage path operations via Segment Tree in O(log^2 N)."
    ],
    complexityEn: "HLD precomputation O(N), path updates and queries between u and v take O(log^2 N).",
    commentsEn: [
      "Basic HLD: Map edges to deeper child nodes. Toggling edge color reduces to point update on SegTree. Path distance checks if any black edge lies on path.",
      "Pour water into subtree u (Euler tour range update). Emptying at v clears path from v up to root (HLD path update). Query water status on SegTree.",
      "HLD with dynamic root: Path updates between u and v remain invariant under root shifts. Dynamic subtree updates branch based on ancestor relationship to active root.",
      "HLD list merging: Each node stores up to 10 smallest people IDs. Traversing heavy paths merges 10-element lists in O(10).",
      "Build spanning tree containing all k mandatory edges. For each rival edge (u, v) of weight w, use HLD to bound weights <= w along tree path between u and v.",
      "Kruskal MST construction: For each given edge, query maximum edge weight along its tree path using HLD combined with RMQ Segment Tree.",
      "Directed graph between people and cats: If person i knows cat j (i != j), add edge i -> j. Decompose into SCCs via Tarjan; impossible if graph is 1 single SCC.",
      "HLD activation flow: Segment Tree stores sums and Maximum Suffix Sums of heavy paths to verify whether node activation cascades from ancestors.",
      "WQS Binary Search / DP optimization: Apply penalty lambda for using Type-2 balls, decoupling problem into independent optimal choices per Pokemon.",
      "Pseudo-tree (single cycle cactus graph): Detect cycle, isolate cycle and incident rooted subtrees. Manage edge state flips using HLD on trees and SegTree on cycle."
    ]
  },
  22: {
    essenceEn: [
      "Convex Hull Trick (CHT): Optimizes DP transitions of form dp[i] = min_{j < i}(dp[j] + a[i] × b[j]). Each state j represents a line y = m x + c with slope m = b[j] and intercept c = dp[j].",
      "If slopes m are monotonic, maintain convex hull in std::deque in amortized O(N). If slopes or queries are arbitrary, Li Chao Segment Tree adds line segments and evaluates extrema at x in O(log(range)) with minimal code."
    ],
    complexityEn: "Monotonic CHT: O(N). Li Chao Tree: O(N log C) where C is coordinate range of query domain.",
    commentsEn: [
      "Classic CHT: dp[i] = min_{j < i}(dp[j] + a_i × b_j). Since a_i increases and b_i decreases, use std::deque to maintain lower convex hull of lines in O(N).",
      "Sort rectangles by x ascending (implying y descending). dp[i] = x_i y_i - a_i + max_{j < i}(dp[j] - x_j y_i). Solved via CHT for maximum evaluation.",
      "Tree DP with Li Chao Tree: Each node queries minimum evaluation across lines from all leaves in its subtree. Solved via Li Chao Tree Merging.",
      "Minimize unused pairs off single path: Tree DP with CHT to pair optimal child branches at each parent node in O(N).",
      "Shifting element a_i to j alters sum sum i × a_i. Express difference as a linear function of a_i and evaluate via Li Chao Tree.",
      "Express recursive function as minimizing linear forms f(j) = a_j × (x - y) + (y × a_j - S_j). Solved via Segment Tree of Li Chao Trees.",
      "Convex hull on prefix sum coordinates: Leveling water segments corresponds to Lower Convex Hull of points (i, P[i]). Monotonic stack maintains increasing slopes.",
      "Centroid Decomposition with CHT: Accumulate distance-scaled sums on paths through centroid. Paths from centroid to leaves form lines inserted into CHT.",
      "Centroid Decomposition counting paths forming multiples of M: Match paths upward to centroid and downward to leaves using modular inverse lookups.",
      "Power-of-two matrix assignment: Assign grid cell values such that every path from (1, 1) to (n, n) produces a unique sum; reconstruct path bit by bit."
    ]
  }
};

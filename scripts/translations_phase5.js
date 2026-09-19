module.exports = {
  23: {
    essenceEn: [
      "When processing K query vertices on an N-node tree with sum K <= 10^5, full tree algorithms TLE. Virtual Tree compresses the tree down to exactly these K vertices and pairwise LCAs.",
      "Construction algorithm: Sort K vertices by Euler Tour entry time (tin), use std::stack tracking active ancestor chain to build a tree of size <= 2K in O(K log K). Execute Tree DP directly on virtual tree."
    ],
    complexityEn: "Virtual tree construction and DP in O(K log K) per query, overall O(sum K log K).",
    commentsEn: [
      "Classic Virtual Tree: Given k critical cities, eliminate minimum intermediate nodes to isolate them. Construct Virtual Tree of size O(k) and run greedy DP.",
      "Construct Virtual Tree on k query vertices plus root r. Compute number of critical ancestors per node, then group via independent DP without exceeding m groups.",
      "Multi-speed virus spread on tree: Build Virtual Tree spanning outbreak centers and query destinations. Run multi-source Dijkstra directly on Virtual Tree.",
      "Evaluate sum phi(a_u × a_v) × dist(u, v): Mobius inversion on multiplicative function phi. For each divisor d, build Virtual Tree over multiples of d.",
      "Heavy-Light Vertex square root decomposition: Nodes with degree > sqrt(N) are preprocessed independently; small-degree nodes update subtrees via Euler Tour and SegTree.",
      "Greedy from highest to lowest: Since 2^i > sum_{j < i} 2^j, iterate from N down to 1; use Binary Lifting to verify if nodes needed from i to selected tree <= k.",
      "Divide and Conquer on time axis with DSU Rollback (or Virtual Trees): Check bipartiteness of each color layer and revert state if coloring conflicts.",
      "XOR Randomized Hashing: Assign random 0/1 (or 64-bit integer) to each value. Check if range sum is divisible by k across 30-40 independent random arrays.",
      "Tree DP edge contraction probability: dp[u][i] is probability that subtree u contracts into u with i edges contracted before edge (u, parent). Combine subtrees via polynomial convolution.",
      "Dijkstra on cyclically rotating graphs: Since edges rotate periodically, reaching shortest distance to u allows transitioning to (u+1) mod n with cost 1."
    ]
  },
  24: {
    essenceEn: [
      "Applies when Q independent queries seek the time T at which a monotonic condition becomes satisfied, where answering queries individually is too slow.",
      "Parallel BS runs binary search synchronously for all Q queries across log(Time) rounds. In each round, apply modifications from 1 to Mid, then classify queries into left [L, Mid] or right [Mid+1, R] partitions."
    ],
    complexityEn: "Each round takes O(M log N), repeated log(Time) times => O((N + Q) log(Time) log N).",
    commentsEn: [
      "Find maximum billboard height of width w fitting within fence in range [L, R]. Solve using Parallel Binary Search with Segment Tree tracking longest consecutive 1s.",
      "Range Max XOR queries: Build Prefix Linear Basis tracking the latest appearance index of each basis bit to resolve any range query in O(30).",
      "Tree DP: Node can jump back to ancestors if distance to leaves <= k. Evaluate leaves collected while retaining ancestor return capability versus non-return.",
      "Optimized SOS DP: Maintain two largest indices j < k with mask subseteq (a_j & a_k). Scan i right-to-left, greedily inspecting bits high to low to maximize a_i | (a_j & a_k).",
      "Binary search on Manhattan radius R: Transform coordinates (x, y, z) into 4 variables (x+y+z, x+y-z, x-y+z, -x+y+z) and solve integer interval inequalities.",
      "Two Pointers on circular timeline mod m/2: Find maintenance window of length k that cancels the minimum number of train departures.",
      "Nested bracket DP: dp[l][r][c_l][c_r] is valid bracket colorings on [l, r] with left bracket colored c_l and right bracket colored c_r adhering to adjacency constraints.",
      "Greedy Tree DP: Propagate minimum costs downward: cost[u] = min(cost[u], cost[parent]). At each subtree, maximally match (0->1) and (1->0) at parent's cost.",
      "Bitwise DP from bit 0 to 60: Carry additions when adding X depend on sorted order of (a_i mod 2^k). DP state tracks count of elements generating carries.",
      "DSU bit connectivity: Answer is always <= 2 increment/decrement operations. Test connectivity via DSU; try changing 1 element, otherwise change 2 elements."
    ]
  },
  25: {
    essenceEn: [
      "Alien's Trick (WQS Binary Search) solves optimization problems with an exact constraint 'choose exactly K elements' when optimal cost f(K) is Convex or Concave.",
      "Lagrange multiplier (Lambda Penalty): Penalize each selection by cost lambda. Binary search lambda to find the tangent slope matching the constraint, eliminating the K constraint into unconstrained DP."
    ],
    complexityEn: "Time O(log(cost) × Cost(DP)). Decreases dynamic programming dimension by 1.",
    commentsEn: [
      "Classic WQS Binary Search: Limited to a Type-1 and b Type-2 balls. Binary search penalty lambda per Type-2 ball, reducing problem to 1D greedy DP.",
      "Select exactly k message dispatch pairs: Binary search penalty lambda per dispatch via Alien's Trick, then solve unconstrained case with Priority Queue Regret Greedy.",
      "Directed graph i -> i - a_i: Since 1 <= i - a_i <= n, every node has out-degree 1 (Functional Graph). A directed cycle in this graph is a zero-sum subset!",
      "Benefit function f(b_i) = b_i (a_i - b_i^2) has decreasing marginal returns (concave). Binary search marginal slope lambda = f'(b_i) so that sum b_i = k.",
      "Dilworth's Theorem: If LIS >= k, extract the LIS; if LIS < k, array decomposes into < k decreasing subsequences. Iterate extraction to obtain at most k sequences.",
      "Connected components and spanning trees: Contract wire connections into spanning trees; pick redundant edges from components to unify them into a single graph.",
      "Map each string to point (cnt_B, cnt_N) on 2D plane. Binary search Chebyshev distance radius and test intersection of 45-degree parallelograms.",
      "Persistent Segment Tree with XOR Randomized Hashing: Assign 64-bit random hash to each mineral type, testing tree XOR values to locate odd frequency minerals.",
      "Greedy case analysis: Sort characters and construct string with minimal max pi[i] (0 if single occurrence character exists, 1 if characters can interleave).",
      "Exchange Argument: Sort climbers by key max(s_i, a_i) ascending, breaking ties by s_i ascending. Greedily pick climbers sequentially."
    ]
  },
  26: {
    essenceEn: [
      "A tree centroid is a vertex whose removal leaves no remaining component with size exceeding N/2.",
      "Centroid Decomposition performs divide-and-conquer on trees: Find centroid, process paths passing through it, remove centroid, and recurse on subtrees. Centroid tree has maximum depth O(log N)."
    ],
    complexityEn: "Recursion depth O(log N). Total processing time across all levels is O(N log N) or O(N log^2 N).",
    commentsEn: [
      "Comprehension: Find centroid and label 'A', recurse on subtrees labeling 'B', 'C'... Since centroid tree depth <= log2(10^5) approx 17 <= 26, alphabet suffices.",
      "Count vertex pairs with distance k: Find centroid, compute leaf distances from centroid, use frequency array to match d1 + d2 = k, and subtract same-branch pairs.",
      "Dynamic Centroid Tree: Build centroid hierarchy. Each centroid node stores minimum distance to a red node in its centroid subtree. Red updates traverse O(log N) ancestors.",
      "Update black nodes and query shortest distance: Centroid Tree or BFS observation: Shortest distance decreases monotonically and never exceeds sqrt(N).",
      "Centroid Decomposition with Convex Hull Trick: Evaluate sum_{i=1}^k i × a_i along paths. Each centroid-to-leaf path is a line y = mx + c queried via Li Chao Tree.",
      "Centroid Decomposition with modular inverses: Match path from u up to centroid C with path from C down to v such that (val_up × 10^{len} + val_down) = 0 mod M using std::map.",
      "Centroid Decomposition with median binary search and Monotonic Queue: Replace edge weights with +1 or -1, finding paths of length in [L, R] with sum >= 0.",
      "Sum pairwise distances between overlapping color intervals: Formulate as color sweep-line combined with Centroid Decomposition or Euler Tour Fenwick updates.",
      "Compress consecutive identical color runs, verify nested interval validity, and execute interval DP on [L, R] splitting at minimum color position.",
      "Sort elements ascending: dp[i] is ways such that a_i is the next valid element (at least double previous). Optimize transitions with prefix sums."
    ]
  },
  27: {
    essenceEn: [
      "FFT (complex numbers) and NTT (Number Theoretic Transform over finite field Z_p with prime modulo c × 2^k + 1 like 998244353) compute polynomial convolutions A(x) × B(x) of degree N in O(N log N) instead of O(N^2).",
      "Transforms coefficient representation to point-value representation at roots of unity and inverts via IFFT/INTT."
    ],
    complexityEn: "Multiply two degree-N polynomials in O(N log N). Polynomial inversion, ln, exp in O(N log N).",
    commentsEn: [
      "FFT fuzzy string matching: For each character ('A', 'C', 'G', 'T'), expand match tolerance by k units. Reverse pattern P and convolve with text T via FFT to tally matches.",
      "There are 6 letters from 'a' to 'f' => C(6, 2) = 15 pairs. Run FFT for each pair (c1, c2) to mark transformation shifts, then use DSU to count connected operations.",
      "Characteristic polynomial P(x) = sum x^d for allowed digits. First half digit sum generating function is P(x)^{n/2} mod 998244353. Fast exponentiation via NTT; answer is sum c_i^2.",
      "Find all achievable values using exactly k items: Polynomial P(x) has x^v = 1 if item of cost v exists. Compute P(x)^k via NTT binary exponentiation; non-zero exponents are feasible.",
      "Find all distance differences x_j - x_i: Set A(x) = sum x^{a_i} and B(x) = sum x^{M - a_i}. Convolving A × B reveals all occurring differences; factorize to answer queries.",
      "For each whiteboard, shorter strips partition into single-count (contributing 1 + 2x) and multi-count (contributing (1 + x)^2). Convolve polynomials using NTT.",
      "Tree Inclusion-Exclusion: Factorizes into product of N linear binomials (1 + d_i x) where d_i is child count. Divide and Conquer polynomial multiplication via NTT in O(N log^2 N).",
      "Big integer multiplication via FFT: Maximum product with fixed sum partitions into 3s. Evaluate 3^k via binary exponentiation on big integers using FFT, comparing against n.",
      "Square root heuristic on answers: For k <= sqrt(N log N), run greedy Tree DP in O(N). For ans <= N/k <= sqrt(N), binary search equal-answer ranges (Parallel/Block BS).",
      "Strict memory constraint (16 MB) on 2^{12} × 2^{14} matrix: Compressed DSU storing only 2 consecutive rows, relabeling active connected components to prevent memory blowup."
    ]
  },
  28: {
    essenceEn: [
      "Suffix Automaton (SAM) is a Directed Acyclic Word Graph (DAWG) encoding all substrings of length-N string S using exactly O(N) states and O(N) transitions.",
      "Each state corresponds to an equivalence class of substrings sharing identical endpos sets. The Suffix Link Tree of a SAM is isomorphic to the Suffix Tree of the reversed string."
    ],
    complexityEn: "Online linear-time SAM construction in O(N). States <= 2N-1, transitions <= 3N-4.",
    commentsEn: [
      "SAM cyclic permutation counting: Build SAM on text S. For each query string x, duplicate into x+x, traverse SAM tracking match length >= |x|, and mark visited states.",
      "Find k-th lexicographical substring: Construct SAM, count paths originating from each state via DAG DP, then greedily traverse transitions in alphabetical order.",
      "SAM with Persistent Segment Tree: Store endpos set per state in SegTree. Find smallest substring lexicographically > T in [L, R] by testing endpos in [L+|len|-1, R].",
      "Evaluate sum C(cnt(p)+1, 2) across all substrings p: Build SAM, aggregate occurrence counts cnt per state up the Suffix Link tree. Each state contributes (len[u] - len[link[u]]) × C(cnt[u]+1, 2).",
      "Generalized SAM + Segment Tree Merge: Build SAM over M text strings. Each state tracks document frequency in a SegTree; merge trees along Suffix Links for queries.",
      "Construct Generalized SAM on target string S and n constraint strings. Count occurrences of each state in each string by propagating up Suffix Links, verifying [l_i, r_i].",
      "Build Virtual Tree over Suffix Tree (Suffix Link tree of SAM): Compute sum of pairwise LCPs between suffix sets A and B via weighted LCA nodes in O((|A| + |B|) log N).",
      "Reconstruct tree from distance matrix: Run MST algorithm (Prim/Kruskal) on distance matrix, then run DFS to recompute all-pairs tree distances and compare with input.",
      "Random Walk expectation on tree: Expectation equation E[u] = 1/deg(u) sum (E[v] + w). Formulate E[u] = A_u E[parent] + B_u and solve via 2 DFS passes.",
      "Mo's Algorithm frequency bucketing with Priority Queue: Elements with frequency > sqrt(N) number at most sqrt(N); simulate Huffman Coding over frequency buckets using min-heap."
    ]
  }
};

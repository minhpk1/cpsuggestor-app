module.exports = {
  6: {
    essenceEn: [
      "DFS (Depth-First Search) explores deeply to find connected components, cycles, and bipartite graph properties.",
      "BFS (Breadth-First Search) traverses layer by layer, finding shortest paths on unweighted graphs and 2D grid mazes."
    ],
    complexityEn: "Time O(V + E) or O(N × M) on grids. Space O(V) for recursion stack or std::queue.",
    commentsEn: [
      "Foundational: Management tree graph. Minimum groups needed equals maximum depth of the tree, found via DFS/BFS from root nodes without superiors.",
      "BFS for shortest path from n to m on number state space, or reverse thinking: from m back to n, divide by 2 if even, else add 1.",
      "BFS/DFS on chessboard dodging Queen attack zones, or geometric insight: King can reach destination iff both points share the same quadrant relative to Queen.",
      "Tree DFS tracking consecutive cats on path from root. Prune immediately if count exceeds m; count reachable valid leaf nodes.",
      "0-1 BFS on grid: State (x, y, dir, turns). Continuing in same direction costs 0, turning direction costs 1; verify if turns <= 2.",
      "Maze barricade construction: Place walls around all 'B' bad people. Then BFS from escape exit (n, m): check if all 'G' reach exit and all 'B' remain trapped.",
      "Connect edge between points sharing identical x or y coordinate. DFS counts connected components C; answer is C - 1 snowdrifts.",
      "BFS order verification: Sort each vertex's adjacency list by appearance index in target BFS sequence, then run standard BFS to compare.",
      "DFS traversal of components: A connected component is a simple cycle if and only if every vertex in it has degree exactly 2.",
      "Reverse BFS strategy: Run single multi-source BFS from the exit to compute distances to all cells. Player battles any monster with d <= d_player."
    ]
  },
  7: {
    essenceEn: [
      "DSU manages disjoint subsets with two fundamental operations: find(u) (find representative) and unite(u, v) (merge sets).",
      "Two core optimizations: Path Compression and Union by Rank/Size reduce amortized operation time to almost constant O(alpha(N))."
    ],
    complexityEn: "O(alpha(N)) per operation, where alpha is the inverse Ackermann function (in practice alpha(N) <= 4).",
    commentsEn: [
      "Foundational: DSU merges members of friendship groups. Query group size sz[find(u)] for each user.",
      "Bipartite graph between employees and spoken languages: Use DSU to merge employees sharing languages. Count components among employees speaking >= 1 language.",
      "Offline queries + DSU: Sort edges and queries by weight ascending. Adding edge (u, v) increases path pairs by sz[u] × sz[v].",
      "Two parallel DSUs for Mocha and Diana: For each pair (u, v), if adding edge creates no cycle in either forest, merge in both.",
      "2-colored DSU (Bipartite verification): Each domino is an edge connecting 2 numbers. Valid iff each number appears twice and graph contains no odd cycle.",
      "Prefix and Suffix DSU: Build prefix DSU for first i edges and suffix DSU for remaining edges. Merge two DSUs in O(N alpha(N)) when skipping range [l, r].",
      "DSU tracking redundant edges (edges between already connected components). With k redundant edges, answer is the sum of sizes of the k+1 largest components.",
      "Time reversal thinking: Instead of destroying elements, insert elements in reverse order and use DSU to merge adjacent segments while tracking maximum sum.",
      "DSU merging positions that must share identical characters under two constraints: k-periodicity (i with i+k) and palindrome symmetry (i with n-1-i).",
      "Optimized O(N log N) tree edge addition: Fix vertex 1, find disconnected components in both forests, and pair them greedily with two separate lists."
    ]
  },
  8: {
    essenceEn: [
      "Decompose problems into overlapping subproblems exhibiting optimal substructure.",
      "Covers 1D/2D DP, Knapsack (0/1, unbounded), Longest Increasing Subsequence (LIS in O(N log N)), and Longest Common Subsequence (LCS)."
    ],
    complexityEn: "Problem-dependent, commonly O(N), O(N^2), or O(N × W).",
    commentsEn: [
      "1D House Robber style DP: Count frequencies cnt[x]. Choosing x yields x × cnt[x] points but forbids x-1: dp[i] = max(dp[i-1], dp[i-2] + i × cnt[i]).",
      "Unbounded Knapsack DP: dp[i] is the maximum number of pieces into which a ribbon of length i can be cut using lengths a, b, c.",
      "4-state DP: dp[i][j][k][type] stores ways to arrange i foot soldiers and j horsemen with k consecutive units of type at the end.",
      "Longer numbers are strictly larger: Find cheapest digit paint cost to maximize number length, then greedily replace leading digits with larger options.",
      "Tetrahedron path counting DP: dp[steps][0] is paths ending at vertex D, dp[steps][1] is paths ending at the other 3 vertices after steps moves.",
      "Precomputed DP with Prefix Sums: dp[i] = dp[i-1] + dp[i-k] (eating 1 red or k white flowers). Use prefix sums to answer range queries in O(1).",
      "Grid DP / Greedy: Compare cost of one 1 × 2 tile priced y against two 1 × 1 tiles priced 2x. If y < 2x, greedily maximize 1 × 2 placements.",
      "DP with std::lower_bound: Sort beacons by position. dp[i] is surviving beacons when activating from position i: dp[i] = dp[j] + 1 with j outside destroy range.",
      "DP on subsegment lengths: dp[j] is number of valid subsequences of length j. For each a_i, update dp[d] += dp[d-1] for all divisors d descending.",
      "Interval DP on [l, r]: Substring is degree-k palindrome iff it is a palindrome and its first half is degree-(k-1) palindrome. Precompute dp[l][r] in O(N^2)."
    ]
  },
  9: {
    essenceEn: [
      "Topological Sort orders vertices of a Directed Acyclic Graph (DAG) into a linear sequence such that every edge u -> v has u before v.",
      "Two standard approaches: Kahn's Algorithm (in-degree peeling with queue) and DFS (recording vertices by finishing timestamps)."
    ],
    complexityEn: "Time O(V + E), Space O(V + E).",
    commentsEn: [
      "Constructing new alphabet order: Compare adjacent words to create directed character dependencies. Run Topological Sort to detect cycles and print alphabet.",
      "Orienting undirected edges: Run Topological Sort on existing directed edges to assign topological indices. Orient undirected edges from lower to higher indices.",
      "Detect cycles using Topological Sort. If cyclic output -1; otherwise DAG DP: dp[u][c] tracks maximum count of character c along any path reaching u.",
      "Reverse Topological Sort with Max-Heap: To minimize lexicographical labels, invert edges and assign labels from N down to 1 to vertices with 0 out-degree.",
      "Traversal on degenerate linear DAG: Each portal leads to exactly one destination i + a_i. Walk from portal 1 until position >= t.",
      "Kahn's algorithm tree leaf peeling: Push all leaf nodes (degree <= 1) into queue. Each BFS level strips one layer of leaves; repeat k rounds.",
      "Binary search on maximum reversal cost C: Keep edges with weight > C and use Topological Sort to test whether remaining graph is a DAG.",
      "DAG DP: dp[u][len] is minimum transit time from vertex 1 to u visiting exactly len vertices. Update in topological order and backtrack path.",
      "Build BFS/DFS spanning tree and 2-color vertices by tree depth. Smaller color set has size <= floor(n/2) and forms a valid vertex cover.",
      "Reverse topological thinking: Identify 2 × 2 monochromatic blocks in target canvas and queue them. Erased blocks turn into wildcards matching any color."
    ]
  },
  10: {
    essenceEn: [
      "Dijkstra: Computes single-source shortest paths on non-negative weighted graphs using Priority Queue in O((V + E) log V).",
      "0-1 BFS: On graphs with edge weights 0 and 1, use std::deque pushing 0-edges to front and 1-edges to back in O(V + E).",
      "Floyd-Warshall: Computes all-pairs shortest paths on adjacency matrices in O(V^3)."
    ],
    complexityEn: "Dijkstra: O(M log N), 0-1 BFS: O(N + M), Floyd-Warshall: O(N^3).",
    commentsEn: [
      "Comprehension: Standard Dijkstra implementation finding shortest path from vertex 1 to n on undirected graph, reconstructing path via parent array.",
      "Reversed Floyd-Warshall: To handle vertex removals, reverse the process by adding vertices one by one from last to first, updating all-pairs distances in O(N^2).",
      "0-1 BFS on grid: Vertical moves consume no turn credits, while horizontal turns cost 1 credit. Set turn weight to 1, optimized via std::deque.",
      "State-expanded Dijkstra/BFS forbidding consecutive triplets (a, b, c): Define states as directed edges (u, v), transitioning to (v, w).",
      "Simultaneous road and railway Dijkstra: Favor roads over railways when distances tie to eliminate maximum redundant rail routes.",
      "0-1 BFS between lit cells and rows/columns: Moving between adjacent lit cells costs 0; lighting a whole row or column to travel costs 1.",
      "Shortest Path Tree (SPT): Run Dijkstra from 1 to form SPT. BFS on SPT and retain the first k edges visited.",
      "Dynamic Floyd-Warshall matrix update: Adding new road (u, v) of length w updates distance between pairs (i, j) via min(d[i][j], d[i][u] + w + d[v][j]).",
      "Run Dijkstra from all n vertices to obtain full distance matrix d[u][v] in O(N M log N). Test zeroing each edge and compute sum over k delivery routes.",
      "BFS distance from 1: For each vertex v != 1, collect all incoming edges (u, v) satisfying dist[u] + 1 == dist[v]. Backtrack valid SPT combinations."
    ]
  }
};

module.exports = {
  1: {
    essenceEn: [
      "Prefix Sum computes subsegment sums in O(1): P[R] - P[L-1] (for 1D) or S[x2][y2] - S[x1-1][y2] - S[x2][y1-1] + S[x1-1][y1-1] (for 2D).",
      "Difference Array performs range additions in O(1): D[L] += V, D[R+1] -= V, followed by a prefix sum over D to restore the modified array."
    ],
    complexityEn: "Precomputation O(N) (or O(N × M)), per query O(1), space O(N).",
    commentsEn: [
      "Comprehension: Create an indicator array a[i] = 1 if s[i] == s[i+1], then compute prefix sums to answer adjacent equal character pairs in [L, R-1] in O(1).",
      "Basic application: Maintain two parallel prefix sum arrays: one on the original array and one on the sorted array.",
      "Two-tier Difference Array with Prefix Sums: First pass counts recipe coverage per temperature T, second pass counts admissible temperatures >= k.",
      "Two-level independent difference arrays: First level counts the execution frequency of each operation [l, r], second level applies the scaled operations to the base array.",
      "Mathematical transformation: sum_{i=l}^r a_i = r - l + 1 <=> P[r] - r = P[l-1] - (l-1). Use a hash map to count prefixes with matching (P[i] - i).",
      "Partitioning into three equal parts: Total sum must be divisible by 3 (S). Use prefix sums to count occurrences of prefix sum S before each prefix sum 2S.",
      "Use Prefix Sums to evaluate the arithmetic mean of all contiguous subsegments of length >= k in O(N^2) time for N <= 5000.",
      "Difference array frequency counting: Compute index query frequencies, then sort both numbers and frequencies in ascending order to maximize sum via rearrangement inequality.",
      "Separate prefix sums for odd and even indices: Removing element at index i toggles the parity of all subsequent positions in O(1).",
      "Sequential greedy height adjustment: Lower the current column to max(0, h[i+1]-k) at each step to maximize collected inventory blocks."
    ]
  },
  2: {
    essenceEn: [
      "Traverse the search space using monotonic index pairs (L, R) moving in a single direction without resetting.",
      "Expand window R while condition holds, and contract L when violated or when seeking the minimal valid subsegment."
    ],
    complexityEn: "Each pointer moves at most N steps => Total time complexity O(N).",
    commentsEn: [
      "Two pointers converging from array boundaries: Each player greedily picks the larger element between L and R and advances the pointer.",
      "Classic sliding window: Find longest continuous segment of books with total read time <= t. Expand R to accumulate time, contract L when sum > t.",
      "Sliding window maintaining max - min <= 1: Use a frequency array or multiset to verify condition in O(1) as L and R advance.",
      "Separate digits into odd and even queues (relative order cannot change), then merge with two pointers identical to Merge Sort.",
      "Two pointers on two sorted arrays: Pair vests with soldiers; advance vest pointer if too small, advance soldier pointer if no vest fits.",
      "Sliding window finding longest substring of character 'a' (or 'b') allowing up to k character replacements.",
      "Fix right pointer R, use left pointer L to find furthest position satisfying x[R] - x[L] <= d. Number of valid triplets ending at R is C(R-L, 2).",
      "Sliding window finding shortest contiguous segment containing all distinct Pokemon: expand R until all species present, then shrink L as much as possible.",
      "Two pointers starting from opposite ends accumulating prefix and suffix sums, converging toward the middle to find maximum sum with sum1 == sum3.",
      "Sort skill values ascending, then maintain window with two pointers satisfying a[R] - a[L] <= 5 to maximize team size."
    ]
  },
  3: {
    essenceEn: [
      "Transform optimization 'Find the best value X' into decision problem 'Is threshold M feasible?'.",
      "Requires monotonicity in predicate f(M): boolean outputs must form monotonic sequence like FFFFFTTTTT or TTTTTFFFFF."
    ],
    complexityEn: "O(log(range) × Cost(f)). Reduces search space exponentially.",
    commentsEn: [
      "Comprehension: Sort prices and use std::upper_bound to count stores with price <= m_i in O(log N).",
      "Binary search on poison duration k: Damage from i-th attack is min(k, a[i+1]-a[i]). Total damage is monotonic with respect to k.",
      "Binary search on hamburger count: For M burgers, calculate deficit ingredients and check if total purchase cost <= r rubles.",
      "Binary search on median X: To achieve median >= X, increment all elements from n/2 to n-1 up to at least X with total operations <= k.",
      "Binary search on Frodo's pillows at position k: Pillow count decreases by 1 outward to 1; compute total pillows with arithmetic series in O(1).",
      "Sort candies descending, compute prefix sums, and use std::lower_bound to find minimal candies achieving sugar sum >= x.",
      "Find k-th smallest in n × m multiplication table: Binary search X, counting entries <= X via sum_{i=1}^n min(m, floor(X/i)) in O(n).",
      "Binary search on travel days D: Decompose D = q × n + r to determine drifting position, check if Manhattan distance to goal <= D.",
      "Binary search on baked cookies in range [0, 2 × 10^9]: Check if magic powder required for deficit ingredients <= k (guard against 64-bit overflow).",
      "Precompute all subsegment sums of length >= 2 into a boolean lookup table of size N, then count original elements present in table."
    ]
  },
  4: {
    essenceEn: [
      "Sieve of Eratosthenes O(N log log N) finds all primes <= N. Smallest Prime Factor (SPF) sieve stores the smallest prime factor for every integer.",
      "With SPF, factorize any integer <= N in O(log X) instead of O(sqrt(X)). Euclidean algorithm computes gcd(a, b) in O(log(min(a,b)))."
    ],
    complexityEn: "Precomputation O(N log log N), prime factorization O(log X), gcd query O(log(min(a, b))).",
    commentsEn: [
      "Numbers with exactly 3 positive divisors are squares of primes (x = p^2). Sieve primes up to 10^6 and check perfect squares.",
      "Collider activation management: Use SPF to factorize incoming numbers in O(log X), maintain active state of prime factors to detect conflicts.",
      "Identity factorization: a^2 - b^2 = (a-b)(a+b). Since a prime only has factors 1 and itself, we must have a-b=1 and a+b being prime.",
      "Sharp mathematical insight: Maximum gcd(a, b) for 1 <= a < b <= n is achieved by pair (floor(n/2), 2 × floor(n/2)), yielding floor(n/2).",
      "Iterate a from 1 to cbrt(x) <= 10^4, check if x - a^3 is a positive perfect cube using cbrt or binary search.",
      "Greedily pick smallest prime factor a > 1 of n, then smallest factor b > a of n/a, remaining factor is c = n/(a × b). Verify c > b and c > 1.",
      "GCD property: gcd(a1+x, a2+x, ..., an+x) = gcd(a1+x, gcd(|a2-a1|, |a3-a1|, ...)). Precompute diff GCDs to answer queries in O(log).",
      "Sieve primes up to n, extract prime list, and verify whether primes of form p_i + p_{i+1} + 1 exist and are <= n.",
      "Factorize n into prime factors: If total prime factor count < k, no solution exists; otherwise group excess factors into the last element.",
      "Reconstruct n = d_min × d_max: Find all proper divisors of n and verify that the divisor multiset matches the input list exactly."
    ]
  },
  5: {
    essenceEn: [
      "Make locally optimal choices at each stage with the goal of finding a global optimum without backtracking.",
      "Exchange Argument proof: Assume an optimal schedule has an inversion violating greedy order; prove swapping adjacent elements never worsens solution."
    ],
    complexityEn: "Typically accompanied by sorting O(N log N) or priority queues O(N log N).",
    commentsEn: [
      "Comprehension: Gravity pulling cubes to the right is equivalent to sorting column heights in non-decreasing order.",
      "Find divisor d of n such that d <= k and d is maximized so that bundle count n/d is minimized. Search divisors up to sqrt(n).",
      "Greedy traversal over prefix sums of room capacities: Advance dormitory index whenever current letter's global room number exceeds current dorm.",
      "Regret Greedy (Priority Queue): Drink all potions; whenever health drops negative, undo (regret) the most damaging toxic potion using a min-heap.",
      "To minimize digit sum, round up to induce carry and create trailing zeros. Greedily round from lowest digit upward.",
      "Greedily pick the smaller of L and R if both exceed previous element. If equal, greedily branch and evaluate going fully left versus fully right.",
      "Find longest contiguous subsegment with a[i+1] <= 2 × a[i]: Linear greedy scan extending current sequence; reset upon violation.",
      "Diophantine equation a × x + b × y = n: Greedily iterate bottle count x from 0 to n/a, check if remaining (n - a × x) is divisible by b.",
      "Count of 'codeforces' subsequences is prod(c_i): To minimize sum of characters while prod >= k, greedily increment character counts uniformly.",
      "Sort coin values descending, greedily take largest coins until accumulated sum strictly exceeds 50% of the total sum."
    ]
  }
};

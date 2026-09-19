const fs = require('fs');
const path = require('path');

const phase1 = require('./roadmap_phase1');
const phase2 = require('./roadmap_phase2');
const phase3 = require('./roadmap_phase3');
const phase4 = require('./roadmap_phase4');
const phase5 = require('./roadmap_phase5');

const trans1 = require('./translations_phase1');
const trans2 = require('./translations_phase2');
const trans3 = require('./translations_phase3');
const trans4 = require('./translations_phase4');
const trans5 = require('./translations_phase5');
const allTranslations = { ...trans1, ...trans2, ...trans3, ...trans4, ...trans5 };

function cleanMath(text) {
  if (!text) return '';
  return text
    .replace(/\\le/g, '≤')
    .replace(/\\ge/g, '≥')
    .replace(/\\ne/g, '≠')
    .replace(/\\approx/g, '≈')
    .replace(/\\times/g, '×')
    .replace(/\\dots/g, '...')
    .replace(/\\sum/g, '∑')
    .replace(/\\prod/g, '∏')
    .replace(/\\log/g, 'log')
    .replace(/\\gcd/g, 'gcd')
    .replace(/\\phi/g, 'φ')
    .replace(/\\pi/g, 'π')
    .replace(/\\oplus/g, 'XOR')
    .replace(/\\implies/g, '⇒')
    .replace(/\\iff/g, '⇔')
    .replace(/\\mathrel\{\+\}=/g, '+=')
    .replace(/\\mathrel\{-\}=/g, '-=')
    .replace(/\\sqrt\{([^}]+)\}/g, '√$1')
    .replace(/\\sqrt/g, '√')
    .replace(/\\binom\{([^}]+)\}\{([^}]+)\}/g, 'C($1, $2)')
    .replace(/\\lfloor\s*([^\\/]+?)\s*\\rfloor/g, '⌊$1⌋')
    .replace(/\\lfloor/g, '⌊')
    .replace(/\\rfloor/g, '⌋')
    .replace(/\\pmod\{([^}]+)\}/g, '(mod $1)')
    .replace(/\\pmod/g, 'mod')
    .replace(/\\sim/g, '~')
    .replace(/\\land/g, 'AND')
    .replace(/\\lor/g, 'OR')
    .replace(/\\neg/g, 'NOT')
    .replace(/\\mathbb\{Z\}_p/g, 'Z_p')
    .replace(/10\^5/g, '10⁵')
    .replace(/10\^6/g, '10⁶')
    .replace(/10\^7/g, '10⁷')
    .replace(/10\^9/g, '10⁹')
    .replace(/2\^N/g, '2ᴺ')
    .replace(/2\^k/g, '2ᵏ')
    .replace(/N\^2/g, 'N²')
    .replace(/N\^3/g, 'N³')
    .replace(/\$/g, '');
}

const englishTopicNames = {
  1: "Prefix Sums & Difference Arrays",
  2: "Two Pointers & Sliding Window",
  3: "Binary Search on Answer",
  4: "Sieve of Eratosthenes & Number Theory Basics",
  5: "Greedy Algorithms & Exchange Argument",
  6: "Graph Traversal (DFS/BFS) & Grid Graphs",
  7: "Disjoint Set Union (DSU)",
  8: "Dynamic Programming Basics (1D, 2D, Knapsack, LIS, LCS)",
  9: "Topological Sort & Directed Acyclic Graphs (DAG)",
  10: "Shortest Paths (Dijkstra, 0-1 BFS, Floyd-Warshall)",
  11: "Lowest Common Ancestor (LCA), Binary Lifting & Euler Tour",
  12: "Tree DP & Rerooting Technique",
  13: "Modular Arithmetic & Combinatorics (Stars and Bars, PIE)",
  14: "Bitmask DP & Sum Over Subsets (SOS DP)",
  15: "Fenwick Tree (BIT) & Basic Segment Tree",
  16: "Segment Tree with Lazy Propagation",
  17: "Advanced String Algorithms (Hashing, Z-Algorithm, KMP, Trie)",
  18: "Strongly Connected Components (SCC) & 2-SAT (Tarjan)",
  19: "Maximum Flow (Dinic) & Minimum Cut",
  20: "Persistent Segment Tree & Persistent Data Structures",
  21: "Heavy-Light Decomposition (HLD)",
  22: "DP Optimization: Convex Hull Trick (CHT) & Li Chao Tree",
  23: "Virtual Trees (Auxiliary Trees)",
  24: "Parallel Binary Search",
  25: "WQS Binary Search / Alien's Trick (Lambda Optimization)",
  26: "Centroid Decomposition on Trees",
  27: "Fast Fourier Transform (FFT) & Number Theoretic Transform (NTT)",
  28: "Suffix Automaton (SAM) & Suffix Tree"
};

const phasesMeta = [
  {
    id: 1,
    titleVi: 'Phase 1: Foundation (Newbie ➔ Pupil)',
    titleEn: 'Phase 1: Foundation (Newbie ➔ Pupil)',
    ratingRange: '< 1200 - 1399',
    descriptionVi: 'Nền tảng tư duy mảng, hai con trỏ, tìm kiếm nhị phân, số học cơ bản và tham lam.',
    descriptionEn: 'Core array techniques, two pointers, binary search on answer, elementary number theory, and greedy exchange arguments.',
    topics: phase1
  },
  {
    id: 2,
    titleVi: 'Phase 2: Intermediate (Pupil ➔ Specialist)',
    titleEn: 'Phase 2: Intermediate (Pupil ➔ Specialist)',
    ratingRange: '1200 - 1599',
    descriptionVi: 'Duyệt đồ thị lưới BFS/DFS, tập hợp rời rạc DSU, quy hoạch động cơ bản và đường đi ngắn nhất.',
    descriptionEn: 'Grid graphs (BFS/DFS), disjoint set union (DSU), classical dynamic programming, and shortest path algorithms.',
    topics: phase2
  },
  {
    id: 3,
    titleVi: 'Phase 3: Advanced (Specialist ➔ Expert)',
    titleEn: 'Phase 3: Advanced (Specialist ➔ Expert)',
    ratingRange: '1600 - 1899',
    descriptionVi: 'Tổ tiên chung LCA, Euler Tour, Tree DP đổi gốc, tổ hợp Modular, Bitmask DP và Segment Tree cơ bản & lười.',
    descriptionEn: 'LCA & Euler Tour, Tree DP with rerooting, modular combinatorics, bitmask / SOS DP, and segment trees with lazy propagation.',
    topics: phase3
  },
  {
    id: 4,
    titleVi: 'Phase 4: High-End Core (Candidate Master ➔ Master)',
    titleEn: 'Phase 4: High-End Core (Candidate Master ➔ Master)',
    ratingRange: '1900 - 2299',
    descriptionVi: 'Xử lý xâu nâng cao, thành phần liên thông mạnh Tarjan, luồng Dinic, cây bền vững, HLD và tối ưu hóa CHT/Li Chao.',
    descriptionEn: 'Advanced strings, Tarjan bridges/SCC & 2-SAT, Dinic max flow, persistent segment trees, HLD, and CHT / Li Chao trees.',
    topics: phase4
  },
  {
    id: 5,
    titleVi: 'Phase 5: Legendary & Grandmaster (Master ➔ GM / IGM)',
    titleEn: 'Phase 5: Legendary & Grandmaster (Master ➔ GM / IGM)',
    ratingRange: '2300 - 2600+',
    descriptionVi: 'Vũ khí tối thượng của GM: Cây ảo, Parallel BS, WQS BS, Centroid Decomposition, FFT/NTT và Suffix Automaton.',
    descriptionEn: 'Grandmaster armory: virtual trees, parallel binary search, Alien\'s trick (WQS), centroid decomposition, polynomial FFT/NTT, and suffix automata.',
    topics: phase5
  }
];

const allTopics = [];
const phases = [];

for (const pm of phasesMeta) {
  const topicIds = [];
  for (const t of pm.topics) {
    topicIds.push(t.id);

    const tEn = allTranslations[t.id] || {};
    const cleanEssenceVi = t.essence.map(cleanMath);
    const cleanEssenceEn = (tEn.essenceEn || t.essence).map(cleanMath);
    const cleanComplexityVi = cleanMath(t.complexity);
    const cleanComplexityEn = cleanMath(tEn.complexityEn || t.complexity);

    const enrichedProblems = t.problems.map((p, pIdx) => {
      const match = p.code.match(/CF\s*(\d+)([A-Z0-9]+)/i);
      const cleanCommentVi = cleanMath(p.comment);
      const cleanCommentEn = cleanMath(
        tEn.commentsEn && tEn.commentsEn[pIdx] ? tEn.commentsEn[pIdx] : p.comment
      );
      return {
        code: p.code,
        name: p.name,
        rating: p.rating,
        url: p.url,
        commentVi: cleanCommentVi,
        commentEn: cleanCommentEn,
        contestId: match ? parseInt(match[1], 10) : 0,
        index: match ? match[2].toUpperCase() : ''
      };
    });

    allTopics.push({
      id: t.id,
      phaseId: pm.id,
      nameVi: t.name,
      nameEn: englishTopicNames[t.id] || t.name,
      tierVi: t.tier,
      tierEn: t.tier.replace('Newbie ➔ Pupil', 'Newbie to Pupil')
                    .replace('Pupil ➔ Specialist', 'Pupil to Specialist')
                    .replace('Specialist ➔ Expert', 'Specialist to Expert')
                    .replace('Candidate Master ➔ Master', 'Candidate Master to Master')
                    .replace('Master ➔ GM / IGM', 'Master to Grandmaster'),
      essenceVi: cleanEssenceVi,
      essenceEn: cleanEssenceEn,
      complexityVi: cleanComplexityVi,
      complexityEn: cleanComplexityEn,
      blogs: t.blogs,
      problems: enrichedProblems
    });
  }

  phases.push({
    id: pm.id,
    titleVi: pm.titleVi,
    titleEn: pm.titleEn,
    ratingRange: pm.ratingRange,
    descriptionVi: pm.descriptionVi,
    descriptionEn: pm.descriptionEn,
    topicIds: topicIds
  });
}

const fileContent = `// Auto-generated bilingual and math-sanitized roadmap data
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

export const ROADMAP_PHASES: RoadmapPhase[] = ${JSON.stringify(phases, null, 2)};

export const ROADMAP_TOPICS: RoadmapTopic[] = ${JSON.stringify(allTopics, null, 2)};
`;

const outputPath = path.resolve(__dirname, '..', 'src', 'data', 'roadmapData.ts');
fs.writeFileSync(outputPath, fileContent, 'utf-8');
console.log(`Successfully generated bilingual sanitized data at ${outputPath} (${Buffer.byteLength(fileContent, 'utf-8')} bytes)`);

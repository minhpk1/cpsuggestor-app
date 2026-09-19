const fs = require('fs');
const path = require('path');

const phase1 = require('./roadmap_phase1');
const phase2 = require('./roadmap_phase2');
const phase3 = require('./roadmap_phase3');
const phase4 = require('./roadmap_phase4');
const phase5 = require('./roadmap_phase5');

const phasesMeta = [
  {
    id: 1,
    title: 'Phase 1: Foundation (Newbie ➔ Pupil)',
    ratingRange: '< 1200 - 1399',
    description: 'Nền tảng tư duy mảng, hai con trỏ, tìm kiếm nhị phân, số học cơ bản và tham lam.',
    topics: phase1
  },
  {
    id: 2,
    title: 'Phase 2: Intermediate (Pupil ➔ Specialist)',
    ratingRange: '1200 - 1599',
    description: 'Duyệt đồ thị lưới BFS/DFS, tập hợp rời rạc DSU, quy hoạch động cơ bản và đường đi ngắn nhất.',
    topics: phase2
  },
  {
    id: 3,
    title: 'Phase 3: Advanced (Specialist ➔ Expert)',
    ratingRange: '1600 - 1899',
    description: 'Tổ tiên chung LCA, Euler Tour, Tree DP đổi gốc, tổ hợp Modular, Bitmask DP và Segment Tree cơ bản & lười.',
    topics: phase3
  },
  {
    id: 4,
    title: 'Phase 4: High-End Core (Candidate Master ➔ Master)',
    ratingRange: '1900 - 2299',
    description: 'Xử lý xâu nâng cao, thành phần liên thông mạnh Tarjan, luồng Dinic, cây bền vững, HLD và tối ưu hóa CHT/Li Chao.',
    topics: phase4
  },
  {
    id: 5,
    title: 'Phase 5: Legendary & Grandmaster (Master ➔ GM / IGM)',
    ratingRange: '2300 - 2600+',
    description: 'Vũ khí tối thượng của GM: Cây ảo, Parallel BS, WQS BS, Centroid Decomposition, FFT/NTT và Suffix Automaton.',
    topics: phase5
  }
];

const allTopics = [];
const phases = [];

for (const pm of phasesMeta) {
  const topicIds = [];
  for (const t of pm.topics) {
    topicIds.push(t.id);
    const enrichedProblems = t.problems.map(p => {
      const match = p.code.match(/CF\s*(\d+)([A-Z0-9]+)/i);
      return {
        ...p,
        contestId: match ? parseInt(match[1], 10) : 0,
        index: match ? match[2].toUpperCase() : ''
      };
    });

    allTopics.push({
      id: t.id,
      phaseId: pm.id,
      name: t.name,
      tier: t.tier,
      essence: t.essence,
      complexity: t.complexity,
      blogs: t.blogs,
      problems: enrichedProblems
    });
  }

  phases.push({
    id: pm.id,
    title: pm.title,
    ratingRange: pm.ratingRange,
    description: pm.description,
    topicIds: topicIds
  });
}

const fileContent = `// Auto-generated from ROADMAP_ALGORITHMS data modules
export interface RoadmapProblem {
  code: string;
  name: string;
  rating: number;
  url: string;
  comment: string;
  contestId: number;
  index: string;
}

export interface RoadmapTopic {
  id: number;
  phaseId: number;
  name: string;
  tier: string;
  essence: string[];
  complexity: string;
  blogs: Array<{ title: string; url: string }>;
  problems: RoadmapProblem[];
}

export interface RoadmapPhase {
  id: number;
  title: string;
  ratingRange: string;
  description: string;
  topicIds: number[];
}

export const ROADMAP_PHASES: RoadmapPhase[] = ${JSON.stringify(phases, null, 2)};

export const ROADMAP_TOPICS: RoadmapTopic[] = ${JSON.stringify(allTopics, null, 2)};
`;

const outputPath = path.resolve(__dirname, '..', 'src', 'data', 'roadmapData.ts');
fs.writeFileSync(outputPath, fileContent, 'utf-8');
console.log(`Wrote roadmapData.ts to ${outputPath} (${Buffer.byteLength(fileContent, 'utf-8')} bytes)`);

import { OJProblem, TopicCategory, TopicStat, RecommendationGroup } from '../types';
import { OJUZ_PROBLEMS } from '../data/problemset';

const ALL_TOPICS: TopicCategory[] = [
  'Dynamic Programming',
  'Graph & Tree',
  'Data Structures',
  'Math & Combinatorics',
  'Greedy & Two Pointers',
  'Strings & Geometry',
  'Interactive & Constructive',
];

export function calculateTopicStats(
  solvedIds: string[],
  unsolvedIds: string[]
): {
  topicStats: TopicStat[];
  strengths: TopicStat[];
  weaknesses: TopicStat[];
} {
  const solvedSet = new Set(solvedIds);
  const unsolvedSet = new Set(unsolvedIds);

  const topicMap: Record<
    TopicCategory,
    { total: number; solved: number; unsolved: number; weightedScore: number }
  > = {
    'Dynamic Programming': { total: 0, solved: 0, unsolved: 0, weightedScore: 0 },
    'Graph & Tree': { total: 0, solved: 0, unsolved: 0, weightedScore: 0 },
    'Data Structures': { total: 0, solved: 0, unsolved: 0, weightedScore: 0 },
    'Math & Combinatorics': { total: 0, solved: 0, unsolved: 0, weightedScore: 0 },
    'Greedy & Two Pointers': { total: 0, solved: 0, unsolved: 0, weightedScore: 0 },
    'Strings & Geometry': { total: 0, solved: 0, unsolved: 0, weightedScore: 0 },
    'Interactive & Constructive': { total: 0, solved: 0, unsolved: 0, weightedScore: 0 },
  };

  // Đếm theo problemset trong database
  OJUZ_PROBLEMS.forEach(p => {
    const t = p.topic || guessTopicFromId(p.id);
    if (t && topicMap[t]) {
      topicMap[t].total++;
      const diff = p.difficultyScore || 2;
      if (solvedSet.has(p.id)) {
        topicMap[t].solved++;
        topicMap[t].weightedScore += diff * 25;
      } else if (unsolvedSet.has(p.id)) {
        topicMap[t].unsolved++;
        topicMap[t].weightedScore += diff * 5; // điểm khuyến khích nộp bài
      }
    }
  });

  // Đồng thời quét thêm từ các bài solved ngoài database bằng heuristics (dựa trên tên bài như IOI, JOI, CEOI)
  solvedIds.forEach(id => {
    const found = OJUZ_PROBLEMS.find(p => p.id === id);
    if (!found) {
      const guessed = guessTopicFromId(id);
      if (guessed && topicMap[guessed]) {
        topicMap[guessed].solved++;
        topicMap[guessed].total++;
        topicMap[guessed].weightedScore += 50;
      }
    }
  });

  unsolvedIds.forEach(id => {
    const found = OJUZ_PROBLEMS.find(p => p.id === id);
    if (!found) {
      const guessed = guessTopicFromId(id);
      if (guessed && topicMap[guessed]) {
        topicMap[guessed].unsolved++;
        topicMap[guessed].total++;
        topicMap[guessed].weightedScore += 10;
      }
    }
  });

  const topicStats: TopicStat[] = ALL_TOPICS.map(topic => {
    const data = topicMap[topic];
    const totalCount = Math.max(data.total, 4);
    const masteryPercentage = Math.min(100, Math.round((data.solved / totalCount) * 100));

    let status: TopicStat['status'] = 'BALANCED';
    let advice = '';

    if (masteryPercentage >= 40 || (data.solved >= 3 && data.unsolved <= 1)) {
      status = 'STRENGTH';
      advice = getStrengthAdvice(topic);
    } else if (data.solved === 0 || data.unsolved > data.solved || masteryPercentage < 20) {
      status = 'WEAKNESS';
      advice = getWeaknessAdvice(topic);
    } else {
      status = 'BALANCED';
      advice = `Trình độ ở mức cân bằng (${data.solved} bài AC). Tiếp tục cọ xát thêm các bài mức Gold.`;
    }

    return {
      topic,
      totalProblemsInDatabase: data.total,
      solvedCount: data.solved,
      unsolvedAttemptedCount: data.unsolved,
      masteryPercentage,
      weightedScore: data.weightedScore,
      status,
      advice,
    };
  });

  // Phân loại Điểm mạnh & Điểm yếu
  const sortedByMastery = [...topicStats].sort((a, b) => b.masteryPercentage - a.masteryPercentage);
  const strengths = sortedByMastery.filter(t => t.status === 'STRENGTH');
  const weaknesses = sortedByMastery.filter(t => t.status === 'WEAKNESS').reverse();

  // Đảm bảo luôn có ít nhất 1-2 điểm mạnh và điểm yếu để gợi ý hữu ích
  if (strengths.length === 0 && sortedByMastery.length > 0) {
    strengths.push({ ...sortedByMastery[0], status: 'STRENGTH' });
  }
  if (weaknesses.length === 0 && sortedByMastery.length > 1) {
    weaknesses.push({ ...sortedByMastery[sortedByMastery.length - 1], status: 'WEAKNESS' });
  }

  return { topicStats, strengths, weaknesses };
}

export function generateRecommendations(
  solvedIds: string[],
  unsolvedIds: string[],
  strengths: TopicStat[],
  weaknesses: TopicStat[]
): RecommendationGroup {
  const solvedSet = new Set(solvedIds);
  const unsolvedSet = new Set(unsolvedIds);

  const weakTopicNames = new Set(weaknesses.map(w => w.topic));
  const strongTopicNames = new Set(strengths.map(s => s.topic));

  // 1. Khắc phục điểm yếu: Các bài thuộc weak topics chưa giải, độ khó vừa phải
  const fixWeaknesses: OJProblem[] = OJUZ_PROBLEMS.filter(p => {
    const t = p.topic || guessTopicFromId(p.id);
    return t && weakTopicNames.has(t) && !solvedSet.has(p.id);
  }).sort((a, b) => (a.difficultyScore || 2) - (b.difficultyScore || 2)).slice(0, 6);

  // 2. Thử thách đỉnh cao: Các bài thuộc strong topics chưa giải, độ khó cao
  const pushLimits: OJProblem[] = OJUZ_PROBLEMS.filter(p => {
    const t = p.topic || guessTopicFromId(p.id);
    const diff = p.difficultyScore || 2;
    return t && strongTopicNames.has(t) && !solvedSet.has(p.id) && diff >= 3;
  }).sort((a, b) => (b.difficultyScore || 2) - (a.difficultyScore || 2)).slice(0, 6);

  // 3. Phục thù bài dở dang: Những bài user đã nộp nhưng chưa full điểm
  const finishUnsolved: (OJProblem & { userBestScore?: number })[] = [];
  unsolvedIds.forEach(id => {
    const found = OJUZ_PROBLEMS.find(p => p.id === id);
    if (found) {
      finishUnsolved.push({ ...found, userBestScore: 30 });
    } else {
      finishUnsolved.push({
        id,
        title: id.replace(/_/g, ' '),
        contest: id.split('_')[0] || 'OI Contest',
        topic: guessTopicFromId(id) || 'Dynamic Programming',
        subtopic: 'General OI Subtasks',
        difficulty: 'Gold',
        difficultyScore: 3,
        ojuzUrl: `https://oj.uz/problem/view/${id}`,
        points: 100,
        description: `Bài tập ${id} bạn đã nộp trên oj.uz nhưng chưa đạt tối đa 100 điểm.`,
        hint: 'Hãy rà soát lại các trường hợp biên, tối ưu bộ nhớ hoặc kiểm tra subtask ăn điểm thành phần.',
        userBestScore: 40,
      });
    }
  });

  return {
    fixWeaknesses: fixWeaknesses.length > 0 ? fixWeaknesses : OJUZ_PROBLEMS.slice(0, 5),
    pushLimits: pushLimits.length > 0 ? pushLimits : OJUZ_PROBLEMS.slice(5, 10),
    finishUnsolved: finishUnsolved.slice(0, 8),
  };
}

function guessTopicFromId(id: string): TopicCategory | null {
  const lower = id.toLowerCase();
  if (lower.includes('tree') || lower.includes('graph') || lower.includes('path') || lower.includes('park') || lower.includes('cycle')) {
    return 'Graph & Tree';
  }
  if (lower.includes('seg') || lower.includes('query') || lower.includes('tower') || lower.includes('lamp') || lower.includes('sweep')) {
    return 'Data Structures';
  }
  if (lower.includes('dp') || lower.includes('knapsack') || lower.includes('fish') || lower.includes('wire') || lower.includes('build')) {
    return 'Dynamic Programming';
  }
  if (lower.includes('prime') || lower.includes('math') || lower.includes('mod') || lower.includes('biscuit') || lower.includes('bobek')) {
    return 'Math & Combinatorics';
  }
  if (lower.includes('sort') || lower.includes('ticket') || lower.includes('two') || lower.includes('segment') || lower.includes('search')) {
    return 'Greedy & Two Pointers';
  }
  if (lower.includes('string') || lower.includes('pali') || lower.includes('kmp') || lower.includes('neck')) {
    return 'Strings & Geometry';
  }
  if (lower.includes('game') || lower.includes('inter') || lower.includes('guess') || lower.includes('mush') || lower.includes('robot')) {
    return 'Interactive & Constructive';
  }
  return null;
}

function getStrengthAdvice(topic: TopicCategory): string {
  switch (topic) {
    case 'Dynamic Programming':
      return 'Sở trường rất mạnh về tư duy tối ưu và thiết kế trạng thái. Hãy thử sức với CHT trên cây, SOS DP hoặc Aliens Trick.';
    case 'Graph & Tree':
      return 'Thành thạo xử lý cây và đồ thị. Đạt độ nhạy cao với các dạng bài DSU, Euler Tour, và luồng cực đại.';
    case 'Data Structures':
      return 'Kỹ năng cài đặt CTDL rất vững. Hãy luyện thêm Persistent Segment Tree 2D hoặc Treap chia để trị thời gian.';
    case 'Math & Combinatorics':
      return 'Tư duy toán học và tổ hợp xuất sắc. Nên tiếp tục thử thách các bài Meet in the Middle và quy tắc đếm nâng cao.';
    case 'Greedy & Two Pointers':
      return 'Khả năng quan sát tính chất nghiệm tham lam tốt, code nhanh và chuẩn xác.';
    case 'Strings & Geometry':
      return 'Rất tốt ở mảng chuỗi và hình học. Tiếp tục phát huy với Suffix Automaton và Convex Hull.';
    case 'Interactive & Constructive':
      return 'Tư duy logic giải đố và dựng nghiệm rất nhạy bén, đặc biệt hữu ích trong các kỳ thi IOI/JOI.';
  }
}

function getWeaknessAdvice(topic: TopicCategory): string {
  switch (topic) {
    case 'Dynamic Programming':
      return 'Cần rèn luyện thêm cách nhận diện bài toán con gối nhau và quy hoạch động trên cây/bitmask cơ bản.';
    case 'Graph & Tree':
      return 'Tỷ lệ giải bài còn thấp hoặc dở dang. Nên luyện thêm các kỹ thuật DSU, Dijkstra và xử lý cây con cơ bản.';
    case 'Data Structures':
      return 'Chưa làm nhiều bài cấu trúc dữ liệu. Khuyến nghị bắt đầu từ Segment Tree cơ bản, Fenwick Tree trước khi lên Persistent DS.';
    case 'Math & Combinatorics':
      return 'Còn hổng về nghịch đảo modulo, tổ hợp và tính chất số học. Hãy làm các bài chia hết và đếm cấu hình.';
    case 'Greedy & Two Pointers':
      return 'Dễ bị bế tắc khi chứng minh tính đúng của nghiệm tham lam. Cần làm thêm các bài chặt nhị phân kết quả.';
    case 'Strings & Geometry':
      return 'Ít cọ xát với xử lý chuỗi và hình học tính toán. Nên luyện KMP, Hashing chuỗi và biểu thức bao lồi.';
    case 'Interactive & Constructive':
      return 'Dạng bài tương tác / xây dựng thường ít gặp ở các contest thông thường nhưng rất quan trọng ở IOI/JOI. Cần luyện thêm.';
  }
}

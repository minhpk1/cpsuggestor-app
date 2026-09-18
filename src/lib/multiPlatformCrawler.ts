import { UserSubmission } from '../types';

export async function fetchCodeforcesSubmissions(handle: string): Promise<UserSubmission[]> {
  try {
    const res = await fetch(`https://codeforces.com/api/user.status?handle=${encodeURIComponent(handle)}&from=1&count=1000`, {
      next: { revalidate: 120 }
    });
    if (!res.ok) return [];

    const data = await res.json();
    if (data.status !== 'OK' || !Array.isArray(data.result)) return [];

    const subs: UserSubmission[] = data.result.map((item: any) => {
      const dateObj = new Date(item.creationTimeSeconds * 1000);
      const isAC = item.verdict === 'OK';
      return {
        id: `cf-${item.id}`,
        problemId: `${item.problem?.contestId || ''}${item.problem?.index || ''}`,
        problemName: item.problem?.name || '',
        platform: 'codeforces',
        timestamp: dateObj.toISOString(),
        date: dateObj.toISOString().split('T')[0],
        verdict: isAC ? 'AC' : (item.verdict === 'WRONG_ANSWER' ? 'WA' : (item.verdict === 'TIME_LIMIT_EXCEEDED' ? 'TLE' : 'OTHER')),
        score: isAC ? 100 : 0,
        language: item.programmingLanguage,
      };
    });

    return subs;
  } catch (e) {
    console.error('Codeforces fetch error:', e);
    return [];
  }
}

export async function fetchAtCoderSubmissions(handle: string): Promise<UserSubmission[]> {
  try {
    const res = await fetch(`https://kenkoooo.com/atcoder/atcoder-api/v3/user/submissions?user=${encodeURIComponent(handle)}&from_second=0`, {
      next: { revalidate: 300 }
    });
    if (!res.ok) return [];

    const list = await res.json();
    if (!Array.isArray(list)) return [];

    const subs: UserSubmission[] = list.map((item: any) => {
      const dateObj = new Date(item.epoch_second * 1000);
      const isAC = item.result === 'AC';
      return {
        id: `ac-${item.id}`,
        problemId: item.problem_id,
        platform: 'atcoder',
        timestamp: dateObj.toISOString(),
        date: dateObj.toISOString().split('T')[0],
        verdict: isAC ? 'AC' : (item.result === 'WA' ? 'WA' : (item.result === 'TLE' ? 'TLE' : 'OTHER')),
        score: isAC ? 100 : 0,
        language: item.language,
      };
    });

    return subs;
  } catch (e) {
    console.error('AtCoder fetch error:', e);
    return [];
  }
}

/**
 * Phân tích dữ liệu bảng submissions do người dùng copy-paste từ trang oj.uz/submissions
 */
export function parsePastedOjuzSubmissions(htmlOrText: string): UserSubmission[] {
  const subs: UserSubmission[] = [];

  // Tìm các chuỗi timestamp dạng YYYY-MM-DDTHH:MM:SS
  const isoMatches = Array.from(htmlOrText.matchAll(/data-timestamp-iso="([^"]+)"/g));
  const probMatches = Array.from(htmlOrText.matchAll(/\/problem\/view\/([a-zA-Z0-9_-]+)/g));
  const subMatches = Array.from(htmlOrText.matchAll(/\/submission\/(\d+)/g));

  if (isoMatches.length > 0 && probMatches.length > 0) {
    const count = Math.min(isoMatches.length, probMatches.length);
    for (let i = 0; i < count; i++) {
      const iso = isoMatches[i][1];
      const prob = probMatches[i][1];
      const subId = subMatches[i] ? subMatches[i][1] : `manual-${i}`;
      const date = iso.split('T')[0];

      subs.push({
        id: `oj-${subId}`,
        problemId: prob,
        platform: 'oj.uz',
        timestamp: iso,
        date,
        verdict: 'AC',
        score: 100,
      });
    }
  } else {
    // Thử regex dạng text dòng: "2024-05-12 ... problem_id"
    const lines = htmlOrText.split('\n');
    lines.forEach((line, idx) => {
      const dateMatch = line.match(/(\d{4}-\d{2}-\d{2})/);
      const probMatch = line.match(/([A-Za-z0-9]+_\w+)/);
      if (dateMatch && probMatch) {
        subs.push({
          id: `manual-line-${idx}`,
          problemId: probMatch[1],
          platform: 'oj.uz',
          timestamp: `${dateMatch[1]}T12:00:00Z`,
          date: dateMatch[1],
          verdict: line.includes('100') ? 'AC' : 'PARTIAL',
          score: line.includes('100') ? 100 : 30,
        });
      }
    });
  }

  return subs;
}

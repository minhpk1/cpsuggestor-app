const fs = require('fs');
const cheerio = require('cheerio');

const TARGET_CONTESTS = [
  'APIO',
  'IZhO',
  'CEOI',
  'BOI',
  'IOI',
  'JOI',
  'COCI',
  'BalkanOI',
  'Info1Cup',
  'LMIO',
  'NOI',
  'RMI',
];

function matchContest(id, title) {
  const lowerId = id.toLowerCase();
  const lowerTitle = title.toLowerCase();

  if (lowerId.startsWith('apio') || lowerTitle.includes('apio')) return 'APIO';
  if (lowerId.startsWith('izho') || lowerTitle.includes('izho')) return 'IZhO';
  if (lowerId.startsWith('ceoi') || lowerTitle.includes('ceoi')) return 'CEOI';
  if (lowerId.startsWith('boi') || lowerTitle.includes('boi') || lowerTitle.includes('baltic')) return 'BOI';
  if (lowerId.startsWith('ioi') || lowerTitle.includes('ioi')) return 'IOI';
  if (lowerId.startsWith('joi') || lowerTitle.includes('joi') || lowerId.startsWith('joisc')) return 'JOI';
  if (lowerId.startsWith('coci') || lowerTitle.includes('coci')) return 'COCI';
  if (lowerId.startsWith('balkan') || lowerTitle.includes('balkan')) return 'BalkanOI';
  if (lowerId.startsWith('info1cup') || lowerTitle.includes('info1cup') || lowerId.includes('info1')) return 'Info1Cup';
  if (lowerId.startsWith('lmio') || lowerTitle.includes('lmio')) return 'LMIO';
  if (lowerId.startsWith('noi') || lowerTitle.includes('noi')) return 'NOI';
  if (lowerId.startsWith('rmi') || lowerTitle.includes('rmi')) return 'RMI';

  return null;
}

function formatContestYear(id, contestCategory) {
  const yearMatch = id.match(/(?:APIO|IZhO|CEOI|BOI|IOI|JOI|JOISC|COCI|Balkan|Info1Cup|LMIO|NOI|RMI)[-_]?(\d{2,4})/i);
  if (yearMatch) {
    let yr = parseInt(yearMatch[1], 10);
    if (yr < 50) yr += 2000;
    else if (yr < 100) yr += 1900;
    return `${contestCategory} ${yr}`;
  }
  return contestCategory;
}

async function fetchPage(page) {
  const url = `https://oj.uz/problems?page=${page}`;
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/124.0.0.0 Safari/537.36',
      }
    });
    if (!res.ok) return [];
    const html = await res.text();
    const $ = cheerio.load(html);

    const problems = [];
    $('table tbody tr').each((_, tr) => {
      const linkEl = $(tr).find('a[href^="/problem/view/"]');
      if (!linkEl.length) return;

      const href = linkEl.attr('href');
      const id = href.replace('/problem/view/', '').trim();
      const title = linkEl.text().trim() || id;

      const matchedContest = matchContest(id, title);
      if (matchedContest) {
        const contestLabel = formatContestYear(id, matchedContest);
        problems.push({
          id,
          title,
          contest: contestLabel,
          ojuzUrl: `https://oj.uz/problem/view/${id}`,
          points: 100,
        });
      }
    });

    return problems;
  } catch (e) {
    console.error(`Error on page ${page}:`, e.message);
    return [];
  }
}

async function run() {
  console.log('Starting full crawl of all 65 pages on oj.uz for 12 target contests...');
  const allProblemsMap = new Map();

  const concurrency = 6;
  for (let p = 1; p <= 65; p += concurrency) {
    const batch = [];
    for (let i = p; i < p + concurrency && i <= 65; i++) {
      batch.push(fetchPage(i));
    }
    const results = await Promise.all(batch);
    for (const list of results) {
      for (const prob of list) {
        if (!allProblemsMap.has(prob.id)) {
          allProblemsMap.set(prob.id, prob);
        }
      }
    }
    console.log(`Pages ${p}-${Math.min(65, p + concurrency - 1)} done. Found so far: ${allProblemsMap.size}`);
    await new Promise(r => setTimeout(r, 100));
  }

  const allProblems = Array.from(allProblemsMap.values());
  console.log(`\nCrawl finished! Total problems found: ${allProblems.length}`);

  const stats = {};
  TARGET_CONTESTS.forEach(c => stats[c] = 0);
  allProblems.forEach(p => {
    for (const c of TARGET_CONTESTS) {
      if (p.contest.startsWith(c) || p.id.toLowerCase().startsWith(c.toLowerCase())) {
        stats[c]++;
        break;
      }
    }
  });

  console.log('Contest breakdown:');
  console.table(stats);

  fs.writeFileSync('all_12_contests_ojuz.json', JSON.stringify(allProblems, null, 2), 'utf8');
}

run();

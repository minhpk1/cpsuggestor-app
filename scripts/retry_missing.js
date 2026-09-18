const fs = require('fs');
const cheerio = require('cheerio');

async function retry() {
  const data = JSON.parse(fs.readFileSync('all_12_contests_ojuz.json', 'utf8'));
  const map = new Map(data.map(p => [p.id, p]));

  console.log('Current count before retry:', map.size);
  // Retry pages 4, 5, 6
  for (const page of [4, 5, 6]) {
    try {
      const res = await fetch(`https://oj.uz/problems?page=${page}`, {
        headers: { 'User-Agent': 'Mozilla/5.0' }
      });
      const html = await res.text();
      const $ = cheerio.load(html);

      $('table tbody tr').each((_, tr) => {
        const linkEl = $(tr).find('a[href^="/problem/view/"]');
        if (!linkEl.length) return;
        const id = linkEl.attr('href').replace('/problem/view/', '').trim();
        const title = linkEl.text().trim() || id;

        let contest = null;
        const lower = id.toLowerCase();
        if (lower.startsWith('boi')) contest = 'BOI';
        else if (lower.startsWith('balkan')) contest = 'BalkanOI';
        else if (lower.startsWith('ceoi')) contest = 'CEOI';
        else if (lower.startsWith('apio')) contest = 'APIO';
        else if (lower.startsWith('ioi')) contest = 'IOI';
        else if (lower.startsWith('joi')) contest = 'JOI';
        else if (lower.startsWith('coci')) contest = 'COCI';
        else if (lower.startsWith('info1cup')) contest = 'Info1Cup';
        else if (lower.startsWith('izho')) contest = 'IZhO';
        else if (lower.startsWith('lmio')) contest = 'LMIO';
        else if (lower.startsWith('noi')) contest = 'NOI';
        else if (lower.startsWith('rmi')) contest = 'RMI';

        if (contest && !map.has(id)) {
          const yrMatch = id.match(/(?:APIO|IZhO|CEOI|BOI|IOI|JOI|JOISC|COCI|Balkan|Info1Cup|LMIO|NOI|RMI)[-_]?(\d{2,4})/i);
          let yrLabel = contest;
          if (yrMatch) {
            let yr = parseInt(yrMatch[1], 10);
            if (yr < 50) yr += 2000;
            else if (yr < 100) yr += 1900;
            yrLabel = `${contest} ${yr}`;
          }

          map.set(id, {
            id,
            title,
            contest: yrLabel,
            ojuzUrl: `https://oj.uz/problem/view/${id}`,
            points: 100,
          });
          console.log(`Added missing problem from page ${page}:`, id);
        }
      });
    } catch (e) {
      console.error('Error retry page', page, e.message);
    }
  }

  const updated = Array.from(map.values());
  console.log('Final total problems:', updated.length);
  fs.writeFileSync('all_12_contests_ojuz.json', JSON.stringify(updated, null, 2), 'utf8');
}

retry();

const fs = require('fs');
const path = require('path');

const phase1 = require('./roadmap_phase1');
const phase2 = require('./roadmap_phase2');
const phase3 = require('./roadmap_phase3');
const phase4 = require('./roadmap_phase4');
const phase5 = require('./roadmap_phase5');

const allTopics = [...phase1, ...phase2, ...phase3, ...phase4, ...phase5];

console.log(`Loaded ${allTopics.length} topics.`);
let totalProblems = 0;
for (const t of allTopics) {
  totalProblems += t.problems.length;
}
console.log(`Total curated problems: ${totalProblems}`);

if (allTopics.length !== 28) {
  throw new Error(`Expected 28 topics, but got ${allTopics.length}`);
}

const lines = [];

lines.push('# BẢN ĐỒ LỘ TRÌNH THUẬT TOÁN COMPETITIVE PROGRAMMING (NEWBIE ➔ GRANDMASTER)');
lines.push('> **Dành cho Luyện thi Codeforces & Đội tuyển Olympic Tin học Quốc tế (VNOI / IOI)**');
lines.push('> Tuyển tập 28 thuật toán cốt lõi với 280 bài tập Codeforces kinh điển được phân cấp sư phạm chi tiết từ thông hiểu thuần túy đến vận dụng nâng cao.');
lines.push('');
lines.push('---');
lines.push('');
lines.push('## 🗺️ BẢNG TỔNG QUAN PHÂN CẤP 5 GIAI ĐOẠN & 28 THUẬT TOÁN');
lines.push('');
lines.push('| Giai đoạn | Rating Codeforces | Danh mục thuật toán & Kỹ thuật |');
lines.push('|---|---|---|');
lines.push('| **Phase 1: Foundation (Newbie ➔ Pupil)** | `< 1200 - 1399` | 1. Mảng cộng dồn (Prefix Sum) & Mảng hiệu (Difference Array)<br>2. Hai con trỏ (Two Pointers) & Cửa sổ trượt (Sliding Window)<br>3. Tìm kiếm nhị phân & Chặt nhị phân kết quả<br>4. Sàng nguyên tố Eratosthenes, SPF & Số học cơ bản<br>5. Tham lam (Greedy) & Bất đẳng thức sắp xếp (Exchange Argument) |');
lines.push('| **Phase 2: Intermediate (Pupil ➔ Specialist)** | `1200 - 1599` | 6. Duyệt đồ thị DFS/BFS & Đồ thị trên ma trận lưới<br>7. Cấu trúc tập hợp rời rạc (DSU - Disjoint Set Union)<br>8. Quy hoạch động cơ bản (1D, 2D, Balo, LIS, LCS)<br>9. Sắp xếp Tô-pô & Đồ thị DAG<br>10. Đường đi ngắn nhất (Dijkstra, 0-1 BFS, Floyd-Warshall) |');
lines.push('| **Phase 3: Advanced (Specialist ➔ Expert)** | `1600 - 1899` | 11. **Tổ tiên chung gần nhất (LCA), Binary Lifting & Euler Tour**<br>12. **Quy hoạch động trên Cây cơ bản & Kỹ thuật Đổi gốc (Tree DP & Rerooting)**<br>13. Số học Modular & Tổ hợp nâng cao (Fermat, Lucas, Stars and Bars)<br>14. Quy hoạch động Bitmask & SOS DP<br>15. Cây Fenwick (BIT) & Segment Tree cơ bản (Point Update, Range Query)<br>16. Segment Tree cập nhật lười (Lazy Propagation) |');
lines.push('| **Phase 4: High-End Core (Candidate Master ➔ Master)** | `1900 - 2299` | 17. Xử lý chuỗi nâng cao (String Hashing, Z-Algorithm, KMP & Trie)<br>18. Thành phần liên thông mạnh (SCC) & Cầu / Khớp (Tarjan & 2-SAT)<br>19. Luồng cực đại Dinic & Cặp ghép cực đại (Max Flow & Bipartite Matching)<br>20. Cây phân đoạn bền vững (Persistent Segment Tree & Persistent Trie)<br>21. **Phân tách đường đi nặng - nhẹ trên cây (Heavy-Light Decomposition - HLD)**<br>22. **Tối ưu hóa Quy hoạch động: Bao lồi (Convex Hull Trick) & Cây Li Chao** |');
lines.push('| **Phase 5: Legendary & Grandmaster (Master ➔ GM / IGM)** | `2300 - 2600+` | 23. **Cây ảo (Virtual Tree / Auxiliary Tree)**<br>24. **Tìm kiếm nhị phân song song (Parallel Binary Search)**<br>25. **Tối ưu hóa WQS / Alien\'s Trick (Lambda Optimization)**<br>26. **Phân tách trọng tâm trên cây (Centroid Decomposition)**<br>27. **Biến đổi Fourier nhanh (Fast Fourier Transform - FFT / NTT)**<br>28. **Suffix Automaton (SAM - Máy tự động hậu tố) & Cây hậu tố** |');
lines.push('');
lines.push('---');
lines.push('');
lines.push('# CHI TIẾT TỪNG THUẬT TOÁN: BẢN CHẤT, BLOG CODEFORCES & 280 BÀI TẬP PHÂN CẤP');
lines.push('');

for (const t of allTopics) {
  lines.push('---');
  lines.push('');
  lines.push(`## ${t.id}. ${t.name}`);
  lines.push(`* **Phân hạng:** \`${t.tier}\``);
  lines.push('* **Bản chất:**');
  for (const ess of t.essence) {
    lines.push(`  * ${ess}`);
  }
  lines.push(`* **Độ phức tạp:** ${t.complexity}`);
  lines.push('* **Link Codeforces Blog:**');
  for (const b of t.blogs) {
    lines.push(`  * [${b.title}](${b.url})`);
  }
  lines.push('* **Bài tập tiêu biểu rèn luyện (10 bài phân cấp từ dễ đến khó):**');
  t.problems.forEach((p, idx) => {
    lines.push(`  ${idx + 1}. [${p.code} - ${p.name}](${p.url}) (${p.rating}) – *${p.comment}*`);
  });
  lines.push('');
}

lines.push('---');
lines.push('');
lines.push('## 💡 PHƯƠNG PHÁP LUYỆN TẬP ĐẠT HIỆU QUẢ CAO NHẤT THEO ROADMAP');
lines.push('1. **Học theo chiều sâu (Mastery over Quantity):** Đừng vội sang chủ đề mới khi chưa tự tay code AC ít nhất 5 bài đầu tiên của chủ đề hiện tại.');
lines.push('2. **Chiến lược giải bài tập 3 bước:**');
lines.push('   * **Bước 1 (15-30 phút đầu):** Nghĩ thuần túy trên giấy/nháp, phác thảo bất biến, quy luật toán học hoặc tính đơn điệu.');
lines.push('   * **Bước 2 (Viết mã & Debug):** Tự tay cài đặt từ đầu không copy template để nhớ sâu bản chất của từng biến và cấu trúc.');
lines.push('   * **Bước 3 (Phản tư & Đọc Editorial):** Luôn mở Editorial của Codeforces và đọc code của các International Grandmaster (IGM/LGM) để học cách code ngắn gọn, thanh lịch.');
lines.push('3. **Thi đấu mô phỏng Virtual Contest:** Mỗi tuần nên làm ít nhất 1-2 contest mô phỏng (Div.2/Div.3 cho Newbie-Specialist, Div.1/Div.2 kết hợp cho Candidate Master trở lên) để rèn tâm lý chiến trường.');

const fullContent = lines.join('\n');

const projectPath = path.resolve(__dirname, '..', 'ROADMAP_ALGORITHMS.md');
fs.writeFileSync(projectPath, fullContent, 'utf-8');
console.log(`Successfully wrote ${projectPath} (${Buffer.byteLength(fullContent, 'utf-8')} bytes)`);

const brainPath = 'C:\\Users\\Lenovo\\.gemini\\antigravity\\brain\\fc9c7d69-d6a3-4d47-9682-350dff62713b\\ROADMAP_ALGORITHMS.md';
try {
  fs.writeFileSync(brainPath, fullContent, 'utf-8');
  console.log(`Successfully updated artifact at ${brainPath}`);
} catch (err) {
  console.error(`Failed to write to brain path: ${err.message}`);
}

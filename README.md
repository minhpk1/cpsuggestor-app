# LibreOJ Theme - OJ.uz & Codeforces CP Recommender + Gemini AI

A high-performance, minimalist web application built with **Next.js 14** tailored for Competitive Programming (CP) and Olympiad in Informatics (OI) competitors. It bridges contest analytics, curated learning paths, and intelligent AI coaching across **OJ.uz** and **Codeforces**.

The interface is intentionally designed following the clean, distraction-free aesthetic of **LibreOJ (`loj.ac`)** and **USACO Guide (`usaco.guide`)**: high-density readability, elegant system typography, zero clutter, and structured layouts.

---

## Key Features

### 1. Olympiad in Informatics Checklist (OJ.uz)
* **Comprehensive OI Coverage**: 1,117 official contest problems across 12 premier international and regional olympiads:
  * **IOI** (154 problems)
  * **JOI / JOISC** (254 problems)
  * **COCI** (248 problems)
  * **CEOI** (109 problems)
  * **BOI** (104 problems)
  * **NOI** (79 problems)
  * **IZhO** (47 problems)
  * **APIO** (46 problems)
  * **Info1Cup** (26 problems)
  * **RMI** (24 problems)
  * **LMIO** (17 problems)
  * **BalkanOI** (9 problems)
* **Granular Submission Tracking**: Three-state status tracking (Full AC - 100 pts, Partial points, Unattempted) with real-time completion percentages per contest.
* **Unsolved Problem Randomizer**: Select any specific contest or all contests to immediately draw a random un-AC'd problem.
* **Activity Heatmap & Streaks**: 52-week contribution graph with streak calculations, including a direct clipboard parser for OJ.uz submission tables (`data-timestamp-iso`).

---

### 2. Codeforces Analytics & Gemini AI Coach
* **Account Analytics**:
  * Hotlink-safe avatar rendering with rank-colored circular borders and fallback initials.
  * Unique AC problem counter and problem tag distribution (DP, Data Structures, Graphs, Math, Greedy, Strings, etc.).
  * Interactive rating histogram (800 to 2400+) colored according to Codeforces rank tiers (Newbie through Grandmaster).
* **Target Rating Recommendation**:
  * An automated algorithm calculates the user's optimal training "sweet spot" based on current contest rating and the 75th percentile of historical ACs.
* **Progressive AI Editorial (Gemini 2.5 / 3.6 Flash)**:
  * **100% Client-Side Execution**: Connect directly to Google Gemini using your personal API key—no backend server or database required.
  * **Spoiler-Free Progressive Hints**: Multi-tier collapsible guidance designed to facilitate independent problem-solving:
    1. **Concise Problem Summary**: Core problem requirements stripped of story fluff.
    2. **Key Mathematical Observation**: Invariants, monotonicity, parity, or structural properties.
    3. **Step-by-Step Approach**: Algorithmic blueprint without leaking raw code.
    4. **Common Pitfalls & Edge Cases**: Corner cases ($N=1$, disconnected graphs, integer overflow).
    5. **Complete Editorial & Complexity**: Full methodology and optimal time/space complexity ($O(N \log N)$, $O(N)$).

---

### 3. CP Algorithm Roadmap (USACO Guide Styled)
* **Structured 4-Phase Curriculum**: 28 foundational-to-elite topics comprising 280 curated problems (10 problems per topic), spanning Codeforces ratings 800 to 2800+:
  * **Phase 1: Foundations & Classical Techniques** (Rating 800–1600)
    * Binary Search & Monotonicity
    * Two Pointers & Sliding Window
    * Coordinate Compression
    * Prefix Sums & Difference Arrays
    * Meet in the Middle & Bitmask DP
    * Classical Greedy & Exchange Arguments
    * Disjoint Set Union (DSU)
  * **Phase 2: Intermediate Data Structures & Advanced DP** (Rating 1400–2100)
    * Fenwick Tree (Binary Indexed Tree)
    * Segment Tree (Point Updates & Range Queries)
    * Lazy Propagation Segment Tree
    * Tree DP & Tree Rerooting
    * Lowest Common Ancestor (LCA) & Binary Lifting
    * Matrix Exponentiation
    * Knapsack & Submask DP
    * Shortest Paths & Graph Algorithms
  * **Phase 3: Advanced Graphs, Trees & Geometry** (Rating 1900–2400)
    * Heavy-Light Decomposition (HLD)
    * Virtual Tree / Auxiliary Tree
    * Strongly Connected Components (SCC) & 2-SAT
    * Maximum Flow & Minimum Cut (Dinic / Edmonds-Karp)
    * Minimum Cost Maximum Flow (MCMF)
    * Computational Geometry Fundamentals
    * Convex Hull & Rotating Calipers
  * **Phase 4: Grandmaster / High-End Competitive Techniques** (Rating 2200–2800+)
    * Centroid Decomposition
    * Divide & Conquer Optimization (DP)
    * Convex Hull Trick (CHT) & Li Chao Tree
    * WQS Binary Search / Aliens Trick
    * Parallel Binary Search
    * Fast Fourier Transform (FFT / NTT) & Polynomials
    * Suffix Automaton (SAM) & String Processing
* **Pedagogical Topic Architecture**:
  * **Core Theoretical Essence**: Mathematical foundation and execution prerequisites.
  * **Canonical Focus Problem**: A benchmark problem paired with strategic insights and thought processes.
  * **10-Problem Practice Ladder**: Sequential difficulty progression from introductory verification to advanced contest synthesis, accompanied by pedagogical remarks.
  * **Complexity Benchmarks**: Clear target time and memory limits.
  * **Direct Reference Blogs**: Verified links to official Codeforces tutorials and community articles.
* **USACO Guide Design Standard**:
  * Minimalist typography utilizing Inter and JetBrains Mono.
  * Clean Unicode mathematical notation (≤, ≥, ∑, 10⁵, O(N log N)), free of raw LaTeX rendering artifacts.
  * Wide-canvas reading area (`max-w-6xl`) with a sticky hierarchy tree navigation sidebar.
  * Interactive AC checkboxes per problem with real-time topic and phase progress tracking stored in browser `localStorage`.
* **Full Bilingual Support**: Complete Vietnamese and English translations for all 28 topics, descriptions, and commentaries, instantly toggleable via the navigation bar.

---

## Tech Stack

* **Framework**: [Next.js 14](https://nextjs.org/) (App Router, React 18)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **AI Integration**: [Google Gen AI SDK / REST API](https://ai.google.dev/) (Gemini 2.5 / 3.6 Flash)
* **State Persistence**: Browser `localStorage` (Zero external database dependency)

---

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (v18.17.0 or higher recommended)
* `npm` or `yarn` or `pnpm`

### Local Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

5. *(Optional)* To use the AI coaching features, obtain a free Gemini API key from [Google AI Studio](https://aistudio.google.com/) and paste it into the application settings.

### Production Build

```bash
# Compile and optimize for production
npm run build

# Start production server
npm run start
```

---

## Deployment (Vercel)

This application is fully client-rendered and static-ready, making it ideal for free deployment on [Vercel](https://vercel.com/):

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "docs: update README with CP roadmap and English documentation"
   git push origin main
   ```
2. Log in to [Vercel](https://vercel.com/) and select **Add New Project**.
3. Import your GitHub repository.
4. Click **Deploy**. Vercel will automatically detect Next.js and deploy the application.

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

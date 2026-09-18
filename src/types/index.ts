export type TopicCategory = 
  | 'Dynamic Programming'
  | 'Graph & Tree'
  | 'Data Structures'
  | 'Math & Combinatorics'
  | 'Greedy & Two Pointers'
  | 'Strings & Geometry'
  | 'Interactive & Constructive';

export type DifficultyLevel = 'Bronze' | 'Silver' | 'Gold' | 'Platinum';

export interface OJProblem {
  id: string; // e.g. "APIO14_sequence", "CEOI15_bobek", "IOI20_supertrees"
  title: string;
  contest: string; // e.g. "APIO 2014", "CEOI 2015", "BOI 2014", "IZhO 2018", "IOI 2020", "JOI 2018"
  topic?: TopicCategory;
  subtopic?: string;
  difficulty?: DifficultyLevel;
  difficultyScore?: number; // 1 to 4
  ojuzUrl: string; // https://oj.uz/problem/view/{id}
  points: number; // 100
  description?: string;
  hint?: string;
}

export interface UserSubmission {
  id: string;
  problemId: string;
  timestamp: string; // ISO date string e.g. "2026-03-12T14:20:00Z"
  date: string; // "YYYY-MM-DD"
  verdict: 'AC' | 'PARTIAL' | 'WA' | 'TLE' | 'MLE' | 'CE' | 'OTHER';
  score: number; // 0 to 100
  problemName?: string;
  platform?: string;
  language?: string;
}

export interface TopicStat {
  topic: TopicCategory;
  totalProblemsInDatabase: number;
  solvedCount: number;
  unsolvedAttemptedCount: number;
  masteryPercentage: number; // 0 - 100%
  weightedScore: number;
  status: 'STRENGTH' | 'BALANCED' | 'WEAKNESS';
  advice: string;
}

export interface UserProfileData {
  handle: string;
  solvedProblemIds: string[];
  unsolvedProblemIds: string[]; // attempted but not full score
  totalSolved: number;
  totalAttempted: number;
  submissions: UserSubmission[];
  dailyHeatmap: Record<string, number>; // date -> count
  currentStreak: number;
  longestStreak: number;
  lastActiveDate?: string;
  topicStats: TopicStat[];
  strengths: TopicStat[];
  weaknesses: TopicStat[];
  isRealSubmissionHistory: boolean;
  submissionSourceInfo: string;
  fetchedAt: string;
}

export interface RecommendationGroup {
  fixWeaknesses: OJProblem[];
  pushLimits: OJProblem[];
  finishUnsolved: (OJProblem & { userBestScore?: number })[];
}

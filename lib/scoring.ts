import { Question } from './questions';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Build a 20-question session: 5 random core (values) + 15 random general, shuffled
export function buildSession(questions: Question[], filter?: string): Question[] {
  let pool = filter ? questions.filter((q) => q.part === filter) : questions;

  const coreQs = shuffle(pool.filter((q) => q.core)).slice(0, 5);
  const generalQs = shuffle(pool.filter((q) => !q.core)).slice(0, 15);

  return shuffle([...coreQs, ...generalQs]);
}

// Score a session
export function scoreSession(
  questions: Question[],
  answers: (number | null)[]
): {
  score: number;
  total: number;
  pct: number;
  coreCorrect: number;
  coreTotal: number;
  passed: boolean;
} {
  let score = 0;
  let coreCorrect = 0;
  let coreTotal = 0;

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const ans = answers[i];
    if (q.core) coreTotal++;
    if (ans === q.c) {
      score++;
      if (q.core) coreCorrect++;
    }
  }

  const total = questions.length;
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;
  const passed = pct >= 75 && coreCorrect === coreTotal;

  return { score, total, pct, coreCorrect, coreTotal, passed };
}

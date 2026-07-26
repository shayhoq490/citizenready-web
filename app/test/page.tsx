'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { QUESTIONS } from '../../lib/questions';
import { buildSession, scoreSession } from '../../lib/scoring';
import { createClient } from '../../lib/supabase';
import AdBanner from '../../components/AdBanner';
import type { Question } from '../../lib/questions';

type Phase = 'idle' | 'testing' | 'done';

export default function TestPage() {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>('idle');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [isPremium, setIsPremium] = useState(false);
  const startTime = useRef<number>(0);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(async ({ data }) => {
      if (data.user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('is_premium')
          .eq('id', data.user.id)
          .single();
        if (profile?.is_premium) setIsPremium(true);
      }
    });
  }, []);

  const startTest = () => {
    const session = buildSession(QUESTIONS);
    setQuestions(session);
    setAnswers(new Array(session.length).fill(null));
    setCurrent(0);
    setSelected(null);
    startTime.current = Date.now();
    setPhase('testing');
  };

  const handleAnswer = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    const newAnswers = [...answers];
    newAnswers[current] = idx;
    setAnswers(newAnswers);
  };

  const handleNext = async () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      // Done — score and save
      const elapsed = Math.round((Date.now() - startTime.current) / 1000);
      const result = scoreSession(questions, answers);

      const partCorrect: Record<string, number> = {};
      questions.forEach((q, i) => {
        if (!partCorrect[q.part]) partCorrect[q.part] = 0;
        if (answers[i] === q.c) partCorrect[q.part]++;
      });

      const sessionResult = {
        score: result.score,
        total: result.total,
        pct: result.pct,
        coreCorrect: result.coreCorrect,
        coreTotal: result.coreTotal,
        passed: result.passed,
        elapsed: elapsed,
        partCorrect,
        questionResults: questions.map((q, i) => ({
          id: q.id,
          part: q.part,
          correct: answers[i] === q.c,
          chosen: answers[i],
          answer: q.c,
        })),
      };

      sessionStorage.setItem('testResult', JSON.stringify(sessionResult));

      // Save to Supabase if logged in
      try {
        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          await supabase.from('test_results').insert({
            id: crypto.randomUUID(),
            user_id: user.id,
            date_taken: Date.now(),
            score: result.score,
            total: result.total,
            pct: result.pct,
            core_correct: result.coreCorrect,
            core_total: result.coreTotal,
            passed: result.passed,
            elapsed_seconds: elapsed,
            part_correct: partCorrect,
            question_results: sessionResult.questionResults,
          });
        }
      } catch {
        // Not critical if save fails
      }

      setPhase('done');
      router.push('/test/results');
    }
  };

  if (phase === 'idle') {
    return (
      <div style={{ backgroundColor: '#F7F3EC' }} className="min-h-screen py-16 px-4">
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm p-8 border" style={{ borderColor: '#E5E0D8' }}>
            <h1 className="text-2xl font-bold mb-2" style={{ color: '#1B2A4A' }}>Australian Citizenship Practice Test</h1>
            <p className="text-gray-600 mb-6">Test yourself with a randomly generated 20-question session.</p>
            <div className="space-y-3 mb-8">
              {[
                '20 questions per session',
                'Minimum 75% (15/20) required to pass',
                'All Australian Values questions must be answered correctly',
                'Instant feedback after each answer',
                'Detailed explanation provided',
              ].map((rule) => (
                <div key={rule} className="flex items-start gap-2 text-sm text-gray-700">
                  <span style={{ color: '#C9A84C' }} className="font-bold mt-0.5">✓</span>
                  <span>{rule}</span>
                </div>
              ))}
            </div>
            <button
              onClick={startTest}
              className="w-full py-3 rounded-full font-semibold text-base transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#1B2A4A', color: '#C9A84C' }}
            >
              Start Test
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (phase === 'testing' && questions.length > 0) {
    const q = questions[current];
    const progress = Math.round(((current) / questions.length) * 100);

    return (
      <div style={{ backgroundColor: '#F7F3EC' }} className="min-h-screen py-8 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-500 mb-1">
              <span>Question {current + 1} of {questions.length}</span>
              <span>{progress}% complete</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{ width: `${progress}%`, backgroundColor: '#1B2A4A' }}
              />
            </div>
          </div>

          {/* Question card */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border mb-4" style={{ borderColor: '#E5E0D8' }}>
            <div className="flex items-center gap-2 mb-3">
              <span
                className="text-xs px-2 py-0.5 rounded-full font-medium"
                style={{
                  backgroundColor: q.core ? '#C9A84C22' : '#1B2A4A11',
                  color: q.core ? '#8a6a1a' : '#1B2A4A',
                }}
              >
                {q.core ? 'Australian Values ★' : q.part === 'part1' ? 'Part 1' : q.part === 'part2' ? 'Part 2' : 'Part 3'}
              </span>
            </div>
            <p className="text-base font-semibold text-gray-800 mb-5">{q.q}</p>

            <div className="space-y-3">
              {q.a.map((option, idx) => {
                let bg = 'white';
                let border = '#E5E0D8';
                let textColor = '#333';

                if (selected !== null) {
                  if (idx === q.c) {
                    bg = '#2A4D1422';
                    border = '#2A4D14';
                    textColor = '#2A4D14';
                  } else if (idx === selected && selected !== q.c) {
                    bg = '#8B251322';
                    border = '#8B2513';
                    textColor = '#8B2513';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    disabled={selected !== null}
                    className="w-full text-left px-4 py-3 rounded-xl text-sm transition-all border"
                    style={{ backgroundColor: bg, borderColor: border, color: textColor }}
                  >
                    <span className="font-medium mr-2">{String.fromCharCode(65 + idx)}.</span>
                    {option}
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {selected !== null && (
              <div
                className="mt-4 p-4 rounded-xl text-sm"
                style={{ backgroundColor: '#F7F3EC', borderLeft: '4px solid #C9A84C' }}
              >
                <p className="font-semibold mb-1" style={{ color: '#1B2A4A' }}>Explanation</p>
                <p className="text-gray-700">{q.exp}</p>
              </div>
            )}
          </div>

          {/* Next button */}
          {selected !== null && (
            <button
              onClick={handleNext}
              className="w-full py-3 rounded-full font-semibold text-base transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#1B2A4A', color: '#C9A84C' }}
            >
              {current < questions.length - 1 ? 'Next Question' : 'See Results'}
            </button>
          )}

          {/* Ad between questions */}
          {selected !== null && !isPremium && (
            <div className="mt-4">
              <AdBanner slot="2345678901" isPremium={isPremium} />
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
}

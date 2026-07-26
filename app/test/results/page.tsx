'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import AdBanner from '../../../components/AdBanner';
import { createClient } from '../../../lib/supabase';

interface SessionResult {
  score: number;
  total: number;
  pct: number;
  coreCorrect: number;
  coreTotal: number;
  passed: boolean;
  elapsed: number;
  partCorrect: Record<string, number>;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}m ${s}s`;
}

export default function ResultsPage() {
  const [result, setResult] = useState<SessionResult | null>(null);
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    const raw = sessionStorage.getItem('testResult');
    if (raw) {
      try {
        setResult(JSON.parse(raw));
      } catch {
        // ignore
      }
    }

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

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F7F3EC' }}>
        <div className="text-center">
          <p className="text-gray-600 mb-4">No result found.</p>
          <Link href="/test" className="px-6 py-2 rounded-full font-semibold" style={{ backgroundColor: '#1B2A4A', color: '#C9A84C' }}>
            Take a Test
          </Link>
        </div>
      </div>
    );
  }

  const passColor = result.passed ? '#2A4D14' : '#8B2513';
  const passLabel = result.passed ? 'PASSED' : 'NOT PASSED';

  const sectionLabels: Record<string, string> = {
    values: 'Australian Values',
    part1: 'Australia & Its People',
    part2: 'Democratic Beliefs & Rights',
    part3: 'Government & the Law',
  };

  return (
    <div style={{ backgroundColor: '#F7F3EC' }} className="min-h-screen py-10 px-4">
      <div className="max-w-xl mx-auto space-y-6">
        {/* Hero result */}
        <div
          className="rounded-2xl p-8 text-center text-white shadow-md"
          style={{ backgroundColor: passColor }}
        >
          <p className="text-4xl font-bold mb-1">{result.pct}%</p>
          <p className="text-xl font-semibold mb-1">{result.score}/{result.total} correct</p>
          <div
            className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mt-2"
            style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
          >
            {passLabel}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'Score', value: `${result.score}/${result.total}` },
            { label: 'Values Q\'s', value: `${result.coreCorrect}/${result.coreTotal}` },
            { label: 'Time', value: formatTime(result.elapsed) },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl p-4 text-center border" style={{ borderColor: '#E5E0D8' }}>
              <p className="text-xl font-bold" style={{ color: '#1B2A4A' }}>{s.value}</p>
              <p className="text-xs text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Section breakdown */}
        <div className="bg-white rounded-2xl p-6 border" style={{ borderColor: '#E5E0D8' }}>
          <h2 className="font-bold text-base mb-4" style={{ color: '#1B2A4A' }}>Section Breakdown</h2>
          <div className="space-y-3">
            {Object.entries(result.partCorrect).map(([part, correct]) => (
              <div key={part} className="flex items-center justify-between text-sm">
                <span className="text-gray-700">{sectionLabels[part] ?? part}</span>
                <span className="font-semibold" style={{ color: '#1B2A4A' }}>{correct} correct</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pass requirements note */}
        {!result.passed && (
          <div className="bg-white rounded-xl p-4 border-l-4 text-sm" style={{ borderLeftColor: '#8B2513', borderColor: '#E5E0D8' }}>
            <p className="font-semibold mb-1" style={{ color: '#8B2513' }}>Not passed — here is why:</p>
            {result.pct < 75 && <p className="text-gray-600">Your score ({result.pct}%) was below the 75% pass mark.</p>}
            {result.coreCorrect < result.coreTotal && (
              <p className="text-gray-600">You missed {result.coreTotal - result.coreCorrect} Australian Values question(s) — all must be correct.</p>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/test"
            className="flex-1 py-3 rounded-full text-center font-semibold text-base transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#1B2A4A', color: '#C9A84C' }}
          >
            Try Again
          </Link>
          <Link
            href="/dashboard"
            className="flex-1 py-3 rounded-full text-center font-semibold text-base border-2 transition-opacity hover:opacity-90"
            style={{ borderColor: '#1B2A4A', color: '#1B2A4A' }}
          >
            View Dashboard
          </Link>
        </div>

        {!isPremium && (
          <AdBanner slot="3456789012" isPremium={isPremium} />
        )}
      </div>
    </div>
  );
}

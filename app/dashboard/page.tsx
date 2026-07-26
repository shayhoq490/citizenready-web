'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '../../lib/supabase';
import Link from 'next/link';

interface TestResult {
  id: string;
  date_taken: number;
  score: number;
  total: number;
  pct: number;
  core_correct: number;
  core_total: number;
  passed: boolean;
  elapsed_seconds: number;
}

export default function DashboardPage() {
  const [results, setResults] = useState<TestResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [displayName, setDisplayName] = useState('');
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();

    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/signin');
        return;
      }

      const { data: profile } = await supabase
        .from('profiles')
        .select('display_name')
        .eq('id', user.id)
        .single();
      if (profile?.display_name) setDisplayName(profile.display_name);

      const { data: rows } = await supabase
        .from('test_results')
        .select('*')
        .eq('user_id', user.id)
        .order('date_taken', { ascending: false });

      setResults(rows ?? []);
      setLoading(false);
    }

    load();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F7F3EC' }}>
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  const passed = results.filter((r) => r.passed).length;
  const avgPct = results.length > 0
    ? Math.round(results.reduce((s, r) => s + r.pct, 0) / results.length)
    : 0;

  return (
    <div style={{ backgroundColor: '#F7F3EC' }} className="min-h-screen py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold" style={{ color: '#1B2A4A' }}>
            {displayName ? `Welcome back, ${displayName}` : 'Dashboard'}
          </h1>
          <p className="text-gray-600 text-sm mt-1">Your test history and progress.</p>
        </div>

        {/* Summary stats */}
        {results.length > 0 && (
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-xl p-4 text-center border" style={{ borderColor: '#E5E0D8' }}>
              <p className="text-2xl font-bold" style={{ color: '#1B2A4A' }}>{results.length}</p>
              <p className="text-xs text-gray-500 mt-1">Tests Taken</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center border" style={{ borderColor: '#E5E0D8' }}>
              <p className="text-2xl font-bold" style={{ color: '#2A4D14' }}>{passed}</p>
              <p className="text-xs text-gray-500 mt-1">Passed</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center border" style={{ borderColor: '#E5E0D8' }}>
              <p className="text-2xl font-bold" style={{ color: '#1B2A4A' }}>{avgPct}%</p>
              <p className="text-xs text-gray-500 mt-1">Avg Score</p>
            </div>
          </div>
        )}

        {/* History table */}
        <div className="bg-white rounded-2xl border overflow-hidden" style={{ borderColor: '#E5E0D8' }}>
          <div className="px-6 py-4 border-b" style={{ borderColor: '#E5E0D8' }}>
            <h2 className="font-semibold" style={{ color: '#1B2A4A' }}>Test History</h2>
          </div>

          {results.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-gray-500 mb-4">No tests taken yet.</p>
              <Link
                href="/test"
                className="px-6 py-2.5 rounded-full font-semibold text-sm"
                style={{ backgroundColor: '#1B2A4A', color: '#C9A84C' }}
              >
                Take Your First Test
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: '#F7F3EC' }}>
                    <th className="text-left px-6 py-3 text-gray-500 font-medium">Date</th>
                    <th className="text-left px-6 py-3 text-gray-500 font-medium">Score</th>
                    <th className="text-left px-6 py-3 text-gray-500 font-medium">Values</th>
                    <th className="text-left px-6 py-3 text-gray-500 font-medium">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y" style={{ borderColor: '#E5E0D8' }}>
                  {results.map((r) => (
                    <tr key={r.id} className="hover:bg-gray-50">
                      <td className="px-6 py-3 text-gray-700">
                        {new Date(r.date_taken).toLocaleDateString('en-AU', {
                          day: 'numeric', month: 'short', year: 'numeric',
                        })}
                      </td>
                      <td className="px-6 py-3 font-medium" style={{ color: '#1B2A4A' }}>
                        {r.pct}% ({r.score}/{r.total})
                      </td>
                      <td className="px-6 py-3 text-gray-600">
                        {r.core_correct}/{r.core_total}
                      </td>
                      <td className="px-6 py-3">
                        <span
                          className="px-2.5 py-1 rounded-full text-xs font-semibold"
                          style={{
                            backgroundColor: r.passed ? '#2A4D1422' : '#8B251322',
                            color: r.passed ? '#2A4D14' : '#8B2513',
                          }}
                        >
                          {r.passed ? 'Pass' : 'Fail'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/test"
            className="px-8 py-3 rounded-full font-semibold text-base inline-block transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#1B2A4A', color: '#C9A84C' }}
          >
            Take a New Test
          </Link>
        </div>
      </div>
    </div>
  );
}

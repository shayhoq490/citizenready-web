'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '../../lib/supabase';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const supabase = createClient();
      const { error: err } = await supabase.auth.signInWithPassword({ email, password });
      if (err) {
        setError(err.message);
      } else {
        router.push('/dashboard');
      }
    } catch {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#F7F3EC' }} className="min-h-screen py-16 px-4 flex items-center">
      <div className="max-w-md mx-auto w-full">
        <div className="bg-white rounded-2xl shadow-sm p-8 border" style={{ borderColor: '#E5E0D8' }}>
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold" style={{ color: '#1B2A4A' }}>Sign In</h1>
            <p className="text-sm text-gray-500 mt-1">Welcome back to CitizenReady</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none focus:ring-2"
                style={{ borderColor: '#E5E0D8' }}
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none focus:ring-2"
                style={{ borderColor: '#E5E0D8' }}
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p className="text-sm rounded-lg px-3 py-2" style={{ backgroundColor: '#8B251322', color: '#8B2513' }}>
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-full font-semibold text-base transition-opacity hover:opacity-90 disabled:opacity-60"
              style={{ backgroundColor: '#1B2A4A', color: '#C9A84C' }}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="font-medium underline" style={{ color: '#1B2A4A' }}>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

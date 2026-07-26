'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { createClient } from '../lib/supabase';
import { useRouter } from 'next/navigation';
import type { User } from '@supabase/supabase-js';

export function Header() {
  const [user, setUser] = useState<User | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return (
    <header style={{ backgroundColor: '#1B2A4A' }} className="sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold" style={{ color: '#C9A84C' }}>
          CitizenReady
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white">
          <Link href="/" className="hover:opacity-80 transition-opacity">Home</Link>
          <Link href="/test" className="hover:opacity-80 transition-opacity">Practice Test</Link>
          <Link href="/premium" className="hover:opacity-80 transition-opacity">Premium</Link>
          {user ? (
            <>
              <Link href="/dashboard" className="hover:opacity-80 transition-opacity">Dashboard</Link>
              <button
                onClick={handleSignOut}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
                style={{ backgroundColor: '#C9A84C', color: '#1B2A4A' }}
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link href="/signin" className="hover:opacity-80 transition-opacity">Sign In</Link>
              <Link
                href="/signup"
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
                style={{ backgroundColor: '#C9A84C', color: '#1B2A4A' }}
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ backgroundColor: '#1B2A4A' }} className="md:hidden border-t border-white/10 px-4 py-4 flex flex-col gap-3 text-sm font-medium text-white">
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:opacity-80">Home</Link>
          <Link href="/test" onClick={() => setMenuOpen(false)} className="hover:opacity-80">Practice Test</Link>
          <Link href="/premium" onClick={() => setMenuOpen(false)} className="hover:opacity-80">Premium</Link>
          {user ? (
            <>
              <Link href="/dashboard" onClick={() => setMenuOpen(false)} className="hover:opacity-80">Dashboard</Link>
              <button onClick={handleSignOut} className="text-left hover:opacity-80" style={{ color: '#C9A84C' }}>Sign Out</button>
            </>
          ) : (
            <>
              <Link href="/signin" onClick={() => setMenuOpen(false)} className="hover:opacity-80">Sign In</Link>
              <Link href="/signup" onClick={() => setMenuOpen(false)} style={{ color: '#C9A84C' }}>Sign Up</Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;

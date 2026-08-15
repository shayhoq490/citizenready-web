import Link from 'next/link';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ backgroundColor: '#1B2A4A' }} className="text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-white/60">© {year} CitizenReady. All rights reserved.</p>
        <nav className="flex gap-6">
          <Link href="/privacy" className="hover:opacity-80 transition-opacity text-white/80">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:opacity-80 transition-opacity text-white/80">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;

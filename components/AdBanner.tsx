'use client';

import { useEffect, useRef, useState } from 'react';

interface AdBannerProps {
  slot: string;
  format?: string;
  isPremium?: boolean;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export function AdBanner({ slot, format = 'auto', isPremium = false }: AdBannerProps) {
  const insRef = useRef<HTMLModElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isPremium) return;

    // Only push once per mount
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense not loaded — stay hidden
      return;
    }

    // After AdSense runs, check if an ad was actually filled.
    // AdSense sets data-ad-status="filled" or "unfilled" on the <ins>.
    const timer = setTimeout(() => {
      const status = insRef.current?.getAttribute('data-ad-status');
      if (status === 'filled') setVisible(true);
      // If unfilled or missing, component stays hidden (height: 0)
    }, 300);

    return () => clearTimeout(timer);
  }, [isPremium]);

  if (isPremium) return null;

  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;
  if (!publisherId || publisherId.includes('XXXXXXXX')) return null;

  return (
    <div
      style={{
        textAlign: 'center',
        // Collapse entirely when no ad filled — no empty gap
        overflow: 'hidden',
        maxHeight: visible ? '280px' : '0',
        transition: 'max-height 0.3s ease',
        margin: visible ? '16px 0' : '0',
      }}
    >
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={publisherId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}

export default AdBanner;

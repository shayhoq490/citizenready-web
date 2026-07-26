'use client';

import { useEffect } from 'react';

// TODO: Replace ca-pub-XXXXXXXXXXXXXXXX with real publisher ID
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
  useEffect(() => {
    if (isPremium) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense not loaded
    }
  }, [isPremium]);

  if (isPremium) return null;

  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;

  return (
    <div style={{ textAlign: 'center', margin: '16px 0' }}>
      <ins
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

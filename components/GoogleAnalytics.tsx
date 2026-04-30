'use client';

import Script from 'next/script';
import { useEffect } from 'react';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? 'G-MXZBNZ1498';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function trackConversionClick(href: string, label: string) {
  if (!window.gtag) {
    return;
  }

  const isWhatsApp = href.includes('wa.me');
  const isEmail = href.startsWith('mailto:');

  if (!isWhatsApp && !isEmail) {
    return;
  }

  window.gtag('event', isWhatsApp ? 'click_whatsapp' : 'click_email', {
    event_category: 'conversion',
    event_label: label || href,
    link_url: href,
  });
}

export default function GoogleAnalytics() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest('a');

      if (!link?.href) {
        return;
      }

      trackConversionClick(link.href, link.textContent?.trim() ?? '');
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}

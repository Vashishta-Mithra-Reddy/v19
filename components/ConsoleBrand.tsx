'use client';

import { useEffect } from 'react';

export default function ConsoleBrand() {
  useEffect(() => {
    const logBrand = () => {
      const brandStyles = [
        'font-family: "satoshi", "Satoshi-Variable", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
        'font-weight: 900',
        'font-size: 64px',
        'letter-spacing: -2px',
        'color: #888',
        'line-height: 1',
      ].join(';');

      const subStyles = [
        'font-family: "Satoshi", "Satoshi-Variable", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
        'font-weight: 600',
        'font-size: 12px',
        'color: #888',
      ].join(';');

      console.log('%cV19', brandStyles);
      console.log('%cAgency • v19.tech', subStyles);
      console.log('%chttps://v19.tech', 'color: #888; font-size: 12px;');
    };

    // Ensure fonts are loaded before logging, so Satoshi applies if available
    if ('fonts' in document && (document as any).fonts?.ready) {
      (document as any).fonts.ready.then(logBrand);
    } else {
      logBrand();
    }
  }, []);

  return null;
}

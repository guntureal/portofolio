/* FloatingLogos — logo favicon melayang ke atas (background hero, acak) */
'use client';

import { useMemo } from 'react';
import Image from 'next/image';

type LogoItem = {
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  drift: number;
};

const COUNT = 10;

export default function FloatingLogos() {
  const logos = useMemo<LogoItem[]>(
    () =>
      Array.from({ length: COUNT }, () => ({
        left: Math.random() * 96,
        size: 24 + Math.random() * 36,
        duration: 9 + Math.random() * 11,
        delay: Math.random() * 14,
        opacity: 0.08 + Math.random() * 0.07,
        drift: (Math.random() - 0.5) * 60,
      })),
    []
  );

  return (
    <div className="floating-logos" aria-hidden="true">
      {logos.map((logo, i) => (
        <span
          key={i}
          className="floating-logo"
          style={{
            left: `${logo.left}%`,
            opacity: logo.opacity,
            animationDuration: `${logo.duration}s`,
            animationDelay: `${logo.delay}s`,
            ['--drift' as string]: `${logo.drift}px`,
          }}
        >
          <Image src="/favicon.png" alt="" width={logo.size} height={logo.size} />
        </span>
      ))}
    </div>
  );
}

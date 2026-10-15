/* FloatingLogos — logo favicon melayang di background hero.
   Setiap logo punya config acak: posisi, ukuran, durasi, delay, opacity,
   rotasi, goyangan horizontal (sway), skala, blur, arah drift & easing.
   Tiga varian gerak (naik lurus, naik + goyang, naik + putar) dipilih acak
   agar gerakannya tidak monoton seperti efek background modern. */
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
  sway: number;
  swayDuration: number;
  rotate: number;
  scaleFrom: number;
  scaleTo: number;
  blur: number;
  variant: 'rise' | 'sway' | 'spin';
  easing: string;
};

const COUNT = 14;

const EASINGS = ['ease-in-out', 'ease-out', 'cubic-bezier(0.45, 0, 0.55, 1)', 'cubic-bezier(0.22, 1, 0.36, 1)'];

export default function FloatingLogos() {
  const logos = useMemo<LogoItem[]>(
    () =>
      Array.from({ length: COUNT }, (_, i) => {
        const variant = (['rise', 'sway', 'spin'] as const)[i % 3];
        const rotateDir = Math.random() < 0.5 ? -1 : 1;
        return {
          left: Math.random() * 97,
          size: 16 + Math.random() * 56,
          duration: 12 + Math.random() * 18,
          delay: Math.random() * 25,
          opacity: 0.03 + Math.random() * 0.04,
          drift: (Math.random() - 0.5) * 220,
          sway: 20 + Math.random() * 40,
          swayDuration: 2.5 + Math.random() * 3.5,
          rotate: rotateDir * (90 + Math.random() * 270),
          scaleFrom: 0.8 + Math.random() * 0.2,
          scaleTo: 1 + Math.random() * 0.2,
          blur: Math.random() < 0.4 ? 0.5 + Math.random() : 0,
          variant,
          easing: EASINGS[Math.floor(Math.random() * EASINGS.length)],
        };
      }),
    []
  );

  return (
    <div className="floating-logos" aria-hidden="true">
      {logos.map((logo, i) => (
        <span
          key={i}
          className={`floating-logo floating-logo--${logo.variant}`}
          style={{
            left: `${logo.left}%`,
            opacity: logo.opacity,
            ['--rise-duration' as string]: `${logo.duration}s`,
            ['--rise-delay' as string]: `${logo.delay}s`,
            ['--rise-easing' as string]: logo.easing,
            ['--drift' as string]: `${logo.drift}px`,
            ['--sway' as string]: `${logo.sway}px`,
            ['--sway-duration' as string]: `${logo.swayDuration}s`,
            ['--rotate' as string]: `${logo.rotate}deg`,
            ['--scale-from' as string]: logo.scaleFrom,
            ['--scale-to' as string]: logo.scaleTo,
            ['--max-opacity' as string]: logo.opacity,
            filter: logo.blur > 0 ? `blur(${logo.blur.toFixed(1)}px)` : undefined,
          }}
        >
          <Image src="/favicon.png" alt="" width={logo.size} height={logo.size} />
        </span>
      ))}
    </div>
  );
}

/* Hero — Modern Portfolio: teks kiri, foto blob kanan, rotating roles */
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { person, socials } from '@/data/portfolio';
import { IconFacebook, IconInstagram, IconGitHub, IconTelegram, IconSend } from './icons';
import Reveal from './Reveal';

const socialIcons: Record<string, (p: { size?: number }) => React.ReactElement> = {
  Facebook: IconFacebook,
  Instagram: IconInstagram,
  GitHub: IconGitHub,
  Telegram: IconTelegram,
};

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRoleIndex((i) => (i + 1) % person.roles.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden" style={{ background: 'var(--bg)' }}>
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 pb-20 pt-32 sm:px-6 md:grid-cols-2 md:pb-24 md:pt-40">
        <Reveal delay={100}>
          <div>
            <p className="text-base font-medium" style={{ color: 'var(--body)' }}>
              Hi, I&apos;m
            </p>
            <h1 className="mt-2 text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl" style={{ color: 'var(--ink)' }}>
              {person.firstName}
              <span style={{ color: 'var(--accent)' }}>.</span>
            </h1>
            <p className="mt-4 h-8 text-xl font-semibold sm:text-2xl" style={{ color: 'var(--accent)' }} aria-live="polite">
              <span key={roleIndex} className="role-swap inline-block">
                {person.roles[roleIndex]}
              </span>
            </p>
            <p className="mt-4 max-w-md leading-relaxed" style={{ color: 'var(--body)' }}>
              {person.bio}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-primary">
                Contact Me
                <IconSend size={17} />
              </a>
              <a href="#about" className="btn-ghost">
                About Me
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3">
              {socials
                .filter((s) => socialIcons[s.label])
                .map((s) => {
                  const Icon = socialIcons[s.label];
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn"
                      aria-label={s.label}
                      title={s.label}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={250}>
          <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[400px]">
            <div className="float-slow">
              <div className="hero-blob aspect-square">
                <Image
                  src="/profile.webp"
                  alt="Foto Guntur Putra Hermanto"
                  width={400}
                  height={400}
                  priority
                  className="hero-blob-img"
                />
              </div>
            </div>
            <div
              className="absolute -bottom-3 -left-2 rounded-2xl px-4 py-3 text-center sm:-left-6"
              style={{ background: 'var(--card)', boxShadow: 'var(--shadow-lg)' }}
            >
              <p className="text-lg font-bold leading-none" style={{ color: 'var(--ink)' }}>
                8+
              </p>
              <p className="mt-1 text-xs" style={{ color: 'var(--dim)' }}>
                Years Experience
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <a
        href="#about"
        className="mb-8 flex flex-col items-center gap-2"
        style={{ color: 'var(--dim)' }}
        aria-label="Scroll ke bawah"
      >
        <span className="flex h-9 w-6 items-start justify-center rounded-full border-2 p-1.5" style={{ borderColor: 'var(--dim)' }}>
          <span className="scroll-wheel block h-2 w-1 rounded-full" style={{ background: 'var(--accent)' }} />
        </span>
        <span className="text-xs font-medium">Scroll down</span>
      </a>
    </section>
  );
}

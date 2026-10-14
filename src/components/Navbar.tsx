/* Navbar — Vellum Editorial: 44px, putih, border bawah */
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

/* Ikon SVG stroke tipis (16px) — profesional, tanpa emoji/unicode */
const iconProps = {
  width: 16,
  height: 16,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

const IconUser = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c1.5-3.5 4.5-5 8-5s6.5 1.5 8 5" />
  </svg>
);

const IconCode = () => (
  <svg {...iconProps}>
    <path d="M8 6l-5 6 5 6" />
    <path d="M16 6l5 6-5 6" />
    <path d="M13 4l-2 16" />
  </svg>
);

const IconFolder = () => (
  <svg {...iconProps}>
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
  </svg>
);

const IconRoute = () => (
  <svg {...iconProps}>
    <path d="M4 21 C 9 21, 7 14, 12 13 S 16 10, 17 9" />
    <circle cx="4" cy="21" r="1.8" />
    <path d="M15 4.5 a3 3 0 1 1 6 0 c0 2.2-3 4.5-3 4.5 S15 6.7 15 4.5 z" />
    <circle cx="18" cy="4.5" r="1" />
  </svg>
);

const IconMail = () => (
  <svg {...iconProps}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

const IconSun = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="M4.9 4.9l1.4 1.4" />
    <path d="M17.7 17.7l1.4 1.4" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="M4.9 19.1l1.4-1.4" />
    <path d="M17.7 6.3l1.4-1.4" />
  </svg>
);

const IconMoon = () => (
  <svg {...iconProps}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

const links = [
  { label: 'Tentang', href: '#tentang', Icon: IconUser },
  { label: 'Keahlian', href: '#keahlian', Icon: IconCode },
  { label: 'Proyek', href: '#proyek', Icon: IconFolder },
  { label: 'Perjalanan', href: '#perjalanan', Icon: IconRoute },
  { label: 'Kontak', href: '#kontak', Icon: IconMail },
];

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('gw-theme', next ? 'dark' : 'light');
    } catch {
      /* ignore */
    }
  };

  return (
    <header
      className="sticky top-0 z-50"
      style={{ background: 'var(--bg)', borderBottom: '1px solid var(--line)' }}
    >
      <div className="mx-auto flex h-11 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#atas" className="flex items-center gap-2.5" aria-label="Beranda">
          <Image
            src="/favicon.png"
            alt="Logo gwntur.com"
            width={28}
            height={28}
            className="h-7 w-7 rounded-md"
            priority
          />
          <span className="font-serif-v text-base" style={{ color: 'var(--ink)' }}>
            gwntur<span style={{ color: 'var(--accent)' }}>.com</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navigasi utama">
          {links.map(({ label, href, Icon }) => (
            <a key={href} href={href} className="nav-link flex items-center gap-1.5 text-sm">
              <Icon />
              {label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={dark ? 'Ubah ke mode terang' : 'Ubah ke mode gelap'}
            title={dark ? 'Mode terang' : 'Mode gelap'}
          >
            {dark ? <IconSun /> : <IconMoon />}
          </button>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={dark ? 'Ubah ke mode terang' : 'Ubah ke mode gelap'}
            title={dark ? 'Mode terang' : 'Mode gelap'}
          >
            {dark ? <IconSun /> : <IconMoon />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="nav-link text-sm"
            aria-expanded={open}
            aria-label="Buka menu"
          >
            Menu
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t px-4 py-3 md:hidden"
          style={{ borderColor: 'var(--line)', background: 'var(--bg)' }}
          aria-label="Navigasi seluler"
        >
          {links.map(({ label, href, Icon }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="nav-link flex items-center gap-1.5 py-2.5 text-sm"
            >
              <Icon />
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

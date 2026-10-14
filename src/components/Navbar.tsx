/* Navbar — Google/Microsoft style header */
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { person } from '@/data/portfolio';

const links = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Perjalanan', href: '#perjalanan' },
  { label: 'Keahlian', href: '#keahlian' },
  { label: 'Proyek', href: '#proyek' },
  { label: 'Kontak', href: '#kontak' },
];

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
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
      style={{
        background: 'var(--bodyB)',
        borderBottom: '1px solid var(--border)',
        boxShadow: scrolled ? '0 1px 6px rgba(60,64,67,0.15)' : 'none',
      }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#" className="flex items-center gap-3" aria-label="Beranda">
          <Image
            src="/favicon.png"
            alt="Logo gwntur.com"
            width={36}
            height={36}
            className="h-9 w-9 rounded-md"
            priority
          />
          <span className="text-lg font-semibold tracking-tight">
            {person.firstName}
            <span className="font-normal" style={{ color: 'var(--muted)' }}>
              {' '}
              · gwntur.com
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navigasi utama">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link text-sm">
              {l.label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            className="btn-outline px-3 py-1.5 text-sm"
            aria-label={dark ? 'Ubah ke mode terang' : 'Ubah ke mode gelap'}
          >
            {dark ? 'Mode Terang' : 'Mode Gelap'}
          </button>
          <a href="#kontak" className="btn-primary px-4 py-2 text-sm">
            Hubungi Saya
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="btn-outline px-3 py-1.5 text-sm"
            aria-label={dark ? 'Ubah ke mode terang' : 'Ubah ke mode gelap'}
          >
            {dark ? 'Terang' : 'Gelap'}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="btn-outline px-3 py-1.5 text-sm"
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
          style={{ borderColor: 'var(--border)', background: 'var(--bodyB)' }}
          aria-label="Navigasi seluler"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="nav-link block py-2.5 text-base"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontak"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 block px-4 py-2.5 text-center text-sm"
          >
            Hubungi Saya
          </a>
        </nav>
      )}
    </header>
  );
}

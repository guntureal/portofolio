/* Navbar — Vellum Editorial: 44px, putih, border bawah */
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const links = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Keahlian', href: '#keahlian' },
  { label: 'Proyek', href: '#proyek' },
  { label: 'Perjalanan', href: '#perjalanan' },
  { label: 'Kontak', href: '#kontak' },
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
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link text-sm">
              {l.label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            className="nav-link text-sm"
            aria-label={dark ? 'Ubah ke mode terang' : 'Ubah ke mode gelap'}
          >
            {dark ? 'Terang' : 'Gelap'}
          </button>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="nav-link text-sm"
            aria-label={dark ? 'Ubah ke mode terang' : 'Ubah ke mode gelap'}
          >
            {dark ? 'Terang' : 'Gelap'}
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
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="nav-link block py-2.5 text-sm"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

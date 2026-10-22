/* Navbar — Modern Portfolio: logo + links + theme toggle + hamburger */
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { IconSun, IconMoon, IconMenu, IconClose } from './icons';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Project', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = '#home';
      for (const l of links) {
        const el = document.querySelector(l.href);
        if (el && el.getBoundingClientRect().top <= 140) current = l.href;
      }
      setActive(current);
    };
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
      className="glass-header fixed inset-x-0 top-0 z-50"
      style={{
        borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
        boxShadow: scrolled ? 'var(--shadow)' : 'none',
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#home" className="flex items-center gap-2.5" aria-label="Beranda">
          <Image src="/favicon.png" alt="Logo gwntur.com" width={30} height={30} className="h-8 w-8 rounded-lg" priority />
          <span className="text-lg font-bold tracking-tight" style={{ color: 'var(--ink)' }}>
            Guntur<span style={{ color: 'var(--accent)' }}>.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1.5 md:flex" aria-label="Navigasi utama">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={`nav-link ${active === l.href ? 'active' : ''}`}>
              {l.label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle ml-2"
            aria-label={dark ? 'Ubah ke mode terang' : 'Ubah ke mode gelap'}
            title={dark ? 'Mode terang' : 'Mode gelap'}
          >
            {dark ? <IconSun size={18} /> : <IconMoon size={18} />}
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
            {dark ? <IconSun size={18} /> : <IconMoon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="theme-toggle"
            aria-expanded={open}
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
          >
            {open ? <IconClose size={18} /> : <IconMenu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="glass-header border-t px-4 py-3 md:hidden"
          style={{ borderColor: 'var(--line)' }}
          aria-label="Navigasi seluler"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`nav-link block py-2.5 text-sm ${active === l.href ? 'active' : ''}`}
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

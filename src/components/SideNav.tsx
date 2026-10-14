/* SideNav — Vellum Editorial scroll-spy, fixed kiri, desktop saja */
'use client';

import { useEffect, useState } from 'react';

const items = [
  { label: 'Tentang', href: '#tentang', id: 'tentang' },
  { label: 'Keahlian', href: '#keahlian', id: 'keahlian' },
  { label: 'Proyek', href: '#proyek', id: 'proyek' },
  { label: 'Perjalanan', href: '#perjalanan', id: 'perjalanan' },
  { label: 'Kontak', href: '#kontak', id: 'kontak' },
];

export default function SideNav() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = items
      .map((it) => document.getElementById(it.id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <nav
      aria-label="Navigasi section"
      className="fixed left-8 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-5 lg:flex"
    >
      {items.map((it) => (
        <a
          key={it.id}
          href={it.href}
          className={`side-nav-item flex items-center gap-2.5 ${active === it.id ? 'active' : ''}`}
        >
          <span className="side-star font-serif-v text-sm" aria-hidden>
            ✦
          </span>
          <span className="side-label font-serif-v text-sm">{it.label}</span>
        </a>
      ))}
    </nav>
  );
}

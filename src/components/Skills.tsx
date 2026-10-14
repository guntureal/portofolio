/* Skills — Google/Microsoft style: filter chip + Material cards + bar */
'use client';

import { useEffect, useRef, useState } from 'react';
import { skills } from '@/data/portfolio';
import Reveal from './Reveal';

const categories = ['Semua', 'Pengembangan', 'SEO', 'Konten', 'Desain'] as const;

export default function Skills() {
  const [filter, setFilter] = useState<(typeof categories)[number]>('Semua');
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setAnimate(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const visible = skills.filter((s) => filter === 'Semua' || s.category === filter);

  return (
    <section ref={ref} id="keahlian" className="section-alt">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
            Keahlian
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Keahlian</h2>
          <p className="mt-3 max-w-xl" style={{ color: 'var(--muted)' }}>
            Diukur dari hasil nyata: tools yang dipakai ribuan orang dan artikel yang terindeks dengan baik.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Filter keahlian">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={filter === c}
                onClick={() => setFilter(c)}
                className={`filter-chip px-4 py-2 text-sm ${filter === c ? 'active' : ''}`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {visible.map((skill) => (
            <div key={skill.name} className="mat-card p-5">
              <div className="flex items-baseline justify-between">
                <span className="font-semibold">{skill.name}</span>
                <span className="text-sm" style={{ color: 'var(--muted)' }}>
                  {skill.level}% · {skill.category}
                </span>
              </div>
              <div
                className="mt-3 h-2.5 overflow-hidden rounded-full"
                style={{ background: 'var(--surface-2)' }}
                role="progressbar"
                aria-valuenow={skill.level}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={skill.name}
              >
                <div className="skill-bar-fill h-full" style={{ width: animate ? `${skill.level}%` : '0%' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

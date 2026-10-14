/* Projects — Google/Microsoft style: filter chip + Material cards */
'use client';

import { useState } from 'react';
import { projects, projectFilters } from '@/data/portfolio';
import Reveal from './Reveal';

export default function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>('Semua');
  const visible = projects.filter((p) => filter === 'Semua' || p.category === filter);

  return (
    <section id="proyek">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
            Proyek
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Proyek</h2>
          <p className="mt-3 max-w-xl" style={{ color: 'var(--muted)' }}>
            Tools web gratis yang live di gwntur.com — dipakai setiap hari, tanpa instalasi.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Filter proyek">
            {projectFilters.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`filter-chip px-4 py-2 text-sm ${filter === f ? 'active' : ''}`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <article key={p.id} className="mat-card flex h-full flex-col p-6">
              <div className="mb-4 flex items-center justify-between">
                <span
                  className="rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ background: 'var(--surface-2)', color: 'var(--accent)' }}
                >
                  {p.category}
                </span>
                {p.featured && (
                  <span className="rounded-full bg-[#1a73e8] px-3 py-1 text-xs font-semibold text-white">
                    Unggulan
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                {p.description}
              </p>
              {p.stats && (
                <dl className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
                  {p.stats.map((s) => (
                    <div key={s.label} className="text-xs">
                      <dt style={{ color: 'var(--muted)' }}>{s.label}</dt>
                      <dd className="font-semibold">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="tag-chip px-2.5 py-1">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold"
                style={{ color: 'var(--accent)' }}
              >
                Lihat di gwntur.com
                <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Projects — Vellum Editorial: list vertikal, judul serif + kategori biru italic */
import { projects } from '@/data/portfolio';
import Reveal from './Reveal';

export default function Projects() {
  return (
    <section id="proyek" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--dim)' }}>
            <span style={{ color: 'var(--accent)' }}>✦</span> Proyek
          </p>
          <h2
            className="font-serif-v mt-4 leading-snug tracking-tight"
            style={{ color: 'var(--ink)', fontSize: 'clamp(36px, 5vw, 60px)' }}
          >
            Tools &amp; <em style={{ color: 'var(--accent)' }}>Proyek</em>
          </h2>
          <p className="mt-4 max-w-xl leading-normal" style={{ color: 'var(--body)' }}>
            Tools web gratis yang live di gwntur.com — dipakai setiap hari, tanpa instalasi.
          </p>
        </Reveal>

        <div className="mt-10">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <article
                className="py-8"
                style={i > 0 ? { borderTop: '1px solid var(--line)' } : undefined}
              >
                <p className="font-serif-v text-sm italic" style={{ color: 'var(--accent)' }}>
                  {p.category}
                </p>
                <h3 className="font-serif-v mt-2 text-2xl leading-snug sm:text-3xl" style={{ color: 'var(--ink)' }}>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="project-title">
                    {p.title}
                  </a>
                </h3>
                <p className="mt-3 max-w-2xl leading-normal" style={{ color: 'var(--body)' }}>
                  {p.description}
                </p>
                <p className="mt-4 text-sm" style={{ color: 'var(--dim)' }}>
                  {p.tags.join(' · ')}
                </p>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="accent-link mt-5 inline-block text-sm"
                >
                  Lihat Proyek →
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

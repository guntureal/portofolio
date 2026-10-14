/* About — Vellum Editorial: paragraf serif besar */
import { person } from '@/data/portfolio';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="tentang" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--dim)' }}>
            <span style={{ color: 'var(--accent)' }}>✦</span> Tentang Saya
          </p>
          <h2
            className="font-serif-v mt-4 leading-snug tracking-tight"
            style={{ color: 'var(--ink)', fontSize: 'clamp(36px, 5vw, 60px)' }}
          >
            Cerita di Balik <em style={{ color: 'var(--accent)' }}>gwntur.com</em>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p
            className="font-serif-v mt-8 leading-normal"
            style={{ color: 'var(--body-2)', fontSize: 'clamp(24px, 3vw, 30px)' }}
          >
            {person.bio}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

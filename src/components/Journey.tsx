/* Journey — Vellum Editorial: timeline vertikal halus, garis 1px + ✦ biru */
import { timeline } from '@/data/portfolio';
import Reveal from './Reveal';

export default function Journey() {
  return (
    <section id="perjalanan" style={{ borderTop: '1px solid var(--line)', background: 'var(--bg-alt)' }}>
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--dim)' }}>
            <span style={{ color: 'var(--accent)' }}>✦</span> Perjalanan
          </p>
          <h2
            className="font-serif-v mt-4 leading-snug tracking-tight"
            style={{ color: 'var(--ink)', fontSize: 'clamp(36px, 5vw, 60px)' }}
          >
            Dari Ngeblog Hingga <em style={{ color: 'var(--accent)' }}>Membangun</em>
          </h2>
        </Reveal>

        <div className="relative mt-10">
          <span
            className="absolute bottom-4 left-[7px] top-4 w-px"
            style={{ background: 'var(--timeline)' }}
            aria-hidden
          />
          <ol className="space-y-10">
            {timeline.map((item, i) => (
              <li key={item.year} className="relative pl-10">
                <span
                  className="absolute left-0 top-1 font-serif-v text-sm"
                  style={{ color: 'var(--accent)' }}
                  aria-hidden
                >
                  ✦
                </span>
                <Reveal delay={i * 80}>
                  <span className="text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--dim)' }}>
                    {item.year}
                  </span>
                  <h3 className="font-serif-v mt-1 text-xl sm:text-2xl" style={{ color: 'var(--ink)' }}>
                    {item.title}
                  </h3>
                  <p className="mt-1 leading-normal" style={{ color: 'var(--body)' }}>
                    {item.text}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

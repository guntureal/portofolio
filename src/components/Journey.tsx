/* Journey — Google/Microsoft style: timeline vertikal sederhana */
import { timeline } from '@/data/portfolio';
import Reveal from './Reveal';

export default function Journey() {
  return (
    <section id="perjalanan">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
            Perjalanan
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Perjalanan</h2>
          <p className="mt-3 max-w-xl" style={{ color: 'var(--muted)' }}>
            Dari kebiasaan ngeblog hingga membangun tools yang dipakai ribuan orang setiap hari.
          </p>
        </Reveal>
        <div className="relative mt-10">
          <span
            className="absolute bottom-2 left-[19px] top-2 w-0.5"
            style={{ background: 'var(--border)' }}
            aria-hidden
          />
          <ol className="space-y-6">
            {timeline.map((item, i) => (
              <li key={item.year} className="relative pl-12">
                <span
                  className="absolute left-0 top-5 h-10 w-10 rounded-full"
                  style={{ background: 'var(--accent)', boxShadow: '0 0 0 4px var(--bodyB)' }}
                  aria-hidden
                >
                  <span className="flex h-full w-full items-center justify-center text-xs font-bold text-white">
                    {item.year.slice(2)}
                  </span>
                </span>
                <Reveal delay={i * 80}>
                  <div className="mat-card p-5">
                    <span className="text-sm font-bold" style={{ color: 'var(--accent)' }}>
                      {item.year}
                    </span>
                    <h3 className="mt-1 text-lg font-bold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

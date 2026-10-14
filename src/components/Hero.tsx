/* Hero — Google/Microsoft style: teks besar kiri, card Material kanan */
import Image from 'next/image';
import { person } from '@/data/portfolio';
import Reveal from './Reveal';

const STATS = [
  { label: 'Ngeblog sejak', value: String(person.since) },
  { label: 'Artikel', value: '11+' },
  { label: 'Tools', value: '5+' },
  { label: 'Lokasi', value: person.location },
];

export default function Hero() {
  return (
    <section id="atas" className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Kolom kiri: teks */}
        <div>
          <Reveal>
            <p className="flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--accent)' }}>
              <span className="inline-block h-2 w-2 rounded-full" style={{ background: '#34a853' }} aria-hidden />
              Halo, Saya
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
              {person.name}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 text-xl font-medium sm:text-2xl" style={{ color: 'var(--accent)' }}>
              {person.roles.join(' · ')}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
              {person.bio}
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#proyek" className="btn-primary px-7 py-3 text-sm">
                Lihat Proyek
              </a>
              <a
                href="https://www.gwntur.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-7 py-3 text-sm"
              >
                Kunjungi Blog
              </a>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t pt-6" style={{ borderColor: 'var(--border)' }}>
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="text-xs uppercase tracking-wide" style={{ color: 'var(--muted)' }}>
                    {s.label}
                  </dt>
                  <dd className="mt-1 text-xl font-bold">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Kolom kanan: Material card */}
        <Reveal delay={200}>
          <div className="mat-card p-6 sm:p-8">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/favicon.png"
                alt="Logo gwntur.com"
                width={120}
                height={120}
                priority
                className="h-28 w-28 rounded-2xl"
              />
              <h2 className="mt-5 text-2xl font-bold">gwntur.com</h2>
              <p className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>
                Tutorial &amp; Tools Praktis
              </p>
              <div className="mt-6 grid w-full grid-cols-3 gap-3">
                {[
                  { v: '11+', l: 'Artikel' },
                  { v: '5+', l: 'Tools' },
                  { v: '2018', l: 'Sejak' },
                ].map((s) => (
                  <div key={s.l} className="rounded-lg px-2 py-3 section-alt">
                    <p className="text-lg font-bold">{s.v}</p>
                    <p className="text-xs" style={{ color: 'var(--muted)' }}>
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
              <a
                href="https://www.gwntur.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6 w-full px-5 py-3 text-center text-sm"
              >
                Buka gwntur.com
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

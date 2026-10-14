/* Hero — Vellum Editorial: headline serif tengah, foto inline mengambang */
import Image from 'next/image';
import { person } from '@/data/portfolio';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section
      id="atas"
      className="mx-auto flex min-h-[calc(100vh-44px)] max-w-6xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6"
    >
      <Reveal>
        <p className="text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--dim)' }}>
          ✦ Portofolio
        </p>
      </Reveal>

      <Reveal delay={100}>
        <h1 className="font-serif-v mt-8 leading-[1.08] tracking-tight" style={{ color: 'var(--ink)', fontSize: 'clamp(48px, 8vw, 96px)' }}>
          <span className="block">
            Halo, Saya{' '}
            <span className="float-photo inline-block align-middle">
              <Image
                src="/favicon.png"
                alt="Logo gwntur.com"
                width={96}
                height={96}
                priority
                className="inline-block h-[72px] w-[72px] rounded-2xl sm:h-20 sm:w-20 lg:h-24 lg:w-24"
              />
            </span>
          </span>
          <span className="block">
            <em style={{ color: 'var(--gold)' }}>Guntur</em> Putra Hermanto
          </span>
          <span className="block">
            Web Developer <span style={{ color: 'var(--gold)' }}>·</span> SEO Specialist
          </span>
        </h1>
      </Reveal>

      <Reveal delay={250}>
        <p
          className="mt-10 max-w-2xl text-base leading-relaxed sm:text-lg"
          style={{ color: 'var(--body-2)' }}
        >
          {person.bio}
        </p>
      </Reveal>

      <Reveal delay={400}>
        <p className="mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <a href={`mailto:${person.email}`} className="gold-link">
            {person.email}
          </a>
          <span style={{ color: 'var(--dim-2)' }}>·</span>
          <span style={{ color: 'var(--body-3)' }}>{person.location}</span>
          <span style={{ color: 'var(--dim-2)' }}>·</span>
          <a href={person.website} target="_blank" rel="noopener noreferrer" className="gold-link">
            gwntur.com
          </a>
        </p>
      </Reveal>
    </section>
  );
}

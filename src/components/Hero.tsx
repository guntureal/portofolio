/* Hero — Vellum Editorial: headline serif tengah, foto inline statis (tanpa animasi mengambang agar tidak bertumpuk) */
import Image from 'next/image';
import { person } from '@/data/portfolio';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section
      id="atas"
      className="mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 md:py-28"
    >
      <Reveal>
        <p className="text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--dim)' }}>
          ✦ Portofolio
        </p>
      </Reveal>

      <Reveal delay={100}>
        <h1 className="font-serif-v mt-6 leading-[1.25] tracking-tight" style={{ color: 'var(--ink)', fontSize: 'clamp(44px, 7.5vw, 88px)' }}>
          <span className="block pb-1">
            Halo, Saya{' '}
            <span className="mx-2 inline-block align-middle">
              <Image
                src="/favicon.png"
                alt="Logo gwntur.com"
                width={72}
                height={72}
                priority
                className="inline-block h-14 w-14 rounded-2xl sm:h-16 sm:w-16 lg:h-[72px] lg:w-[72px]"
              />
            </span>
          </span>
          <span className="block pb-1">
            <em style={{ color: 'var(--accent)' }}>Guntur</em> Putra Hermanto
          </span>
          <span className="block pb-1">
            Web Developer <span style={{ color: 'var(--accent)' }}>·</span> SEO Specialist
          </span>
        </h1>
      </Reveal>

      <Reveal delay={250}>
        <p
          className="mt-8 max-w-2xl text-base leading-normal sm:text-lg"
          style={{ color: 'var(--body-2)' }}
        >
          {person.bio}
        </p>
      </Reveal>

      <Reveal delay={400}>
        <p className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <a href={`mailto:${person.email}`} className="accent-link">
            Kirim Email
          </a>
          <span style={{ color: 'var(--dim-2)' }}>·</span>
          <span style={{ color: 'var(--body-3)' }}>{person.location}</span>
          <span style={{ color: 'var(--dim-2)' }}>·</span>
          <a href={person.website} target="_blank" rel="noopener noreferrer" className="accent-link">
            gwntur.com
          </a>
        </p>
      </Reveal>
    </section>
  );
}

/* Hero — Vellum Editorial: struktur persis template (kutip, headline 4 baris, 3 foto inline, kontak vertikal) */
import Image from 'next/image';
import { person } from '@/data/portfolio';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section
      id="atas"
      style={{ background: 'var(--hero-bg)' }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 md:py-28">
      <Reveal delay={100}>
        <h1 className="font-serif-v leading-[1.25] tracking-tight" style={{ color: 'var(--ink)', fontSize: 'clamp(44px, 7.5vw, 88px)' }}>
          <span className="block pb-1">
            <span style={{ opacity: 0.6 }}>“</span> Halo, Saya{' '}
            <span className="mx-2 inline-block align-middle">
              <Image
                src="/profile.webp"
                alt="Foto Guntur Putra Hermanto"
                width={96}
                height={96}
                priority
                className="inline-block h-16 w-16 rounded-2xl object-cover sm:h-20 sm:w-20 lg:h-24 lg:w-24"
              />
            </span>{' '}
            <em style={{ color: 'var(--accent)' }}>Guntur</em>
          </span>
          <span className="block pb-1">
            seorang{' '}
            <span className="mx-2 inline-block align-middle">
              <Image
                src="/favicon.png"
                alt="Logo gwntur.com"
                width={80}
                height={80}
                priority
                className="inline-block h-14 w-14 rounded-xl object-cover sm:h-16 sm:w-16 lg:h-20 lg:w-20"
              />
            </span>{' '}
            <em style={{ color: 'var(--accent)' }}>Developer</em>
          </span>
          <span className="block pb-1">yang</span>
          <span className="block pb-1">
            membangun{' '}
            <span className="mx-2 inline-block align-middle">
              <Image
                src="/favicon.png"
                alt="Logo gwntur.com"
                width={72}
                height={72}
                priority
                className="inline-block h-12 w-12 rounded-lg object-cover sm:h-14 sm:w-14 lg:h-[72px] lg:w-[72px]"
              />
            </span>{' '}
            <em style={{ color: 'var(--accent)' }}>Tools</em>
            <span style={{ opacity: 0.6 }}>”</span>
          </span>
        </h1>
      </Reveal>

      <Reveal delay={400}>
        <div className="mt-16 space-y-6">
          <p>
            <span className="font-serif-v italic" style={{ color: 'var(--dim)', fontSize: 'clamp(24px, 3vw, 30px)' }}>
              {person.location}
            </span>
          </p>
          <p>
            <a
              href={`mailto:${person.email}`}
              className="accent-link font-serif-v italic"
              style={{ fontSize: 'clamp(24px, 3vw, 30px)' }}
            >
              Kirim Email
            </a>
          </p>
          <p>
            <a
              href={person.website}
              target="_blank"
              rel="noopener noreferrer"
              className="accent-link font-serif-v italic"
              style={{ fontSize: 'clamp(24px, 3vw, 30px)' }}
            >
              gwntur.com
            </a>
          </p>
        </div>
      </Reveal>
      </div>
    </section>
  );
}

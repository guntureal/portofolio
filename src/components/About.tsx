/* About — Modern Portfolio: foto + bio + stats */
import Image from 'next/image';
import { person } from '@/data/portfolio';
import Reveal from './Reveal';

const stats = [
  { value: '8+', label: 'Years Experience' },
  { value: '6+', label: 'Completed Projects' },
  { value: '100%', label: 'Tools Gratis' },
];

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--bg-alt)' }}>
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <Reveal>
          <div className="text-center">
            <p className="section-subtitle">My Introduction</p>
            <h2 className="section-title mt-2">About Me</h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <Reveal delay={100}>
            <div className="relative mx-auto w-full max-w-[360px]">
              <div className="overflow-hidden rounded-2xl" style={{ boxShadow: 'var(--shadow-lg)' }}>
                <Image
                  src="/profile.webp"
                  alt="Foto Guntur Putra Hermanto"
                  width={720}
                  height={900}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold"
                style={{ background: 'var(--accent)', color: '#fff', boxShadow: 'var(--shadow-lg)' }}
              >
                Guntur Putra Hermanto
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div>
              <p className="leading-relaxed" style={{ color: 'var(--body)' }}>
                {person.bio}
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: 'var(--body)' }}>
                Saya membangun tools yang benar-benar dipakai orang — downloader, AI chat, hingga pembuat stiker — dan
                menulis tutorial SEO yang mudah dipahami. Setiap tools melewati validasi penuh sebelum dirilis.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl font-bold sm:text-3xl" style={{ color: 'var(--ink)' }}>
                      {s.value}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm" style={{ color: 'var(--dim)' }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

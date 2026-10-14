/* About — Vellum Editorial: paragraf serif besar */
import { person } from '@/data/portfolio';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="tentang" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 md:py-32">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--dim)' }}>
            <span style={{ color: 'var(--gold)' }}>✦</span> Tentang Saya
          </p>
          <h2
            className="font-serif-v mt-4 leading-tight tracking-tight"
            style={{ color: 'var(--ink)', fontSize: 'clamp(36px, 5vw, 60px)' }}
          >
            Cerita di Balik <em style={{ color: 'var(--gold)' }}>gwntur.com</em>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p
            className="font-serif-v mt-10 leading-relaxed"
            style={{ color: 'var(--body-2)', fontSize: 'clamp(24px, 3vw, 30px)' }}
          >
            {person.bio}
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 leading-relaxed" style={{ color: 'var(--body)' }}>
            Saya fokus pada tiga hal: tools yang benar-benar dipakai orang, artikel yang mudah dipahami, dan
            performa yang cepat di HP maupun desktop. Setiap tools melewati validasi penuh sebelum dirilis.
          </p>
        </Reveal>
        <Reveal delay={280}>
          <p className="mt-4 leading-relaxed" style={{ color: 'var(--body)' }}>
            Di luar membangun tools, saya menulis tutorial SEO dan panduan AI di gwntur.com — dengan standar
            komponen resmi, tanpa CSS inline, dan terstruktur untuk mesin pencari maupun pembaca manusia.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

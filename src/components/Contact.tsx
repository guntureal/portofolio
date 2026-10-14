/* Contact — Vellum Editorial: penutup/footer, judul + email underline emas + sosial */
import { person, socials } from '@/data/portfolio';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="kontak" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 md:py-32">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--dim)' }}>
            <span style={{ color: 'var(--gold)' }}>✦</span> Kontak
          </p>
          <h2
            className="font-serif-v mt-4 leading-tight tracking-tight"
            style={{ color: 'var(--ink)', fontSize: 'clamp(36px, 5vw, 60px)' }}
          >
            ✦ Mari <em style={{ color: 'var(--gold)' }}>Berdiskusi</em>
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed" style={{ color: 'var(--body)' }}>
            Ada ide tools, kolaborasi, atau pertanyaan seputar SEO dan pengembangan web? Silakan hubungi saya.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-10">
            <a href={`mailto:${person.email}`} className="gold-link font-serif-v text-xl sm:text-2xl">
              {person.email}
            </a>
          </p>
        </Reveal>
        <Reveal delay={250}>
          <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2" aria-label="Media sosial">
            {socials.map((s, i) => (
              <span key={s.label} className="flex items-center gap-5">
                {i > 0 && (
                  <span style={{ color: 'var(--gold)' }} aria-hidden>
                    ·
                  </span>
                )}
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="gold-link text-sm">
                  {s.label}
                </a>
              </span>
            ))}
          </nav>
        </Reveal>
        <Reveal delay={350}>
          <p className="mt-16 text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--dim)' }}>
            ✦ {person.name} · gwntur.com · © {new Date().getFullYear()}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

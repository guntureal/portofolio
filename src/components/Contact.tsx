/* Contact — Google/Microsoft style: Material card + social grid */
import { person, socials } from '@/data/portfolio';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="kontak" className="section-alt">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
            Kontak
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Kontak</h2>
          <p className="mt-3 max-w-xl" style={{ color: 'var(--muted)' }}>
            Ada ide tools, kolaborasi, atau pertanyaan seputar SEO dan pengembangan web? Silakan hubungi saya.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="mat-card flex h-full flex-col items-start justify-center p-6 sm:p-8">
              <h3 className="text-xl font-bold">Mari Terhubung</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                Respon tercepat melalui email. Untuk update tools dan tutorial, ikuti media sosial saya.
              </p>
              <a href={`mailto:${person.email}`} className="btn-primary mt-6 px-7 py-3 text-sm">
                Kirim Email
              </a>
              <p className="mt-5 text-sm" style={{ color: 'var(--muted)' }}>
                Email:{' '}
                <a href={`mailto:${person.email}`} className="font-medium hover:underline" style={{ color: 'var(--accent)' }}>
                  {person.email}
                </a>
              </p>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>
                Website:{' '}
                <a
                  href={person.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:underline"
                  style={{ color: 'var(--accent)' }}
                >
                  gwntur.com
                </a>
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {socials.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mat-card block h-full px-5 py-4"
                >
                  <span className="block font-semibold">{s.label}</span>
                  <span className="text-sm" style={{ color: 'var(--muted)' }}>
                    {s.handle}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

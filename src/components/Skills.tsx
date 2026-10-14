/* Skills — Vellum Editorial: grup label + daftar dipisah " · " biru, selang-seling italic */
import { skills } from '@/data/portfolio';
import Reveal from './Reveal';

const groups: { label: string; category: string }[] = [
  { label: 'Pengembangan Web', category: 'Pengembangan' },
  { label: 'SEO', category: 'SEO' },
  { label: 'Konten & Desain', category: 'Konten' },
];

export default function Skills() {
  return (
    <section id="keahlian" style={{ borderTop: '1px solid var(--line)', background: 'var(--bg-alt)' }}>
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--dim)' }}>
            <span style={{ color: 'var(--accent)' }}>✦</span> Keahlian
          </p>
          <h2
            className="font-serif-v mt-4 leading-snug tracking-tight"
            style={{ color: 'var(--ink)', fontSize: 'clamp(36px, 5vw, 60px)' }}
          >
            Apa yang Saya <em style={{ color: 'var(--accent)' }}>Kuasai</em>
          </h2>
        </Reveal>

        <div className="mt-10 space-y-8">
          {groups.map((g, gi) => {
            const items = skills.filter(
              (s) => s.category === g.category || (g.category === 'Konten' && s.category === 'Desain')
            );
            return (
              <Reveal key={g.label} delay={gi * 100}>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--dim)' }}>
                    <span style={{ color: 'var(--accent)' }}>✦</span> {g.label}
                  </p>
                  <p
                    className="font-serif-v mt-4 leading-normal"
                    style={{ color: 'var(--body-2)', fontSize: 'clamp(24px, 3vw, 30px)' }}
                  >
                    {items.map((s, i) => (
                      <span key={s.name}>
                        {i > 0 && <span style={{ color: 'var(--accent)' }}> · </span>}
                        {i % 2 === 1 ? <em>{s.name}</em> : s.name}
                      </span>
                    ))}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

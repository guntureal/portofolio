/* Services — Modern Portfolio: 3 cards dengan ikon SVG */
import { services, type SkillIcon } from '@/data/portfolio';
import { IconCode, IconSearch, IconPen, IconArrowRight } from './icons';
import Reveal from './Reveal';

const serviceIcons: Record<SkillIcon, (p: { size?: number }) => React.ReactElement> = {
  code: IconCode,
  search: IconSearch,
  pen: IconPen,
};

export default function Services() {
  return (
    <section id="services" style={{ background: 'var(--bg-alt)' }}>
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <Reveal>
          <div className="text-center">
            <p className="section-subtitle">What I offer</p>
            <h2 className="section-title mt-2">Services</h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.icon];
            return (
              <Reveal key={s.title} delay={i * 100}>
                <article
                  className="card-hover flex h-full flex-col rounded-2xl p-7"
                  style={{ background: 'var(--card)', boxShadow: 'var(--shadow)' }}
                >
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
                  >
                    <Icon size={28} />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold" style={{ color: 'var(--ink)' }}>
                    {s.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed" style={{ color: 'var(--body)' }}>
                    {s.description}
                  </p>
                  <a
                    href="#portfolio"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium"
                    style={{ color: 'var(--accent)' }}
                  >
                    View More
                    <IconArrowRight size={16} />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

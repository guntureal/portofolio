/* Projects — Modern Portfolio: grid kartu dengan header gradasi + ikon */
import { projects, type ProjectCategory } from '@/data/portfolio';
import { IconChat, IconDownload, IconSmile, IconFile, IconArrowRight } from './icons';
import Reveal from './Reveal';

const categoryIcons: Record<ProjectCategory, (p: { size?: number }) => React.ReactElement> = {
  AI: IconChat,
  Downloader: IconDownload,
  Utilitas: IconSmile,
  Konten: IconFile,
};

const gradients = [
  'linear-gradient(135deg, #6C5CE7 0%, #a29bfe 100%)',
  'linear-gradient(135deg, #5A4BD1 0%, #8b7cf6 100%)',
  'linear-gradient(135deg, #7C3AED 0%, #c4b5fd 100%)',
  'linear-gradient(135deg, #6C5CE7 0%, #00b894 100%)',
  'linear-gradient(135deg, #5A4BD1 0%, #fdcb6e 100%)',
  'linear-gradient(135deg, #7C3AED 0%, #e17055 100%)',
];

export default function Projects() {
  return (
    <section id="portfolio" style={{ background: 'var(--bg)' }}>
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <Reveal>
          <div className="text-center">
            <p className="section-subtitle">Most recent work</p>
            <h2 className="section-title mt-2">Portfolio</h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed" style={{ color: 'var(--body)' }}>
              Tools web gratis yang live di gwntur.com — dipakai setiap hari, tanpa instalasi.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const Icon = categoryIcons[p.category];
            return (
              <Reveal key={p.id} delay={(i % 3) * 100}>
                <article
                  className="card-hover flex h-full flex-col overflow-hidden rounded-2xl"
                  style={{ background: 'var(--card)', boxShadow: 'var(--shadow)' }}
                >
                  <div
                    className="flex h-40 items-center justify-center"
                    style={{ background: gradients[i % gradients.length] }}
                  >
                    <span className="text-white">
                      <Icon size={56} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--accent)' }}>
                      {p.category}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold" style={{ color: 'var(--ink)' }}>
                      {p.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: 'var(--body)' }}>
                      {p.description}
                    </p>
                    <p className="mt-4 text-xs" style={{ color: 'var(--dim)' }}>
                      {p.tags.join(' · ')}
                    </p>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium"
                      style={{ color: 'var(--accent)' }}
                    >
                      Demo
                      <IconArrowRight size={16} />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

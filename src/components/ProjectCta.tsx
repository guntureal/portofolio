/* ProjectCta — Modern Portfolio: banner ungu */
import { person } from '@/data/portfolio';
import { IconSend } from './icons';
import Reveal from './Reveal';

export default function ProjectCta() {
  return (
    <section style={{ background: 'var(--bg-alt)' }}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <Reveal>
          <div
            className="flex flex-col items-center gap-6 rounded-3xl px-6 py-12 text-center sm:px-12 md:flex-row md:justify-between md:text-left"
            style={{ background: 'var(--accent)', boxShadow: 'var(--shadow-lg)' }}
          >
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">You have a new project</h2>
              <p className="mt-2 text-white/85">Contact me now on your new project.</p>
            </div>
            <a
              href={`mailto:${person.email}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium"
              style={{ color: 'var(--accent)' }}
            >
              Contact Me
              <IconSend size={17} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Footer — Google/Microsoft style: sederhana */
import Image from 'next/image';
import { person, socials } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p className="flex items-center gap-2 text-sm" style={{ color: 'var(--muted)' }}>
          <Image src="/favicon.png" alt="" width={20} height={20} className="h-5 w-5 rounded" aria-hidden />
          © {new Date().getFullYear()} {person.name} · gwntur.com
        </p>
        <nav className="flex flex-wrap gap-4" aria-label="Media sosial">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link text-sm"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

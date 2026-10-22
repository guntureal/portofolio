/* Footer — Modern Portfolio: penutup sederhana tanpa nama personal */
import { socials } from '@/data/portfolio';
import { IconFacebook, IconInstagram, IconGitHub, IconTelegram } from './icons';

const socialIcons: Record<string, (p: { size?: number }) => React.ReactElement> = {
  Facebook: IconFacebook,
  Instagram: IconInstagram,
  GitHub: IconGitHub,
  Telegram: IconTelegram,
};

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--line)' }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 sm:px-6">
        <div className="flex items-center gap-3">
          {socials
            .filter((s) => socialIcons[s.label])
            .map((s) => {
              const Icon = socialIcons[s.label];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  data-brand={s.brand}
                  aria-label={s.label}
                  title={s.label}
                >
                  <Icon size={18} />
                </a>
              );
            })}
        </div>
        <p className="text-sm" style={{ color: 'var(--dim)' }}>
          gwntur.com · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

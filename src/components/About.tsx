/* About — Google/Microsoft style: narasi + 3 Material cards */
import Image from 'next/image';
import { person } from '@/data/portfolio';
import Reveal from './Reveal';

const FOCUS = [
  {
    title: 'Tools yang Dipakai Orang',
    text: 'Downloader, AI chat, dan utilitas — semuanya live, gratis, tanpa instalasi.',
  },
  {
    title: 'Konten yang Mudah Dipahami',
    text: 'Tutorial SEO dan panduan AI dengan struktur rapi untuk pembaca manusia dan mesin pencari.',
  },
  {
    title: 'Performa Cepat',
    text: 'Ringan di HP maupun desktop. Setiap rilis melewati validasi penuh sebelum tayang.',
  },
];

export default function About() {
  return (
    <section id="tentang" className="section-alt">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
            Tentang
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Tentang Saya</h2>
        </Reveal>
        <div className="mt-10 grid items-start gap-8 md:grid-cols-2">
          <Reveal>
            <div className="space-y-4 leading-relaxed" style={{ color: 'var(--muted)' }}>
              <p>{person.bio}</p>
              <p>
                Saya fokus pada tiga hal: tools yang benar-benar dipakai orang, artikel yang mudah dipahami,
                dan performa yang cepat di HP maupun desktop. Setiap tools melewati validasi penuh sebelum dirilis.
              </p>
              <p>
                Di luar membangun tools, saya menulis tutorial SEO dan panduan AI di gwntur.com — dengan standar
                komponen resmi, tanpa CSS inline, dan terstruktur untuk mesin pencari maupun pembaca manusia.
              </p>
            </div>
            <div className="mat-card mt-6 flex items-center gap-4 p-4">
              <Image src="/favicon.png" alt="Logo gwntur.com" width={56} height={56} className="h-14 w-14 shrink-0 rounded-lg" />
              <div>
                <p className="font-bold">gwntur.com</p>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  Ngeblog sejak 2018 · Tutorial &amp; tools praktis
                </p>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-4">
            {FOCUS.map((f, i) => (
              <Reveal key={f.title} delay={i * 100}>
                <div className="mat-card p-5">
                  <h3 className="font-bold">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                    {f.text}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={300}>
              <a href="#proyek" className="btn-primary inline-block px-6 py-3 text-sm">
                Lihat semua proyek →
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

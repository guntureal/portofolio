/* Contact — Modern Portfolio: info kiri + form kanan (mailto) */
'use client';

import { useState, type FormEvent } from 'react';
import { person } from '@/data/portfolio';
import { IconMail, IconMapPin, IconGlobe, IconSend, IconCheck } from './icons';
import Reveal from './Reveal';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const message = String(data.get('message') || '');
    const subject = encodeURIComponent(`Pesan dari ${name} via Portofolio`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${person.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" style={{ background: 'var(--bg)' }}>
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <Reveal>
          <div className="text-center">
            <p className="section-subtitle">Get in touch</p>
            <h2 className="section-title mt-2">Contact Me</h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <Reveal delay={100}>
            <div>
              <p className="leading-relaxed" style={{ color: 'var(--body)' }}>
                Ada ide tools, kolaborasi, atau pertanyaan seputar SEO dan pengembangan web? Silakan hubungi saya.
              </p>
              <ul className="mt-8 space-y-5">
                <li className="flex items-center gap-4">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                    style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
                  >
                    <IconMail size={19} />
                  </span>
                  <span>
                    <span className="block text-sm" style={{ color: 'var(--dim)' }}>
                      Email
                    </span>
                    <a href={`mailto:${person.email}`} className="font-medium" style={{ color: 'var(--ink)' }}>
                      Kirim Email
                    </a>
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                    style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
                  >
                    <IconMapPin size={19} />
                  </span>
                  <span>
                    <span className="block text-sm" style={{ color: 'var(--dim)' }}>
                      Lokasi
                    </span>
                    <span className="font-medium" style={{ color: 'var(--ink)' }}>
                      {person.location}
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                    style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
                  >
                    <IconGlobe size={19} />
                  </span>
                  <span>
                    <span className="block text-sm" style={{ color: 'var(--dim)' }}>
                      Website
                    </span>
                    <a
                      href={person.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium"
                      style={{ color: 'var(--ink)' }}
                    >
                      gwntur.com
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-6 sm:p-8"
              style={{ background: 'var(--card)', boxShadow: 'var(--shadow)' }}
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium" style={{ color: 'var(--ink)' }}>
                    Nama
                  </label>
                  <input id="contact-name" name="name" type="text" required placeholder="Nama Anda" className="form-input" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium" style={{ color: 'var(--ink)' }}>
                    Email
                  </label>
                  <input id="contact-email" name="email" type="email" required placeholder="email@anda.com" className="form-input" />
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium" style={{ color: 'var(--ink)' }}>
                    Pesan
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tulis pesan Anda..."
                    className="form-input resize-none"
                  />
                </div>
              </div>
              <button type="submit" className="btn-primary mt-6 w-full justify-center">
                Kirim Pesan
                <IconSend size={17} />
              </button>
              {sent && (
                <p className="mt-4 flex items-center gap-2 text-sm" style={{ color: 'var(--accent)' }} role="status">
                  <IconCheck size={16} />
                  Terima kasih! Aplikasi email Anda terbuka — silakan kirim pesannya.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

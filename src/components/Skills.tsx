/* Skills — Modern Portfolio: accordion groups + animated bars */
'use client';

import { useEffect, useRef, useState } from 'react';
import { skillGroups, type SkillIcon } from '@/data/portfolio';
import { IconCode, IconSearch, IconPen, IconChevronDown } from './icons';
import Reveal from './Reveal';

const groupIcons: Record<SkillIcon, (p: { size?: number }) => React.ReactElement> = {
  code: IconCode,
  search: IconSearch,
  pen: IconPen,
};

export default function Skills() {
  const [openIndex, setOpenIndex] = useState(0);
  const [barsOn, setBarsOn] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setBarsOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} style={{ background: 'var(--bg)' }}>
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <Reveal>
          <div className="text-center">
            <p className="section-subtitle">My technical level</p>
            <h2 className="section-title mt-2">Skills</h2>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {skillGroups.map((group, gi) => {
            const Icon = groupIcons[group.icon];
            const open = isDesktop || openIndex === gi;
            return (
              <Reveal key={group.title} delay={gi * 100}>
                <div
                  className="h-full rounded-2xl p-6"
                  style={{ background: 'var(--card)', boxShadow: 'var(--shadow)' }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      if (!isDesktop) setOpenIndex(open ? -1 : gi);
                    }}
                    className="flex w-full items-center gap-4 text-left"
                    aria-expanded={open}
                  >
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                      style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
                    >
                      <Icon size={24} />
                    </span>
                    <span className="flex-1">
                      <span className="block text-base font-semibold" style={{ color: 'var(--ink)' }}>
                        {group.title}
                      </span>
                      <span className="block text-sm" style={{ color: 'var(--dim)' }}>
                        {group.subtitle}
                      </span>
                    </span>
                    <span
                      className="md:hidden"
                      style={{
                        color: 'var(--accent)',
                        transform: open ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.3s ease',
                      }}
                    >
                      <IconChevronDown size={20} />
                    </span>
                  </button>

                  <div className={`skill-group-body ${open ? 'open' : ''}`}>
                    <div className="skill-group-inner">
                      <div className="space-y-5 pt-6">
                        {group.skills.map((s) => (
                          <div key={s.name}>
                            <div className="mb-2 flex items-center justify-between text-sm">
                              <span className="font-medium" style={{ color: 'var(--ink)' }}>
                                {s.name}
                              </span>
                              <span style={{ color: 'var(--accent)' }}>{s.level}%</span>
                            </div>
                            <div className="skill-track">
                              <div
                                className="skill-fill"
                                style={{ width: open && barsOn ? `${s.level}%` : '0%' }}
                                role="progressbar"
                                aria-valuenow={s.level}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label={s.name}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

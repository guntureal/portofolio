export type ProjectCategory = 'AI' | 'Downloader' | 'Utilitas' | 'Konten';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  url: string;
  featured?: boolean;
  stats?: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: 'ai-agent',
    title: 'Asisten AI',
    description:
      'Chat AI fullscreen bertenaga Gemini dengan input suara, unggah file (foto, video, audio, PDF), text-to-speech, riwayat multi-sesi, dan mode gelap otomatis.',
    category: 'AI',
    tags: ['Gemini', 'Next.js', 'Cloudflare Workers', 'TTS'],
    url: 'https://www.gwntur.com/',
    featured: true,
    stats: [
      { label: 'Input', value: 'Teks · Suara · File' },
      { label: 'Model', value: 'Gemini' },
    ],
  },
  {
    id: 'tiktok-downloader',
    title: 'TikTok Downloader',
    description:
      'Unduh video dan foto TikTok tanpa watermark dalam kualitas asli. Dilengkapi cache hasil, fallback API, dan pratinjau pemutar.',
    category: 'Downloader',
    tags: ['Video', 'Tanpa Watermark', 'Cache'],
    url: 'https://www.gwntur.com/',
    featured: true,
    stats: [{ label: 'Format', value: 'MP4 · Foto' }],
  },
  {
    id: 'facebook-downloader',
    title: 'Facebook Downloader',
    description:
      'Unduh video dan Reels Facebook dalam kualitas HD. Mendukung tautan /share/ dan fb.watch dengan resolusi URL sisi server.',
    category: 'Downloader',
    tags: ['Video', 'Reels', 'HD'],
    url: 'https://www.gwntur.com/',
    stats: [{ label: 'Format', value: 'MP4 HD' }],
  },
  {
    id: 'instagram-downloader',
    title: 'Instagram Downloader',
    description:
      'Unduh video, Reels, dan foto Instagram tanpa aplikasi. Video HD dengan audio, foto carousel resolusi penuh.',
    category: 'Downloader',
    tags: ['Video', 'Reels', 'Foto HD'],
    url: 'https://www.gwntur.com/',
    stats: [{ label: 'Format', value: 'MP4 · Foto' }],
  },
  {
    id: 'stiker-whatsapp',
    title: 'Stiker WhatsApp',
    description:
      'Buat stiker WhatsApp sendiri di HP: pilih foto, potong, tambah teks, dan simpan ke Favorit. Tanpa aplikasi tambahan.',
    category: 'Utilitas',
    tags: ['WebP', 'Editor', 'Mobile'],
    url: 'https://www.gwntur.com/',
    stats: [{ label: 'Output', value: 'Stiker WebP' }],
  },
  {
    id: 'blog',
    title: 'Blog gwntur.com',
    description:
      'Tutorial dan tools praktis: 11+ artikel SEO tentang AI, downloader, dan panduan digital — ditulis dengan standar komponen Plus UI.',
    category: 'Konten',
    tags: ['SEO', 'Tutorial', 'Artikel'],
    url: 'https://www.gwntur.com/',
    featured: true,
    stats: [{ label: 'Artikel', value: '11+' }],
  },
];

export const projectFilters: ('Semua' | ProjectCategory)[] = [
  'Semua',
  'AI',
  'Downloader',
  'Utilitas',
  'Konten',
];

export interface Skill {
  name: string;
  level: number;
  category: 'Pengembangan' | 'SEO' | 'Konten' | 'Desain';
}

export const skills: Skill[] = [
  { name: 'HTML & CSS', level: 95, category: 'Pengembangan' },
  { name: 'On-Page SEO', level: 94, category: 'SEO' },
  { name: 'Technical SEO', level: 92, category: 'SEO' },
  { name: 'Writing', level: 95, category: 'Konten' },
  { name: 'UI/UX', level: 85, category: 'Desain' },
  { name: 'JavaScript / TypeScript', level: 88, category: 'Pengembangan' },
  { name: 'Content Strategy', level: 90, category: 'Konten' },
  { name: 'Cloudflare Workers', level: 84, category: 'Pengembangan' },
];

export interface Social {
  label: string;
  href: string;
  handle: string;
}

export const socials: Social[] = [
  { label: 'Facebook', href: 'https://www.facebook.com/gwntur', handle: 'gwntur' },
  { label: 'Instagram', href: 'https://www.instagram.com/gwntur', handle: '@gwntur' },
  { label: 'GitHub', href: 'https://github.com/guntureal', handle: 'guntureal' },
  { label: 'Telegram', href: 'https://t.me/gwntur', handle: 'gwntur' },
  { label: 'Email', href: 'mailto:mail@gwntur.com', handle: 'mail@gwntur.com' },
];

export const person = {
  name: 'Guntur Putra Hermanto',
  firstName: 'Guntur',
  roles: ['Web Developer', 'SEO Specialist', 'Content Strategist', 'UI/UX Designer'],
  bio: 'gwntur.com berawal dari kebiasaan ngeblog saya sejak 2018. Dari sekadar menulis, berkembang menjadi membangun tools web praktis — downloader, AI chat, hingga pembuat stiker — yang dipakai ribuan orang setiap hari.',
  location: 'Indonesia',
  email: 'mail@gwntur.com',
  website: 'https://www.gwntur.com/',
  since: 2018,
};

export const timeline = [
  { year: '2018', title: 'Memulai Ngeblog', text: 'Awal perjalanan ngeblog — menulis tutorial dan tips teknologi.' },
  { year: '2024', title: 'gwntur.com Lahir', text: 'Blog dipoles ulang dengan fokus tutorial praktis dan tools gratis.' },
  { year: '2025', title: 'Tools Downloader', text: 'TikTok, Facebook, dan Instagram Downloader dirilis dan dipakai ribuan pengguna.' },
  { year: '2026', title: 'AI & Utilitas', text: 'Asisten AI, Stiker WhatsApp, dan 11+ artikel SEO diterbitkan.' },
];

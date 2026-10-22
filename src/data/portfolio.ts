export type ProjectCategory = 'AI' | 'Downloader' | 'Utilitas' | 'Konten';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  url: string;
}

export const projects: Project[] = [
  {
    id: 'ai-agent',
    title: 'Asisten AI',
    description:
      'Chat AI fullscreen bertenaga Gemini dengan input suara, unggah file (foto, video, audio, PDF), text-to-speech, riwayat multi-sesi, dan mode gelap otomatis.',
    category: 'AI',
    tags: ['Gemini', 'Next.js', 'Cloudflare Workers', 'TTS'],
    url: 'https://www.gwntur.com/p/ai-chatbot.html',
  },
  {
    id: 'tiktok-downloader',
    title: 'TikTok Downloader',
    description:
      'Unduh video dan foto TikTok tanpa watermark dalam kualitas asli. Dilengkapi cache hasil, fallback API, dan pratinjau pemutar.',
    category: 'Downloader',
    tags: ['Video', 'Tanpa Watermark', 'Cache'],
    url: 'https://www.gwntur.com/p/tiktok-downloader.html',
  },
  {
    id: 'facebook-downloader',
    title: 'Facebook Downloader',
    description:
      'Unduh video dan Reels Facebook dalam kualitas HD. Mendukung tautan /share/ dan fb.watch dengan resolusi URL sisi server.',
    category: 'Downloader',
    tags: ['Video', 'Reels', 'HD'],
    url: 'https://www.gwntur.com/p/facebook-downloader.html',
  },
  {
    id: 'instagram-downloader',
    title: 'Instagram Downloader',
    description:
      'Unduh video, Reels, dan foto Instagram tanpa aplikasi. Video HD dengan audio, foto carousel resolusi penuh.',
    category: 'Downloader',
    tags: ['Video', 'Reels', 'Foto HD'],
    url: 'https://www.gwntur.com/p/instagram-downloader.html',
  },
  {
    id: 'stiker-whatsapp',
    title: 'Stiker WhatsApp',
    description:
      'Buat stiker WhatsApp sendiri di HP: pilih foto, potong, tambah teks, dan simpan ke Favorit. Tanpa aplikasi tambahan.',
    category: 'Utilitas',
    tags: ['WebP', 'Editor', 'Mobile'],
    url: 'https://www.gwntur.com/p/stiker-whatsapp.html',
  },
  {
    id: 'blog',
    title: 'Blog gwntur.com',
    description:
      'Tutorial dan tools praktis: 11+ artikel SEO tentang AI, downloader, dan panduan digital — ditulis dengan standar komponen Plus UI.',
    category: 'Konten',
    tags: ['SEO', 'Tutorial', 'Artikel'],
    url: 'https://www.gwntur.com/',
  },
];

export type SkillIcon = 'code' | 'search' | 'pen';

export interface SkillGroup {
  title: string;
  subtitle: string;
  icon: SkillIcon;
  skills: { name: string; level: number }[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend Developer',
    subtitle: 'Lebih dari 6 tahun',
    icon: 'code',
    skills: [
      { name: 'HTML & CSS', level: 90 },
      { name: 'JavaScript / TypeScript', level: 85 },
      { name: 'Next.js', level: 80 },
    ],
  },
  {
    title: 'SEO & Content',
    subtitle: 'Lebih dari 5 tahun',
    icon: 'search',
    skills: [
      { name: 'On-Page SEO', level: 90 },
      { name: 'Technical SEO', level: 85 },
      { name: 'Content Strategy', level: 80 },
    ],
  },
  {
    title: 'Tools & Backend',
    subtitle: 'Lebih dari 4 tahun',
    icon: 'pen',
    skills: [
      { name: 'Cloudflare Workers', level: 85 },
      { name: 'Gemini AI', level: 80 },
      { name: 'UI/UX', level: 75 },
    ],
  },
];

export interface Service {
  icon: SkillIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: 'code',
    title: 'Web Development',
    description: 'Membangun tools web & website cepat, responsif, SEO-friendly.',
  },
  {
    icon: 'search',
    title: 'SEO Optimization',
    description: 'Optimasi on-page, technical SEO, dan strategi konten untuk ranking Google.',
  },
  {
    icon: 'pen',
    title: 'Content & Design',
    description: 'Artikel SEO, thumbnail, dan desain UI yang menarik dan terstruktur.',
  },
];

export interface Social {
  label: string;
  href: string;
  handle: string;
  brand: 'facebook' | 'instagram' | 'github' | 'telegram' | 'email';
}

export const socials: Social[] = [
  { label: 'Facebook', href: 'https://www.facebook.com/gwntur', handle: 'gwntur', brand: 'facebook' },
  { label: 'Instagram', href: 'https://www.instagram.com/gwntur', handle: '@gwntur', brand: 'instagram' },
  { label: 'GitHub', href: 'https://github.com/guntureal', handle: 'guntureal', brand: 'github' },
  { label: 'Telegram', href: 'https://t.me/gwntur', handle: 'gwntur', brand: 'telegram' },
  { label: 'Email', href: 'mailto:mail@gwntur.com', handle: 'mail@gwntur.com', brand: 'email' },
];

export const person = {
  name: 'Guntur',
  firstName: 'Guntur',
  roles: ['Web Developer', 'SEO Specialist', 'Content Creator'],
  bio: 'gwntur.com berawal dari kebiasaan ngeblog saya sejak 2018. Dari sekadar menulis, berkembang menjadi membangun tools web praktis — downloader, AI chat, hingga pembuat stiker — yang dipakai ribuan orang setiap hari.',
  location: 'Indonesia',
  email: 'mail@gwntur.com',
  website: 'https://www.gwntur.com/',
  since: 2018,
};

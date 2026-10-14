import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import SideNav from '@/components/SideNav';
import Footer from '@/components/Footer';
import ThemeScript from '@/components/ThemeScript';
import { person } from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'Portofolio | Guntur',
  description:
    'Portofolio Guntur Putra Hermanto: Web Developer, SEO Specialist, Content Strategist, UI/UX Designer. Pembangun tools web gwntur.com — AI chat, downloader, dan utilitas gratis.',
  keywords: ['Guntur Putra Hermanto', 'gwntur', 'Web Developer Indonesia', 'SEO Specialist', 'Portofolio'],
  authors: [{ name: 'Guntur Putra Hermanto', url: 'https://www.gwntur.com/' }],
  icons: { icon: '/favicon.png' },
  openGraph: {
    type: 'website',
    url: 'https://portofolio.gwntur.com/',
    title: 'Portofolio | Guntur',
    description: 'Membangun tools web praktis dan konten SEO: AI chat, downloader, stiker WhatsApp.',
    siteName: 'gwntur.com',
    images: [{ url: '/favicon.png', width: 512, height: 512, alt: 'Logo gwntur.com' }],
  },
  twitter: { card: 'summary_large_image' },
  metadataBase: new URL('https://portofolio.gwntur.com/'),
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: person.name,
  jobTitle: 'Web Developer & SEO Specialist',
  url: person.website,
  sameAs: [
    'https://www.facebook.com/gwntur',
    'https://www.instagram.com/gwntur',
    'https://github.com/guntureal',
    'https://t.me/gwntur',
  ],
  knowsAbout: ['Web Development', 'SEO', 'Content Strategy', 'UI/UX Design', 'TypeScript', 'Next.js'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Rubik:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeScript />
        <Navbar />
        <SideNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

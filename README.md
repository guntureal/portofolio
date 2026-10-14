# Portofolio — Guntur Putra Hermanto

Website portofolio modern dibangun dengan **Next.js 14 + TypeScript + Tailwind CSS** (App Router).

## Fitur

- Hero dengan animasi ketik peran (Web Developer / SEO Specialist / Content Strategist / UI/UX Designer)
- Tentang + timeline perjalanan (2018 → 2026)
- Keahlian dengan bar animasi + filter kategori
- Proyek filterable (Semua / AI / Downloader / Utilitas / Konten)
- Kontak + tautan sosial (Facebook, Instagram, GitHub, Telegram, Email)
- Mode gelap/terang (sinkron preferensi sistem, tersimpan di localStorage)
- Animasi scroll via Intersection Observer (tanpa library berat)
- SEO: metadata, Open Graph, JSON-LD Person schema
- Responsif mobile-first; tanpa background card untuk section non-interaktif (hanya border tipis), sesuai preferensi pemilik
- Warna utama `#0066cc`

## Menjalankan lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Build statis

```bash
npm run build
```

Output di `out/` (static export, siap deploy ke Cloudflare Pages / GitHub Pages / Vercel).

## Struktur

```
src/
  app/            layout.tsx, page.tsx, globals.css
  components/     Navbar, Hero, About, Skills, Projects, Contact, Footer, ThemeScript
  data/           portfolio.ts (proyek, skill, sosial, timeline)
```

## Catatan

- Tautan proyek mengarah ke gwntur.com (halaman live tools). Ganti `url` di `src/data/portfolio.ts` bila URL halaman tool berubah.
- Avatar hero saat ini placeholder huruf "G". Ganti dengan foto profil di `src/components/Hero.tsx`.

'use client';

/**
 * Applies the stored / system color scheme before paint to avoid a flash.
 * Runs as an inline script in <body>; no React hydration involved.
 */
export default function ThemeScript() {
  const code = `(function(){try{var t=localStorage.getItem('gw-theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}

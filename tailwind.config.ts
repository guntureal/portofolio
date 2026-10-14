import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        vellum: {
          bg: '#F5F2EF',
          ink: '#2A2622',
          body: '#544D45',
          dim: '#8C8073',
          gold: '#D9A326',
          line: '#E5E0DC',
        },
      },
      fontFamily: {
        sans: ['Rubik', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;

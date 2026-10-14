import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1a73e8',
        primaryDark: '#1765cc',
        primaryLight: '#e8f0fe',
        googleRed: '#ea4335',
        googleYellow: '#fbbc04',
        googleGreen: '#34a853',
      },
      fontFamily: {
        sans: ['Google Sans', 'Segoe UI', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#A080FF',
          dark: '#6D28D9',
          light: '#A78BFA',
        },
        dark: {
          DEFAULT: '#000000',
          light: '#0A0A0A',
        },
      },
      fontFamily: {
        sans: ['var(--font-space)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config



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
        night: '#18120a',
        brown: '#2e1c0c',
        amber: '#d4720e',
        'amber-bright': '#e8850e',
        orange: '#f09020',
        gold: '#f0b030',
        cream: '#fdf6e8',
        warm: '#fff8ee',
        sage: '#2d5a3d',
        'sage-bright': '#3a7050',
        'sage-pale': '#e8f2eb',
        rust: '#b03a18',
        teal: '#1a5c58',
        text: '#1e140a',
        'text-mid': '#5a3c20',
        'text-soft': '#9a7050',
      },
      fontFamily: {
        fraunces: ['var(--font-fraunces)', 'serif'],
        nunito: ['var(--font-nunito)', 'sans-serif'],
      },
      animation: {
        'scroll-ticker': 'scroll 24s linear infinite',
        'pulse-dot': 'pulseDot 2s ease infinite',
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
      },
      keyframes: {
        scroll: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.7)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#221E2A',
          soft: '#5A5568',
        },
        surface: {
          DEFAULT: '#F6F4FB',
          mist: '#EFEAF9',
        },
        accent: {
          DEFAULT: '#5019AF',
          dark: '#3A1286',
          light: '#EDE6FA',
          50: '#F5F1FC',
        },
        line: '#E7E2F0',
      },
      fontFamily: {
        display: ['var(--font-cinzel)', 'ui-serif', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        soft: '0 2px 8px rgba(34, 30, 42, 0.04), 0 12px 32px rgba(34, 30, 42, 0.06)',
        lift: '0 8px 16px rgba(80, 25, 175, 0.10), 0 24px 48px rgba(80, 25, 175, 0.10)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
      },
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  plugins: [],
};

export default config;

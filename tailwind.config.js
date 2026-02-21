/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"Syne"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        bg: '#080c14',
        surface: '#0d1220',
        card: '#111827',
        border: 'rgba(255,255,255,0.06)',
        indigo: { 400: '#818cf8', 500: '#6366f1', 600: '#4f46e5' },
      },
      boxShadow: {
        glow: '0 0 30px rgba(99,102,241,0.25)',
        'glow-sm': '0 0 12px rgba(99,102,241,0.15)',
        card: '0 4px 32px rgba(0,0,0,0.5)',
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        'spin-rev': 'spin 12s linear infinite reverse',
        'float': 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.5s ease-out both',
        'fade-in': 'fadeIn 0.4s ease-out both',
        'shimmer': 'shimmer 1.6s linear infinite',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-12px)' } },
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
    },
  },
  plugins: [],
}

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Rolla primary — deep indigo/violet
        brand: {
          50:  '#eef0ff',
          100: '#e0e3ff',
          200: '#c7ccff',
          300: '#a5a8ff',
          400: '#867dff',
          500: '#6b56f7',
          600: '#5b3fe8',
          700: '#4c30cc',
          800: '#3f2aa4',
          900: '#372a82',
          950: '#21164c',
        },
        // Rolla accent — fresh "go" green
        accent: {
          50:  '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        },
        ink: {
          DEFAULT: '#0c0a1f',
          soft: '#3a3656',
          muted: '#6b6786',
        },
        cream: '#faf9ff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-mesh':
          'radial-gradient(60% 60% at 80% 0%, rgba(91,63,232,0.10) 0%, transparent 60%), radial-gradient(50% 50% at 0% 30%, rgba(16,185,129,0.08) 0%, transparent 55%)',
        'brand-gradient': 'linear-gradient(135deg, #4c30cc 0%, #5b3fe8 55%, #6b56f7 100%)',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(12,10,31,0.04), 0 8px 24px rgba(12,10,31,0.06)',
        lift: '0 12px 40px rgba(76,48,204,0.16)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out both',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config

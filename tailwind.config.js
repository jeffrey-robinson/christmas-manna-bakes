/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cranberry: {
          50: '#fff1f2',
          100: '#ffe1e4',
          200: '#ffc7cd',
          300: '#ff9ca7',
          400: '#fb6173',
          500: '#ef3350',
          600: '#d41a3c',
          700: '#b00f30',
          800: '#8f102e',
          900: '#6b0f26',
        },
        pine: {
          50: '#effaf4',
          100: '#d8f3e3',
          200: '#b4e7cc',
          300: '#82d4ab',
          400: '#4dba87',
          500: '#2a9d6b',
          600: '#1c7e55',
          700: '#176445',
          800: '#145039',
          900: '#0f3f2e',
          950: '#082a1e',
        },
        gold: {
          300: '#ffe08a',
          400: '#ffd166',
          500: '#f7b733',
          600: '#d9951a',
        },
        cream: '#fff8ee',
        cocoa: '#3b1d14',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        script: ['Pacifico', 'cursive'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        snow: {
          '0%': { transform: 'translate3d(0,-10vh,0)' },
          '100%': { transform: 'translate3d(40px,110vh,0)' },
        },
        spinSlow: {
          to: { transform: 'rotate(360deg)' },
        },
        marquee: {
          to: { transform: 'translateX(-50%)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.25', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' },
        },
        pop: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.35)' },
          '100%': { transform: 'scale(1)' },
        },
        toastIn: {
          from: { opacity: '0', transform: 'translate(-50%, 16px)' },
          to: { opacity: '1', transform: 'translate(-50%, 0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow': 'spinSlow 24s linear infinite',
        marquee: 'marquee 32s linear infinite',
        twinkle: 'twinkle 2.4s ease-in-out infinite',
        pop: 'pop 0.35s ease-out',
        'toast-in': 'toastIn 0.3s ease-out forwards',
      },
      boxShadow: {
        card: '0 18px 40px -18px rgba(107, 15, 38, 0.35)',
        glow: '0 0 60px rgba(247, 183, 51, 0.45)',
      },
    },
  },
  plugins: [],
};

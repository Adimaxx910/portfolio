/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#050A14',
          secondary: '#0B1324',
          card: '#0D1829',
          border: '#1A2942',
        },
        brand: {
          DEFAULT: '#1D6FE8',
          light: '#3D8EFF',
          dim: '#1255B8',
        },
        accent: {
          cyan: '#05E8C8',
          blue: '#60A5FA',
        },
        text: {
          primary: '#E2E8F0',
          secondary: '#8898AA',
          muted: '#4A6080',
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'slide-right': 'slideRight 0.5s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'grid-flow': 'gridFlow 20s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gridFlow: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(at 40% 20%, #1D6FE820 0px, transparent 50%), radial-gradient(at 80% 0%, #05E8C810 0px, transparent 50%), radial-gradient(at 0% 50%, #1D6FE815 0px, transparent 50%)',
      },
      boxShadow: {
        'brand': '0 0 30px -10px #1D6FE840',
        'brand-lg': '0 0 60px -15px #1D6FE850',
        'card': '0 4px 24px -8px rgba(0,0,0,0.5)',
        'glow': '0 0 20px #1D6FE830',
      },
    },
  },
  plugins: [],
};

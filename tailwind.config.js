/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        exo: ['Exo 2', 'sans-serif'],
      },
      colors: {
        'dark-bg': '#050714',
        'dark-surface': '#0c1022',
        'neon-blue': '#00c8ff',
        'neon-purple': '#9933ff',
        'neon-cyan': '#00ffe5',
        'dark-card': 'rgba(23, 25, 35, 0.7)',
        'glass': 'rgba(255, 255, 255, 0.1)',
      },
      borderWidth: {
        glow: '1px',
      },
      boxShadow: {
        neon: '0 0 5px #00c8ff, 0 0 20px rgba(0, 200, 255, 0.3)',
        'neon-purple': '0 0 5px #9933ff, 0 0 20px rgba(153, 51, 255, 0.3)',
        'neon-cyan': '0 0 5px #00ffe5, 0 0 20px rgba(0, 255, 229, 0.3)',
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00c8ff, 0 0 20px rgba(0, 200, 255, 0.3)' },
          '100%': { boxShadow: '0 0 10px #00c8ff, 0 0 30px rgba(0, 200, 255, 0.5)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 90deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-grid': "url('/grid-pattern.png')",
      },
    },
  },
  plugins: [],
};
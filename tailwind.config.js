/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#01081A',
          navy: '#03143A',
          blue: '#0D3FA5',
          sky: '#4F7EDD',
          ice: '#E2E9FF',
          steel: '#0B1F4A',
        },
      },
      backgroundImage: {
        'hex-grid':
          'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        glow: '0 0 40px rgba(13, 63, 165, 0.15)',
        'glow-lg': '0 0 60px rgba(13, 63, 165, 0.25)',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          black: '#000000',
          charcoal: '#1A1A1A',
          blue: '#0066FF',
          green: '#10B981',
          amber: '#F59E0B',
        },
      },
      backgroundImage: {
        'hex-grid':
          'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.07) 1px, transparent 0)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(0, 102, 255, 0.25)',
      },
    },
  },
  plugins: [],
};

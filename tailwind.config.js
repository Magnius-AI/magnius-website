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
          dark: '#050816',
          navy: '#0f172a',
          blue: '#3B82F6',
          purple: '#8B5CF6',
          teal: '#14B8A6',
        },
      },
      backgroundImage: {
        'hex-grid':
          'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        glow: '0 0 40px rgba(59, 130, 246, 0.15)',
        'glow-lg': '0 0 60px rgba(59, 130, 246, 0.2)',
      },
    },
  },
  plugins: [],
};

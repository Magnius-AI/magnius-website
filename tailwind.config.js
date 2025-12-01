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
          // Primary colors (derived from logo)
          indigo: '#3B3987',      // Logo primary - deep indigo-blue
          purple: '#4A4799',      // Lighter indigo for hovers

          // Dark backgrounds (simplified - was 5, now 2)
          dark: '#0A0A1A',        // Primary dark background
          navy: '#1A1A3A',        // Secondary dark / cards

          // Accent colors
          blue: '#4F5B9E',        // Medium accent
          sky: '#7B82B8',         // Light accent / highlights

          // Light colors
          ice: '#E8E9F4',         // Light borders, secondary text on dark
          mist: '#F4F4F9',        // Light backgrounds
          white: '#FAFAFF',       // Off-white

          // Legacy support (mapped to new palette)
          steel: '#1A1A3A',       // Alias for navy
        },
        // Semantic colors for easier usage
        primary: '#3B3987',
        secondary: '#4F5B9E',
        accent: '#7B82B8',
        surface: {
          dark: '#0A0A1A',
          DEFAULT: '#FAFAFF',
          muted: '#F4F4F9',
        },
        foreground: {
          DEFAULT: '#0A0A1A',
          muted: '#4A4799',
          light: '#E8E9F4',
        },
      },
      backgroundImage: {
        'hex-grid':
          'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // Brand gradients
        'brand-gradient': 'linear-gradient(135deg, #3B3987 0%, #4F5B9E 100%)',
        'brand-gradient-dark': 'linear-gradient(180deg, #0A0A1A 0%, #1A1A3A 100%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(59, 57, 135, 0.15)',
        'glow-lg': '0 0 60px rgba(59, 57, 135, 0.25)',
        'glow-indigo': '0 0 30px rgba(59, 57, 135, 0.3)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};

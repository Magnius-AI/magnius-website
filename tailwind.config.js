/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Dark backgrounds
        void: '#050508',
        night: '#0a0a0f',
        charcoal: '#141419',
        graphite: '#1c1c24',
        slate: {
          DEFAULT: '#2a2a35',
          light: '#3a3a48',
        },
        // Brand gradient colors
        cyan: {
          DEFAULT: '#00d4ff',
          light: '#5ce1ff',
          dark: '#00a8cc',
        },
        teal: {
          DEFAULT: '#00b8a9',
          light: '#4dd4c8',
          dark: '#008f82',
        },
        electric: {
          DEFAULT: '#0066ff',
          light: '#3385ff',
          dark: '#0052cc',
        },
        violet: {
          DEFAULT: '#7c3aed',
          light: '#9f67ff',
          dark: '#5b21b6',
        },
        // Text colors
        frost: '#e8eaed',
        silver: '#9ca3af',
        muted: '#6b7280',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, #00d4ff 0%, #00b8a9 50%, #0066ff 100%)',
        'gradient-glow': 'radial-gradient(ellipse at center, rgba(0, 212, 255, 0.15) 0%, transparent 70%)',
        'grid-pattern': `
          linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(0, 212, 255, 0.25)',
        'glow-md': '0 0 40px rgba(0, 212, 255, 0.3)',
        'glow-lg': '0 0 60px rgba(0, 184, 169, 0.35)',
        'glow-xl': '0 0 100px rgba(0, 102, 255, 0.4)',
        'glow-cyan': '0 0 30px rgba(0, 212, 255, 0.5)',
        'glow-teal': '0 0 30px rgba(0, 184, 169, 0.5)',
        'glow-electric': '0 0 30px rgba(0, 102, 255, 0.5)',
        'inner-glow': 'inset 0 0 30px rgba(0, 212, 255, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'reveal-up': 'reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'reveal-down': 'reveal-down 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'draw-line': 'draw-line 1.5s ease-out forwards',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'reveal-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'reveal-down': {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'draw-line': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 212, 255, 0.6)' },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      blur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

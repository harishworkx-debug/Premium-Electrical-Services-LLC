/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4fa',
          100: '#d9e2f1',
          200: '#b3c5e3',
          300: '#8098c9',
          400: '#4f6fa8',
          500: '#345187',
          600: '#28426c',
          700: '#1f3454',
          800: '#15243b',
          900: '#0d1830',
          950: '#070e1f',
        },
        yellow: {
          50: '#fffdf0',
          100: '#fff9d6',
          200: '#fff0a8',
          300: '#ffe470',
          400: '#ffd31f',
          500: '#f5b800',
          600: '#d99a00',
          700: '#a86f00',
          800: '#6b4700',
          900: '#3d2800',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glow-yellow': '0 0 24px rgba(245, 184, 0, 0.35)',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f6ff',
          100: '#e0edfe',
          200: '#bae0fd',
          300: '#7cc4fa',
          400: '#38a3f8',
          500: '#1d4ed8', // Crisp royal navy blue
          600: '#1b365d', // Deep rich navy blue matching the shirt
          700: '#152c4d', // Dark navy
          800: '#0e1e36',
          900: '#091322',
          DEFAULT: '#1b365d',
        },
        dark: {
          950: '#090d16',
          900: '#0d131f', // Dark navy-tinted container background
          850: '#121929',
          800: '#172238',
          700: '#212f4d',
          600: '#33446b',
        },
        surface: {
          light: '#f8fafc',
          card: '#ffffff',
          subtle: '#f1f5f9',
          border: '#e2e8f0',
        },
      },
      fontFamily: {
        sans: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'glow-blue': '0 0 35px -5px rgba(29, 78, 216, 0.4)',
        'glow-orange': '0 0 35px -5px rgba(27, 54, 93, 0.4)', // alias for backwards safety
        'glow-soft': '0 12px 32px -8px rgba(0, 0, 0, 0.08)',
        'dark-card': '0 20px 40px -15px rgba(0, 0, 0, 0.45)',
      },
      borderRadius: {
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

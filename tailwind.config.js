/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '70px',
      '7xl': '100px',
      '9xl': '200px'
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-7px)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1.5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
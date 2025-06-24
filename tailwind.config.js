/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#006A71',
          dark: '#60A5FA'
        },
        secondary: {
          light: '#48A6A7',
          dark: '#93C5FD'
        },
        background: {
          light: '#FFFFFF',
          dark: '#0F172A'
        },
        text: {
          light: '#1E293B',
          dark: '#E2E8F0'
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'heritage-red': '#C8553D',
        'heritage-blue': '#2C3E50',
        'heritage-gold': '#D4AF37',
        'heritage-cream': '#F5F5DC',
        'heritage-green': '#4A5D23',
        'heritage-light': '#F8F4E8',
      },
      fontFamily: {
        'display': ['Noto Serif SC', 'serif'],
        'body': ['Noto Sans SC', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
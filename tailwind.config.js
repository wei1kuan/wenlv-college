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
        'heritage-primary': '#8B2E2E',
        'heritage-secondary': '#A04040',
        'heritage-accent': '#E8C547',
        'heritage-dark': '#3A1010',
        'heritage-light': '#F0EAE3',
        'heritage-cream': '#F5F0EB',
        'heritage-white': '#FFFFFF',
        'heritage-gold': '#E8C547',
        'heritage-lacquer': '#5C1818',
        'heritage-ink': '#200A0A',
      },
      fontFamily: {
        'display': ['Noto Serif SC', 'serif'],
        'body': ['Noto Sans SC', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
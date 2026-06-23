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
        'heritage-primary': '#3662a7',
        'heritage-secondary': '#3B82F6',
        'heritage-accent': '#60A5FA',
        'heritage-dark': '#0F172A',
        'heritage-light': '#E0F2FE',
        'heritage-cream': '#F0F9FF',
        'heritage-white': '#FFFFFF',
      },
      fontFamily: {
        'display': ['Noto Serif SC', 'serif'],
        'body': ['Noto Sans SC', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "greenColor": "#68a77c",
        "beigeColor": "#e9e6df",
        "shadowColor": "#f7f8f9",
        "greenTextColor": "#355840"
      }
    },
  },
  plugins: [],
}


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
        "greenTextColor": "#355840",
        "socialPhobia": "#e5e4df",
        "depression": "#e9d2d2",
        "anxiety": "#b5bfd6",
        "sleepImprovement" : "#d7c4dd",
        "hyperactivity": "#c3ddba",
        "anxiety2": "#d9bda9",
        "blackColor" : "#161616"
      }
    },
  },
  plugins: [],
}


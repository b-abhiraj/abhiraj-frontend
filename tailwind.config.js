/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1725c5',
      },
      fontFamily: {
        Kanit: ["Kanit", "sans-serif"],
        Roboto: ["Roboto Slab", "serif"],
        Roboto_mono: ["Roboto Mono", "monospace"]
      },
    },
    plugins: [],
  }
}
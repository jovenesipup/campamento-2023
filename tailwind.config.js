/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: '2rem',
    },
    colors:{
      'light-green': '#63c0a5',
      'dark-lila': '#0a1a33'
    }
  },
  plugins: [],
}

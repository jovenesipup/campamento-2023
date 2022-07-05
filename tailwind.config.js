/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: '1.5rem',
    },
    colors:{
      transparent: 'transparent',
      'light-green': '#63c0a5',
      'dark-lila': '#0a1a33',
      'slate': {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569'
      },
      'light-purple': '#ae07a8'
    }
  },
  plugins: [],
}

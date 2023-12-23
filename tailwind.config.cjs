/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        OO1ED3: '#001ED3',
        '41444B': '#41444B',
        D4D7DD: '#D4D7DD',
        '00215B': '#00215B',
        D2153D: '#D2153D',
        BC701C: '#BC701C',
        EBECEE: '#EBECEE',
        '16213E': '#16213E',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/office-building.webp')",
      },
    },
    fontFamily: {
      Lato: ['Lato', 'sans-serif', 'system-ui'],
      // Kanit: ['Kanit', 'sans-serif', 'system-ui'],
    },
  },
  plugins: [],
};

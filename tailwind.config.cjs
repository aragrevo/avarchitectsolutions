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
      },
      backgroundImage: {
        'hero-pattern': "url('/images/office-building.webp')",
      },
    },
    fontFamily: {
      Lato: ['Lato', 'sans-serif', 'system-ui'],
      Kanit: ['Kanit', 'sans-serif', 'system-ui'],
    },
  },
  plugins: [],
};

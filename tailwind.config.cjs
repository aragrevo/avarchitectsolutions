/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        OO1ED3: '#001ED3',
        '41444B': '#41444B',
      },
    },
    fontFamily: {
      Lato: ['Lato', 'sans-serif', 'system-ui'],
      Kanit: ['Kanit', 'sans-serif', 'system-ui'],
    },
  },
  plugins: [],
};

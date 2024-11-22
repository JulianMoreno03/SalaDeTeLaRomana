import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        Oswald: ['Oswald Variable', ...defaultTheme.fontFamily.sans],
        roboto: ['roboto', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
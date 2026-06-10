import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['JetBrains Mono', ...defaultTheme.fontFamily.sans],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: {
          '50': '#f9f9f9',
          '100': '#f0f0f0',
          '200': '#e0e0e0',
          '300': '#d4d4d4',
          '400': '#b8b8b8',
          '500': '#999999',
          '600': '#808080',
          '700': '#666666',
          '800': '#4d4d4d',
          '900': '#333333',
        },
      },
    },
  },
  plugins: [],
};

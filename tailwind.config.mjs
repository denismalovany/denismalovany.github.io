import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  theme: {
    extend: {
      fontFamily: {
        display: ['Lexend', ...defaultTheme.fontFamily.sans],
        // serif: deprecated in 2.x — see F-21. Lexend covers both roles.
        // serif: ['Lexend', ...defaultTheme.fontFamily.sans],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1.3' }],
        'sm-plus': ['0.8125rem', {}],
      },
      lineHeight: {
        tight: '1.1',
      },
      letterSpacing: {
        chip: '0.02em',
      },
      colors: {
        accent: {
          50: '#f6f5f7',
          100: '#ecebef',
          200: '#dbd7e0',
          300: '#c5c0cf',
          400: '#b0a9bd',
          500: '#9b96a8',
          600: '#7d7890',
          700: '#6e6980',
          800: '#5e5a6e',
          900: '#42404d',
          // 950: unused — see F-22
          // 950: '#28262e',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        success: {
          500: '#16a34a',
        },
        black: '#0a0a0a',
        white: '#fafafa',
      },
      zIndex: {
        header: '60',
        overlay: '50',
        // back-to-top + site-header continue to use raw values where needed
        'back-to-top': '900',
        'site-header': '1000',
      },
      transitionDuration: {
        fast: '150ms',
        normal: '300ms',
        slow: '500ms',
      },
      boxShadow: {
        accent: '0 4px 14px rgba(155, 150, 168, 0.28)',
        'accent-lg': '0 10px 40px rgba(155, 150, 168, 0.35)',
      },
      borderRadius: {
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
};

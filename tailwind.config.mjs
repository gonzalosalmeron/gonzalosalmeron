/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        blink: 'blink 0.5s'
      },
      blink: {
        '0%': {
          opacity: '0'
        },
        '100%': {
          opacity: '1'
        }
      },
      colors: {
        'gs-green': '#00FFD1'
      }
    }
  },
  plugins: []
}

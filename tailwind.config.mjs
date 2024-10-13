/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        courier: ['Courier Prime', ...defaultTheme.fontFamily.mono]
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 22s linear infinite',
        blink: 'blink 1.2s ease-in-out infinite'
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' }
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 }
        }
      }
    }
  },
  plugins: []
}

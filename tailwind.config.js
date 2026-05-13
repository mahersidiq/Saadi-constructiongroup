/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#1B3A5C',
        gold: '#C9952A',
        'gold-light': '#E8C880',
        'gold-muted': '#9B6F1E',
        charcoal: '#0D0B08',
        obsidian: '#080706',
        'warm-black': '#141210',
        'dark-surface': '#1A1816',
        'dark-card': '#211F1C',
        'light-gray': '#F5F0E8',
        'mid-gray': '#E8E0D4',
        cream: '#FAF7F2',
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'Georgia', 'serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Montserrat', 'sans-serif'],
        script: ['Great Vibes', 'cursive'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

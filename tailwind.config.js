/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#C9952A',
        'gold-light': '#E8C880',
        cream: '#FAF7F3',
        'cream-dark': '#F0EBE3',
        stone: '#E8E0D5',
        'warm-black': '#1C1915',
        'warm-dark': '#2A2218',
        'warm-mid': '#7A6E60',
        'warm-light': '#B5A898',
        navy: '#1B3A5C',
        charcoal: '#1C1915',
        obsidian: '#141210',
        'dark-card': '#252018',
        'light-gray': '#F5F0E8',
        'mid-gray': '#E5DDD0',
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Lato', 'sans-serif'],
        script: ['Great Vibes', 'cursive'],
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

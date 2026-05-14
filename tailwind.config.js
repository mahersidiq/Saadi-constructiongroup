/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'luxe-black':   '#0d0c0a',
        'luxe-bg':      '#0d0c0a',
        'luxe-surface': '#171512',
        'luxe-card':    '#171512',
        'luxe-lift':    '#241b12',
        gold:           '#b88a4a',
        'gold-dim':     'rgba(200,155,90,0.35)',
        'gold-hover':   '#e7c797',
        'text-primary': '#fff8ed',
        'text-muted':   '#d7c8b3',
        'text-faint':   '#a89478',
        // legacy aliases used by other pages
        navy:           '#6f563f',
        charcoal:       '#17140f',
        obsidian:       '#0d0c0a',
        cream:          '#fbf6ed',
        'light-gray':   '#eee5d8',
        'mid-gray':     '#d7c8b3',
        'warm-black':   '#0d0c0a',
        'warm-dark':    '#fff8ed',
        'warm-mid':     '#d7c8b3',
        'dark-card':    '#171512',
      },
      fontFamily: {
        display: ['Bebas Neue', 'Impact', 'sans-serif'],
        heading: ['Cormorant Garamond', 'Georgia', 'serif'],
        body:    ['Inter', 'sans-serif'],
        script:  ['Great Vibes', 'cursive'],
        sans:    ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

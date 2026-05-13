/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'luxe-black':   '#050505',
        'luxe-bg':      '#0A0A0A',
        'luxe-surface': '#111111',
        'luxe-card':    '#0D0D0D',
        'luxe-lift':    '#161616',
        gold:           '#C89B5A',
        'gold-dim':     'rgba(200,155,90,0.35)',
        'gold-hover':   '#D4AF6E',
        'text-primary': '#F5F5F5',
        'text-muted':   '#B8B8B8',
        'text-faint':   '#666666',
        // legacy aliases used by other pages
        navy:           '#1B3A5C',
        charcoal:       '#111111',
        obsidian:       '#050505',
        cream:          '#FAF7F3',
        'light-gray':   '#F5F0E8',
        'mid-gray':     '#E5DDD0',
        'warm-black':   '#0A0A0A',
        'warm-dark':    '#F5F5F5',
        'warm-mid':     '#B8B8B8',
        'dark-card':    '#0D0D0D',
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

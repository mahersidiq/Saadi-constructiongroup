/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'luxe-black':   '#1c1917',
        'luxe-bg':      '#1c1917',
        'luxe-surface': '#24201d',
        'luxe-card':    '#24201d',
        'luxe-lift':    '#2c2723',
        gold:           '#8c6d46',
        'gold-dim':     'rgba(140,109,70,0.35)',
        'gold-hover':   '#dfc8a7',
        'text-primary': '#fffdf8',
        'text-muted':   '#dfd7ca',
        'text-faint':   '#a89f91',
        // Unified architectural monograph palette aliases
        navy:           '#8c6d46',
        charcoal:       '#1c1917',
        obsidian:       '#141210',
        cream:          '#fbf9f5',
        'light-gray':   '#f6f3ec',
        'mid-gray':     '#dfd7ca',
        'warm-black':   '#1c1917',
        'warm-dark':    '#fffdf8',
        'warm-mid':     '#dfd7ca',
        bone:           '#fbf9f5',
        'warm-chalk':   '#f6f3ec',
        bronze:         '#8c6d46',
        limestone:      '#dfd7ca',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        heading: ['Cormorant Garamond', 'Georgia', 'serif'],
        body:    ['Plus Jakarta Sans', 'sans-serif'],
        sans:    ['Plus Jakarta Sans', 'sans-serif'],
        mono:    ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

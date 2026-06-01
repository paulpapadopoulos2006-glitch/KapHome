import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: { 50:'#FDFCFA', 100:'#FAF7F2', 200:'#F0EDE8', DEFAULT:'#FAF7F2' },
        navy:  { 50:'#E8EDF5', 500:'#2D4A7A', 700:'#1A2E52', 900:'#0F2137', DEFAULT:'#0F2137' },
        gold:  { 100:'#F5E8D8', 300:'#E0B882', 500:'#C47A3A', 700:'#9E5E28', DEFAULT:'#C47A3A' },
        stone: { 200:'#D4C9BB', 400:'#A89882', 600:'#8B7355', DEFAULT:'#8B7355' },
        border:'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring:  'hsl(var(--ring))',
        background:'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary:    { DEFAULT:'hsl(var(--primary))',    foreground:'hsl(var(--primary-foreground))' },
        secondary:  { DEFAULT:'hsl(var(--secondary))',  foreground:'hsl(var(--secondary-foreground))' },
        muted:      { DEFAULT:'hsl(var(--muted))',      foreground:'hsl(var(--muted-foreground))' },
        accent:     { DEFAULT:'hsl(var(--accent))',     foreground:'hsl(var(--accent-foreground))' },
        card:       { DEFAULT:'hsl(var(--card))',       foreground:'hsl(var(--card-foreground))' },
        popover:    { DEFAULT:'hsl(var(--popover))',    foreground:'hsl(var(--popover-foreground))' },
        destructive:{ DEFAULT:'hsl(var(--destructive))',foreground:'hsl(var(--destructive-foreground))' },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)', md: 'calc(var(--radius) - 2px)', sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': { from:{ height:'0' }, to:{ height:'var(--radix-accordion-content-height)' } },
        'accordion-up':   { from:{ height:'var(--radix-accordion-content-height)' }, to:{ height:'0' } },
        fadeUp: { from:{ opacity:'0', transform:'translateY(24px)' }, to:{ opacity:'1', transform:'translateY(0)' } },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up':   'accordion-up 0.2s ease-out',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config

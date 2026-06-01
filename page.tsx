@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background:         40 30% 97%;
    --foreground:         210 40% 8%;
    --card:               40 25% 99%;
    --card-foreground:    210 40% 8%;
    --popover:            0 0% 100%;
    --popover-foreground: 210 40% 8%;
    --primary:            210 55% 14%;
    --primary-foreground: 40 30% 97%;
    --secondary:          30 25% 93%;
    --secondary-foreground: 210 40% 8%;
    --muted:              30 15% 93%;
    --muted-foreground:   25 20% 45%;
    --accent:             25 55% 48%;
    --accent-foreground:  0 0% 100%;
    --destructive:        0 84% 60%;
    --destructive-foreground: 0 0% 100%;
    --border:             30 20% 88%;
    --input:              30 20% 88%;
    --ring:               25 55% 48%;
    --radius:             0.75rem;
  }
  * { @apply border-border; }
  body {
    @apply bg-cream text-navy font-sans antialiased;
    font-feature-settings: "kern" 1, "liga" 1;
  }
  h1, h2, h3, h4 { @apply font-serif; }
}

/* react-day-picker range styles */
.rdp-root {
  --rdp-accent-color: #C47A3A;
  --rdp-accent-background-color: #F5E8D8;
}

/* Custom scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #F0EDE8; }
::-webkit-scrollbar-thumb { background: #A89882; border-radius: 999px; }

html { scroll-behavior: smooth; }

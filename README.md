# Juraan Portfolio

A refined digital gallery showcasing sculpture and drawing works.

**Built by [910.studio](https://910.studio)**

---

## Project Overview

Premium portfolio website for a renowned sculptor and artist, featuring mythological bronze sculptures and drawings. The site emphasizes gallery-quality presentation with a dark, refined aesthetic that lets the artwork take center stage.

### Key Features

- Responsive multi-page architecture
- High-resolution image optimization
- Elegant lightbox gallery system
- Video content integration
- Contact inquiry system
- Mobile-optimized experience

---

## Technical Stack

- **SvelteKit** - Modern static site generation with optimal performance
- **Tailwind CSS** - Utility-first styling system
- **Svelte Transitions** - Built-in smooth animations
- **Vercel** - Static deployment and hosting

---

## Brand Identity

### Core Concept

**"Let the bronze speak"**

Museum-quality presentation with dark gallery aesthetics. Every design decision serves to highlight the sculptures, not compete with them.

### Design Principles

1. **Breathing Room** - Generous whitespace to let each piece command attention
2. **Image First** - Typography and UI serve the art, never overshadow it
3. **Refined Interactions** - Smooth, intentional, never aggressive
4. **Gallery Standard** - Professional presentation matching high-end gallery sites

---

## Color Palette

### Backgrounds
```css
--bg-primary: #0a0a0a      /* Almost black - main canvas */
--bg-secondary: #141414     /* Card backgrounds, sections */
--bg-elevated: #1a1a1a      /* Hover states, modals */
```

### Bronze Accents
```css
--bronze-light: #C9A961     /* Highlights, hover states */
--bronze-mid: #B8860B        /* Links, active states */
--bronze-dark: #8B6914       /* Borders, subtle accents */
```

### Text Hierarchy
```css
--text-primary: #e5e5e5      /* Main text - off-white */
--text-secondary: #a3a3a3    /* Secondary information */
--text-tertiary: #737373     /* Captions, metadata */
--text-muted: #525252        /* Footer, disabled states */
```

### Borders & Dividers
```css
--border-subtle: #262626     /* Subtle section divisions */
--border-medium: #404040     /* Cards, components */
```

### Why These Colors

- **Deep blacks** - Gallery wall effect, lets bronze sculptures pop
- **Off-white text** - Easier on eyes than pure white, more refined
- **Bronze accents** - Echo sculpture material without competing
- **Muted grays** - Professional hierarchy without distraction

---

## Typography

### Font Pairing

**Headings (Juraan, Page Titles)**
```css
font-family: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;
```
- Elegant serif for prestige and timelessness
- Museum catalog aesthetic
- Perfect for artist branding

**Body Text (Descriptions, Bio)**
```css
font-family: 'Inter', 'SF Pro', system-ui, sans-serif;
```
- Clean, highly readable sans-serif
- Modern but neutral
- Excellent at all sizes

**Metadata (Optional - Dates, Dimensions)**
```css
font-family: 'JetBrains Mono', 'Courier New', monospace;
font-size: 0.75rem;
text-transform: uppercase;
letter-spacing: 0.1em;
```
- Technical precision for artwork details
- Gallery label aesthetic

### Type Scale

```css
/* Hero/Juraan */
--text-hero: clamp(3rem, 8vw, 6rem);      /* 48-96px responsive */
font-weight: 400;  /* Light weight for elegance */
line-height: 1.1;

/* Page Headings */
--text-h1: clamp(2.5rem, 5vw, 4rem);      /* 40-64px */
font-weight: 400;
line-height: 1.2;

/* Section Headings */
--text-h2: clamp(1.75rem, 3vw, 2.5rem);   /* 28-40px */
font-weight: 500;
line-height: 1.3;

/* Sculpture Titles */
--text-h3: clamp(1.25rem, 2vw, 1.75rem);  /* 20-28px */
font-weight: 500;
line-height: 1.4;

/* Body Text */
--text-body: clamp(1rem, 1.5vw, 1.125rem); /* 16-18px */
font-weight: 400;
line-height: 1.7;

/* Small Text (Captions, Metadata) */
--text-small: clamp(0.875rem, 1vw, 1rem);  /* 14-16px */
font-weight: 400;
line-height: 1.6;

/* Tiny (Footer, Copyright) */
--text-tiny: 0.75rem;                       /* 12px */
font-weight: 400;
line-height: 1.5;
```

---

## Spacing System

```css
/* Consistent 8px base rhythm */
--space-xs: 0.5rem;    /* 8px */
--space-sm: 1rem;      /* 16px */
--space-md: 1.5rem;    /* 24px */
--space-lg: 2rem;      /* 32px */
--space-xl: 3rem;      /* 48px */
--space-2xl: 4rem;     /* 64px */
--space-3xl: 6rem;     /* 96px */
--space-4xl: 8rem;     /* 128px */

/* Section spacing */
--section-padding-mobile: 3rem;   /* 48px */
--section-padding-desktop: 6rem;  /* 96px */

/* Container constraints */
--container-max: 1400px;
```

---

## Component Styles

### Navigation
```css
/* Minimal, floating nav with backdrop blur */
background: rgba(10, 10, 10, 0.8);
backdrop-filter: blur(12px);
border-bottom: 1px solid var(--border-subtle);

/* Nav links */
font-family: Inter, sans-serif;
font-size: 0.875rem;
text-transform: uppercase;
letter-spacing: 0.1em;
color: var(--text-secondary);

/* Active/hover state */
color: var(--bronze-light);
transition: color 0.3s ease;
```

### Sculpture Cards
```css
/* Card container */
background: var(--bg-secondary);
border: 1px solid var(--border-subtle);
border-radius: 0; /* Sharp edges for gallery aesthetic */

/* Image wrapper */
aspect-ratio: 4/5; /* Portrait orientation for sculptures */
overflow: hidden;

/* Hover state */
border-color: var(--bronze-dark);
transform: translateY(-4px);
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

### Buttons & Links
```css
/* Primary action button */
background: transparent;
border: 1px solid var(--bronze-mid);
color: var(--bronze-light);
padding: 0.75rem 1.5rem;
transition: all 0.3s ease;

/* Button hover */
background: var(--bronze-mid);
color: var(--bg-primary);

/* Text links */
color: var(--text-secondary);
text-decoration: none;
border-bottom: 1px solid transparent;
transition: all 0.3s ease;

/* Link hover */
color: var(--bronze-light);
border-bottom-color: var(--bronze-light);
```

### Lightbox
```css
/* Overlay */
background: rgba(0, 0, 0, 0.95);
backdrop-filter: blur(8px);

/* Image container */
max-width: 90vw;
max-height: 90vh;
object-fit: contain;

/* Close button */
position: fixed;
top: 2rem;
right: 2rem;
color: var(--text-primary);
font-size: 2rem;
```

---

## Layout Patterns

### Hero Section Structure
```
┌─────────────────────────────────────┐
│                                     │
│             JURAAN                  │  ← Huge serif heading
│                                     │
│    ┌─────────────────────────┐     │
│    │                         │     │
│    │   Featured Sculpture    │     │  ← Full-bleed image
│    │                         │     │
│    └─────────────────────────┘     │
│                                     │
│    Sculptor · Bronze · Mythology   │  ← Subtitle/tagline
│                                     │
└─────────────────────────────────────┘
```

### Gallery Grid Layout
```
Desktop: 3 columns with 32px gap
Tablet:  2 columns with 24px gap  
Mobile:  1 column with 16px gap

Consistent aspect ratio per row
Masonry effect optional for varied heights
```

### Page Transitions
```css
/* Smooth page transitions */
duration: 600ms;
easing: cubic-bezier(0.4, 0, 0.2, 1);

/* Fade in on scroll */
opacity: 0 → 1;
transform: translateY(20px) → translateY(0);
```

---

## Tailwind Configuration

```js
// tailwind.config.js
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0a0a0a',
          secondary: '#141414',
          elevated: '#1a1a1a'
        },
        bronze: {
          light: '#C9A961',
          DEFAULT: '#B8860B',
          dark: '#8B6914'
        },
        text: {
          primary: '#e5e5e5',
          secondary: '#a3a3a3',
          tertiary: '#737373',
          muted: '#525252'
        },
        border: {
          subtle: '#262626',
          medium: '#404040'
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace']
      },
      fontSize: {
        hero: 'clamp(3rem, 8vw, 6rem)',
        h1: 'clamp(2.5rem, 5vw, 4rem)',
        h2: 'clamp(1.75rem, 3vw, 2.5rem)',
        h3: 'clamp(1.25rem, 2vw, 1.75rem)'
      },
      spacing: {
        section: 'clamp(3rem, 8vw, 6rem)'
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
};
```

---

## Project Structure

```
artist-portfolio/
├── src/
│   ├── routes/
│   │   ├── +page.svelte              # Home - hero sculpture
│   │   ├── +layout.svelte            # Navigation + Footer wrapper
│   │   ├── gallery/
│   │   │   └── +page.svelte          # Sculpture gallery grid
│   │   ├── about/
│   │   │   └── +page.svelte          # Artist biography
│   │   └── contact/
│   │       └── +page.svelte          # Contact inquiry form
│   │
│   ├── lib/
│   │   ├── components/
│   │   │   ├── Navigation.svelte     # Main navigation
│   │   │   ├── Footer.svelte         # Footer with 910studio credit
│   │   │   ├── SculptureCard.svelte  # Gallery item card
│   │   │   ├── Lightbox.svelte       # Full-screen image viewer
│   │   │   └── VideoEmbed.svelte     # Video player component
│   │   │
│   │   ├── data/
│   │   │   └── sculptures.ts         # Sculpture data array
│   │   │
│   │   └── styles/
│   │       └── app.css               # Global styles + Tailwind
│   │
│   └── app.html                      # Base HTML template
│
├── static/
│   ├── sculptures/                   # Optimized sculpture images
│   ├── videos/                       # Video content
│   └── og-image.jpg                  # Social sharing image
│
├── svelte.config.js                  # SvelteKit configuration
├── tailwind.config.js                # Tailwind customization
├── package.json                      # Dependencies
└── README.md                         # This file
```

---

## Development

### Setup
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
Server runs at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Environment Variables
```
# .env (if needed for contact form)
VITE_CONTACT_EMAIL=artist@email.com
```

---

## Content Requirements

### Images
- **Format:** JPG or PNG
- **Resolution:** Minimum 2000px on longest side
- **Optimization:** Compress without visible quality loss
- **Naming:** Descriptive filenames (sculpture-name-2024.jpg)

### Videos
- **Format:** MP4 (H.264)
- **Resolution:** 1920x1080 or 3840x2160
- **Duration:** Keep under 2 minutes for optimal loading
- **Hosting:** YouTube unlisted or Vimeo Pro recommended

### Text Content
- **Artist Bio:** 200-400 words
- **Sculpture Descriptions:** 50-100 words each
- **Artist Statement:** 100-200 words (optional)

---

## Design References

### Visual Inspiration
- [Dashi Namdakov](https://dashi-art.com) - Primary reference
- Museum digital collections (Met, MoMA)
- High-end gallery websites (Gagosian, White Cube)
- Editorial photography portfolios

### NOT Like
- Colorful startup landing pages
- Social media aesthetics
- Dribbble UI showcases
- Generic WordPress templates

---

## Performance Targets

- **Lighthouse Score:** 95+ across all metrics
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.5s
- **Image Optimization:** Next-gen formats (WebP) with fallbacks
- **Bundle Size:** < 100KB gzipped JavaScript

---

## Accessibility

- **WCAG 2.1 AA** compliance minimum
- **Keyboard Navigation:** Full site navigable without mouse
- **Screen Reader:** Proper ARIA labels and semantic HTML
- **Color Contrast:** Minimum 4.5:1 for body text
- **Focus States:** Visible on all interactive elements

---

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari iOS 13+
- Chrome Android (last 2 versions)

---

## Quality Checklist

Before deployment, verify:

- ✅ All images optimized and loading properly
- ✅ Video content plays on mobile and desktop
- ✅ Navigation works on all screen sizes
- ✅ Typography hierarchy clear and readable
- ✅ Hover states smooth and intentional
- ✅ Lightbox opens/closes correctly
- ✅ Contact form submits successfully
- ✅ Footer credits link to 910.studio
- ✅ Mobile responsive without layout breaks
- ✅ Dark mode looks consistent
- ✅ No console errors
- ✅ SEO meta tags populated
- ✅ Social sharing image set
- ✅ 404 page styled

---

## Credits

**Design & Development:** [910studio](https://910.studio)  
**Artist:** Juraan  
**Photography:** [Photographer Credit]  
**Launch Date:** [Date]

---

## License

© 2025 Juraan. All artwork copyright the artist.  
Website code © 2025 910studio. All rights reserved.

---

## Contact

For website updates or technical support:  
**910studio**  
Email: hello@910.studio  
Web: https://910.studio

For artwork inquiries:  
**Juraan**  
Email: [artist@email.com]  
Facebook: [facebook.com/artistname]

---

*Built with precision and care by 910studio - Creative web experiences*

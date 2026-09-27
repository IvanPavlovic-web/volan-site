# Servis Letvi Volana Banja Luka

Single-page marketing website for a steering rack repair service based in Banja Luka, Bosnia and Herzegovina. Built with React 19, TypeScript, and Vite 7; deployed to GitHub Pages behind the custom domain `reparacija-servis-letvi-volana.com`.

The site is a conversion-oriented landing page: it introduces the service, demonstrates recent work through a scroll-driven gallery, explains the repair workflow, presents customer reviews, and routes the visitor to a phone call or a location view.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Language | TypeScript 5.9 |
| Build Tool | Vite 7 |
| Styling | Tailwind CSS 3.4 |
| Component Primitives | Radix UI, shadcn/ui (New York style) |
| Animation | Framer Motion, GSAP |
| Smooth Scrolling | Lenis |
| Carousel | Embla Carousel |
| 3D / WebGL | Three.js via `@react-three/fiber` and `@react-three/drei` |
| Icons | Lucide React |
| Utilities | clsx, tailwind-merge, split-type, class-variance-authority |
| Deployment | GitHub Pages (`gh-pages` workflow) |
| Routing | Hash-based (`#/privatnost`, `#/uslovi-koristenja`) |

---

## Features

- Hero section with a custom shader-based WebGL background (`Beams`), animated statistics counter, and marquee ticker.
- Sticky scroll-driven image gallery where each slide pins to the viewport while scrolling.
- Horizontal scroll-locked services section driven by Framer Motion `useScroll` and `useTransform`.
- Vertical sticky workflow section with four sequential steps and per-step gradient backgrounds.
- Dual-row infinite marquee for customer reviews with fade overlays and pause-on-hover.
- Accessible FAQ using native `<details>`/`<summary>` elements.
- Contact section with structured info cards, embedded Google Maps view, and a phone selection modal.
- Site-wide preloader that waits for fonts, page images, and gallery images before revealing content.
- Custom cursor (desktop only) using GSAP, with hover-state scaling on interactive elements.
- Animated canvas grid background in the footer (`Squares`).
- Two legal subpages rendered client-side without an external router: privacy policy and terms of use.
- Full SEO metadata: Open Graph, Twitter Card, geo tags, canonical URL, `hreflang`, and JSON-LD for `AutoRepair` and `FAQPage`.
- Responsive layout across mobile, tablet, and desktop breakpoints.
- `prefers-reduced-motion` support and visible focus states for keyboard navigation.

---

## Project Structure

```text
volan-site/
├── .github/
│   └── workflows/
│       └── deploy.yml                GitHub Actions workflow: build and deploy to Pages
├── public/
│   ├── CNAME                         Custom domain (reparacija-servis-letvi-volana.com)
│   ├── robots.txt                    Crawl directives and sitemap reference
│   ├── sitemap.xml                   Sitemap covering the landing page and legal pages
│   ├── favicon/                      Favicon set and web manifest
│   └── Images/
│       ├── gallery/                  Desktop gallery images (webp)
│       ├── gallery-mobile/           Mobile gallery images (webp/jpg/png/avif)
│       ├── services/                 Services section images
│       └── logo/                     Brand assets
├── src/
│   ├── components/
│   │   ├── custom/
│   │   │   ├── Beams.tsx             WebGL shader background (Three.js + R3F)
│   │   │   ├── CustomCursor.tsx      GSAP-driven cursor for pointer devices
│   │   │   ├── Navigation.tsx        Top bar, mobile menu, phone modal
│   │   │   ├── SectionWave.tsx       SVG wave divider
│   │   │   ├── ServicePreloader.tsx  Font and image preloader
│   │   │   └── Squares.tsx           Animated canvas grid
│   │   └── ui/                       shadcn/ui component library
│   ├── hooks/
│   │   └── use-mobile.ts             Viewport breakpoint hook
│   ├── lib/
│   │   ├── gallery-images.ts         Eager glob import of gallery assets
│   │   ├── service-images.ts         Eager glob import of service assets
│   │   └── utils.ts                  cn() helper
│   ├── pages/
│   │   ├── LegalLayout.tsx           Shared layout for legal pages
│   │   ├── PrivacyPage.tsx           Privacy policy
│   │   └── TermsPage.tsx             Terms of use
│   ├── sections/
│   │   ├── Hero.tsx                  Landing hero
│   │   ├── Gallery.tsx               Sticky scroll gallery
│   │   ├── Services.tsx              Horizontal scroll services
│   │   ├── Workflow.tsx              Sticky workflow steps
│   │   ├── Trust.tsx                 Reviews marquee
│   │   ├── FAQ.tsx                   FAQ accordion
│   │   ├── Contact.tsx               Contact info and map
│   │   └── Footer.tsx                Footer with links and contact
│   ├── App.tsx                       Route handling and layout composition
│   ├── App.css                       Focus, print, and reduced-motion styles
│   ├── index.css                     Tailwind entry and global styles
│   └── main.tsx                      Application bootstrap
├── components.json                   shadcn/ui configuration
├── eslint.config.js
├── index.html                        HTML shell with metadata and JSON-LD
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## Setup and Installation

### Prerequisites

- Node.js 20 or newer
- npm 10 or newer

### Install

```bash
git clone https://github.com/ivanpavlovic-web/volan-site.git
cd volan-site
npm install
```

### Development server

```bash
npm run dev
```

Vite serves the application on the default port (`5173`).

### Production build

```bash
npm run build
```

Runs `tsc -b` followed by `vite build`. Output is written to `dist/`.

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Routes

This is a static frontend. It exposes no HTTP API and does not use a server-side router. Navigation between the landing page and the legal pages is handled client-side through hash routing inside `App.tsx`.

| Route | Anchor | Rendered By |
|---|---|---|
| Home | `/` (default) | `src/App.tsx` composing all sections |
| Hero | `#hero` | `src/sections/Hero.tsx` |
| Gallery | `#gallery` | `src/sections/Gallery.tsx` |
| Services | `#services` | `src/sections/Services.tsx` |
| Workflow | `#workflow` | `src/sections/Workflow.tsx` |
| Trust | `#trust` | `src/sections/Trust.tsx` |
| FAQ | `#faq` | `src/sections/FAQ.tsx` |
| Contact | `#contact` | `src/sections/Contact.tsx` |
| Privacy policy | `#/privatnost` | `src/pages/PrivacyPage.tsx` |
| Terms of use | `#/uslovi-koristenja` | `src/pages/TermsPage.tsx` |

External integrations (read-only, no authentication):

| Integration | Purpose | Reference |
|---|---|---|
| Google Maps Embed | Location display in the contact section | `src/sections/Contact.tsx` |
| Google Fonts | Typography (Manrope, Sora) | `src/index.css` |

---

## Deployment

The project is configured for GitHub Pages and deployed from the `main` branch through `.github/workflows/deploy.yml`. The workflow installs dependencies, runs the production build, and publishes the `dist` directory.

The production site is served at:

```
https://reparacija-servis-letvi-volana.com/
```

The custom domain is declared in `public/CNAME` and in the `canonical` and Open Graph URLs inside `index.html`.

---

## Security & Architecture Considerations

- Static site: no server-side runtime, no database, no user accounts, no session storage.
- All content (services, workflow steps, reviews, FAQ items, legal text) is defined in TypeScript modules and bundled at build time.
- The Google Maps embed is loaded in an isolated iframe with `loading="lazy"` and `referrerPolicy="no-referrer-when-downgrade"`.
- All external links use `rel="noopener noreferrer"` when opening in a new tab.
- No inline event handlers are used; interactions are bound through React.
- Legal pages are rendered through controlled path handling in `App.tsx`, without pulling in a client-side router dependency.
- The custom cursor effect is disabled on coarse-pointer devices to avoid unnecessary runtime work on mobile.
- `prefers-reduced-motion` is honored through `src/App.css` to disable animations and smooth scrolling for users who request it.
- Focus-visible outlines are defined for interactive elements across the site.
- No analytics, tracking, or third-party scripts are loaded beyond what is declared in `index.html`.

---

## License

Proprietary. Copyright (c) Servis Letvi Volana Banja Luka. All rights reserved. The source code is the property of the client. Copying, redistribution, or commercial use without prior written permission is prohibited.

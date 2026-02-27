# Servis Letvi Volana Banjaluka

Servis Letvi Volana Banjaluka is a production-ready single-page web application for a steering rack repair service. The project is built as a fast, visually strong, and mobile-optimized website that guides users from first interaction to a phone call or contact inquiry.

The application is implemented with React and TypeScript, with a focus on performance, maintainable code, and predictable deployment on GitHub Pages.

## Technology Stack

The core stack includes React 19, TypeScript, Vite 7, and Tailwind CSS. Interactivity and UX are handled with Framer Motion (animated carousel and section transitions), Lenis (smooth scrolling), Lucide icons, and Radix UI primitives. The hero section uses Three.js through `@react-three/fiber` and `@react-three/drei`, including a custom shader-based background in the `Beams` component.

## Architecture and Implementation

The frontend is organized into feature sections (`Hero`, `Gallery`, `Services`, `Workflow`, `Trust`, `FAQ`, `Contact`) and shared custom components (`Navigation`, `ServicePreloader`, `Beams`).

Routing is intentionally lightweight and does not rely on an external router package. The app supports the main landing page and two legal subpages (`/privatnost`, `/uslovi-koristenja`) through controlled path handling in `App.tsx`.

The site is configured for GitHub Pages via Vite `base` configuration (`/volan-site/`) and a CI/CD workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys on every push to the `main` branch.

## Local Development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Production URL

https://ivanpavlovic-web.github.io/volan-site/

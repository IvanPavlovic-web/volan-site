# Volan Site

Volan Site je produkcijski spremna, jednosesijska web aplikacija za servis reparacije letvi volana. Projekat je razvijen kao brz, vizuelno jak i mobilno optimizovan sajt koji jasno vodi korisnika od prve sekcije do poziva ili kontakta.

Aplikacija je implementirana u React + TypeScript okruženju, sa fokusom na performanse, citljiv kod i predvidiv deployment na GitHub Pages.

## Tehnologije

Osnovu cine React 19, TypeScript, Vite 7 i Tailwind CSS. Za interaktivnost i UX koriste se Framer Motion (animirani carousel i sekcijske tranzicije), Lenis (smooth scrolling), Lucide ikone i Radix UI primitives. Hero sekcija koristi Three.js preko `@react-three/fiber` i `@react-three/drei`, ukljucujuci custom shader pristup za dinamicnu pozadinu (`Beams` komponenta).

## Arhitektura i implementacija

Frontend je organizovan po sekcijama (`Hero`, `Gallery`, `Services`, `Workflow`, `Trust`, `FAQ`, `Contact`) i zajednickim custom komponentama (`Navigation`, `ServicePreloader`, `Beams`).

Routing je namerno jednostavan i bez spoljnog router paketa: aplikacija podržava glavnu landing stranicu i dve pravne podstranice (`/privatnost`, `/uslovi-koristenja`) kroz kontrolisanu path logiku u `App.tsx`.

Sajt je prilagoden GitHub Pages okruženju kroz Vite `base` konfiguraciju (`/volan-site/`) i CI/CD workflow (`.github/workflows/deploy.yml`) koji automatski build/deploy pokrece na svaki push na `main` granu.

## Lokalni razvoj

```bash
npm install
npm run dev
```

Za produkcijski build:

```bash
npm run build
npm run preview
```

## Produkcijski URL

https://ivanpavlovic-web.github.io/volan-site/

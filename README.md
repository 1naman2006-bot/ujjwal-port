# Ujjwal — Creative Portfolio

Demo portfolio site built with React, TypeScript, Vite, Tailwind CSS, Framer Motion and Lucide React.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build into dist/
npm run typecheck # optional TypeScript check
npm run preview   # serve the production build
```

Requires Node 18 or newer.

## Edit the content

Everything editable lives in `src/data/site.ts`:

- **Name, headings, hero and About text**
- **`contactUrl`** — set this to your real contact link, e.g. `mailto:you@yourdomain.com`. While it is empty, the Contact Me button shows a "Demo preview" toast instead of going anywhere.
- **`services`** — the five services.
- **`projects`** — Nebula, Noir and Hyperdrive. Each has three images (left top, left bottom, right) and a `liveUrl`. Leave `liveUrl` empty to keep the demo toast; fill it to open the real project in a new tab.
- **`marqueeImages`** — the 21 showreel tiles.

To use your own artwork, replace an image's `src` with your file (put files in `public/` and use paths like `/work/nebula-1.webp`).

## Image fallbacks

Every image loads its remote `src` first. If that fails, it swaps to a generated fallback from `src/assets/fallbacks.ts`, so the page never shows a broken-image icon.

## Structure

```
src/
  data/site.ts            all content
  assets/fallbacks.ts     generated fallback artwork
  components/             FadeIn, Magnet, AnimatedText, ContactButton,
                          LiveProjectButton, SmartImage, DemoToast
  lib/                    scroll helper, heading fit-to-width hook
  sections/               Hero, Marquee, About, Services, Projects
  App.tsx                 section order
```

## Note on the hero heading

"HI, I'M UJJWAL" is longer than the original template's name. The heading keeps the specified Tailwind sizes (14vw → 17.5vw) wherever they fit, and `useFitText` shrinks it only as much as needed on screens where it would otherwise be clipped.

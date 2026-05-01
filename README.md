# ketaMIND — Botanical OS Design System

Calm. Clear. Considered. The ketaMIND design system, built as a React + Vite project with plain CSS (no Tailwind).

## Stack

- **React 18** + **TypeScript** + **Vite**
- **Plain CSS** — tokens via CSS custom properties, components scoped via co-located `.css` files
- **W3C Design Token JSON** as the source of truth for tokens

## Structure

```
.
├── .gitignore
├── README.md
├── package.json
├── tokens.json                       # W3C format, Desktop 1440 values
├── index.html                        # Vite entry
├── vite.config.ts
├── tsconfig.json
├── public/                           # static assets
└── src/
    ├── main.tsx                      # bootstrap
    ├── App.tsx                       # mounts the showcase
    ├── styles/
    │   └── tokens.css                # CSS source of truth (CSS variables)
    ├── lib/
    │   └── utils.ts                  # cn() helper
    ├── design-system/
    │   └── ketamind-design-system.jsx
    └── components/
        └── ui/
            ├── button.tsx
            └── button.css
```

## Tokens

The token system has three layers:

1. **`tokens.json`** — W3C Design Token Format Module (DTCG) JSON. Use this to feed tools like Style Dictionary, Tokens Studio, or Figma plugins.
2. **`src/styles/tokens.css`** — hand-authored CSS custom properties. Imported once at the app root. This is what components consume.
3. **Components** — never hardcode values; always reference `var(--token-name)`.

### Token groups

- **Ink & Paper** — text and surface colors
- **Holo Spectrum** — saturated 7-stop botanical gradient
- **Sky** — atmospheric/hazy variants of the holo palette
- **Accent & Structure** — lime accent, hairline borders
- **Signature gradients** — `--holo-spectrum`, `--holo-soft`, `--aura-radial`
- **Elevation** — XS / soft / float / halo / ticket
- **Radius** — xs(6) → 2xl(56), pill(999)

## Components

### `Button`
Variants: `primary` · `holo` · `lime` · `outline` · `ghost`
Sizes: `lg` · `md` · `sm`
Pill shape, 4% letter-spacing, lift on hover.

```tsx
import { Button } from "./components/ui/button";

<Button variant="holo" size="lg">Explore the system →</Button>
```

## Run

```bash
npm install
npm run dev
```

Open http://localhost:5173 to see the showcase.

## Design principles

1. **Calm over loud** — generous whitespace, hairline borders, restrained motion (≤300ms).
2. **Botanical grammar** — every brand surface earns one moment of holo (gradient strip, aura halo, foil edge).
3. **Lab-grade precision** — JetBrains Mono for metadata, dashed perforations, ticket-style layouts.
4. **8pt grid** — all spacing snaps to multiples of 4/8.
5. **No Tailwind** — semantic class names, scoped CSS, tokens-first.

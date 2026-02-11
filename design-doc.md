# Design Document — sugotobasu

This is a living document. It is updated as the project evolves.

---

## Design Philosophy

This portfolio site follows **neo-brutalism** — a modern take on the brutalist design movement. Traditional brutalism favored raw concrete aesthetics, monochrome palettes, and functional harshness. Neo-brutalism preserves the structural honesty (thick borders, hard shadows, flat fills, bold type) but injects personality through **pastel colors** and playful interactions.

The goal is a site that feels handmade, confident, and visually memorable — the opposite of polished-but-generic SaaS templates.

### Core Visual Rules

- **Hard shadows**: Every card and button gets a solid black offset shadow (no blur, no spread). This creates a physical, sticker-like depth.
- **Thick black borders**: 2–3px solid `#1a1a1a` on all interactive and container elements.
- **No rounded corners**: `border-radius: 0` across the board. Sharp edges reinforce the brutalist DNA.
- **Flat fills only**: No gradients, no glass effects, no blurs. Solid pastel backgrounds.
- **Bold, oversized typography**: Space Grotesk at large sizes and heavy weights.
- **Playful hover states**: On hover, shadows grow and elements translate upward/leftward; on click/active, shadows collapse and elements press inward.

---

## Color Palette

| Name     | Hex       | Usage                        |
|----------|-----------|------------------------------|
| Mint     | `#b8f2e6` | Hero background, secondary   |
| Lavender | `#cdb4db` | Contact section, accents     |
| Peach    | `#fec89a` | About section, button accent |
| Sky      | `#a2d2ff` | Projects background tint     |
| Butter   | `#fde68a` | Badges, button accents       |
| Base     | `#faf9f6` | Page background, card fills  |
| Ink      | `#1a1a1a` | Text, borders, shadows       |

---

## Typography

- **Font family**: Space Grotesk (Google Fonts)
- **Weights used**: 400 (body), 500 (medium), 700 (bold headings)
- **Scale**: Hero heading 6xl–9xl responsive, section headings 4xl–5xl, body lg–xl

---

## Component Patterns

### Buttons
- 2px solid ink border
- `shadow-brutal-sm` (2px 2px offset) at rest
- `shadow-brutal` (4px 4px) on hover with -2px translate
- Shadow collapses and element translates +2px on active/press
- Font weight bold

### Cards
- 2px solid ink border
- `shadow-brutal` (4px 4px offset) at rest
- `shadow-brutal-hover` (6px 6px) on hover with -2px translate
- Pastel background fill per context

### Badges
- 2px solid ink border
- `shadow-brutal-sm` at rest
- Font weight bold, small text

---

## Shadow Tokens

| Token              | Value                     |
|--------------------|---------------------------|
| `shadow-brutal`    | `4px 4px 0 0 #1a1a1a`    |
| `shadow-brutal-sm` | `2px 2px 0 0 #1a1a1a`    |
| `shadow-brutal-hover` | `6px 6px 0 0 #1a1a1a` |

---

## Tech Stack

| Layer              | Tool                                         |
|--------------------|----------------------------------------------|
| Runtime / PM       | Bun                                          |
| Build tool         | Vite 7                                       |
| UI library         | React 19 + React Compiler 1.0               |
| Optimizer          | Million.js 3.x (auto mode)                   |
| Language           | TypeScript (strict)                          |
| CSS framework      | Tailwind CSS v4 (CSS-first, no config file)  |
| Component library  | shadcn/ui (cherry-picked, neo-brutal themed) |
| Font               | Space Grotesk (Google Fonts)                 |

---

## Project Structure

```
./
  design-doc.md
  package.json
  bun.lock
  tsconfig.json
  tsconfig.app.json
  tsconfig.node.json
  vite.config.ts
  index.html
  components.json
  src/
    main.tsx
    App.tsx
    index.css
    lib/
      utils.ts
    components/
      ui/
        button.tsx
        card.tsx
        badge.tsx
    sections/
      Hero.tsx
      About.tsx
      Projects.tsx
      Contact.tsx
```

---

## Code Conventions

- Zero comments in all source files — no inline, block, or JSDoc comments.
- Self-documenting component and variable names.
- All design rationale lives in this document, not in code.
- Components are function declarations (not arrow functions assigned to const).
- Each section is a standalone component in `src/sections/`.
- shadcn/ui primitives live in `src/components/ui/` and are customized to match the neo-brutalist theme.

---

## Landing Page Sections

### Hero
Full-viewport section with mint background. Large name, tagline, availability badge, and two CTA buttons.

### About
Single card on base background with peach card fill. Short bio paragraph.

### Projects
Three placeholder project cards in a responsive grid over a tinted sky background. Each card has a different pastel fill and tech-stack badges.

### Contact
Lavender background, centered heading with email and GitHub CTA buttons.

### Footer
Thin top border, base background, copyright line.

---

## Million.js

Million.js is integrated as a Vite plugin in auto mode (`million.vite({ auto: true })`). It must be registered **before** the React plugin in the Vite plugin array. In auto mode it analyzes every component at build time and replaces React's virtual DOM diffing with a faster block-based approach where possible. No per-component annotations are required.

---

## Responsive Design

The site is fully responsive across mobile, tablet, and desktop using Tailwind's breakpoint prefixes.

### Breakpoint Strategy

| Prefix | Min Width | Target           |
|--------|-----------|------------------|
| (none) | 0px       | Mobile (default) |
| `sm`   | 640px     | Large phone      |
| `md`   | 768px     | Tablet           |
| `lg`   | 1024px    | Desktop          |
| `xl`   | 1280px    | Wide desktop     |

### Responsive Patterns Used

- **Mobile-first**: All base styles target the smallest screen; larger breakpoints progressively enhance.
- **`100dvh`**: Dynamic viewport height used for the hero to account for mobile browser chrome.
- **`overflow-x-hidden`**: Applied to the root to prevent horizontal scroll from shadow offsets on small screens.
- **Full-width buttons on mobile**: CTA buttons stack vertically and span the full width below `sm`, switching to inline/auto-width at `sm` and above.
- **Typography scaling**: Headings start at `text-3xl`/`text-4xl` on mobile and scale up through `md`/`lg`/`xl` breakpoints.
- **Grid collapse**: Project cards use a single column on mobile, 2 columns at `md`, and 3 columns at `lg`.
- **Padding tightening**: Section padding reduces from `px-6 py-24` (desktop) to `px-4 py-16` (mobile).

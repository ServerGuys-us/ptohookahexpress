# .claude/rules/frontend.md

## Frontend Rules — Hookah Lounge Booking

### Framework
- **Next.js 14 App Router** — use Server Components by default; add `"use client"` only when state/effects are required
- **TypeScript** — strict mode; no `any` types
- **Tailwind CSS** — utility classes are fine for layout/spacing; token values must still flow through `tokens.css` custom properties for brand colors, font sizes, and radii

### Component Framework

| Layer | Tool |
|---|---|
| Routing | Next.js App Router (`app/` directory) |
| Styling | Tailwind CSS + `tokens.css` custom properties |
| Forms | React Hook Form + Zod schema validation |
| Icons | `lucide-react` |
| Fonts | `next/font/google` — Playfair Display + Inter |
| Animation | CSS transitions via tokens; Framer Motion only if approved |

### Strict Rules

1. **No hardcoded hex values** in components — use `var(--color-*)` tokens
2. **No inline `style` objects** for colors or spacing — use Tailwind or CSS modules
3. **Dark-first** — do not add light mode variants unless explicitly requested
4. **Server Components first** — forms and interactive widgets get `"use client"`; layout/static sections do not
5. **Semantic HTML** — sections use `<section>`, nav uses `<nav>`, headings are hierarchical (`h1` only in hero)
6. **`prefers-reduced-motion`** — any CSS animation must be wrapped or disabled for reduced-motion users
7. **Image optimization** — use `next/image` for all images; supply `alt` text
8. **No `<a>` for internal links** — use `next/link`

### File Structure

```
src/
  app/
    layout.tsx          # root layout, font injection, metadata
    page.tsx            # landing page (imports section components)
    globals.css         # imports tokens.css, base resets
  components/
    layout/
      Navbar.tsx
      Footer.tsx
    sections/
      Hero.tsx
      About.tsx
      Packages.tsx
      Amenities.tsx
      Gallery.tsx
      BookingForm.tsx
      FAQ.tsx
    ui/
      Button.tsx
      Card.tsx
      Input.tsx
      Badge.tsx
      Eyebrow.tsx
  styles/
    tokens.css
  lib/
    validations.ts      # Zod schemas
    actions.ts          # Server actions for form submission
```

### Accessibility

- All interactive elements must have visible focus indicators using `--color-accent` ring
- Form fields must have associated `<label>` elements
- Color contrast: text on `--color-surface` must meet WCAG AA (4.5:1 minimum)

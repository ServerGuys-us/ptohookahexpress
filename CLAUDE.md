# CLAUDE.md

Guidance for Claude Code in this repo — **Hookah Lounge Booking — PTO Mobile Experience**.

---

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v3 + CSS custom properties (design tokens)
- **Language:** TypeScript
- **Package manager:** `npm` — do not mix package managers
- **Forms:** React Hook Form + Zod
- **Booking:** Calendly embed OR custom form → email/webhook
- **Fonts:** Google Fonts — load via `next/font`

---

## Development Workflow

1. **Design check** — UI phase: read `PRODUCT.md` and `DESIGN.md` before coding. Colors, type, spacing, elevation, components must comply with the design system.
2. Complete the phase.
3. `npm run typecheck && npm run lint` — fix all errors.
4. **MUST commit** — `git add -p && git commit -m "feat: <phase description>"` — phase is not done until committed.
5. Update wiki after committing:
   - `graphify-out/wiki/active-work.md` — remove the completed phase from the active section.
   - `graphify-out/wiki/history.md` — append row: `| Feature | Description | ✅ | \`commit-hash\` |`
6. Confirm with the user before the next phase.

Never bundle phases. Stop and resolve breaking changes before proceeding.

---

## Design System Gates (UI work only)

| Gate | Check |
|---|---|
| Token compliance | Colors from `src/styles/tokens.css` only — no hardcoded hex outside the token file |
| Single action accent | `--color-accent` (#CC1C1C red) is the only interactive accent. Background colors are never action colors. |
| No side-stripe borders | `border-l` / `border-r` > 1px as colored accents banned. Use background tint or full border. |
| No gradient text | `background-clip: text` with gradient banned. Solid color only. |
| No identical card grids | Every card surface must have visual differentiation. |
| Motion has `prefers-reduced-motion` | All animations must respect `@media (prefers-reduced-motion: reduce)`. |
| Dark-first | All UI is built dark-first. Light mode is not in scope. |
| Font loading | Fonts loaded via `next/font` only — no `<link>` tags in layout. |

---

## Commands

```bash
npm run dev          # start dev server
npm run build        # production build
npm run lint         # ESLint
npm run typecheck    # tsc --noEmit
npm run format       # Prettier
```

---

## Graph-First Navigation

Knowledge graph at `graphify-out/`. Read `GRAPH_REPORT.md` → `wiki/index.md` → source files.

> Active work: `graphify-out/wiki/active-work.md`. History: `graphify-out/wiki/history.md`. Read both before starting any phase.

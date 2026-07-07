# DESIGN.md

## Design System — PTO Mobile Experience: Hookah Lounge

---

## Brand Identity

Dark, premium, nightlife-forward. The palette is near-black with a bold red accent and clean white type. Every UI decision should feel like you're stepping into a VIP lounge — intentional, confident, zero clutter.

---

## Color Tokens

All values live in `src/styles/tokens.css` as CSS custom properties.

| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#0A0A0A` | Page background |
| `--color-surface` | `#111111` | Card / section surfaces |
| `--color-surface-raised` | `#1A1A1A` | Elevated cards, modals |
| `--color-accent` | `#CC1C1C` | CTAs, active states, highlights |
| `--color-accent-hover` | `#A81515` | Hover on accent elements |
| `--color-accent-glow` | `rgba(204,28,28,0.25)` | Subtle glow on accent |
| `--color-text-primary` | `#FFFFFF` | Headings, body |
| `--color-text-secondary` | `#AAAAAA` | Muted / supporting text |
| `--color-text-disabled` | `#555555` | Disabled states |
| `--color-border` | `rgba(255,255,255,0.08)` | Subtle card borders |
| `--color-border-strong` | `rgba(255,255,255,0.18)` | Input borders, dividers |
| `--color-star` | `#F5C518` | Star ratings |
| `--color-overlay` | `rgba(0,0,0,0.6)` | Hero image overlay |
| `--color-success` | `#22C55E` | Form success states |
| `--color-error` | `#EF4444` | Form error states |

**Rule:** No hex values anywhere in component code. Reference tokens only.

---

## Typography

Fonts loaded via `next/font/google`.

| Role | Family | Weight | Usage |
|---|---|---|---|
| Display | `Playfair Display` | 700, 900 | Hero headlines, section titles |
| Body | `Inter` | 400, 500, 600 | Body copy, UI, labels |
| Label | `Inter` | 500 | Eyebrows, caps labels, badges |

### Type Scale

| Token | Value | Usage |
|---|---|---|
| `--text-xs` | `0.75rem / 12px` | Captions, fine print |
| `--text-sm` | `0.875rem / 14px` | Labels, secondary |
| `--text-base` | `1rem / 16px` | Body default |
| `--text-lg` | `1.125rem / 18px` | Lead text |
| `--text-xl` | `1.25rem / 20px` | Card titles |
| `--text-2xl` | `1.5rem / 24px` | Sub-section heads |
| `--text-3xl` | `1.875rem / 30px` | Section headings |
| `--text-4xl` | `2.25rem / 36px` | Page sub-hero |
| `--text-5xl` | `3rem / 48px` | Hero headline (mobile) |
| `--text-6xl` | `3.75rem / 60px` | Hero headline (desktop) |

### Letter Spacing

- Headlines: `-0.02em`
- Eyebrow labels: `0.12em` (uppercase)
- Body: `0em`

---

## Spacing Scale

Based on 4px base unit. Reference as `--space-{n}`.

```
--space-1:  4px    --space-8:  32px
--space-2:  8px    --space-10: 40px
--space-3:  12px   --space-12: 48px
--space-4:  16px   --space-16: 64px
--space-5:  20px   --space-20: 80px
--space-6:  24px   --space-24: 96px  (section rhythm)
```

---

## Border Radius

```
--radius-sm:   4px
--radius-md:   8px
--radius-lg:   12px
--radius-xl:   16px
--radius-pill: 999px   ← buttons, badges
```

---

## Shadows

```
--shadow-sm:  0 1px 3px rgba(0,0,0,0.4)
--shadow-md:  0 4px 16px rgba(0,0,0,0.5)
--shadow-lg:  0 8px 32px rgba(0,0,0,0.6)
--shadow-glow-accent: 0 0 24px rgba(204,28,28,0.35)
```

---

## Motion

```
--duration-fast:   150ms
--duration-base:   250ms
--duration-slow:   400ms
--ease-default:    ease-in-out
--ease-spring:     cubic-bezier(0.34, 1.56, 0.64, 1)
```

All transitions must be wrapped in `@media (prefers-reduced-motion: no-preference)`.

---

## Layout

```
--container-max:     1200px
--container-padding: 24px    (48px desktop)
--nav-height:        72px
--grid-gap:          24px
```

---

## Component Patterns

### Primary Button
```css
background: var(--color-accent);
color: var(--color-text-primary);
border-radius: var(--radius-pill);
padding: 14px 32px;
font-weight: 600;
letter-spacing: 0.02em;
transition: background var(--duration-fast) var(--ease-default),
            box-shadow var(--duration-fast) var(--ease-default);

&:hover {
  background: var(--color-accent-hover);
  box-shadow: var(--shadow-glow-accent);
}
```

### Ghost Button
```css
background: transparent;
border: 1px solid var(--color-border-strong);
color: var(--color-text-primary);
border-radius: var(--radius-pill);
padding: 13px 31px;  /* 1px less to account for border */
```

### Card Surface
```css
background: var(--color-surface);
border: 1px solid var(--color-border);
border-radius: var(--radius-xl);
```

### Form Input
```css
background: var(--color-surface-raised);
border: 1px solid var(--color-border-strong);
border-radius: var(--radius-md);
color: var(--color-text-primary);
padding: 12px 16px;

&:focus {
  border-color: var(--color-accent);
  outline: none;
  box-shadow: 0 0 0 3px var(--color-accent-glow);
}
```

### Eyebrow Label
```css
font-size: var(--text-xs);
font-weight: 500;
letter-spacing: 0.12em;
text-transform: uppercase;
color: var(--color-accent);
```

---

## Breakpoints

```
sm:  480px
md:  768px
lg:  1024px
xl:  1280px
```

---

## Signature Element

The hero features a full-bleed dark image with a **deep red glow vignette** emanating from the bottom center — `radial-gradient(ellipse at 50% 100%, rgba(204,28,28,0.3) 0%, transparent 65%)`. This gives the lounge its ambient heat without competing with the headline.

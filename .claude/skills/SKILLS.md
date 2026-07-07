# SKILLS.md — Reusable Project Skills

## Hookah Lounge Booking

### `generate-section`
Generate a new page section component. Input: section name, content spec. Output: `src/components/sections/<Name>.tsx` using tokens, correct heading level, eyebrow label, and responsive layout.

### `generate-ui-component`
Generate a primitive UI component (Button, Input, Card, Badge). Must use only token-based styles, export typed props interface, and include a `displayName`.

### `zod-form-schema`
Given a list of form fields and their types/constraints, generate a Zod schema in `src/lib/validations.ts` and the matching TypeScript type.

### `server-action`
Generate a Next.js Server Action that validates a form payload against a Zod schema and sends a confirmation email or webhook. Include typed return with `{ success, error }`.

### `token-audit`
Scan all `.tsx` and `.css` files for hardcoded hex values outside `tokens.css`. Report file, line, and value.

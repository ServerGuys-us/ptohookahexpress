# AGENTS.md — Project Agent Playbook

## Hookah Lounge Booking

### Agents

#### `design-enforcer`
Runs before any UI phase. Checks that:
- All color references in modified files use `var(--color-*)` tokens
- No hardcoded hex values exist outside `tokens.css`
- Heading hierarchy is correct (`h1` only once per page)
- All `<img>` tags are replaced with `next/image`

#### `form-validator`
Handles the booking form. Ensures:
- Zod schema covers all required fields
- Server action returns typed response
- Error messages are user-friendly (not technical)
- Success state clears the form

#### `a11y-checker`
Post-build pass:
- All interactive elements have `aria-label` or visible label
- Focus rings use `--color-accent`
- Color contrast meets WCAG AA
- `prefers-reduced-motion` respected in all animations

### Running Agents

Agents are descriptive playbooks — run them as Claude Code subagents or reference them manually during review phases.

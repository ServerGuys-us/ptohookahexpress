import type { ReactNode } from 'react';

type Variant = 'accent' | 'muted';

const variants: Record<Variant, string> = {
  accent: 'bg-accent text-text-primary',
  muted: 'border border-border-strong bg-surface-raised text-text-secondary',
};

export function Badge({
  children,
  variant = 'accent',
  className = '',
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-pill px-3 py-1 text-xs font-medium uppercase tracking-[0.08em] ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

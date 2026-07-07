import type { ReactNode } from 'react';

export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`text-xs font-medium uppercase tracking-[0.12em] text-accent ${className}`}
    >
      {children}
    </p>
  );
}

import type { ReactNode } from 'react';

export function Card({
  children,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'article' | 'li';
}) {
  return (
    <Tag className={`rounded-xl border border-border bg-surface ${className}`}>{children}</Tag>
  );
}

import Link from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type Variant = 'primary' | 'ghost';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-pill font-body font-semibold tracking-[0.02em] transition-[background,box-shadow,border-color] duration-[var(--duration-fast)] ease-[var(--ease-default)] focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_var(--color-accent-glow)] disabled:cursor-not-allowed disabled:opacity-50';

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-text-primary hover:bg-accent-hover hover:shadow-glow-accent',
  ghost:
    'border border-border-strong bg-transparent text-text-primary hover:border-accent hover:text-text-primary',
};

const sizes: Record<Size, string> = {
  md: 'px-8 py-[14px] text-sm',
  lg: 'px-10 py-4 text-base',
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  ComponentPropsWithoutRef<'button'> & { href?: undefined };

type ButtonAsLink = CommonProps & { href: string };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = 'primary', size = 'md', className = '', children } = props;
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ('href' in props && props.href !== undefined) {
    const { href, ...rest } = props as ButtonAsLink;
    // strip layout-only keys so they don't leak onto the anchor
    void rest;
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...buttonProps } =
    props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

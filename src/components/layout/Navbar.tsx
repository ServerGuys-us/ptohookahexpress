'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Packages', href: '#packages' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[var(--z-sticky)] border-b border-border bg-[var(--color-bg-glass)] backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[var(--nav-height)] max-w-container items-center justify-between px-6 lg:px-12"
      >
        <Link href="#top" className="flex flex-col leading-none">
          <span className="font-display text-xl font-bold tracking-tight text-text-primary">
            PTO
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.12em] text-accent">
            Hookah Lounge
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-text-secondary transition-colors duration-[var(--duration-fast)] hover:text-text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href="#booking" size="md">
            Reserve Now
          </Button>
        </div>

        <button
          type="button"
          className="text-text-primary md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-surface md:hidden">
          <ul className="mx-auto flex max-w-container flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-base font-medium text-text-secondary transition-colors duration-[var(--duration-fast)] hover:bg-surface-raised hover:text-text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button href="#booking" size="lg" className="w-full" >
                Reserve Now
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

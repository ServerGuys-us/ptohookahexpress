import Link from 'next/link';
import { Instagram, Facebook, Phone, MapPin, Clock } from 'lucide-react';

const NAV_LINKS = [
  { label: 'FAQ', href: '#faq' },
  { label: 'Book Your Event', href: '#booking' },
];

const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com', Icon: Instagram },
  { label: 'Facebook', href: 'https://facebook.com', Icon: Facebook },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-container gap-12 px-6 py-16 md:grid-cols-3 lg:px-12">
        {/* Brand */}
        <div>
          <p className="font-display text-2xl font-bold tracking-tight text-text-primary">PTO</p>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-accent">
            Mobile Hookah
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
            Mobile hookah service by PTO — premium flavors and full-service setup brought to your
            party or event across the greater Houston metro.
          </p>
          <div className="mt-6 flex gap-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-pill border border-border-strong text-text-secondary transition-colors duration-[var(--duration-fast)] hover:border-accent hover:text-text-primary"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Explore */}
        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-text-primary">
            Explore
          </h2>
          <ul className="mt-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-text-secondary transition-colors duration-[var(--duration-fast)] hover:text-text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-text-primary">
            Service &amp; Contact
          </h2>
          <ul className="mt-4 space-y-4 text-sm text-text-secondary">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
              <span>Serving the greater Houston metro — we come to you</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={18} className="mt-0.5 shrink-0 text-accent" />
              <span>Available nightly · 6PM – 2AM</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-accent" />
              <a
                href="tel:+18325550100"
                className="transition-colors duration-[var(--duration-fast)] hover:text-text-primary"
              >
                (832) 555-0100
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-container flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-text-secondary sm:flex-row lg:px-12">
          <p>© {new Date().getFullYear()} PTO Mobile Experience. All rights reserved.</p>
          <p>Must be 21+ to book. Valid ID required.</p>
        </div>
      </div>
    </footer>
  );
}

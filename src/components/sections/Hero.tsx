import Image from 'next/image';
import { Star, Users, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';

const STATS = [
  { Icon: Users, value: 'Up to 20', label: 'Guests per event' },
  { Icon: Star, value: '4.9', label: 'Client rating', starred: true },
  { Icon: MapPin, value: 'Houston', label: 'We come to you' },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[calc(100vh-var(--nav-height))] items-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=2400&q=80"
        alt="Hookah setup glowing under warm ambient lighting at an event"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />

      {/* Dark overlay */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[var(--color-overlay)]" />
      {/* Bottom fade into page bg */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero-fade)]" />
      {/* Signature red glow vignette */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero-glow)]" />

      <div className="mx-auto w-full max-w-container px-6 py-24 lg:px-12">
        <div className="max-w-2xl">
          <Eyebrow>Mobile Hookah Service · Houston</Eyebrow>
          <h1 className="mt-5 text-5xl md:text-6xl">
            We Bring the <span className="text-accent">Hookah</span> to You
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-text-secondary">
            PTO is a mobile hookah service for the greater Houston metro. Premium flavors, full
            setup, and a dedicated host — delivered to your party, venue, or backyard. You pick the
            spot, we handle the rest.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#booking" size="lg">
              Book Your Event
            </Button>
            <Button href="#packages" variant="ghost" size="lg">
              View Packages
            </Button>
          </div>

          {/* Stat badges */}
          <dl className="mt-14 grid max-w-lg grid-cols-1 gap-4 sm:grid-cols-3">
            {STATS.map(({ Icon, value, label, starred }) => (
              <div
                key={label}
                className="rounded-lg border border-border bg-[var(--color-surface-glass)] px-4 py-4 backdrop-blur-sm"
              >
                <Icon size={20} className={starred ? 'text-star' : 'text-accent'} aria-hidden />
                <dd className="mt-3 font-display text-xl font-bold text-text-primary">{value}</dd>
                <dt className="mt-1 text-xs text-text-secondary">{label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

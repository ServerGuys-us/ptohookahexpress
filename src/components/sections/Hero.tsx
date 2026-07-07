import Image from 'next/image';
import { Star, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';

const STATS = [
  { Icon: Users, value: 'Up to 20', label: 'Guest capacity' },
  { Icon: Star, value: '4.9', label: 'Guest rating', starred: true },
  { Icon: Clock, value: '6PM – 2AM', label: 'Open nightly' },
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
        alt="Dimly lit upscale lounge interior with warm ambient lighting"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />

      {/* Dark overlay */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[var(--color-overlay)]"
      />
      {/* Bottom fade into page bg */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero-fade)]"
      />
      {/* Signature red glow vignette */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero-glow)]"
      />

      <div className="mx-auto w-full max-w-container px-6 py-24 lg:px-12">
        <div className="max-w-2xl">
          <Eyebrow>PTO Mobile Experience · Houston</Eyebrow>
          <h1 className="mt-5 text-5xl md:text-6xl">
            Your Night, <span className="text-accent">Elevated</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-text-secondary">
            An upscale hookah lounge built for the moments that matter — birthdays, bachelorettes,
            corporate nights, and everything in between. Premium flavors, bottle service, VIP vibes.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#booking" size="lg">
              Reserve Your Night
            </Button>
            <Button href="#packages" variant="ghost" size="lg">
              View Packages
            </Button>
          </div>

          {/* Stat badges */}
          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-4">
            {STATS.map(({ Icon, value, label, starred }) => (
              <div
                key={label}
                className="rounded-lg border border-border bg-surface/70 px-4 py-4 backdrop-blur-sm"
              >
                <Icon
                  size={20}
                  className={starred ? 'text-star' : 'text-accent'}
                  aria-hidden
                />
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

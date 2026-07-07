import { Check } from 'lucide-react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

type Tier = {
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  features: string[];
  featured?: boolean;
};

const TIERS: Tier[] = [
  {
    name: 'Base',
    price: '$149',
    cadence: 'per group',
    blurb: 'The essentials for a great night out with your crew.',
    features: [
      'Reserved lounge seating',
      '2 premium hookahs',
      'Flavor menu access',
      'Up to 6 guests',
      '3-hour session',
    ],
  },
  {
    name: 'VIP',
    price: '$349',
    cadence: 'per group',
    blurb: 'Elevated service, prime seating, and the full experience.',
    featured: true,
    features: [
      'Prime VIP section',
      '4 premium hookahs',
      '1 bottle service included',
      'Dedicated host',
      'Up to 12 guests',
      '4-hour session',
    ],
  },
  {
    name: 'Private Buy-Out',
    price: 'Custom',
    cadence: 'full lounge',
    blurb: 'The entire lounge, yours for the night. Fully tailored.',
    features: [
      'Exclusive full buy-out',
      'Unlimited hookah setups',
      'Custom bottle packages',
      'Personal event coordinator',
      'Up to 20 guests',
      'Custom hours',
    ],
  },
];

export function Packages() {
  return (
    <section
      id="packages"
      className="scroll-mt-[var(--nav-height)] border-t border-border bg-surface"
    >
      <div className="mx-auto max-w-container px-6 py-24 lg:px-12">
        <div className="max-w-2xl">
          <Eyebrow>Packages &amp; Pricing</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl">Pick your night</h2>
          <p className="mt-4 text-lg text-text-secondary">
            Three ways in. Every package includes hosted service and your reserved space — a deposit
            confirms the booking.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TIERS.map((tier) => (
            <article
              key={tier.name}
              className={
                tier.featured
                  ? 'relative flex flex-col rounded-xl border border-accent bg-surface-raised p-8 shadow-glow-accent lg:-mt-4 lg:mb-4'
                  : 'flex flex-col rounded-xl border border-border bg-bg p-8'
              }
            >
              {tier.featured && (
                <Badge className="absolute -top-3 left-8">Most Popular</Badge>
              )}

              <h3 className="font-display text-2xl font-bold text-text-primary">{tier.name}</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold text-text-primary">
                  {tier.price}
                </span>
                <span className="text-sm text-text-secondary">{tier.cadence}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{tier.blurb}</p>

              <ul className="mt-8 space-y-3 border-t border-border pt-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-text-primary">
                    <Check
                      size={18}
                      className={tier.featured ? 'mt-0.5 shrink-0 text-accent' : 'mt-0.5 shrink-0 text-text-secondary'}
                      aria-hidden
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-2">
                <Button
                  href="#booking"
                  variant={tier.featured ? 'primary' : 'ghost'}
                  size="lg"
                  className="w-full"
                >
                  {tier.price === 'Custom' ? 'Request a Quote' : 'Reserve This'}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

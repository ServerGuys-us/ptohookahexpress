import Image from 'next/image';
import { Flame, Truck, UserCheck } from 'lucide-react';
import { Eyebrow } from '@/components/ui/Eyebrow';

const HIGHLIGHTS = [
  {
    Icon: Flame,
    title: 'Premium Hookah',
    copy: 'Curated flavor menu, fresh coals, and clean, professional setups every time.',
  },
  {
    Icon: Truck,
    title: 'Delivered & Set Up',
    copy: 'We bring everything to your location and handle setup and teardown.',
  },
  {
    Icon: UserCheck,
    title: 'On-Site Host',
    copy: 'A dedicated host manages the hookahs all night so your crew never has to.',
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-[var(--nav-height)] border-t border-border bg-bg">
      <div className="mx-auto grid max-w-container items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-12">
        <div>
          <Eyebrow>About the Service</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl">The hookah experience, brought to you</h2>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            PTO is a fully mobile hookah service in the greater Houston metro. We show up to your
            party, venue, backyard, or private event with premium hookahs, a full flavor menu, and a
            host to run it all — so you get the upscale experience without leaving your celebration.
          </p>
          <p className="mt-4 leading-relaxed text-text-secondary">
            Book a date, pick a package, tell us where. We handle delivery, setup, service, and
            cleanup.
          </p>

          <dl className="mt-10 space-y-6">
            {HIGHLIGHTS.map(({ Icon, title, copy }) => (
              <div key={title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-raised">
                  <Icon size={20} className="text-accent" aria-hidden />
                </span>
                <div>
                  <dt className="font-display text-lg font-bold text-text-primary">{title}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-text-secondary">{copy}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border">
          <Image
            src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80"
            alt="Hookah set up for guests under warm, moody event lighting"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[image:var(--gradient-hero-glow)] opacity-70"
          />
        </div>
      </div>
    </section>
  );
}

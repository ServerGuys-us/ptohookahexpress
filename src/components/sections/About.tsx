import Image from 'next/image';
import { Flame, Wine, Music } from 'lucide-react';
import { Eyebrow } from '@/components/ui/Eyebrow';

const HIGHLIGHTS = [
  { Icon: Flame, title: 'Premium Hookah', copy: 'Curated flavor menu, fresh coals, spotless setups all night.' },
  { Icon: Wine, title: 'Bottle Service', copy: 'Top-shelf pours delivered tableside by your host.' },
  { Icon: Music, title: 'The Vibe', copy: 'Low light, deep sound, and a room built for your crew.' },
];

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-[var(--nav-height)] border-t border-border bg-bg"
    >
      <div className="mx-auto grid max-w-container items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-12">
        <div>
          <Eyebrow>About the Experience</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl">Step into the room built for the night</h2>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            PTO Hookah Lounge is an intimate, upscale escape in the greater Houston metro. Deep
            seating, ambient red light, and a soundtrack tuned for the moment — it&apos;s where
            birthdays turn into stories and ordinary nights become the one everyone remembers.
          </p>
          <p className="mt-4 leading-relaxed text-text-secondary">
            Every reservation is hosted end to end. You show up, we handle the rest.
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
            alt="Warm, moody lounge seating with ambient lighting"
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

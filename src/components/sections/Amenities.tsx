import { Flame, Wine, Sofa, Disc3, DoorClosed, Sparkles } from 'lucide-react';
import { Eyebrow } from '@/components/ui/Eyebrow';

const AMENITIES = [
  {
    Icon: Flame,
    title: '30+ Hookah Flavors',
    copy: 'From classic mint to house blends — premium shisha, fresh coals, and expert setups all night long.',
    span: true,
  },
  { Icon: Wine, title: 'Bottle Service', copy: 'Top-shelf spirits and champagne delivered tableside.' },
  { Icon: Sofa, title: 'Plush Seating', copy: 'Deep lounge sectionals built for your whole party.' },
  { Icon: Disc3, title: 'Curated Sound', copy: 'DJ-tuned playlists and live sets on select nights.' },
  { Icon: DoorClosed, title: 'Private Sections', copy: 'Semi-private and fully private areas available.' },
  { Icon: Sparkles, title: 'Full-Service Host', copy: 'A dedicated host handles every detail of your night.' },
];

export function Amenities() {
  return (
    <section
      id="amenities"
      className="scroll-mt-[var(--nav-height)] border-t border-border bg-bg"
    >
      <div className="mx-auto max-w-container px-6 py-24 lg:px-12">
        <div className="max-w-2xl">
          <Eyebrow>Amenities</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl">Everything included</h2>
          <p className="mt-4 text-lg text-text-secondary">
            No upsells at the door. The full lounge experience comes standard.
          </p>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AMENITIES.map(({ Icon, title, copy, span }) => (
            <li
              key={title}
              className={
                span
                  ? 'rounded-xl border border-border-strong bg-surface-raised p-7 sm:col-span-2'
                  : 'rounded-xl border border-border bg-surface p-7'
              }
            >
              <span
                className={
                  span
                    ? 'flex h-12 w-12 items-center justify-center rounded-lg bg-accent'
                    : 'flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-surface-raised'
                }
              >
                <Icon
                  size={22}
                  className={span ? 'text-text-primary' : 'text-accent'}
                  aria-hidden
                />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{copy}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

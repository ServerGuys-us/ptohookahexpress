import { Flame, Truck, MapPin, Disc3, Sofa, UserCheck } from 'lucide-react';
import { Eyebrow } from '@/components/ui/Eyebrow';

const AMENITIES = [
  {
    Icon: Flame,
    title: '30+ Hookah Flavors',
    copy: 'From classic mint to house blends — premium shisha, fresh coals, and expert setups all night long.',
    span: true,
  },
  { Icon: Truck, title: 'Delivery & Setup', copy: 'We bring, assemble, and tear down everything.' },
  { Icon: UserCheck, title: 'On-Site Host', copy: 'A dedicated host runs the hookahs at your event.' },
  { Icon: MapPin, title: 'We Come to You', copy: 'Homes, venues, backyards, rooftops — anywhere in Houston.' },
  { Icon: Sofa, title: 'Lounge Furniture', copy: 'Optional seating and low tables to set the scene.' },
  { Icon: Disc3, title: 'Portable Sound', copy: 'Bluetooth speaker setup available on request.' },
];

export function Amenities() {
  return (
    <section id="amenities" className="scroll-mt-[var(--nav-height)] border-t border-border bg-bg">
      <div className="mx-auto max-w-container px-6 py-24 lg:px-12">
        <div className="max-w-2xl">
          <Eyebrow>What We Bring</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl">Everything comes to you</h2>
          <p className="mt-4 text-lg text-text-secondary">
            We pack, deliver, and run the whole setup. You just pick the date and the spot.
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
                <Icon size={22} className={span ? 'text-text-primary' : 'text-accent'} aria-hidden />
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

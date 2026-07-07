import { Hero } from '@/components/sections/Hero';

const SECTIONS = [
  { id: 'about', label: 'About the Experience' },
  { id: 'packages', label: 'Packages / Pricing' },
  { id: 'amenities', label: 'Amenities' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'booking', label: 'Booking Form' },
  { id: 'faq', label: 'FAQ' },
];

export default function Home() {
  return (
    <main>
      <Hero />

      {SECTIONS.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="mx-auto max-w-container scroll-mt-[var(--nav-height)] px-6 py-24 lg:px-12"
        >
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-accent">Coming soon</p>
          <h2 className="mt-2 text-3xl">{section.label}</h2>
        </section>
      ))}
    </main>
  );
}

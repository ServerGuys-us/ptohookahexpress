import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Packages } from '@/components/sections/Packages';
import { Amenities } from '@/components/sections/Amenities';
import { Gallery } from '@/components/sections/Gallery';
import { BookingForm } from '@/components/sections/BookingForm';

const PLACEHOLDERS = [{ id: 'faq', label: 'FAQ' }];

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Packages />
      <Amenities />
      <Gallery />
      <BookingForm />

      {PLACEHOLDERS.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="mx-auto max-w-container scroll-mt-[var(--nav-height)] border-t border-border px-6 py-24 lg:px-12"
        >
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-accent">Coming soon</p>
          <h2 className="mt-2 text-3xl">{section.label}</h2>
        </section>
      ))}
    </main>
  );
}

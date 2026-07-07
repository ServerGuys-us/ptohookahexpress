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
      {/* Hero — Phase 3 */}
      <section
        id="hero"
        className="mx-auto flex min-h-[70vh] max-w-container flex-col items-center justify-center px-6 py-24 text-center"
      >
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.12em] text-accent">
          PTO Mobile Experience
        </p>
        <h1 className="text-5xl md:text-6xl">Hookah Lounge</h1>
        <p className="mt-6 max-w-md text-lg text-text-secondary">
          Layout shell is live — navbar, footer, and section anchors. Content sections land in the
          coming phases.
        </p>
      </section>

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

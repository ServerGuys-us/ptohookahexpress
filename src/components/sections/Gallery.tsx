import Image from 'next/image';
import { Eyebrow } from '@/components/ui/Eyebrow';

const PHOTOS = [
  {
    src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Moody lounge bar with warm lighting',
    className: 'sm:col-span-2 sm:row-span-2 aspect-square sm:aspect-auto',
  },
  {
    src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    alt: 'Cocktails and bottle service on a table',
    className: 'aspect-square',
  },
  {
    src: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=800&q=80',
    alt: 'Guests enjoying a night out',
    className: 'aspect-square',
  },
  {
    src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80',
    alt: 'Dim ambient lounge seating',
    className: 'aspect-square',
  },
  {
    src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80',
    alt: 'Champagne pour under low light',
    className: 'aspect-square',
  },
];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="scroll-mt-[var(--nav-height)] border-t border-border bg-surface"
    >
      <div className="mx-auto max-w-container px-6 py-24 lg:px-12">
        <div className="max-w-2xl">
          <Eyebrow>Gallery</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl">A look inside</h2>
          <p className="mt-4 text-lg text-text-secondary">
            A glimpse of the room, the pours, and the nights. More coming soon.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[minmax(0,1fr)] grid-cols-2 gap-4 sm:grid-cols-4">
          {PHOTOS.map((photo) => (
            <div
              key={photo.src}
              className={`group relative overflow-hidden rounded-xl border border-border ${photo.className}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover transition-transform duration-[var(--duration-slow)] ease-[var(--ease-default)] group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

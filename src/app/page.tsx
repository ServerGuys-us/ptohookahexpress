import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Packages } from '@/components/sections/Packages';
import { Amenities } from '@/components/sections/Amenities';
import { Gallery } from '@/components/sections/Gallery';
import { BookingForm } from '@/components/sections/BookingForm';
import { FAQ } from '@/components/sections/FAQ';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Packages />
      <Amenities />
      <Gallery />
      <BookingForm />
      <FAQ />
    </main>
  );
}

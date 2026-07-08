import { Hero } from '@/components/sections/Hero';
import { BookingForm } from '@/components/sections/BookingForm';
import { FAQ } from '@/components/sections/FAQ';

export default function Home() {
  return (
    <main>
      <Hero />
      <BookingForm />
      <FAQ />
    </main>
  );
}

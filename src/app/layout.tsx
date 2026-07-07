import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PTO Hookah Lounge — Reserve Your Night | Houston',
  description:
    'Upscale hookah lounge experience by PTO Mobile. Book birthdays, bachelorettes, corporate events, and date nights in the greater Houston metro.',
  openGraph: {
    title: 'PTO Hookah Lounge — Reserve Your Night',
    description: 'Upscale hookah lounge experience by PTO Mobile in Houston.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body id="top">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

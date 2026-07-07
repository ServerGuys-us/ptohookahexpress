import type { Metadata, Viewport } from 'next';
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

const SITE_URL = 'https://ptomobile.com';
const TITLE = 'PTO Mobile Hookah — Booked to Your Event | Houston';
const DESCRIPTION =
  'Mobile hookah service for the greater Houston metro. We bring premium hookah, flavors, and a host to your party, venue, or backyard — birthdays, bachelorettes, and private events.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'mobile hookah Houston',
    'hookah catering Houston',
    'hookah for events',
    'party hookah service',
    'PTO Mobile hookah',
    'bachelorette hookah Houston',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    url: SITE_URL,
    siteName: 'PTO Mobile Hookah',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  colorScheme: 'dark',
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

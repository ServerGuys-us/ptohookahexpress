/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Cloudflare Workers has no built-in Next.js image optimizer. Serve images
    // as-is to avoid requiring a Cloudflare Images binding. Revisit if optimization
    // is needed (wire the OpenNext `images` binding + a custom loader).
    unoptimized: true,
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
};

export default nextConfig;

// Enables OpenNext Cloudflare bindings during `next dev` (getCloudflareContext, etc.).
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
initOpenNextCloudflareForDev();

import { defineCloudflareConfig } from '@opennextjs/cloudflare';

// Minimal config: no incremental cache override needed — this landing page
// has no ISR/on-demand revalidation. Add an incrementalCache override later
// if server-cached data is introduced.
export default defineCloudflareConfig();

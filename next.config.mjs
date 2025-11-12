import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config options here
  images: {
    domains: ['picsum.photos', 'images.unsplash.com', 'cdn.sanity.io'],
  },
}

export default withPayload(nextConfig, {
  // Disable bundling server packages in dev mode
  configPath: './src/payload.config.ts',
})

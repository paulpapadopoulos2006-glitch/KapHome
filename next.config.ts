import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'kaphomechios.netlify.app' },
    ],
  },
}

export default nextConfig

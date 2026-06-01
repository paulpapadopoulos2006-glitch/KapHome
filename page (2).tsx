import type { MetadataRoute } from 'next'
const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://kaphomechios.com'
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                 lastModified: new Date(), changeFrequency: 'weekly',  priority: 1 },
    { url: `${BASE}/booking`,    lastModified: new Date(), changeFrequency: 'daily',   priority: 0.9 },
    { url: `${BASE}/confirmation`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]
}

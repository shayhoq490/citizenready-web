import type { MetadataRoute } from 'next';

const base = 'https://www.citizenready.com.au';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/test`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/premium`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/signup`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/signin`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];
}

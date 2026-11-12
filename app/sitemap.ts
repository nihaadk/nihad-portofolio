import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

const routes = ['', '/resume', '/work', '/services', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}

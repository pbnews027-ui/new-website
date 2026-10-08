import { MetadataRoute } from 'next';
// articlesData no sacho path
import { ARTICLES_DATA } from './blog/articlesData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bolaseo.com';

  // Articles safety check સાથે મેપ કરો
  const articleUrls: MetadataRoute.Sitemap = (ARTICLES_DATA || []).map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Main Home Page + badha Blog Pages
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    ...articleUrls,
  ];
}
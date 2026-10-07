import { MetadataRoute } from 'next';
// articlesData no sacho path
import { ARTICLES_DATA } from './blog/articlesData';

export default function sitemap(): MetadataRoute.Sitemap {
  // Tamaru live domain url ahiya lakho (last slash vagar)
  const baseUrl = 'https://bolaseo.com';

  // Tamara badha articles auto-fetch thashe
  const articleUrls: MetadataRoute.Sitemap = ARTICLES_DATA.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Main Home Page + badha Blog Pages
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...articleUrls,
  ];
}
import { MetadataRoute } from 'next';
import { ARTICLES_DATA } from './blog/articlesData';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  // Use real publish dates so Google trusts lastmod (not "changed on every build").
  const articleUrls: MetadataRoute.Sitemap = ARTICLES_DATA.map((article) => ({
    url: `${SITE_URL}/blog/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const latest = ARTICLES_DATA.map((a) => a.publishedAt).sort().at(-1);

  return [
    {
      url: SITE_URL,
      lastModified: latest ? new Date(latest) : undefined,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: latest ? new Date(latest) : undefined,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    ...articleUrls,
  ];
}

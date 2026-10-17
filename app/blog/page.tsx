import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ARTICLES_DATA } from './articlesData';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Teen Patti Master Guides 2026: APK, Bonus, Withdrawal & Tips',
  description:
    'All Teen Patti Master guides in one place: APK download and install help, bonus rules, UPI withdrawal fixes, VIP levels and card game strategy for 2026.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Teen Patti Master Guides 2026',
    description:
      'APK install help, bonus rules, UPI withdrawal fixes, VIP levels and card game strategy.',
    url: '/blog',
    type: 'website',
    images: [
      {
        url: '/teen-patti-master-2026.webp',
        width: 1610,
        height: 1026,
        alt: 'Teen Patti Master Guides 2026',
      },
    ],
  },
};

export default function BlogIndexPage() {
  const articles = [...ARTICLES_DATA].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: 'Teen Patti Master Guides',
        url: `${SITE_URL}/blog`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: articles.map((a, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: `${SITE_URL}/blog/${a.slug}`,
            name: a.title,
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/blog` },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-200 py-10 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-6xl mx-auto space-y-8">
        <nav aria-label="Breadcrumb" className="text-xs text-slate-400 flex items-center gap-2">
          <Link href="/" className="text-amber-400 hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-300">Guides</span>
        </nav>

        <header className="space-y-3 border-b border-slate-800 pb-6">
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Teen Patti Master Guides (2026)
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Step-by-step help for installing the APK, understanding bonus rules, fixing withdrawal
            problems and learning card game strategy. 18+ only, please play responsibly.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((art, idx) => (
            <Link
              key={art.slug}
              href={`/blog/${art.slug}`}
              className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-400/50 hover:bg-slate-900 transition overflow-hidden flex flex-col group"
            >
              <div className="relative w-full aspect-[16/9] bg-slate-950">
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 360px"
                  className="object-contain p-3"
                  preload={idx === 0}
                />
              </div>
              <div className="p-5 space-y-2 flex-1 flex flex-col">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-amber-400 font-bold px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                    {art.category}
                  </span>
                  <span className="text-slate-400">⏱️ {art.readTime}</span>
                </div>
                <h2 className="text-base font-bold text-white group-hover:text-amber-300 transition">
                  {art.title}
                </h2>
                <p className="text-xs text-slate-400 leading-relaxed flex-1">{art.desc}</p>
                <span className="pt-3 text-xs font-semibold text-emerald-400">Read Full Guide →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

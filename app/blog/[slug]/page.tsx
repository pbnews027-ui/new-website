import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ARTICLES_DATA } from '../articlesData';
import { DOWNLOAD_URL, SITE_NAME, SITE_URL } from '@/lib/site';

// These slugs have their own hand-written page folders, which take precedence.
const CUSTOM_PAGE_SLUGS = [
  'claim-5100-sign-up-bonus-teen-patti-master',
  'teen-patti-master-instant-withdrawal-upi',
];

export const dynamicParams = false;

export function generateStaticParams() {
  return ARTICLES_DATA.filter((a) => !CUSTOM_PAGE_SLUGS.includes(a.slug)).map((a) => ({
    slug: a.slug,
  }));
}

function getArticle(slug: string) {
  return ARTICLES_DATA.find((a) => a.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const url = `/blog/${article.slug}`;
  return {
    title: article.metaTitle ?? article.title,
    description: article.desc,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.desc,
      url,
      type: 'article',
      publishedTime: `${article.publishedAt}T09:00:00.000Z`,
      images: [{ url: article.image, alt: article.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.desc,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const pageUrl = `${SITE_URL}/blog/${article.slug}`;
  const modified = article.updatedAt ?? article.publishedAt;
  // Same-category guides first, then the newest others.
  const related = ARTICLES_DATA.filter((a) => a.slug !== article.slug)
    .sort(
      (a, b) =>
        Number(b.category === article.category) - Number(a.category === article.category) ||
        b.publishedAt.localeCompare(a.publishedAt)
    )
    .slice(0, 3);

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: article.title,
        description: article.desc,
        image: `${SITE_URL}${article.image}`,
        datePublished: `${article.publishedAt}T09:00:00.000Z`,
        dateModified: `${modified}T09:00:00.000Z`,
        author: { '@type': 'Organization', name: `${SITE_NAME} Editorial Team`, url: SITE_URL },
        publisher: { '@id': `${SITE_URL}/#organization` },
        mainEntityOfPage: pageUrl,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/blog` },
          { '@type': 'ListItem', position: 3, name: article.title, item: pageUrl },
        ],
      },
      ...(article.faq?.length
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: article.faq.map((item) => ({
                '@type': 'Question',
                name: item.q,
                acceptedAnswer: { '@type': 'Answer', text: item.a },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <article className="min-h-screen bg-[#070b14] text-slate-200 font-sans antialiased selection:bg-amber-400 selection:text-black py-10 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-4xl mx-auto space-y-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs text-slate-400 flex items-center gap-2">
          <Link href="/" className="text-amber-400 hover:underline">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="text-amber-400 hover:underline">
            Guides
          </Link>
          <span>/</span>
          <span className="text-slate-300 truncate">{article.title}</span>
        </nav>

        {/* Page Header */}
        <header className="space-y-4 border-b border-slate-800 pb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-amber-400/30 text-amber-300 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            {article.category}
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            {article.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{article.desc}</p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2">
            <span>
              By <strong>{SITE_NAME} Editorial Team</strong>
            </span>
            <span>•</span>
            <time dateTime={modified}>
              {article.updatedAt ? 'Updated' : 'Published'}: {modified}
            </time>
            <span>•</span>
            <span>⏱️ {article.readTime} Read</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-amber-500/20 bg-slate-950 shadow-2xl">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, 850px"
            className="object-contain p-4"
            preload
          />
        </div>

        {/* Introduction */}
        {article.intro && (
          <section className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-300">
            {article.intro.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </section>
        )}

        {/* Article Body */}
        {article.content.map((section, idx) => (
          <section key={section.heading} className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-white border-l-4 border-amber-400 pl-3">
              {idx + 1}. {section.heading}
            </h2>
            {section.paragraphs?.map((para) => (
              <p key={para} className="text-sm sm:text-base leading-relaxed text-slate-300">
                {para}
              </p>
            ))}
            {section.table && (
              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/70">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-amber-400 uppercase text-[11px] font-black border-b border-slate-800">
                    <tr>
                      {section.table.headers.map((h) => (
                        <th key={h} className="py-3 px-4">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {section.table.rows.map((row) => (
                      <tr key={row.join('|')}>
                        {row.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            className={cIdx === 0 ? 'py-3 px-4 font-bold text-slate-200' : 'py-3 px-4 text-slate-300'}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {section.points && (
              <ul className="space-y-2.5 text-sm sm:text-base text-slate-300 bg-slate-900/50 p-6 rounded-2xl border border-slate-800 list-disc list-inside">
                {section.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {/* FAQs */}
        {article.faq && (
          <section className="space-y-4 border-t border-slate-800 pt-8">
            <h2 className="text-xl sm:text-2xl font-black text-white border-l-4 border-emerald-400 pl-3">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {article.faq.map((item) => (
                <div key={item.q} className="p-4 bg-slate-900/80 rounded-xl border border-slate-800">
                  <h3 className="text-sm sm:text-base font-bold text-white">{item.q}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Quick CTA Box */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/70 via-slate-900 to-indigo-950/70 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-lg font-bold text-white">Get the Latest APK (v5.2)</p>
            <p className="text-xs text-slate-300">Android 5.0+ • 2 GB RAM • 18+ only, play responsibly</p>
          </div>
          <a
            href={DOWNLOAD_URL}
            rel="nofollow"
            className="py-3 px-6 bg-gradient-to-r from-emerald-400 to-green-500 hover:brightness-110 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg active:scale-95 transition"
          >
            ⚡ Download APK
          </a>
        </div>

        {/* Related Guides (internal links) */}
        <section className="space-y-4 border-t border-slate-800 pt-8">
          <h2 className="text-xl sm:text-2xl font-black text-white border-l-4 border-emerald-400 pl-3">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-amber-400/50 transition"
              >
                <span className="text-[11px] text-amber-400 font-bold">{rel.category}</span>
                <p className="text-sm font-bold text-white mt-1">{rel.title}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}

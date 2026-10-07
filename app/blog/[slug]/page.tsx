'use client';

import React from 'react';
import { notFound, useParams } from 'next/navigation';
import { ARTICLES_DATA } from '../articlesData';

const DOWNLOAD_URL =
  'https://d3q91a2xq73l50.cloudfront.net/cg/files/z117yxg9vxe7n3mp6u3m5x7p/TeenPattiMaster_ya5rcx.apk';

export default function ArticlePage() {
  const params = useParams();
  const slug = params?.slug as string;

  // articlesData theke matching article khuje neya
  const article = ARTICLES_DATA.find((item) => item.slug === slug);

  if (!article) {
    return notFound();
  }

  // Google SEO Schema
  const schemaArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.desc,
    author: {
      '@type': 'Organization',
      name: 'Teen Patti Master Official',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Teen Patti Master',
      logo: {
        '@type': 'ImageObject',
        url: '/teen-patti-master.webp',
      },
    },
    datePublished: '2026-10-05',
    dateModified: '2026-10-05',
  };

  return (
    <article className="min-h-screen bg-[#070b14] text-slate-100 font-sans py-10 px-4 sm:px-6 lg:px-12 pb-24">
      {/* Google SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-400 flex items-center gap-2">
          <a href="/" className="hover:text-amber-400 transition">Home</a>
          <span>/</span>
          <span className="text-amber-400 font-semibold truncate max-w-[280px]">
            {article.title}
          </span>
        </nav>

        {/* Article Header */}
        <header className="space-y-4 border-b border-slate-800 pb-8">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-amber-400/10 text-amber-300 border border-amber-400/20">
              {article.category}
            </span>
            <span className="text-xs text-slate-400">⏱️ {article.readTime}</span>
            <span className="text-xs text-emerald-400 font-semibold">• 2026 Verified</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            {article.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {article.desc}
          </p>
        </header>

        {/* Content Body */}
        <div className="space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <h2 className="text-lg font-bold text-white">Overview & Verification</h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Official guide for <strong>Teen Patti Master</strong>. All download packages, fair-play systems, and bonus milestones mentioned here are tested and safe for Android devices.
            </p>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-white border-l-4 border-amber-400 pl-3">
            Important Information & Steps
          </h2>
          <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-slate-300 pl-1">
            <li>Always download the APK directly from secured 256-bit SSL servers.</li>
            <li>Complete your 6-digit OTP verification upon opening the game.</li>
            <li>Check in daily to earn chips and lucky bonus spins.</li>
          </ul>

          {/* Download CTA Box */}
          <div className="my-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950/70 via-slate-900 to-indigo-950/70 border border-emerald-500/30 text-center space-y-4 shadow-xl">
            <h3 className="text-lg sm:text-xl font-black text-white">
              Download Official Teen Patti Master
            </h3>
            <p className="text-xs text-slate-300 max-w-lg mx-auto">
              Get the original 64 MB APK file and claim your welcome bonus right now!
            </p>
            <a
              href={DOWNLOAD_URL}
              className="inline-block py-3 px-8 bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 hover:brightness-110 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-500/30 transition active:scale-95"
            >
              ⚡ DOWNLOAD OFFICIAL APK
            </a>
          </div>
        </div>

        {/* Related Articles Linking */}
        <section className="pt-8 border-t border-slate-800 space-y-4">
          <h3 className="text-sm font-black uppercase text-amber-400 tracking-wider">
            Related Guides
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ARTICLES_DATA.filter((i) => i.slug !== slug).slice(0, 4).map((rel, idx) => (
              <a
                key={idx}
                href={`/blog/${rel.slug}`}
                className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-400/40 transition block group"
              >
                <span className="text-[10px] text-amber-400 font-semibold">{rel.category}</span>
                <h4 className="text-xs font-bold text-white group-hover:text-amber-300 transition mt-1 line-clamp-1">
                  {rel.title}
                </h4>
              </a>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
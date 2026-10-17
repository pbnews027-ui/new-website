import React from 'react';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

// Shared layout for trust pages (About, Contact, Privacy, Disclaimer).
export default function InfoPage({
  title,
  path,
  updated,
  intro,
  children,
}: {
  title: string;
  path: string;
  updated: string;
  intro: string;
  children: React.ReactNode;
}) {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: title, item: `${SITE_URL}${path}` },
    ],
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-200 py-10 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <div className="max-w-3xl mx-auto space-y-8">
        <nav aria-label="Breadcrumb" className="text-xs text-slate-400 flex items-center gap-2">
          <Link href="/" className="text-amber-400 hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-300">{title}</span>
        </nav>

        <header className="space-y-3 border-b border-slate-800 pb-6">
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">{title}</h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{intro}</p>
          <p className="text-xs text-slate-400">
            Last updated: <time dateTime={updated}>{updated}</time>
          </p>
        </header>

        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-slate-300 [&_h2]:text-xl [&_h2]:sm:text-2xl [&_h2]:font-black [&_h2]:text-white [&_h2]:border-l-4 [&_h2]:border-amber-400 [&_h2]:pl-3 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-2 [&_a]:text-amber-400 [&_a]:underline [&_section]:space-y-3">
          {children}
        </div>
      </div>
    </div>
  );
}

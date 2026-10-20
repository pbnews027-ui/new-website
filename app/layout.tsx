import React from 'react';
import type { Metadata, Viewport } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import { DOWNLOAD_URL, SITE_NAME, SITE_URL } from '@/lib/site';
import './globals.css';

// Site-wide SEO defaults. Pages override title/description/canonical.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Teen Patti Master APK Download 2026 - Install Guide & Tips',
    template: '%s',
  },
  applicationName: SITE_NAME,
  openGraph: {
    siteName: SITE_NAME,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/teen-patti-master-2026.webp',
        width: 1610,
        height: 1026,
        alt: 'Teen Patti Master 2026 App Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/teen-patti-master-2026.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#040711',
};

const siteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/icon.png`,
        width: 512,
        height: 512,
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: 'en-IN',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#040711] text-slate-100 font-sans antialiased min-h-screen flex flex-col justify-between selection:bg-amber-400 selection:text-black relative">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />

        {/* =========================================================================
            1. TOP GLOBAL HEADER
        ========================================================================= */}
        <SiteHeader />

        {/* =========================================================================
            2. PAGE CONTENT (Badha Blogs, Pages ane Articles)
        ========================================================================= */}
        <main className="flex-1">{children}</main>

        {/* =========================================================================
            3. GLOBAL FOOTER (Screenshot Style, Google-Safe Content)
        ========================================================================= */}
        <footer className="bg-[#03060d] border-t border-slate-800/90 pt-14 pb-12 px-4 sm:px-6 lg:px-12 text-slate-300 relative">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Col 1: Identity & Authority Mission */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl overflow-hidden bg-slate-900 border border-amber-400/40 p-1 flex items-center justify-center shrink-0">
                  <Image
                    src="/teen-patti-master.webp"
                    alt="Teen Patti Master Logo"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-xl font-black text-amber-400 tracking-tight flex items-center gap-1.5">
                    Teen Patti Master
                    <span className="text-emerald-400 text-sm">♠</span>
                  </p>
                  <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block">
                    Independent Gaming Guide
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                An independent guide portal covering card game rules, hand probabilities, Android APK install help, and safe, responsible digital entertainment.
              </p>

              {/* Social Channels */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-semibold text-slate-200 hover:border-amber-400/50 hover:text-white transition flex items-center gap-2"
                >
                  <span className="font-bold">𝕏</span> @teenpattimaster
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-semibold text-slate-200 hover:border-amber-400/50 hover:text-white transition flex items-center gap-2"
                >
                  <span className="text-red-500">▶</span> Video Tutorials
                </a>
              </div>
            </div>

            {/* Col 2: Games Lobby Links */}
            <div className="lg:col-span-2 space-y-3">
              <p className="text-xs font-black tracking-widest text-white uppercase border-l-2 border-emerald-400 pl-2">
                GAMES
              </p>
              <ul className="space-y-2 text-xs text-slate-400 font-medium">
                <li>
                  <Link href="/#games" className="hover:text-amber-400 transition">Classic Teen Patti</Link>
                </li>
                <li>
                  <Link href="/#games" className="hover:text-amber-400 transition">13-Card Rummy</Link>
                </li>
                <li>
                  <Link href="/#games" className="hover:text-amber-400 transition">Dragon vs Tiger</Link>
                </li>
                <li>
                  <Link href="/#games" className="hover:text-amber-400 transition">AK47 &amp; Muflis Tables</Link>
                </li>
                <li>
                  <Link href="/#games" className="hover:text-amber-400 transition">Point Rummy Arena</Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Strategy & Academy */}
            <div className="lg:col-span-2 space-y-3">
              <p className="text-xs font-black tracking-widest text-white uppercase border-l-2 border-emerald-400 pl-2">
                LEARN
              </p>
              <ul className="space-y-2 text-xs text-slate-400 font-medium">
                <li>
                  <Link href="/blog" className="hover:text-amber-400 transition">Strategy Articles</Link>
                </li>
                <li>
                  <Link href="/#hand-rankings" className="hover:text-amber-400 transition">Card Hand Strengths</Link>
                </li>
                <li>
                  <Link href="/#games" className="hover:text-amber-400 transition">Pure Sequences Guide</Link>
                </li>
                <li>
                  <Link href="/#app-specs" className="hover:text-amber-400 transition">Free Practice Modes</Link>
                </li>
                <li>
                  <Link href="/#banking-process" className="hover:text-amber-400 transition">Smart Bankroll Rules</Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Trust & Site Support */}
            <div className="lg:col-span-2 space-y-3">
              <p className="text-xs font-black tracking-widest text-white uppercase border-l-2 border-emerald-400 pl-2">
                SITE
              </p>
              <ul className="space-y-2 text-xs text-slate-400 font-medium">
                <li>
                  <Link href="/about" className="hover:text-amber-400 transition">About Us</Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="hover:text-amber-400 transition">Disclaimer &amp; Responsible Gaming</Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-amber-400 transition">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-amber-400 transition">Contact Us</Link>
                </li>
                <li className="pt-1.5 text-emerald-400 font-bold flex items-center gap-1.5 text-[11px]">
                  <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/30 text-[10px]">IN</span>
                  <span>हिंदी (Hindi) / English</span>
                </li>
              </ul>
            </div>

            {/* Col 5: App Card Banner */}
            <div className="lg:col-span-2 flex flex-col items-center">
              <div className="w-full max-w-[190px] rounded-2xl overflow-hidden border border-amber-400/30 bg-slate-900 shadow-2xl mb-2 p-1 bg-gradient-to-b from-[#1a1329] to-[#090514]">
                <Image
                  src="/teen-patti-master-app-3000.webp"
                  alt="Teen Patti Master App Preview"
                  width={792}
                  height={1061}
                  sizes="190px"
                  loading="lazy"
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Bottom Compliance & 18+ Responsible Gaming Notice */}
          <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-slate-900/90 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-black tracking-widest text-sm">
                ♠ ♥ ♦ ♣
              </span>
              <span className="text-slate-400">|</span>
              <span className="text-slate-400 font-medium">
                © 2026 {SITE_NAME}. All rights reserved.
              </span>
            </div>

            <p className="text-center md:text-right leading-relaxed max-w-2xl">
              <strong className="text-amber-400 font-black">18+ Only Notice:</strong>{' '}
              This is an independent educational and digital entertainment portal, not affiliated with the game publisher. Card gaming may be restricted or subject to local regulations in your jurisdiction. Please verify regional compliance.
            </p>
          </div>
        </footer>

        {/* =========================================================================
            4. FIXED ANIMATED FLOATING DOWNLOAD BUTTON (SCREEN PAR FIX RAHE SHE)
        ========================================================================= */}
        <aside
          aria-label="Floating Instant APK Download"
          className="fixed bottom-5 right-5 z-50 pointer-events-auto"
        >
          <a
            href={DOWNLOAD_URL}
            rel="nofollow"
            className="group relative flex items-center gap-2.5 px-4 py-2.5 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 font-black rounded-full shadow-[0_0_25px_rgba(16,185,129,0.7)] border-2 border-emerald-300 active:scale-95 transition-all transform hover:scale-105"
          >
            {/* Pulsing Backlight Effect */}
            <span className="absolute -inset-1 rounded-full bg-emerald-400/30 blur-sm group-hover:bg-emerald-400/60 animate-pulse -z-10"></span>

            {/* Rocket Icon with Bouncing Animation */}
            <span className="text-lg leading-none animate-bounce">
              🚀
            </span>

            {/* Label */}
            <span className="text-xs uppercase tracking-wider font-extrabold text-slate-950">
              DOWNLOAD
            </span>
          </a>
        </aside>
      </body>
    </html>
  );
}

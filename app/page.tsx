import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FaqSection from '@/components/FaqSection';
import { ARTICLES_DATA } from './blog/articlesData';

// 1. Google SEO Search Engine Meta Tags
export const metadata: Metadata = {
  title: 'Teen Patti Master APK Download (Official 2026) - Get ₹5,100 Bonus',
  description:
    'Download Teen Patti Master APK latest version v5.2 for Android. Get instant ₹5,100 welcome bonus, 100% safe UPI withdrawals, and play 30+ card games on bolaseo.com.',
  alternates: {
    canonical: 'https://bolaseo.com',
  },
  openGraph: {
    title: 'Teen Patti Master APK Download - Official 2026 Edition',
    description:
      'Play 30+ tables and withdraw real money directly to your UPI/Bank. 100% fair play RNG certified.',
    url: 'https://bolaseo.com',
    siteName: 'Teen Patti Master Official',
    type: 'website',
  },
};

// Global Download Link
const DOWNLOAD_URL =
  'https://d3q91a2xq73l50.cloudfront.net/cg/files/z117yxg9vxe7n3mp6u3m5x7p/TeenPattiMaster_ya5rcx.apk';

const faqData = [
  {
    q: 'Is it safe to download Teen Patti Master APK?',
    a: 'Yes. The official package from the verified server is 100% clean, virus scanned, and completely free of spyware or hidden adware.',
  },
  {
    q: 'Do I need an expensive smartphone to play?',
    a: 'No. Teen Patti Master is optimised for all Android devices running Android 5.0 and above with a minimum of 2 GB RAM. You do not need high-end flagship hardware.',
  },
  {
    q: 'What is the minimum limit for withdrawal?',
    a: 'The minimum cashout limit is only ₹100, which makes it very accessible and convenient for casual players.',
  },
  {
    q: 'How many withdrawals can be made in one day?',
    a: 'Using UPI or IMPS direct bank transfers, you can comfortably make 3 to 5 withdrawal requests in a single day.',
  },
  {
    q: 'Is it really possible to win real money playing this game?',
    a: 'Yes. Many players win cash prizes regularly at tables and receive steady income through the referral programme. However, remember that real money card games involve financial risk. Always play responsibly and within your entertainment budget (18+ only).',
  },
];

export default function Home() {
  // SoftwareApplication & FAQ Schema for Google Rich Snippets
  const schemaApp = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Teen Patti Master',
    operatingSystem: 'ANDROID',
    applicationCategory: 'GameApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '105400',
    },
  };

  const schemaFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  const recentArticles = ARTICLES_DATA ? ARTICLES_DATA.slice(0, 6) : [];

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 font-sans antialiased relative selection:bg-amber-400 selection:text-black overflow-x-hidden pb-16">
      {/* 0. SEO JSON-LD Microdata Injections */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />

      {/* 1. Top Verified Security Ticker */}
      <div className="bg-gradient-to-r from-emerald-950/80 via-slate-900 to-indigo-950/80 border-b border-emerald-500/20 text-center py-2 px-4 text-xs font-medium text-emerald-300 flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        <span>100% Verified APK • Antivirus Scanned • Fast &amp; Secure UPI Support</span>
      </div>

      {/* 2. Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-12 pt-6 lg:pt-16 pb-20 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-amber-400/30 text-amber-300 text-[11px] font-semibold backdrop-blur-md shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              2026 Latest Android Edition • Verified Safe
            </div>

            <div className="w-full flex items-center justify-between gap-3">
              <h1 className="flex-1 text-2xl sm:text-4xl lg:text-6xl font-black leading-tight text-white tracking-tight">
                Play <span className="text-white">Teen Patti Master Game</span>{' '}
                <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  Online &amp; Download
                </span>{' '}
                Official Site
              </h1>

              {/* Mobile Quick Download Badge (Fixed Image with sizes="80px") */}
              <div className="lg:hidden shrink-0 flex flex-col items-center gap-2 w-20">
                <div className="w-20 h-24 relative rounded-xl overflow-hidden border border-amber-500/30 bg-[#0f0a1d]/90 p-1 flex items-center justify-center">
                  <Image
                    src="/teen-patti-master-app-3000.webp"
                    alt="Teen Patti Master Logo"
                    fill
                    sizes="80px"
                    className="object-contain p-1 rounded-lg"
                    priority
                  />
                </div>
                <a
                  href={DOWNLOAD_URL}
                  className="w-full py-1.5 px-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 font-black text-[10px] text-center rounded-lg shadow-md border border-emerald-300 active:scale-95 transition"
                >
                  ⚡ APK
                </a>
              </div>
            </div>

            <p className="text-sm lg:text-base text-slate-300 leading-relaxed max-w-2xl font-normal pt-1">
              Experience India&apos;s fastest multiplayer card gaming application. Enjoy 30+ dynamic tables, 
              transparent gameplay, instant sign-up bonuses up to ₹5,100, and ultra-smooth performance on any Android device.
            </p>

            <div className="flex flex-wrap gap-2 pt-1 text-xs text-slate-300 font-medium">
              <span className="px-3 py-1 bg-slate-800/80 rounded-lg border border-slate-700/60">⚡ 1-Click Installation</span>
              <span className="px-3 py-1 bg-slate-800/80 rounded-lg border border-slate-700/60">🛡 100% Ad-Free APK</span>
              <span className="px-3 py-1 bg-slate-800/80 rounded-lg border border-slate-700/60">💳 24x7 Instant Support</span>
            </div>

            {/* CTA Buttons */}
            <div className="w-full pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={DOWNLOAD_URL}
                className="group py-3.5 px-8 bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 hover:brightness-110 text-slate-950 font-black text-base text-center rounded-2xl shadow-xl shadow-emerald-500/25 active:scale-95 transition transform flex items-center justify-center gap-3 animate-pulse"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9992.4482.9992.9993s-.4482.9997-.9992.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9992.4482.9992.9993s-.4482.9997-.9992.9997m11.4045-6.02l1.997-3.459a.416.416 0 00-.1523-.5676.416.416 0 00-.568.1523l-2.0223 3.503c-1.4244-.652-3.003-1.0182-4.7359-1.0182-1.733 0-3.3115.3662-4.736 1.0182L5.642 4.8871a.416.416 0 00-.568-.1523.416.416 0 00-.1523.5676l1.997 3.459C3.197 10.6625 1 14.108 1 18.0673h22c0-3.9593-2.197-7.4048-5.9185-9.3059" />
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[11px] uppercase font-extrabold tracking-wider text-slate-800">Download Official APK</div>
                  <div className="text-sm font-black">v5.2 • (64 MB)</div>
                </div>
              </a>

              <a
                href="#latest-guides"
                className="py-3.5 px-6 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-bold text-sm text-center rounded-2xl backdrop-blur-md transition"
              >
                📖 Read Game Guides &amp; Tips
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-800/80 w-full max-w-md">
              <div>
                <div className="text-xl sm:text-2xl font-black text-amber-400">10 Lakh+</div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 uppercase font-medium">Registered</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-emerald-400">4.8 ★</div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 uppercase font-medium">Rating</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-indigo-400">30+</div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 uppercase font-medium">Variants</div>
              </div>
            </div>
          </div>

          {/* Right Column: Desktop Card (Fixed Image with sizes="(max-width: 1024px) 100vw, 360px") */}
          <div className="hidden lg:flex lg:col-span-5 justify-center">
            <div className="relative w-full max-w-[360px] rounded-3xl p-5 bg-gradient-to-b from-[#0a0614] via-slate-950 to-[#0e0a1b] border border-amber-500/30 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
                <span className="text-xs font-black text-amber-400 tracking-wider uppercase">Exclusive Welcome Bonus</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Active</span>
              </div>

              <div className="rounded-2xl border border-amber-400/20 mb-4 bg-gradient-to-b from-[#160d26] to-[#0a0414] relative w-full aspect-[3/4] flex items-center justify-center p-2.5 overflow-hidden">
                <Image
                  src="/teen-patti-master-app-3000.webp"
                  alt="Teen Patti Master Official"
                  fill
                  sizes="(max-width: 1024px) 100vw, 360px"
                  className="object-contain p-2 rounded-xl transition-transform duration-500 hover:scale-[1.02]"
                  priority
                />
              </div>

              <a
                href={DOWNLOAD_URL}
                className="block w-full py-3 mb-4 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.45)] text-center transition active:scale-[0.98]"
              >
                ⚡ DOWNLOAD OFFICIAL APK
              </a>

              <div className="space-y-2 text-center">
                <h3 className="text-base font-black text-white">Claim Up to ₹5,100 Bonus</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Join live tables for Teen Patti, Point Rummy, Dragon vs Tiger, and Slot classics in minutes.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-2 text-xs text-slate-400 font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span> Direct APK download from secured server
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span> 100% Fair Play RNG Certified
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span> 18+ Only • Play Responsibly
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Indexing Section */}
      <section id="latest-guides" className="px-5 lg:px-12 py-12 max-w-7xl mx-auto border-t border-slate-800/80">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-amber-400">
              Fresh Updates &amp; Tutorials
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              Latest Teen Patti Master Guides (2026)
            </h2>
          </div>
          <span className="text-xs text-slate-400">
            Updated guides for tricks, bonuses, withdrawals &amp; APK updates
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentArticles.map((art) => (
            <Link
              key={art.slug}
              href={`/blog/${art.slug}`}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-400/50 hover:bg-slate-900 transition flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-amber-400 font-bold px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                    {art.category}
                  </span>
                  <span className="text-slate-500">⏱️ {art.readTime}</span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition line-clamp-2">
                  {art.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {art.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs font-semibold text-emerald-400 flex items-center justify-between">
                <span>Read Full Guide</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Game Cards Section */}
      <section id="games" className="px-5 lg:px-12 py-12 max-w-7xl mx-auto border-t border-slate-800/60">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-amber-400">Pure Card Gaming Experience</span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">Popular Modes You Can Play</h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Choose from authentic table formats designed for casual fun and master-level strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-400/40 transition group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-[#1c122c] to-[#0c0517] border border-amber-400/40 flex items-center justify-center p-1.5 shadow-md group-hover:scale-105 transition-transform">
                <Image
                  src="/classic-teen-patti.webp"
                  alt="Classic Teen Patti Master"
                  width={48}
                  height={48}
                  className="object-contain rounded-xl"
                />
              </div>
              <h3 className="font-bold text-base text-white group-hover:text-amber-400 transition">Classic Teen Patti Master</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Standard 3-card poker style. Master blind bets, seen raises, trail sets, and smart side-shows.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-400/40 transition group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-[#240d17] to-[#0d0408] border border-rose-500/40 flex items-center justify-center p-1.5 shadow-md group-hover:scale-105 transition-transform">
                <Image
                  src="/13-card-rummy.webp"
                  alt="13-Card Indian Rummy"
                  width={48}
                  height={48}
                  className="object-contain rounded-xl"
                />
              </div>
              <h3 className="font-bold text-base text-white group-hover:text-amber-400 transition">13-Card Indian Rummy</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Fast point rummy, pool, and deals. Build pure sequences and declare first to take the prize pool.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-400/40 transition group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#261f0a] to-[#0c0a03] border border-amber-500/30 flex items-center justify-center text-2xl mb-4 shadow-md group-hover:scale-105 transition-transform">
                ⚡
              </div>
              <h3 className="font-bold text-base text-white group-hover:text-amber-400 transition">Action Variations</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Experience fast-paced Muflis, AK47, Joker tables, and casual quick-win arcade minigames.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Complete Humanized SEO Article Section (English) */}
      <section id="article" className="px-5 lg:px-12 py-16 max-w-5xl mx-auto border-t border-slate-800/80 space-y-12">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-400/40 text-amber-300 text-xs font-semibold">
            <span>📚 Complete Guide &amp; Official Article</span>
            <span>•</span>
            <span className="text-emerald-400">100% Fair Play Verified</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Teen Patti Master APK Download (2026): Real App, ₹5,100 Bonus &amp; Withdrawal Truth
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            If you are a fan of online card games, you must have seen the name <strong>Teen Patti Master</strong> many times on the internet. Whether it is Diwali celebrations or a weekend outing with friends, playing cards has been a timeless tradition across India. But when money is on the line, the most important questions arise naturally: <em>Is this app really safe? Are withdrawals going through smoothly or stuck in pending status? When and how can you actually unlock the sign-up bonus?</em>
          </p>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            This is the ultimate guide where we cut through the hype and present to you a no-nonsense, down-to-earth review of the Teen Patti Master v5.2 (2026 Edition). We cover everything important: Downloading the clean official package, bypassing the Android warning about Unknown sources, Keeping your wallet safe from accidental account bans, and Receiving your real cash winnings directly into your bank account or UPI wallet in 5-10 minutes.
          </p>
        </div>

        {/* Quick Navigation Menu */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/95 to-slate-950 border border-slate-800">
          <span className="text-xs font-black uppercase text-amber-400 tracking-wider block mb-3">
            📑 Quick Navigation: Jump to Any Section
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-300">
            <a href="#what-is-tpm" className="hover:text-amber-400 transition">1. What is Teen Patti Master &amp; Why It Is So Popular?</a>
            <a href="#app-specs" className="hover:text-amber-400 transition">2. App Specs &amp; System Requirements (Quick Reference)</a>
            <a href="#install-guide" className="hover:text-amber-400 transition">3. Official APK Download &amp; Installation Step by Step</a>
            <a href="#bonus-truth" className="hover:text-amber-400 transition">4. The Truth of ₹5,100 Sign-Up Bonus (How to Get It)</a>
            <a href="#games-breakdown" className="hover:text-amber-400 transition">5. Lobby Overview: What Modes Should You Actually Play?</a>
            <a href="#hand-rankings" className="hover:text-amber-400 transition">6. Teen Patti Card Hand Rankings (Highest to Lowest)</a>
            <a href="#pro-strategies" className="hover:text-amber-400 transition">7. Pro Strategies to Win: Dragon vs Tiger &amp; 3 Patti Rules</a>
            <a href="#banking-process" className="hover:text-amber-400 transition">8. Instant IMPS &amp; UPI Bank Withdrawals Process</a>
            <a href="#safety-rules" className="hover:text-amber-400 transition">9. Account Security, Fair Play &amp; Avoiding Account Bans</a>
            <a href="#refer-earn" className="hover:text-amber-400 transition">10. Refer &amp; Earn Programme: Earn Daily Passive Income</a>
            <a href="#troubleshooting" className="hover:text-amber-400 transition">11. Troubleshooting Common Problems &amp; Support</a>
            <a href="#faq" className="hover:text-amber-400 transition">12. Real Player Questions (FAQs)</a>
          </div>
        </div>

        {/* 1. What is Teen Patti Master */}
        <div id="what-is-tpm" className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-white border-l-4 border-amber-400 pl-3">
            1. What is Teen Patti Master and why is it so popular?
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Today, Teen Patti Master is one of the most downloaded real-cash multiplayer card games in India. Since real money skill and betting games are usually not hosted directly on the Google Play Store, the actual app is securely distributed as an Android Package Kit (APK) file through its official dedicated servers.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            The biggest highlight of Teen Patti Master is blazing speed and performance optimisation. Millions of gamers across India connect on regular 4G mobile data or the most basic Wi-Fi connections. We built the app engine from scratch to be ultra-lightweight so that gameplay is smooth and lag-free even on budget smartphones with 2 GB of RAM. Most importantly, all the dealing of cards is powered by automated Random Number Generator (RNG) algorithms, eliminating human bias, manipulation of cards, and rigged lobbies.
          </p>
        </div>

        {/* 2. Specifications Table */}
        <div id="app-specs" className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-white border-l-4 border-amber-400 pl-3">
            2. App Specifications &amp; System Requirements (Quick View)
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Before downloading, check out the quick specification table below to see if your smartphone meets the minimum specs required:
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/60 shadow-xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-amber-400 uppercase text-[11px] font-black border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4">Feature</th>
                  <th className="py-3 px-4">Official Information (Build 2026)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 font-normal">
                <tr className="hover:bg-slate-900/40">
                  <td className="py-3 px-4 font-bold text-slate-200">Application Name</td>
                  <td className="py-3 px-4 text-emerald-400 font-extrabold">Teen Patti Master Official APK</td>
                </tr>
                <tr className="hover:bg-slate-900/40">
                  <td className="py-3 px-4 font-bold text-slate-200">Current Package</td>
                  <td className="py-3 px-4">v5.2 Stable Android Edition</td>
                </tr>
                <tr className="hover:bg-slate-950/40">
                  <td className="py-3 px-4 font-bold text-slate-200">Size of the File</td>
                  <td className="py-3 px-4">64 MB (Quick &amp; Light Weight)</td>
                </tr>
                <tr className="hover:bg-slate-950/40">
                  <td className="py-3 px-4 font-bold text-slate-200">Android OS</td>
                  <td className="py-3 px-4">Android 5.0 (Lollipop) or later</td>
                </tr>
                <tr className="hover:bg-slate-950/40">
                  <td className="py-3 px-4 font-bold text-slate-200">Recommended RAM</td>
                  <td className="py-3 px-4">2 GB RAM minimum (for a Smooth 60 FPS experience)</td>
                </tr>
                <tr className="hover:bg-slate-950/40">
                  <td className="py-3 px-4 font-bold text-slate-200">Welcome Bonus</td>
                  <td className="py-3 px-4 text-amber-400 font-black">Up To ₹5,100 Cash Rewards Milestone</td>
                </tr>
                <tr className="hover:bg-slate-950/40">
                  <td className="py-3 px-4 font-bold text-slate-200">Total Games</td>
                  <td className="py-3 px-4">30+ Games (Teen Patti, Rummy, Dragon vs Tiger, Slots)</td>
                </tr>
                <tr className="hover:bg-slate-950/40">
                  <td className="py-3 px-4 font-bold text-slate-200">Fair Play Certification</td>
                  <td className="py-3 px-4">100% RNG Certified 256-Bit SSL Data Encryption</td>
                </tr>
                <tr className="hover:bg-slate-950/40">
                  <td className="py-3 px-4 font-bold text-slate-200">Payment Methods</td>
                  <td className="py-3 px-4">Instant UPI (PhonePe, Google Pay, Paytm) &amp; IMPS Bank Transfer</td>
                </tr>
                <tr className="hover:bg-slate-950/40">
                  <td className="py-3 px-4 font-bold text-slate-200">Minimum Cashout</td>
                  <td className="py-3 px-4 font-extrabold text-emerald-400">₹100 Flat</td>
                </tr>
                <tr className="hover:bg-slate-950/40">
                  <td className="py-3 px-4 font-bold text-slate-200">Customer Support</td>
                  <td className="py-3 px-4">In-app Live Help Desk 24×7</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. Download & Install Official APK */}
        <div id="install-guide" className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-white border-l-4 border-amber-400 pl-3">
            3. Download &amp; Install Official APK: Step by Step (No Errors)
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Most casual players fall for third-party modded APK files and fake clone sites that bundle unwanted malware or block cash withdrawals. Here is the simple process to install the genuine, clean, and verified APK on your Android device:
          </p>
          <div className="space-y-3 bg-slate-900/50 p-6 rounded-2xl border border-slate-800 text-xs sm:text-sm text-slate-300">
            <div>
              <strong className="text-amber-400">Step 1: Download Clean APK —</strong> Click the official server download link. It’s a lightweight 64 MB package that you’ll be downloading. If you are using a browser like Google Chrome you may see a standard Android security prompt: <em>&quot;File might be harmful. Do you want to download TeenPattiMaster.apk?&quot;</em> Don’t worry, this is an automated alert Android shows for any app downloaded outside the Google Play Store. Click <strong>&quot;Download Anyway&quot;</strong> to continue.
            </div>
            <div>
              <strong className="text-amber-400">Step 2: Enable Unknown Sources —</strong> Once download is complete, tap the notification for the downloaded APK. If this is the first time you are sideloading an application through your browser, Android will ask for permission to install it: Go to Phone Settings &gt; Security (or Apps &amp; Permissions). Look for <strong>&quot;Install Unknown Apps&quot;</strong> and change the permission to Allow for Chrome or your current file manager.
            </div>
            <div>
              <strong className="text-amber-400">Step 3: Finish the Installation —</strong> Tap <strong>&quot;Install&quot;</strong>. The package installer may take 5-10 seconds to complete the installation. When it’s done, click &quot;Open&quot; to enter the game lobby.
            </div>
          </div>
          <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs leading-relaxed">
            <strong>⚠ Important Warning:</strong> Do not install &quot;modded&quot;, &quot;hacked&quot;, or &quot;unlimited cash&quot; versions of Teen Patti Master. The security server automatically scans device hardware IDs, permanently blacklisting compromised accounts and locking all funds.
          </div>
        </div>

        {/* 4. The Truth About Bonus */}
        <div id="bonus-truth" className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-white border-l-4 border-amber-400 pl-3">
            4. The Truth About the ₹5,100 Sign-Up Bonus (How to Get It)
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Banners frequently advertise welcome packages worth up to ₹5,100. But how does this bonus actually work, and how can you claim it? Here’s the full breakdown:
          </p>
          <ul className="space-y-3 bg-slate-900/50 p-6 rounded-2xl border border-slate-800 text-xs sm:text-sm text-slate-300">
            <li>
              • <strong>Instant Phone Verification (Starter Cash ₹51):</strong> When you open the game lobby for the first time, change from “Guest Mode” to full registration by entering your active 10 digit mobile number. Enter the 6-digit SMS OTP to verify your account and your initial starter funds will be credited directly to your game wallet.
            </li>
            <li>
              • <strong>7-Day Check-ins:</strong> The entire bonus pool is not paid out all at once. Instead, it’s unlocked over a 7-day daily check-in calendar. Open the app daily, spin the welcome wheel, and complete small game milestones to claim each daily tier.
            </li>
            <li>
              • <strong>First Deposit Multipliers:</strong> When you make your first deposit of tokens (e.g. ₹100 or ₹500), the platform matches your funds with promotional cashback taken from the wider ₹5,100 promotional pool.
            </li>
          </ul>
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-400/30 text-amber-200 text-xs leading-relaxed">
            <strong>💡 Bonus Rules Tip:</strong> You can’t cash out your promotional bonus chips directly to your bank account without playing. You must wager them on low stake tables (like Points Rummy or micro-stake 3 Patti rooms). Any net wins from these bonus chips are added to your withdrawable cash balance and may be cashed out at any time.
          </div>
        </div>

        {/* 5. Lobby Roundup */}
        <div id="games-breakdown" className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-white border-l-4 border-amber-400 pl-3">
            5. Lobby Roundup: Which Modes Are Actually Worth Playing?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Within the Teen Patti Master main lobby, over 30 dynamic tables and mini-games await you. Here are the most profitable and popular ones:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
              <h4 className="font-bold text-white text-base">1. Classic Teen Patti</h4>
              <p className="text-slate-400 leading-relaxed">Classic 3 card poker format of India. Tables seat 5-6 players. You can play blind (without looking at your hand) to keep stakes low, or see your cards (&quot;Seen&quot;) to raise strategically. Pot limits, shows, and side-show mechanics are in line with official tournament guidelines.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
              <h4 className="font-bold text-white text-base">2. Dragon vs Tiger (Fast 10 Second Rounds)</h4>
              <p className="text-slate-400 leading-relaxed">Great for players wanting quick results and simple rules. The live dealer deals 1 card face up to the Dragon spot and 1 card to the Tiger spot. The side with the higher ranked card wins that round (Kings are high, Aces low).</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
              <h4 className="font-bold text-white text-base">3. Point Rummy (Classic 13 Card)</h4>
              <p className="text-slate-400 leading-relaxed">The format of choice for veteran card players. Place your 13 cards into valid sequences and sets, with at least one pure sequence (no jokers). As this is a game of skill, good hand management and table observation will win out in the long run over pure luck.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
              <h4 className="font-bold text-white text-base">4. Car Roulette &amp; 7 Up &amp; Down</h4>
              <p className="text-slate-400 leading-relaxed">Fast-paced arcade tables with multipliers from 2x all the way to 40x. These modes are popular for quick entertainment and for testing balanced betting patterns.</p>
            </div>
          </div>
        </div>

        {/* 6. Hand Rankings */}
        <div id="hand-rankings" className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-white border-l-4 border-amber-400 pl-3">
            6. Teen Patti Card Hand Rankings (Highest to Lowest)
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            You must memorise the standard hand rankings before you put real money on any table. One common beginner mistake is not knowing the difference between a pure run and a normal flush:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
              <strong className="text-amber-400">1. Set / Trio / Trail (3 of a Kind):</strong> Three cards of the same rank (A-A-A is the best trio, 2-2-2 is the lowest).
            </div>
            <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
              <strong className="text-amber-400">2. Pure Sequence / Straight Flush:</strong> Three cards of the same suit in sequence (e.g. A-2-3 of Spades or K-Q-J of Hearts).
            </div>
            <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
              <strong className="text-amber-400">3. Normal Run / Sequence:</strong> Three consecutive cards of mixed suits (e.g. 4-5-6 of different suits).
            </div>
            <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
              <strong className="text-amber-400">4. Colour / Flush:</strong> Any 3 non-consecutive cards of the same suit (e.g. 2-7-K of Diamonds).
            </div>
            <div className="p-3 bg-slate-950/40 rounded-xl border border-slate-800/80">
              <strong className="text-amber-400">5. Pair:</strong> Two cards of the same rank and a side card that does not match (e.g. J-J-4).
            </div>
            <div className="p-3 bg-slate-950/40 rounded-xl border border-slate-800/80">
              <strong className="text-amber-400">6. High Card (Lowest Hand):</strong> A hand that does not make any combinations, ranked only by its single highest card (e.g. A-10-3, with Ace being the best card).
            </div>
          </div>
        </div>

        {/* 7. Pro Strategies */}
        <div id="pro-strategies" className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-white border-l-4 border-amber-400 pl-3">
            7. Pro Winning Strategies: Dragon vs Tiger &amp; 3 Patti Rules
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Discipline is essential if you want to remain profitable and protect your wallet over the long term. Remember these basic principles:
          </p>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
            <li>• <strong>The 3-Step Pattern Rule (Dragon vs Tiger):</strong> Don’t bet against a hot winning streak blindly. If Tiger has landed twice in a row, stick with the momentum. If the streak is broken, take a round to look at the board.</li>
            <li>• <strong>Limit Blind Rounds in Teen Patti:</strong> Never stay blind for more than two betting turns in a row. Peek at your cards (&quot;Seen&quot;). If you have a below average pair of cards, fold early to save your bankroll for better positions.</li>
            <li>• <strong>Set Strict Daily Stop-Loss Limits:</strong> Set your loss limit before you play (say, ₹500 for the session). If you hit your limit, close the app right away. Similarly, if you hit your target profit (e.g. ₹1,500), stop playing and cash out your profits.</li>
            <li>• <strong>Don&apos;t Chase Your Emotions:</strong> The primary reason why players go broke is that they try to recover all losses in one round, putting all the money they have on the line. Always make bets that are proportional to your total balance.</li>
          </ul>
        </div>

        {/* 8. Instant Withdrawals */}
        <div id="banking-process" className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-white border-l-4 border-amber-400 pl-3">
            8. Instant UPI &amp; IMPS Services Bank Withdrawals: The Full Step-by-Step Guide
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            One of the strongest features of the Teen Patti Master platform is fast, transparent cashouts. Here&apos;s how to make a successful withdrawal:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-300 bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
            <li>Click the <strong>&quot;Withdraw&quot;</strong> button at the top of the main lobby.</li>
            <li>Select your preferred payout channel: <strong>Bank Account</strong> or <strong>UPI</strong>.</li>
            <li><strong>UPI Method (Fastest):</strong> Enter your verified UPI Virtual Payment Address (e.g. <code className="text-amber-400">yournumber@paytm</code> or <code className="text-amber-400">username@okhdfcbank</code>). Double check spelling to avoid failed transactions.</li>
            <li>Choose or enter your desired withdrawal amount (minimum ₹100, maximum ₹10,000 per request).</li>
            <li>Tap <strong>&quot;Confirm&quot;</strong>.</li>
            <li>You will receive funds in your linked bank account or UPI handle within <strong>5-10 minutes</strong> during regular banking hours.</li>
          </ol>
        </div>

        {/* 9. Account Security */}
        <div id="safety-rules" className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-white border-l-4 border-amber-400 pl-3">
            9. Account Security, Fair Play &amp; Avoiding Account Bans
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Keep these strict compliance rules in mind to keep your funds and profile safe and uninterrupted:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm">
            <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 space-y-1">
              <strong className="text-emerald-400">One Account Per Device</strong>
              <p className="text-slate-400">Avoid using app cloner utilities, parallel space tools, or virtual machines to manage multiple accounts on one phone. The security architecture registers hardware IMEI identifiers and clones are met with immediate automated bans.</p>
            </div>
            <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 space-y-1">
              <strong className="text-emerald-400">Shared Wi-Fi, No Collusion</strong>
              <p className="text-slate-400">If you&apos;re trading chips at the same table with multiple devices connected to the same Wi-Fi network, anti-fraud filters will trigger and wallets on both devices will be frozen forever.</p>
            </div>
            <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 space-y-1">
              <strong className="text-emerald-400">Use an Active SIM Card</strong>
              <p className="text-slate-400">Always register with an active mobile number that can receive SMS OTPs. Withdrawal verification failures may happen with temporary virtual or VoIP numbers.</p>
            </div>
          </div>
        </div>

        {/* 10. Refer & Earn */}
        <div id="refer-earn" className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-white border-l-4 border-amber-400 pl-3">
            10. Refer &amp; Earn Programme – Make Daily Passive Income Without Playing
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            If you want to make a steady income without risking your own money at the tables, Teen Patti Master has one of the most lucrative affiliate referral systems:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300 bg-[#0f0a1d]/90 p-6 rounded-2xl border border-slate-800">
            <li>• <strong>Step 1:</strong> Click on the &quot;Refer &amp; Earn&quot; icon in the app lobby.</li>
            <li>• <strong>Step 2:</strong> Get your own personalised invite link.</li>
            <li>• <strong>Step 3:</strong> Share your invite link on social channels, Telegram groups, WhatsApp circles, or YouTube videos relevant to your audience.</li>
            <li>• <strong>Step 4:</strong> When the person you invited downloads the app and signs up successfully, you get an instant cash bonus for each registration.</li>
            <li>• <strong>Step 5 (Lifetime Revenue Share):</strong> Earn an ongoing commission (up to 30% lifetime rake share) paid directly into your affiliate balance as your active referrals play on real money tables. These affiliate earnings can be withdrawn to UPI directly at any time.</li>
          </ul>
        </div>

        {/* 11. Troubleshooting */}
        <div id="troubleshooting" className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-white border-l-4 border-amber-400 pl-3">
            11. Common Issue Troubleshooting &amp; Contact Support
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 space-y-1">
              <strong className="text-amber-400">Withdrawal Status: Processing</strong>
              <p className="text-slate-400">About 1% of transactions could be pending because of brief maintenance durations or clearing cycles on banking servers. Please allow up to 24 hours. The banking system will either pay directly into your account or refund the balance into your game wallet.</p>
            </div>
            <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 space-y-1">
              <strong className="text-amber-400">&quot;App Not Installed&quot; Error:</strong>
              <p className="text-slate-400">Most often, this is because your device storage is full or a conflicting APK build is already on your phone. Fully uninstall old versions, reboot your device, and install the new APK file you downloaded.</p>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
            <strong>24×7 Live Customer Care:</strong> Tap on the &quot;Support&quot; button on the right side of the main lobby. Send your Order ID and transaction screenshots. Live customer reps respond in minutes, typically.
          </div>
        </div>

        {/* 12. FAQ Accordion Section (Rendered via Client Component) */}
        <div id="faq" className="space-y-4 pt-4 border-t border-slate-800">
          <h3 className="text-xl sm:text-2xl font-black text-white border-l-4 border-emerald-400 pl-3">
            12. Frequently Asked Questions (Real Player Questions)
          </h3>
          <FaqSection faqData={faqData} />
        </div>

        {/* Bottom CTA Box */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-950/80 via-slate-950 to-indigo-950/80 border border-emerald-500/40 text-center space-y-4 shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Ready to Play Teen Patti Master?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Download the official 64 MB package now and get instant access to 30+ tables and ₹5,100 welcome rewards!
          </p>
          <div className="pt-2">
            <a
              href={DOWNLOAD_URL}
              className="inline-block py-3.5 px-8 bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 hover:brightness-110 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider rounded-2xl shadow-xl shadow-emerald-500/35 transition active:scale-95"
            >
              ⚡ Download Teen Patti Master APK (64 MB)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
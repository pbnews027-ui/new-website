'use client';

import React, { useState } from 'react';
import './globals.css';

const DOWNLOAD_URL =
  'https://d3q91a2xq73l50.cloudfront.net/cg/files/z117yxg9vxe7n3mp6u3m5x7p/TeenPattiMaster_ya5rcx.apk';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [headerLogoError, setHeaderLogoError] = useState(false);
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#040711] text-slate-100 font-sans antialiased min-h-screen flex flex-col justify-between selection:bg-amber-400 selection:text-black relative">
        {/* =========================================================================
            1. TOP GLOBAL HEADER
        ========================================================================= */}
        <header className="sticky top-0 z-40 bg-[#040711]/90 backdrop-blur-xl px-4 lg:px-12 py-3 border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Brand Logo */}
            <a href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-br from-[#1c122c] to-[#0c0517] border border-amber-400/40 flex items-center justify-center p-1 shrink-0 shadow-lg shadow-amber-500/10">
                {!headerLogoError ? (
                  <img
                    src="/teen-patti-master.webp"
                    alt="Teen Patti Master Logo"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                    onError={() => setHeaderLogoError(true)}
                  />
                ) : (
                  <span className="text-amber-400 font-black text-xl">♠</span>
                )}
              </div>
              <div>
                <span className="text-base sm:text-lg font-black tracking-tight text-white block leading-none">
                  TEEN PATTI <span className="text-amber-400">MASTER</span>
                </span>
                <span className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">
                  OFFICIAL GAMING PORTAL
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-[13px] font-semibold tracking-wide text-slate-300">
              <a href="/" className="text-amber-400 hover:text-amber-300 transition">
                Home
              </a>
              <a href="/#games" className="hover:text-amber-400 transition">
                Game Modes
              </a>
              <a href="/#article" className="hover:text-amber-400 transition">
                Guides
              </a>
              <a href="/#specs" className="hover:text-amber-400 transition">
                Specs
              </a>
              <a href="/#rankings" className="hover:text-amber-400 transition">
                Card Rules
              </a>
              <a href="/#faq" className="hover:text-amber-400 transition">
                Helpdesk
              </a>
            </nav>

            {/* Right Action Button in Header */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <a
                href={DOWNLOAD_URL}
                className="px-4 sm:px-5 py-2.5 bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 hover:from-emerald-300 hover:to-green-400 text-slate-950 rounded-xl text-xs font-black tracking-wider uppercase shadow-md shadow-emerald-500/30 active:scale-95 transition"
              >
                DOWNLOAD
              </a>

              <button
                type="button"
                onClick={() => setNavMenuOpen(!navMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-amber-400 active:scale-95 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  {navMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Quick Dropdown Tray */}
          {navMenuOpen && (
            <div className="mt-3 pt-3 border-t border-slate-800/80 max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs font-bold text-slate-300">
              <a
                href="/"
                onClick={() => setNavMenuOpen(false)}
                className="px-3 py-2 text-center rounded-xl bg-slate-900/80 hover:text-amber-400 hover:bg-slate-800 border border-slate-800 transition"
              >
                Home
              </a>
              <a
                href="/#games"
                onClick={() => setNavMenuOpen(false)}
                className="px-3 py-2 text-center rounded-xl bg-slate-900/80 hover:text-amber-400 hover:bg-slate-800 border border-slate-800 transition"
              >
                Game Modes
              </a>
              <a
                href="/#article"
                onClick={() => setNavMenuOpen(false)}
                className="px-3 py-2 text-center rounded-xl bg-slate-900/80 hover:text-amber-400 hover:bg-slate-800 border border-slate-800 transition"
              >
                Guides
              </a>
              <a
                href="/#specs"
                onClick={() => setNavMenuOpen(false)}
                className="px-3 py-2 text-center rounded-xl bg-slate-900/80 hover:text-amber-400 hover:bg-slate-800 border border-slate-800 transition"
              >
                Specs
              </a>
              <a
                href="/#rankings"
                onClick={() => setNavMenuOpen(false)}
                className="px-3 py-2 text-center rounded-xl bg-slate-900/80 hover:text-amber-400 hover:bg-slate-800 border border-slate-800 transition"
              >
                Card Rules
              </a>
              <a
                href="/#faq"
                onClick={() => setNavMenuOpen(false)}
                className="px-3 py-2 text-center rounded-xl bg-slate-900/80 hover:text-amber-400 hover:bg-slate-800 border border-slate-800 transition"
              >
                FAQ Support
              </a>
            </div>
          )}
        </header>

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
                  <img
                    src="/teen-patti-master.webp"
                    alt="Teen Patti Master Logo"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-black text-amber-400 tracking-tight flex items-center gap-1.5">
                    Teen Patti Master
                    <span className="text-emerald-400 text-sm">♠</span>
                  </h3>
                  <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block">
                    Verified Digital Gaming Hub
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                A premier independent analytical portal committed to fair-play card dynamics, probability calculation, verified Android APK release audits, and safe digital entertainment standards.
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
                  <span className="text-red-500">▶</span> Official Tutorials
                </a>
              </div>
            </div>

            {/* Col 2: Games Lobby Links */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-black tracking-widest text-white uppercase border-l-2 border-emerald-400 pl-2">
                GAMES
              </h4>
              <ul className="space-y-2 text-xs text-slate-400 font-medium">
                <li>
                  <a href="/#games" className="hover:text-amber-400 transition">Classic Teen Patti</a>
                </li>
                <li>
                  <a href="/#games" className="hover:text-amber-400 transition">13-Card Rummy</a>
                </li>
                <li>
                  <a href="/#games" className="hover:text-amber-400 transition">Dragon vs Tiger</a>
                </li>
                <li>
                  <a href="/#games" className="hover:text-amber-400 transition">AK47 &amp; Muflis Tables</a>
                </li>
                <li>
                  <a href="/#games" className="hover:text-amber-400 transition">Point Rummy Arena</a>
                </li>
              </ul>
            </div>

            {/* Col 3: Strategy & Academy */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-black tracking-widest text-white uppercase border-l-2 border-emerald-400 pl-2">
                LEARN
              </h4>
              <ul className="space-y-2 text-xs text-slate-400 font-medium">
                <li>
                  <a href="/#article" className="hover:text-amber-400 transition">Strategy Articles</a>
                </li>
                <li>
                  <a href="/#rankings" className="hover:text-amber-400 transition">Card Hand Strengths</a>
                </li>
                <li>
                  <a href="/#games" className="hover:text-amber-400 transition">Pure Sequences Guide</a>
                </li>
                <li>
                  <a href="/#specs" className="hover:text-amber-400 transition">Free Practice Modes</a>
                </li>
                <li>
                  <a href="/#art-banking" className="hover:text-amber-400 transition">Smart Bankroll Rules</a>
                </li>
              </ul>
            </div>

            {/* Col 4: Trust & Site Support */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-black tracking-widest text-white uppercase border-l-2 border-emerald-400 pl-2">
                SITE
              </h4>
              <ul className="space-y-2 text-xs text-slate-400 font-medium">
                <li>
                  <a href="/#specs" className="hover:text-amber-400 transition">Platform About Us</a>
                </li>
                <li>
                  <a href="/#art-banking" className="hover:text-amber-400 transition">Fair Play &amp; Ethics</a>
                </li>
                <li>
                  <a href="/#faq" className="hover:text-amber-400 transition">24x7 Help Desk</a>
                </li>
                <li>
                  <a href="/#faq" className="hover:text-amber-400 transition">Contact Support</a>
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
                <img
                  src="/teen-patti-master-app-3000.webp"
                  alt="Teen Patti Master App Preview"
                  className="w-full h-auto object-contain rounded-xl"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
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
              <span className="text-slate-500">|</span>
              <span className="text-slate-400 font-medium">
                © 2026 Teen Patti Master. All rights reserved.
              </span>
            </div>

            <p className="text-center md:text-right leading-relaxed max-w-2xl">
              <strong className="text-amber-400 font-black">18+ Only Notice:</strong>{' '}
              Teen Patti Master Hub is an educational and digital entertainment portal. Card gaming may be restricted or subject to local regulations in your jurisdiction. Please verify regional compliance.
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
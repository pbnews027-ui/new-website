'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DOWNLOAD_URL } from '@/lib/site';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/#games', label: 'Game Modes' },
  { href: '/blog', label: 'Guides' },
  { href: '/#app-specs', label: 'Specs' },
  { href: '/#hand-rankings', label: 'Card Rules' },
  { href: '/#faq', label: 'Helpdesk' },
];

export default function SiteHeader() {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#040711]/90 backdrop-blur-xl px-4 lg:px-12 py-3 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-br from-[#1c122c] to-[#0c0517] border border-amber-400/40 flex items-center justify-center p-1 shrink-0 shadow-lg shadow-amber-500/10">
            <Image
              src="/teen-patti-master.webp"
              alt="Teen Patti Master Logo"
              width={32}
              height={32}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform"
            />
          </div>
          <div>
            <span className="text-base sm:text-lg font-black tracking-tight text-white block leading-none">
              TEEN PATTI <span className="text-amber-400">MASTER</span>
            </span>
            <span className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">
              GAMING GUIDE PORTAL
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-semibold tracking-wide text-slate-300">
          {NAV_LINKS.map((link, idx) => (
            <Link
              key={link.href}
              href={link.href}
              className={idx === 0 ? 'text-amber-400 hover:text-amber-300 transition' : 'hover:text-amber-400 transition'}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Action Button in Header */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href={DOWNLOAD_URL}
            rel="nofollow"
            className="px-4 sm:px-5 py-2.5 bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 hover:from-emerald-300 hover:to-green-400 text-slate-950 rounded-xl text-xs font-black tracking-wider uppercase shadow-md shadow-emerald-500/30 active:scale-95 transition"
          >
            DOWNLOAD
          </a>

          <button
            type="button"
            onClick={() => setNavMenuOpen(!navMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={navMenuOpen}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-amber-400 active:scale-95 transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              {navMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Quick Dropdown Tray */}
      {navMenuOpen && (
        <div className="mt-3 pt-3 border-t border-slate-800/80 max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs font-bold text-slate-300">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setNavMenuOpen(false)}
              className="px-3 py-2 text-center rounded-xl bg-slate-900/80 hover:text-amber-400 hover:bg-slate-800 border border-slate-800 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

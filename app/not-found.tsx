import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found - Teen Patti Master Guide',
};

const POPULAR_GUIDES = [
  { href: '/blog/teen-patti-master-download', label: 'Teen Patti Master APK Download Guide' },
  { href: '/blog/teen-patti-master-hand-ranking', label: 'Teen Patti Hand Ranking' },
  { href: '/blog/teen-patti-master-rules-in-hindi', label: 'Teen Patti Rules in Hindi' },
  { href: '/blog/teen-patti-master-dragon-vs-tiger', label: 'Dragon vs Tiger Rules & Tips' },
  { href: '/blog/teen-patti-master-login-problem', label: 'Login Problem Fixes' },
  { href: '/blog/teen-patti-master-withdrawal-problem-pending-solution', label: 'Withdrawal Pending Solution' },
];

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-[#070b14] text-slate-200 px-4 py-16 flex items-center">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <p className="text-6xl sm:text-7xl font-black text-amber-400">404</p>
        <h1 className="text-2xl sm:text-3xl font-black text-white">This page could not be found</h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          The link may be old or mistyped. You can head back to the homepage or pick one of our most
          popular guides below.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="py-3 px-6 bg-gradient-to-r from-emerald-400 to-green-500 text-slate-950 font-black text-sm rounded-xl hover:brightness-110 transition"
          >
            Go to Homepage
          </Link>
          <Link
            href="/blog"
            className="py-3 px-6 bg-slate-900 border border-slate-700 text-slate-200 font-bold text-sm rounded-xl hover:border-amber-400/50 transition"
          >
            Browse All Guides
          </Link>
        </div>

        <nav aria-label="Popular guides" className="pt-6 border-t border-slate-800 text-left">
          <h2 className="text-sm font-black uppercase tracking-widest text-amber-400 mb-3 text-center">
            Popular Guides
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            {POPULAR_GUIDES.map((guide) => (
              <li key={guide.href}>
                <Link
                  href={guide.href}
                  className="block p-3 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-amber-400/50 hover:text-amber-300 transition"
                >
                  {guide.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

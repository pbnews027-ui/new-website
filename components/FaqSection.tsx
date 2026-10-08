'use client';

import React, { useState } from 'react';

export interface FaqItem {
  q: string;
  a: string;
}

export default function FaqSection({ faqData }: { faqData: FaqItem[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {faqData.map((item, idx) => (
        <div
          key={idx}
          className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden transition"
        >
          <button
            type="button"
            onClick={() => toggleFaq(idx)}
            className="w-full flex items-center justify-between p-4 text-left font-bold text-xs sm:text-sm text-white hover:text-amber-400 transition"
          >
            <span>{item.q}</span>
            <span className="text-base text-amber-400 font-black ml-2">
              {openFaq === idx ? '−' : '+'}
            </span>
          </button>

          {openFaq === idx && (
            <div className="px-4 pb-4 text-xs text-slate-300 border-t border-slate-800/60 pt-3 leading-relaxed">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
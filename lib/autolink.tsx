import React from 'react';
import Link from 'next/link';

// Phrases that link to the guide covering that topic. The first match of each target
// inside an article becomes a contextual internal link (helps Google and readers).
const LINK_RULES: { pattern: RegExp; slug: string }[] = [
  { pattern: /\bhand rankings?\b/i, slug: 'teen-patti-master-hand-ranking' },
  { pattern: /\bside shows?\b/i, slug: 'teen-patti-side-show-rules' },
  { pattern: /\bDragon vs Tiger\b/i, slug: 'teen-patti-master-dragon-vs-tiger' },
  { pattern: /\b(Muflis|AK47)\b/, slug: 'teen-patti-master-variations' },
  { pattern: /\b(customer care|in-app support|customer service)\b/i, slug: 'teen-patti-master-customer-care' },
  { pattern: /\b(pending withdrawals?|withdrawals? (stuck|pending))\b/i, slug: 'teen-patti-master-withdrawal-problem-pending-solution' },
  { pattern: /\b(OTP not received|login problems?|stuck on the loading screen)\b/i, slug: 'teen-patti-master-login-problem' },
  { pattern: /\b(App not installed|update problems?)\b/i, slug: 'teen-patti-master-update-problem' },
  { pattern: /\b(old(er)? versions?|older builds?)\b/i, slug: 'teen-patti-master-old-version-download' },
  { pattern: /\bVIP (levels?|program)\b/i, slug: 'teen-patti-master-vip-bonus-tricks' },
  { pattern: /\b(refer and earn|referral programs?)\b/i, slug: 'teen-patti-master-refer-and-earn' },
  { pattern: /\b(UPI ID|bank account)\b/i, slug: 'teen-patti-master-add-bank-account' },
  { pattern: /\b(fake APKs?|modified APKs?|fake clones?)\b/i, slug: 'teen-patti-master-real-or-fake' },
  { pattern: /\b(self-exclusion|close (your|the) account)\b/i, slug: 'teen-patti-master-account-delete' },
  { pattern: /\b(chas(e|ing) losses|dealing with losses)\b/i, slug: 'teen-patti-master-loss-recover' },
  { pattern: /\brules in Hindi\b/i, slug: 'teen-patti-master-rules-in-hindi' },
  { pattern: /\b(trusted source|download (it|the app|Teen Patti Master) (only )?from)\b/i, slug: 'teen-patti-master-download' },
  { pattern: /\bgame modes?\b/i, slug: 'teen-patti-master-game' },
  { pattern: /\b(betting (systems?|habits)|money management)\b/i, slug: 'teen-patti-master-tips-tricks' },
  // Broader fallbacks (also match Hinglish articles) so every guide gets a few links.
  { pattern: /\b(Trail|Pure Sequence)\b/, slug: 'teen-patti-master-hand-ranking' },
  { pattern: /\b(login|OTP)\b/i, slug: 'teen-patti-master-login-problem' },
  { pattern: /\b(update|purana version)\b/i, slug: 'teen-patti-master-update-problem' },
  { pattern: /\b(APK|download)\b/i, slug: 'teen-patti-master-download' },
  { pattern: /\bwithdrawals?\b/i, slug: 'teen-patti-master-instant-withdrawal-upi' },
  { pattern: /\bbonus(es)?\b/i, slug: 'claim-5100-sign-up-bonus-teen-patti-master' },
  { pattern: /\b(scams?|fraud(sters)?)\b/i, slug: 'teen-patti-master-real-or-fake' },
  { pattern: /\b(blind|chaal|boot amount)\b/i, slug: 'teen-patti-master-rules-in-hindi' },
];

const MAX_LINKS_PER_ARTICLE = 8;

export type LinkState = { used: Set<string>; count: number; self: string };

export function createLinkState(selfSlug: string): LinkState {
  return { used: new Set([selfSlug]), count: 0, self: selfSlug };
}

// Returns the text with at most one new contextual link inserted.
export function autolink(text: string, state: LinkState): React.ReactNode {
  if (state.count >= MAX_LINKS_PER_ARTICLE) return text;

  let best: { index: number; length: number; slug: string } | null = null;
  for (const rule of LINK_RULES) {
    if (state.used.has(rule.slug)) continue;
    const m = rule.pattern.exec(text);
    if (m && (!best || m.index < best.index)) best = { index: m.index, length: m[0].length, slug: rule.slug };
  }
  if (!best) return text;

  state.used.add(best.slug);
  state.count += 1;
  const before = text.slice(0, best.index);
  const match = text.slice(best.index, best.index + best.length);
  const after = text.slice(best.index + best.length);
  return (
    <>
      {before}
      <Link href={`/blog/${best.slug}`} className="text-amber-400 underline decoration-amber-400/40 hover:decoration-amber-400">
        {match}
      </Link>
      {after}
    </>
  );
}

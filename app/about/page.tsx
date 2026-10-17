import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import InfoPage from '@/components/InfoPage';
import { SITE_NAME, SITE_URL, TRUST_PAGES_UPDATED } from '@/lib/site';

export const metadata: Metadata = {
  title: `About Us - ${SITE_NAME}`,
  description:
    'Who we are, what we cover and how we write our Teen Patti Master guides. An independent guide site, not affiliated with the game publisher.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: `About ${SITE_NAME}`,
    url: `${SITE_URL}/about`,
    about: { '@id': `${SITE_URL}/#organization` },
  };

  return (
    <InfoPage
      title="About Us"
      path="/about"
      updated={TRUST_PAGES_UPDATED}
      intro={`${SITE_NAME} is an independent website that explains how Teen Patti Master and popular Indian card games work — in plain language, without hype.`}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section>
        <h2>Who We Are</h2>
        <p>
          We are a small editorial team of card game enthusiasts. We started this site because most information about
          Teen Patti apps online is either confusing, outdated or written only to push downloads. We wanted one place
          where players can find clear rules, honest explanations and practical troubleshooting help.
        </p>
      </section>

      <section>
        <h2>We Are Not the Official App</h2>
        <p>
          This is an <strong>independent guide site</strong>. We are not owned by, operated by or affiliated with the
          developer or publisher of Teen Patti Master or any other game mentioned here. All game names, logos and
          trademarks belong to their respective owners. We cannot access player accounts, wallets or withdrawals — for
          those, please use the support option inside the app.
        </p>
      </section>

      <section>
        <h2>What We Cover</h2>
        <ul>
          <li>Game rules and hand rankings for Teen Patti, Dragon vs Tiger and related variants</li>
          <li>Step-by-step help for installation, updates, login and payment problems</li>
          <li>Honest explanations of bonuses, VIP programs and referral schemes</li>
          <li>Safety guides on scams, fake customer care numbers and responsible play</li>
        </ul>
        <p>
          You can browse everything on our <Link href="/blog">guides page</Link>.
        </p>
      </section>

      <section>
        <h2>How We Write Our Guides</h2>
        <ul>
          <li>We explain how things generally work and clearly say when details can vary between apps or tables.</li>
          <li>We do not promise wins, guaranteed income or &quot;tricks&quot; — no such thing exists in games of chance.</li>
          <li>We review and update guides regularly, and show the last updated date on each article.</li>
          <li>If we find a mistake, we correct it. You can report errors through our <Link href="/contact">contact page</Link>.</li>
        </ul>
      </section>

      <section>
        <h2>Responsible Gaming</h2>
        <p>
          Real-money card games carry financial risk and are meant only for adults aged 18 and above. Laws on online
          gaming vary and can change, so please check what applies where you live. If gaming stops being fun, read our{' '}
          <Link href="/blog/teen-patti-master-loss-recover">guide on dealing with losses</Link> or call the free
          Tele-MANAS helpline on 14416. More details are in our <Link href="/disclaimer">disclaimer</Link>.
        </p>
      </section>
    </InfoPage>
  );
}

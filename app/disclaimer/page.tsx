import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import InfoPage from '@/components/InfoPage';
import { SITE_NAME, TRUST_PAGES_UPDATED } from '@/lib/site';

export const metadata: Metadata = {
  title: `Disclaimer & Responsible Gaming - ${SITE_NAME}`,
  description:
    'Important disclaimer: independent guide site, not affiliated with Teen Patti Master. Information only, 18+, real-money gaming risks and legal notice.',
  alternates: { canonical: '/disclaimer' },
};

export default function DisclaimerPage() {
  return (
    <InfoPage
      title="Disclaimer & Responsible Gaming"
      path="/disclaimer"
      updated={TRUST_PAGES_UPDATED}
      intro="Please read this page carefully. It explains what this website is, what it is not, and the risks involved in real-money card games."
    >
      <section>
        <h2>Independent Website</h2>
        <p>
          {SITE_NAME} is an independent information website. We are not the developer, publisher or operator of Teen
          Patti Master, and we are not affiliated with, endorsed by or sponsored by them or any other game mentioned on
          this site. All product names, logos, images and trademarks are the property of their respective owners and
          are used only to identify the games we write about.
        </p>
      </section>

      <section>
        <h2>Information Only</h2>
        <p>
          Our guides are for general information and education. App features, bonus rules, payouts, limits and
          versions can change at any time and may differ between tables or regions. While we try to keep everything
          accurate and up to date, we cannot guarantee that every detail is complete or current. Always check the
          rules shown inside the app before you play.
        </p>
        <p>Nothing on this website is financial, legal or tax advice.</p>
      </section>

      <section>
        <h2>No Guarantees of Winnings</h2>
        <p>
          Card games such as Teen Patti and Dragon vs Tiger involve chance and financial risk. No strategy, trick or
          paid service can guarantee wins or recover losses. Anyone promising guaranteed income or &quot;loss
          recovery&quot; for a fee is very likely running a scam.
        </p>
      </section>

      <section>
        <h2>18+ Only and Legal Notice</h2>
        <p>
          Real-money gaming is strictly for adults aged 18 and above. Laws on online and real-money gaming differ
          between countries and Indian states, and they can change. India&apos;s Promotion and Regulation of Online
          Gaming Act, 2025 places restrictions on online money games. It is your responsibility to check and follow the
          laws that apply where you live before downloading any app or playing for money.
        </p>
      </section>

      <section>
        <h2>Third-Party Downloads and Links</h2>
        <p>
          Some pages link to third-party websites or app files that we do not control. We are not responsible for
          their content, safety, availability or any transactions you make with them. Install apps only from sources
          you trust, and never share your OTP, password or UPI PIN with anyone.
        </p>
      </section>

      <section>
        <h2>Play Responsibly</h2>
        <ul>
          <li>Set a budget before you play and never spend money you need for essentials.</li>
          <li>Set time limits and take regular breaks.</li>
          <li>Never chase losses or borrow money to play.</li>
          <li>Keep gaming apps away from minors.</li>
          <li>
            If gaming is affecting your money, health or relationships, call the free Tele-MANAS helpline on{' '}
            <strong>14416</strong> or read our <Link href="/blog/teen-patti-master-loss-recover">guide on losses</Link>.
          </li>
        </ul>
      </section>

      <section>
        <h2>Questions</h2>
        <p>
          If you have a question about this disclaimer, please reach us through our <Link href="/contact">contact page</Link>.
        </p>
      </section>
    </InfoPage>
  );
}

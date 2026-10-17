import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import InfoPage from '@/components/InfoPage';
import { CONTACT_EMAIL, SITE_NAME, SITE_URL, TRUST_PAGES_UPDATED } from '@/lib/site';

export const metadata: Metadata = {
  title: `Contact Us - ${SITE_NAME}`,
  description:
    'Contact the Teen Patti Master Guide editorial team to report a mistake, suggest a topic or ask about our content.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact ${SITE_NAME}`,
    url: `${SITE_URL}/contact`,
    about: { '@id': `${SITE_URL}/#organization` },
  };

  return (
    <InfoPage
      title="Contact Us"
      path="/contact"
      updated={TRUST_PAGES_UPDATED}
      intro="Found a mistake in one of our guides, or want us to cover a topic? We would love to hear from you."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section>
        <h2>Email Us</h2>
        <p>
          Write to us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We read every message and usually
          reply within 2–3 working days.
        </p>
        <p>To help us respond quickly, please include:</p>
        <ul>
          <li>The link to the page you are writing about</li>
          <li>What you think is wrong or missing</li>
          <li>Any source or screenshot that supports the correction</li>
        </ul>
      </section>

      <section>
        <h2>We Can Help With</h2>
        <ul>
          <li>Corrections and updates to our guides</li>
          <li>Suggestions for new topics</li>
          <li>Questions about our content or editorial approach</li>
          <li>Privacy requests related to this website</li>
        </ul>
      </section>

      <section>
        <h2>We Cannot Help With Game Accounts</h2>
        <p>
          We are an independent guide site and are not connected to the Teen Patti Master app or its publisher. We
          cannot see, unlock or change any game account, and we cannot process deposits, withdrawals or refunds.
        </p>
        <p>
          For account or payment issues, please use the <strong>Help / Customer Service</strong> option inside the
          app. For fraud or unauthorised transactions, call the National Cyber Crime Helpline on <strong>1930</strong> or
          visit cybercrime.gov.in.
        </p>
      </section>

      <section>
        <h2>Stay Safe</h2>
        <p>
          We will never ask for your OTP, password, UPI PIN or any payment. Anyone who contacts you claiming to be from
          this site and asks for money or codes is not us. Read more in our{' '}
          <Link href="/blog/teen-patti-master-withdrawal-problem-pending-solution">withdrawal safety guide</Link>.
        </p>
      </section>
    </InfoPage>
  );
}

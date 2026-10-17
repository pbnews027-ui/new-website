import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import InfoPage from '@/components/InfoPage';
import { CONTACT_EMAIL, SITE_NAME, TRUST_PAGES_UPDATED } from '@/lib/site';

export const metadata: Metadata = {
  title: `Privacy Policy - ${SITE_NAME}`,
  description:
    'How the Teen Patti Master Guide website handles your information: what is collected, how it is used, cookies, third-party links and your choices.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <InfoPage
      title="Privacy Policy"
      path="/privacy-policy"
      updated={TRUST_PAGES_UPDATED}
      intro={`This policy explains what information ${SITE_NAME} (www.bolaseo.com) handles when you visit, and the choices you have. We keep data collection to a minimum.`}
    >
      <section>
        <h2>Information We Collect</h2>
        <p>
          You can read every page on this website without creating an account or giving us any personal details. We
          do not run sign-up forms, comment sections or user accounts.
        </p>
        <ul>
          <li>
            <strong>Server logs:</strong> like almost every website, our hosting provider automatically records basic
            technical data when pages are requested, such as IP address, browser type, the page visited and the time of
            the request. This is used for security, troubleshooting and keeping the site running.
          </li>
          <li>
            <strong>Emails you send us:</strong> if you contact us by email, we receive your email address and whatever
            you choose to include in your message. We use it only to reply to you.
          </li>
        </ul>
      </section>

      <section>
        <h2>Cookies and Analytics</h2>
        <p>
          At the time of writing, this website does not set advertising cookies and does not use third-party analytics
          or tracking tools. If this changes, we will update this policy before doing so.
        </p>
      </section>

      <section>
        <h2>How We Use Information</h2>
        <ul>
          <li>To operate, secure and improve the website</li>
          <li>To respond to messages you send us</li>
          <li>To comply with legal obligations where required</li>
        </ul>
        <p>We do not sell or rent personal information to anyone.</p>
      </section>

      <section>
        <h2>Hosting and Third Parties</h2>
        <p>
          The website is hosted by Vercel, which processes server log data on our behalf to deliver pages. Some pages
          contain links or download buttons that lead to third-party websites and files, including the app download
          link. Once you leave this site, the privacy policy of that third party applies, not ours. Please review it
          before sharing any information.
        </p>
      </section>

      <section>
        <h2>Children</h2>
        <p>
          This website is intended for adults aged 18 and above. We do not knowingly collect information from anyone
          under 18. If you believe a minor has contacted us, please let us know and we will delete the message.
        </p>
      </section>

      <section>
        <h2>Data Retention and Your Rights</h2>
        <p>
          We keep emails only as long as needed to handle your request. You can ask us to access, correct or delete any
          personal information you have sent us by writing to{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </section>

      <section>
        <h2>Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. The &quot;Last updated&quot; date at the top shows when it was
          last changed. Questions? Visit our <Link href="/contact">contact page</Link>.
        </p>
      </section>
    </InfoPage>
  );
}

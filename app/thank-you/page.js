import Link from 'next/link';
import styles from './page.module.css';
import Script from 'next/script';

export const metadata = {
  title: 'Thank You',
  robots: { index: false, follow: false }, // Don't index this page
};

export default function ThankYouPage() {
  return (
    <>
      {/* 
        ============================================================
        FACEBOOK PIXEL — CONVERSION EVENT
        ============================================================
        Replace YOUR_PIXEL_ID below with your actual Meta Pixel ID.
        This fires the 'Lead' event when someone reaches this page
        after submitting the quote form — perfect for Meta Ads 
        conversion tracking and lookalike audience building.
        ============================================================
      */}
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1941381593151670');
          fbq('track', 'PageView');
          fbq('track', 'Lead');
        `}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1941381593151670&ev=Lead&noscript=1"
          alt=""
        />
      </noscript>

      <section className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.iconCircle}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1 className={styles.title}>Thank You!</h1>
          <p className={styles.subtitle}>Your request has been submitted successfully.</p>
          <p className={styles.body}>
            Our team will review your requirements and get back to you within <strong>24–48 hours</strong> with a detailed proposal. We look forward to partnering with you.
          </p>
          <div className={styles.actions}>
            <Link href="/" className="btn btn-primary btn-lg">Back to Home</Link>
            <Link href="/capabilities" className="btn btn-outline btn-lg">Explore Capabilities</Link>
          </div>
        </div>
      </section>
    </>
  );
}

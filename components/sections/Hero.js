import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <img src="/images/hero_bg.png" alt="Modern Lab" className={styles.heroBg} />
      <div className="container">
        <div className={styles.heroContent}>
          <h1>Private Label Gummy &amp; Supplement Manufacturer</h1>
          <p>Launch Your Supplement Brand in 40 Days. We help brands launch efficiently with a fully integrated manufacturing ecosystem built to reduce timelines and optimize costs.</p>
          <div className="flex gap-4" style={{ flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary btn-lg">Request a quote</Link>
            <Link href="/capabilities" className="btn btn-secondary btn-lg">Explore Capabilities</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

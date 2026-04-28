import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <img src="/images/hero_bg.png" alt="Modern Lab" className={styles.heroBg} />
      <div className="container">
        <div className={styles.heroContent}>
          <p className="tagline" style={{ color: 'var(--color-accent)', marginBottom: '1.5rem' }}>Your Wellness, Our Commitment</p>
          <h1 className={styles.title}>
            We build your brand.<br /> 
            <span style={{ color: 'var(--color-accent)' }}>With science no one else can replicate.</span>
          </h1>
          <p className={styles.description}>
            Probiota Innovations is India's only scientist-led gummy nutraceutical manufacturer with access to patented technology and two decades of global R&D expertise.
          </p>
          <div className="flex gap-4" style={{ flexWrap: 'wrap', marginTop: '1rem' }}>
            <Link href="/contact" className="btn btn-primary btn-lg">Request a Quote</Link>
            <Link href="/capabilities" className="btn btn-outline btn-lg" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>Explore Capabilities</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

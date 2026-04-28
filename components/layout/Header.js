'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/data/navigation';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className="container flex justify-between items-center">
        <Link href="/" className={styles.logoLink} style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '2px' }}>
          <span style={{ 
            fontSize: '2rem', 
            fontWeight: '700', 
            letterSpacing: '0.05em', 
            fontFamily: 'serif', 
            color: 'var(--color-primary)',
            lineHeight: 1
          }}>
            PROBI<span style={{ color: 'var(--color-accent)' }}>O</span>TA
          </span>
          <span style={{ 
            fontSize: '0.65rem', 
            letterSpacing: '0.3em', 
            fontWeight: '600', 
            color: 'var(--color-text-muted)',
            textTransform: 'uppercase'
          }}>
            Your Wellness, Our Commitment
          </span>
        </Link>
        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary">Request a Quote</Link>
        </nav>
      </div>
    </header>
  );
}

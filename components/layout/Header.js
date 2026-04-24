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
        <Link href="/" className={styles.logoLink}>
          <img src="/images/probiota-logo.png" alt="Probiota Innovations" className={styles.logo} />
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

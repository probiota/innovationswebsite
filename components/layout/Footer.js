import Link from 'next/link';
import { footerCapabilities, footerCompany } from '@/data/navigation';
import styles from './Footer.module.css';

const socialLinks = [
  { label: 'Facebook', href: '#', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
  { label: 'Instagram', href: '#', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
  { label: 'YouTube', href: '#', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s-1-5-3-7c-2-1-14-1-16 0C2 7 1 12 1 12s1 5 3 7c2 1 14 1 16 0 2-2 3-7 3-7zm-13 4V8l8 4-8 4z"/></svg> },
  { label: 'LinkedIn', href: '#', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container grid grid-cols-4 gap-8">
        {/* Col 1: Brand + Socials */}
        <div>
          <img src="/images/probiota-logo.png" alt="Probiota" className={styles.footerLogo} />
          <p className={styles.footerDesc}>Your trusted manufacturing partner for private label and contract manufacturing of premium supplements and pectin gummy products.</p>
          <h4 className={styles.footerHeading} style={{ marginTop: '1.5rem' }}>Connect With Us</h4>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2: Important Links */}
        <div>
          <h4 className={styles.footerHeading}>Important Links</h4>
          <ul className={styles.footerList}>
            {footerCapabilities.map((link) => (
              <li key={link.label}><Link href={link.href}>{link.label}</Link></li>
            ))}
            {footerCompany.map((link) => (
              <li key={link.label}><Link href={link.href}>{link.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Col 3: Legal */}
        <div>
          <h4 className={styles.footerHeading}>Legal</h4>
          <ul className={styles.footerList}>
            {legalLinks.map((link) => (
              <li key={link.label}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </div>

        {/* Col 4: Need Help */}
        <div>
          <h4 className={styles.footerHeading}>Need Help?</h4>
          <ul className={styles.footerList}>
            <li>
              <span style={{ fontSize: '0.8rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Call Us:</span><br />
              <a href="tel:+919990333731">+91 999 0333 731</a>
            </li>
            <li>
              <span style={{ fontSize: '0.8rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.05em' }}>General Inquiries</span><br />
              <a href="mailto:info@probiotainnovations.com">info@probiotainnovations.com</a>
            </li>
            <li>
              <span style={{ fontSize: '0.8rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Careers</span><br />
              <a href="mailto:info@probiotainnovations.com">Join Our Team</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Probiota Innovations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

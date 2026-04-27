import Link from 'next/link';

export default function CtaBanner({ title, subtitle, buttonText, buttonHref, variant = 'light' }) {
  const sectionStyle = variant === 'dark'
    ? { backgroundColor: 'var(--color-primary)', color: 'white' }
    : { backgroundColor: 'var(--color-secondary)', color: 'var(--color-text)' };

  const titleColor = variant === 'dark' ? 'white' : 'var(--color-primary)';
  const subtitleColor = variant === 'dark' ? 'var(--color-surface-alt)' : 'var(--color-text-muted)';

  return (
    <section className="section text-center" style={sectionStyle}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: titleColor }}>{title}</h2>
        <p style={{ fontSize: '1.25rem', maxWidth: '650px', margin: '0 auto 2.5rem', color: subtitleColor }}>{subtitle}</p>
        <Link href={buttonHref} className="btn btn-primary btn-lg">{buttonText}</Link>
      </div>
    </section>
  );
}

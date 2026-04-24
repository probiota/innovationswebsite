import Link from 'next/link';

export default function CtaBanner({ title, subtitle, buttonText, buttonHref, variant = 'light' }) {
  const sectionStyle = variant === 'dark'
    ? { backgroundColor: 'hsl(var(--primary))', color: 'white' }
    : { backgroundColor: 'hsl(var(--secondary))' };

  const titleColor = variant === 'dark' ? 'white' : 'hsl(var(--primary))';

  return (
    <section className="section text-center" style={sectionStyle}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: titleColor }}>{title}</h2>
        <p style={{ fontSize: '1.25rem', maxWidth: '650px', margin: '0 auto 2.5rem', color: variant === 'dark' ? 'hsl(var(--secondary))' : undefined }}>{subtitle}</p>
        <Link href={buttonHref} className="btn btn-primary btn-lg">{buttonText}</Link>
      </div>
    </section>
  );
}

import CtaBanner from '@/components/sections/CtaBanner';

export const metadata = { title: 'Certifications' };

const certifications = [
  { logo: '/certifications/FDA-1.svg', title: 'US FDA', sub: 'Registered Facility' },
  { logo: '/certifications/GMP.svg', title: 'WHO-GMP', sub: 'World Health Organization' },
  { logo: '/certifications/FSSAI.svg', title: 'FSSAI', sub: 'Food Safety' },
];

export default function CertificationsPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Certifications</h1>
          <p>At Probiota Innovations, quality is at the foundation of everything we manufacture. Backed by globally recognized certifications, our facility is designed to meet the highest standards of safety, consistency, and compliance ensuring every product is reliable, effective, and market-ready.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div className="cert-card" key={cert.title}>
                <img src={cert.logo} alt={cert.title} style={{ height: 60, margin: '0 auto 1.5rem' }} />
                <h3>{cert.title}</h3>
                <p style={{ color: 'hsl(var(--muted-foreground))', fontWeight: 500 }}>{cert.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Partner with a Certified Manufacturer"
        subtitle="We ensure your products meet global expectations in quality, performance, and scalability."
        buttonText="Request A Quote"
        buttonHref="/contact"
      />
    </>
  );
}

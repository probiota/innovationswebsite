import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import CtaBanner from '@/components/sections/CtaBanner';

const capabilities = [
  { title: 'Custom Gummy Manufacturing', description: 'Specializing in pectin-based products with tailored flavors, shapes, and active ingredients to make your brand stand out.', icon: 'shield' },
  { title: 'Private Label Supplements', description: 'Turnkey solutions for launching market-ready formulations with your branding, backed by our rigorous quality assurance.', icon: 'briefcase' },
  { title: 'Scalable Contract Manufacturing', description: "Whether you're an emerging brand or an established enterprise, our facilities scale seamlessly to meet your volume requirements.", icon: 'activity' },
];

const processSteps = [
  { num: 1, title: 'Formulation & R&D', desc: 'Collaborate with our experts to develop the perfect taste, texture, and nutritional profile.' },
  { num: 2, title: 'Compliance & Testing', desc: 'Rigorous quality control ensuring your product meets all regulatory standards before production.' },
  { num: 3, title: 'Production & Packaging', desc: 'Efficient, automated manufacturing and modern packaging ready for the retail shelf or D2C shipping.' },
];

const proofPoints = [
  'Globally patented technology',
  'Research driven formulation approach',
  'Strong R&D expertise & technical guidance',
  'Flexible batch sizes and scalable production',
];

const premiumIngredients = [
  'Vegan & Plant Based',
  'Pectin Based',
  'Non GMO',
  'Gelatin Free',
  'Gluten Free',
  'Cruelty Free',
  'Low Sugar or Sugar Free',
];

const designedYourWay = [
  { title: 'Shapes & Sizes', desc: 'Choose from a variety of shapes and sizes to match your brand\'s vision.' },
  { title: 'Colors', desc: 'Customizable colors to align with your branding and product appeal.' },
  { title: 'Flavors & Textures', desc: 'A wide range of flavors and textures, from chewy to soft pectin-based gummies.' },
  { title: 'Nutritional Formulations', desc: 'Tailor the nutritional profile with precise dosages of vitamins, minerals, and functional ingredients.' },
];

const certLogos = [
  { src: '/certifications/FSSAI.svg', alt: 'FSSAI' },
  { src: '/certifications/Lab-Tested.svg', alt: 'Lab Tested' },
  { src: '/certifications/Make-In-India.svg', alt: 'Make in India' },
  { src: '/certifications/ISO-22000.svg', alt: 'ISO 22000' },
  { src: '/certifications/FDA-1.svg', alt: 'FDA Approved' },
  { src: '/certifications/GMP.svg', alt: 'GMP Certified' },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Capabilities Snapshot */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Endless Possibilities in Manufacturing</h2>
            <p>Scalable solutions from product formulation to full private label production.</p>
          </div>
          <div className="grid grid-cols-3">
            {capabilities.map((cap) => (
              <div className="card" key={cap.title}>
                <div className="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div className="card-body">
                  <h3 className="card-title">{cap.title}</h3>
                  <p>{cap.description}</p>
                </div>
                <Link href="/capabilities" className="btn btn-outline" style={{ width: '100%' }}>Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* From Concept to Commercial Scale */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-8">
            <div>
              <p className="badge" style={{ marginBottom: '1rem' }}>Our Development Process</p>
              <h2>From Concept to Commercial Scale</h2>
              <p>We are a full-service supplement manufacturing partner delivering custom formulations, product development, and large-scale production across gummies and functional nutraceuticals. From ideation to final packaging, we help brands launch faster and scale efficiently.</p>

              {/* Proof Points */}
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '2rem', marginBottom: '2.5rem' }}>
                {proofPoints.map((point) => (
                  <li key={point} style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <span style={{ color: 'var(--color-accent)', fontSize: '1.1rem', flexShrink: 0 }}>●</span>
                    <span style={{ fontWeight: 500 }}>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Process Steps */}
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {processSteps.map((step) => (
                  <li key={step.num} style={{ marginBottom: '1.5rem', display: 'flex', gap: '1.25rem' }}>
                    <div style={{
                      background: 'var(--color-accent)', color: 'var(--color-text)', borderRadius: '50%',
                      width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, fontWeight: 600, fontSize: '1.1rem'
                    }}>{step.num}</div>
                    <div>
                      <h4 style={{ marginBottom: '0.25rem' }}>{step.title}</h4>
                      <p style={{ fontSize: '0.95rem', marginBottom: 0 }}>{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img src="/images/private-label-manufacturing.jpg" alt="Automated Production Line" style={{ borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-xl)', width: '100%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Customizable Manufacturing For Diverse Needs */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Customizable Manufacturing For Diverse Needs</h2>
          </div>
          <div className="grid grid-cols-2 items-start gap-8">
            {/* Premium Ingredients */}
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Premium Ingredients</h3>
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                {premiumIngredients.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span style={{ fontWeight: 500, fontSize: '1.05rem' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Designed Your Way */}
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Designed Your Way</h3>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {designedYourWay.map((item) => (
                  <div key={item.title} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <div>
                      <strong style={{ fontSize: '1.05rem' }}>{item.title}</strong>
                      <p style={{ fontSize: '0.95rem', margin: '0.25rem 0 0', color: 'var(--color-text-muted)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Globally Patented Callout */}
      <section className="section bg-dark" style={{ padding: '5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white', fontSize: '2.25rem', marginBottom: '1.5rem', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
            Globally Patented Manufacturing for Next-Gen Wellness Brands
          </h2>
          <p style={{ color: 'var(--color-surface-alt)', opacity: 0.9, fontSize: '1.15rem', maxWidth: '850px', margin: '0 auto', lineHeight: 1.7 }}>
            Our patented technologies across Canada, the UK, and key European markets enable us to deliver advanced, high-performance formulations at scale. We help brands accelerate product development, ensure consistent quality, and differentiate in competitive markets with proven, globally recognized manufacturing capabilities.
          </p>
        </div>
      </section>

      {/* Certifications Strip */}
      <section className="section" style={{ padding: '4rem 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container text-center">
          <div className="flex justify-center items-center gap-6" style={{ flexWrap: 'wrap' }}>
            {certLogos.map((logo) => (
              <img key={logo.alt} src={logo.src} alt={logo.alt} style={{ height: 120 }} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to bring your product to life?"
        subtitle="Partner with Probiota Innovations for reliable, scalable, and high-quality supplement manufacturing."
        buttonText="Request a Free Quote"
        buttonHref="/contact"
        variant="light"
      />
    </>
  );
}

import CtaBanner from '@/components/sections/CtaBanner';
import GlobeSection from '@/components/sections/GlobeSectionWrapper';

export const metadata = { title: 'Capabilities & Contract Manufacturing' };

const categories = [
  { title: 'Gut Health & Probiotics', desc: 'Advanced probiotic and synbiotic gummies with temperature- and pH-stable strains for effective microbiome support.' },
  { title: 'Sleep, Stress & Mood', desc: 'Formulations with ashwagandha, L-theanine, melatonin, and adaptogens designed for relaxation, recovery, and cognitive balance.' },
  { title: 'Beauty, Skin & Hair', desc: 'High-performance blends featuring biotin, collagen, glutathione, and antioxidants for skin radiance and hair strength.' },
  { title: 'Immunity & Daily Wellness', desc: 'Vitamin-rich formulations with Vitamin C, Zinc, and botanicals to support year-round immunity.' },
  { title: 'Energy, Focus & Performance', desc: 'Targeted blends with B-vitamins, adaptogens, amino acids, and functional actives for sustained energy and mental clarity.' },
  { title: 'Sports Nutrition & Recovery', desc: 'High-load formulations including protein, magnesium, and amino acids to support performance and post-workout recovery.' },
  { title: 'Heart, Metabolic & Longevity', desc: 'Advanced formulations with Omega fatty acids, resveratrol, and antioxidants for cardiovascular and cellular health.' },
  { title: 'Multivitamins & Daily Nutrition', desc: 'Targeted formulations for daily nutrition across age groups.' },
];

const formats = [
  { title: 'Pectin-Based Gummies', desc: '100% plant-based, vegan-friendly formulations.' },
  { title: 'Gelatin Gummies', desc: 'Optimized texture, stability, and taste.' },
  { title: 'Probiotic Gummies', desc: 'Stable live cultures using proprietary technology.' },
  { title: 'Sugar-Free / Organic', desc: 'Low-sugar and clean-label product development.' },
];

export default function CapabilitiesPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Capabilities &amp; Contract Manufacturing</h1>
          <p>Complete manufacturing solutions covering sourcing, formulation, production, and packaging delivered through a streamlined, scalable process.</p>
        </div>
      </section>

      {/* Radial Globe Section */}
      <section className="feature-block">
        <div className="container">
          <GlobeSection />
        </div>
      </section>

      {/* Pectin Based */}
      <section className="feature-block bg-light">
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-8">
            <div className="feature-content">
              <span className="badge">Core Expertise</span>
              <h2>Pectin-Based &amp; Functional Gummies</h2>
              <p>At Probiota Innovations, we specialize in pectin-based (vegan) gummies alongside a wide range of functional supplement formats. Our manufacturing capabilities are built to support modern wellness brands with high-performance, scalable, and market-ready products.</p>
              <p>Modern lifestyles have created a clear gap—people want functional health solutions without pills, powders, or complex routines. Gummies solve this by combining compliance, taste, and clinically relevant delivery in a single format.</p>
              <p>Our advanced formulation capabilities—including patented probiotic stabilisation technology—enable brands to deliver high-performance actives in gummy formats that were traditionally difficult to formulate, such as probiotics, oils, and multi-nutrient blends.</p>
            </div>
            <div>
              <img src="/images/build-your-brand.jpg" alt="Product Formats" style={{ borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-md)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Functional Categories */}
      <section className="feature-block">
        <div className="container">
          <div className="section-header">
            <h2>Functional Categories We Formulate For</h2>
            <p>We develop issue-led, science-backed gummy formulations that help brands stand out in competitive markets.</p>
          </div>
          <div className="grid-list">
            {categories.map((cat) => (
              <div className="grid-list-item" key={cat.title}>
                <h4>{cat.title}</h4>
                <p>{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="feature-block bg-dark" style={{ color: 'white' }}>
        <div className="container text-center">
          <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '3rem' }}>Our Product Formats</h2>
          <div className="grid grid-cols-4 gap-4" style={{ textAlign: 'left' }}>
            {formats.map((fmt) => (
              <div key={fmt.title} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: 'var(--radius)' }}>
                <h4 style={{ color: 'hsl(var(--accent))', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{fmt.title}</h4>
                <p style={{ color: 'hsl(var(--secondary))', opacity: 0.8, fontSize: '0.9rem', marginBottom: 0 }}>{fmt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Discuss Your Manufacturing Needs"
        subtitle="Our technical sales team is ready to review your requirements and provide a detailed proposal."
        buttonText="Request A Quote"
        buttonHref="/contact"
      />
    </>
  );
}

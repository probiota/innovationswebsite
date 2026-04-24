import CtaBanner from '@/components/sections/CtaBanner';

export const metadata = { title: 'About Us' };

const founders = [
  {
    name: 'Dr. Shrilaxmi Desiraju',
    role: 'Founder & CEO',
    image: '/images/Dr._Shrilaxmi_Desiraju.webp',
    bio: "PhD and MBA technopreneur with 22+ years' expertise in pharma and nutraceuticals, excelling in R&D commercialization, strategic partnerships, funding, IP, compliance, business development, licensing, and building sustainable ventures.",
  },
  {
    name: 'Anshika Narula',
    role: 'Founder & CEO',
    image: '/images/Anshika_Narula.webp',
    bio: 'Co-founder driving operational excellence, marketing, and strategic growth. Dedicated to translating scientific innovation into scalable, high-performance wellness solutions for modern brands.',
  },
];

const whyPartner = [
  { title: 'Rapid Commercialization', desc: 'We help brands move from concept to market in as little as 40 days. Our integrated manufacturing process eliminates bottlenecks across formulation, production, and packaging.' },
  { title: 'Functional Nutrition', desc: 'We develop targeted gummy formulations designed for real consumer needs from gut health and immunity to beauty, sleep, and stress support.' },
  { title: 'Advanced Product Development', desc: 'With patented technologies and research-driven processes, we create stable, high-performance gummies that maintain potency, consistency, and shelf-life across conditions.' },
  { title: 'Regulatory & Quality Excellence', desc: 'Our manufacturing is built on globally recognized certifications including US FDA, EU GMP, WHO-GMP, and Health Canada regulations.' },
  { title: 'Proven Industry Expertise', desc: 'With deep experience in nutraceutical manufacturing and formulation science, we understand what it takes to build successful supplement brands.' },
  { title: 'Global Market Readiness', desc: 'Our capabilities are built for brands targeting international markets. We ensure your products meet global expectations in quality, performance, and scalability.' },
];

export default function AboutUsPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Probiota Innovations is a next-generation gummy and nutraceutical contract manufacturing partner focused on building high-performance supplements for modern wellness brands.</p>
        </div>
      </section>

      {/* Who We Are */}
      <section style={{ padding: '4rem 0', borderBottom: '1px solid hsl(var(--border))' }}>
        <div className="container">
          <div className="grid grid-cols-2 gap-8 items-center">
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'hsl(var(--primary))' }}>Who We Are</h2>
              <p>Founded by doctorate scientists, we combine advanced formulation science, globally patented technologies, and scalable manufacturing to help brands launch, differentiate, and grow.</p>
              <p>We specialize in functional gummies and supplement formulations, supporting brands from concept to commercialization. As a full-service private label gummy manufacturer, we deliver end-to-end solutions across formulation, manufacturing, packaging, and regulatory support built for speed, quality, and scale.</p>
            </div>
            <div className="grid" style={{ gap: '1rem' }}>
              {[
                { title: 'Our Mission', desc: 'To help brands build high-quality, science-backed gummy supplements with speed, consistency, and scalability.' },
                { title: 'Our Vision', desc: 'To become a global leader in functional gummy manufacturing, setting new standards in formulation science, product performance, and manufacturing excellence.' },
                { title: 'Our Values', desc: 'We are driven by quality, transparency, and innovation. Every product we create is built on scientific integrity, consistent manufacturing standards, and a commitment to helping brands deliver reliable, measurable wellness outcomes.' },
              ].map((v) => (
                <div className="value-card" key={v.title}>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Patented Tech */}
      <section className="bg-light" style={{ padding: '4rem 0', borderBottom: '1px solid hsl(var(--border))' }}>
        <div className="container">
          <div className="grid grid-cols-2 gap-8 items-center">
            <div>
              <img src="/images/advanced-formulation.jpg" alt="R&D Formulation Lab" style={{ borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-md)' }} />
            </div>
            <div>
              <span className="badge">Innovation</span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'hsl(var(--primary))' }}>Our Patented Probiotic Stabilisation Technology</h2>
              <p>Most probiotics lose viability before they reach the gut due to heat, moisture, and digestive conditions impacting product effectiveness and label claims. At Probiota Innovations, we have solved this challenge through advanced formulation science.</p>
              <p>Led by doctorate scientists, we have developed a proprietary, patented stabilisation technology that enables probiotics to remain stable across extreme conditions without the need for refrigeration and without compromising potency over time.</p>
              <p>Our technology allows live probiotic strains to withstand a wide temperature range and survive harsh pH environments, ensuring that formulations deliver the intended efficacy at the point of consumption.</p>
              <p>For brands, this unlocks new possibilities. Probiotics can now be seamlessly integrated into gummy formats and other delivery systems that were previously difficult to stabilize without sacrificing performance, shelf-life, or consistency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-light text-center" style={{ padding: '4rem 0', borderBottom: '1px solid hsl(var(--border))' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: 'hsl(var(--primary))' }}>Experts Behind our Innovation</h2>
          <div className="grid grid-cols-2 gap-8">
            {founders.map((f) => (
              <div key={f.name} style={{ background: 'white', padding: '3rem', borderRadius: 'var(--radius-lg)', border: '1px solid hsl(var(--border))', boxShadow: 'var(--shadow-sm)' }}>
                <img src={f.image} alt={f.name} style={{ width: 200, height: 200, borderRadius: '50%', margin: '0 auto 2rem', objectFit: 'cover', boxShadow: 'var(--shadow-md)' }} />
                <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'hsl(var(--primary))' }}>{f.name}</h3>
                <p style={{ color: 'hsl(var(--muted-foreground))', fontWeight: 500, fontSize: '1rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{f.role}</p>
                <p style={{ fontSize: '1rem', lineHeight: 1.6, color: 'hsl(var(--foreground))' }}>{f.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="bg-dark" style={{ padding: '4rem 0', color: 'white' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', color: 'white', fontSize: '2.5rem', marginBottom: '4rem' }}>Why Partner With Us</h2>
          <div className="grid grid-cols-3 gap-8">
            {whyPartner.map((item) => (
              <div key={item.title}>
                <h3 style={{ color: 'hsl(var(--accent))', fontSize: '1.25rem' }}>{item.title}</h3>
                <p style={{ color: 'hsl(var(--secondary))', opacity: 0.9 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Discuss Your Manufacturing Needs"
        subtitle="Our technical sales team is ready to review your requirements and provide a detailed proposal."
        buttonText="Contact Our Experts"
        buttonHref="/contact"
      />
    </>
  );
}

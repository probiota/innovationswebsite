import React from 'react';

export const metadata = { title: 'Terms & Conditions | Probiota Innovations' };

export default function TermsPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Terms & Conditions</h1>
          <p>Effective Date: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gap: '1.5rem', lineHeight: 1.7 }}>
            <p>Welcome to Probiota Innovations. By accessing or using our website and services, you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully.</p>

            <h3 style={{ marginTop: '1rem', color: 'var(--color-primary)' }}>1. Use of Website and Services</h3>
            <p>Probiota Innovations provides contract manufacturing, private label, and R&D formulation services for B2B clients. The content on this website is for informational purposes related to our services. You agree to use this site and our services only for lawful purposes.</p>

            <h3 style={{ marginTop: '1rem', color: 'var(--color-primary)' }}>2. Intellectual Property</h3>
            <p>All content on this website, including text, graphics, logos, images, and software, is the property of Probiota Innovations or its content suppliers and is protected by intellectual property laws. Our patented manufacturing technologies and proprietary formulations remain our exclusive intellectual property unless otherwise agreed in writing.</p>

            <h3 style={{ marginTop: '1rem', color: 'var(--color-primary)' }}>3. Confidentiality and Non-Disclosure</h3>
            <p>We routinely sign Non-Disclosure Agreements (NDAs) with our partners. Any proprietary information, formulations, or business strategies shared between you and Probiota Innovations will be treated with the utmost confidentiality in accordance with the signed agreements.</p>

            <h3 style={{ marginTop: '1rem', color: 'var(--color-primary)' }}>4. Proposals and Quotes</h3>
            <p>Any quotes or proposals provided through the website or by our team are estimates based on the information provided. Final terms, pricing, and manufacturing timelines will be detailed in a formal Manufacturing Agreement or Purchase Order.</p>

            <h3 style={{ marginTop: '1rem', color: 'var(--color-primary)' }}>5. Compliance and Regulations</h3>
            <p>While Probiota Innovations manufactures products in facilities aligned with FSSAI, GMP, and other international standards, the client (brand owner) is ultimately responsible for ensuring that the final marketed product, its labeling, and claims comply with the regulatory requirements of the jurisdictions where the product will be sold.</p>

            <h3 style={{ marginTop: '1rem', color: 'var(--color-primary)' }}>6. Limitation of Liability</h3>
            <p>To the fullest extent permitted by law, Probiota Innovations shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our website or services.</p>

            <h3 style={{ marginTop: '1rem', color: 'var(--color-primary)' }}>7. Changes to Terms</h3>
            <p>We reserve the right to update or modify these Terms & Conditions at any time without prior notice. Your continued use of the website following any changes constitutes your acceptance of the revised Terms.</p>

            <h3 style={{ marginTop: '1rem', color: 'var(--color-primary)' }}>8. Contact Information</h3>
            <p>If you have any questions about these Terms & Conditions, please contact us at:</p>
            <p style={{ background: 'var(--color-light)', padding: '1.5rem', borderRadius: 'var(--radius)', border: '1px solid var(--color-border)' }}>
              <strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Probiota Innovations</strong>
              Email: <a href="mailto:info@probiotainnovations.com" style={{ color: 'var(--color-accent)' }}>info@probiotainnovations.com</a><br />
              Phone: <a href="tel:+919990333731" style={{ color: 'var(--color-accent)' }}>+91 999 0333 731</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

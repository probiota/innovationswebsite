import React from 'react';

export const metadata = { title: 'Privacy Policy | Probiota Innovations' };

export default function PrivacyPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Effective Date: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gap: '1.5rem', lineHeight: 1.7 }}>
            <p>At Probiota Innovations, we are committed to protecting the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our website or engage our contract manufacturing and private label services.</p>

            <h3 style={{ marginTop: '1rem', color: 'var(--color-primary)' }}>1. Information We Collect</h3>
            <p>We may collect personal information such as your name, email address, phone number, company details, and project requirements when you use our contact forms, request a quote, or communicate with our technical sales team.</p>

            <h3 style={{ marginTop: '1rem', color: 'var(--color-primary)' }}>2. How We Use Your Information</h3>
            <p>We use the information collected to:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '-1rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>Respond to your inquiries and provide detailed manufacturing proposals.</li>
              <li style={{ marginBottom: '0.5rem' }}>Facilitate project communication, formulation development, and order fulfillment.</li>
              <li style={{ marginBottom: '0.5rem' }}>Improve our website, services, and customer experience.</li>
              <li>Comply with applicable legal and regulatory requirements.</li>
            </ul>

            <h3 style={{ marginTop: '1rem', color: 'var(--color-primary)' }}>3. Information Sharing and Disclosure</h3>
            <p>As a B2B manufacturing partner, we value confidentiality. We do not sell or rent your personal or business information to third parties. We may share information with trusted service providers who assist us in operating our business, under strict confidentiality agreements.</p>

            <h3 style={{ marginTop: '1rem', color: 'var(--color-primary)' }}>4. Data Security</h3>
            <p>We implement industry-standard security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure.</p>

            <h3 style={{ marginTop: '1rem', color: 'var(--color-primary)' }}>5. Cookies and Tracking</h3>
            <p>Our website may use cookies and similar tracking technologies to enhance user experience, analyze website traffic, and understand how visitors interact with our site. You can adjust your browser settings to refuse cookies, though some site features may not function properly.</p>

            <h3 style={{ marginTop: '1rem', color: 'var(--color-primary)' }}>6. Your Rights</h3>
            <p>You have the right to access, update, or request the deletion of your personal information. If you wish to exercise these rights or have questions about our privacy practices, please contact us.</p>

            <h3 style={{ marginTop: '1rem', color: 'var(--color-primary)' }}>7. Contact Us</h3>
            <p>For any privacy-related questions or concerns, please reach out to us at:</p>
            <p style={{ background: 'var(--color-light)', padding: '1.5rem', borderRadius: 'var(--radius)', border: '1px solid var(--color-border)' }}>
              <strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Probiota Innovations</strong>
              Email: <a href="mailto:info@probiotainnovations.com" style={{ color: 'var(--color-accent)' }}>info@probiotainnovations.com</a><br />
              Phone: <a href="tel:+918368490741" style={{ color: 'var(--color-accent)' }}>+91 836 8490 741</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

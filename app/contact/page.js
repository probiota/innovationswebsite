import ContactForm from '@/components/sections/ContactForm';

export const metadata = { title: 'Contact Us' };

export default function ContactPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We&apos;d Love to Hear From You. Whether you&apos;re looking for contract manufacturing, private label, or R&amp;D formulation, our team is ready to help.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-container">
          {/* Left column — same card treatment as the form */}
          <div className="contact-form-container">
            <h2>Reach Us At</h2>

            <div className="contact-info-block">
              <h3>Phone</h3>
              <p><a href="tel:+918368490741">+91 836 8490 741</a></p>
            </div>

            <div className="contact-info-block">
              <h3>Email</h3>
              <p><a href="mailto:info@probiotainnovations.com">info@probiotainnovations.com</a></p>
            </div>

            <div className="contact-info-block">
              <h3>Headquarters &amp; Manufacturing</h3>
              <p>Plot Number 123, Survey No. 127, 3rd phase<br />Koorgalli Industrial Area, Illawala Hobli<br />Mysore 570018, Karnataka, India</p>
            </div>

            <div className="contact-info-block" style={{ marginBottom: 0 }}>
              <h3>Corporate Office</h3>
              <p style={{ marginBottom: 0 }}>M-135, Connaught Place<br />New Delhi - 110001, India</p>
            </div>
          </div>

          {/* Right column — form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

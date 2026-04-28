'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ContactForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    } catch (err) {
      // Still redirect — the lead data can be captured server-side later
    }

    router.push('/thank-you');
  }

  return (
    <div className="contact-form-container">
      <h2>Request a Quote / Demo</h2>
      <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="4db9a486-e246-48bc-b775-65b9c061ea4c" />
        <input type="hidden" name="subject" value="New Lead: Probiota Innovations Website" />
        <input type="hidden" name="from_name" value="Probiota Website" />
        <input type="hidden" name="redirect" value="https://probiotainnovations.com/thank-you" />

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="first_name" className="form-label">First Name *</label>
            <input type="text" id="first_name" name="first_name" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="last_name" className="form-label">Last Name *</label>
            <input type="text" id="last_name" name="last_name" className="form-control" required />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="company" className="form-label">Company / Brand Name *</label>
          <input type="text" id="company" name="company" className="form-control" required />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Business Email *</label>
          <input type="email" id="email" name="email" className="form-control" required />
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input type="tel" id="phone" name="phone" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="interest" className="form-label">I am interested in...</label>
          <select id="interest" name="interest" className="form-control">
            <option value="contract_manufacturing">Contract Manufacturing (Bulk)</option>
            <option value="private_label">Private / White Label Solutions</option>
            <option value="custom_formulation">Custom R&amp;D / Formulation</option>
            <option value="pectin_gummies">Pectin Gummies</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group" style={{ marginBottom: '2rem' }}>
          <label htmlFor="message" className="form-label">Message / Details of your request</label>
          <textarea id="message" name="message" className="form-control" rows="5"></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-lg"
          style={{ width: '100%' }}
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}

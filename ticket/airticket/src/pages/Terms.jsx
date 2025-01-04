import React, { useState } from 'react';
import './Terms.css'; // Add a CSS file for styling


const Terms  = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms and Conditions</h1>

      <section className="terms-section">
        <h2 className="section-title">Acceptance of Terms</h2>
        <p className="section-content">
          By accessing and using our website, you agree to be bound by the following terms and conditions. If you do not agree, please do not use our services.
        </p>
      </section>

      <section className="terms-section">
        <h2 className="section-title">Use of Service</h2>
        <p className="section-content">
          Our services are intended for lawful purposes only. You agree not to use our platform for any illegal activities or in violation of any applicable laws.
        </p>
      </section>

      <section className="terms-section">
        <h2 className="section-title">Intellectual Property</h2>
        <p className="section-content">
          All content, trademarks, and data on this website, including but not limited to text, graphics, and logos, are the property of our company. Unauthorized use is strictly prohibited.
        </p>
      </section>

      <section className="terms-section">
        <h2 className="section-title">Limitation of Liability</h2>
        <p className="section-content">
          We are not liable for any damages or losses arising from the use of our services. This includes, but is not limited to, direct, indirect, and consequential damages.
        </p>
      </section>

      <section className="terms-section">
        <h2 className="section-title">Changes to Terms</h2>
        <p className="section-content">
          We reserve the right to modify these terms at any time. Continued use of the website after changes are made constitutes acceptance of the revised terms.
        </p>
      </section>

      <footer className="terms-footer">
        <p>
          If you have any questions about our terms and conditions, please contact us at <a href="mailto:support@example.com">support@example.com</a>.
        </p>
      </footer>
    </div>
  );
};

export default Terms;
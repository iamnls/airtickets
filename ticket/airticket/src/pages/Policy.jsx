import React from 'react';
import './Policy.css'; // Import a separate CSS file for styling

const Policy = () => {
  return (
    <div className="policy-container">
      <h1 className="policy-title">Our Policy</h1>

      <section className="policy-section">
        <h2 className="section-title">Privacy Policy</h2>
        <p className="section-content">
          We are committed to protecting your personal information. Your data will not be shared with any third parties without your consent. We use industry-standard security measures to keep your information safe.
        </p>
      </section>

      <section className="policy-section">
        <h2 className="section-title">Refund Policy</h2>
        <p className="section-content">
          Refunds are processed within 7-10 business days after a valid request is received. Please ensure to provide all necessary documentation to facilitate a seamless process.
        </p>
      </section>

      <section className="policy-section">
        <h2 className="section-title">Terms of Service</h2>
        <p className="section-content">
          By using our services, you agree to comply with our terms and conditions. Violation of these terms may result in account suspension or termination.
        </p>
      </section>

      <section className="policy-section">
        <h2 className="section-title">Cookies Policy</h2>
        <p className="section-content">
          We use cookies to enhance your experience on our website. You can manage your cookie preferences in your browser settings. For more information, refer to our detailed Cookies Policy.
        </p>
      </section>

      <footer className="policy-footer">
        <p>
          For any questions regarding our policies, please contact us at <a href="mailto:support@example.com">support@example.com</a>.
        </p>
      </footer>
    </div>
  );
};

export default Policy;

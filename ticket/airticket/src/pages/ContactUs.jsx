import React, { useState } from 'react';
import './ContactUs.css'; // Add custom CSS for styling

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us!</p>

      {submitted && <p className="success-message">Thank you for contacting us! We will get back to you soon.</p>}

      <div className="contact-form-map-container">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>

        <div className="contact-details">
          <h2>Our Location</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345099994!2d-122.4194151846822!3d37.77492927975939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064e16dbf6f%3A0xa3b9c524facc0f7e!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1689040123456!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>

          <h2>Contact Details</h2>
          <p><strong>Phone:</strong> +1 123-456-7890</p>
          <p><strong>Email:</strong> support@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
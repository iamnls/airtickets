import React, { useState } from 'react';
import './Support.css'; // Add custom CSS for styling

const Support= () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issue: '',
    details: '',
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
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', issue: '', details: '' });
  };

  return (
    <div className="support-form-container">
      <h1>Support Form</h1>
      <p>Let us know your issue, and we’ll get back to you as soon as possible.</p>

      {submitted && <p className="success-message">Thank you for reaching out! We’ll assist you shortly.</p>}

      <form className="support-form" onSubmit={handleSubmit}>
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
          <label htmlFor="issue">Issue</label>
          <input
            type="text"
            id="issue"
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            placeholder="Describe your issue"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="details">Details</label>
          <textarea
            id="details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            placeholder="Provide more details about the issue"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Support;

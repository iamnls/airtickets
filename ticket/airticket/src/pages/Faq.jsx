import React, { useState } from 'react';
import './FAQ.css'; // Add custom CSS for styling

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'What is your return policy?',
      answer:
        'We offer a 30-day return policy. You can return any product within 30 days for a full refund or exchange.',
    },
    {
      question: 'How do I track my order?',
      answer:
        'Once your order is shipped, you will receive a tracking number via email, which you can use to track your order online.',
    },
    {
      question: 'Do you ship internationally?',
      answer:
        'Yes, we do offer international shipping. Shipping fees and times vary depending on the destination.',
    },
    {
      question: 'Can I change or cancel my order?',
      answer:
        'You can modify or cancel your order within 24 hours of placing it. After that, we cannot guarantee changes or cancellations.',
    },
    {
      question: 'How do I contact customer support?',
      answer:
        'You can reach our customer support team by email at support@example.com or through the contact form on our website.',
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => handleToggle(index)}
            >
              <h2>{faq.question}</h2>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
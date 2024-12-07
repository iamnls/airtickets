import React from 'react';
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <h1 style={{ textAlign: 'center', color: '#F55F55' }}>About Us</h1>
      <p style={{ textAlign: 'justify', lineHeight: '1.8', maxWidth: '800px', margin: '20px auto' }}>
        Welcome to <b>AirTicket</b>, your reliable travel companion. We specialize in providing seamless and
        convenient ticket booking services for both domestic and international flights. Our goal is to make
        travel planning effortless and stress-free for all our customers.
      </p>
      <section style={{ marginTop: '40px' }}>
        <h2 style={{ color: '#F55F55' }}>Our Mission</h2>
        <p style={{ textAlign: 'justify', lineHeight: '1.8' }}>
          At AirTicket, our mission is to connect people across the globe by offering fast, secure, and affordable
          travel solutions. We are dedicated to delivering exceptional customer service and innovative solutions
          tailored to your needs.
        </p>
      </section>
      <section style={{ marginTop: '40px' }}>
        <h2 style={{ color: '#F55F55' }}>Our Vision</h2>
        <p style={{ textAlign: 'justify', lineHeight: '1.8' }}>
          We envision a world where travel is accessible to everyone. Our goal is to become a trusted leader in
          the travel industry, fostering memorable experiences for travelers everywhere.
        </p>
      </section>
      <section style={{ marginTop: '40px' }}>
        <h2 style={{ color: '#F55F55' }}>Why Choose Us?</h2>
        <ul style={{ lineHeight: '1.8', paddingLeft: '20px' }}>
          <li>Competitive pricing with no hidden fees</li>
          <li>24/7 customer support to assist you anytime</li>
          <li>Easy-to-use platform with secure payment options</li>
          <li>Exclusive deals and discounts for frequent travelers</li>
        </ul>
      </section>
    </div>
  );
};

export default About;

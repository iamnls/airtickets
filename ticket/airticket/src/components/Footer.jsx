import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#F55F55', color: 'white', textAlign: 'center', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <h4>LINKS</h4>
          <p>About Us</p>
          <p>Booking</p>
        </div>
        <div>
          <h4>HELP</h4>
          <p>Contact Us</p>
          <p>FAQ</p>
          <p>Help</p>
          <p>Support</p>
        </div>
        <div>
          <h4>POLICY & PRIVACY</h4>
          <p>Our Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div>
          <h4>PAYMENT PARTNERS</h4>
          <p>IME Pay</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';


const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#F55F55', color: 'white', textAlign: 'center', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <h6>LINKS</h6>
          <a href="/About" style={{ color: 'white', textDecoration: 'none' }}>
            <p>About Us</p>
          </a>
          <a href="/Booking" style={{ color: 'white', textDecoration: 'none' }}>
            <p>Booking</p>
          </a>
        </div>
        <div>
          <h6>HELP</h6>
          <a href="/ContactUs" style={{ color: 'white', textDecoration: 'none' }}>
            <p>Contact Us</p>
          </a>
          <a href="/faq" style={{ color: 'white', textDecoration: 'none' }}>
            <p>FAQ</p>
          </a>
          <a href="/Help" style={{ color: 'white', textDecoration: 'none' }}>
            <p>Help</p>
          </a>
          <a href="/support" style={{ color: 'white', textDecoration: 'none' }}>
            <p>Support</p>
          </a>
        </div>
        <div>
          <h6>POLICY & PRIVACY</h6>
          <a href="/our-policy" style={{ color: 'white', textDecoration: 'none' }}>
            <p>Our Policy</p>
          </a>
          <a href="/terms-and-conditions" style={{ color: 'white', textDecoration: 'none' }}>
            <p>Terms & Conditions</p>
          </a>
        </div>
        <div>
          <h6>PAYMENT PARTNERS</h6>
          <a href="/ime-pay" style={{ color: 'white', textDecoration: 'none' }}>
          <img src="src/assets/images/imepaylogo.png" alt="imepay" style={{ width: '100px', borderRadius: '0px' }} />
          
            <p></p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

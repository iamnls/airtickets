import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../pages/Home';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#F55F55', color: 'white' }}>
      <img src="src/assets/images/bb logo.png" alt="PKH" style={{ width: '50px', borderRadius: '0px' }} />
      <h1></h1>
      <div>
      <a href="/" style={{ marginRight: '10px', color: 'white', textDecoration: 'none' }}>Home</a>
      
        <a href="/login" style={{ marginRight: '10px', color: 'white', textDecoration: 'none' }}>Login</a>
        <a href="/signup" style={{ color: 'white', textDecoration: 'none' }}>SignUp</a>
      </div>
    </nav>
  );
};

export default Navbar;

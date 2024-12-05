import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#F55F55', color: 'white' }}>
      <h1>BB</h1>
      <div>
        <a href="/login" style={{ marginRight: '10px', color: 'white', textDecoration: 'none' }}>Login</a>
        <a href="/signup" style={{ color: 'white', textDecoration: 'none' }}>SignUp</a>
      </div>
    </nav>
  );
};

export default Navbar;

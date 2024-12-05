import React from 'react';

const Signup = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', backgroundColor: '#F5F5F5' }}>
      <form style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', width: '400px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#F55F55' }}>Register Now!</h2>
        <div style={{ marginBottom: '15px' }}>
          <label>First Name</label>
          <input type="text" placeholder="First Name" style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Mobile Number</label>
          <input type="text" placeholder="Mobile Number" style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Email Address</label>
          <input type="email" placeholder="Email Address" style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Password</label>
          <input type="password" placeholder="Password" style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Nationality</label>
          <select style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ccc' }}>
            <option value="Nepalese">Nepalese</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div style={{ marginBottom: '15px', fontSize: '14px' }}>
          <input type="checkbox" id="terms" />
          <label htmlFor="terms" style={{ marginLeft: '5px' }}>
            I agree to the <a href="#" style={{ color: '#F55F55', textDecoration: 'none' }}>Terms and Conditions</a>.
          </label>
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#F55F55', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold' }}>
          Sign Up
        </button>
        <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '14px' }}>
          Already have an account? <a href="/login" style={{ color: '#F55F55', textDecoration: 'none' }}>Login</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;

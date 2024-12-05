import React from 'react';

const Login = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', backgroundColor: '#F5F5F5' }}>
      <form style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', width: '400px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#F55F55' }}>Login with BB Travel & Tour</h2>
        <div style={{ marginBottom: '15px' }}>
          <label>Email / Phone Number</label>
          <input
            type="text"
            placeholder="Email or Phone Number"
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '5px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '5px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </div>
        <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
          <input type="checkbox" id="rememberMe" style={{ marginRight: '5px' }} />
          <label htmlFor="rememberMe" style={{ fontSize: '14px' }}>
            Remember me
          </label>
        </div>
        <div style={{ textAlign: 'right', marginBottom: '20px' }}>
          <a href="#" style={{ color: '#F55F55', textDecoration: 'none', fontSize: '14px' }}>
            Forgot Password?
          </a>
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#F55F55',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
          }}
        >
          Login
        </button>
        <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '14px' }}>
          Don’t have an account?{' '}
          <a href="/signup" style={{ color: '#F55F55', textDecoration: 'none' }}>
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;

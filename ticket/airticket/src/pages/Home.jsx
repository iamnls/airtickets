import React from 'react';

const Home = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Header Section */}
      <header
        style={{
          backgroundColor: '#F55F55',
          color: '#fff',
          padding: '20px 40px',
          display: 'flex',
          justifyContent: 'flex-end', // Align items to the right
          alignItems: 'center',
        }}
      >
      </header>

      {/* Hero Section */}
      <div
        style={{
          backgroundColor: '#F55F55',
          color: '#fff',
          textAlign: 'center',
          padding: '40px 20px',
          position: 'relative',
        }}
      >
        <h2 style={{ fontSize: '36px', margin: '10px 0' }}>Book Your Flight</h2>
        <img
          src="src/assets/images/airplane.png"
          alt="Airplane"
          style={{ width: '1000px', marginTop: '20px' }}
        />
      </div>

      {/* Search Section */}
      <div
        style={{
          backgroundColor: '#fff',
          padding: '20px 40px',
          marginTop: '-40px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
          maxWidth: '800px',
          margin: 'auto',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
          <button style={{ padding: '10px 20px', border: 'none', backgroundColor: '#F55F55', color: '#fff', borderRadius: '5px' }}>One Way</button>
          <button style={{ padding: '10px 20px', border: '1px solid #F55F55', backgroundColor: '#fff', color: '#F55F55', borderRadius: '5px' }}>Round Trip</button>
          <button style={{ padding: '10px 20px', border: '1px solid #F55F55', backgroundColor: '#fff', color: '#F55F55', borderRadius: '5px' }}>MultiCity</button>
        </div>
        <form>
          <input
            type="text"
            placeholder="Departure City"
            style={{
              padding: '10px',
              marginRight: '10px',
              width: 'calc(25% - 20px)',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />
          <input
            type="text"
            placeholder="Arrival City"
            style={{
              padding: '10px',
              marginRight: '10px',
              width: 'calc(25% - 20px)',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />
          <input
            type="date"
            placeholder="Departure Date"
            style={{
              padding: '10px',
              marginRight: '10px',
              width: 'calc(25% - 20px)',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />
          <input
            type="date"
            placeholder="Return Date"
            style={{
              padding: '10px',
              width: 'calc(25% - 20px)',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />
          <button
            type="submit"
            style={{
              marginTop: '20px',
              width: '100%',
              padding: '10px',
              backgroundColor: '#F55F55',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
            }}
          >
            Search Flight
          </button>
        </form>
      </div>

      {/* Destination Section */}
      <div style={{ padding: '40px 20px', backgroundColor: '#F5F5F5' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Popular Destinations</h3>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ textAlign: 'center' }}>
            <img src="src/assets/images/Pokhara.jpg" alt="PKH" style={{ width: '300px', borderRadius: '0px' }} />
            <p>PKH</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img src="src/assets/images/Kathmandu.jpg" alt="KTM" style={{ width: '300px', borderRadius: '0px' }} />
            <p>KTM</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img src="src/assets/images/Bhairawa.jpg" alt="BWA" style={{ width: '300px', borderRadius: '0px' }} />
            <p>BWA</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img src="src/assets/images/Bangkok.jpg" alt="BKK" style={{ width: '300px', borderRadius: '0px' }} />
            <p>BKK</p>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default Home;

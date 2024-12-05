import React from 'react';
import SearchFlight from '../components/SearchFlight';

const Home = () => {
  return (
    <div>
      <div style={{ backgroundColor: '#F55F55', color: 'white', padding: '50px 20px', textAlign: 'center' }}>
        <h1>Welcome to BB Travel & Tour</h1>
      </div>
      <SearchFlight />
    </div>
  );
};

export default Home;

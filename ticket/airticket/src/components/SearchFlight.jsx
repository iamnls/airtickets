import React from 'react';

const SearchFlight = () => {
  return (
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', maxWidth: '900px', margin: 'auto', marginTop: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <button style={{ backgroundColor: '#F55F55', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>One Way</button>
        <button style={{ backgroundColor: '#F55F55', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>Round Trip</button>
        <button style={{ backgroundColor: '#F55F55', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>MultiCity</button>
      </div>
      <div>
        <input type="text" placeholder="Departure City" style={{ width: '20%', marginRight: '10px' }} />
        <input type="text" placeholder="Arrival City" style={{ width: '20%', marginRight: '10px' }} />
        <input type="date" style={{ width: '20%', marginRight: '10px' }} />
        <input type="date" style={{ width: '20%' }} />
      </div>
      <button style={{ backgroundColor: '#F55F55', color: 'white', padding: '10px 20px', marginTop: '10px', border: 'none', borderRadius: '5px' }}>Search Flight</button>
    </div>
  );
};

export default SearchFlight;

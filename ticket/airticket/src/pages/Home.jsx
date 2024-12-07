import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the external CSS file

const Home = () => {
  const [tripType, setTripType] = useState('One Way');
  const [departureCity, setDepartureCity] = useState('');
  const [arrivalCity, setArrivalCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [multiCities, setMultiCities] = useState([{ departureCity: '', arrivalCity: '', departureDate: '', returnDate: '' }]);
  const [adults, setAdults] = useState(1); // Number of adults
  const [children, setChildren] = useState(0); // Number of children
  const [travelClass, setTravelClass] = useState('Economy'); // Travel class (Economy, Premium Economy, Business, First Class)

  const cities = ['Kathmandu', 'Pokhara', 'Bhairawa', 'Bangkok', 'Dubai', 'Singapore']; // Example list of cities
  const travelers = [1, 2, 3, 4, 5]; // Options for travelers (1, 2, 3, 4, 5)
  const travelClasses = ['Economy', 'Premium Economy', 'Business', 'First Class']; // Travel classes

  // Handle button clicks for trip types
  const handleButtonClick = (type) => {
    setTripType(type);
  };

  // Style for active and inactive buttons
  const getButtonStyle = (type) => {
    return tripType === type
      ? { backgroundColor: '#F55F55', color: '#fff', border: 'none' } // active button
      : { backgroundColor: '#fff', color: '#F55F55', border: '1px solid #F55F55' }; // inactive button
  };

  // Handle the change for multi-city inputs (departure city, arrival city, departure date, and return date)
  const handleMultiCityChange = (index, field, value) => {
    const updatedCities = multiCities.map((city, i) =>
      i === index ? { ...city, [field]: value } : city
    );
    setMultiCities(updatedCities);
  };

  // Add new leg (departure, arrival city, dates) for multi-city trip
  const addMultiCity = () => {
    setMultiCities([...multiCities, { departureCity: '', arrivalCity: '', departureDate: '', returnDate: '' }]);
  };

  // Remove a leg from the multi-city trip
  const removeMultiCity = (index) => {
    const updatedCities = multiCities.filter((_, i) => i !== index);
    setMultiCities(updatedCities);
  };

  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="header">
        {/* Additional content like logo can go here */}
      </header>

      {/* Hero Section with background image */}
      <div className="hero-section">
        <h2 className="hero-title">Book Your Flight</h2>
        {/* Conditionally hide the airplane icon */}
        {tripType !== '' && (
          <img
            src="src/assets/images/airplane.png"
            alt="Airplane"
            className="airplane-icon"
          />
        )}
      </div>

      {/* Centered Search Section */}
      <div className="search-container">
        <div className="search-section">
          {/* Buttons for trip types */}
          <div className="button-group">
            <button
              style={getButtonStyle('One Way')}
              onClick={() => handleButtonClick('One Way')}
            >
              One Way
            </button>
            <button
              style={getButtonStyle('Round Trip')}
              onClick={() => handleButtonClick('Round Trip')}
            >
              Round Trip
            </button>
            <button
              style={getButtonStyle('Multi City')}
              onClick={() => handleButtonClick('Multi City')}
            >
              Multi City
            </button>
          </div>

          {/* Form */}
          <form>
            {/* Conditionally render inputs based on trip type */}
            {tripType === 'One Way' && (
              <div className="input-group">
                {/* Departure City Dropdown */}
                <select
                  value={departureCity}
                  onChange={(e) => setDepartureCity(e.target.value)}
                  className="input-field"
                >
                  <option value="">Select Departure City</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>

                {/* Arrival City Dropdown */}
                <select
                  value={arrivalCity}
                  onChange={(e) => setArrivalCity(e.target.value)}
                  className="input-field"
                >
                  <option value="">Select Arrival City</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>

                {/* Departure Date */}
                <input
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className="input-field"
                />
              </div>
            )}

            {tripType === 'Round Trip' && (
              <div className="input-group">
                {/* Departure City Dropdown */}
                <select
                  value={departureCity}
                  onChange={(e) => setDepartureCity(e.target.value)}
                  className="input-field"
                >
                  <option value="">Select Departure City</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>

                {/* Arrival City Dropdown */}
                <select
                  value={arrivalCity}
                  onChange={(e) => setArrivalCity(e.target.value)}
                  className="input-field"
                >
                  <option value="">Select Arrival City</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>

                {/* Departure Date */}
                <input
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className="input-field"
                />

                {/* Return Date */}
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="input-field"
                />
              </div>
            )}

            {tripType === 'Multi City' && (
              <div className="multi-city-section">
                {multiCities.map((city, index) => (
                  <div key={index} className="multi-city-leg">
                    <div className="input-group">
                      {/* Departure City Dropdown */}
                      <select
                        value={city.departureCity}
                        onChange={(e) => handleMultiCityChange(index, 'departureCity', e.target.value)}
                        className="input-field"
                      >
                        <option value="">Select Departure City</option>
                        {cities.map((city, index) => (
                          <option key={index} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>

                      {/* Arrival City Dropdown */}
                      <select
                        value={city.arrivalCity}
                        onChange={(e) => handleMultiCityChange(index, 'arrivalCity', e.target.value)}
                        className="input-field"
                      >
                        <option value="">Select Arrival City</option>
                        {cities.map((city, index) => (
                          <option key={index} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>

                      {/* Departure Date */}
                      <input
                        type="date"
                        value={city.departureDate}
                        onChange={(e) => handleMultiCityChange(index, 'departureDate', e.target.value)}
                        className="input-field"
                      />

                      {/* Return Date */}
                      <input
                        type="date"
                        value={city.returnDate}
                        onChange={(e) => handleMultiCityChange(index, 'returnDate', e.target.value)}
                        className="input-field"
                      />

                      
                      
                    </div>
                    <div className="input-group">
                      {/* Departure City Dropdown */}
                      <select
                        value={city.departureCity}
                        onChange={(e) => handleMultiCityChange(index, 'departureCity', e.target.value)}
                        className="input-field"
                      >
                        <option value="">Select Departure City</option>
                        {cities.map((city, index) => (
                          <option key={index} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>

                      {/* Arrival City Dropdown */}
                      <select
                        value={city.arrivalCity}
                        onChange={(e) => handleMultiCityChange(index, 'arrivalCity', e.target.value)}
                        className="input-field"
                      >
                        <option value="">Select Arrival City</option>
                        {cities.map((city, index) => (
                          <option key={index} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>

                      {/* Departure Date */}
                      <input
                        type="date"
                        value={city.departureDate}
                        onChange={(e) => handleMultiCityChange(index, 'departureDate', e.target.value)}
                        className="input-field"
                      />

                      {/* Return Date */}
                      <input
                        type="date"
                        value={city.returnDate}
                        onChange={(e) => handleMultiCityChange(index, 'returnDate', e.target.value)}
                        className="input-field"
                      />

                      
                      
                    </div>

                 
                  </div>
                ))}
              
              </div>
            )}

            {/* Travelers Section */}
            <div className="travelers-section">
              <label>Adults</label>
              <select
                value={children}
                onChange={(e) => setAdults(Number(e.target.value))}
                className="input-field"
              >
                <option value="">Choose the option</option>
                {travelers.map((count) => (
                  <option key={count} value={count}>
                    {count}
                  </option>
                ))}
              </select>

              <label>Children</label>
              <select
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
                className="input-field"
              >
                <option value="">Choose the option</option>
                {travelers.map((count) => (
                  <option key={count} value={count}>
                    {count}
                  </option>
                ))}
              </select>

              <label>Travel</label>
              <select
                value={travelClass}
                onChange={(e) => setTravelClass(Name(e.target.value))}
                className="input-field"
              >
                <option value="">Choose the option</option>
                {travelClasses.map((classType) => (
                  <option key={classType} value={classType}>
                    {classType}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <button type="submit" className="search-button">
              Search Flight
            </button>
          </form>
        </div>
      </div>

      {/* Destination Section */}
      <div className="destination-section">
        <h3 className="destination-title">Popular Destinations</h3>
        <div className="destination-images">
          <div className="destination-item">
            <img src="src/assets/images/Pokhara.jpg" alt="PKH" className="destination-img" />
            <p>PKH</p>
          </div>
          <div className="destination-item">
            <img src="src/assets/images/Kathmandu.jpg" alt="KTM" className="destination-img" />
            <p>KTM</p>
          </div>
          <div className="destination-item">
            <img src="src/assets/images/Bhairawa.jpg" alt="BWA" className="destination-img" />
            <p>BWA</p>
          </div>
          <div className="destination-item">
            <img src="src/assets/images/Bangkok.jpg" alt="BKK" className="destination-img" />
            <p>BKK</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

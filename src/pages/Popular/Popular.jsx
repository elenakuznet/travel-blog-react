import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { destinations } from '../../data'; // Import the destinations array
import './Popular.css';

function Popular() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter destinations based on the search query
  const filteredDestinations = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Determine which list of destinations to display
  const destinationsToDisplay = searchQuery ? filteredDestinations : destinations;

  return (
    <section className="popular section">
      <input
        type="text"
        placeholder="Search destinations..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />
      <h2 className="section__title">Popular Destinations</h2>
      <div className="popular__container container grid">
        {destinationsToDisplay.map((destination, index) => (
          <NavLink 
            to={`/travel-blog-react/popular/${index}`} 
            key={index} 
            className="popular__card"
          >
            <div className="popular__image">
              <img src={destination.image} alt={destination.name} className="popular__img" />
              <div className="popular__shadow"></div>
            </div>
            <h3 className="popular__name">{destination.name}</h3>
            <p className="popular__description">{destination.description}</p>
          </NavLink>
        ))}
      </div>
    </section>
  );
}

export default Popular; 
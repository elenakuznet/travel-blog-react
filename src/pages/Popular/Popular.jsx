import { useState } from 'react';
import { destinations } from '../../data'; // Import the destinations array
import SearchBar from '../../components/SearchBar/SearchBar';
import './Popular.css';
import DestinationCard from '../../components/DestinationCard/DestinationCard';
import { filterDestinations } from '../../utils/filterDestinations';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';


function Popular() {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter destinations based on the search query
  const filteredDestinations = filterDestinations(destinations, searchQuery);

  // Determine which list of destinations to display
  const destinationsToDisplay = searchQuery ? filteredDestinations : destinations;

  return (

    <SectionWrapper className="popular">

      <SearchBar  
          value={searchQuery} 
          onChange={handleSearchChange} 
          placeholder="Search destinations..." 
          aria-label="Search popular destinations"
      />

      <SectionHeader title={'Popular Destinations'} />
      
      <div className="popular__container container grid">
        {destinationsToDisplay.map((destination) => (
          <DestinationCard destination={destination} key={destination.id} />
        ))}
      </div>
    </SectionWrapper>
  );
}

export default Popular; 
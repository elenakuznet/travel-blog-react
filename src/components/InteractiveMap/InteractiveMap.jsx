import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import './InteractiveMap.css';

// Updated map topology file URL
const geoUrl = "https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/countries.geojson";

const InteractiveMap = () => {
  const handleRegionClick = (countryName) => {
    alert(`Clicked on: ${countryName}`);
    // Here you can redirect or show blog posts for the selected country
  };

  return (
    <div className="map-container">
      <ComposableMap  projection="geoMercator"
        projectionConfig={{
          scale: 150,  // Adjust scale if necessary
          center: [0, 25],  // Adjust center if necessary
        }}
        style={{
          width: '100%',
          height: 'auto',
          backgroundColor: '#f5f5f5',  // Light background color to match website
          border: '1px solid #ddd',  // Border color to match website design
          borderRadius: '8px',  // Optional: Rounded corners
        }}
        stroke="grey"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => handleRegionClick(geo.properties.name)}
                style={{
                  default: {
                    fill: "#E0E0E0", 
                    outline: "none",
                  },
                  hover: {
                    fill: "grey", 
                    outline: "none",
                  },
                  pressed: {
                    fill: "black", 
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default InteractiveMap;
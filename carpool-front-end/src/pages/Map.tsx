import React, { useRef, useState } from 'react';
import MapComponent from "../components/MapComponent"
import { Autocomplete } from "@react-google-maps/api"

function Map() {
    const [location, setLocation] = useState({ lat: null, lng: null });
    // const [locationName, setLocationName]
    // const [locationAddr, setLocationAddr]
    const autocompleteRef = useRef(null);

    const onPlaceChanged = () => {
        if (autocompleteRef.current) {
          const place = autocompleteRef.current.getPlace();
    
          if (place.geometry) {
            const lat = place.geometry.location.lat();
            const lng = place.geometry.location.lng();
    
            setLocation({ lat, lng }); // Update the location state
            console.log(place);
    
            // Now, MapComponent will re-render with the new location
          } else {
            console.log("No geometry data available for the selected place");
          }
        }
      };

    return (
      <div>
        <h1> Map Test</h1>

        <Autocomplete
        onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
        onPlaceChanged={onPlaceChanged}
      >
        <input id="autocomplete" placeholder="Enter a place" type="text" />
      </Autocomplete>
        
        <MapComponent location={location}/>
      </div>
    )
  }
  
  export default Map
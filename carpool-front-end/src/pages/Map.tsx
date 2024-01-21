import React, { useRef, useState } from 'react';
import MapComponent from "../components/MapComponent"
import { Autocomplete } from "@react-google-maps/api"

function Map() {
    const [location, setLocation] = useState({coordinates:{ lat: null, lng: null }, name: null, address: null});
    const autocompleteRef = useRef(null);

    const onPlaceChanged = () => {
        if (autocompleteRef.current) {
          const place = autocompleteRef.current.getPlace();
    
          if (place.geometry) {
            const lat = place.geometry.location.lat();
            const lng = place.geometry.location.lng();
            const coordinates = { lat, lng };
            const name = place.name;
            const address = place.formatted_address;
    
            setLocation({coordinates, name, address}); // Update the location state
            console.log(coordinates);
            console.log(name);
            console.log(address);
    
          } else {
            console.log("No geometry data available for the selected place");
          }
        }
      };

    return (
      <div>
        <h1> Map Test</h1>
        <div>
            <Autocomplete
                onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
                onPlaceChanged={onPlaceChanged}
            >
        <input id="autocomplete" placeholder="Enter a place" type="text" />
        </Autocomplete>
        </div>
        <div>
        <MapComponent location={location.coordinates}/>
        </div>
      </div>
    )
  }
  
  export default Map
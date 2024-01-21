import React, { useRef, useState } from 'react';
import MapComponent from "../components/MapComponent"
import { Autocomplete } from "@react-google-maps/api"
import { Header } from '../components/Header';

function Post() {
    const [fromLocation, setfromLocation] = useState({coordinates:{ lat: null, lng: null }, name: null, address: null});
    const [toLocation, settoLocation] = useState({coordinates:{ lat: null, lng: null }, name: null, address: null});
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
  
          setfromLocation({coordinates, name, address}); // Update the location state
          console.log(coordinates);
          console.log(name);
          console.log(address);
  
        } else {
          console.log("No geometry data available for the selected place");
        }
      }
    };

    return (
      <div >
        <Header back info="You are currently" underlined="Waiting for a ride" marginBottom='mb-8'
          children={
        <div>
          <div className="flex bg-light-gray text-black rounded-3xl w-full p-4 mb-4 items-center grid grid-flow-row">
            <div className=" m-1 text-left">
              <p className="font-bold">From: </p>
              <Autocomplete onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)} onPlaceChanged={onPlaceChanged}>
                <input className="w-full h-8" id="autocomplete" placeholder="Enter a place" type="text" />
              </Autocomplete>
            </div>
            <div className="m-1 ">
              <MapComponent location={fromLocation.coordinates}/>
            </div>
          </div>
        
          <div className="flex bg-light-gray text-black rounded-3xl w-full p-4 mb-4 items-center grid grid-flow-row">
            <div className=" m-1 text-left">
              <p className="font-bold">To: </p>
              <Autocomplete onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)} onPlaceChanged={onPlaceChanged}>
                <input className="w-full h-8" id="autocomplete" placeholder="Enter a place" type="text" />
              </Autocomplete>
            </div>
            <div className="m-1 ">
              <MapComponent location={toLocation.coordinates}/>
            </div>
          </div>

          <div className="flex bg-light-gray text-black rounded-3xl w-full p-4 mb-4 items-center grid grid-flow-row">
            <div className=" m-1 text-left">
              <p className="font-bold">Time: </p>
            </div>
          </div>
        </div>
        }
      />
      </div>
    )

  }
  
  export default Post
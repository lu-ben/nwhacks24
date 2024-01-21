import { useRef, useState } from 'react';
import MapComponent from "../components/MapComponent";
import { Autocomplete, useLoadScript } from "@react-google-maps/api";
import { Header } from '../components/Header';
import SliderTimePicker from '../components/TimeSlider';

const libraries:any = ['places'];


function Post() {
    const [fromLocation, setFromLocation] = useState({coordinates:{ lat: null, lng: null }, name: null, address: null});
    const [toLocation, setToLocation] = useState({coordinates:{ lat: null, lng: null }, name: null, address: null});

    // Separate refs for each Autocomplete
    const fromAutocompleteRef = useRef(null);
    const toAutocompleteRef = useRef(null);

    // Handler for 'from' location change
    const onFromPlaceChanged = () => {
      if (fromAutocompleteRef.current) {
        const place = fromAutocompleteRef.current.getPlace();
        updateLocation(place, setFromLocation);
      }
    };

    // Handler for 'to' location change
    const onToPlaceChanged = () => {
      if (toAutocompleteRef.current) {
        const place = toAutocompleteRef.current.getPlace();
        updateLocation(place, setToLocation);
      }
    };

    // Common method to update location state
    const updateLocation = (place: any, setLocation: any) => {
      if (place.geometry) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        const coordinates = { lat, lng };
        const name = place.name;
        const address = place.formatted_address;

        setLocation({coordinates, name, address}); // Update the respective location state
        console.log(coordinates);
        console.log(name);
        console.log(address);
      } else {
        console.log("No geometry data available for the selected place");
      }
    };
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: 'AIzaSyAjTvqcJJNiY8sxeSUGeu5pO9ck4bQ41lo', // Use your API key
      libraries,
    });

    return (
      <div>
        <Header back info="You are currently" underlined="Waiting for a ride" marginBottom='mb-8'
          children={
            <div>
              <div className="bg-light-gray text-black rounded-3xl w-full p-4 mb-4 items-center grid grid-flow-row">
                <div className="m-1 text-left">
                  <p className="font-bold mb-2">From: </p>
                  {
                    isLoaded ? <Autocomplete onLoad={(autocomplete:any) => (fromAutocompleteRef.current = autocomplete)} onPlaceChanged={onFromPlaceChanged}>
                    <input className="w-full h-8 bg-white text-black rounded-lg pl-2" id="from-autocomplete" placeholder="Enter a place" type="text" />
                  </Autocomplete> : null
                  }
                </div>
                <div className="m-1">
                  <MapComponent location={fromLocation.coordinates}/>
                </div>
              </div>

              <div className="bg-light-gray text-black rounded-3xl w-full p-4 mb-4 items-center grid grid-flow-row">
                <div className="m-1 text-left">
                  <p className="font-bold mb-2">To: </p>
                  {
                  isLoaded ?   <Autocomplete onLoad={(autocomplete:any) => (toAutocompleteRef.current = autocomplete)} onPlaceChanged={onToPlaceChanged}>
                    <input className="w-full h-8 bg-white text-black rounded-lg pl-2" id="to-autocomplete" placeholder="Enter a place" type="text" />
                  </Autocomplete> : null
                  }
                </div>
                <div className="m-1">
                  <MapComponent location={toLocation.coordinates}/>
                </div>
              </div>

              <div className="bg-light-gray text-black rounded-3xl w-full p-4 mb-4 items-center grid grid-flow-row">
                <div className="m-1 text-left">
                  <p className="font-bold">Time: </p>
                  <SliderTimePicker />
                </div>
              </div>

              <div>
                <button className='bg-light-gray text-black font-bold'>Submit</button>
              </div>
            </div>
          }
        />
      </div>
    )
}

export default Post;

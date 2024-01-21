import { useRef, useState } from 'react';
import MapComponent from "../components/MapComponent";
import { Autocomplete, useLoadScript } from "@react-google-maps/api";
import { Header } from '../components/Header';
import SliderTimePicker from '../components/TimeSlider';

const libraries:any = ['places'];

import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate  } from 'react-router-dom';

const SERVERHOST = 3000;

function Post() {

  const { user } = useAuth0();

  const [selectedHour, setSelectedHour] = useState(12);
  const [selectedMinute, setSelectedMinute] = useState(30);
  const [selectedPeriod, setSelectedPeriod] = useState('AM');

  const navigate = useNavigate();

  const handleHourChange = (newHour) => {
    setSelectedHour(newHour);
  };

  const handleMinuteChange = (newMinute) => {
    setSelectedMinute(newMinute);
  };

  const handlePeriodChange = (newPeriod) => {
    setSelectedPeriod(newPeriod);
  };



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
        console.log(fromLocation);
      }
    };

    // Handler for 'to' location change
    const onToPlaceChanged = () => {
      if (toAutocompleteRef.current) {
        const place = toAutocompleteRef.current.getPlace();
        updateLocation(place, setToLocation);
        console.log(toLocation);

      }
    };
  
    function uploadPost() {
      const user_id = user?.sub;

      const origin = fromLocation.address;
      const destination = toLocation.address;
      const time = `${selectedHour}:${selectedMinute}${selectedPeriod}`;
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
      const date = formattedDate
      const status = "available";
      const lat = fromLocation.coordinates.lat;
      const lon = fromLocation.coordinates.lng;

      const post = {user_id: user_id,
        origin: origin,
        destination: destination,
        time: time,
        date: date,
        status: status,
        lat: lat,
        lon: lon,
      };

      axios.post(`http://localhost:${SERVERHOST}/rideRequests/add`, post)
      .then(response => {
        navigate(`/waitingRide`, { state: { _id: response.data.insertedId, user_id: user_id,
          origin: origin,
        destination: destination,
      time: time }});

        console.log('Success:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }

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
                    <input className="bg-white rounded w-full h-8 bg-white text-black rounded-lg pl-2" id="from-autocomplete" placeholder="Enter a place" type="text" />
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
                    <input className="bg-white rounded w-full h-8 bg-white text-black rounded-lg pl-2" id="to-autocomplete" placeholder="Enter a place" type="text" />
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
                  <SliderTimePicker 
                    initialHour={selectedHour}
                    initialMinute={selectedMinute}
                    initialPeriod={selectedPeriod}
                    onHourChange={handleHourChange}
                    onMinuteChange={handleMinuteChange}
                    onPeriodChange={handlePeriodChange}/>
                </div>
              </div>

              <div>
                <button onClick={uploadPost} className='bg-light-gray text-black font-bold'>Submit</button>
              </div>
            </div>
          }
        />
      </div>
    )
}

export default Post;

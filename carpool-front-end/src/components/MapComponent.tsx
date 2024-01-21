import { GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';

const libraries:any = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '50vw',
};
const presetCenter = { //UBC's location
  lat: 49.2606, // default latitude 
  lng: -123.2460, // default longitude
};

const MapComponent = ({ location }:any) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAjTvqcJJNiY8sxeSUGeu5pO9ck4bQ41lo', // Use your API key
    libraries,
  });

  // Determine the center based on the provided location or use the preset center
  const center = location && location.lat && location.lng ? location : presetCenter;

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }
  

  return (
    <div> 
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default MapComponent;

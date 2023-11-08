
// import {
//   withGoogleMap,
//   withScriptjs,
//   GoogleMap,
//   Marker,
// } from 'react-google-maps';

import { Marker } from "react-google-maps";
import withGoogleMap from "react-google-maps/lib/withGoogleMap";
import withScriptjs from "react-google-maps/lib/withScriptjs";

const Map = () => {
  const defaultCenter = { lat: 22.721268537552977, lng: 89.06789023231536 }; // Replace with your desired coordinates, 

  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={defaultCenter}
    >
      <Marker position={defaultCenter} />
    </GoogleMap>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

const GoogleMap = () => {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  );
};

export default GoogleMap;
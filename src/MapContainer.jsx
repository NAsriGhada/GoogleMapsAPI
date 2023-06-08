import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const MapContainer = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 36.8065,
    lng: 10.1815,
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyCXfaktpM5j1JsX67JDETV0EM7t7tSkCAQ">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={14}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;

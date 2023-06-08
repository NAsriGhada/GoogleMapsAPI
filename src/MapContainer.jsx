import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const MapContainer = () => {
  // Click on the navigation menu (☰) in the upper-left corner of the page and go to "APIs & Services" > "Library".
  // In the Library page, search for "Maps JavaScript API".
  // Click on the "Maps JavaScript API" result that appears.
  // On the API details page, click the "Enable" button.
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

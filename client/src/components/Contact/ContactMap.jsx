import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Box } from "@mui/material";

const containerStyle = {
  width: "100%",
  height: "80vh",
};

const center = {
  lat: 10.762622,
  lng: 106.660172,
};

function ContactMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "	AIzaSyDc7PnOq3Hxzq6dxeUVaY8WGLHIePl0swY",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <Box mt={"70px"}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      ></GoogleMap>
    </Box>
  ) : (
    <></>
  );
}

export default ContactMap;

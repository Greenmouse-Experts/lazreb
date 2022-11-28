import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 6.6194,
      lng: 3.5105
    },
    zoom: 11
  };

//   process.env.MAP_API_KEY
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100%', width: '100%', borderRadius: "15px", }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAObMzoszg93PuKpMW5JpUjbN4H9JC0isY"}}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={6.458985}
          lng={3.601521}
        />
      </GoogleMapReact>
    </div>
  );
}

import {GoogleMap, Marker} from "react-google-maps";
import React from 'react';

export default function SimpleMap (props) {
  return (
    <section style={{height: "100%"}}>
      <GoogleMap containerProps={{
          style: {
            height: "100%",
          },
        }}
                 defaultZoom={3}
                 defaultCenter={{lat: -25.363882, lng: 131.044922}}
                 onClick={props.onMapClick}
        >
      </GoogleMap>
    </section>
  );
}
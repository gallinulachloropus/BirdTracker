import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';

export function RegionMap(props) {
  const style = {maxWidth: '500px', maxHeight: '500px', margin: '1rem auto'}
  return (
    <Map
      google={props.google}
      zoom={4.5}
      center={{
        lat: props.lat,
        lng: props.long
      }}
      style={style}
      >

    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAYmPWoV6LQCCcxvkaeTDOshKcRBG2ujN8')
})(RegionMap)
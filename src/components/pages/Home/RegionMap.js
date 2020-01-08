import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'

const RegionMap = (props) => {
    const style = { maxWidth: '500px', maxHeight: '500px', margin: '1rem auto' }
    const styleNone = { maxWidth: '500px', maxHeight: '500px', margin: '1rem auto', visibility: 'hidden' }
    return (
        <Map
            google={props.google}
            zoom={4.75}
            defaultCenter={{ lat: 0.00, lng: 0.00 }}
            defaultZoom={9}
            center={{
                lat: props.lat,
                lng: props.long
            }}
            style={props.lat && props.long ? style : styleNone}
        >

        </Map>
    )
}


export default GoogleApiWrapper({
    apiKey: ('AIzaSyAYmPWoV6LQCCcxvkaeTDOshKcRBG2ujN8')
})(RegionMap)

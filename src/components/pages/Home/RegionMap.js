import React, { Fragment } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'

const RegionMap = (props) => {
    const style = { maxWidth: '80%', maxHeight: '600px', margin: '1rem auto', border: '1px solid black', boxShadow: '#333 0px 0px 10px' }
    const styleNone = { ...style, visibility: 'collapse' }
    return (
        <Fragment>
            <Map
                google={props.google}
                zoom={5.2}
                defaultZoom={5.2}
                center={{
                    lat: props.lat,
                    lng: props.long
                }}
                initialCenter={{
                    lat: props.lat,
                    lng: props.long
                }}
                style={props.lat && props.long ? style : styleNone}
                draggable= {false}
            >

            </Map>
        </Fragment>
    )
}


export default GoogleApiWrapper({
    apiKey: ('AIzaSyBe5lbgufuxGpmkqYDmgnCc3JArNmLht40')
})(RegionMap)

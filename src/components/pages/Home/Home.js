import React from 'react'
import RegionMap from './RegionMap'

const Home = (props) => {
    return (
        <main>
            <select
                onChange={props.handleLocationSelect}
                value={props.location}
                className='location-select'
            >
                <option value="" >Select a Location...</option>
                {props.getLocationOptions()}
            </select>
            <p className="region-description"><em>{props.regionInfo.desc}</em></p>
            <RegionMap lat={props.regionInfo.coords[0]} long={props.regionInfo.coords[1]} />
        </main>
    )
}

export default Home

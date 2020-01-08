import React from 'react'
import RegionMap from './RegionMap'

const Home = (props) => {
    return (
        <main>
            <select onChange={props.handleLocationSelect} value={props.location}>
                <option value="" >Select a Location</option>
                {props.getLocationOptions()}
            </select>
            <p>{props.regionInfo.desc}</p>
            <RegionMap lat={props.regionInfo.coords[0]} long={props.regionInfo.coords[1]} />
        </main>
    )
}

export default Home

import React from 'react'
import RegionMap from '../RegionMap'

export default function Home(props) {
    return (
        <div className="home">
            <p>This is BirdTracker, select a region</p>
            {props.getOptions(props)}
            <RegionMap lat={props.currentRegionInfo.coords ? props.currentRegionInfo.coords[0] : ""} long={props.currentRegionInfo.coords ? props.currentRegionInfo.coords[1] : ""} />
            {props.currentRegionInfo.desc}
        </div>
    )
}
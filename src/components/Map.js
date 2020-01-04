import React from 'react'
import { ComposableMap, Geographies, Geography, ZoomableGroup, Line } from "react-simple-maps"

export default function Map() {
    const geoUrl =
        "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

    return (
        <div className="flyway-map">
            <ComposableMap>
                <ZoomableGroup zoom={1}>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => {
                                return (
                                    <Geography key={geo.rsmKey} geography={geo} />
                                { console.log(geo.rsmKey) }
                                )
                        }
                    </Geographies>
                    <Line
                        coordinates={[[-68, -52], [-78, 1], [-100, 20], [-122, 49]]}
                        stroke="blue"
                        strokeWidth={4}
                        strokeLinecap="round"
                    />
                </ZoomableGroup>
            </ComposableMap>
        </div>
    )
}

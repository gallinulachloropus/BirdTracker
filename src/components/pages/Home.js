import React from 'react'

export default function Home(props) {
    return (
        <div className="home">
            <p>This is BirdTracker, select a location</p>
            {props.getOptions(props)}

        </div>
    )
}
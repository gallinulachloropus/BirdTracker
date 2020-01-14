import React from 'react'
import { version, lastUpdate } from '../../config.json'

const About = (props) => {
    return (
        <main>
            <h1>About BirdTracker</h1>
            <p>BirdTracker v{version}</p>
            <p>No-backend bird watching app written in React. Last updated {lastUpdate}.</p>
            <button onClick={props.reset}>
                Update Bird List
            </button>
        </main>
    )
}

export default About

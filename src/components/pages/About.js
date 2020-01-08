import React from 'react'

const About = (props) => {
    return (
        <main>
            <p>BirdTracker v0.2.0</p>
            <button onClick={props.reset}>
                Reset BirdTracker
            </button>
        </main>
    )
}

export default About

import React from 'react'

const About = (props) => {
    return (
        <main>
            <p>BirdTracker v0.2.2</p>
            <p>No-backend bird watching app written in React. Last updated 1/8/20.</p>
            <button onClick={props.reset}>
                Reset BirdTracker
            </button>
        </main>
    )
}

export default About

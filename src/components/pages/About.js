import React from 'react'

const About = (props) => {
    return (
        <main>
            <p>BirdTracker v0.2.3</p>
            <p>No-backend bird watching app written in React. Last updated 1/10/20.</p>
            <button onClick={props.reset}>
                Reset/Update BirdTracker
            </button>
        </main>
    )
}

export default About

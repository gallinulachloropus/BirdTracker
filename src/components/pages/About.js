import React from 'react'

export default function About() {
    return (
        <div className="about">
            This is BirdTracker v0.0.1 by Nathan Parker
            <br />
            <button onClick={() => {
                localStorage.clear()
                window.location.reload(false)
            }}>Reset BirdTracker</button>
        </div>
    )
}

import React from 'react'
import TrackerInfo from './TrackerInfo'
const Tracker = (props) => {

    if (props.loaded) {
        return (
            <main>
                <TrackerInfo currentSpecies={props.currentSpecies} setCurrentSpecies={props.setCurrentSpecies} />
                {props.getTrackerItems()}
            </main>
        )
    }
    else {
        return (
            <h1 className="loading">...</h1>
        )
    }
}

export default Tracker

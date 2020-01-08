import React from 'react'
import TrackerInfo from './TrackerInfo'

const Tracker = (props) => {

    if (props.loaded) {
        return (
            <div>
                <TrackerInfo currentSpecies={props.currentSpecies}/>

                <div style={{ width: "max-content" }}>
                    <ul>
                        {props.getTrackerItems()}
                    </ul>
                </div>
            </div>
        )
    }
    else {
        return (
            <h2>Loading...</h2>
        )
    }
}

export default Tracker

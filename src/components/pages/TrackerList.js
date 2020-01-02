import React from 'react'
import TrackerInfo from './TrackerInfo'


export default function TrackerList(props) {
    return (
        <React.Fragment>
            <div className="tracker-info">
                <TrackerInfo currentBird={props.currentBird} isLoading={props.isLoading} />
            </div>
            <div className="tracker-list">
                {props.location ? props.getBirds(props) : ""}
            </div>

        </React.Fragment>
    )
}

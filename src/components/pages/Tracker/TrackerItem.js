import React from 'react'

const TrackerItem = (props) => {
    return (
        <div className="tracker-item">
            <span onClick={() => { props.getSpeciesInfo(props.species.name) }}>
                {props.species.name}
            </span>
            <input
                type="checkbox"
                onChange={() => props.handleTrackerCheck(props.species)}
                name={props.species}
                checked={props.species.seen}
            />
        </div>
    )
}

export default TrackerItem

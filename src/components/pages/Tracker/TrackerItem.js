import React from 'react'

const TrackerItem = (props) => {
    return (
        <div className="tracker-item" style={props.species.seen ? { opacity: 0.5 } : {}}>
            <span
                className="species-text"
                onClick={() => { props.getSpeciesInfo(props.species.name) }}>
                {props.species.name}
            </span>
            <input
                type="checkbox"
                onChange={() => props.handleTrackerCheck(props.species)}
                name={props.species}
                checked={props.species.seen}
                className="species-check"
            />
        </div>
    )
}

export default TrackerItem

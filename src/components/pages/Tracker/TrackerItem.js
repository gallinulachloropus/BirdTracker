import React from 'react'

const TrackerItem = (props) => {
    const checkedStyle = props.species.seen ? { opacity: 0.5 } : {}
    const activeStyle = props.species.name === props.currentSpecies.title ? "tracker-item-active tracker-item" : "tracker-item"

    return (
        <div style={checkedStyle} className={activeStyle}>
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

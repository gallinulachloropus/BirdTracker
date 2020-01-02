import React from 'react'

export default function TrackerListItem(props) {
    const seenStyle = props.bird.seen ? {opacity: 0.5} : {}
    return (
        <div className="tracker-list-item" style={seenStyle}>
            <div className="tracker-list-item-text" onClick={() => { props.getBirdInfo(props.bird.name) }}>
                {props.bird.name}
            </div>
            <label>
                Seen:
                <input type="checkbox" checked={props.bird.seen} name="seen" onChange={() => props.handleCheck(props.bird)} style={{margin: "0.25rem"}} />
            </label>
        </div>
    )
}

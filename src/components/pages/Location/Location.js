import React from 'react'
const Location = (props) => {
    return (
        <section>
            <select
                onChange={props.handleLocationSelect}
                value={props.location}
                className='location-select'
            >
                <option value="" >Select a Location...</option>
                {props.getLocationOptions()}
            </select>
            <p className="region-description"><em>{props.regionInfo.desc}</em></p>
        </section>
    )
}

export default Location

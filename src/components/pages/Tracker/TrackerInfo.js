import React from 'react'
import ReactHtmlParser from 'html-react-parser'

const TrackerInfo = (props) => {
    return (
        <article>
            <h1>{props.currentSpecies.title}</h1>
            <img
                src={props.currentSpecies.image.source}
                alt={props.currentSpecies.title}
                title={props.currentSpecies.title}
            />
            <p>{ReactHtmlParser(props.currentSpecies.info)}</p>
        </article>
    )
}

export default TrackerInfo

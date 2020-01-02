import React from 'react'
import Parser from 'html-react-parser'

export default function TrackerInfo(props) {
    const keyValue = props.currentBird.info.query ? Object.keys(props.currentBird.info.query.pages)[0] : ''
    const parsedInfo = props.currentBird.info.query ? Parser(`${props.currentBird.info.query.pages[keyValue].extract} → `) : (props.currentBird.info.error ? props.currentBird.info.error.info : "")
    if (props.isLoading === false) {
        return (
            <div>
                <h2>Bird Information: </h2>
                <article>
                    {parsedInfo ? parsedInfo : "Select a location, then select a bird..."}
                    {props.currentBird.info.query ? <a href={`https://en.wikipedia.org/wiki/${props.currentBird.info.query.pages[keyValue].title}`} className="wiki-link">{props.currentBird.info.query.pages[keyValue].title} on Wikipedia</a> : ""}
                </article>
            </div>
        )
    } else {
        return (
            <h1 className="loading">. . .</h1>
        )
    }
}

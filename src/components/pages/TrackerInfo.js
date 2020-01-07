import React from 'react'
import Parser from 'html-react-parser'

export default function TrackerInfo(props) {
    const keyValue = props.currentBird.info.query ? Object.keys(props.currentBird.info.query.pages)[0] : ''
    const { extract, title, thumbnail } = props.currentBird.info.query ? props.currentBird.info.query.pages[keyValue] : ''
    const parsedInfo = props.currentBird.info.query ? Parser(`${extract} → `) : (props.currentBird.info.error ? props.currentBird.info.error.info : "")
    if (props.isLoading === false) {
        return (
            <div>
                <h2>{title ? title.toUpperCase() : props.currentRegion.toUpperCase()}</h2>
                <article>
                    <img src={thumbnail ? thumbnail.source : "loading.gif"} alt={title} title={title} className="article-img" />
                    {parsedInfo ? parsedInfo : "Select a region, then select a bird..."}
                    {props.currentBird.info.query ? <a href={`https://en.wikipedia.org/wiki/${title}`} className="wiki-link">{title} on Wikipedia</a> : ""}
                </article>
            </div>
        )
    } else {
        return (
            <h1 className="loading">. . .</h1>
        )
    }
}

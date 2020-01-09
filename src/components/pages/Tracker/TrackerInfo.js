import React from 'react'
import ReactHtmlParser from 'html-react-parser'

const TrackerInfo = (props) => {
    const wikiLink = (<span className="wiki-text">⤏ <a href={`http://wikipedia.com/wiki/${props.currentSpecies.title}`}>Continue reading on Wikipedia</a> | <span onClick={() => props.setCurrentSpecies({ image: '', info: '', title: '' })} className="close-text">Close</span></span>)
    return (
        <article>
            <h1>{props.currentSpecies.title}</h1>
            {props.currentSpecies.image ?
                <img
                    src={props.currentSpecies.image.source}
                    alt={props.currentSpecies.title}
                    title={props.currentSpecies.title}
                    className="article-image"
                /> : ''}
            {ReactHtmlParser(props.currentSpecies.info)}
            {props.currentSpecies.info ? wikiLink : ''}
        </article>
    )
}

export default TrackerInfo

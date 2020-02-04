import React from 'react'
import TrackerInfo from './TrackerInfo'
import Search from './Search'
const Tracker = (props) => {

    if (props.loaded) {
        return (
            <main>
                <TrackerInfo currentSpecies={props.currentSpecies} setCurrentSpecies={props.setCurrentSpecies} />
                <Search searchTerm={props.searchTerm} handleSearch={props.handleSearch} />
                <div className="tracker-item-container">

                    {props.getTrackerItems()}

                </div>
            </main>
        )
    }
    else {
        return (
            <h1 className="loading">...</h1>
        )
    }
}

export default Tracker

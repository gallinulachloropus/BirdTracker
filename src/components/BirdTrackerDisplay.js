import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Header from './Header'

import Home from './pages/Home/Home'
import Tracker from './pages/Tracker/Tracker'
import About from './pages/About'


const BirdTrackerDisplay = (props) => {
    return (
        <BrowserRouter>

            <Header
                location={props.location}
            />

            <Switch>

                <Route
                    exact
                    path="/"
                    render={() =>
                        <Home
                            handleLocationSelect={props.handleLocationSelect}
                            location={props.location}
                            regionInfo={props.regionInfo}
                            getLocationOptions={props.getLocationOptions}
                        />
                    }
                />

                <Route
                    path="/tracker"
                    render={() =>
                        <Tracker
                            regions={props.regions}
                            currentSpecies={props.currentSpecies}
                            loaded={props.loaded}
                            getTrackerItems={props.getTrackerItems}
                        />
                    }
                />

                <Route
                    path="/about"
                    render={() =>
                        <About
                            reset={props.reset}
                        />}
                />

            </Switch>

        </BrowserRouter>
    )
}

export default BirdTrackerDisplay

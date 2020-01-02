import React from 'react'
import './stylesheets/BirdTracker.css'
import About from './pages/About'
import Header from './Header'
import Home from './pages/Home'
import TrackerList from './pages/TrackerList'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export default function BirdTrackerDisplay(props) {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Header location={props.location}/>
                <Switch>
                    <Route path="/" exact render={() => { return <Home location={props.location} handleChange={props.handleChange} getOptions={props.getOptions} /> }} />
                    <Route path="/tracker" render={() => { return <TrackerList location={props.location} getBirds={props.getBirds} currentBird={props.state.currentBird} isLoading={props.state.isLoading} /> }} />
                    <Route path="/about" component={About} />
                </Switch>
            </React.Fragment>
        </BrowserRouter>
    )
}

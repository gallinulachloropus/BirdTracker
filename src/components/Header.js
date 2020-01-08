import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return (
        <header>
            <h1>BirdTracker</h1>
            <h3>{props.location ? `Current Location: ${props.location}` : null}</h3>
            <nav>
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/tracker">Tracker</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>

            <hr />
        </header>
    )
}

export default Header

import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header(props) {
    return (
            <header>
                <h1>BirdTracker</h1>
                <h2 style={{minHeight: "2.5rem"}}>{props.location ? props.location.toUpperCase(): ""}</h2>
                <nav>
                    <NavLink exact to="/">Location</NavLink>
                    <NavLink to="/tracker">Tracker</NavLink>
                    <NavLink to="/about">About</NavLink>
                </nav>
            </header>
    )
}

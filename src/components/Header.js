import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header(props) {
    return (
        <header>
            <h1><span style={{ color: "#224422" }}>Bird</span>Tracker</h1>
            <h3 style={{ minHeight: "2.5rem" }}>{props.currentRegion ? props.currentRegion.toUpperCase() : ""}</h3>
            <nav>
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/tracker">Tracker</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </header>
    )
}

import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return (
        <header>
            <h1 className="logo"><span id="bird-red">Bird</span>Tracker <span role="img" aria-label="Bird" style={{ verticalAlign: 'middle', fontSize: '2rem'}}>🐦</span></h1>
            <h3 className="location-heading">{props.location ? `⤏ ${props.location}` : null}</h3>
            <nav>
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/seen">Birds Seen</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>


        </header>
    )
}

export default Header

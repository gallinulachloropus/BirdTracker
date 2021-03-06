import React from 'react'

const Search = (props) => {
    return (
        <div style={{display: 'block'}}>
            <input type="text" class="search" placeholder="Search this location..." name="search" onChange={props.handleSearch} value={props.searchTerm} />
            <span role="img" aria-label="search" style={{fontSize: '2rem', opacity: 0.5}}>🔎</span>
        </div>
    )
}

export default Search

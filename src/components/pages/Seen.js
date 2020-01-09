import React from 'react'

const Seen = (props) => {
    return (
        <main>
            <h1>Previously Seen Birds</h1>
            {props.getSeenList()}
        </main>
    )
}

export default Seen

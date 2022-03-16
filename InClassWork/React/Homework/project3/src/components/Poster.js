import React from 'react'

function Poster(props) {
    console.log(props)
    return (
        <div>
            <img src={props.image} alt="poster"></img>
        </div>
    )
}

export default Poster
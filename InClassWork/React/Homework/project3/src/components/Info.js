import React from 'react'

function Info(props) {

    return (
        <div>
            <p>Director: {props.director}</p>
            <p>Title: {props.title}</p>
        </div>
    )
}

export default Info
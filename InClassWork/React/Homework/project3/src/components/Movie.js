import React from 'react'
import info from './Info'
import poster from './Poster'

function Movie(props) {

    console.log(props)



    return (
        <div style={{border: "1px solid black"}}>
            <poster image={props.image} />
            <info director={props.director} title={props.title}/>
        </div>
    )
}

export default Movie
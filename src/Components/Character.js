import React from 'react'
import './basic.css'

function Character(Esam){
    return(
        <div id= {Esam.props.style === 1 ? 'box3': Esam.props.style === 2 ? 'box2' : 'box'}>
            <img className = 'character'src = {Esam.props.url} alt = {Esam.props.name}></img>
            <h2>{Esam.props.difficulty}</h2>
            <h1>{Esam.props.name}</h1>
        </div>
    )
}

export default Character
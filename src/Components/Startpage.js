import React, {useState} from 'react'
import Game from './Game'
import Character from './Character'
import Dwig from '../Assets/Dwig.png'
import pinkGuy from '../Assets/pinkGuy.png'
import Zoid from '../Assets/Zoid.png'

function StartPage(){
    const [reRender, setReRender]= useState(false)
    const CharacterData = [
        {
            name: 'Zoidberg',
            url: Zoid,
            difficulty: 'Easy',
            style: 1
        },
        {
            name: 'Patrick',
            url: pinkGuy,
            difficulty: 'Medium',
            style: 2
        },
        {
            name: 'Bobblehead Dwight',
            url: Dwig,
            difficulty: 'Hard',
            style: 3
        }
    ]

    const handleClick = () => {
        setReRender(true)
    }
    return(
        <div>
            {reRender ? 
                <Game /> :
                <div>
                    <h1>Where's Waldo...?</h1>
                    <Character props = {CharacterData[0]} />
                    <Character props = {CharacterData[1]} />
                    <Character props = {CharacterData[2]} />
                    <button className = 'butt' onClick = {handleClick}>Start!</button>
                </div>
            }
        </div>
    )
}
export default StartPage
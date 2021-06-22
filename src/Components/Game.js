import React,{useState, useEffect} from 'react'
import './game.css'
import ClickBox from './ClickBox'
import Endpage from './Endpage'

function Game(){
    //Characters
    const [Zoidberg, setZoidBerg] = useState(false)
    const [Dwight, setDwight] = useState(false)
    const [Patrick, setPatrick] = useState(false)
    const [completed, setCompleted] = useState(false)

    //Locations
    const zLocation = {x: 248, y: 616}
    const dLocation = {x: 1100, y: 762}
    const pLocation = {x: 1831 , y: 392}

    //SEt Mouse Position
    const [clickPosition, setClickPosition] = useState({x: null, y: null})

    //Set Time
    const [time, setTime] = useState(0)

    //Click Position Stuff more
    useEffect(() => {
        //On Mount add event listener for click
        const getClickPosition = e => {
            //Takes in event information, isolates x and y coordinates, and sets click position to them
            //Get x and y and set it to those!!!
            setClickPosition({x: e.layerX, y: e.layerY})
            //Removes event listneer so i dont get like 80 results
            window.removeEventListener('click', getClickPosition)
        };
        window.addEventListener('click', getClickPosition)
        //Make this go off each time clickposition goes off
    }, [clickPosition])


    function handleClick(thing){
        (function confirm(key){
            if(key === 1){
                if((zLocation.x + 65 > x && x > zLocation.x - 65) && (zLocation.y + 65 > y && zLocation.y - 65 < y)){
                    setZoidBerg(true)
                    alert('Nice, you found Zoidberg!')
                }
                else{
                    alert('Keep Trying!')
                }
            }
            else if(key === 2){
                if((pLocation.x + 65 > x && x > pLocation.x - 65) && (pLocation.y + 65 > y && pLocation.y - 65 < y)){
                    setPatrick(true)
                    alert('Nice, you found Patrick!')
                }
                else{
                    alert('Err... Not Quite!')
                }
            }
            else{
                if((dLocation.x + 65 > x && x > dLocation.x - 65) && (dLocation.y + 65 > y && dLocation.y - 65 < y)){
                    setDwight(true)
                    alert('Congratulations! You Found Dwight!')
                }
                else{
                    alert('Keep Going!')
                }
            }
        })(thing)
    }
    
    function isDone(){
        if(Zoidberg === true && Dwight === true && Patrick === true){
            return true
        }
    }

    //I subtract here because otherwise the marker is slightly off click area...
    let x = clickPosition.x -50
    let y = clickPosition.y -50

    //Time
    useEffect(() => {
        if(isDone()){
            setCompleted(true)
        }
        else{
            const bruh = setTimeout(() => {
                setTime((prevTime) => prevTime + 1)
            }, 1000)
            return () => clearTimeout(bruh)
        }
    }, [time])

    return(
        <div>
            { completed ? <Endpage time = {time} /> :
            <div className = 'container'>
                <nav id = 'nav'>
                    <h1>What The Dog Doin</h1>
                    <h1 className = 'timer'>{time}</h1>
                </nav>
                <img className = 'game' src = 'https://i.imgur.com/r42VNbs.jpg' alt='Please Refresh Page!'></img>
                <ClickBox x = {x} y = {y} time = {time} Zoidberg = {Zoidberg} Dwight = {Dwight} Patrick = {Patrick} handleClick = {handleClick}/>
            </div>
            }
        </div>
    )
}

export default Game
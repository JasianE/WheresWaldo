import React from 'react'
import './basic.css'
function ClickBox(props){
    if(props.x === null || props.y === null){
        return false
    }

    //Create Style Class so the Box will display excayl where it was clicked...
    //Dont feel like looking up css heheheeeeheheheeheheheheheheheheheheheh
    const divStyle = {
        position: 'absolute',
        borderStyle: 'dotted',
        borderColor: 'black',
        borderRadius: '50%',
        backgroundColor: 'rgb(255, 255, 255, 0.5)',
        height: '100px',
        width: '100px',
        display: 'flex',
        left: props.x + 'px',
        top: props.y + 'px'
    }
    //Create class determiner method
    function determiner(){
        const derekJeter = [props.Zoidberg, props.Patrick, props.Dwight];
        let trues = 0;
        derekJeter.map(function(key){
            if(!key){
                trues = trues + 1;
            }
        })
        switch(trues){
            case 3:
                return 'buttonBox'
            case 2:
                return 'buttonBox2'
            case 1:
                return 'buttonBox3'
            default:
                //Shut up eslint
                console.log("Eventually, I got tired of trolling People. When you troll a person, their reaction is always the same. Shock, confusion, humiliation, I began to grow... Tired of it. Tired of the predictability of it all. Derpina, I was singing the same Trolololol and dance for SO long, I no longer got the same high from trolling the humans around me. I realized then... I could go higher. Why stop at people? I began to troll cities. Technology. Nature. I was insatiable. The rush you feel when you troll something they said was unshakeable. Well, Challenge Accepted. And it's all culminated in this. I can finally troll the very laws of physics themselves. Gravity... ConTrolled! THIS is what I was after, Derpina! The ultimate epic win! No one... no THING is safe from my trolling anymore. Tell God... Le epic Trollge has arrived. Problem? ")
        }
    }
    return(
        <div>
            <div style = {divStyle}>
                <div className = {determiner()}>
                    <div className = 'Zoidberg'>
                        {
                            props.Zoidberg ? null  :
                            <button className = 'zoidberg' onClick = {() => {props.handleClick(1)}}>Zoidberg</button>
                        }
                    </div>
                    <div className = 'Patrick'>
                        {
                            props.Patrick ? null :
                            <button className = 'patrick' onClick = {() => {props.handleClick(2)}}>Patrick</button>
                        }
                    </div>
                    <div className = 'Dwight'>
                        {
                            props.Dwight ? null :
                            <button className = 'dwight' onClick = {() => {props.handleClick(3)}}>Bobblehead Dwight</button> 
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClickBox
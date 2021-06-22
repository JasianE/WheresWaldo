import React, {useState, useEffect} from 'react'
import Firebase from 'firebase'
import config from './Firebase/config'
import humanReadable from './humanReadable'
import checkValidity from './checkValidity'

function Endpage(props){
    const [registered, setRegistered] = useState(false)
    const [highScores, setHighScores] = useState([])
    const [shouldAsk, setShouldAsk] = useState(false)
    const [notDone, setNotDone] = useState(true)
    //For soe reason sometimes i already have an initializedapp and sometimes i dont so idont know 
    if(!Firebase.apps.length){
        Firebase.initializeApp(config)
    }
    else{
        Firebase.app()
    }
    const db = Firebase.firestore()

    async function badCode(){
        //I need to touch up on async aka i need to learn async
        let scores = []
        const response = db.collection('highscores')
        const data = await response.get();
        data.docs.map(function(key){
            scores.push(key.data().users[0].score)
            setHighScores([...highScores, key.data().users[0]])
        })
        const lowest = Math.max(...scores)
        const validity = checkValidity(props.time, lowest)
        setShouldAsk(validity)
    }
    useEffect(() => {
        badCode()
    }, [])

    function storeHighScore(userName, score){
        if(registered === false){
            setRegistered(true)
            return db.collection('highscores')
                .add({
                    created: Firebase.firestore.FieldValue.serverTimestamp(),
                    users: [{name: userName, score: score}]
                })
        }
    }   
    function promptUser(){
        if(notDone === true){
            const name = prompt('What is your username?')
            storeHighScore(name, props.time)
        }
    }
    const sentence = humanReadable(props.time)
    if(shouldAsk && notDone){
        setNotDone(false)
        promptUser()
    }
    console.log(highScores)
    return(
        <div>
            <div>
                <h1>Your Time Was...</h1>
                <h1>{sentence}</h1>
            </div>
            <div>
                {
                    shouldAsk ? 
                    <div>
                        <h1>Congratulations! You made it in the top 5!</h1>
                    </div>
                    :
                    <div>
                        <h1>Think you can do better? Try Again!</h1>
                    </div>
                }
            </div>
        </div>
    )
}

export default Endpage
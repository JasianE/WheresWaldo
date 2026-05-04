import React, {useState, useEffect} from 'react'
import Firebase from 'firebase'
import config from './Firebase/config'
import humanReadable from './humanReadable'
import checkValidity from './checkValidity'

if(!Firebase.apps.length){
    Firebase.initializeApp(config)
} else {
    Firebase.app()
}
const db = Firebase.firestore()

function Endpage(props){
    const [registered, setRegistered] = useState(false)
    const [highScores, setHighScores] = useState([])
    const [shouldAsk, setShouldAsk] = useState(false)
    const [notDone, setNotDone] = useState(true)

    useEffect(() => {
        async function badCode(){
            let scores = []
            const response = db.collection('highscores')
            const data = await response.get();
            data.docs.forEach(function(key){
                scores.push(key.data().users[0].score)
                setHighScores(h => [...h, key.data().users[0]])
            })
            const lowest = Math.max(...scores)
            const validity = checkValidity(props.time, lowest)
            setShouldAsk(validity)
        }
        badCode()
    }, [props.time])

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
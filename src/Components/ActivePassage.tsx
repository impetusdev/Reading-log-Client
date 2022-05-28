import axios from "axios";
import { useState} from "react";
import './ActivePassage.scss';
import { Passage } from './Read';
import { UserContext } from "./UserContext";
import { useContext } from "react";


type AppProps = {
    passage: Passage;
};

export const ActivePassage = ({passage}: AppProps): JSX.Element => {
    
    const [timerStarted, setTimerStarted] = useState<boolean>(false);
    const [timerIntervalId, setTimerIntervalId] = useState<any | null>(null); //TODO: get the type correct on this. 
    const [timeTaken, setTimeTaken] = useState<number>(0); // unit: seconds
    const [wpm, setWpm] = useState<number>(0);
    
    
    const startTimer = () => {
        setTimerStarted(true);
        const period = 100; // this is in ms
        const frequency  = 1000 / period; 

        // set the interval that repeats the call back function once every period
        const intervalId = setInterval(() => {
            setTimeTaken(timeTaken => Math.round((timeTaken + period / 1000)* frequency ) / frequency); // increments the "timeTaken" value in seconds
        }, period);

        setTimerIntervalId(intervalId);
    }

    const stopTimer = () => {
        setTimerStarted(false);

        clearInterval(timerIntervalId);
    }

    const submit = async () => {
        let wordPerMinute = 60 * passage.wordCount/ timeTaken;
        let roundedWpm = Math.round( wordPerMinute * 100) / 100;
        setWpm(roundedWpm);
        //TODO: get timeTaken submissions working.

        await axios.post("http://localhost:3000/reading", {
            timeTaken, 
            wpm, 
            id: passage._id
        });

        //TODO: attach the header to the post request. 
        // develop the endpoint to recieve reading timeTaken and speed. 
    }

    return (
        passage && <div className="passage">
            <h2>{passage.source}</h2>
            <h3>{passage.author}</h3>
            <p className="text">{passage.text}</p>
            <p>{wpm} Words per Minute</p>
            <p className="difficulty">Difficulty: {passage.complexity}</p>
            
            <p>{timeTaken.toFixed(1)}s</p>
            {
                timerStarted ? 
                    <button onClick={stopTimer}>Pause</button> 
                    :
                    <button onClick={startTimer}>Start Reading</button>
            }
            <button onClick={submit} disabled={timeTaken === 0 ? true : false}>Submit timeTaken</button>
        </div>
    )
}
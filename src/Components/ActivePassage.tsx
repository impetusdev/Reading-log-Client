import { useState} from "react";
import './ActivePassage.scss';
import {Passage} from './Read';

type AppProps = {
    passage: Passage;
};


export const ActivePassage = ({passage}: AppProps): JSX.Element => {
    
    const [timerStarted, setTimerStarted] = useState<boolean>(false);
    const [timerIntervalId, setTimerIntervalId] = useState<any | null>(null); //TODO: get the type correct on this. 
    const [time, setTime] = useState<number>(0); // unit: seconds
    const [wpm, setWpm] = useState<number>(0);
    
    const startTimer = () => {
        setTimerStarted(true);
        const period = 100; // this is in ms
        const frequency  = 1000 / period; 

        //TODO: make a helper function that can be extracted for testing. 

        // set the interval that repeats the call back function once every period
        const intervalId = setInterval(() => {
            // add the increment of period => 
            setTime(time => Math.round((time + period / 1000 ) * frequency) / frequency); // increments the "time" value in seconds
        }, period);

        setTimerIntervalId(intervalId);
    }

    const stopTimer = () => {
        setTimerStarted(false);

        clearInterval(timerIntervalId);
    }

    const submit = () => {
        let wordPerMinute = 60 * passage.wordCount/ time;
        let roundedWpm = Math.round( wordPerMinute * 100) / 100;
        setWpm(roundedWpm);
        //TODO: get time submissions working.

        // develop the endpoint to recieve reading time and speed. 
    }

    return (
        passage && <div className="passage">
            <h2>{passage.source}</h2>
            <h3>{passage.author}</h3>
            <p className="text">{passage.text}</p>
            <p>{wpm} Words per Minute</p>
            <p className="difficulty">Difficulty: {passage.complexity}</p>
            
            <p>{time.toFixed(0)}s</p>
            {
                timerStarted ? 
                    <button onClick={stopTimer}>Pause</button> 
                    :
                    <button onClick={startTimer}>Start Reading</button>
            }
            <button onClick={submit} disabled={time === 0 ? true : false}>Submit Time</button>
        </div>
    )
}
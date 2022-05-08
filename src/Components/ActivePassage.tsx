import React, {useEffect, useState} from "react";
import './ActivePassage.scss';

import {Passage} from './Read';

export const ActivePassage = ({passage}: any) => {
    
    const [timerStarted, setTimerStarted] = useState<boolean>(false);
    const [time, setTime] = useState<number>(0);
    const [timerIntervalId, setTimerIntervalId] = useState<any | null>(null); //TODO: get the type correct on this. 
    
    const startTimer = () => {
        setTimerStarted(true);
        const intervalId = setInterval(() => {
            setTime(time => Math.round((time + 0.1)*10)/10);
        }, 100);
        setTimerIntervalId(intervalId)
    }
    const stopTimer = () => {
        setTimerStarted(false);
        console.log('intervalId:', timerIntervalId)
        clearInterval(timerIntervalId);
    }

    console.log('passage:', passage);
  
    return (
        passage ? <div className="passage">
            <h2>{passage.source}</h2>
            <h3>{passage.author}</h3>
            <p>{passage.text}</p>
            <p>{time.toFixed(1)}</p>
            <p className="difficulty">Difficulty: {passage.complexity}</p>
            
            {
                timerStarted ? 
                    <button onClick={stopTimer}>Finished</button> 
                    :
                    <button onClick={startTimer}>Start Reading</button>
            }
            
            <button>Submit Time</button>
        </div>
        : <></>
    )
}
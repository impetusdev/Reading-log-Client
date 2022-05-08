import React, {useEffect, useState} from "react";
import './ActivePassage.scss';

import {Passage} from './Read';

export const ActivePassage = ({passage}: any) => {
    
    const [timerStarted, setTimerStarted] = useState<boolean>(false);
    const [timerIntervalId, setTimerIntervalId] = useState<any | null>(null); //TODO: get the type correct on this. 
    const [time, setTime] = useState<number>(0);
    const [wpm, setWpm] = useState<number>(0);
    
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

    const submit = () => {
        setWpm(60 * passage.wordCount/ time);
        //TODO: get time submissions working. 
    }
  
    return (
        passage ? <div className="passage">
            <h2>{passage.source}</h2>
            <h3>{passage.author}</h3>
            <p className="text">{passage.text}</p>
            <p>{wpm} Words per Minute</p>
            <p className="difficulty">Difficulty: {passage.complexity}</p>
            
            <p>{time.toFixed(1)}</p>
            {
                timerStarted ? 
                    <button onClick={stopTimer}>Pause</button> 
                    :
                    <button onClick={startTimer}>Start Reading</button>
            }
            <button onClick={submit} disabled={time === 0 ? true : false}>Submit Time</button>
        </div>
        : <></>
    )
}
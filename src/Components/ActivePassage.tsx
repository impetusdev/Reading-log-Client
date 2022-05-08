import React, {useEffect, useState} from "react";
import axios from "axios";
import './Read.scss';
import {Passage} from './Read';

export const ActivePassage = ({passage}: any) => {
    
    const [timerStarted, setTimerStarted] = useState<boolean>(false);
    const [time, setTime] = useState<number>(0);
    let intervalId: any;
    
    const startTimer = () => {
        setTimerStarted(true);
        intervalId = setInterval(() => {
            setTime(time => Math.round((time + 0.1)*10)/10);
        }, 100);
    }
    const stopTimer = () => {
        setTimerStarted(false);
        console.log('intervalId:', intervalId);
        clearInterval(intervalId);
    }

  
    
    return (
        passage ? <div className="passage">
            <h2>{passage.source}</h2>
            <h3>{passage.author}</h3>
            <p>{passage.text}</p>
            <p>{time.toFixed(1)}</p>
            
            {
                timerStarted ? 
                    <button onClick={stopTimer}>Finished</button> 
                    :
                    <button onClick={startTimer}>Start Reading</button>
                }
        </div>
        : <></>
    )
}
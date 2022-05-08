
import React, {useEffect, useState} from "react";
import axios from "axios";
import './Read.scss';
import { ActivePassage } from "./ActivePassage";

export interface Passage {
    _id: string,
    text: string,
    createdOn: string,
    source: string,
    author: string, 
    wordCount: number,
    complexity: number,
    _v: number
}

export const Read = (): JSX.Element => {
    const [passages, setPassages] = useState<Passage[] | null>(null);
    const [activePassage, setActivePassage] = useState<Passage | null>(null);
    // perform the axios call to pick a passage
    useEffect( ()=> {
        
        const getPassages = async () => {
            try {
                let res = await axios.get('http://localhost:3000/text')
                // console.log('data is:', res.data);
    
                setPassages(res.data);
            } catch (error) {
                console.log("Error:", error)
            }  
        }

        getPassages();
    }, [])

    const displayPassage: any = (passage: Passage) => {
        setActivePassage(passage);


    }

    // TODO: make a component called activePassage
    
    return (
        <div>
            {
                activePassage ? 
                    <ActivePassage passage={activePassage}/>: 
                        passages ? passages.map(passage => {
                            return <div key={passage._id} className="passage">
                                <h2>{passage.source}</h2>
                                <h3>{passage.author}</h3>
                                <p>{passage.text.substring(0, 200)}... </p>
                                <button onClick={() => displayPassage(passage)}>continue</button>
                            </div>
                        }) : ''
            }
        </div>
    )
}   


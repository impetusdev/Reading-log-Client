
import React, {useState} from "react";
import './Text.scss';

export const Text = () => {
    const [textSnippet, setTextSnippet] = useState<string>('');
    const [wordCount, setWordCount] = useState<number>(0);

    const updateText = (e:any) => {
        setTextSnippet(e.target.value.trim());
    }
    
    // count how many words are in the text. 
    const analyseText = () => { 
        if (textSnippet.trim() === ''){
            setWordCount(0);
        } else {
            setWordCount(textSnippet.split(' ').length);
        }
    }
    
    return <div className="section">
        <h2>Input your text below</h2>
        <textarea onChange={updateText}/>
        <p>{textSnippet}</p>
        <button onClick={analyseText}>Analyse</button>
        <p>{`word count: ${wordCount}`}</p>
    </div>;
}

import React, {useState} from "react";
import axios from "axios";
import './Text.scss';

export const Text = () => {
    const [textSnippet, setTextSnippet] = useState<string>('');
    const [wordCount, setWordCount] = useState<number>(0);

    const updateText = (e:any) => {
        setTextSnippet(e.target.value.trim());
    }
    
    // TODO: use this website: https://www.smashingmagazine.com/2020/07/react-apps-testing-library/
    // count how many words are in the text. 
    const getText = async () => { 
        try {
            let res = await axios.get('localhost:3000/text')
            console.log('res is:', res);
        } catch (error) {
            console.log("Error:", error)
        }    
    }

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
        <button onClick={getText}>Upload the text file</button>
        <button onClick={analyseText}>Analyse</button>
        <p>{`word count: ${wordCount}`}</p>
    </div>;
}
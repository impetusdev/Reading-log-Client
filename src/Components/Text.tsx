import React, {useState} from "react";
import axios from "axios";
import './Text.scss';

interface AllText {
    _id: string,
    text: string,
    createdOn: string,
    _v: number
}

export const Text = (): JSX.Element => {
    const [textSnippet, setTextSnippet] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [source, setSource] = useState<string>('');

    const [wordCount, setWordCount] = useState<number>(0);

    const updateText = (e:any) => {
        setTextSnippet(e.target.value.trim());
    }
    // TODO: use this website: https://www.smashingmagazine.com/2020/07/react-apps-testing-library/


    const uploadText = async () => { 
        try {
            let res = await axios.post('http://localhost:3000/text', {
                text: textSnippet
            })
            console.log('res is:', res);
        } catch (error) {
            console.log("Error:", error)
        }    
    }

    // gets the word count
    const analyseText = () => { 
        if (textSnippet.trim() === ''){
            setWordCount(0);
        } else {
            setWordCount(textSnippet.split(' ').length);
        }
    }

    return <div className="section">
        <h2>Input your text below</h2>
        <div className="input-container">
            <label>Input Text: </label>
            <textarea onChange={updateText}/>
        </div>
        <div className="input-container">
            <label>Author: </label>
            <input onChange={(e) => setAuthor(e.target.value)}/>
        </div>
        <div className="input-container">
            <label>Source: </label>
            <input onChange={(e) => setSource(e.target.value)}/>
        </div>
        
        <p>{textSnippet}</p>
        <button onClick={uploadText}>Upload the text file</button>
        <button onClick={analyseText}>Analyse</button>
        <p>{`word count: ${wordCount}`}</p>

    </div>;
}
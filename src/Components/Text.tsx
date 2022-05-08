
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
    const [wordCount, setWordCount] = useState<number>(0);
    const [allText, setAllText] = useState<AllText[]>([]);

    const updateText = (e:any) => {
        setTextSnippet(e.target.value.trim());
    }
    
    // TODO: use this website: https://www.smashingmagazine.com/2020/07/react-apps-testing-library/


    const getText = async () => { 
        try {
            let res = await axios.get('http://localhost:3000/text')

            setAllText(res.data);
        } catch (error) {
            console.log("Error:", error)
        }    
    }
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
        <textarea onChange={updateText}/>
        <p>{textSnippet}</p>
        <button onClick={getText}>Get the text</button>
        <button onClick={uploadText}>Upload the text file</button>
        <button onClick={analyseText}>Analyse</button>
        <p>{`word count: ${wordCount}`}</p>


        {
            allText.map((snippet) => <p key={snippet._id}>{snippet.text}</p>)
        }
    </div>;
}
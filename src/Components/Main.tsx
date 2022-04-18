
import React, {useState} from "react";

interface File {
    lastModified: number;
    name: string;
    size: number;
    type: string;
    
}


export const Main = () => {

    const [hello, setHello] = useState('');
    const [file, setFile] = React.useState<File | null>();
    const fileReader = new FileReader();

    fileReader.addEventListener("load", () => {
        // this will then display a text file
        console.log(fileReader.result);

    }, false);

    // upload the file
    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files){

            fileReader.readAsDataURL(event.target.files[0]);
        }
    };

    return <div>
        <input type="file" onChange={onFileChange}/>
        
        <h1>Upload your image here </h1>
        <p>{file?.name}</p>
    </div>;
}



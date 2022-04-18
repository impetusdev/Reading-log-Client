
import React, {useState} from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';

interface File {
    lastModified: number;
    name: string;
    size: number;
    type: string;
    
}


export const Main = () => {
    const [numPages, setNumPages] = useState<number | null> (null);
    const [pageNumber, setPageNumber] = useState<number> (1);

    const [file, setFile] = React.useState<any | null>();
    const fileReader = new FileReader();

    fileReader.addEventListener("load", () => {
        // this will then display a text file
        // debugger;

        const base64String = fileReader.result
        setFile(base64String);
        console.log(fileReader.result)

    }, false);

    function onDocumentLoadSuccess({ numPages }: {numPages: number}) {
        setNumPages(numPages);
    }

    // upload the file
    const onFileChange = (event: any) => {
        setFile(event.target.files[0]);
      }

    return <div>
        <input type="file" onChange={onFileChange}/>
        
        <h1>Upload your image here </h1>
        {/* <p>{file?.name}</p> */}

        <div>
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
        
    </div>;
}



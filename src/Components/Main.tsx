
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

    const [file, setFile] = React.useState<any | null>(null);
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

    const incrementPageNumber = () => {
        setPageNumber(pageNumber + 1);
    }
    const decrementPageNumber = () => {
        if (pageNumber !== 1) {
            setPageNumber(pageNumber - 1);
        }
    }

    return <div>
        <h1>Speed Reader</h1>
        <p>Upload your file below and begin</p>
        <input type="file" onChange={onFileChange}/>
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
        </Document>
        {file ?
            <div>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
                <button onClick={decrementPageNumber}>Prev</button>
                <button onClick={incrementPageNumber}>Next</button>
            </div>
            :
            ''
        }
    </div>;
}



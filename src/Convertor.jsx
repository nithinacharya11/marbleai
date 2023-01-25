import React, { useState, useEffect } from 'react';
import PDFJS from 'pdfjs-dist';
import {storage} from './firebase'
import { ref, getDownloadURL} from 'firebase/storage';


const MyComponent = () => {
    const [pdfText, setPdfText] = useState('');

    useEffect(() => {
        // Get the URL of the PDF file stored in Firebase Storage
        const pdfUrl = getDownloadURL(ref(storage, `gs://marbleaiauth.appspot.com/${user.name}/${file.name}`)) 
        // Use PDFJS to load the PDF file
        PDFJS.getDocument(pdfUrl).then(pdf => {
            // Get the first page of the PDF
            pdf.getPage(1).then(page => {
                // Use the getTextContent method to extract the text from the page
                page.getTextContent().then(textContent => {
                    // Build the text content into a single string
                    const pdfText = textContent.items.map(i => i.str).join('');
                    // Set the text content in the state
                    setPdfText(pdfText);
                });
            });
        });
    }, []);

    return (
        <div>
            <p>{pdfText}</p>
        </div>
    );
};

export default MyComponent;

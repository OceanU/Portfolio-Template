// Header.jsx
// import React from 'react';
import React, { useEffect, useRef } from 'react';
import './contactSection.css';
import Button from '@mui/material/Button';

const ContactSection = () => {
    // Multiple lines of code or logic
    const title = 'Contact Me';
    const aboutRef = useRef(null);


    useEffect(() => {
        console.log('aboutRef:', aboutRef);
    }, []);


    return (

        <div className="contact" ref={aboutRef}>
            <div className="clipped-shape">
                <div className='contact-wrap'>
                    <h1>{title}</h1>
                    <p>Let's work tohether for your project.</p>
                    <p>Click button below to copy</p>
                    <Button variant="outlined" >name@company.com</Button>
                </div>
            </div>
        </div>

    );
};

export default ContactSection;
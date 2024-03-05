// Header.jsx
// import React from 'react';
import React, { useEffect, useState, useRef } from 'react';
import './contactSection.css';
import Button from '@mui/material/Button';

const ContactSection = () => {
    // Multiple lines of code or logic
    const title = 'Contact Me';

    const [scrolled, setScrolled] = useState(false);

    //////////////////////////////////////////////        before ading intersection observer
    // useEffect(() => {
    //     let timeoutId;

    //     const handleScroll = () => {
    //         const scrollPosition = window.scrollY;
    //         const threshold = 2830;

    //         // Clear previous timeout
    //         clearTimeout(timeoutId);

    //         // Set a new timeout to delay setting scrolled to true
    //         timeoutId = setTimeout(() => {
    //             // Check if scroll position is beyond the threshold
    //             if (scrollPosition > threshold && !scrolled) {
    //                 setScrolled(true);
    //             }
    //         }, 200); // Adjust the delay time (in milliseconds) as needed
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         // Cleanup the event listener and clear the timeout on component unmount
    //         window.removeEventListener('scroll', handleScroll);
    //         clearTimeout(timeoutId);
    //     };
    // }, [scrolled]);
    //////////////////////////////////////////////        before ading intersection observer
    //////////////////////////////////////////////        after adding intersection observer
    const elementRef = useRef(null);

    const handleIntersection = (entries, observer) => {

        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Element is now in the viewport, you can trigger your logic here
                console.log('Element is in the viewport');
                setScrolled(true);
                observer.unobserve(entry.target);
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            root: null, // Use the viewport as the root
            threshold: 0.9, // Trigger when 50% of the element is visible
        });

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            // Cleanup the observer on component unmount
            observer.disconnect();
        };
    }, []); // Empty dependency array to run the effect once
    //////////////////////////////////////////////        after adding intersection observer

    return (

        <div className="contact" ref={elementRef}>
            <div className="clipped-shape bottom">
                <div className='contact-wrap'>
                    <h1 className={`contact-tittle ${scrolled ? 'visible' : ''}`}>{title}</h1>
                    <p className={` ${scrolled ? 'visible' : ''}`}>Let's work tohether for your project.</p>
                    <p className={` ${scrolled ? 'visible' : ''}`}>Click button below to copy</p>
                    <Button variant="outlined" className={`${scrolled ? 'visible' : ''}`}>name@company.com</Button>
                </div>
            </div>
        </div>

    );
};

export default ContactSection;
// Header.jsx
// import React from 'react';
import React, { useState, useEffect, useRef } from 'react';
import './aboutSection.css';
// import Button from '@mui/material/Button';
import GradientButton from './GradientButton';
import portfolioPicture from './port-pic.jpg';

const AboutSection = ({ aboutRef }) => {
    const [scrolled, setScrolled] = useState(false);
    //////////////////////////////////////////////        before ading intersection observer

    // useEffect(() => {
    //     let timeoutId;

    //     const handleScroll = () => {
    //         const scrollPosition = window.scrollY;
    //         console.log(scrollPosition)
    //         const threshold = 353;

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
            threshold: 0.5, // Trigger when 50% of the element is visible
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




    // Multiple lines of code or logic
    const title = 'About Me';



    return (
        <div className="about" ref={aboutRef}>
            <div className="clipped-shape" ref={elementRef}>
                <div className='content-wrap'>
                    <h1 className={`${scrolled ? 'visible' : ''}`}>{title}</h1>
                    <div className='picture-text-wrapper'>

                        <div className={`picture-container ${scrolled ? 'visible' : ''}`}>
                            <img src={portfolioPicture} alt='portfoliopicture' className='portfolio-picture' />
                        </div>
                        <div className={`text-container ${scrolled ? 'visible' : ''}`}>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, sequi id. Beatae similique ratione velit fugit iste numquam dolor totam rerum et laborum.</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, sequi id. Beatae similique ratione velit fugit iste numquam dolor totam rerum et laborum, neque debitis omnis fuga maxime nostrum tempora.</p>
                            <div>
                                <GradientButton  >Resume</GradientButton>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    );
};

export default AboutSection;
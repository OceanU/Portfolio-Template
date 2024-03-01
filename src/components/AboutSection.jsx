// Header.jsx
// import React from 'react';
import React, { useState, useEffect } from 'react';
import './aboutSection.css';
import Button from '@mui/material/Button';

const AboutSection = ({ aboutRef }) => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        let timeoutId;

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            console.log(scrollPosition)
            const threshold = 353;

            // Clear previous timeout
            clearTimeout(timeoutId);

            // Set a new timeout to delay setting scrolled to true
            timeoutId = setTimeout(() => {
                // Check if scroll position is beyond the threshold
                if (scrollPosition > threshold && !scrolled) {
                    setScrolled(true);
                }
            }, 200); // Adjust the delay time (in milliseconds) as needed
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            // Cleanup the event listener and clear the timeout on component unmount
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutId);
        };
    }, [scrolled]);


    // Multiple lines of code or logic
    const title = 'About Me';



    return (
        <div className="about" ref={aboutRef} >
            <div className="clipped-shape">
                <div className='content-wrap'>
                    <h1 className={`${scrolled ? 'visible' : ''}`}>{title}</h1>
                    <div className={`picture-container ${scrolled ? 'visible' : ''}`}></div>
                    <div className={`text-container ${scrolled ? 'visible' : ''}`}>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, sequi id. Beatae similique ratione velit fugit iste numquam dolor totam rerum et laborum, neque debitis omnis fuga maxime nostrum tempora.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, sequi id. Beatae similique ratione velit fugit iste numquam dolor totam rerum et laborum, neque debitis omnis fuga maxime nostrum tempora.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, sequi id. Beatae similique ratione velit fugit iste numquam dolor totam rerum et laborum, neque debitis omnis fuga maxime nostrum tempora.</p>
                        <div>
                            <Button variant="outlined" >Resume</Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    );
};

export default AboutSection;
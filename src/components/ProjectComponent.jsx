// import React from 'react';
import React, { useEffect, useState } from 'react';
import './projectComponent.css';
import Button from '@mui/material/Button';

const ProjectComponent = ({ title, description, imageUrl, isVisible }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        let timeoutId;

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = 1100;

            // Clear previous timeout
            clearTimeout(timeoutId);

            // Set a new timeout to delay setting scrolled to true
            timeoutId = setTimeout(() => {
                // Check if scroll position is beyond the threshold
                if (scrollPosition > threshold && !scrolled) {
                    setScrolled(true);
                } else if (scrollPosition <= threshold && scrolled) {
                    setScrolled(false);
                }
            }, 300); // Adjust the delay time (in milliseconds) as needed
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            // Cleanup the event listener and clear the timeout on component unmount
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutId);
        };
    }, [scrolled]);


    return (

        // <div className={`main-container ${scrolled ? '' : 'scrolled'}`}>
        <div className={`main-container`}>
            <div className={`description-wraper ${isVisible ? 'visible' : ''}`}>
                <div className='title'>
                    <h3>{title}</h3>
                </div>
                <div className="text-content">
                    <p>{description}</p>
                </div>
                <div className='buttons'>
                    <Button variant="outlined">See Live</Button>
                    <Button color="secondary">Source Code</Button>

                </div>

            </div>
            <div className={`picture-wraper ${isVisible ? 'visible' : ''}`}>
                <img src={imageUrl} alt={title} className='project-image' />
            </div>

        </div>

    );
};

export default ProjectComponent;



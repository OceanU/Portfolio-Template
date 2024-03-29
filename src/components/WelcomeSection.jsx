// Header.jsx
// import React from 'react';
import React, { useEffect, useState } from 'react';
import './welcomeSection.css';
import GradientButton from './GradientButton';

const WelcomeSection = ({ aboutRef }) => {
    const [scrolled, setScrolled] = useState(false);
    const [firstRender, setFirstRender] = useState(true);



    useEffect(() => {
        setFirstRender(false)
        console.log(scrolled)
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = 300; // Adjust this threshold based on when you want the transition to occur

            // Check if scroll position is beyond the threshold
            if (scrollPosition > threshold && !scrolled) {
                setScrolled(true);
            } else if (scrollPosition <= threshold && scrolled) {
                setScrolled(false);
            }
        };


        window.addEventListener('scroll', handleScroll);

        return () => {
            // Cleanup the event listener on component unmount
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const scrollToAbout = () => {
        // Scroll to the about section using the ref
        if (aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="welcome">
            <div className='welcome-wrap'>
                <div className={`introduction-text ${scrolled ? 'scrolled' : `${firstRender ? 'firstRenderText' : ''}`}`}>
                    <h1>Hi, my name is <span className='introduction-text-span'>Name LastName</span>, </h1>
                    <h1>I'm a whatever your profession is.</h1>
                </div>
                <div className={`welcome-button ${scrolled ? 'scrolled' : `${firstRender ? 'firstRenderButton' : ''}`}`}>
                    <GradientButton onClick={scrollToAbout}>See more</GradientButton>
                </div>
            </div>
        </div>



    );
};

export default WelcomeSection;

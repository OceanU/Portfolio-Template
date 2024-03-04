// Header.jsx
import React, { useEffect, useState } from 'react';
import './footerSection.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const FooterSection = ({ aboutRef }) => {

    const [scrolled, setScrolled] = useState(false);

    //##### checkpoint before adding intersection observer instead useEffect based on scrollPosition ####
    useEffect(() => {
        let timeoutId;

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = 3297;

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


    //##### checkpoint before adding intersection observer instead useEffect based on scrollPosition ####

    const handleScrollToAbout = () => {
        // Scroll to the about section using the ref
        if (aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (

        <div className="footer">
            <div className='arrow-up' onClick={handleScrollToAbout}>
                <KeyboardArrowUpIcon className={scrolled ? 'lift' : ''} style={{ animationDelay: '2s' }} fontSize="large" />
            </div>
            <div className='social-media-icons'>
                <FacebookIcon className={scrolled ? 'lift' : ''} style={{ animationDelay: '0.2s' }} fontSize="large" />
                <InstagramIcon className={scrolled ? 'lift' : ''} style={{ animationDelay: '0.4s' }} fontSize="large" />
                <LinkedInIcon className={scrolled ? 'lift' : ''} style={{ animationDelay: '0.6s' }} fontSize="large" />
                <GitHubIcon className={scrolled ? 'lift' : ''} style={{ animationDelay: '0.8s' }} fontSize="large" />
            </div>
            <hr />
            <div className='details'>
                <p>Other contact details. </p>
                <p>✆ +073930332827393</p>
                <p>Alternative Email/ Other Detail</p>
            </div>

        </div>

    );
};

export default FooterSection;
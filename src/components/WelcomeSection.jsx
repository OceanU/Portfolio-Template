// Header.jsx
// import React from 'react';
import React from 'react';
import './welcomeSection.css';
import Button from '@mui/material/Button';

const WelcomeSection = () => {


    return (
        <div className="center welcome">
            <div className='welcome-wrap'>
                <div className={`introduction-text `}>
                    <h1>Hello, my name is <span className='introduction-text-span'>Name Surname</span> , </h1>
                    <h1>I am my profession</h1>
                </div>
                <div className={`welcome-button ${scrolled ? 'scrolled' : ''}`}>
                    <Button variant="outlined" >Know more</Button>
                </div>
            </div>
        </div>



    );
};

export default WelcomeSection;

// Header.jsx
import React from 'react';
import './styles.css';
import Button from '@mui/material/Button';

const WelcomeSection = () => {
    // Multiple lines of code or logic

    return (
        <div className="center welcome">
            <div className='welcome-wrap'>
                <div className='introduction-text'>
                    <h1>Hello, my name is Name Surname, </h1>
                    <h1>I am <span className='introduction-text-span'>my profession</span></h1>
                </div>
                <div className='welcome-button'>
                    <Button variant="outlined" >Know more</Button>
                </div>
            </div>
        </div>



    );
};

export default WelcomeSection;

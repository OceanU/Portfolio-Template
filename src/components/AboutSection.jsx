// Header.jsx
import React from 'react';
import './aboutSection.css';
import Button from '@mui/material/Button';

const AboutSection = () => {
    // Multiple lines of code or logic
    const title = 'About Me';

    return (
        <div className="about">
            <div className="clipped-shape">
                <div className='content-wrap'>
                    <h1>{title}</h1>
                    <div className='picture-container'></div>
                    <div className='text-container'>
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
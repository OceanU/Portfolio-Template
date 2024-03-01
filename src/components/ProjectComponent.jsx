// import React from 'react';
import React from 'react';
import './projectComponent.css';
import Button from '@mui/material/Button';

const ProjectComponent = ({ title, description, imageUrl }) => {

    return (

        <div className={`main-container`}>

            <div className="description-wraper">
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
            <div className='picture-wraper'>
                <img src={imageUrl} alt={title} className='project-image' />
            </div>

        </div>

    );
};

export default ProjectComponent;


// Header.jsx
import React from 'react';
import ProjectComponent from './ProjectComponent';
import './styles.css';
import pic1 from "./pic1.jpg"
// import './Header.css';

const ProjectsSection = () => {
    // Multiple lines of code or logic
    const title = 'Projects Section';

    return (

        <div className="center project">
            <h1>{title}</h1>
            <ProjectComponent
                title="Project 1"
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit..."
                imageUrl={pic1}
            />
            <ProjectComponent
                title="Project 2"
                description="Another description for the second project..."
                imageUrl={pic1}
            />
            <ProjectComponent
                title="Project 3"
                description="Another description for the third project..."
                imageUrl={pic1}
            />
            {/* Content for ProjectsSection */}
            {/* The height will be determined by the content of each project */}
        </div>

    );
};

export default ProjectsSection;
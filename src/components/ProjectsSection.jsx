// Header.jsx
import React from 'react';
import ProjectComponent from './ProjectComponent';
import './styles.css';
import pic1 from "./pic1.jpg"
// import './Header.css';

const ProjectsSection = () => {
    // Multiple lines of code or logic
    const title = 'Projects - My Work';


    return (

        <div className={`center project `} >
            <h1>{title}</h1>
            <ProjectComponent
                title="Project 1 Cool Title"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae excepturi, eum, iure vitae magnam sapiente totam similique, magni a nisi praesentium iusto eveniet deserunt dicta officiis provident. Natus, quisquam explicabo."
                imageUrl={pic1}
            />
            <ProjectComponent
                title="Project 2 Cool Title"
                description="Another description for the second project...Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae excepturi, eum, iure vitae magnam sapiente totam similique, magni a nisi praesentium iusto eveniet deserunt dicta officiis provident. Natus, quisquam explicabo."
                imageUrl={pic1}
            />
            <ProjectComponent
                title="Project 3 Cool Title"
                description="Another description for the third project...Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae excepturi, eum, iure vitae magnam sapiente totam similique, magni a nisi praesentium iusto eveniet deserunt dicta officiis provident. Natus, quisquam explicabo."
                imageUrl={pic1}
            />
            {/* Content for ProjectsSection */}
            {/* The height will be determined by the content of each project */}
        </div>

    );
};

export default ProjectsSection;
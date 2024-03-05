
import React, { useState, useRef, useEffect } from 'react';
import ProjectComponent from './ProjectComponent';
import './projectSection.css';
import pic1 from "./pic1.jpg"
// import './Header.css';

const ProjectsSection = () => {
    // Multiple lines of code or logic
    const title = 'Projects - My Work';
    const [scrolledProjects, setScrolledProjects] = useState([false, false, false, false]);

    const loggedRef = useRef([false, false, false, false]);

    useEffect(() => {
        let timeoutIds = [];

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const thresholds = [800, 1166, 1700, 2280];

            clearTimeout(timeoutIds);

            timeoutIds = thresholds.map((threshold, index) =>
                setTimeout(() => {
                    if (scrollPosition > threshold && !scrolledProjects[index] && !loggedRef.current[index]) {
                        setScrolledProjects(prevState => {
                            const newStates = [...prevState];
                            newStates[index] = true;
                            loggedRef.current[index] = true; // Mark as logged
                            console.log(`Project ${index + 1} can appear`);
                            return newStates;
                        });
                    }
                }, 300)
            );
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutIds);
        };
    }, [scrolledProjects]);

    return (

        <div className={`project `} >
            <h1 className={`project-title ${scrolledProjects[0] ? 'visible' : ''}`}>{title}</h1>
            <ProjectComponent
                title="Project 1 Cool Title"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae excepturi, eum, iure vitae magnam sapiente totam similique, magni a nisi praesentium iusto eveniet deserunt dicta officiis provident. Natus, quisquam explicabo."
                imageUrl={pic1}
                isVisible={scrolledProjects[1]}
            />
            <ProjectComponent
                title="Project 2 Cool Title"
                description="Another description for the second project...Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae excepturi, eum, iure vitae magnam sapiente totam similique, magni a nisi praesentium iusto eveniet deserunt dicta officiis provident. Natus, quisquam explicabo."
                imageUrl={pic1}
                isVisible={scrolledProjects[2]}
            />
            <ProjectComponent
                title="Project 3 Cool Title"
                description="Another description for the third project...Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae excepturi, eum, iure vitae magnam sapiente totam similique, magni a nisi praesentium iusto eveniet deserunt dicta officiis provident. Natus, quisquam explicabo."
                imageUrl={pic1}
                isVisible={scrolledProjects[3]}
            />
            {/* Content for ProjectsSection */}
            {/* The height will be determined by the content of each project */}
        </div>

    );
};

export default ProjectsSection;



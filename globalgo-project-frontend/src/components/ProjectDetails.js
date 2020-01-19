import React from 'react';
import {Image} from 'semantic-ui-react';

const ProjectDetails = ({project}) => {

    const handleClick = () =>{
        console.log('project details', project)
    }

    return (
        <div id="project-details">
            <br/>
            <h4> Organisation: {project.organization.name}   | Country: {project.country} </h4> 
            <br/>
            <h1>Project title: {project.title} </h1>
            <br/>
            <img src={project.imageLink} alt="project-image" />
            <br/>
            <h3>Project theme:  </h3>
            <h3>Remaining: | Funding: {project.funding} | Goal: {project.goal} </h3>
            <br/>
            <h5> Need: {project.need} </h5>
            <br/>
            <a href={project.projectLink} >Project Link </a>
            <br/>
            <button onClick={() => handleClick()} > Make a Donation</button>
        </div>
    );
}

export default ProjectDetails;


// Project Details to include:
// Project Title
// Images
// Project link -  Project Link: {project.projectLink}
// Donate Button
// themeName - need or longTermImpact - remaining 
// Organisation:  

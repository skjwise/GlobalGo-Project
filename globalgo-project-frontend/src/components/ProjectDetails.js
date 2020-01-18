import React from 'react';
import {Image} from 'semantic-ui-react';

const ProjectDetails = ({project}) => {

    const handleClick = () =>{
        console.log('project details', project)
    }

    return (
        <div id="project-details">
            <br/>
            <h5> Organisation:   | Country: {project.country} </h5> 
            <br/>
            <h1>Project title: {project.title} </h1>
            <br/>
            <img src={project.imageLink} alt="project-image" />
            <br/>
            <h3>Project theme: </h3>
            <h3>Remaining: | Funding: | Goal: </h3>
            <br/>
            <h5>Project need </h5>
            <br/>
            <h4>Project Link: </h4>
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

import React from 'react';
import {Image} from 'semantic-ui-react';

const ProjectDetails = ({project}) => {

    const handleClick = () =>{
        console.log("test")
    }

    return (
        <div id="project-details">
            <br/>
            <h5> Organisation:   | Country:  </h5> 
            <br/>
            <h1>Project title:  </h1>
            <br/>
            {/* <img src={project.imageLink} alt="project-image" /> */}
            {/* <Image src={}  /> */}
            <h2>PROJECT IMAGE HERE</h2>
            <br/>
            <h3>Project theme</h3>
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

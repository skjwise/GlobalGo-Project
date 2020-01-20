import React from 'react';
import {Button} from 'semantic-ui-react';

const ProjectDetails = ({project}) => {

    const handleClick = () =>{
        console.log('project details', project)
    }

    return (
        <div id="project-details">
            <br/>
            <h4> Organisation: {project.organization.name} </h4> 
            <h3> {project.country} ({project.iso3166CountryCode}) </h3>
            <br/>
            <h1> {project.title} </h1>
            <br/>
            <img src={project.imageLink} alt="project-image" />
            <br/>
            {/* <img src={project.image.imagelink.url} /> */}
            {/* <h3>Project theme: {project.themes.theme.name} </h3> */}
            <br/>
            <h4>Long Term Impact: {project.longTermImpact} </h4>
            <br/>
            <h3>Remaining: £ {project.remaining} | Funding: £ {project.funding} | Goal: £ {project.goal} </h3>
            <br/>
            <h4> Need: {project.need} </h4>
            <br/>
            <a href={project.projectLink} > Project Link </a>
            <br/>
            <br/>
            <Button onClick={() => handleClick()} > Make a Donation</Button>
        </div>
    );
}

export default ProjectDetails;
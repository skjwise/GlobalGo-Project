import React from 'react';
import {Button} from 'semantic-ui-react';
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";

const ProjectDetails = ({project}) => {
    const history = useHistory();


    const handleClick = () =>{
        console.log('project details', project)
        history.push("/donation");
    }

    return (
        <div id="project-details">
            <br/>
            <h4> Organisation: {project.organization.name} </h4> 
            <h3> {project.themeName} | {project.country} ({project.iso3166CountryCode}) </h3>
            <br/>
            <h1> {project.title} </h1>
            <br/>
            <img src={project.imageLink} alt="project" />
            <br/>
            <br/>
            <h4>Long Term Impact: {project.longTermImpact} </h4>
            <br/>
            <h3> £ {project.funding.toFixed(0)} raised of £ {project.goal} goal </h3>
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
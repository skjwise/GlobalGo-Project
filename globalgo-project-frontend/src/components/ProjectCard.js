import React from 'react';
import {Redirect} from 'react-router-dom';
import { Card, Image, Button, Link } from 'semantic-ui-react';
import DonationPage from './DonationPage';
import ProjectDetails from './ProjectDetails';

const ProjectCard = ({project}) => {

    const handleDonateClick = () =>{
        console.log(project.id)
    //    if (){
    //     <Redirect to="/donation" />
    //    }
    }

    const handleDetailsClick = () => {
        console.log(project.id)
    }

    return (
        <div id="project-card">
        <h2 id="all-projects">All Projects</h2>    
        <Card style={{ height: "300px", width: "600px", margin: "30px" }}>
            <Image src={project.imageLink} wrapped ui={false} /> 
            <Card.Content>
            <Card.Header> Project Title: {project.title} </Card.Header>
            <br/>
            <Card.Meta> Contry: {project.country} ({project.iso3166CountryCode}) </Card.Meta>
            <br/>
            <Card.Meta> Funding Raised: £ {project.funding}  Goal: £ {project.goal} </Card.Meta>
            <br/>
            <Card.Description>
                Long Term Impact: {project.longTermImpact}
            </Card.Description>
            <br/>
            <Button color="green" onClick={() => handleDonateClick()} >
                Donate 
            </Button>
            <Button onClick={project => <ProjectDetails key={project.id} project={project} />} > More Details</Button>
            </Card.Content>
        </Card>
        </div>
    );
}

export default ProjectCard;
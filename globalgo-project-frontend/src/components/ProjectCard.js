import React from 'react';
import { Card, Image, Button, Link } from 'semantic-ui-react';
import DonationPage from './DonationPage';
import ProjectDetails from './ProjectDetails';

const ProjectCard = ({project}) => {

    const handleDonateClick = () =>{
        console.log(project.id)
        // <DonationPage />
    }

    return (
        <div id="project-card">
        <Card color="red"  style={{ height: "350px", width: "600px", margin: "30px" }}>
            <Image src={project.imageLink} wrapped ui={false} /> 
            <Card.Content>
            <Card.Header> Project Title: {project.title} </Card.Header>
            <br/>
            <Card.Meta> Contry: {project.country} ({project.iso3166CountryCode}) </Card.Meta>
            <br/>
            <Card.Meta> Organisation: {project.contactAddress} </Card.Meta>
            <br/>
            <Card.Meta> Funding Raised: £ {project.funding}  Goal: £ {project.goal} </Card.Meta>
            <br/>
            <Card.Description>
                Summary: {project.summary}
            </Card.Description>
            <br/>
            <Card.Meta> Project Link: {project.projectLink} </Card.Meta>
            <br/>
            <Button color="green" onClick={() => handleDonateClick()} >
                Donate 
            </Button>
            <Button onClick={() => <ProjectDetails key={project.id} project={project} />} > More Details</Button>
            </Card.Content>
        </Card>
        </div>
    );
}

export default ProjectCard;


// notes: do I add in theme name?
// need to make the project link work

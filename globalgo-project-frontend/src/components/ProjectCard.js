import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import DonationPage from './DonationPage';

const ProjectCard = ({project}) => {

    const handleClick = () =>{
        console.log(project.id)
        // <DonationPage />
    }

    return (
        <Card style={{ height: "300px", width: "600px", margin: "30px" }}>
            <Image src={project.imageLink} wrapped ui={false} /> 
            <Card.Content>
            <Card.Header> Title: {project.title} </Card.Header>
            <br/>
            <Card.Meta> Goal: {project.goal} </Card.Meta>
            <br/>
            <Card.Meta> Funding: {project.funding} </Card.Meta>
            <br/>
            <Card.Description>
                Summary: {project.summary}
            </Card.Description>
            <br/>
            <Button labelPosition="right" onClick={handleClick} >
                Donate 
            </Button>
            </Card.Content>
        </Card>
    );
}

export default ProjectCard;

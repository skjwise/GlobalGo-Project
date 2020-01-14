import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const ProjectCard = ({project}) => {
    return (
        <Card style={{ height: "285px", width: "250px", margin: "30px" }}>
            <Image src={project.image_url} wrapped ui={false} />
            <Card.Content>
            <Card.Header> {project.title} </Card.Header>
            <Card.Meta> {project.goal} </Card.Meta>
            <Card.Description>
                {project.description}
            </Card.Description>
            </Card.Content>
        </Card>
    );
}

export default ProjectCard;

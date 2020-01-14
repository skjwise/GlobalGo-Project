import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

export class ProjectCard extends Component {
    render() {
        return (
                 <Card style={{ height: "285px", width: "250px", margin: "30px" }}>
                    <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>Project Title</Card.Header>
                    <Card.Meta>Project Goal</Card.Meta>
                    <Card.Description>
                        Project Description
                    </Card.Description>
                    </Card.Content>
                </Card>
        );
    }
}

export default ProjectCard;

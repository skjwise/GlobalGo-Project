import React from 'react';
import {Grid, Segment, Label } from 'semantic-ui-react';
import ProjectCard from './ProjectCard';


const AllProjects = ({projects}) => {


    return (
        <React.Fragment>
            <Grid.Column width={2}>
                <Grid>
                    <Segment>
                        <Label size="hugh" > All Projects </Label>
                        <Grid.Row columns={2}>
                            {projects !== undefined && projects.map(project => <ProjectCard key = {project.id} project={project} />)}
                        </Grid.Row>
                    </Segment>
                </Grid>
            </Grid.Column>
        </React.Fragment>
    );
}

export default AllProjects;


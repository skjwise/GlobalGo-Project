import React from 'react';
import {Grid, Segment, Label } from 'semantic-ui-react';
import ProjectCard from './ProjectCard';


const AllProjects = ({projects}) => {

    return (
        <React.Fragment>
            <Grid.Column width={3}>
                <Grid>
                    <Segment>
                        {/* <Label> All Projects </Label> */}
                        <Grid.Row columns={2}>
                            {projects.map(project => <ProjectCard project={project} />)}
                        </Grid.Row>
                    </Segment>
                </Grid>
            </Grid.Column>
        </React.Fragment>
    );
}

export default AllProjects;


import React from 'react';
import {Grid, Segment } from 'semantic-ui-react';
import ProjectCard from './ProjectCard';


const AllProjects = ({projects}) => {


    return (
        <div>
            <h2 id="all-projects">All Projects</h2>    
            <React.Fragment>
                <Grid.Column width={2}>
                    <Grid>
                        <Segment>
                                {projects !== undefined && projects.map(project => <ProjectCard key = {project.id} project={project} />)}
                        </Segment>
                    </Grid>
                </Grid.Column>
            </React.Fragment>
        </div>
    );
}

export default AllProjects;


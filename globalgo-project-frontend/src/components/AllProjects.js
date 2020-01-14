import React from 'react';
import {Grid, Label, Segment } from 'semantic-ui-react';
import ProjectCard from './ProjectCard';


const AllProjects = ({props, projects, setAllProjects}) => {

    const singleProject = (setAllProjects) => { 
        setAllProjects.map(project => console.log(project))
    }

    return (
        <React.Fragment>
            <Grid.Column width={3}>
                <Grid>
                    <Label>
                        All Projects
                    </Label>
                    <ProjectCard project={singleProject} />
                </Grid>
            </Grid.Column>
        </React.Fragment>

    );
}

export default AllProjects;


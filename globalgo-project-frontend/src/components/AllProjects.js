import React from 'react';
// import {Grid, Segment } from 'semantic-ui-react';
import ProjectCard from './ProjectCard';


// maybe add a search feature that searches via theme...

const AllProjects = ({projects}) => {

    return (
        <div>
            <React.Fragment>
                {projects !== undefined && projects.map(project => <ProjectCard key = {project.id} project={project} />)}
            </React.Fragment>
        </div>
    );
}

export default AllProjects;


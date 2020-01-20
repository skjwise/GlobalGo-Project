import React from 'react';
// import {Grid, Segment } from 'semantic-ui-react';
import ProjectCard from './ProjectCard';


const AllProjects = ({projects, selectProject}) => {

    return (
        <div id='all-projects'>
            <React.Fragment>
                {projects !== undefined && projects.map(project => <ProjectCard key={project.id} project={project} selectProject={selectProject} />)}
            </React.Fragment>
        </div>
    );
}

export default AllProjects;


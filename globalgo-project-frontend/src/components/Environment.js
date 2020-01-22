import React from 'react';
import EnvironmentProjectCard from './EnvironmentProjectCard';

const Environment = ({environmentProjects}) => {
    return (
        <div id="environment-projects" >
            <React.Fragment>
                {environmentProjects !== undefined && environmentProjects.map(project => <EnvironmentProjectCard key={project.id} project={project} />)}
            </React.Fragment>
        </div>
    );
}

export default Environment;

import React from 'react';
import EnvironmentProjectCard from './EnvironmentProjectCard';

const Environment = ({environmentProjects}) => {
    return (
        <div id="environment-projects" >
            <React.Fragment>
            <h1 > Environment Projects </h1>
                {environmentProjects !== undefined && environmentProjects.map(project => <EnvironmentProjectCard key={project.id} project={project} />)}
            </React.Fragment>
        </div>
    );
}

export default Environment;

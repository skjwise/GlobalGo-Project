import React from 'react';
import HealthProjectCard from './HealthProjectCard';

const Health = ({healthProjects}) => {
    return (
        <div id="health-projects" >
            <React.Fragment>
                {healthProjects !== undefined && healthProjects.map(project => <HealthProjectCard key={project.id} project={project} />)}
            </React.Fragment>
        </div>
    );
}

export default Health;

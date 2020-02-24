import React from 'react';
import EducationProjectCard from './EducationProjectCard';

const Education = ({educationProjects}) => {
    return (
        <div id="all-themes" >
            <React.Fragment>
                <h1 > Education Projects </h1>
                {educationProjects !== undefined && educationProjects.map(project => <EducationProjectCard key={project.id} project={project} />)}
            </React.Fragment>
        </div>
    );
}

export default Education;

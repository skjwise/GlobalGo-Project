import React from 'react';
import EducationProjectCard from './EducationProjectCard';

const Education = ({educationProjects}) => {
    return (
        <div id="all-themes" >
            <React.Fragment>
                {educationProjects !== undefined && educationProjects.map(project => <EducationProjectCard key={project.id} project={project} />)}
            </React.Fragment>
        </div>
    );
}

export default Education;

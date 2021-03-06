import React from 'react';
import AnimalProjectCard from './AnimalProjectCard';

const Animal = ({animalProjects}) => {
    return (
        <div id="environment-projects" >
            <React.Fragment>
            <h1 > Animal Projects </h1>
                {animalProjects !== undefined && animalProjects.map(project => <AnimalProjectCard key={project.id} project={project} />)}
            </React.Fragment>
        </div>
    );
}

export default Animal;
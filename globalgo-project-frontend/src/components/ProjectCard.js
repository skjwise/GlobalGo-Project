import React, { useState } from 'react';
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import { Card, Image, Button } from 'semantic-ui-react';
import ProjectDetails from './ProjectDetails';
import Modal from './Modal'

const ProjectCard = ({project, user}) => {
    const [singleProject, setProject] = useState([]);
    const [isModalOpen, setModal] = useState(false)  
    const history = useHistory();

    const handleDonateClick = () =>{
        console.log(project.id)
        history.push("/donation");
    }

    const handleDetailsClick = () => {
        console.log(project.id)
        history.push("/projectdetails");
    }

    const selectProject = project => {
        setProject(singleProject);
        setModal(true);
        console.log('project details', project);
      }

    return (
        <div id="project-card">
        <h2 id="project-title"> {project.title} </h2>    
        <Card style={{ height: "350px", width: "600px", margin: "30px" }}>
            <Image src={project.imageLink} wrapped ui={false} /> 
            <Card.Content>
            <br/>
            <Card.Header> Funding Raised: £ {project.funding} | Goal: £ {project.goal} </Card.Header>
            {/* numbers toFixed */}
            <br/>
            <Card.Meta> {project.country} ({project.iso3166CountryCode}) </Card.Meta>
            <br/>
            <Card.Description>
                Summary: {project.summary}
            </Card.Description>
            <br/>
            <Button onClick={() => handleDonateClick()} > Donate </Button>
            <Button onClick={() => selectProject(project)} > More Details</Button>
            </Card.Content>
        </Card>
        {isModalOpen && (
            <Modal closeModal={() => setModal(false)}>
                <ProjectDetails
                    project={project}
                    user={user}
                    closeModalOnSave={() => setModal(false)}
                />
            </Modal>
        )}
        </div>
    );
}

export default ProjectCard;
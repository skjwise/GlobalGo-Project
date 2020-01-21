import React, { useState } from 'react';
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import { Card, Image, Button, Progress } from 'semantic-ui-react';
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

    // const handleDetailsClick = () => {
    //     console.log(project.id)
    //     history.push("/projectdetails");
    // }

    const selectProject = project => {
        setProject(singleProject);
        setModal(true);
        console.log('project details', project);
    }

    const progressBar = () => {
       return Math.floor(project.funding.toFixed(0) / project.goal.toFixed(0) * 100)
    }


    return (
        <div id="project-card">
        <Card style={{ height: "550px", width: "600px", margin: "20px" }}>
            <Image src={project.imageLink} wrapped ui={true} size='medium' /> 
            <Card.Content>
            <Card.Header> {project.title} </Card.Header>
            <br/>
            <Card.Header> Goal: £ {project.goal} </Card.Header>
            <Progress color='green' size='small' progress percent={progressBar()} ></Progress>
            <Card.Meta> {project.themeName} | {project.country} ({project.iso3166CountryCode}) </Card.Meta>
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
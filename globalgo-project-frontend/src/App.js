import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import API from "./adapters/API";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import DonationPage from "./components/DonationPage";
import { Container } from "semantic-ui-react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AllProjects from "./components/AllProjects";
import ProjectDetails from './components/ProjectDetails'
import "./App.css";
import Modal from "./components/Modal";
import { StripeProvider } from 'react-stripe-elements';
import Education from './components/Education';


const PROJECTS_URL = 'https://api.globalgiving.org/api/public/projectservice/all/projects/active?api_key=81e83abd-34c8-4ce8-8282-bce16c0fc71c&nextProjectId=354';
// const THEMES_URL = 'https://api.globalgiving.org/api/public/projectservice/themes?api_key=81e83abd-34c8-4ce8-8282-bce16c0fc71c';
const EDU_URL = 'https://api.globalgiving.org/api/public/projectservice/themes/edu/projects/active?api_key=81e83abd-34c8-4ce8-8282-bce16c0fc71c';
const HEALTH_URL = 'https://api.globalgiving.org/api/public/projectservice/themes/health/projects/active?api_key=81e83abd-34c8-4ce8-8282-bce16c0fc71c';
const ENV_URL = 'https://api.globalgiving.org/api/public/projectservice/themes/env/projects/active?api_key=81e83abd-34c8-4ce8-8282-bce16c0fc71c';

function App() {
  const [user, setUser] = useState(null);
  const [projects, setAllProjects] = useState([]);
  const [educationProjects, setThemeProjects] = useState([]);
  const [healthProjects, setHealthProjects] = useState([]);
  const [environmentProjects, setEnvironmentProjects] = useState([]);
  // const [project, setProject] = useState([]);
  // const [isModalOpen, setModal] = useState(false)
  const history = useHistory();

  useEffect(() => {
    getProjects();
    getEducation();
    getHealth();
    getEnvironemnt();
    API.validateUser()
      .then(user => setUser(user))
      .catch(console.error);
  }, []);

  const handleLogin = user => {
    setUser(user);
    history.push("/allProjects");
  };

  const handlelogout = () => {
    setUser(null);
    localStorage.clear();
    history.push("/");
  };

  const getProjects = () => {
    fetch(PROJECTS_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(r => r.json())
    .then(projects => setAllProjects(projects.projects))
  }

  // const selectProject = project => {
  //   setProject(project);
  //   setModal(true)
  //   console.log('project details', project);
  // }

  const getEducation = () => {
    fetch(EDU_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(r => r.json())
    .then(educationProjects => setThemeProjects(educationProjects.projects))
    .then(console.log(educationProjects.projects))
  }

  const getHealth = () => {
    fetch(HEALTH_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(r => r.json())
    .then(healthProjects => setHealthProjects(healthProjects.projects))
  }

  const getEnvironemnt = () => {
    fetch(ENV_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(r => r.json())
    .then(environmentProjects => setEnvironmentProjects(environmentProjects.projects))
  }

  return (
    <StripeProvider apiKey="pk_test_0IQtOJTDUqpqZSLQN0YhFDpL00WkixsQAl" >
    <div className="background">
      <Navbar user={user} onSuccess={handlelogout} />
      <Container style={{ align: "inline-block" }}>
        <Switch >
        <Route exact path="/" component={Home} />
        <Route exact path="/logout" component={Home} />
        <Route
          exact path="/signup"
          render={props => <SignUp {...props} onSuccess={handleLogin} />}
        />
        <Route
          exact path="/login"
          render={props => <Login {...props} onSuccess={handleLogin} />}
        />
        <Route
          exact path="/allProjects"
          render={props => (
            <AllProjects {...props} projects={projects.project} 
            // selectProject={selectProject} 
            /> )}
        />
        <Route
          exact path="/projectdetails"
          render={props => (
            <ProjectDetails {...props} 
              // project={project}
            /> 
          )}
        />
        <Route
          exact path="/education"
          render={props => <Education {...props} educationProjects={educationProjects.project} />}
        />
        <Route
          exact path="/health"
          render={props => <Education {...props} educationProjects={educationProjects.project} />}
        />
        <Route
          exact path="/environment"
          render={props => <Education {...props} educationProjects={educationProjects.project} />}
        />
        <Route
          exact path="/donation"
          render={props => <DonationPage {...props} />}
        />
        </Switch>
      </Container>
    </div>
    </StripeProvider>
  );
}

export default App;


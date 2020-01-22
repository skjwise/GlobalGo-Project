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
// import Modal from "./components/Modal";
import { StripeProvider } from 'react-stripe-elements';
import Education from './components/Education';
import Health from './components/Health';
import Environment from './components/Environment';
import Animal from "./components/Animal";

// &nextProjectId=354
const PROJECTS_URL = 'https://cors-anywhere.herokuapp.com/https://api.globalgiving.org/api/public/projectservice/all/projects/active?api_key=81e83abd-34c8-4ce8-8282-bce16c0fc71c';
const EDU_URL = 'https://cors-anywhere.herokuapp.com/https://api.globalgiving.org/api/public/projectservice/themes/edu/projects/active?api_key=81e83abd-34c8-4ce8-8282-bce16c0fc71c';
const HEALTH_URL = "https://cors-anywhere.herokuapp.com/https://api.globalgiving.org/api/public/projectservice/themes/health/projects/active?api_key=81e83abd-34c8-4ce8-8282-bce16c0fc71c";
const ENV_URL = 'https://cors-anywhere.herokuapp.com/https://api.globalgiving.org/api/public/projectservice/themes/env/projects/active?api_key=81e83abd-34c8-4ce8-8282-bce16c0fc71c';
// const HUNGER_URL = 'https://cors-anywhere.herokuapp.com/https://api.globalgiving.org/api/public/projectservice/themes/hunger/projects/active?api_key=81e83abd-34c8-4ce8-8282-bce16c0fc71c';
const ANIMAL_URL = 'https://cors-anywhere.herokuapp.com/https://api.globalgiving.org/api/public/projectservice/themes/animals/projects/active?api_key=81e83abd-34c8-4ce8-8282-bce16c0fc71c';

function App() {
  const [user, setUser] = useState(null);
  const [projects, setAllProjects] = useState([]);
  const [educationProjects, setThemeProjects] = useState([]);
  const [healthProjects, setHealthProjects] = useState([]);
  const [environmentProjects, setEnvironmentProjects] = useState([]);
  const [animalProjects, setAnimalProjects] = useState([]);
  // const [project, setProject] = useState([]);
  // const [isModalOpen, setModal] = useState(false)
  const history = useHistory();

  useEffect(() => {
    getProjects();
    getEducation();
    getHealth();
    getEnvironemnt();
    getAnimals();
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
    // .then(console.log(educationProjects.projects))
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
  const getAnimals = () => {
    fetch(ANIMAL_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(r => r.json())
    .then(animalProjects => setAnimalProjects(animalProjects.projects))
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
          render={props => <Health {...props} healthProjects={healthProjects.project} />}
        />
        <Route
          exact path="/environment"
          render={props => <Environment {...props} environmentProjects={environmentProjects.project} />}
        />
        <Route
          exact path="/animals"
          render={props => <Animal {...props} animalProjects={animalProjects.project} />}
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


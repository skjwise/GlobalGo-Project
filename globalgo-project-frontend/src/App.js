import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
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
import ThemeSearch from './components/ThemeSearch';
import { StripeProvider } from 'react-stripe-elements';



const PROJECTS_URL = 'https://api.globalgiving.org/api/public/projectservice/all/projects/active?api_key=81e83abd-34c8-4ce8-8282-bce16c0fc71c&nextProjectId=354';
const THEMES_URL = 'https://api.globalgiving.org/api/public/projectservice/themes?api_key=81e83abd-34c8-4ce8-8282-bce16c0fc71c'

function App() {
  const [user, setUser] = useState(null);
  const [projects, setAllProjects] = useState([]);
  const [themes, setAllThemes] = useState([]);
  // const [project, setProject] = useState([]);
  // const [isModalOpen, setModal] = useState(false)
  const history = useHistory();


  useEffect(() => {
    getProjects();
    getThemes();
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

  // componentDidMount(){
  //   this.getProjects()
  // }

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

  const getThemes = () => {
    fetch(THEMES_URL, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(r => r.json())
    .then(themes => setAllThemes(themes))
  }

  return (
    <StripeProvider apiKey="pk_test_0IQtOJTDUqpqZSLQN0YhFDpL00WkixsQAl" >
    <div className="background">
      <Navbar user={user} onSuccess={handlelogout} />
      <Container style={{ align: "inline-block" }}>
        <Router >
        <Route exact path="/" component={Home} />
        <Route exact path="/logout" component={Home} />
        <Route
          exact
          path="/signup"
          render={props => <SignUp {...props} onSuccess={handleLogin} />}
        />
        <Route
          exact
          path="/login"
          render={props => <Login {...props} onSuccess={handleLogin} />}
        />
        <Route
          exact
          path="/allProjects"
          render={props => (
            <AllProjects {...props} projects={projects.project} 
            // selectProject={selectProject} 
            /> )}
        />
        <Route
          exact
          path="/projectdetails"
          render={props => (
            <ProjectDetails {...props} 
              // project={project}
            /> 
          )}
        />
        <Route
          exact
          path="/themeSearch"
          render={props => <ThemeSearch {...props} themes={themes} />}
        />
        <Route
          exact
          path="/donation"
          render={props => <DonationPage {...props} />}
        />
        </Router>
      </Container>
    </div>
    </StripeProvider>
  );
}

export default App;


import React, {Component} from 'react';
import './App.css';
import MapBrowser from './containers/MapBrowser';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Profile from './components/Profile';
import MobileLanding from './components/MobileLanding';
import ProjectBrowser from './components/ProjectBrowser';
import DonationPage from './components/DonationPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import config from 'react-global-configuration';


const initialState = {
  userThemes: [],
  themes: [],
  updateThemes: false,
  selectedCountry: "",
  updatedSelectedCountry: false,
  selectedProject: {},
  user: {}
}

const PROJECTS_URL = 'https://api.globalgiving.org/api/public/projectservice/all/projects?api_key=81e83abd-34c8-4ce8-8282-bce16c0fc71c&nextProjectId=354';
const USERS_URL = `http://localhost:3000/api/v1/users`;
const THEMES_URL = `https://api.globalgiving.org/api/public/projectservice/themes?api_key=81e83abd-34c8-4ce8-8282-bce16c0fc71c`;
const COUNTRIES_URL = `https://api.globalgiving.org/api/public/projectservice/countries/IN/projects?api_key=81e83abd-34c8-4ce8-8282-bce16c0fc71c`;

class App extends Component {
  state = {initialState}

  componentDidMount(){
    this.getProjects()
    this.getThemes()
  }

  getProjects = () => {
    fetch(PROJECTS_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(r => r.json())
    .then(console.log)
  }

  getThemeFromId = themeId => {
    let theme = this.state.themes.find(theme => theme.id === themeId)
    return theme
  }
  
  getThemes = () => {
    fetch(THEMES_URL, {
      method: "GET",
      headers: {
        "Content-Tpye": "application/json",
        "Accept": "application/json"
      }
    })
    .then(r => r.json())
    // .then(console.log)
    .then(json => {
      if (json.length !== 0) {
        this.setState({themes: json})
      }
      if (localStorage.getItem("jwt")){
        this.fetchUserThemes()
      }
    })
  }  
  
    render() {
      return (
        <div className="App">
          <Router>
            <Route
              exact path="/"
              render={(props) => (
              <LoginForm {...props}
                resetState={this.resetState}
                onLogin={this.updateUser}
                setUser={this.setUser}
                updateSelectedCountry={this.updateSelectedCountry}
                fetchUserThemes={this.fetchUserThemes}
                getThemes={this.getThemes}
                />
                )}
              />
            {(this.state.updatedThemes)
            ? <Route
              path={'/mobile_landing'}
              render={()=><MobileLanding
                updateSelectedCountry={this.updateSelectedCountry}
                updateAppThemes={this.updateAppThemes}
                themes={this.state.themes}
                userThemes={this.state.userThemes}
                fetchUserThemes={this.fetchUserThemes}
                logout={this.logout}
                appSelectedCountry={this.state.selectedCountry}
              />}
              />
            : <div></div>}
            {(this.state.updatedThemes)
              ? <Route
                path={'/map'}
                render={()=><MapBrowser
                  updateSelectedCountry={this.updateSelectedCountry}
                  updateAppThemes={this.updateAppThemes}
                  themes={this.state.themes}
                  userThemes={this.state.userThemes}
                  fetchUserThemes={this.fetchUserThemes}
                  logout={this.logout}
                  appSelectedCountry={this.state.selectedCountry}
                />}
              />
            : <div></div>}
              <Route
                path={'/create_user'}
                render={()=><SignupForm
                getThemes={this.getThemes}
                themes={this.state.themes}
                />}
              />
              <Route
                path={'/profile'}
                render={()=><Profile
                              updateAppThemes={this.updateAppThemes}
                              handleDonate={this.handleDonate}
                              logout={this.logout}
                              getThemes={this.fetchUserThemes}
                            />}
              />
              {(this.state.updatedThemes)
            ? <Route
                path={'/projects'}
                render={()=><ProjectBrowser
                              handleDonate={this.handleDonate}
                              updatedSelectedCountry={this.state.updatedSelectedCountry}
                              updateSelectedCountry={this.updateSelectedCountry}
                              appSelectedCountry={this.state.selectedCountry}
                              updateAppThemes={this.updateAppThemes}
                              themes={this.state.themes}
                              userThemes={this.state.userThemes}
                              fetchUserThemes={this.fetchUserThemes}
                              logout={this.logout}
                            />}
                />
              : <div></div>}
  
            {(this.state.selectedProject)
            ? <Route
              path={'/donate'}
              render={() => <DonationPage
                project={this.state.selectedProject}
                logout={this.logout}
                />}
              />
            : <div></div>}
            </Router>
        </div>
  
      );
    }
  }  

export default App;

import React, {Component} from 'react';
import './App.css';
import MapBrowser from './containers/MapBrowser';
// import HomePage from './containers/HomePage';
// import CreateUserForm from './components/createUserForm';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Profile from './components/Profile';
import MobileLanding from './components/MobileLanding';
import ProjectBrowser from './components/ProjectBrowser';
import DonationPage from './components/DonationPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import config from 'react-global-configuration';


const initialState = {
  userThemes: [],
  themes: [],
  updateThemes: false,
  selectedCountry: "",
  updatedSelectedCountry: false,
  selectedProject: {},
  user: {}
}

const API_URL = 'http://localhost:3000';
// const USERS_URL = `${API_URL}/users`;
// const COUNTRY_URL = `${API_URL}/countries`;
// const PROFILE_URL = `${API_URL}/profile`;
// const THEMES_URL = `${API_URL}/themes`
// const PROJECTS_URL = `${API_URL}/projects`;

class App extends Component {

  state = {initialState}

  componentDidMount(){
    this.getThemes()
  }

  getThemeFromId = themeId => {
    let theme = this.state.themes.find(theme => theme.id === themeId)
    return theme
  }
  
  getThemes = () => {
    const url = `${API_URL}/themes`
    fetch(url)
    .then(res=>res.json())
    .then(json => {
      if (json.length !== 0) {
        this.setState({themes: json})
        // this.setState({themes: json}, this.fetchUserThemes())
      }
      // if (this.state.user.keys){
      if (localStorage.getItem("jwt")){
        this.fetchUserThemes()
      }
    })
  }
  
    fetchUserThemes = () => {
      let themeArray = []
      let token = localStorage.getItem("jwt")
  
        fetch(`${API_URL}/profile`, {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        })
        .then(res=>res.json())
        .then(json=> {
          if(!json["error"]){
            if(json.user.theme1){
              themeArray.push(this.getThemeFromId(json.user.theme1).name)
            }
            if(json.user.theme2){
              themeArray.push(this.getThemeFromId(json.user.theme2).name)
            }
            if(json.user.theme3) {
              themeArray.push(this.getThemeFromId(json.user.theme3).name)
            }
            this.setState({
              userThemes: themeArray,
              updatedThemes: true
            })
          }
        })
    }
  
  
    updateAppThemes = themes => {
      this.setState({userThemes: themes})
  
    }
  
    updateSelectedCountry = country => {
      if(country){
        this.setState({
          updatedSelectedCountry: true,
          selectedCountry: country
        })
      }
    }
  
    handleDonate = project => {
      this.setState({selectedProject: project})
      localStorage.removeItem('selectedProject')
      localStorage.setItem('selectedProject', JSON.stringify(project))
    }
  
    logout = () => {
      localStorage.setItem('jwt', '')
      localStorage.setItem('username', '')
      localStorage.setItem('email', '')
      localStorage.setItem('first_name', '')
      localStorage.setItem('last_name', '')
      localStorage.setItem('selectedProject', '')
      this.resetState()
      return true
    }
  
    resetState = () =>{
      this.setState(initialState)
    }
  
    setUser = user => {
      console.log('set user')
      this.setState({user: user, selectedCountry: user.default_country})
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

import React, {Component} from 'react';
import './App.css';
import MapBrowser from './containers/MapBrowser';
import HomePage from './containers/HomePage';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

const initialState = {
  userThemes: [],
  themes: [],
  updateThemes: false,
  selectedCountry: "",
  updatedSelectedCountry: false,
  selectedProject: {},
  user: {}
}

class App extends Component {

  state = {initialState}


  // need to fetch data from API 
  // also need to add user functions 





  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Donation App</h2>

        </header>
      </div>
    );
  }
}


export default App;

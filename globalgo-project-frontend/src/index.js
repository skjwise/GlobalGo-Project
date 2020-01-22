import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'


const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_CENTER,
    timeout: 7000,
    offset: '50px',
    // you can also just use 'scale'
    transition: transitions.SCALE
}

ReactDOM.render(<Router>  <AlertProvider template={AlertTemplate} {...options}>
    <App /> </AlertProvider> </Router> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

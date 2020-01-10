import React, { Component } from 'react';
import {Grid, Dropdown, Header, Icon, Loader} from 'semantic-ui-react';
import '../App.css';
import CountryCard from './CountryCard';
import ThemesDropdown from './ThemesDropdown';
import Navbar from './Navbar';
import Footer from './Footer';
import { withRouter } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import {Link, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll';
import config from 'react-global-configuration';

// localhost3001/projects

export class ProjectBrowser extends Component {
    render() {
        return (
            <div>
                <h2>Project Browser</h2>
            </div>
        );
    }
}

export default ProjectBrowser;

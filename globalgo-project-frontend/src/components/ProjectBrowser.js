import React, { Component } from 'react';
import {Grid, Dropdown, Header, Icon, Loader} from 'semantic-ui-react';
import '../App.css';
import CountryCard from './CountryCard';
import ThemesDropdown from './ThemesDropdown';
import Navbar from './Navbar';
import { withRouter } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import {Link, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll';
import config from 'react-global-configuration';

// localhost3001/projects
// https://api.globalgiving.org/api/public/projectservice/all/projects



export class ProjectBrowser extends Component {
    constructor(props){
        super(props)
        this.state = {
            countryList: [],
            selectedCountry: this.props.appSelectedCountry,
            projectThemes: this.props.userThemes,
            countryProjects: [],
            themesUpdated: false,
            countryUpdated: this.props.updatedSelectedCountry
        }
    }

    componentDidMount(){
        // this.fetchCountries()
        this.fetchThemeProjects()
        scroll.scrollTo(200)
    }
    componentDidUpdate(){
        scroll.scrollTo(200)
    }
    
    setSelectedCountry = () => {
        if(this.props.location && this.props.location.state && this.props.location.state.countryCode){
            if(this.state.selectedCountry === ""){
                this.setState({selectedCountry: this.props.location.state.countryCode}, this.fetchThemeProjects)
            }
        }
    }

    // fetchCountries = () => {
    //     const url = `${this.props.API_URL}/countries`
    //     const getCountryISO2 = require("country-iso-3-to-2");
    //     let countryArray = []
    //     fetch(url)
    //     .then(r => r.json())
    //     .then(json => {
    //         json.forEach((country, idx) => {
    //             let iso2 = getCountryISO2(country.iso3166CountryCode)
    //             if (iso2 && country.name){
    //                 countryArray.push({
    //                     key: iso2.toLowerCase(),
    //                     value: country.iso3166CountryCode,
    //                     flag: iso2.toLowerCase(),
    //                     text: country.name
    //                 })
    //             }
    //         })
    //         const sortJsonArray = require('sort-json-array');
    //         if(this.props.location && this.props.location.state && this.props.location.state.countryCode){
    //             this.setState({
    //                 countryList: sortJsonArray(countryArray, 'text')},  
    //                 this.setSelectedCountry)
    //         } else {
    //             this.setState({countryList: sortJsonArray(countryArray, 'text')})
    //         }
    //     })
    // }

    fetchProjects = () => {
        const countryCode = this.state.selectedCountry
        const url = `${this.props.API_URL}/get_projects?countryCode=${countryCode}`
        fetch(url)
        .then(r => r.json())
        .then(json => {
            this.setState({countryProjects: json})
        })
    }

    fetchThemeProjects = () => {
        const countryCode = this.state.selectedCountry
        const url = `${this.props.API_URL}/get_theme_projects`
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({themes: this.state.projectThemes, countryCode: countryCode})
        })
        .then(r => r.json())
        .then(json => {
            this.setState({
                countryProjects: json
            }, this.setState({themesUpdated: true}))
        })
    }

    handleChange = (e, data) => {
        this.setState({selectedCountry: data.value}, this.fetchThemeProjects)
    }

    updateProjectThemes = themes => {
        this.props.updateAppThemes(themes)
        this.setState({projectThemes: themes}, this.fetchThemeProjects)
    }

    render() {
        return (
            <div className="app-div" >
                <Navbar activeItem='projects' logout={this.props.logout} />
                <div>
                <Header as='h2' icon textAlign='center'>
                    <Icon name='tasks' circular />
                </Header>
                </div>
                <Grid>
                    <Grid.Row className="project-dropdown-row" columns={2}>
                        <Grid.Column>
                            <Header as='h3' textAlign='center'>
                                <Header.Content>Country</Header.Content>
                            </Header>
                            <Dropdown className="country-dropdown" 
                            fluid search selection placeholder="Country" 
                            fetchThemeProjects={this.fetchThemeProjects}
                            onProjectBrowser={true} options={this.state.countryList}
                            onChange={this.handleChange} value={this.state.selectedCountry} />
                        </Grid.Column>
                        <Grid.Column className="theme-dropdown-div">
                            <Header as='h3' textAlign='center'>
                                <Header.Content>Themes</Header.Content>
                            </Header>
                            <ThemesDropdown updateMapThemes={this.updateProjectThemes} themes={this.props.themes} mapThemes={this.state.projectThemes}/>
                        </Grid.Column>
                    </Grid.Row>
                    {(this.state.themesUpdated && !this.state.countryProjects["error"])}
                </Grid>
            </div>
        );
    }
}

export default withRouter(ProjectBrowser);

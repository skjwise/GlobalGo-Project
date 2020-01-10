import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Loader, Visibility, Card, Icon, Image, Progress} from 'semantic-ui-react';

export class CountryCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            starred: false,
            show: false
        }
    }

    // static PropTypes = {
    //     src: PropTypes.string.isRequired,
    //     size: PropTypes.string
    // }

    static defaultProps = {size: `large`}

    showImage = () => {
        this.setState({show: true})
    }

    componentDidMount(){
        this.checkIfStarred()
    }

    handleStar = () => {
        const userId = localStorage.userid
        const projectId = this.props.id
        const url = `${this.props.API_URL}/user_starred_projects`
        const headers = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({user_id: userId, project_id: projectId})
        }
        fetch(url, headers)
        .then(r => r.json())
        .then(json => {
            if(!json.error){
                this.setState({starred: true})
            }
        })
    }

    
    render() {
        return (
            <div>
                <h2>Country Cards</h2>
            </div>
        );
    }
}

export default CountryCard;

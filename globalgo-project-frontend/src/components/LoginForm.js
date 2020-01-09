import React, { Component } from 'react';
import Footer from './Footer';
import { withRouter, Link } from 'react-router-dom';
import { Header, Icon, Form } from 'semantic-ui-react';
import config from 'react-global-configuration';


export class LoginForm extends Component {

    constructor(){
        super();
        this.username = React.createRef()
        this.password = React.createRef()
        this.state = {mobile: false}
    }
    
    componentDidMount(){
        this.props.resetState()
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    getToken(jwt) {
        return localStorage.getItem('jwt')
    }

    resize() {
        let currentMobile = (window.innerWidth <= 750 );
        if (currentMobile !== this.state.mobile){
            this.setState({mobile: currentMobile})
        }
    }

    getProfile = () => {
        let token = this.getToken()
        fetch(`${this.props.API_URL}/profile`, {
            headers: {
                "Authorization": 'Bearer ' + token
            }
        })
        .then(r => r.json())
        .then( json => {
            this.props.setUser(json.user)
        })
    }

    saveToken = token => {
        localStorage.setItem('jwt', token)
    }

    // saveUserInfo

    // login - POST
    


    render() {
        return (
            <div className='body'>
                <header className='spacer'> </header>
                <div className='login-section'>
                    <div className='login-div'>
                        <article className='login'>
                            <Header as='h1' icon textAlign='center'>
                                GlobalGo
                                {/* <Icon name='money bill' alternate /> */}
                            </Header>
                            <Header as='h4' textAlign='center'>
                                Discover Projects and Make a Donation
                            </Header>
                            <Form onSubmit={this.login}>
                                <Form.Field className='login-field' onChange={this.handleChange}>
                                    <label>Username</label>
                                    <input name='username' type='text' placeholder='Username' ref={this.username} required />
                                </Form.Field>
                                <Form.Field className='login-field' onChange={this.handleChange} >
                                    <label>Password</label>
                                    <input id='loginpassword' name='password' type='password' placeholder='Password' ref={this.password} required />
                                </Form.Field>
                                <Form.Field className='login-buttons'>
                                    <input type='submit' className="large ui blue button" value="Login" onClick={this.login} />
                                    <Link to="/signup" replace>
                                        <input type='submit' className="large ui blue button" value="Create Profile" />
                                    </Link>
                                </Form.Field>
                            </Form>
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(LoginForm);

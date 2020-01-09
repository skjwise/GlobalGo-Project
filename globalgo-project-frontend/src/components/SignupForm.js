import React, { Component} from 'react'
import { Dropdown, Button, Form, Grid, Header, Checkbox, List, Icon } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import Footer from './Footer'
import config from 'react-global-configuration';


export class SignupForm extends Component {

    state = {
        themes: [],
        topThemes: [],
        selectedCountry: "",
        countryList: []
    }
    // componentDidMount - fetchCountries
    // fetchCountries 
    // getThemes
    // createUser - POST
    // handleSubmit - check themes have been selected here
    // backToLogin
    // handleChange - themes
    // handleCountryChange 







    render() {
        return(
            <div>
                <header className='spacer'> </header>
                <container className='login-section'>
                <div className='login-div'>
                <article className ='login'>
                <Header as='h1' icon textAlign='center'>
                  Create Account
                  <Icon name='user circle' circular />
                </Header>
                <Grid centered columns={2} padded='vertically'>
                <Form onSubmit={this.handleSubmit} className='create-form'>
                  <div id="form-group-div">
                  <Form.Group widths='equal'>
                    <Form.Field required>
                     <label>Username</label>
                     <input ref={this.username} name='username' placeholder='username'/>
                     </Form.Field>

                     <Form.Field required>
                     <label>Password</label>
                     <input ref={this.password} type="password" name='password' placeholder='password'/>
                     </Form.Field>

                     <Form.Field required>
                     <label>First Name</label>
                     <input ref={this.firstname} type="text" name='firstname' placeholder='First Name'/>
                     </Form.Field>

                     <Form.Field required>
                     <label>Last Name</label>
                     <input ref={this.lastname} type="text" name='lastname' placeholder='Last Name'/>
                     </Form.Field>

                     <Form.Field required>
                     <label>Email Address</label>
                     <input ref={this.email} type="email"name='email' placeholder='email'/>
                     </Form.Field>
                  </Form.Group>
                  <Form.Group id="fields-div" flex>
                    <label id="top-themes">Top Themes (Up to 3)</label>
                    <div>
                      <List>
                        {this.renderThemeField()}
                      </List>
                    </div>
                  </Form.Group>
                </div>
                <Form.Group className="country-drop-div" flex>
                  <Form.Field required>
                  <label id="default-country">Default Country</label>
                  <Dropdown
                    className="create-country-drop"
                    fluid
                    search
                    selection
                    placeholder="Country"
                    options={this.state.countryList}
                    onChange={this.handleCountryChange}
                    value={this.state.selectedCountry}
                  />
                </Form.Field>
                </Form.Group>
                     <div id="button-div">
                       <Form.Field>
                         <Button>Create Profile</Button>
                       </Form.Field>
                       <Form.Field>
                          <Button onClick={this.backToLogin}>Return to Login</Button>
                       </Form.Field>
                     </div>
                </Form>
                </Grid>
                </article>
                </div>
                </container>
                <div id="footer-div">
                  <Footer />
                </div>
            </div>
        )
    }
}

export default withRouter(SignupForm);


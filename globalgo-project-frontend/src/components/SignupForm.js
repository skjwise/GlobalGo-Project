import React, { Component} from 'react'
import { Dropdown, Button, Form, Grid, Header, Checkbox, List, Icon } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import Footer from './Footer'
import config from 'react-global-configuration';


export class SignupForm extends Component {
    constructor() {
        super();
        this.state = {
          themes: [],
          topThemes: [],
          selectedCountry: "",
          countryList: []
        };
        this.username = React.createRef()
        this.password = React.createRef()
        this.firstname = React.createRef()
        this.lastname = React.createRef()
        this.emailaddress = React.createRef()
    }


    componentDidMount(){
      this.props.getThemes()
    //   this.fetchCountries()
      this.setState({themes:this.props.themes})
    }

    // fetchCountries = () => {
    //   const url = `${this.props.API_URL}/countries`
    //   const getCountryISO2 = require("country-iso-3-to-2");
    //   let countryArray = []
    //   fetch(url)
    //   .then(r => r.json())
    //   .then(json=>{
    //     json.forEach((country, idx) => {
    //         let iso2 = getCountryISO2(country.iso3166CountryCode)
    //         if(iso2 && country.name){
    //         countryArray.push({
    //           key: iso2.toLowerCase(),
    //           value: country.iso3166CountryCode,
    //           flag: iso2.toLowerCase(),
    //           text: country.name
    //         })
    //       }
    //     })
    //     const sortJsonArray = require('sort-json-array');
    //     if(this.props.location && this.props.location.state && this.props.location.state.countryCode){
    //       // if(this.state.selectedCountry === ""){
    //     this.setState({
    //       countryList: sortJsonArray(countryArray, 'text')})
    //       // ,this.setSelectedCountry)
    //       // }
    //     } else {
    //       this.setState({countryList: sortJsonArray(countryArray, 'text')})
    //     }
    //   })
    // }

    getThemes = () => {
      const url = `${this.props.API_URL}/themes`
      fetch(url)
      .then(res=>res.json())
      .then(json => {this.setState({themes: json})})
    }

    createUser = () => {
        const URL = `${this.props.API_URL}/users`
        let[theme_id_1, theme_id_2, theme_id_3] = this.state.topThemes
        if(!theme_id_1){
          theme_id_1 = null
        } else if (!theme_id_2) {
          theme_id_2 = null
        } else if (!theme_id_3) {
          theme_id_3 = null
        }
        const headers = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: this.username.current.form[0].value,
               password: this.password.current.form[1].value,
               first_name: this.firstname.current.form[2].value,
               last_name: this.lastname.current.form[3].value,
               email_address: this.emailaddress.current.form[4].value,
               default_country: this.state.selectedCountry,
               theme1: theme_id_1,
               theme2: theme_id_2,
               theme3: theme_id_3
            })
        }
        fetch(URL, headers)
            .then(res=>res.json())
            .then(json => {
              console.log(json["error"])
              if(!json["error"]){
                this.props.history.push("/")
              } else{
                alert(json["error"])
              }
            })
            .catch(error => console.log(error))
    }

    handleSubmit = (e, data)=>{
      //can check themes here
      console.log(this.state.topThemes.length)
      if(this.state.topThemes.length > 3){
        alert('Please select only 3 themes')
      } else {
        this.createUser()
      }
    }

    backToLogin = () => {
      this.props.history.push("/")
    }

    compare = (a, b) => {
      // Use toUpperCase() to ignore character casing
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    }

    handleChange = (ev, data) =>{
      let prevThemes = this.state.topThemes
        if(data.checked){
          prevThemes.push(data.value)
        } else{
          let i = prevThemes.indexOf(data.value)
          prevThemes.splice(i, 1)
        }
        this.setState({topThemes: prevThemes})
    }

    // renderThemeField = () => {
    //   return this.props.themes.map(theme => {
    //     return(
    //       <List.Item>
    //         <Form.Field
    //           control={Checkbox}
    //           label={theme.name}
    //           value={theme.id}
    //           checked={this.state.checked}
    //           onChange={this.handleChange}
    //           onClick={this.handleClick}
    //       />
    //       </List.Item>
    //       )
    //     })
    //   }

    handleCountryChange = data => {
      console.log('in handle country change')
      this.setState({selectedCountry: data.value})
    }

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
                        {/* {this.renderThemeField()} */}
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


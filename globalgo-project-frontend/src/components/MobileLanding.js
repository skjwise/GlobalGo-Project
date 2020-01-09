// import React, {Component} from 'react';
// import ThemesDropdown from './ThemesDropdown';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import { Grid, Button, Header, Dropdown } from 'semantic-ui-react';
// import '../App.css'
// import { withRouter } from 'react-router-dom';
// import config from 'react-global-configuration';

// class MobileLanding extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       mobileThemes: this.props.userThemes,
//       countryList: [],
//       selectedCountry: this.props.appSelectedCountry,
//       countryUpdated: this.props.updatedSelectedCountry
//     }
//   }

//   componentDidMount(){
//     this.fetchCountries()
//   }

//   updateMobileThemes = (themes) => {
//     this.props.updateAppThemes(themes)
//     this.setState({mobileThemes: themes})
//   }

//   handleClick = () => {
//     this.props.history.push(`/projects`)
//   }

//   handleChange = (ev, data) => {
//     this.setState({selectedCountry: data.value})
//     this.props.updateSelectedCountry(data.value)
//   }

//   fetchCountries = () => {
//     // const url = `${config.get('API_URL')}/countries`
//     const url = `${this.props.API_URL}/countries`;
//     const getCountryISO2 = require("country-iso-3-to-2");
//     let countryArray = []
//     fetch(url)
//     .then(r => r.json())
//     .then(json=>{
//       json.forEach((country, idx) => {
//           let iso2 = getCountryISO2(country.iso3166CountryCode)
//           if(iso2 && country.name){
//           countryArray.push({
//             key: iso2.toLowerCase(),
//             value: country.iso3166CountryCode,
//             flag: iso2.toLowerCase(),
//             text: country.name
//           })
//         }
//       })
//       const sortJsonArray = require('sort-json-array');
//       if(this.props.location && this.props.location.state && this.props.location.state.countryCode){
//         // if(this.state.selectedCountry === ""){
//       this.setState({
//         countryList: sortJsonArray(countryArray, 'text')},
//         this.setSelectedCountry)
//         // }
//       } else {
//         this.setState({countryList: sortJsonArray(countryArray, 'text')})
//       }
//     })
//   }

//   render(){
//     return (
//       <div className="app-div">
//         <Navbar activeItem='mobileLanding' logout={this.props.logout}/>
//         <Grid>
//           <Grid.Row>
//             <Grid.Column>
//               <Header as='h3' textAlign='center'>
//                 <Header.Content>Select Country</Header.Content>
//               </Header>
//               <Dropdown
//                 className="mobile-country-drop"
//                 fluid
//                 search
//                 selection
//                 placeholder="Country"
//                 options={this.state.countryList}
//                 onChange={this.handleChange}
//                 value={this.state.selectedCountry}
//               />
//             </Grid.Column>
//           </Grid.Row>
//           <Grid.Row>
//             <Grid.Column>
//               <Header as='h3' textAlign='center'>
//                 <Header.Content>Select Theme(s)</Header.Content>
//               </Header>
//               <ThemesDropdown
//                 updateMapThemes={this.updateMobileThemes}
//                 themes={this.props.themes}
//                 mapThemes={this.state.mobileThemes} />
//             </Grid.Column>
//           </Grid.Row>
//           <Grid.Row className="mobile-btn-row">
//               <Grid.Column>
//                 <Button secondary onClick={this.handleClick}>View Projects</Button>
//               </Grid.Column>
//           </Grid.Row>
//         </Grid>
//         <div id="absolute-footer">
//           <Footer />
//         </div>
//       </div>
//     )
//   }
// }

// export default withRouter(MobileLanding)

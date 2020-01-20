import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Input, Icon } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';


export class Navbar extends Component {
  state = { activeItem: "home" };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Menu pointing >
        <Menu.Item
          name="Home"
          as={NavLink}
          exact
          to="/"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
        <Icon name="home" color="green" size="large" />
        </Menu.Item>
        {this.props.user ? (
          <React.Fragment>
            <Menu.Item
              name="Projects"
              as={NavLink}
              exact
              to="/allProjects"
              active={activeItem === "allProjects"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="logout"
              as={NavLink}
              exact
              to="/logout"
              active={activeItem === "logout"}
              onClick={() => this.props.onSuccess()}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Menu.Item
              name="login"
              as={NavLink}
              exact
              to="/login"
              active={activeItem === "login"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="sign up"
              as={NavLink}
              exact
              to="/signup"
              active={activeItem === "signUp"}
              onClick={this.handleItemClick}
            />{" "}
          </React.Fragment>
        )}
        <Menu.Menu position='right'>
            <Menu.Item
            name="theme search"
            as={NavLink}
            exact
            to="/themeSearch"
            active={activeItem === "themeSearch"}
            onClick={this.handleItemClick}
            />
          </Menu.Menu>
      </Menu>
    );
  }
}

export default Navbar;

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Icon, Dropdown } from "semantic-ui-react";
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
            <Menu.Item>
            <Dropdown text='Categories' >
              <Dropdown.Menu>
                <Dropdown.Item text='Education' 
                  name="Education"
                  as={NavLink}
                  exact
                  to="/education"
                  active={activeItem === "education"}
                  onClick={this.handleItemClick}
                />
                <Dropdown.Divider />
                <Dropdown.Item text='Health'
                  name="Health"
                  as={NavLink}
                  exact
                  to="/health"
                  active={activeItem === "health"}
                  onClick={this.handleItemClick}
                />
                <Dropdown.Divider />
                <Dropdown.Item text='Environment'
                  name="Environment"
                  as={NavLink}
                  exact
                  to="/environment"
                  active={activeItem === "environment"}
                  onClick={this.handleItemClick}
                />
                <Dropdown.Divider />
                <Dropdown.Item text='Animals'
                  name="Animals"
                  as={NavLink}
                  exact
                  to="/animals"
                  active={activeItem === "animals"}
                  onClick={this.handleItemClick}
                />
              </Dropdown.Menu>
            </Dropdown>
            </Menu.Item>
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
      </Menu>
    );
  }
}

export default Navbar;

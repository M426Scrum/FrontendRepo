import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ButtonToolbar, Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">Room Manager</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavDropdown eventKey={3} title="Reservation" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Reservation anzeigen</MenuItem>
              </NavDropdown>
              <NavDropdown eventKey={3} title="Räume" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Raum suchen</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>;
      </div>
    );
  }
}

export default App;

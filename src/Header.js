import React, { Component } from "react";
import "./App.css";
import {
  Navbar,
  Nav,
  MenuItem,
  NavDropdown
} from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">Room Manager</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavDropdown
                eventKey={3}
                title="Reservation"
                id="basic-nav-dropdown"
              >
                <MenuItem eventKey={3.1}>
                  <Link to="/reservations">Reservation anzeigen</Link>
                </MenuItem>
              </NavDropdown>
              <NavDropdown eventKey={3} title="Räume" id="basic-nav-dropdown">
                <MenuItem eventKey={3.2}><Link to="/rooms">Raum Liste</Link></MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export { Header };

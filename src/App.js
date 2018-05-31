import React, { Component } from "react";
import "./App.css";
import {
  Button,
  ButtonToolbar,
  Navbar,
  Nav,
  NavItem,
  MenuItem,
  NavDropdown
} from "react-bootstrap";
import { Header } from "./Header";
import { Main } from "./Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;

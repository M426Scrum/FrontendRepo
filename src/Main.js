import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Reservations } from "./components/Reservations";

class Main extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/reservations" component={Reservations} />
          <Route path="/searchRoom" />
        </Switch>
      </div>
    );
  }
}

export { Main };

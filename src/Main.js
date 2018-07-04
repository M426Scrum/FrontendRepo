import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { ReservationList } from "./components/Reservation/ReservationList";
import { RoomList } from "./components/Room/RoomList";

class Main extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/reservations" component={ReservationList} />
          <Route path="/searchRoom" />
          <Route path="/rooms" component={RoomList} />
        </Switch>
      </div>
    );
  }
}

export { Main };

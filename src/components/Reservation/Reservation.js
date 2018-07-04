import React from "react";
import { Grid, Row, Navbar, Col, Table, Alert } from "react-bootstrap";
import ReactTooltip from 'react-tooltip';

class Reservation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data
    };
  }

  render() {
    const startDate = new Date(this.state.data.start);
    return (
      <tbody>
        <tr>
          <td>{this.state.data.reservationId}</td>
          <td>{this.state.data.start}</td>
          <td>{this.state.data.end}</td>
          <td>{this.state.data.events.title}</td>
          <td>{this.state.data.rooms.name}</td>
        </tr>
      </tbody>
    );
  }
}

export { Reservation };

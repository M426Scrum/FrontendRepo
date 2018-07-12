import React from "react";

//Table Column for a reservation

class Reservation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data
    };
  }

  render() {
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

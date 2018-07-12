import React from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { Reservation } from "./Reservation";

//A List of all the reservation

class ReservationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  //Requesting Reservations

  componentWillMount() {
    axios
      .get("http://localhost:8080/v1/ReservationServicesV1/reservations")
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const reservationList = this.state.data.map(reservation => (
      <Reservation key={reservation.reservationId} data={reservation} />
    ));

    return (
      <center>
        <div style={{width: '90%'}}>
          <Table striped bordered condensed hover responsive>
            <thead>
              <tr>
                <th>Reservation ID</th>
                <th>Start</th>
                <th>End</th>
                <th>Event</th>
                <th>Room</th>
              </tr>
            </thead>
            {reservationList}
          </Table>
        </div>
      </center>
    );
  }
}

export { ReservationList };

import React from "react";
import {
  Grid,
  Row,
  Navbar,
  Col,
  Table,
  Alert
} from "react-bootstrap";
import { getReservations } from '../util/getReservations';


var output;

class Reservations extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: '', reservations: ['1', '2'] };
    this.getReservations = this.getReservations.bind(this);
  }

  getReservations() {
    const response = getReservations();
    this.setState({ reservations: response });
    if (typeof response === "undefined") {
      output = (
        <Alert bsStyle="warning">
          <strong>Upps!</strong> The are no reservations to display!
        </Alert>
      );
    }
    else{
      output = (
        <Grid fluid="true">
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <h1 style={{float: 'left'}}>Reservations</h1>
            </Col>
            <Col xs={12} md={12}>
              <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.reservations.map((reservation, i) => (
                    <tr>
                      <td>1</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Grid>
      )
    }
  }

  componentWillMount() {
    this.getReservations();
  }

  render() {
    return (
      <div>
        {output}
      </div>
    );
  }
}

export { Reservations };

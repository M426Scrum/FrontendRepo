import React from "react";
import { Button } from "react-bootstrap";
import axios from 'axios';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

//css
import './RoomDetails.css';
import 'react-datepicker/dist/react-datepicker.css';
import { Message } from "../Message/Message";

class RoomDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reservations: [],
      events: [],
      startDate: null,
      endDate: null,
      message: null,
      error: false,
      eventId: null,
    }
  }

  componentWillMount() {
    axios.get('http://localhost:8080/v1/ReservationServicesV1/reservation/room/' + this.props.data.roomId).then(response => {
      this.setState({reservations: response.data});
    }).catch(err => {
      console.log(err);
    });

    axios.get('http://localhost:8080/v1/EventServicesV1/events/').then(response => {
      this.setState({events: response.data});
    }).catch(err => {
      console.log(err);
    });
  }

  setMessage(message){
    this.setState({message: message});
  }

  reserveRoom(){
      console.log(this.state.startDate.format("yyyy.MM.dd HH:mm:ss"));

    if(!this.state.error){
      axios.put('http://localhost:8080/v1/ReservationServicesV1/reservation',
        {
          startDate : this.state.startDate.format("yyyy.MM.dd HH:mm:ss"),
          endDate : this.state.endDate.format("yyyy.MM.dd HH:mm:ss"),
          roomId: this.props.data.roomId,
          //TODO
          eventId: this.state.eventId,
        }
      ).then(response => {
        this.setState({message: 'Ihre Reservation wurde gespeichert!'});
      }).catch(err => {
        console.log(err);
      });
    }
  }

  handleChange(date, value) {
    this.setState({
      [value]: date
    });
  }

  checkValue(){
    let error = false;
    console.log(this.state.eventId);
    if(this.state.startDate && this.state.endDate && this.state.eventId !== 'Please Select...'){
      if(this.state.startDate < this.state.endDate && this.state.startDate.isAfter()){
        this.state.reservations.map(reservation => {
            var partStart = reservation.start.split('.');
            var partsEnd = reservation.end.split('.');
            console.log(this.state.startDate.isAfter(partsEnd[2]+'-'+partsEnd[1]+'-'+partsEnd[0]) +' '+ this.state.endDate.isBefore(partStart[2]+'-'+partStart[1]+'-'+partStart[0]));
            if(this.state.startDate.isAfter(partsEnd[2]+'-'+partsEnd[1]+'-'+partsEnd[0]) || this.state.endDate.isBefore(partStart[2]+'-'+partStart[1]+'-'+partStart[0])){
              if(!error){
                console.log('no err');
                error = false
              } else{
                error = true
              }
            } else{
              console.log('error!');
              error = true;
            }
        });
        if(error){
          this.setState({
            error: true,
            message: 'An diesem Datum ist schon eine Reservation vorhanden!',
          });
        } else {
          this.setState({
            error: false,
            message: null,
          });
        }
      }else{
        this.setState({
          error: true,
          message: 'Ende muss nach dem Start sein!',
        });
      }
    }else{
      this.setState({
        error: true,
        message: 'Bitte Werte eingeben',
      });
    }
  }

  render() {
    const eventOptions = this.state.events.map(event => <option key={event.eventId} value={event.eventId}>{event.title}</option>);
    const reservationList = this.state.reservations.map(reservation => <p key={reservation.reservationId}>{reservation.start} - {reservation.end} {reservation.event.title} {reservation.event.organiser}</p>);

    return (
      <div>
        <h1>{this.props.data.name}</h1>
        <h2>Details</h2>
        <p>Room ID: {this.props.data.roomId}</p>
        <h2>Pending Reservations</h2>
        {reservationList}
        <h2>Reservation</h2>
        {this.state.message && <Message message={this.state.message} type={this.state.error ? 'error': 'success'}/>}
        <p>From:</p>
        <DatePicker
          selected={this.state.startDate}
          onBlur={() => this.checkValue()}
          onChange={(date) => this.handleChange(date, 'startDate')}
        /><br/>
        <p>To:</p>
        <DatePicker 
          selected={this.state.endDate}
          onBlur={() => this.checkValue()}
          onChange={(date) => this.handleChange(date, 'endDate')}
        /><br/>
        <FormGroup controlId="formControlsSelect">
        <ControlLabel>Select</ControlLabel>
          <FormControl onBlur={() => this.checkValue()} onChange={(e) => this.handleChange(e.target.value, 'eventId')} componentClass="select" placeholder="select">  
          <option default>Please Select...</option>
          {eventOptions}
          </FormControl>
        </FormGroup>
        <div className="buttonGroup">
          <Button onClick={() => this.reserveRoom()} className="button">Raum Reservieren</Button>
          <Button onClick={this.props.onClose}>Close</Button>
        </div>
      </div>
    );
  }
}

export { RoomDetails };

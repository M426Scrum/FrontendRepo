import React from 'react';
import { Table } from "react-bootstrap";
import axios from "axios";
import { Room } from './Room';
import Modal from 'react-modal';
import { RoomDetails } from './RoomDetail';

Modal.setAppElement('#root');

//A Component where all rooms are listed

class RoomList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          modalIsOpen: false,
          selectedData: {},
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }

      componentWillMount() {
        axios
          .get("http://localhost:8080/room")
          .then(response => {
            this.setState({ data: response.data });
          })
          .catch(err => {
            console.log(err);
          });
      }

      openModal(room) {
        this.setState({
          modalIsOpen: true,
          selectedData: room
        });
      }

      closeModal() {
        this.setState({
          modalIsOpen: false,
        });
      }
    
      render() { 
        const roomList = this.state.data.map(room => <Room onClick={() => this.openModal(room)} key={room.roomId} data={room}/>) 
        return (
          <center>
            <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
            >
              <RoomDetails onClose={() => this.closeModal()} data={this.state.selectedData}/>
            </Modal>
            <div style={{width: '90%'}}>
              <Table striped bordered condensed hover responsive>
                <thead>
                  <tr>
                    <th>Room ID</th>
                    <th>Name</th>
                    <th>Description</th>
                  </tr>
                </thead>
                {roomList}
              </Table>
            </div>
          </center>
        );
      }
}

export {RoomList}
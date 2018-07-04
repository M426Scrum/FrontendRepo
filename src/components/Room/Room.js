import React from 'react';

class Room extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            data: this.props.data
        }
    }
    
    render(){
        console.log(this.state.data);
        return(
            <tbody>
                <tr onClick={this.props.onClick}>
                    <td>{this.state.data.roomId}</td>
                    <td>{this.state.data.name}</td>
                    <td>{this.state.data.description}</td>
                </tr>
            </tbody>
        )
    }
}

export {Room}
import React from 'react';
import './Message.css';

//A message is shown
//As parameter take 'error' or 'success' to change the apperance

class Message extends React.Component{
    render(){
        let pre;
        if(this.props.type === 'error'){
            pre = 'Error'
        }else{
            pre = 'Info'
        }

        return(
            <div className={this.props.type}>
                <p>{pre}: {this.props.message}</p>
            </div>
        );
    }
}

export {
    Message
}
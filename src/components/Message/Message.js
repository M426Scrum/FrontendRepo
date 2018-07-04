import React from 'react';
import './Message.css';

class Message extends React.Component{
    constructor(props){
        super(props);
    }

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
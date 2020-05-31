import React, { Component } from "react";
import "./Message.scss";

class Message extends Component {
  constructor(props) {
    super(props);
    let temp = JSON.parse(this.props.message);
    console.log('temp: ' + temp.Body);
    this.state = {
      message: temp
    };
  }

  render() {
    return <div className="Message">{this.state.message.Body}</div>;
  }
}

export default Message;
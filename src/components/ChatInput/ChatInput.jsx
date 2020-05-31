import React, { Component } from "react";
import "./ChatInput.scss";

class ChatInput extends Component {
  render() {
    return (
      <div className="ChatInput">
        <input onKeyDown={this.props.send} />
        {/* <button onClick={this.props.send}>Send</button> */}
      </div>
    );
  }
}

export default ChatInput;
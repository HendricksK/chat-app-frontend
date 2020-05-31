// App.js
import React, { Component } from "react";
import "./App.css";
import { connect, sendMsg } from "./api";

class App extends Component {
  constructor(props) {
    super(props);
    connect();
  }

  send() {
    sendMsg("hello is it me you are looking for?");
  }

  render() {
    return (
        <div className="App">
          <button onClick={this.send}>Hit</button>
        </div>
    );
  }
}

export default App;
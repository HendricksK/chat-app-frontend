// App.js
import React, { Component } from "react";
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';

import "./App.css";
import { connect, sendMsg } from "./api";

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			chatHistory: [
				"hello there",
				"is it me you are looking for?"
			]
		}
	}

	componentDidMount() {
		connect((msg) => {
			console.log("New message")
			this.setState(prevState => ({
				chatHistory: [...this.state.chatHistory, msg]
			}))
			console.log(this.state);
		});
	}

	send(event) {
		sendMsg(event.target.value);
	}

	render() {
		return (
				<div className="App">
					<Header />
					<ChatHistory chatHistory={this.state.chatHistory} />
					<button onClick={this.send}>Hit</button>
				</div>
		);
	}
}

export default App;
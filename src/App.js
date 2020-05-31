// App.js
import React, { Component } from "react";
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInput from './components/ChatInput/ChatInput';

import "./App.css";
import { connect, sendMsg } from "./api";

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			chatHistory: []
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
		if(event.keyCode === 13) {
			console.log(event.target.value);
			sendMsg(event.target.value);
			event.target.value = "";
		}
	}

	// setMessageValue(event) {
	// 	console.log(event)
	// 	this.state.msg = event.target.value;
	// }

	render() {
		return (
				<div className="App">
					<Header />
					<ChatHistory chatHistory={this.state.chatHistory} />
					<ChatInput send={this.send} />
					{/* <ChatInput onChange={this.setMessageValue} /> */}
					{/* <button onClick={this.send}>Hit</button> */}
				</div>
		);
	}
}

export default App;
import React, { Component } from 'react';
import { ChatDisplay } from './ChatDisplay';

class ChatPage extends Component{
	state = {
		nada: 'nada',
		mensaje: '',
		messages: [
			{ id: 0, text: 'Mensaje 1' },
			{ id: 1, text: 'Mensaje 2' },
			{ id: 2, text: 'Mensaje 3' },
		]
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const msgList= this.state.messages;
		const newMsg = {
			id: this.state.messages.length,
			text: this.state.mensaje
		}
		msgList.push(newMsg);
		this.setState({ messages: msgList });
		this.setState({mensaje: ''});
		console.log('Submit: '+ this.state.mensaje)
	}

	saveInput = (e) => {
		this.setState({  mensaje: e.target.value});
	}

	render(){
		const { messages } = this.state;
		const messageList = messages.map(aux =>{
			return (
				<li key={aux.id}>{aux.text}</li>	
			);
		})
		return (
			<ChatDisplay 
			messageList = { messageList}
			handleSubmit = {this.handleSubmit}
			saveInput = {this.saveInput}
			{...this.state}	
			/>
			);
	}
}

export default ChatPage;
import React, { Component } from 'react';
import { ChatDisplay } from './ChatDisplay';
import firebase from 'firebase';

class ChatPage extends Component{
	state = {
		nada: 'nada',
		mensaje: '',
		messages: [
			//{ id: 0, text: 'Mensaje 1' },
			//{ id: 1, text: 'Mensaje 2' },
			//{ id: 2, text: 'Mensaje 3' },
		]
	}

	componentDidMount(){
		firebase.database().ref('messages/').on("value", snap =>{
			const currentMsg = snap.val();
			if (currentMsg !== null){
				this.setState({
					messages: currentMsg
				})
			}
		});
	}
	handleSubmit = (e) => {
		e.preventDefault();
		const msgList= this.state.messages;
		const newMsg = {
			id: this.state.messages.length,
			text: this.state.mensaje
		}
		//msgList.push(newMsg);
		//this.setState({ messages: msgList });
		firebase.database().ref(`messages/${newMsg.id}`)
		.set(newMsg);
		this.setState({mensaje: ''});
		//console.log('Submit: '+ this.state.mensaje)
	}

	saveInput = (e) => {
		this.setState({  mensaje: e.target.value});
	}

	render(){
		return (
			<ChatDisplay 
			handleSubmit = {this.handleSubmit}
			saveInput = {this.saveInput}
			{...this.state.messages}
			{...this.state}	
			/>
			);
	}
}

export default ChatPage;
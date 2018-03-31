import React from 'react';
import ReactDOM from 'react-dom';
import ChatPage from './Components/ChatPage'

import * as firebase from 'firebase';

let config = {
    apiKey: "AIzaSyA0wMOLxm02H7d-q25pEg1piBmJc1pGOp4",
    authDomain: "chat-react-d1851.firebaseapp.com",
    databaseURL: "https://chat-react-d1851.firebaseio.com",
    projectId: "chat-react-d1851",
    storageBucket: "chat-react-d1851.appspot.com",
    messagingSenderId: "24318742888"
};
firebase.initializeApp(config);


ReactDOM.render(<ChatPage />, document.getElementById('root'));
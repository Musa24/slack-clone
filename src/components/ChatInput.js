import React, { useState, useContext } from 'react';
import './ChatInput.css';
import db from '../firebase';
import { UserContext } from '../contexts/UserContext';
import firebase from 'firebase';

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState('');
  const { user } = useContext(UserContext);

  const sendMessage = (e) => {
    e.preventDefault();

    if (channelId) {
      db.collection('room').doc(channelId).collection('messages').add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }

    setInput('');
  };

  return (
    <div className="ChatInput">
      <form onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Enter your message"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>
    </div>
  );
}

export default ChatInput;

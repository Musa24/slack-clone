import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';

import './Message.css';
import { useParams } from 'react-router-dom';
import db from '../firebase';
import { useState } from 'react';
import firebase from 'firebase';

function Message({ message, timestamp, user, id, userImage }) {
  const { roomId } = useParams();
  const [updateMessage, setUpdateMessage] = useState('');
  const [toogleUpdate, setToogleUpdate] = useState(true);

  //Deleting a message
  const handleDeleteMessage = () => {
    db.collection('room').doc(roomId).collection('messages').doc(id).delete();
  };
  //
  const handleUpdateMessage = () => {
    setToogleUpdate(false);
    console.log('updating');
    db.collection('room')
      .doc(roomId)
      .collection('messages')
      .doc(id)
      .get()
      .then((snap) => {
        setUpdateMessage(snap.data().message);
      });
  };
  //Updating a message
  const handleSubmitUpdateMessage = (e) => {
    e.preventDefault();

    db.collection('room')
      .doc(roomId)
      .collection('messages')
      .doc(id)
      .update({
        message: updateMessage,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setToogleUpdate(true);
      });
  };
  return (
    <div className="Message">
      <img src={userImage} alt={user} />
      <div className="Message-info">
        <h4>
          {user}{' '}
          <span className="Message-timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <div className="Message-messageAndButtons">
          {toogleUpdate ? (
            <p>{message}</p>
          ) : (
            <form
              onSubmit={handleSubmitUpdateMessage}
              className="Message-updateMessage"
            >
              <input
                type="text"
                value={updateMessage}
                onChange={(e) => setUpdateMessage(e.target.value)}
              />
            </form>
          )}

          <p>
            <span>
              <DeleteIcon onClick={handleDeleteMessage} />
            </span>
            <span>
              <UpdateIcon onClick={handleUpdateMessage} />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Message;

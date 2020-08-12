import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';

import './Message.css';
import { useParams } from 'react-router-dom';
import db from '../firebase';

function Message({ message, timestamp, user, id, userImage }) {
  const { roomId } = useParams();
  console.log(roomId);

  //Deleting a message
  const handleDeleteMessage = () => {
    db.collection('room').doc(roomId).collection('messages').doc(id).delete();
  };
  //Upating a message
  const handleUpdateMessage = () => {
    console.log('updating');
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
          <p>{message}</p>
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

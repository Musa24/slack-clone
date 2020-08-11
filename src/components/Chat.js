import React from 'react';
import { useParams } from 'react-router-dom';

import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import './Chat.css';
import { useEffect } from 'react';
import db from '../firebase';
import { useState } from 'react';
import Message from './Message';

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState(null);

  useEffect(() => {
    if (roomId) {
      db.collection('room')
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setRoomDetails(snapshot.data());
        });

      db.collection('room')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) => {
          setRoomMessages(
            snapshot.docs.map((doc) => {
              return { ...doc.data(), id: doc.id };
            })
          );
        });
    }
  }, [roomId]);

  return (
    <div className="Chat">
      <div className="Chat-header">
        <div className="Chat-headerLeft">
          <h4 className="Chat-channelName">
            {' '}
            <strong>#{roomDetails?.name}</strong> <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="Chat-headerRight">
          <p>
            <InfoOutlinedIcon />
            Details
          </p>
        </div>
      </div>
      <div className="Chat-messages">
        {roomMessages &&
          roomMessages.map(({ message, timestamp, id, user, userImage }) => (
            <Message
              key={id}
              message={message}
              timestamp={timestamp}
              id={id}
              user={user}
              userImage={userImage}
            />
          ))}
      </div>
    </div>
  );
}

export default Chat;

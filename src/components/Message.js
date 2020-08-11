import React from 'react';
import './Message.css';

function Message({ message, timestamp, user, id, userImage }) {
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
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;

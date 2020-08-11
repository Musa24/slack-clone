import React from 'react';
import './SidebarOption.css';
import { useHistory } from 'react-router-dom';
import db from '../firebase';

function SidebarOption({ Icon, title, addChannelOption, id }) {
  let history = useHistory();
  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };

  const addChannel = () => {
    const channelName = prompt('Please Enter the channel name');

    if (channelName) {
      db.collection('room').add({
        name: channelName,
      });
    }
  };

  return (
    <div
      className="SidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="SidebarOption-icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="SidebarOption-channel">
          {' '}
          <span className="SidebarOption-hash">#</span>
          {title}{' '}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;

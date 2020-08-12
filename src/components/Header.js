import React, { useContext } from 'react';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import './Header.css';
import { UserContext } from '../contexts/UserContext';

function Header() {
  const { user } = useContext(UserContext);

  return (
    <div className="Header">
      <div className="Header-left">
        <Avatar
          className="Header-avatar"
          alt={user?.diplayName}
          src={user?.photoURL}
        />
        <AccessTimeIcon />
      </div>
      <div className="Header-search">
        <SearchIcon />
        <input type="text" placeholder="Search Slack Communities" />
      </div>
      <div className="Header-right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;

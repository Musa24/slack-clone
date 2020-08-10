import React from 'react';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <div className="Header-left">
        <Avatar
          className="Header-avatar"
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
        />
        <AccessTimeIcon />
      </div>
      <div className="Header-search">
        <SearchIcon />
        <input type="text" placeholder="Seach Clever Programmer" />
      </div>
      <div className="Header-right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;

import React from 'react';
import './SidebarOption.css';

function SidebarOption({ Icon, title }) {
  return (
    <div className="SidebarOption">
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

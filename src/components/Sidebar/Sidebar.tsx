import React from 'react';
import './Sidebar.scss';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>Main</li>
        <li>Profile</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
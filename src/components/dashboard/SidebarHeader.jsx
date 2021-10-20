import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons';

const SidebarHeader = (props) => (
  <a href="#" className="sidebar-brand d-flex align-items-center justify-content-center">
    <div className="sidebar-brand-icon">
      <FontAwesomeIcon icon={props.data.icon} size="3x" />
    </div>
    <div className="sidebar-brand-text mx-3">{props.data.title}</div>
  </a>
);

export default SidebarHeader;

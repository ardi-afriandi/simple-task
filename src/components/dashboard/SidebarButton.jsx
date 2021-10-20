import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const SidebarButton = (props) => (
  <li className="nav-item active">
    <a href="#" className="nav-link btn btn-dark">
      <FontAwesomeIcon icon={props.data.icon} size="lg" />
      <span className="ml-3">{props.data.title}</span>
    </a>
  </li>
);

export default SidebarButton;

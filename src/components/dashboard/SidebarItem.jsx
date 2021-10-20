import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SidebarItem = (props) => (
  <li className="nav-item">
    <a href="#" className="nav-link">
      <FontAwesomeIcon icon={props.data.icon} size="lg" />
      <span className="ml-3">{props.data.title}</span>
    </a>
  </li>
);

export default SidebarItem;

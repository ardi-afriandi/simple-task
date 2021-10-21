import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SimpleTaskContext } from '../../context/SimpleTaskContext';

const SidebarHeader = (props) => {
  const { email } = useContext(SimpleTaskContext);

  return (
    <>
      <a href="#" className="sidebar-brand d-flex align-items-center justify-content-center">
        <div className="sidebar-brand-icon">
          <FontAwesomeIcon icon={props.data.icon} size="3x" />
        </div>
        <div className="sidebar-brand-text mx-3">{props.data.title}</div>
      </a>
      <li className="nav-item active">
        <a className="nav-link" href="#">
          <span>
            Welcome,
            {' '}
            {email}
            !
          </span>
        </a>
      </li>
    </>
  );
};

export default SidebarHeader;

import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch, faCircleQuestion, faGear, faGrip,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { SimpleTaskContext } from '../../context/SimpleTaskContext';

const SettingsBar = () => {
  const { email } = useContext(SimpleTaskContext);

  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item dropdown no-arrow d-sm-none">
        <a href="#" className="nav-link dropdown-toggle" role="button">
          <FontAwesomeIcon icon={faSearch} />
        </a>
        <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in">
          <form className="form-inline mr-auto w-100 navbar-search">
            <div className="input-group">
              <input type="text" className="form-control bg-light border-0 small" placeholder="Search in Drive" />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </li>
      <div className="topbar-divider d-none d-sm-block" />
      <li className="nav-item dropdown no-arrow mx-1">
        <a href="#" className="nav-link dropdown-toggle" role="button">
          <FontAwesomeIcon icon={faCircleQuestion} color="black" size="lg" />
        </a>
      </li>
      <li className="nav-item dropdown no-arrow mx-1">
        <a href="#" className="nav-link dropdown-toggle" role="button">
          <FontAwesomeIcon icon={faGear} color="black" size="lg" />
        </a>
      </li>
      <li className="nav-item dropdown no-arrow mx-1">
        <Link to="/" role="button" className="nav-link dropdown-toggle" title={email}>
          <FontAwesomeIcon icon={faGrip} color="black" size="lg" />
        </Link>
      </li>
    </ul>
  );
};

export default SettingsBar;

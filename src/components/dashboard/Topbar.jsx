import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './SearchBar';
import SettingsBar from './SettingsBar';

const Topbar = () => (
  <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
    <form className="form-inline">
      <button className="btn btn-link d-md-none rounded-circle mr-3">
        <FontAwesomeIcon icon={faBars} />
      </button>
    </form>
    <SearchBar />
    <SettingsBar />
  </nav>
);

export default Topbar;

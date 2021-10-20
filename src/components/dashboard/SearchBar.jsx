import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => (
  <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search w-100">
    <div className="input-group">
      <input type="text" className="form-control bg-light border-0 small" placeholder="Search in Drive" />
      <div className="input-group-append">
        <button className="btn btn-primary">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  </form>
);

export default SearchBar;

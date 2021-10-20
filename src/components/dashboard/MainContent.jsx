import React from 'react';
import PageContent from './PageContent';
import Topbar from './Topbar';

const MainContent = () => (
  <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
      <Topbar />
      <PageContent />
    </div>
  </div>
);

export default MainContent;

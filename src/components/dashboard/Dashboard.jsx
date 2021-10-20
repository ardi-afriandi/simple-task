import './Dashboard.css';
import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Dashboard = () => (
  <div id="wrapper">
    <Sidebar />
    <MainContent />
  </div>
);

export default Dashboard;

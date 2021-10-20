import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';

const App = () => (
  <Router>
    <>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </>
  </Router>
);

export default App;

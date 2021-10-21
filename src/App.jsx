import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import SimpleTaskContextProvider from './context/SimpleTaskContext';

const App = () => (
  <SimpleTaskContextProvider>
    <Router>
      <>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </>
    </Router>
  </SimpleTaskContextProvider>
);

export default App;

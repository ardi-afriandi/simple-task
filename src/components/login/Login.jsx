import './Login.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

const Login = () => (
  <div className="container-signin">
    <main className="form-signin">
      <form>
        <img src={logo} alt="logo" width="256" />
        <h1 className="h3 mb-3 fw-normal">Welcome Back!</h1>
        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@alpabit.com" />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <Link to="/dashboard" className="w-100 btn btn-lg btn-primary">Sign In</Link>
      </form>
    </main>
  </div>
);

export default Login;

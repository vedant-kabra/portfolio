import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import data from './data.json';

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar text justify-content-around">
          <ul className="nav">
            <li className="nav-link">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-link">
              <Link to="/resume">Resume</Link>
            </li>
            <li className="nav-link">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-link">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Route exact path="/" component="Home" />
        <Route path="/resume" component="Resume" />
        <Route path="/about" component="About" />
        <Route path="/contact" component="Contact" />
      </Router>
    );
  }
}

export default App;

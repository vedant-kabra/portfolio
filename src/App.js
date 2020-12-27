import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import data from "./data.json";
import Home from "./components/Home";
import Resume from "./components/Resume";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar p-0 text bg-dark justify-content-around font-weight-bold">
          <ul className="nav text-dark">
              <Link to="/">
                <p className="nav-link">Home</p>
              </Link>
              <Link to="/resume">
                <p className="nav-link">Resume</p>
              </Link>
              <Link to="/about">
                <p className="nav-link">About</p>
              </Link>
              <Link to="/contact">
                <p className="nav-link">Contact</p>
              </Link>
          </ul>
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Router>
    );
  }
}

export default App;

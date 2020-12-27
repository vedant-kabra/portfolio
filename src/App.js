import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import data from './data.json';

class App extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar justify-content-around">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link active">hi</a>
          </li>
            <li className="nav-item">
              <a className="nav-link">hi</a>
          </li>
            <li className="nav-item">
              <a className="nav-link">hi</a>
          </li>
            <li className="nav-item">
              <a className="nav-link">hi</a>
          </li>
          </ul>
          {console.log(data)}
        </nav>
      </Fragment>
    );
  }
}

export default App;


import React, { Component } from 'react';
import App from './App';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

class About extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
         DEATH <code>src/App.js</code> and save to reload.
        </p>
         <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route path="/" component={App}/>
    </div>
  </Router>
      </div>
    );
  }
}

export default About;

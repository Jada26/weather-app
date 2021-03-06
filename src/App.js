import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './About';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
         <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route path="/about" component={About}/>
    </div>
  </Router>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MainContainer from './Components/container';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>HELLO</h1>
      <MainContainer />
      </div>
    );
  }
}

export default App;

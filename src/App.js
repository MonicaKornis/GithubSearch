import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './reset.css';
import MainContainer from './Components/container';

class App extends Component {
    // constructor(props) {
    //   super(props);
    //   this.state = { 'deg': 0 };
    //   this.tick = this.tick.bind(this);
    //   this.increase = this.increase.bind(this);
    // }
    // 
    // componentDidMount() {
    //   this.setState({ 'deg': 0, 'styles': { 'background': `linear-gradient(to right, rgba(${this.state.deg},0,0,0) `}});
    //   this.increase();
    // }
    // 
    // tick() {
    //   console.log(this.state.styles);
    //   let num = this.state['deg']; 
    //   if(num > 244) {
    //     num = 0; 
    //   }
    //   this.setState({ 'deg': num++}, () => this.setState({ 'styles': {'background': `linear-gradient(to right, rgba(${this.state.deg},0,0,0)`}}));
    // 
    // }
    // 
    // increase() {
    //   window.requestAnimationFrame(this.tick);
    // }
    // 
    render() {
      return (
        <div className="App">
        <MainContainer />
        </div>
      );
    }
}

export default App;

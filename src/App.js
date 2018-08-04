import React, { Component } from 'react';
import './App.css';
import Sign from './scenes/sign/index';
import Login from './scenes/login/index';
import Reset from './scenes/reset/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sign></Sign>
        <Login></Login>
        <Reset></Reset>
      </div>
    );
  }
}

export default App;

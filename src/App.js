import React, { Component } from 'react';
import './App.css';
import Sign from './scenes/sign/index';
import Login from './scenes/login/index';
import Reset from './scenes/reset/index';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Sign} />
            <Route path="/login/index" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

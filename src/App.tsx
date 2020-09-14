import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Count from './pages/Count';
import Home from './pages/Home';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/count">
              <Count></Count>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

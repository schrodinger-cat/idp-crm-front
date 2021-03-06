import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, HashRouter } from 'react-router-dom';

import Login from './pages/Login/Login.js';
import MainPage from './pages/MainPage/MainPage.js';

import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: false,
    };
  }

  render() {
    return (
      <Router>
        <Switch>
          {/* <BrowserRouter basename="/idp-crm-front" /> */}
          <Route exact path="/" component={MainPage} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default App;

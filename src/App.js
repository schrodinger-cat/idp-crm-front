import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
        <Route exact path="/" component={ this.state.isLogged ? MainPage : Login } />
      </Router>
    )
  }
}

export default App;

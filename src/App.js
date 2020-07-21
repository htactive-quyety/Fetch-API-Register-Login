
import './App.css';


import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import LoginAccount from './component/LoginAccount';

export default class App extends Component {

  state = {
    user: null
  }
  /* <LoginAccount xulylogin={(user) => this.setState(user)}/> */
  render() {
    return (
      <Router>
        <LoginAccount />
        <Header />
      </Router>

    )
  }
}



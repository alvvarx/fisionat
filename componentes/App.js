import React, { Component } from 'react';
import './App.css';
import Login from './Login.js';
import Alta from './Alta';
import Routes from './Routes.js';

class App extends Component {

  constructor(){
    super();
  }

  render() {
    return(
      <Routes />
    );
  }  
}

export default App;

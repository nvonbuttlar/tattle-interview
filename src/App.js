import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import Side from './components/Side.js'
import Main from './components/Main.js'

class App extends Component {
  render() {
    return (

      <div className="app-container">
        <div className="header-container">
          <Header/>
        </div>
        <div className="main-container">
          <Side/>
          <Main/>
        </div>
      </div>

    );
  }
}

export default App;

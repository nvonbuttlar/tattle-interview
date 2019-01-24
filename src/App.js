import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import Side from './components/Side.js'
import Main from './components/Main.js'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Side/>
        <Main/>
      </div>
    );
  }
}

export default App;

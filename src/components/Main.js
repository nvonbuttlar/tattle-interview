import React, { Component } from 'react';
import '../styles/Main.css';
import Tweet from './Tweet.js';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Tweet/>
        <Tweet/>
        <Tweet/>
        <Tweet/>
      </div>
    );
  }
}

export default Main;
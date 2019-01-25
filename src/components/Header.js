import React, { Component } from 'react';
import Logo from '../images/bird.jpg';
import '../styles/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={Logo} alt="bird logo" className="logo"/>
        <h1 className="title">Twinterview</h1>
      </div>
    );
  }
}

export default Header;
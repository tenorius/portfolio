import React from 'react';
import './nav.css';

const Nav = props => (
  <nav className={`nav ${props.show ? 'show' : ''}`}>
    <a onClick={() => (props.goTo('/home'))}>
      <i className="material-icons">
        home
      </i>
    </a>
    <a onClick={() => (props.goTo('/about'))}>
      <i className="material-icons">
        person
      </i>
    </a>
    <a onClick={() => (props.goTo('/skills'))}>
      <i className="material-icons">
        settings
      </i>
    </a>
    <a href="/">
      <i className="material-icons">
        album
      </i>
    </a>
    <a href="/">
      <i className="material-icons">
        email
      </i>
    </a>
  </nav>
);

export default Nav;

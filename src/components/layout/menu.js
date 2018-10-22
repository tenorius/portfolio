import React from 'react';
import './menu.css';

const menu = props => (
  <a onClick={props.toogleNav} className="menu">
    <i className="material-icons">
           menu
    </i>
  </a>
);

export default menu;

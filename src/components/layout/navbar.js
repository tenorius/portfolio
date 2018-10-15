import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import './navbar.css';
import Menu from './menu';
import Logo from './logo';
import Nav from './nav';
import {bindActionCreators} from "redux";
import * as actions from "../../redux/actions/appActions";
import connect from "react-redux/es/connect/connect";

class Navbar extends Component {
  
  goTo = (route) => {
    this.props.actions.startRouteChange(route);
  };
  
  render() {
    return (
      <div className="navbar">
        <Logo />
        <Nav goTo={this.goTo}/>
        <Menu />
      </div>
    );
  }
}

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar))

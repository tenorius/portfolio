import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './navbar.css';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import Menu from './menu';
import Logo from './logo';
import Nav from './nav';
import * as actions from '../../redux/actions/appActions';

class Navbar extends Component {
  goTo = (route) => {
    console.log(this.props);
    this.props.actions.startRouteChange(route);
  };

  toogleNav = () => {
    console.log(this.props);
    this.props.actions.toggleNavbar();
  };

  render() {
    return (
      <div className="navbar">
        <Logo width="57px" height="57px" />
        <Nav goTo={this.goTo} show={this.props.app.showNavBar} />
        <Menu toogleNav={this.toogleNav} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  app: state.app,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));

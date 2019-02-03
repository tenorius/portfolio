import React, { Component } from 'react';
import { bindActionCreators, compose } from 'redux';
import connect from 'react-redux/es/connect/connect';
import { actions } from '../ducks/index';
import Routes from '../routes';
import Navbar from '../components/navbar';
import Page from '../components/page';
import Preloader from '../components/preloader';

class Layout extends Component {
  state = {
    showNavbar: false,
  };

  stateGo = (route) => {
    this.props.actions.startRouteChange(route);
  };

  toggleNavbar = () => {
    this.setState(prevState => ({ showNavbar: !prevState.showNavbar }));
  };

  render() {
    const {
      showNavbar,
    } = this.state;
    return (
      <div>
        <Navbar showNavbar={showNavbar} toggleNavbar={this.toggleNavbar} stateGo={this.stateGo} />
        <Page>
          <Routes />
        </Page>
        <Preloader />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  app: state.app,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

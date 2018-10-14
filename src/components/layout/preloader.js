import React, { Component } from 'react';
import { withRouter } from "react-router";
import {connect} from  'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../redux/actions/appActions';
import './preloader.css';

class Preloader extends Component {
  
  state = { isLoading: false };
  
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.props.actions.toggleLoading(true);
    }
  }
  
  render() {
    let styles = {
      display: this.props.app.isLoading ? 'block' : 'none'
    };
    return <div className="preloader" style={styles}>
    
    </div>
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    app: state.app,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Preloader))


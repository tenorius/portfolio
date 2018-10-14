import React, { Component } from 'react';
import { withRouter } from "react-router";
import './preloader.css';

class Preloader extends Component {
  
  state = { isLoading: false };
  
  componentDidUpdate = prevProps => {
    if (this.props.location !== prevProps.location) {
      this.clearTimer();
      this.setState({ isLoading: true }, () => this.setTimer());
    }
  };
  
  clearTimer = () => clearTimeout(this.timeout);
  
  timer = () => this.setState({ isLoading: false }, () => this.clearTimer());
  
  setTimer = () => (this.timeout = setTimeout(this.timer, 3000));
  
  render() {
    let styles = {
      display: this.state.isLoading ? 'block' : 'none'
    };
    return <div className="preloader" style={styles}>
    
    </div>
  }
}


export default withRouter(Preloader);

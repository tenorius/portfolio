import React, { Component } from 'react';
import { withRouter } from "react-router";
import {connect} from  'react-redux';
import {bindActionCreators} from 'redux';
import { TimelineMax, Power4 } from "gsap/all";
import * as actions from '../../redux/actions/appActions';
import Logo from './logo';
import './preloader.css';

class Preloader extends Component {
  
  element = null;
  myTweenStart = null;
  myTweenEnd = null;
  
  componentDidMount() {
    this.myTweenStart = new TimelineMax().to(document.querySelector('.container'), 0.4, {
      immediateRender: false,
      opacity: 0.2,
      scale: 0.85,
      ease: Power4.easeOut
    }).fromTo(this.element, 0.5, {immediateRender: false, x: '-100%', display: 'none', ease: Power4.easeOut}, {
      x: '0%',
      display: 'block'
    }, 0.3).pause()
    this.myTweenEnd = new TimelineMax().fromTo(document.querySelector('.container'), 0.5, {
      immediateRender: false,
      opacity: 0,
      scale: 0.85
    }, {opacity: 1, scale: 1}, 0.3).fromTo(this.element, 0.6, {immediateRender: false, x: '0%', ease: Power4.easeIn}, {
      x: '100%', onComplete: function () {
      
      }
    }, 0).pause()
  
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.props.actions.toggleLoading(true);
      return false;
    } else if (this.props.app.isLoading) {
      this.myTweenStart.restart();
      return false;
    } else if (!this.props.app.isLoading) {
      this.myTweenEnd.restart();
      return false;
    }
  }
  
  render() {
    // let styles = {
    //   display: this.props.app.isLoading ? 'block' : 'none'
    // };
    return (
      <div className="preloader" ref={(ref) => this.element = ref}>
        <div className="inner">
          <Logo/>
          <span>Tenorio is thinking</span>
          <div className="progress"></div>
        </div>
      </div>
    )
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


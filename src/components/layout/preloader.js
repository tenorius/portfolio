import React, { Component } from 'react';
import { withRouter, Redirect } from "react-router-dom";
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
    this.initAnimations();
  }
  
  shouldComponentUpdate(nextProps) {
    if (nextProps.app.isLoading && nextProps.app.isLoading !== this.props.app.isLoading) {
      this.initAnimations();
      this.myTweenStart.restart();
      setTimeout(() => {
        nextProps.actions.endRouteChange();
      }, 2000);
    } else if (!nextProps.app.isLoading && nextProps.app.isLoading !== this.props.app.isLoading) {
      nextProps.history.push(nextProps.app.targetRoute);
    } else if (nextProps.location !== this.props.location) {
      this.initAnimations();
      this.myTweenEnd.restart();
    }
    return false;
  }
  
  decideAction = () => {
  
  };
  
  initAnimations = () => {
    this.myTweenStart = new TimelineMax().to(document.querySelector('.container'), 0.4, {
      immediateRender: false,
      opacity: 0.2,
      scale: 0.85,
      ease: Power4.easeOut
    }).fromTo(this.element, 0.5, {immediateRender: false, x: '-100%', display: 'none', ease: Power4.easeOut}, {
      x: '0%',
      display: 'block'
    }, 0.3).pause();
    this.myTweenEnd = new TimelineMax().fromTo(document.querySelector('.container'), 0.5, {
      immediateRender: false,
      opacity: 0,
      scale: 0.85
    }, {opacity: 1, scale: 1}, 0.3).fromTo(this.element, 0.6, {immediateRender: false, x: '0%', ease: Power4.easeIn}, {
      x: '100%', onComplete: function () {
      
      }
    }, 0).pause();
  };
  
  render() {
    console.log(this.props.app.targetRoute);
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


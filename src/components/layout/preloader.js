import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TimelineMax, Power4 } from 'gsap/all';
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

  componentDidUpdate(prevProps) {
    if (this.props.app.isLoading && this.props.app.isLoading !== prevProps.app.isLoading) {
      this.initAnimations();
      console.log('starting preloading animation...');
      this.myTweenStart.restart();
      setTimeout(() => {
        this.props.history.push(this.props.app.targetRoute);
      }, 500);
    } else if (!this.props.app.isLoading && this.props.app.isLoading !== prevProps.app.isLoading) {
      this.initAnimations();
      console.log('ending preloading animation...');
      this.myTweenEnd.restart();
    } else if (this.props.location !== prevProps.location) {
      setTimeout(() => {
        this.props.actions.endRouteChange();
      }, 1000);
    }
  }

  initAnimations = () => {
    const container = document.querySelector('.container');
    const bg = document.querySelector('.bg');
    this.myTweenStart = new TimelineMax().to([container, bg], 0.4, {
      immediateRender: false,
      opacity: 0.2,
      scale: 0.85,
      ease: Power4.easeOut,
    }).fromTo(this.element, 0.4, { immediateRender: false, x: '-100%', display: 'none', ease: Power4.easeOut }, {
      x: '0%',
      display: 'block',
    }, 0.3).pause();
    this.myTweenEnd = new TimelineMax().fromTo([container, bg], 0.5, {
      immediateRender: false,
      opacity: 0,
      scale: 0.85,
    }, { opacity: 1, scale: 1 }, 0.3).fromTo(this.element, 0.6, { immediateRender: false, x: '0%', ease: Power4.easeIn }, {
      x: '100%',
      onComplete() {

      },
    }, 0).pause();
  };

  render() {
    console.log(this.props.app.targetRoute);
    return (
      <div className="preloader" ref={ref => this.element = ref}>
        <div className="inner">
          <Logo width="57px" height="57px" />
          <span>Tenorio is thinking</span>
          <div className="progress" />
        </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Preloader));

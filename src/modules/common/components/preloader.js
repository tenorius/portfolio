import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { TimelineMax, Power4 } from 'gsap/all';
import { actions } from '../ducks/index';
import Logo from './logo';
import './preloader.css';

class Preloader extends Component {
  element = null;

  myTweenStart = null;

  myTweenEnd = null;

  componentDidMount() {
    this.resetAnimations();
  }

  componentDidUpdate(prevProps) {
    console.log(this.props);
    if (this.props.app.isLoading && this.props.app.isLoading !== prevProps.app.isLoading) {
      // open animation
      this.resetAnimations();
      console.log('starting preloading animation...');
      this.myTweenStart.restart();
      setTimeout(() => {
        console.log('goto:', this.props.app.targetRoute);
        this.props.history.push(this.props.app.targetRoute);
      }, 1500);
    } else if (!this.props.app.isLoading && this.props.app.isLoading !== prevProps.app.isLoading) {
      // closing animation
      this.resetAnimations();
      console.log('ending preloading animation...');
      this.myTweenEnd.restart();
    } else if (this.props.location !== prevProps.location) {
      setTimeout(() => {
        this.props.actions.endRouteChange();
      }, 1000);
    }
  }

  resetAnimations = () => {
    const container = document.getElementById('container');
    const bg = document.getElementById('background');
    this.myTweenStart = new TimelineMax().to([container, bg], 0.4, {
      immediateRender: false,
      opacity: 0.2,
      scale: 0.85,
      ease: Power4.easeOut,
    }).fromTo(this.element, 0.4, { immediateRender: false, x: '-100%', display: 'none', ease: Power4.easeOut }, {
      x: '0%',
      display: 'block',
    }, 0.3).pause();
    this.myTweenEnd = new TimelineMax().fromTo([container, bg], 1, {
      immediateRender: false,
      opacity: 0,
      scale: 0.85,
    }, { opacity: 1, scale: 1 }, 0.3).fromTo(this.element, 1, { immediateRender: false, x: '0%', ease: Power4.easeIn }, {
      x: '100%',
      onComplete() {

      },
    }, 0).pause();
  };

  render() {
    return (
      <div className="preloader" ref={ref => this.element = ref}>
        <div className="inner">
          <Logo size={57} />
          <span>Tenorio is thinking</span>
          <div className="progress" />
        </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Preloader));

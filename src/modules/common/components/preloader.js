import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { TimelineMax, Power4 } from 'gsap/all';
import { actions } from '../ducks/index';
import Logo from './logo';

const Styled = {};
Styled.wrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: none;
  /*background: #252627;*/
  background: #252627;
  z-index: 4;
  overflow: hidden;
  
  .inner{
    position: absolute;
    height: 160px;
    width: 40%;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    /*background: #252627;*/
    background: #252627;
    text-align: center;
  }
  
  span{
    color: #8d8d8d;
    margin-top: 9px;
    font-size: 9px;
    font-family: "Open Sans", sans-serif;
    letter-spacing: 3px;
    display: block;
  }
  
  .base {
    width: 100%;
    height: 1px;
    float: left;
    margin: 9px auto;
    background: #826200;
    position: relative;
    
    .progress {
      width: 100%;
      height: 1px;
      float: left;
      background: gold;
      position: absolute;
    }
  }
`;
class Preloader extends Component {
  element = null;

  myTweenStart = null;

  myTweenEnd = null;

  progressAnimation = null;

  componentDidMount() {
    this.resetAnimations();
  }

  componentDidUpdate(prevProps) {
    console.log(this.props);
    if (this.props.app.isLoading && this.props.app.isLoading !== prevProps.app.isLoading) {
      // open animation
      this.resetAnimations();
      console.log('starting preloading animation...');
      this.myTweenStart.play();
      this.progressAnimation.delay(1.5).play();
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
    const progress = document.getElementById('progress');
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
    const value = document.getElementById('progress-value');
    const bar = document.getElementById('progress');
    value.innerText = '0%';
    this.progressAnimation = new TimelineMax({ onUpdate: () => { value.innerText = `${bar.style.width.split('.')[0]}%`; } }).fromTo(progress, 1, { immediateRender: true, width: 0, ease: Power4.easeOut }, {
      width: '100%',
    }).pause();
  };

  render() {
    return (
      <Styled.wrapper ref={ref => this.element = ref}>
        <div className="inner">
          <Logo size={57} />
          <span>Tenorio is thinking</span>
          <span id="progress-value">0</span>
          <div className="base">
            <div id="progress" className="progress" />
          </div>
        </div>
      </Styled.wrapper>
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

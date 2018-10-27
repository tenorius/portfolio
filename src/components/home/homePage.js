import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TimelineMax, TimelineLite, Power4 } from 'gsap';
import * as actions from '../../redux/actions/appActions';
import Container from '../layout/container';
import Background from '../layout/background';
import SpellingBee from '../utils/spellingBee';


class HomePage extends Component {
  await = 300;

  elements = {
    background: null,
    container: null,
    button: null,
    h2: null,
  };

  animations = {
    init: null,
    button: null,
    h2: null,
  };

  componentDidMount() {
    this.handleAnimations();
  }

  resetAnimations = () => {
    this.animations.init = new TimelineMax().to([this.elements.container, this.elements.background], 2, {
      immediateRender: false,
      opacity: 1,
      ease: Power4.linear,
    }).pause();

    this.animations.button = new TimelineLite({ paused: true, delay: 2 })
      .fromTo(this.elements.button, 1, { opacity: 0 }, { opacity: 1 });

    this.animations.h2 = new TimelineLite({ paused: true, delay: 2 })
      .fromTo(this.elements.h2, 1, { opacity: 0 }, { opacity: 1 });
  };

  handleAnimations = () => {
    this.resetAnimations();
    if (!this.props.app.isLoading) {
      console.log('starting default animation...');
      this.animations.init.play();
    }
    this.animations.h2.play();
    this.animations.button.play();
  };

  handleClick = () => {
    // this.setState({init: true});
  };

  assignRef = (ref, element) => {
    this.elements[element] = ref;
  };

  render() {
    return (
      <Fragment>
        <Container
          delay={this.await}
          styleClass="home-page"
          assignRef={this.assignRef}
        >
          <div className="text-zone">
            <SpellingBee
              init={!this.props.app.isLoading}
              delay={this.await}
              text="Hi,*I'm Tenorio,*web developer"
              cssClass="blast"
              tag="h1"
            />
            <h2 ref={(ref) => { this.elements.h2 = ref; }}>Front End Developer / WordPress / Angular JS</h2>
            <a ref={(ref) => { this.elements.button = ref; }} className="flat-button" onClick={this.handleClick}>
              CONTACT ME
            </a>
          </div>
        </Container>
        <Background assignRef={this.assignRef} />
      </Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  app: state.app,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

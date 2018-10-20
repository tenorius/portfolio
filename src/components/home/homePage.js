import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TimelineMax, TimelineLite, CSSPlugin, Power4 } from 'gsap';
import * as actions from '../../redux/actions/appActions';
import Container from '../layout/container';
import Background from '../layout/background';
import SpellingBee from '../utils/spellingBee';


class HomePage extends Component {
  await = 300;

  container = null;

  button = null;

  h2 = null;

  initAnimation = null;

  buttonAnimation = null;


  componentDidMount() {
    this.initAnimation = new TimelineMax().to(this.container, 3, {
      immediateRender: false,
      opacity: 1,
      ease: Power4.linear,
    }).pause();

    this.buttonAnimation = new TimelineLite({ paused: true })
      .fromTo(this.button, 2, { opacity: 0 }, { opacity: 1 })
      .to(this.h2, 2, { opacity: 1 });

    if (!this.props.app.isLoading) {
      this.initAnimation.play();
      this.buttonAnimation.play();
    }
  }

  handleClick = () => {
    // this.setState({init: true});
  };

  assignRef = (ref) => {
    this.container = ref;
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
            <h2 ref={(ref) => { this.h2 = ref; }}>Front End Developer / WordPress / Angular JS</h2>
            <a ref={(ref) => { this.button = ref; }} className="flat-button" onClick={this.handleClick}>
              CONTACT ME
            </a>
          </div>
        </Container>
        <Background />
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

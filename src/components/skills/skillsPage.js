import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TimelineMax, TimelineLite, Power4 } from 'gsap';
import * as actions from '../../redux/actions/appActions';
import Container from '../layout/container';
import '../../assets/js/tagcanvas';
import SkillsCanvas from '../utils/skillsCanvas';
import Background from '../layout/background';
import SpellingBee from '../utils/spellingBee';
import './skillsPage.css';


class SkillsPage extends Component {
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
    this.handleCanvas();
  }

  handleCanvas = () => {
    const options = {
      textColour: 'gold',
      textHeight: 20,
      depth: 0.99,
      initial: [0.1, 0.1],
    }
    window.TagCanvas.Start('myCanvas', null, options);
  };

  prepareAnimations = () => {
    this.initAnimation = new TimelineMax().to(this.elements.container, 3, {
      immediateRender: false,
      opacity: 1,
      ease: Power4.linear,
    }).pause();
  };

  handleAnimations = () => {
    this.prepareAnimations();
    if (!this.props.app.isLoading) {
      console.log('starting default animation...');
      this.initAnimation.play();
    }
  };

  handleClick = () => {
    // this.setState({init: true});
  };

  assignRef = (ref, element) => {
    this.elements[element] = ref;
  };

  render() {
    return (
      <Container
        delay={this.await}
        styleClass="skills-page"
        assignRef={this.assignRef}
      >
        <div className="text-zone">
          <SpellingBee
            init={!this.props.app.isLoading}
            delay={this.await + 300}
            text="Skills &*Experience"
            cssClass="blast"
            tag="h1"
          />
          <p>
            Hi! My name is Rodrigo Tenorio, I'm a graduated computer scientist at Federal University of Pernambuco and
            i've been working
            with web technologies professionally for about 6 years now. I love creating interesting apps that helps
            people and companies to achieve their goals.
          </p>
          <p>
            I started working professionaly as a backend developer using Java to create modules of one of the biggest
            projects of Latin America, the Efisco System.
          </p>
          <p>
            Thats when i went to work at Accenture, as a Front-End developer. There I found my true passion.
          </p>
        </div>
        <SkillsCanvas />
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  app: state.app,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillsPage);

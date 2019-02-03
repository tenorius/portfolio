import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TimelineMax, Power4 } from 'gsap';
import styled from 'styled-components';
import { actions } from '../../common/ducks/index';
import Container from '../../common/components/container';
import '../../../assets/js/tagcanvas';
import SkillsCanvas from '../../common/utils/skillsCanvas';
import SpellingBee from '../../common/utils/spellingBee';
import '../skillsPage.css';
import TextZone from '../../common/components/textzone';

const MyTextZone = styled(TextZone)`
  h1{
    color: #edc000;
    position: relative;
    margin-bottom: 40px;
  }
`;

class Skills extends Component {
  await = 300;

  elements = {
    container: null,
  };

  animations = {
    init: null,
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
    };
    window.TagCanvas.Start('myCanvas', null, options);
  };

  prepareAnimations = () => {
    this.animations.init = new TimelineMax().to(this.elements.container, 3, {
      immediateRender: false,
      opacity: 1,
      ease: Power4.linear,
    }).pause();
  };

  handleAnimations = () => {
    this.prepareAnimations();
    if (!this.props.app.isLoading) {
      this.animations.init.play();
    }
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
        <MyTextZone>
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
        </MyTextZone>
        <SkillsCanvas />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  app: state.app,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Skills);

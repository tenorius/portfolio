import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TimelineMax from 'gsap/TimelineMax';
import { Power4 } from 'gsap';
import { actions } from '../../common/ducks/index';
import Container from '../../common/components/container';
import SpellingBee from '../../common/utils/spellingBee';
import TextZone from '../../common/components/textzone';

const MyTextZone = styled(TextZone)`
  h1{
    color: #edc000;
    position: relative;
    margin-bottom: 40px;
  }
`;


class About extends Component {
  await = 300;

  container = null;

  initAnimation = null;

  componentDidMount() {
    this.initAnimation = new TimelineMax().to(this.container, 3, {
      immediateRender: false,
      opacity: 1,
      ease: Power4.linear,
    }).pause();

    if (!this.props.app.isLoading) {
      this.initAnimation.play();
    }
  }

  assignRef = (ref) => {
    this.container = ref;
  };

  render() {
    return (
      <Container
        delay={this.await}
        styleClass="about-page"
        assignRef={this.assignRef}
      >
        <MyTextZone>
          <SpellingBee
            init={!this.props.app.isLoading}
            delay={this.await + 300}
            text="About me"
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
            There i was responsible for making modules do deduct taxes from rich people lol. I realized that i didnt
            really like doing a work that required no creativity, so i decided to change areas.
          </p>
          <p>
            Thats when i went to work at Accenture, as a Front-End developer. There I found my true passion. I love
            being able to be creative working with designer to achieve better user experiences to my clients
            and be really productive using modern Js frameworks.
          </p>
        </MyTextZone>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);

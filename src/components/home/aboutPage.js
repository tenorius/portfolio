import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../redux/actions/appActions';
import Container from '../layout/container';
import './aboutPage.css';
import SpellingBee from "../utils/spellingBee";


class AboutPage extends Component {
  componentDidMount() {
    setTimeout(() => {
      // this.setState({init: true});
      this.props.actions.toggleLoading(false);
    }, 2000);
  }

  render() {
    return (
      <Container
        init={!this.props.app.isLoading}
        delay={2300}
        styleClass="about-page"
      >
        <div className="text-zone">
          <SpellingBee init={!this.props.app.isLoading}
                       delay={2300}
                       text="About me" cssClass="blast" tag="h1"/>
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
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);

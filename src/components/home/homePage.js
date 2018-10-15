import React, {Component, Fragment} from 'react'
import {connect} from  'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../redux/actions/appActions';
import Container from "../layout/container";
import Background from "../layout/background";
import SpellingBee from "../utils/spellingBee";
import Transition from "../utils/transition";


class HomePage extends Component {
  
  await = 300;
  
  componentDidMount() {
    // setTimeout(() => {
    //   // this.setState({init: true});
    //   this.props.actions.toggleLoading(false);
    // }, this.await)
  }
  
  handleClick = () => {
    // this.setState({init: true});
  }
  
  render() {
    return (
      <Fragment>
        <Container delay={this.await}
                   styleClass="home-page">
          <div className="text-zone">
            <SpellingBee init={!this.props.app.isLoading}
                         delay={this.await}
                         text="Hi,*I'm Tenorio,*web developer" cssClass="blast" tag="h1"/>
            <Transition init={!this.props.app.isLoading}
                        delay={this.await}>
              <h2>Front End Developer / WordPress / Angular JS</h2>
              <a className="flat-button" onClick={this.handleClick}>
                CONTACT ME
              </a>
            </Transition>
          </div>
        </Container>
        <Background/>
      </Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
import React, {Component, Fragment} from 'react'
import Container from "../layout/container";
import Background from "../layout/background";
import SpellingBee from "../utils/spellingBee";
import Transition from "../utils/transition";

class HomePage extends Component {
  state = {
    init: false
  };
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({init: true})
    }, 300)
  }
  
  handleClick = () => {
    // this.setState({init: true});
  }
  
  render() {
    return (
      <Fragment>
        <Container init={this.state.init}
                   delay={300}
                   styleClass="home-page">
          <div className="text-zone">
            <SpellingBee init={this.state.init}
                         delay={300}
                         text="Hi,*I'm Tenorio,*web developer" cssClass="blast" tag="h1"/>
            <Transition init={this.state.init}
                        delay={2600}>
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

export default HomePage;
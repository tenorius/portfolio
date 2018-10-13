import React, {Component, Fragment} from 'react'
import Container from "../layout/container";
import Background from "../layout/background";
import SpellingBee from "../utils/spellingBee";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Container styleClass="home-page">
                    <div className="text-zone">
                        <SpellingBee text="Hi,*I'm Tenorio,*web developer" cssClass="blast" tag="h1"/>
                        <h2>Front End Developer / WordPress / Angular JS</h2>
                        <a className="flat-button">
                            CONTACT ME
                        </a>
                    </div>
                </Container>
                <Background/>
            </Fragment>
        )
    }
}

export default HomePage;
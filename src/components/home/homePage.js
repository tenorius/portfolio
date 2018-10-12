import React, {Component} from 'react'
import Container from "../layout/container";

class HomePage extends Component {
    render() {
        return (
            <Container styleClass="home-page">
                <div className="text-zone">
                    <h1>Hi, <br/> I'm Tenorio, <br/> web developer.</h1>
                    <h2>Front End Developer / WordPress / Angular JS</h2>
                    <a className="flat-button">
                        CONTACT ME
                    </a>
                </div>
            </Container>
        )
    }
}

export default HomePage;
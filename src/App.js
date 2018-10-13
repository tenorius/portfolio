import React, { Component } from 'react';
import logo from './logo.svg';
import './main.css';
import './components/layout/navbar.css'
import Navbar from "./components/layout/navbar";
import Page from "./components/layout/page"
import "./components/layout/page.css"
import HomePage from "./components/home/homePage";
import Background from "./components/layout/background";
import { Switch, Route, Redirect } from 'react-router-dom';
import AboutPage from "./components/home/aboutPage";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar/>
          <Page>
              <Switch>
                  <Route path="/home" component={HomePage}/>
                  <Route path="/about" component={AboutPage}/>
                  <Redirect from="/" to="/home"/>
              </Switch>

          </Page>
        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<p>*/}
            {/*Edit <code>src/App.js</code> and save to reload.*/}
          {/*</p>*/}
          {/*<a*/}
            {/*className="App-link"*/}
            {/*href="https://reactjs.org"*/}
            {/*target="_blank"*/}
            {/*rel="noopener noreferrer"*/}
          {/*>*/}
            {/*Learn React*/}
          {/*</a>*/}
        {/*</header>*/}
      </div>
    );
  }
}

export default App;

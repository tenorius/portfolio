import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './main.css';
import './components/layout/navbar.css';
import Navbar from './components/layout/navbar';
import Page from './components/layout/page';
import './components/layout/page.css';
import HomePage from './components/home/homePage';
import AboutPage from './components/about/aboutPage';
import SkillsPage from './components/skills/skillsPage';
import GalleryPage from './components/gallery/galleryPage';
import Preloader from './components/layout/preloader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Page>
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/skills" component={SkillsPage} />
            <Route path="/gallery" component={GalleryPage} />
            <Redirect from="/" to="/home" />
          </Switch>
        </Page>
        <Preloader />
      </div>
    );
  }
}

export default App;

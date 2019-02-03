import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from '../home/index';

const Routes = () => (
  <Switch>
    <Route path="/home" component={HomePage} />
    {/* <Route path="/about" component={AboutPage} /> */}
    {/* <Route path="/skills" component={SkillsPage} /> */}
    {/* <Route path="/gallery" component={GalleryPage} /> */}
    <Redirect from="/" to="/home" />
  </Switch>
);

export default Routes;

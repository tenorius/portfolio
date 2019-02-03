import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../home/index';
import Skills from '../skills/index';
import About from '../about/index';
import Gallery from '../gallery/index';

const Routes = () => (
  <Switch>
    <Route path="/home" exact component={Home} />
    <Route path="/skills" exact component={Skills} />
    <Route path="/about" exact component={About} />
    <Route path="/gallery" exact component={Gallery} />
    <Redirect from="/" to="/home" />
  </Switch>
);

export default Routes;

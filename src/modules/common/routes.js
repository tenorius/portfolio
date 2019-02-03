import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../home/index';
import Skills from '../skills/index';

const Routes = () => (
  <Switch>
    <Route path="/home" exact component={Home} />
    <Route path="/skills" exact component={Skills} />
    <Redirect from="/" to="/home" />
  </Switch>
);

export default Routes;

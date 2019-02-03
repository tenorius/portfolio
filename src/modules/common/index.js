import React, { Component } from 'react';
import Layout from './views/layout';
import { Route, Switch } from 'react-router-dom';


class Index extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Layout} />
      </Switch>
    );
  }
}

export default Index;

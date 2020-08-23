import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    {/* <Route path="/city/:id" component={Import} /> */}
  </Switch>
);

export default Routes;

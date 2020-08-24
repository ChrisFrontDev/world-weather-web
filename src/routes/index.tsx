import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';

import CityDetails from '../pages/CityDetails/CityDetails';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/city/:id" component={CityDetails} />
  </Switch>
);

export default Routes;

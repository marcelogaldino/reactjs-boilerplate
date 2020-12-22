import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Page1 from '../pages/Page1';

const Routes: React.FC = () => (
  <Switch>
    <Route path="" component={Page1} />
  </Switch>
);

export default Routes;

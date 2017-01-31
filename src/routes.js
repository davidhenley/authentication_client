import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Signin from './components/auth/signin';

export default (
  <Route path="/" component={App}>
    <Route path="signin" component={Signin} />
  </Route>
);

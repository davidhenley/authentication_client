import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';

export default (
  <Route path="/" component={App}>
    <Route path="signin" component={Signin} />
    <Route path="signout" component={Signout} />
    <Route path="signup" component={Signup} />
  </Route>
);

import axios from 'axios';
import { browserHistory } from 'react-router';

import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERR
} from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return function(dispatch) {
    // Submit email/password to server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        // update state
        dispatch({
          type: AUTH_USER
        });
        // save token in localStorage
        localStorage.setItem('token', response.data.token);
        // redirect
        browserHistory.push('/feature');
      })
      .catch(() => {
        // If request bad, show error
        dispatch({
          type: AUTH_ERR,
          payload: 'Bad login info'
        });
      });
  }
}

export function signoutUser() {
  // Need to flip authenticated to false and get rid of token
  localStorage.removeItem('token');
  return {
    type: UNAUTH_USER
  }
}

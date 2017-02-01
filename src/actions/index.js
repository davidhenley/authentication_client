import axios from 'axios';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return function(dispatch) {
    // Submit email/password to server
    axios.post(`${ROOT_URL}/signin`, { email, password });

    // If request good, update state to authenticated, save token, and redirect to protected route.

    // If request bad, show error
  }
}

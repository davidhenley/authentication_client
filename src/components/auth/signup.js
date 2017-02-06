import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  render() {
    const { handleSubmit, fields: {email, password, passwordConfirm}} = this.props;
    return (
      <div className="signup">
        <form>
          <fieldset className="form-group">
            <label>Email</label>
            <input className="form-control" { ...email } />
          </fieldset>
          <fieldset className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" { ...password } />
          </fieldset>
          <fieldset className="form-group">
            <label>Confirm Password</label>
            <input type="password" className="form-control" { ...passwordConfirm } />
          </fieldset>
          <button action="submit" className="btn btn-primary">Sign up!</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm']
}, null, actions)(Signup);
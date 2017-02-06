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
            {email.touched && email.error && <div className="error">{email.error}</div>}
          </fieldset>
          <fieldset className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" { ...password } />
            {password.touched && password.error && <div className="error">{password.error}</div>}
          </fieldset>
          <fieldset className="form-group">
            <label>Confirm Password</label>
            <input type="password" className="form-control" { ...passwordConfirm } />
            {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
          </fieldset>
          <button action="submit" className="btn btn-primary">Sign up!</button>
        </form>
      </div>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.email) errors.email = "Please enter an email";
  if (!formProps.password) errors.password = "Please enter a password";
  if (!formProps.passwordConfirm) errors.passwordConfirm = "Please enter a password confirmation";
  if (formProps.password !== formProps.passwordConfirm) errors.password = 'Passwords must match';

  return errors;
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
}, null, actions)(Signup);

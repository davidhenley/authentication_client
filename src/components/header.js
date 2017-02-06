import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/feature">Feature</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signout">Sign Out</Link>
        </li>
      ];
    } else {
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/signin">Sign In</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
      ];
    }
  }

  render() {
    return(
      <div className="header">
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <Link to="/" className="navbar-brand">Home</Link>
          <ul className="navbar-nav">
            {this.renderLinks()}
          </ul>
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { authenticated: auth.authenticated };
}

export default connect(mapStateToProps)(Header);

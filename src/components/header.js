import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return(
      <div className="header">
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <ul className="navbar-nav">
            <li className="nav-item nav-link">
              <Link to="/signin">Sign In</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;

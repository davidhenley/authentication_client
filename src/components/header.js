import React, { Component } from 'react';

class Header extends Component {
  render() {
    return(
      <div className="header">
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <ul className="navbar-nav">
            <li className="nav-item nav-link">
              Sign In
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;

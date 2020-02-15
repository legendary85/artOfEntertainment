import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

export class Navbar extends Component {
  render() {
    return (
      <nav id='navbar' className="navbar navbar-expand-lg navbar-light bg-dark">
        <Link className="navbar-brand" to="/">Art of Entertainment</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
            <Link className="nav-item nav-link" to="/about">About</Link>
            <Link className="nav-item nav-link" to="/packages">Packages</Link>
            <Link className="nav-item nav-link" to="/contact">Contact</Link>
            <Link className="nav-item nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Media</Link>
          </div>
        </div>

        {/* Bottom of Navbar */}
      </nav>
    );
  }
}

export default Navbar;
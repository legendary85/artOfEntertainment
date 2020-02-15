import React, { Component } from 'react';
import './Footer.css'

export class Footer extends Component {
  render() {
    return (
      <footer>
        <ul>
          <li>Coded by : Buff Coder LLC {'\u00A9'} 2019 </li>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook"></i>
        </ul>
      </footer>
    )
  }
}

export default Footer
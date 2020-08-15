import React from 'react';
import "./nav.css";

const Nav = (props) => (
  <nav {...props}>
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </nav>
);

export default Nav;
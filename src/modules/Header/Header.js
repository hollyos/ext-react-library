import React from 'react';
import { Nav, Title } from '../../index.js';
import "./header.css";

const Header = (props) => (
  <header className="global-header" {...props}>
    <Title className="global-title" />
    <Nav className="global-nav" />
  </header>
);

export default Header;

import React from 'react';
import Nav from '../../components/Nav/Nav';
import Title from '../../components/Title/Title';
import "./header.css";

const Header = (props) => (
  <header className="global-header" {...props}>
    <Title className="global-title" />
    <Nav className="global-nav" />
  </header>
);

export default Header;
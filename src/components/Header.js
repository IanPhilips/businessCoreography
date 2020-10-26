import React, { Component } from 'react';
import config from '../../config';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Layout from './Layout';
import icon from '../assets/img/website-icon.png';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
    };
  }
  toggleMenu = value => {
    this.setState({ openMenu: value });
  };



  render() {
    const { openMenu, visibilityClass } = this.state;
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-light  ${visibilityClass}`}
        id="mainNav"
      >
        <div className="container-fluid">
          <AnchorLink title={config.siteTitle} className="navbar-brand " to="/"  >
          <img className={"brand-icon"} src={icon} alt={""} />
            <a onClick={() => this.toggleMenu(false)}>
              {config.siteTitle}
            </a>
          </AnchorLink>
        </div>
      </nav>

    );
  }
}

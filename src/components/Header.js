import React, { Component } from 'react';
import config from '../../config';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import icon from '../assets/img/website-icon.png';

export default class Header extends Component {

  render() {
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-light  `}
        id="mainNav"
      >
        <div className="container-fluid">
          <AnchorLink title={config.siteTitle} className="navbar-brand " to="/"  >
          <img className={"brand-icon"} src={icon} alt={""} />
              {config.siteTitle}
          </AnchorLink>
        </div>
      </nav>

    );
  }
}

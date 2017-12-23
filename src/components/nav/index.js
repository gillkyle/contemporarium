import React from "react";
import Link from "gatsby-link";

import "./_nav.scss";

const Menu = props => (
  <section className="nav" id="nav">
    <div className="container">
      <div className="row nav-items">
        <div>
          <Link to="/menu" className="link">
            MENU
          </Link>
        </div>
        <div>LOCATIONS</div>
        <Link scroll to="/" className="link">
          <div className="nav-logo">CONTEMPORARIUM</div>
        </Link>
        <div>ABOUT</div>
        <div>CONTACT</div>
      </div>
    </div>
  </section>
);

export default Menu;

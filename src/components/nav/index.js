import React from "react";
import Link from "gatsby-link";

import "./_nav.scss";

const Menu = props => (
  <section className="nav" id="nav">
    <div className="container">
      <div className="row nav-items">
        <div>
          <Link to="/menu#nav" className="link">
            MENU
          </Link>
        </div>
        <Link scroll to="/locations#nav" className="link">
          <div>LOCATIONS</div>
        </Link>
        <Link scroll to="/#nav" className="link">
          <div className="nav-logo">CONTEMPORARIUM</div>
        </Link>
        <div>ABOUT</div>
        <div>CONTACT</div>
      </div>
    </div>
  </section>
);

export default Menu;

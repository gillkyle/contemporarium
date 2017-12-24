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
        <div>
          <Link to="/locations#nav" className="link">
            LOCATIONS
          </Link>
        </div>
        <div>
          <Link to="/#nav" className="link nav-logo">
            CONTEMPORARIUM
          </Link>
        </div>
        <div>
          <Link to="/#nav" className="link">
            ABOUT
          </Link>
        </div>
        <div>
          <Link to="/#nav" className="link">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Menu;

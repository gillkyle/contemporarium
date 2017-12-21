import React from "react";

import "./_menu.scss";

const Menu = props => (
  <section className="menu" id="menu">
    <div className="container">
      <div className="row menu-items">
        <div>MENU</div>
        <div>LOCATIONS</div>
        <div className="menu-logo">CONTEMPORARIUM</div>
        <div>REVIEWS</div>
        <div>CONTACT</div>
      </div>
    </div>
  </section>
);

export default Menu;

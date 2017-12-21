import React from "react";
import SocialIcons from "../social-icons";
import ContactInfo from "../contact-info";

import "./_header.scss";

const Header = () => (
  <header className="header">
    <div className="container hero">
      <div className="row">
        <SocialIcons />
      </div>
      <div className="row">
        <div className="col-12">
          <div className="header-content">
            <div className="header-logo">Contemporarium</div>
            <div
              style={{
                borderTop: "1px solid #fff",
                width: "60%",
                marginBottom: 15
              }}
            />
            <div>
              Enjoy artesenal foods, always fresh, from local Utah county
              sources
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <ContactInfo />
      </div>
    </div>
  </header>
);

export default Header;

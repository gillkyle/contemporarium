import React from "react";
import SocialIcons from "../social-icons";
import ContactInfo from "../contact-info";
import "./_footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="container text-center">
      <div className="row">
        <div className="col-12">
          <div className="footer-content">
            <div className="col menu-logo">CONTEMPORARIUM</div>
            <ContactInfo />
            <SocialIcons />
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

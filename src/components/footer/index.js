import React from 'react';
import SocialIcons from '../social-icons';
import ContactInfo from '../contact-info';
import './_footer.scss';

const Footer = () => (
  <footer id="footer" className="footer">
    <div className="container text-center">
      <div className="row">
        <div className="col-md-12">
          <div className="footer-content row">
            <div className="col col-md-4 col-sm-12 nav-logo">
              IMAGE STRATEGIES
            </div>
            <div className="col col-md-4 col-sm-12" />
            <div className="col col-md-4 col-sm-12">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

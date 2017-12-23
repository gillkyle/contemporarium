import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaYelp,
  FaEnvelope,
  FaInstagram
} from "react-icons/lib/fa";

import "./_social-icons.scss";

const SocialIcons = props => (
  <div className="col">
    <div className="social-icons-content">
      <nav className="social-icons-nav">
        <ul className="social-icons-nav-list">
          <li className="social-icons-nav-list-item">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook color="white" />
            </a>
          </li>
          <li className="social-icons-nav-list-item">
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter color="white" />
            </a>
          </li>
          <li className="social-icons-nav-list-item">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram color="white" />
            </a>
          </li>
          <li className="social-icons-nav-list-item">
            <a
              href="https://www.yelp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYelp color="white" />
            </a>
          </li>
          <li className="social-icons-nav-list-item">
            <a
              href="mailto:hello@example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope color="white" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default SocialIcons;

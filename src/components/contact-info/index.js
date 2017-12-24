import React from "react";
import { FaPhone } from "react-icons/lib/fa";

import "./_contact-info.scss";

const ContactInfo = props => (
  <div className="contact-content">
    <div>(801) 555-0123</div>
    <div>hello@contemporarium.com</div>
    <div>11a - 9p | Mon - Sat</div>
  </div>
);

export default ContactInfo;

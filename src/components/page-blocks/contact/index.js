import React from "react";

import "./_contact.scss";

const Contact = props => (
  <section className="contact" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h4 className="title">img</h4>
        </div>
        <div className="col-md-6 col-sm-12">
          <h4 className="title">{props.slogan}</h4>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;

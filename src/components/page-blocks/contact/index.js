import React from "react";

import { loaded } from "../../../scripts/form-submission-handler";
import "./_contact.scss";

class Contact extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    loaded();
  }

  render() {
    return (
      <section className="contact page-content" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="custom-card" style={{ marginTop: 0 }}>
                <form
                  id="gform"
                  method="POST"
                  className="pure-form pure-form-stacked"
                  data-email="example@email.com"
                  action="https://script.google.com/macros/s/AKfycbzj5-AclCiNmQKP_BwK0y0_6UsWBEeDknpBpzQAh2JFOA196p1e/exec"
                >
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="name"
                      name="Name"
                      type="text"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="email"
                      name="Email"
                      type="email"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <span id="email-invalid" style={{ display: "none" }}>
                    Must be a valid email address
                  </span>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="message"
                      name="Message"
                      type="text"
                      placeholder="Your Message..."
                      required
                    />
                  </div>
                  <button className="btn btn-primary">Send</button>
                </form>
                {/* <!-- Customise the Thankyou Message People See when they submit the form: --> */}
                <div style={{ display: "none" }} id="thankyou_message">
                  <h4>
                    Thanks for contacting us! We will get back to you soon!
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <h4 className="title">We're happy to hear from you!</h4>
              <div>
                We'll do our best to respond in 2-3 business days from the time
                you send your message. We appreciate your feedback and welcome
                any questions.
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;

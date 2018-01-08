import React from "react";

import "./_home.scss";
import { loaded } from "../../../scripts/form-submission-handler-email-list";

class Home extends React.Component {
  componentDidMount() {
    loaded();
  }

  render() {
    return (
      <section className="home page-content" id="home">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 side-img">
              <div class="card">
                <img
                  class="card-img"
                  src="https://images.unsplash.com/photo-1501199532894-9449c0a85a77?auto=format&fit=crop&w=634&q=80"
                  alt="Card image"
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <h4 className="title">
                A health-minded contemporary dining experience unique to Utah
                county
              </h4>
              <div className="home-info">
                Contemporarium is a locally owned, locally sourced restaurant.
              </div>
              <div className="home-info">
                Our chefs are specially trained and specialize in meals that are
                suitable for all diets and health-minded individuals.
              </div>
              <div className="home-info">
                We believe in supporting local suppliers and purchase all of our
                produce and meats from local farmers.
              </div>
              <div className="home-info">
                You’ll love our fresh meals for lunch or dinner, bring the whole
                family to our beautiful locale!
              </div>
              <hr />
              <h4>Sign up for our mailing list and receive special offers!</h4>
              <div className="custom-card" style={{ marginTop: 0 }}>
                <form
                  id="gform"
                  method="POST"
                  className="pure-form pure-form-stacked"
                  data-email="example@email.com"
                  action="https://script.google.com/macros/s/AKfycbzRf8a6u5tMJu7MYYQXwqHbT41ZD7WAcmAAz-ByAgkm7_5nGi_p/exec"
                >
                  <div className="input-group mb-3">
                    <input
                      className="form-control"
                      id="email"
                      name="Email"
                      type="email"
                      placeholder="Email Address"
                      required
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary">Subscribe</button>
                    </div>
                  </div>
                </form>
                {/* <!-- Customise the Thankyou Message People See when they submit the form: --> */}
                <div style={{ display: "none" }} id="thankyou_message">
                  <h4>
                    Thanks for subscribing! Pay attention for special offers!
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;

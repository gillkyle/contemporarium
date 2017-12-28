import React from "react";

import "./_home.scss";

const Home = props => (
  <section className="home" id="home">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12 side-img">
          <img
            alt="home image"
            style={{
              width: "100%",
              height: "100%",
              background: "transparent no-repeat center",
              backgroundSize: "cover"
            }}
            src="https://images.unsplash.com/photo-1501199532894-9449c0a85a77?auto=format&fit=crop&w=634&q=80"
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <h4 className="title">
            A health-minded contemporary dining experience unique to Utah county
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
        </div>
      </div>
    </div>
  </section>
);

export default Home;

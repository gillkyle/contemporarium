import React from "react";

import "./_about.scss";

const About = props => (
  <section className="about" id="about">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h4 className="title">About Us</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12 side-img">
          <div class="card">
            <img
              class="card-img"
              src="https://images.unsplash.com/photo-1502364271109-0a9a75a2a9df?auto=format&fit=crop&w=1350&q=80"
              alt="Card image"
            />
          </div>
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

export default About;

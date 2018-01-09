import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import { FaChevronRight } from "react-icons/lib/fa";
import Breadcrumb from "../../breadcrumb";

import "./_about.scss";

const About = props => (
  <section className="about page-content" id="about">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12 side-img">
          <div class="card">
            <Img
              title="card image"
              alt="Chef preparing food"
              className="card-img"
              sizes={props.images.sizes}
            />
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <h4 className="title">Expert chefs for stunning dishes</h4>
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

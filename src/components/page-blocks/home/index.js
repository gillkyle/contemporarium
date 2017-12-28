import React from "react";

import "./_home.scss";

const Home = props => (
  <section className="home" id="home">
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

export default Home;

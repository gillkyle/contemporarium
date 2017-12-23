import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Header from "../components/header";
import Footer from "../components/footer";

import "../../sass/style.scss";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Contemporarium">
      <link
        href="https://fonts.googleapis.com/css?family=Caesar+Dressing|Ubuntu"
        rel="stylesheet"
      />
    </Helmet>
    <Header />
    {children()}
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

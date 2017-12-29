import React from "react";
import Nav from "../components/nav";
import Breadcrumb from "../components/breadcrumb";
import About from "../components/page-blocks/about";

const AboutPage = props => (
  <main>
    <Nav />
    <Breadcrumb title="About" />
    <About />
  </main>
);

export default AboutPage;

export const pageQuery = graphql`
  query AboutQuery {
    dataJson {
      companyInfo {
        name
        slogan
      }
    }
  }
`;

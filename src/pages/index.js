/* global graphql */

import React from "react";
import Nav from "../components/nav";
import Breadcrumb from "../components/breadcrumb";
import Home from "../components/page-blocks/home";

const IndexPage = props => (
  <main>
    <Nav />
    <Home images={props.data.imageSharp} />
  </main>
);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    dataJson {
      companyInfo {
        name
        slogan
      }
    }
    imageSharp(id: { regex: "/lemonade/" }) {
      sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`;

/* global graphql */

import React from "react";
import Browser from "gatsby-browser";
import Features from "../components/features";
import HowTo from "../components/how-to";
import Nav from "../components/nav";

const IndexPage = props => (
  <main>
    <Nav />
    <HowTo data={props.data.allDataJson.edges[0].node.howTo} />
  </main>
);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allDataJson {
      edges {
        node {
          features {
            title
          }
          howTo {
            title
          }
        }
      }
    }
  }
`;

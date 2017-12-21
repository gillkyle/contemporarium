/* global graphql */

import React from "react";
import Features from "../components/features";
import HowTo from "../components/how-to";
import Menu from "../components/menu";

const IndexPage = props => (
  <main>
    <Menu />
    <HowTo data={props.data.allDataJson.edges[0].node.howTo} />
  </main>
);

export default IndexPage;

export const pageQuery = graphql`
  query MenuQuery {
    allDataJson {
      edges {
        node {
          menu {
            title
            description
            price
            calories
          }
        }
      }
    }
  }
`;

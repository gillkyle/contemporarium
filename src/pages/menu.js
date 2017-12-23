/* global graphql */

import React from "react";
import Features from "../components/features";
import HowTo from "../components/page-blocks/how-to";
import Nav from "../components/nav";

const MenuPage = props => (
  <main>
    <Nav />
    <HowTo data={props.data.allDataJson.edges[0].node.menu} />
  </main>
);

export default MenuPage;

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

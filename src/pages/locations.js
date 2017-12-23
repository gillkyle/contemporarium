/* global graphql */

import React from "react";
import Features from "../components/features";
import Locations from "../components/page-blocks/locations-list";
import Nav from "../components/nav";

const MenuPage = props => (
  <main>
    <Nav />
    <Locations data={props.data.allDataJson.edges[0].node.locations} />
  </main>
);

export default MenuPage;

export const pageQuery = graphql`
  query LocationsQuery {
    allDataJson {
      edges {
        node {
          locations {
            title
            description
            address
            phone
          }
        }
      }
    }
  }
`;

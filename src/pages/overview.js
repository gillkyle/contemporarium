/* global graphql */

import React from "react";
import Nav from "../components/nav";
import Breadcrumb from "../components/breadcrumb";
import LocationsList from "../components/page-blocks/locations-list";

const LocationsPage = props => (
  <main>
    <Nav />
    <Breadcrumb title="Locations" />
    <LocationsList data={props.data.dataJson.locations} />
  </main>
);

export default LocationsPage;

export const pageQuery = graphql`
  query LocationsQuery {
    dataJson {
      locations {
        title
        image
        description
        address {
          street
          statecity
          zip
        }
        phone
        email
      }
    }
  }
`;

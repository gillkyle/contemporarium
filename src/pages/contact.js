import React from "react";
import Nav from "../components/nav";
import Contact from "../components/page-blocks/contact";

const ContactPage = props => (
  <main>
    <Nav />
    <Contact />
  </main>
);

export default ContactPage;

export const pageQuery = graphql`
  query ContactsQuery {
    dataJson {
      companyInfo {
        name
        slogan
      }
    }
  }
`;

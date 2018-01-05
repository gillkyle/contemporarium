import React from "react";
import Nav from "../components/nav";
import Breadcrumb from "../components/breadcrumb";
import Contact from "../components/page-blocks/contact";

const ContactPage = props => (
  <main>
    <Nav />
    <Breadcrumb title="Contact" />
    <div className="col-12 text-center menu-footer" style={{ margin: 20 }}>
      All form submissions are stored automatically on a Google Sheet{" "}
      <a
        target="_blank"
        href="https://docs.google.com/spreadsheets/d/1VsmA57lXm2_VslfSFViYOTxSiwIKNB09SwKRESHu6AI/edit?usp=sharing"
      >
        here
      </a>
      , then an email is sent to a specific email address detailing the message.
    </div>
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

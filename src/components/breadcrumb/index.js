import React from "react";
import Link from "gatsby-link";
import { FaChevronRight } from "react-icons/lib/fa";

import "./_breadcrumb.scss";

const Breadcrumb = props => (
  <div className="container">
    <div className="row">
      <div className="col-12 breadcrumb-section">
        <Link to="/#nav" className="link">
          Home
        </Link>{" "}
        {props.title ? (
          <span>
            <FaChevronRight /> <span className="">{props.title}</span>
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  </div>
);

export default Breadcrumb;

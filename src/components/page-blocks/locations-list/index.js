import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/lib/fa";

import "./_locations-list.scss";

const LocationsList = props => (
  <section className="location page-content" id="location">
    <div className="container">
      <div className="row">
        <div className="card-deck">
          {props.data.map((item, i) => (
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{item.title}</h4>
                <div>{item.address.street}</div>
                <div>
                  {item.address.statecity} {item.address.zip}
                </div>
                <p className="card-text">
                  <small className="text-muted">{item.description}</small>
                </p>
                <a
                  href={`tel:${item.phone.replace(/\D/g, "")}`}
                  class="btn btn-outline-primary card-btn"
                >
                  <FaPhone /> {item.phone}
                </a>
                <a
                  href={`mailto:${item.email}`}
                  class="btn btn-outline-secondary"
                >
                  <FaEnvelope /> {item.email}
                </a>
              </div>
              <img
                className="card-img-bottom"
                src={item.image}
                alt="item image"
                style={{
                  height: 300,
                  background: "transparent no-repeat center",
                  backgroundSize: "cover"
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default LocationsList;

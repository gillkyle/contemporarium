import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/lib/fa";

import "./_locations-list.scss";

const LocationsList = props => (
  <section className="location" id="location">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h4 className="title">Locations</h4>
        </div>
      </div>
      <div className="row">
        <div className="card-deck">
          {props.data.map((item, i) => (
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{item.title}</h4>
                <div>{item.address.street}</div>
                <div>{item.address.statecity}</div>
                <div>{item.address.zip}</div>
                <p className="card-text">
                  <small className="text-muted">{item.description}</small>
                </p>
                <button
                  href={`tel:${item.phone}`}
                  class="btn btn-outline-primary"
                >
                  <FaPhone /> {item.phone}
                </button>
                <button
                  style={{ marginLeft: 10 }}
                  href={`mailto:${item.email}`}
                  class="btn btn-outline-secondary"
                >
                  <FaEnvelope /> {item.email}
                </button>
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

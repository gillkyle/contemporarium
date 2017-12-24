import React from "react";

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
        {props.data.map((item, i) => (
          <div className="col-6 location-list">
            <div className="location-list-item card" key={i}>
              <div className="location-list-item-title">{item.title}</div>
              <div className="location-list-item-info">
                <div>{item.address.street}</div>
                <div>{item.address.statecity}</div>
                <div>{item.address.zip}</div>
              </div>
              <div className="location-list-item-desc">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LocationsList;

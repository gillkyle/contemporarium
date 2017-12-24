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
            <div className="location-list-item custom-card" key={i}>
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
        <div class="card-deck">
          <div class="card">
            <img
              class="card-img-top"
              src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=1500&q=80"
              alt="Card image cap"
            />
            <div class="card-body">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="..." alt="Card image cap" />
            <div class="card-body">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LocationsList;

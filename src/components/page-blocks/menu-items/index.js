import React from "react";
import { FaCutlery } from "react-icons/lib/fa";

import "./_menu-items.scss";

const MenuItems = props => (
  <section className="menu-items" id="menu-items">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h4 className="title fancy">
            <span className="menu-items-title">{props.title}</span>
          </h4>
          <h5>{props.description}</h5>
        </div>
      </div>
      <div className="row">
        {props.data.map((item, i) => (
          <div className="col-lg-4 col-md-6 col-sm-12 menu-items-list" key={i}>
            <div className="menu-items-list-item custom-card">
              <div className="menu-items-list-item-title">
                {item.title}
                <span
                  style={{
                    float: "right",
                    fontSize: 14,
                    fontWeight: 300,
                    color: "#0c720c"
                  }}
                >
                  <FaCutlery />
                </span>
              </div>
              <div className="menu-items-list-item-info">
                {item.price} - ({item.calories} cal.)
              </div>
              <div className="menu-items-list-item-desc">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MenuItems;

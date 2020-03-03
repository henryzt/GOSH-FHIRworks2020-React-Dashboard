import React, { Component } from "react";
import "./home.css";
import icon_user from "../img/icon_user.png";
import icon_search from "../img/icon_search.png";
import icon_stats from "../img/icon_stats.png";
import { Layout, message, Pagination, Row, Col } from "antd";

import { BrowserRouter as NavLink } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="center">FHIR Dashboard</div>
        <div className="center_float">
          <div className="menu_card">
            <NavLink to="/patients">
              <img src={icon_user} alt="user" />
              <div className="text">Patients</div>
            </NavLink>
          </div>
          <div className="menu_card">
            <img src={icon_search} alt="user" />
            <div className="text">Search</div>
          </div>
          <div className="menu_card">
            <img src={icon_stats} alt="user" />
            <div className="text">Statistics</div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;

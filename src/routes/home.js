import React, { Component } from "react";
import "./home.css";
import icon_user from "../img/icon_user.png";
import icon_search from "../img/icon_search.png";
import icon_stats from "../img/icon_stats.png";
import Header from "../components/Header";
import { Layout, message, Pagination, Row, Col } from "antd";

import { BrowserRouter as Link } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header title="FHIR Dashboard" isHome="true"></Header>
        <div className="center_float">
          <div className="menu_card">
            <Link to="/patients">
              <img src={icon_user} alt="user" />
              <div className="text">Patients</div>
            </Link>
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

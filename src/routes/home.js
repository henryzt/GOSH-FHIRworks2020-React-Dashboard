import React, { Component } from "react";
import "./home.css";
import { Layout, message, Pagination, Row, Col } from "antd";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="center">FHIR Dashboard</div>
        <div className="center_float">
          <div className="menu_card">Patients</div>
          <div className="menu_card">Patients</div>
          <div className="menu_card">Patients</div>
        </div>
      </div>
    );
  }
}

export default HomePage;
